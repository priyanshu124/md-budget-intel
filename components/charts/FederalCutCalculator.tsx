"use client";
import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Federal exposure by agency — FY25 federal-fund allocations ($B)
const AGENCIES = [
  { key: "MDH",   label: "Maryland Dept. of Health",       fed: 9.10, pct: 55, note: "Medicaid, CHIP, SAMHSA, CDC grants" },
  { key: "DHS",   label: "Dept. of Human Services",        fed: 2.80, pct: 79, note: "SNAP, TANF, Title IV-E" },
  { key: "MDOT",  label: "Dept. of Transportation",        fed: 1.95, pct: 24, note: "FHWA, FTA, FAA, Amtrak" },
  { key: "MSDE",  label: "Dept. of Education",             fed: 1.40, pct: 12, note: "Title I, IDEA, Head Start" },
  { key: "DLLR",  label: "Labor (MDL)",                    fed: 0.85, pct: 68, note: "UI admin, WIOA, BLS" },
  { key: "MDE",   label: "Dept. of the Environment",       fed: 0.42, pct: 46, note: "EPA SRF, CWA, CAA grants" },
  { key: "DPSCS", label: "Public Safety / Corrections",    fed: 0.31, pct: 9,  note: "BJA, SCAAP, VAWA" },
  { key: "MDA",   label: "Dept. of Agriculture",           fed: 0.15, pct: 38, note: "USDA, NRCS, APHIS" },
];

const REVENUE_BASE = 57.1; // $B
const RESERVE = 132;       // $M
const TOTAL_FED = AGENCIES.reduce((s, a) => s + a.fed, 0);

export default function FederalCutCalculator() {
  const [globalPct, setGlobalPct] = useState(15);
  const [perAgency, setPerAgency] = useState<Record<string, number>>(
    Object.fromEntries(AGENCIES.map((a) => [a.key, 15]))
  );
  const [mode, setMode] = useState<"global" | "granular">("global");

  const results = useMemo(() => {
    const rows = AGENCIES.map((a) => {
      const pct = mode === "global" ? globalPct : perAgency[a.key];
      const lossB = +(a.fed * (pct / 100)).toFixed(3);
      const lossM = Math.round(lossB * 1000);
      return { ...a, cutPct: pct, lossB, lossM };
    });
    const totalLossB = +rows.reduce((s, r) => s + r.lossB, 0).toFixed(2);
    const totalLossM = Math.round(totalLossB * 1000);
    const reserveMonths = totalLossM > 0 ? +(RESERVE / (totalLossM / 12)).toFixed(1) : Infinity;
    const pctOfRev = +((totalLossB / REVENUE_BASE) * 100).toFixed(2);
    return { rows, totalLossB, totalLossM, reserveMonths, pctOfRev };
  }, [globalPct, perAgency, mode]);

  return (
    <ChartFrame
      title="Federal Cut Calculator — Interactive"
      deck="Maryland receives ~$17B/yr in federal funds (≈33% of the budget). Simulate any percentage cut — globally or agency-by-agency — to see the immediate hit to revenue and reserves."
      source="JCR 2025 · pp.xxxiv–xxxv (federal fund tables) | ACFR 2025 · pp.140–178 | FY26 Governor's Budget · Federal Fund Analysis"
    >
      {/* Mode switcher */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        {(["global", "granular"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              padding: "6px 14px",
              background: mode === m ? "var(--nxt-purple)" : "white",
              color: mode === m ? "white" : "#4a4a4a",
              border: `1px solid ${mode === m ? "var(--nxt-purple)" : "#ccc"}`,
              borderRadius: 4,
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            {m === "global" ? "UNIFORM CUT" : "PER-AGENCY"}
          </button>
        ))}
      </div>

      {/* Global slider */}
      {mode === "global" && (
        <div
          style={{
            padding: "14px 16px",
            background: "rgba(196,18,48,0.06)",
            borderLeft: "3px solid #C41230",
            borderRadius: "0 4px 4px 0",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#C41230", fontWeight: 700, letterSpacing: "0.08em" }}>
            FEDERAL CUT
          </div>
          <input
            type="range"
            min={0} max={100} step={1}
            value={globalPct}
            onChange={(e) => setGlobalPct(Number(e.target.value))}
            style={{ flex: 1, minWidth: 240, accentColor: "#C41230" }}
          />
          <div style={{ fontFamily: "Georgia, serif", fontSize: 18, color: "#C41230", fontWeight: 800, minWidth: 60, textAlign: "right" }}>
            {globalPct}%
          </div>
        </div>
      )}

      {/* Per-agency sliders */}
      {mode === "granular" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: 16 }}>
          {AGENCIES.map((a) => (
            <div
              key={a.key}
              style={{
                padding: "8px 12px",
                border: "1px solid #e5e5e5",
                borderRadius: 4,
                background: "white",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 12, color: "#121212", fontWeight: 700 }}>
                  {a.label}
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#C41230", fontWeight: 700 }}>
                  {perAgency[a.key]}%
                </div>
              </div>
              <input
                type="range"
                min={0} max={100} step={1}
                value={perAgency[a.key]}
                onChange={(e) => setPerAgency({ ...perAgency, [a.key]: Number(e.target.value) })}
                style={{ width: "100%", accentColor: "#C41230" }}
              />
              <div style={{ fontFamily: "Georgia, serif", fontSize: 9, color: "#888", fontStyle: "italic", marginTop: 2 }}>
                ${a.fed.toFixed(2)}B federal · {a.pct}% of agency · {a.note}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Impact summary strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {[
          { label: "Total Federal Loss", value: `−$${results.totalLossB.toFixed(2)}B`, color: "#C41230" },
          { label: "% of Total Revenue", value: `${results.pctOfRev.toFixed(1)}%`, color: "#C4820A" },
          { label: "Reserve Months Until Empty", value: results.reserveMonths === Infinity ? "∞" : `${results.reserveMonths.toFixed(1)} mo`, color: results.reserveMonths < 3 ? "#C41230" : "#1D4F91" },
          { label: "Federal Exposure Base", value: `$${TOTAL_FED.toFixed(1)}B`, color: "#6B3FA0" },
        ].map((k) => (
          <div
            key={k.label}
            style={{
              padding: "10px 14px",
              background: "white",
              border: `1.5px solid ${k.color}`,
              borderRadius: 5,
            }}
          >
            <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#666", letterSpacing: "0.08em", fontWeight: 700 }}>
              {k.label}
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 22, color: k.color, fontWeight: 900, marginTop: 2 }}>
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Plot: impact by agency */}
      <Plot
        data={[
          {
            x: results.rows.map((r) => r.label),
            y: results.rows.map((r) => -r.lossM),
            type: "bar",
            marker: {
              color: results.rows.map((r) => (r.lossM > 500 ? "#C41230" : r.lossM > 200 ? "#C4820A" : "#1D4F91")),
              line: { color: "#121212", width: 0.4 },
            },
            text: results.rows.map((r) => `−$${r.lossM}M`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10 },
            hovertemplate:
              "<b>%{x}</b><br>Loss: $%{text}<br>Federal base: $%{customdata[0]}B<br>Cut applied: %{customdata[1]}%<extra></extra>",
            customdata: results.rows.map((r) => [r.fed.toFixed(2), r.cutPct]),
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 30, b: 120, l: 70 },
          xaxis: { tickangle: -22, showgrid: false },
          yaxis: {
            title: { text: "Revenue Impact ($M, negative)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
          },
          showlegend: false,
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 420 }}
      />
    </ChartFrame>
  );
}
