"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const SYS = [
  { name: "FMIS (R*Stars)",   age: 35, cost: 180, pri: 1 },
  { name: "SIS / Mainframe",  age: 38, cost: 150, pri: 1 },
  { name: "SAIL / RAPIDS",    age: 30, cost: 110, pri: 1 },
  { name: "ADPICS",           age: 28, cost: 120, pri: 2 },
  { name: "CARES / BEACON",   age: 22, cost: 95,  pri: 2 },
  { name: "MMIS Medicaid",    age: 18, cost: 90,  pri: 2 },
  { name: "MOSST",            age: 24, cost: 85,  pri: 2 },
  { name: "CJIS",             age: 25, cost: 75,  pri: 2 },
  { name: "PARIS Police",     age: 20, cost: 65,  pri: 3 },
  { name: "BEACON HR",        age: 19, cost: 45,  pri: 3 },
];
const PRI_COLOR: Record<number, string> = { 1: "#C41230", 2: "#C4820A", 3: "#1D4F91" };

export default function LegacyBubblesChart() {
  return (
    <ChartFrame
      title="IT Replacement Priority — Age × Cost × Risk"
      deck="Bubble size = replacement cost ($M) · Red = Priority 1 critical · Systems in the upper-right quadrant are oldest AND most expensive to replace"
      source="JCR 2025 F50 · pp.60–90 | Ch.497 Legacy IT Inventory · July 2025 DoIT Report"
    >
      <Plot
        data={[
          {
            x: SYS.map((s) => s.age),
            y: SYS.map((s) => s.cost),
            mode: "text+markers",
            type: "scatter",
            text: SYS.map((s) => s.name),
            textposition: "top center",
            textfont: { family: "Georgia, serif", size: 9, color: "#121212" },
            marker: {
              size: SYS.map((s) => Math.sqrt(s.cost) * 4),
              color: SYS.map((s) => PRI_COLOR[s.pri]),
              opacity: 0.7,
              line: { color: "#121212", width: 1 },
            },
            hovertemplate: "<b>%{text}</b><br>Age: %{x}yr<br>Replacement: $%{y}M<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 30, b: 55, l: 70 },
          xaxis: {
            title: { text: "System Age (years)" } as never,
            gridcolor: "#EFEFEF",
            range: [14, 44],
          },
          yaxis: {
            title: { text: "Replacement Cost ($M)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
          },
          showlegend: false,
          shapes: [
            {
              type: "line",
              x0: 30, x1: 30,
              yref: "paper", y0: 0, y1: 1,
              line: { color: "#C41230", width: 1, dash: "dash" },
            },
            {
              type: "line",
              xref: "paper", x0: 0, x1: 1,
              y0: 100, y1: 100,
              line: { color: "#C4820A", width: 1, dash: "dash" },
            },
          ],
          annotations: [
            { x: 30, xref: "x", y: 1, yref: "paper", text: "30yr enterprise lifecycle", showarrow: false, font: { color: "#C41230", size: 9 }, yanchor: "bottom", xshift: 4 },
            { xref: "paper", x: 0.02, y: 100, yref: "y", text: "$100M+ tier", showarrow: false, font: { color: "#C4820A", size: 9 }, yshift: -10, xanchor: "left" },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 420 }}
      />
    </ChartFrame>
  );
}
