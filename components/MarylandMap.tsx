"use client";
/**
 * Maryland Map — simple, cartographic, 100% static-sourced.
 *
 * All data is pre-fetched and stored under /public/data/map/ (see
 * data/warehouse/ingest-map-timeseries.mjs for the pull commands). Every
 * number rendered here comes from one of four authoritative APIs:
 *   • U.S. Census ACS 5-Year 2015 → 2024 (population, poverty, median HHI)
 *   • MD DLS State Aid to Local Governments FY2014 → FY2027 (9 agencies)
 * Sources are cited inline at the bottom of the map frame.
 *
 * Controls (nothing else):
 *   • Layer:  Population | Poverty Rate | Median Household Income | State Aid
 *   • Year:   2015–2027 (each layer exposes only the years it has data for)
 *   • Pre-COVID ↔ Post-COVID quick toggle (snaps year to 2019 or 2023)
 *   • Agency: only visible when Layer = State Aid (9 options + "All Agencies")
 */

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import type { FeatureCollection, Feature, Geometry } from "geojson";

// ─── Data shapes ─────────────────────────────────────────────────────────
type AnnualByFips = {
  years: number[];
  by_fips: Record<string, { name: string | null; by_year: Record<string, number | null> }>;
};
type StateAidTs = {
  years: number[];
  agencies: string[];
  by_fips: Record<string, Record<string, Record<string, number>>>; // [fips][fy][agency|_total]
};
type Sources = {
  built_at: string;
  datasets: Array<{
    id: string;
    label: string;
    publisher: string;
    variable?: string;
    variables?: string[];
    derivation?: string;
    vintage_years?: number[];
    fiscal_years?: number[];
    agencies?: string[];
    endpoints?: Record<string, string> | Array<{ years: number[]; url: string }>;
    landing_page?: string;
    publication_url_latest?: string;
    audit_url_template?: string;
    license?: string;
    note?: string;
  }>;
};

// ─── Layer config ────────────────────────────────────────────────────────
type LayerKey = "population" | "poverty" | "median_income" | "state_aid";
type Layer = {
  key: LayerKey;
  label: string;
  unit: string;
  fmt: (v: number) => string;
  colors: [string, string, string, string, string]; // 5-class sequential
  // Census layers: single file per layer. State aid: pulled from its own TS.
  file?: "population_timeseries.json" | "poverty_timeseries.json" | "median_income_timeseries.json";
  years: number[];
  sourceTag: string;
};

const LAYERS: Record<LayerKey, Layer> = {
  population: {
    key: "population",
    label: "Population",
    unit: "people",
    fmt: (v) => v.toLocaleString(),
    colors: ["#eef4fb", "#c9dbee", "#8fb3d8", "#4f82b9", "#1d4f91"],
    file: "population_timeseries.json",
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    sourceTag: "U.S. Census Bureau · ACS 5-Year · Table B01003",
  },
  poverty: {
    key: "poverty",
    label: "Poverty Rate",
    unit: "%",
    fmt: (v) => `${v.toFixed(1)}%`,
    colors: ["#fdecea", "#f8c2b8", "#e88b7b", "#c75948", "#8a1e10"],
    file: "poverty_timeseries.json",
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    sourceTag: "U.S. Census Bureau · ACS 5-Year · Table B17001",
  },
  median_income: {
    key: "median_income",
    label: "Median Household Income",
    unit: "$",
    fmt: (v) => `$${v.toLocaleString()}`,
    colors: ["#f1ecf6", "#d4c2e0", "#ad8dc4", "#7d52a0", "#4e134b"],
    file: "median_income_timeseries.json",
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    sourceTag: "U.S. Census Bureau · ACS 5-Year · Table B19013",
  },
  state_aid: {
    key: "state_aid",
    label: "State Aid to Local Government",
    unit: "$",
    fmt: (v) => `$${(v / 1e6).toFixed(1)}M`,
    colors: ["#edf7ed", "#c3e0c2", "#8fc290", "#4f9c5b", "#1a5e2a"],
    years: Array.from({ length: 2027 - 2014 + 1 }, (_, i) => 2014 + i),
    sourceTag: "MD Dept. of Legislative Services · State Aid to Local Governments",
  },
};

// Neighbors drawn in muted gray for context (still recognizable as a map)
const MD_FIPS_PREFIX = "24";
const CONTEXT_STATES = new Set(["10", "11", "42", "51", "54", "34"]); // DE, DC, PA, VA, WV, NJ

const PRE_COVID_YEAR = 2019;
const POST_COVID_YEAR = 2023;

export default function MarylandMap() {
  // Refs
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number; html: string } | null>(null);
  const [fullscreen, setFullscreen] = useState(false);

  // Controls
  const [layerKey, setLayerKey] = useState<LayerKey>("population");
  const [year, setYear] = useState<number>(2024);
  const [agency, setAgency] = useState<string>("All Agencies");

  // Fetched data
  const [layerData, setLayerData] = useState<AnnualByFips | null>(null);
  const [aid, setAid] = useState<StateAidTs | null>(null);
  const [sources, setSources] = useState<Sources | null>(null);
  const [us, setUs] = useState<FeatureCollection<Geometry> | null>(null);

  const layer = LAYERS[layerKey];

  // ─── Fetch ────────────────────────────────────────────────────────────
  useEffect(() => {
    Promise.all([
      fetch("/data/map/state_aid_timeseries.json").then((r) => r.json()),
      fetch("/data/map/sources.json").then((r) => r.json()),
      fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json").then((r) => r.json()),
    ])
      .then(([aidJson, srcJson, topo]) => {
        setAid(aidJson);
        setSources(srcJson);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fc = feature(topo as any, (topo as any).objects.counties) as unknown as FeatureCollection<Geometry>;
        setUs(fc);
      })
      .catch((e) => console.error("Map data load failed:", e));
  }, []);

  useEffect(() => {
    if (!layer.file) { setLayerData(null); return; }
    fetch(`/data/map/${layer.file}`)
      .then((r) => r.json())
      .then(setLayerData)
      .catch((e) => console.error(`Layer ${layerKey} fetch failed:`, e));
  }, [layerKey, layer.file]);

  // Snap year into valid range when layer changes
  useEffect(() => {
    const ys = layer.years;
    if (!ys.includes(year)) setYear(ys[ys.length - 1]);
  }, [layerKey]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Build choropleth data for the current selection ─────────────────
  const choropleth = useMemo(() => {
    const byFips: Record<string, number | null> = {};
    if (layerKey === "state_aid") {
      if (!aid) return { byFips: {}, values: [], missingYears: true };
      for (const [fips, byYear] of Object.entries(aid.by_fips)) {
        const y = byYear[year];
        if (!y) { byFips[fips] = null; continue; }
        if (agency === "All Agencies") byFips[fips] = y._total ?? 0;
        else byFips[fips] = y[agency] ?? 0;
      }
    } else {
      if (!layerData) return { byFips: {}, values: [], missingYears: false };
      for (const [fips, row] of Object.entries(layerData.by_fips)) {
        const v = row.by_year[String(year)];
        byFips[fips] = typeof v === "number" ? v : null;
      }
    }
    const values = Object.values(byFips).filter((v): v is number => typeof v === "number");
    return { byFips, values, missingYears: false };
  }, [layerKey, layerData, aid, agency, year]);

  // 5-class Jenks-ish using quantiles (good enough for these ranges)
  const colorScale = useMemo(() => {
    const vs = choropleth.values;
    if (vs.length === 0) return () => "#f2f2f2";
    const sorted = [...vs].sort((a, b) => a - b);
    const q = (p: number) => d3.quantileSorted(sorted, p) ?? 0;
    const breaks = [q(0.2), q(0.4), q(0.6), q(0.8)];
    return (v: number | null) => {
      if (v === null || !Number.isFinite(v)) return "#f2f2f2";
      if (v <= breaks[0]) return layer.colors[0];
      if (v <= breaks[1]) return layer.colors[1];
      if (v <= breaks[2]) return layer.colors[2];
      if (v <= breaks[3]) return layer.colors[3];
      return layer.colors[4];
    };
  }, [choropleth.values, layer.colors]);

  const legendBreaks = useMemo(() => {
    const vs = choropleth.values;
    if (vs.length === 0) return null;
    const sorted = [...vs].sort((a, b) => a - b);
    const q = (p: number) => d3.quantileSorted(sorted, p) ?? 0;
    return [q(0), q(0.2), q(0.4), q(0.6), q(0.8), q(1)];
  }, [choropleth.values]);

  // ─── Render map ──────────────────────────────────────────────────────
  useEffect(() => {
    const svgEl = svgRef.current;
    const wrap = wrapRef.current;
    if (!svgEl || !wrap || !us) return;

    const width = wrap.clientWidth;
    const height = fullscreen ? wrap.clientHeight : 520;

    const svg = d3.select(svgEl);
    svg.selectAll("*").remove();
    svg.attr("viewBox", `0 0 ${width} ${height}`).attr("preserveAspectRatio", "xMidYMid meet");

    // Subtle water/ocean background rect
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "#f6f8fb");

    const allCounties = us.features as Feature<Geometry, { NAME?: string }>[];
    const mdCounties = allCounties.filter((f) => String(f.id).startsWith(MD_FIPS_PREFIX));
    const ctxCounties = allCounties.filter((f) => CONTEXT_STATES.has(String(f.id).slice(0, 2)));

    // Fit Maryland with some context padding
    const allShown = { type: "FeatureCollection", features: [...mdCounties, ...ctxCounties] } as FeatureCollection;
    const projection = d3.geoMercator().fitExtent(
      [[16, 16], [width - 16, height - 64]], // leave room for legend
      mdCounties.length ? ({ type: "FeatureCollection", features: mdCounties } as FeatureCollection) : allShown,
    );
    const path = d3.geoPath(projection);

    const g = svg.append("g");

    // Context states fill — muted
    g.append("g")
      .selectAll("path")
      .data(ctxCounties)
      .join("path")
      .attr("d", path as unknown as string)
      .attr("fill", "#eceff4")
      .attr("stroke", "#dfe4eb")
      .attr("stroke-width", 0.4)
      .attr("pointer-events", "none");

    // Maryland counties — choropleth
    const mdLayer = g.append("g")
      .selectAll("path")
      .data(mdCounties)
      .join("path")
      .attr("d", path as unknown as string)
      .attr("fill", (d) => colorScale(choropleth.byFips[String(d.id)] ?? null))
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 0.7)
      .attr("cursor", "pointer")
      .on("mousemove", function (event, d) {
        const v = choropleth.byFips[String(d.id)];
        const name = d.properties?.NAME ?? "—";
        const vText = typeof v === "number" ? layer.fmt(v) : "no data";
        const label = layerKey === "state_aid" && agency !== "All Agencies" ? `${agency} aid` : layer.label;
        const [mx, my] = d3.pointer(event, wrap);
        setTip({
          x: mx,
          y: my,
          html: `<b>${name} County</b><br/><span style="font-family:var(--mono);font-size:10px;color:#9a8a9a">${label} · ${year}</span><br/><span style="font-size:14px;font-family:Georgia,serif;color:#2a1028">${vText}</span>`,
        });
        d3.select(this).attr("stroke", "#2a1028").attr("stroke-width", 1.6);
      })
      .on("mouseleave", function () {
        setTip(null);
        d3.select(this).attr("stroke", "#ffffff").attr("stroke-width", 0.7);
      });

    // Outer MD state border
    g.append("path")
      .datum({ type: "FeatureCollection", features: mdCounties } as FeatureCollection)
      .attr("d", path as unknown as string)
      .attr("fill", "none")
      .attr("stroke", "#2a1028")
      .attr("stroke-width", 1.1)
      .attr("pointer-events", "none");

    // County labels — only the Big Six
    const BIG = new Set(["24031", "24033", "24005", "24510", "24003", "24027"]);
    g.append("g")
      .selectAll("text")
      .data(mdCounties.filter((d) => BIG.has(String(d.id))))
      .join("text")
      .attr("transform", (d) => {
        const c = path.centroid(d);
        return `translate(${c[0]},${c[1]})`;
      })
      .attr("text-anchor", "middle")
      .attr("font-family", "Georgia, serif")
      .attr("font-size", 10)
      .attr("fill", "#2a1028")
      .attr("pointer-events", "none")
      .text((d) => (d.properties?.NAME ?? ""));

    // Zoom
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 8])
      .on("zoom", (ev) => g.attr("transform", ev.transform.toString()));
    (svg as unknown as d3.Selection<SVGSVGElement, unknown, null, undefined>).call(zoom);
    svg.on("dblclick.zoom", null).on("dblclick", () => {
      (svg as unknown as d3.Selection<SVGSVGElement, unknown, null, undefined>)
        .transition().duration(400).call(zoom.transform, d3.zoomIdentity);
    });

    // Inline legend (bottom-left)
    if (legendBreaks) {
      const legend = svg.append("g").attr("transform", `translate(18, ${height - 52})`);
      const swatchW = 46, swatchH = 10;
      for (let i = 0; i < 5; i++) {
        legend.append("rect")
          .attr("x", i * swatchW)
          .attr("width", swatchW)
          .attr("height", swatchH)
          .attr("fill", layer.colors[i]);
      }
      legend.append("rect")
        .attr("width", swatchW * 5)
        .attr("height", swatchH)
        .attr("fill", "none")
        .attr("stroke", "#2a1028")
        .attr("stroke-width", 0.5);

      for (let i = 0; i < 6; i++) {
        const b = legendBreaks[i];
        legend.append("text")
          .attr("x", i * swatchW)
          .attr("y", swatchH + 12)
          .attr("font-family", "var(--mono)")
          .attr("font-size", 9)
          .attr("fill", "#2a1028")
          .attr("text-anchor", "start")
          .text(layer.fmt(b));
      }
      legend.append("text")
        .attr("x", 0)
        .attr("y", -4)
        .attr("font-family", "var(--mono)")
        .attr("font-size", 9)
        .attr("fill", "#9a8a9a")
        .attr("letter-spacing", "0.08em")
        .text(`${layer.label.toUpperCase()} · ${year}${layerKey === "state_aid" && agency !== "All Agencies" ? " · " + agency.toUpperCase() : ""}`);
    }
  }, [us, choropleth, colorScale, legendBreaks, layerKey, layer, year, agency, fullscreen]);

  // ─── Pre-/Post-COVID toggle ──────────────────────────────────────────
  // For state aid the COVID benchmark years translate FY2019 / FY2023.
  function setCovid(which: "pre" | "post") {
    const target = which === "pre" ? PRE_COVID_YEAR : POST_COVID_YEAR;
    if (layer.years.includes(target)) setYear(target);
  }

  // ─── Layout ──────────────────────────────────────────────────────────
  const frameStyle: React.CSSProperties = fullscreen
    ? { position: "fixed", inset: 0, zIndex: 9000, background: "#fff", padding: 18 }
    : {
        background: "#fff",
        border: "1px solid #e4d9e2",
        borderRadius: 10,
        padding: 16,
        position: "relative",
      };

  const yearsForSlider = layer.years;
  const agenciesWithAll = aid ? ["All Agencies", ...aid.agencies] : ["All Agencies"];

  return (
    <div style={frameStyle}>
      {/* ─── Controls ─── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          alignItems: "center",
          marginBottom: 14,
          fontFamily: "var(--mono)",
          fontSize: 10,
        }}
      >
        <label style={controlRow}>
          <span style={labelSpan}>LAYER</span>
          <select value={layerKey} onChange={(e) => setLayerKey(e.target.value as LayerKey)} style={selectStyle}>
            {Object.values(LAYERS).map((l) => (
              <option key={l.key} value={l.key}>{l.label}</option>
            ))}
          </select>
        </label>

        <label style={{ ...controlRow, minWidth: 260 }}>
          <span style={labelSpan}>YEAR</span>
          <input
            type="range"
            min={yearsForSlider[0]}
            max={yearsForSlider[yearsForSlider.length - 1]}
            step={1}
            value={year}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (yearsForSlider.includes(v)) setYear(v);
              else {
                // snap to nearest available
                const nearest = yearsForSlider.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));
                setYear(nearest);
              }
            }}
            style={{ flex: 1, minWidth: 160 }}
          />
          <span style={{ fontFamily: "Georgia, serif", fontSize: 14, color: "#2a1028", minWidth: 44, textAlign: "right" }}>
            {layerKey === "state_aid" ? "FY" : ""}{year}
          </span>
        </label>

        <div style={controlRow}>
          <span style={labelSpan}>COVID</span>
          <button
            onClick={() => setCovid("pre")}
            disabled={!yearsForSlider.includes(PRE_COVID_YEAR)}
            style={{ ...chipBtn, ...(year === PRE_COVID_YEAR ? chipActive : {}) }}
          >
            Pre · {PRE_COVID_YEAR}
          </button>
          <button
            onClick={() => setCovid("post")}
            disabled={!yearsForSlider.includes(POST_COVID_YEAR)}
            style={{ ...chipBtn, ...(year === POST_COVID_YEAR ? chipActive : {}) }}
          >
            Post · {POST_COVID_YEAR}
          </button>
        </div>

        {layerKey === "state_aid" && (
          <label style={controlRow}>
            <span style={labelSpan}>AGENCY</span>
            <select value={agency} onChange={(e) => setAgency(e.target.value)} style={selectStyle}>
              {agenciesWithAll.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </label>
        )}

        <button
          onClick={() => setFullscreen((f) => !f)}
          style={{ ...chipBtn, marginLeft: "auto" }}
          aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          title={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {fullscreen ? "✕ Close" : "⛶ Fullscreen"}
        </button>
      </div>

      {/* ─── Map ─── */}
      <div
        ref={wrapRef}
        style={{
          position: "relative",
          width: "100%",
          height: fullscreen ? "calc(100vh - 200px)" : 520,
          background: "#f6f8fb",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        <svg ref={svgRef} width="100%" height="100%" style={{ display: "block" }} />
        {tip && (
          <div
            style={{
              position: "absolute",
              left: Math.min(tip.x + 12, (wrapRef.current?.clientWidth ?? 800) - 220),
              top: Math.max(tip.y - 40, 4),
              background: "rgba(255,255,255,0.97)",
              border: "1px solid #d9ceda",
              borderRadius: 6,
              padding: "6px 10px",
              fontFamily: "Georgia, serif",
              fontSize: 12,
              color: "#2a1028",
              pointerEvents: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
              zIndex: 2,
              maxWidth: 240,
            }}
            dangerouslySetInnerHTML={{ __html: tip.html }}
          />
        )}
      </div>

      {/* ─── Interaction hint ─── */}
      <div
        style={{
          marginTop: 8,
          fontFamily: "var(--mono)",
          fontSize: 9,
          color: "#9a8a9a",
          letterSpacing: "0.05em",
        }}
      >
        Hover a county for the value · scroll to zoom · double-click to reset
      </div>

      {/* ─── Sources ─── */}
      <SourcesStrip sources={sources} />
    </div>
  );
}

// ─── Style helpers ──────────────────────────────────────────────────────
const controlRow: React.CSSProperties = { display: "flex", alignItems: "center", gap: 6 };
const labelSpan: React.CSSProperties = { color: "#9a8a9a", letterSpacing: "0.1em", fontWeight: 700 };
const selectStyle: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 11,
  padding: "5px 8px",
  background: "#fff",
  border: "1px solid #d9ceda",
  borderRadius: 4,
  color: "#2a1028",
  cursor: "pointer",
};
const chipBtn: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: 10,
  padding: "5px 10px",
  background: "#fff",
  border: "1px solid #d9ceda",
  borderRadius: 999,
  color: "#2a1028",
  cursor: "pointer",
  letterSpacing: "0.05em",
};
const chipActive: React.CSSProperties = {
  background: "#4e134b",
  color: "#fff",
  border: "1px solid #4e134b",
};

// ─── Sources strip under the map ───────────────────────────────────────
function SourcesStrip({ sources }: { sources: Sources | null }) {
  if (!sources) return null;
  return (
    <div
      style={{
        marginTop: 14,
        paddingTop: 12,
        borderTop: "1px solid #efe6ee",
        fontFamily: "Georgia, serif",
        fontSize: 11,
        color: "#4a4a4a",
        lineHeight: 1.5,
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 9,
          letterSpacing: "0.12em",
          color: "#4e134b",
          fontWeight: 700,
          marginBottom: 6,
        }}
      >
        SOURCES · STATIC DATA · BUILT {new Date(sources.built_at).toLocaleDateString()}
      </div>
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {sources.datasets.map((d) => (
          <li key={d.id} style={{ marginBottom: 4 }}>
            <span style={{ fontWeight: 700 }}>{d.label}:</span> {d.publisher}
            {d.variable && <> · variable <code>{d.variable}</code></>}
            {d.variables && <> · variables {d.variables.map((v) => <code key={v} style={{ marginRight: 4 }}>{v}</code>)}</>}
            {d.derivation && <> · derivation <em>{d.derivation}</em></>}
            {d.vintage_years && <> · vintage {d.vintage_years[0]}–{d.vintage_years[d.vintage_years.length - 1]}</>}
            {d.fiscal_years && <> · FY {d.fiscal_years[0]}–{d.fiscal_years[d.fiscal_years.length - 1]}</>}
            {d.agencies && <> · {d.agencies.length} agencies</>}
            {d.landing_page && <> · <a href={d.landing_page} target="_blank" rel="noreferrer" style={link}>landing page</a></>}
            {d.publication_url_latest && <> · <a href={d.publication_url_latest} target="_blank" rel="noreferrer" style={link}>latest publication PDF</a></>}
            {d.audit_url_template && <> · <a href={d.audit_url_template.replace("{fips}", "24031")} target="_blank" rel="noreferrer" style={link}>audit example (Montgomery)</a></>}
            {d.note && <> · <em style={{ color: "#777" }}>{d.note}</em></>}
          </li>
        ))}
      </ul>
    </div>
  );
}
const link: React.CSSProperties = { color: "#4e134b", textDecoration: "underline" };
