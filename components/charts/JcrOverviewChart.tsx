"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// JCR FY2024 vs FY2025 cuts & restrictions by category
const categories = ["Agency Cuts", "Restricted Funds", "Supplemental Reductions", "Fund Transfers Out", "Contingent Reductions"];
const v24 = [580, 420, 125, 300, 180];
const v25 = [1273, 735, 287, 469, 312];

export default function JcrOverviewChart() {
  return (
    <ChartFrame
      title="JCR Budget Action — Year over Year"
      deck="JCR 2025 doubled down on fiscal restraint across every lever · Total legislative actions grew from $1.6B (FY2024) to $3.1B (FY2025)"
      source="JCR 2024 (April 2024) + JCR 2025 (April 2025) — Summary tables pp. xxxiii–xxxiv"
    >
      <Plot
        data={[
          {
            x: categories, y: v24, type: "bar", name: "JCR 2024",
            marker: { color: "#1D4F91" },
            text: v24.map((v) => `$${v}M`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10 },
            hovertemplate: "<b>JCR 2024</b><br>%{x}: $%{y:,}M<extra></extra>",
          },
          {
            x: categories, y: v25, type: "bar", name: "JCR 2025",
            marker: { color: "#C41230" },
            text: v25.map((v) => `$${v}M`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10 },
            hovertemplate: "<b>JCR 2025</b><br>%{x}: $%{y:,}M<extra></extra>",
          },
        ]}
        layout={{
          barmode: "group",
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 20, b: 70, l: 70 },
          yaxis: { title: { text: "$ Millions" } as never, gridcolor: "#EFEFEF", tickformat: "$,.0f" },
          xaxis: { showgrid: false, tickangle: -15 },
          legend: { orientation: "h", y: -0.28, x: 0.5, xanchor: "center" },
          hovermode: "x unified",
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 360 }}
      />
    </ChartFrame>
  );
}
