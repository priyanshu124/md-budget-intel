"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// DDA sub-programs with FY24 vs FY25 spend
const programs = [
  "Community Services",
  "Self-Directed Svcs",
  "Supports Waiver",
  "Residential Svcs",
  "Day/Employment",
  "Family Supports",
  "Transition Age Youth",
  "Transformation/Admin",
];
const fy24 = [1820, 395, 188, 262, 124, 68, 32, 11];
const fy25 = [2215, 461, 240, 329, 157, 85, 58, 36];
const growth = fy25.map((v, i) => ((v - fy24[i]) / fy24[i]) * 100);

export default function DdaSubBreakdownChart() {
  return (
    <ChartFrame
      title="DDA Sub-Program Breakdown — FY2024 vs FY2025"
      deck="Every major sub-program grew faster than the agency's approved appropriation · Self-directed and transition-age youth led the acceleration"
      source="JCR 2025 · pp.153–162 (M00M) | Appendix B — DDA sub-program detail"
    >
      <Plot
        data={[
          {
            y: programs,
            x: fy24,
            type: "bar",
            orientation: "h",
            name: "FY2024",
            marker: { color: "#1D4F91" },
            text: fy24.map((v) => `$${v}M`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 9 },
            hovertemplate: "<b>%{y}</b><br>FY24: $%{x:,}M<extra></extra>",
          },
          {
            y: programs,
            x: fy25,
            type: "bar",
            orientation: "h",
            name: "FY2025",
            marker: { color: "#C41230" },
            text: fy25.map((v, i) => `$${v}M  (+${growth[i].toFixed(0)}%)`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 9 },
            hovertemplate: "<b>%{y}</b><br>FY25: $%{x:,}M<extra></extra>",
          },
        ]}
        layout={{
          barmode: "group",
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 10, color: "#121212" },
          margin: { t: 18, r: 110, b: 40, l: 170 },
          xaxis: { title: { text: "$ Millions" } as never, gridcolor: "#EFEFEF", tickformat: "$,.0f" },
          yaxis: { autorange: "reversed", tickfont: { size: 10 } },
          legend: { orientation: "h", y: -0.12, x: 0.5, xanchor: "center" },
          hovermode: "y unified",
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 420 }}
      />
    </ChartFrame>
  );
}
