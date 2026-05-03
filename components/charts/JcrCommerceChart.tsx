"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const programs = [
  "Economic Dev.<br>(general)",
  "Supplemental<br>No.1 Programs",
  "Small Business /<br>Entrepreneurship",
  "Intl Trade &<br>Investment",
  "Tourism & Film<br>Office",
  "MEDCO Operating<br>Support",
];
const cuts = [15.0, 4.3, 3.5, 2.2, 1.5, 1.191];
const total = cuts.reduce((a, b) => a + b, 0);

export default function JcrCommerceChart() {
  return (
    <ChartFrame
      title="Dept. of Commerce — $27.5M Cut"
      deck="Largest percentage reduction among major agencies · Cut by Program Area | Regular Budget $23.2M + Supplemental No.1 $4.3M — see JCR p.265 for line-item detail"
      source="JCR 2025 · p.265 — Dept. of Commerce budget analysis"
    >
      <Plot
        data={[
          {
            x: cuts,
            y: programs,
            type: "bar",
            orientation: "h",
            marker: { color: "#C41230", line: { color: "#121212", width: 0.5 } },
            text: cuts.map((v) => `−$${v.toFixed(1)}M`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 11 },
            hovertemplate: "<b>%{y}</b><br>−$%{x:.2f}M<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 80, b: 40, l: 160 },
          xaxis: {
            title: { text: "Cut ($ Millions)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
          },
          yaxis: { autorange: "reversed" },
          showlegend: false,
          annotations: [
            {
              xref: "paper", yref: "paper", x: 0.97, y: 0.04,
              text: `<b>Combined total: −$${total.toFixed(2)}M</b>`,
              showarrow: false,
              font: { color: "#C41230", size: 12, family: "Georgia, serif" },
              bgcolor: "rgba(255,255,255,0.9)",
              bordercolor: "#C41230",
              borderwidth: 1,
              borderpad: 6,
              xanchor: "right",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 340 }}
      />
    </ChartFrame>
  );
}
