"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const agencies = [
  "MDH (Medicaid/DDA/BHA)",
  "Corrections (DPSCS)",
  "Higher Education",
  "Human Services (DHS)",
  "Education (K–12 MSDE)",
  "Transportation (MDOT)",
  "Public Safety",
];
const values = [2252.8, 203.4, 200.1, 162.3, 75.0, 61.7, 40.7];
const colors = ["#C41230", "#0A2A4A", "#6B3FA0", "#333333", "#C4820A", "#1D6FA4", "#888888"];
const total = 2929.3;

export default function DeficiencyChart() {
  return (
    <ChartFrame
      title="One Agency Caused 77¢ of Every Dollar in Maryland's Budget Shortfall"
      deck="FY2025 deficiency appropriations totaled $2,929.3M — MDH accounted for $2,252.8M, more than all other agencies combined"
      source="FY2026 Budget Vol 2 · pp.486–487 | Summary of FY2025 Deficiency Appropriations"
    >
      {/* 77/23 split strip */}
      <div
        style={{
          display: "flex",
          height: 28,
          borderRadius: 4,
          overflow: "hidden",
          marginBottom: 14,
          border: "1px solid #DDDDDD",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            width: "77%",
            background: "#C41230",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          MDH — 77% ($2,252.8M)
        </div>
        <div
          style={{
            width: "23%",
            background: "#888888",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          All Others — 23%
        </div>
      </div>

      <Plot
        data={[
          {
            x: values,
            y: agencies,
            type: "bar",
            orientation: "h",
            marker: { color: colors, line: { color: "#121212", width: 0.5 } },
            text: values.map((v) => `$${v.toFixed(1)}M`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10, color: "#121212" },
            hovertemplate: "<b>%{y}</b><br>$%{x:,.1f}M<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 10, r: 80, b: 40, l: 180 },
          xaxis: {
            title: { text: "Deficiency Appropriation ($ Millions)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
          },
          yaxis: { autorange: "reversed", showgrid: false, tickfont: { size: 10 } },
          showlegend: false,
          annotations: [
            {
              xref: "paper",
              yref: "paper",
              x: 1,
              y: 1.05,
              text: `Total: $${total.toFixed(1)}M`,
              showarrow: false,
              font: { color: "#121212", size: 11, family: "Georgia, serif" },
              xanchor: "right",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 300 }}
      />
    </ChartFrame>
  );
}
