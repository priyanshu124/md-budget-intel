"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const fy = ["FY2022","FY2023","FY2024","FY2025\n(Actual)","FY2026\n(Working)","FY2027\n(Allowance)"];
const totalSpend = [1700.0, 2200.0, 2900.0, 3580.3, 3410.7, 3263.2];
const costContain = [0.0, 0.0, 0.0, 3.1, 79.4, 299.0];
const organic = totalSpend.map((t, i) => t - costContain[i]);

export default function DdaBudgetChart() {
  return (
    <ChartFrame
      title="DDA Total Spending — Community Services Program"
      deck="Spending nearly doubled in 3 years · $736.6M in deficiencies carried forward · $299M cost containment proposed for FY2027"
      source="JCR 2025 · pp.153–162 (M00M) | FY2027 Maryland Executive Budget Analysis — DDA | mgaleg.maryland.gov"
    >
      <Plot
        data={[
          {
            x: fy,
            y: organic,
            type: "bar",
            name: "Organic spending",
            marker: { color: "#0A2A4A", line: { color: "#121212", width: 0.5 } },
            text: organic.map((v) => `$${(v/1000).toFixed(2)}B`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10, color: "#121212" },
            hovertemplate: "<b>%{x}</b><br>Organic: $%{y:,.0f}M<extra></extra>",
          },
          {
            x: fy,
            y: costContain,
            type: "bar",
            name: "Cost containment reduction",
            marker: { color: "#C41230", pattern: { shape: "/", size: 6 } },
            text: costContain.map((v) => v > 0 ? `−$${v.toFixed(0)}M` : ""),
            textposition: "inside",
            textfont: { family: "Georgia, serif", size: 9, color: "white" },
            hovertemplate: "<b>%{x}</b><br>Cost containment: $%{y:,.0f}M<extra></extra>",
          },
        ]}
        layout={{
          barmode: "stack",
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 24, r: 20, b: 60, l: 65 },
          yaxis: {
            title: { text: "$ Millions" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
          },
          xaxis: { showgrid: false },
          legend: { orientation: "h", y: -0.18, x: 0.5, xanchor: "center" },
          hovermode: "x unified",
          annotations: [
            {
              x: "FY2022" as never, y: 1700,
              ax: "FY2025" as never, ay: 3580,
              axref: "x" as never, ayref: "y" as never,
              xref: "x", yref: "y",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#C41230",
              arrowwidth: 2,
              text: "",
            },
            {
              x: 1.5,
              y: 2900,
              xref: "x",
              yref: "y",
              text: "+96%<br>in 3 yrs",
              showarrow: false,
              font: { color: "#C41230", size: 13, family: "Georgia, serif" },
              bgcolor: "rgba(255,255,255,0.9)",
              bordercolor: "#C41230",
              borderwidth: 1,
              borderpad: 6,
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 360 }}
      />
    </ChartFrame>
  );
}
