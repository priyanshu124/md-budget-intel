"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

type Sys = { name: string; owner: string; age: number; cost: number; pri: 1 | 2 | 3 };

const SYSTEMS: Sys[] = [
  { name: "FMIS (R*Stars) Financial Mgmt",   owner: "DBM/Comptroller", age: 35, cost: 180, pri: 1 },
  { name: "SIS / Mainframe Revenue Systems", owner: "Comptroller",     age: 38, cost: 150, pri: 1 },
  { name: "SAIL / RAPIDS DMV Systems",       owner: "MDOT",            age: 30, cost: 110, pri: 1 },
  { name: "ADPICS Procurement",              owner: "DBM",             age: 28, cost: 120, pri: 2 },
  { name: "CARES / BEACON Unemployment",     owner: "MDL",             age: 22, cost: 95,  pri: 2 },
  { name: "MMIS Medicaid Mgmt",              owner: "MDH",             age: 18, cost: 90,  pri: 2 },
  { name: "MOSST Social Services",           owner: "DHS",             age: 24, cost: 85,  pri: 2 },
  { name: "CJIS Criminal Justice",           owner: "GOCPYVS",         age: 25, cost: 75,  pri: 2 },
  { name: "PARIS Police Records",            owner: "MSP",             age: 20, cost: 65,  pri: 3 },
  { name: "BEACON HR / Payroll",             owner: "DBM",             age: 19, cost: 45,  pri: 3 },
];

const PRI_COLOR = { 1: "#C41230", 2: "#C4820A", 3: "#1D4F91" } as const;
const total = SYSTEMS.reduce((s, x) => s + x.cost, 0);

export default function ItLegacyChart() {
  const sorted = [...SYSTEMS].sort((a, b) => b.cost - a.cost);
  return (
    <ChartFrame
      title="Legacy System Inventory — Maryland IT Infrastructure"
      deck={`$${total}M in legacy replacement needed · $65.5M ITIF available · ~$145M/yr gap · 2 statutory deadlines missed`}
      source="JCR 2025 F50 · pp.85–90 | Ch.497 (DoIT mandated publication Jul 2025) | ACFR 2024 · pp.III–IX"
    >
      <Plot
        data={[
          {
            x: sorted.map((s) => s.cost),
            y: sorted.map((s) => s.name),
            type: "bar",
            orientation: "h",
            marker: {
              color: sorted.map((s) => PRI_COLOR[s.pri]),
              line: { color: "#121212", width: 0.5 },
            },
            text: sorted.map((s) => `$${s.cost}M  ·  ${s.age}yr  ·  ${s.owner}`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10 },
            hovertemplate: "<b>%{y}</b><br>Replacement: $%{x}M<br>Age: %{customdata[0]}yr<br>Owner: %{customdata[1]}<extra></extra>",
            customdata: sorted.map((s) => [s.age, s.owner]),
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 10, color: "#121212" },
          margin: { t: 18, r: 200, b: 50, l: 230 },
          xaxis: { title: { text: "Estimated Replacement Cost ($M)" } as never, gridcolor: "#EFEFEF", tickformat: "$,.0f" },
          yaxis: { autorange: "reversed", tickfont: { size: 10 } },
          showlegend: false,
          annotations: [
            {
              xref: "paper", yref: "paper", x: 1, y: 1.06,
              text: `<b>Total: $${total}M legacy replacement backlog</b>`,
              showarrow: false,
              font: { color: "#121212", size: 11, family: "Georgia, serif" },
              xanchor: "right",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 460 }}
      />

      {/* Priority legend */}
      <div style={{ display: "flex", gap: 24, marginTop: 12, paddingTop: 10, borderTop: "1px solid var(--line)", justifyContent: "center" }}>
        {[
          { c: "#C41230", l: "Priority 1 — Critical" },
          { c: "#C4820A", l: "Priority 2 — High" },
          { c: "#1D4F91", l: "Priority 3 — Medium" },
        ].map((p) => (
          <div key={p.l} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 12, height: 12, background: p.c, borderRadius: 2 }} />
            <span style={{ fontFamily: "Georgia, serif", fontSize: 11, color: "#121212" }}>{p.l}</span>
          </div>
        ))}
      </div>
    </ChartFrame>
  );
}
