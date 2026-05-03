"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Sorted ascending (largest cuts — most negative — at the bottom)
const items = [
  { label: "State Reserve Fund",           value: -469.5, color: "#8B1A1A" },
  { label: "DHS — Family Investment",      value: -213.4, color: "#C41230" },
  { label: "MDH — Medicaid",               value: -177.7, color: "#C41230" },
  { label: "DBM Personnel",                value: -169.2, color: "#C41230" },
  { label: "All Other Agencies",           value: -52.0,  color: "#E88B9D" },
  { label: "DHCD — PAYGO Capital",         value: -50.0,  color: "#E88B9D" },
  { label: "MSDE — Aid to Education",      value: -44.0,  color: "#E88B9D" },
  { label: "Gov. Office for Children",     value: -43.2,  color: "#E88B9D" },
  { label: "Dept. of Commerce",            value: -27.5,  color: "#E88B9D" },
  { label: "Public Debt Service",          value: -27.0,  color: "#E88B9D" },
];
const sorted = [...items].sort((a, b) => a.value - b.value);

export default function JcrCutsChart() {
  return (
    <ChartFrame
      title="The Legislature's $1.1 Billion Response — Where the Cuts Fell"
      deck="FY2026 net changes to the Governor's proposed budget · Darkest bars = agencies under the most fiscal stress"
      source="JCR 2025 · pp.xxxiii–xxxiv | Net Changes in Appropriations — FY2026 Operating Budget"
    >
      <Plot
        data={[
          {
            x: sorted.map((i) => i.value),
            y: sorted.map((i) => i.label),
            type: "bar",
            orientation: "h",
            marker: {
              color: sorted.map((i) => i.color),
              line: { color: "#121212", width: 0.5 },
            },
            text: sorted.map((i) => `−$${Math.abs(i.value).toFixed(1)}M`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10, color: "#121212" },
            hovertemplate: "<b>%{y}</b><br>$%{x:,.1f}M<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 90, b: 55, l: 190 },
          xaxis: {
            title: { text: "Net Change ($ Millions)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
            zeroline: true,
            zerolinecolor: "#121212",
            zerolinewidth: 1,
          },
          yaxis: { showgrid: false, tickfont: { size: 10 } },
          showlegend: false,
          annotations: [
            {
              x: -469.5,
              y: "State Reserve Fund",
              text: "Drawing $469.5M from a reserve already projected at −$905M",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#8B1A1A",
              font: { color: "#8B1A1A", size: 9, family: "Georgia, serif" },
              ax: 120,
              ay: -20,
              xanchor: "left",
            },
            {
              xref: "paper",
              yref: "paper",
              x: 1,
              y: 1.05,
              text: "Total cuts: −$1,273M  (+$80M FY2025 deficiency = −$1,116M net)",
              showarrow: false,
              font: { color: "#121212", size: 10, family: "Georgia, serif" },
              xanchor: "right",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 380 }}
      />
    </ChartFrame>
  );
}
