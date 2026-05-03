"use client";
/**
 * Efficiency Analysis — replaces the Chart.js scatter from the old
 * heatmap.html with a Plotly panel driven by our authoritative
 * county_bundle.json. No fabricated data — every axis value comes from
 * an API (SHIP, Census, DLS State Aid, HUD CHAS).
 *
 * X axis: investment (user-selectable $)
 * Y axis: outcome (user-selectable)
 * Bubble size: county population
 * Color: efficiency quadrant vs. state median
 *   — HIGH invest / GOOD outcome = blue  (#1D4F91)
 *   — LOW invest  / GOOD outcome = green (#1A7340)  "high efficiency"
 *   — HIGH invest / POOR outcome = gold  (#B8860B)  "under-performing"
 *   — LOW invest  / POOR outcome = red   (#C41230)
 */
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import ChartFrame from "./charts/ChartFrame";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

type Row = {
  fips: string;
  name: string;
  population?: number;
  median_hh_income?: number;
  poverty_rate_pct?: number;
  mdh_life_exp_years?: number;
  k12_grad_rate_pct?: number;
  bha_drug_death_per_100k?: number;
  dhs_child_maltreat_per_1k?: number;
  mdh_cancer_mort_per_100k?: number;
  dhcd_affordable_housing_pct?: number;
  dpscs_violent_crime_per_100k?: number;
  k12_per_pupil_spend_usd?: number;
  state_aid_fy27_usd?: number;
  state_aid_fy27_per_capita_usd?: number;
  dhcd_renter_cost_burden_pct?: number;
  dhcd_renter_severe_burden_pct?: number;
};

type Bundle = { _meta: { built_at: string }; data: Row[] };

type AxisDef = {
  key: keyof Row;
  label: string;
  unit: string;
  fmt: (v: number) => string;
  higherIsBetter?: boolean; // only relevant for Y
};

const INVESTMENT_AXES: AxisDef[] = [
  { key: "state_aid_fy27_per_capita_usd", label: "State Aid FY27 per capita", unit: "$", fmt: (v) => `$${Math.round(v).toLocaleString()}` },
  { key: "state_aid_fy27_usd",            label: "State Aid FY27 (total)",     unit: "$", fmt: (v) => `$${(v / 1e6).toFixed(1)}M` },
  { key: "k12_per_pupil_spend_usd",       label: "K-12 per-pupil spending",    unit: "$", fmt: (v) => `$${Math.round(v).toLocaleString()}` },
  { key: "median_hh_income",              label: "Median household income",    unit: "$", fmt: (v) => `$${Math.round(v).toLocaleString()}` },
];

const OUTCOME_AXES: AxisDef[] = [
  { key: "mdh_life_exp_years",        label: "Life expectancy",             unit: "years",    higherIsBetter: true,  fmt: (v) => `${v.toFixed(1)} yrs` },
  { key: "k12_grad_rate_pct",         label: "HS graduation rate",          unit: "%",        higherIsBetter: true,  fmt: (v) => `${v.toFixed(1)}%` },
  { key: "bha_drug_death_per_100k",   label: "Drug-induced death rate",     unit: "per 100k", higherIsBetter: false, fmt: (v) => `${v.toFixed(1)} /100k` },
  { key: "mdh_cancer_mort_per_100k",  label: "Cancer mortality",            unit: "per 100k", higherIsBetter: false, fmt: (v) => `${v.toFixed(1)} /100k` },
  { key: "dhs_child_maltreat_per_1k", label: "Child maltreatment rate",     unit: "per 1k",   higherIsBetter: false, fmt: (v) => `${v.toFixed(2)} /1k` },
  { key: "dpscs_violent_crime_per_100k", label: "Violent crime rate",       unit: "per 100k", higherIsBetter: false, fmt: (v) => `${Math.round(v).toLocaleString()} /100k` },
  { key: "poverty_rate_pct",          label: "Poverty rate",                unit: "%",        higherIsBetter: false, fmt: (v) => `${v.toFixed(1)}%` },
  { key: "dhcd_renter_cost_burden_pct", label: "Renter cost burden",        unit: "%",        higherIsBetter: false, fmt: (v) => `${v.toFixed(1)}%` },
];

function median(xs: number[]): number {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function quadrantColor(
  x: number, y: number, xMed: number, yMed: number, yHigherIsBetter: boolean
): { color: string; label: string } {
  const highInvest = x >= xMed;
  const goodOutcome = yHigherIsBetter ? y >= yMed : y <= yMed;
  if (highInvest && goodOutcome)   return { color: "#1D4F91", label: "High invest · Good outcome" };
  if (!highInvest && goodOutcome)  return { color: "#1A7340", label: "High efficiency" };
  if (highInvest && !goodOutcome)  return { color: "#B8860B", label: "Under-performing" };
  return { color: "#C41230", label: "Low invest · Poor outcome" };
}

export default function EfficiencyAnalysis() {
  const [bundle, setBundle] = useState<Bundle | null>(null);
  const [xKey, setXKey] = useState<AxisDef>(INVESTMENT_AXES[0]);
  const [yKey, setYKey] = useState<AxisDef>(OUTCOME_AXES[0]);

  useEffect(() => {
    fetch("/data/county_bundle.json")
      .then((r) => r.json())
      .then(setBundle)
      .catch(console.error);
  }, []);

  const { traces, xMed, yMed, countCovered } = useMemo(() => {
    if (!bundle) return { traces: [], xMed: 0, yMed: 0, countCovered: 0 };

    const rows = bundle.data.filter(
      (r) => r[xKey.key] != null && r[yKey.key] != null && r.population
    );
    const xs = rows.map((r) => Number(r[xKey.key]));
    const ys = rows.map((r) => Number(r[yKey.key]));
    const xMed = median(xs);
    const yMed = median(ys);

    // Group by quadrant for a legend that makes sense
    const groups: Record<string, { color: string; label: string; rows: Row[] }> = {};
    rows.forEach((r) => {
      const q = quadrantColor(
        Number(r[xKey.key]),
        Number(r[yKey.key]),
        xMed,
        yMed,
        !!yKey.higherIsBetter
      );
      if (!groups[q.label]) groups[q.label] = { color: q.color, label: q.label, rows: [] };
      groups[q.label].rows.push(r);
    });

    const maxPop = Math.max(...rows.map((r) => r.population || 0));

    const traces = Object.values(groups).map((g) => ({
      x: g.rows.map((r) => Number(r[xKey.key])),
      y: g.rows.map((r) => Number(r[yKey.key])),
      text: g.rows.map((r) => r.name),
      customdata: g.rows.map((r) => [
        xKey.fmt(Number(r[xKey.key])),
        yKey.fmt(Number(r[yKey.key])),
        (r.population || 0).toLocaleString(),
      ]),
      mode: "text+markers" as const,
      type: "scatter" as const,
      name: g.label,
      marker: {
        color: g.color,
        size: g.rows.map((r) => 14 + 36 * Math.sqrt((r.population || 0) / maxPop)),
        opacity: 0.72,
        line: { color: "#121212", width: 0.8 },
      },
      textposition: "top center" as const,
      textfont: { family: "Georgia, serif", size: 9, color: "#2a1028" },
      hovertemplate:
        "<b>%{text}</b><br>" +
        `${xKey.label}: %{customdata[0]}<br>` +
        `${yKey.label}: %{customdata[1]}<br>` +
        "Population: %{customdata[2]}<extra></extra>",
    }));

    return { traces, xMed, yMed, countCovered: rows.length };
  }, [bundle, xKey, yKey]);

  if (!bundle) {
    return (
      <div style={{ padding: 24, color: "#777", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
        Loading county bundle…
      </div>
    );
  }

  return (
    <ChartFrame
      title="County efficiency — investment vs. outcome"
      deck={`Bubble = county population · Color = quadrant vs. state median · ${countCovered}/24 counties with both metrics available`}
      source="U.S. Census ACS 5-Year 2020-2024 · MD DLS State Aid FY2027 Allowance · MD Open Data SHIP · HUD CHAS 2016-2020"
    >
      {/* Axis pickers */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 10, fontFamily: "var(--mono)", fontSize: 10 }}>
        <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: "#9a8a9a", letterSpacing: "0.08em", fontWeight: 700 }}>X (INVEST):</span>
          <select
            value={String(xKey.key)}
            onChange={(e) => {
              const a = INVESTMENT_AXES.find((x) => String(x.key) === e.target.value);
              if (a) setXKey(a);
            }}
            style={selectStyle}
          >
            {INVESTMENT_AXES.map((a) => (
              <option key={String(a.key)} value={String(a.key)}>
                {a.label}
              </option>
            ))}
          </select>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: "#9a8a9a", letterSpacing: "0.08em", fontWeight: 700 }}>Y (OUTCOME):</span>
          <select
            value={String(yKey.key)}
            onChange={(e) => {
              const a = OUTCOME_AXES.find((x) => String(x.key) === e.target.value);
              if (a) setYKey(a);
            }}
            style={selectStyle}
          >
            {OUTCOME_AXES.map((a) => (
              <option key={String(a.key)} value={String(a.key)}>
                {a.label} {a.higherIsBetter ? "↑ good" : "↓ good"}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Plot
        data={traces}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 12, r: 18, b: 56, l: 72 },
          xaxis: {
            title: { text: `${xKey.label} (${xKey.unit})` } as never,
            gridcolor: "#EFEFEF",
            zeroline: false,
          },
          yaxis: {
            title: { text: `${yKey.label} (${yKey.unit})` } as never,
            gridcolor: "#EFEFEF",
            zeroline: false,
          },
          shapes: [
            // Median reference lines
            {
              type: "line",
              xref: "x",
              yref: "paper",
              x0: xMed,
              x1: xMed,
              y0: 0,
              y1: 1,
              line: { color: "#8d2782", width: 1, dash: "dot" },
            },
            {
              type: "line",
              xref: "paper",
              yref: "y",
              x0: 0,
              x1: 1,
              y0: yMed,
              y1: yMed,
              line: { color: "#8d2782", width: 1, dash: "dot" },
            },
          ],
          annotations: [
            {
              xref: "paper",
              yref: "paper",
              x: 1,
              y: 1.02,
              text: `state median X=${xKey.fmt(xMed)} · Y=${yKey.fmt(yMed)}`,
              showarrow: false,
              font: { family: "var(--mono)", size: 9, color: "#8d2782" },
              xanchor: "right",
              yanchor: "bottom",
            },
          ],
          legend: { orientation: "h", y: -0.22, x: 0.5, xanchor: "center", font: { size: 10 } },
          hovermode: "closest",
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 460 }}
      />
    </ChartFrame>
  );
}

const selectStyle: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 10,
  padding: "4px 8px",
  background: "#fff",
  border: "1px solid #d9ceda",
  borderRadius: 4,
  color: "#2a1028",
  cursor: "pointer",
};
