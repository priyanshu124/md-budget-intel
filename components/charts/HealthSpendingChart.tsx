"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const years = [
  "FY2016", "FY2017", "FY2018", "FY2019", "FY2020",
  "FY2021", "FY2022", "FY2023", "FY2024", "FY2025",
];
// Values in $B (divided by 1000 from $M)
const mdh = [12.216, 13.414, 13.526, 14.698, 15.687, 17.486, 18.561, 19.800, 19.687, 22.507];
const other = [19.166, 19.767, 20.083, 22.133, 20.187, 26.080, 25.624, 25.053, 28.598, 28.885];

export default function HealthSpendingChart() {
  return (
    <ChartFrame
      title="Health Spending Grew Twice as Fast as Every Other Agency Combined"
      deck="MDH: $12.2B → $22.5B (+84%) vs. all other functions: $19.2B → $28.9B (+51%) · FY2016–FY2025"
      source="ACFR 2025 · p.165 | Expenses by Function — Last Ten Fiscal Years (audited)"
    >
      <Plot
        data={[
          {
            x: years,
            y: mdh,
            type: "scatter",
            mode: "lines+markers",
            name: "MDH (Health)",
            fill: "tozeroy",
            fillcolor: "rgba(196,18,48,0.15)",
            line: { color: "#C41230", width: 2.8 },
            marker: { size: 6, color: "#C41230" },
            hovertemplate: "<b>%{x}</b><br>MDH: $%{y:.1f}B<extra></extra>",
          },
          {
            x: years,
            y: other,
            type: "scatter",
            mode: "lines+markers",
            name: "All Other Functions",
            line: { color: "#1D4F91", width: 2, dash: "dash" },
            marker: { size: 5, color: "#1D4F91" },
            hovertemplate: "<b>%{x}</b><br>Other: $%{y:.1f}B<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 30, b: 40, l: 65 },
          yaxis: {
            title: { text: "$ Billions" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
            zeroline: false,
          },
          xaxis: { showgrid: false },
          legend: { orientation: "h", y: -0.2, x: 0.5, xanchor: "center" },
          hovermode: "x unified",
          annotations: [
            {
              x: "FY2025",
              y: 22.507,
              text: "MDH +84%",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#C41230",
              font: { color: "#C41230", size: 11, family: "Georgia, serif" },
              ax: -70,
              ay: -25,
            },
            {
              x: "FY2025",
              y: 28.885,
              text: "Other +51%",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#1D4F91",
              font: { color: "#1D4F91", size: 11, family: "Georgia, serif" },
              ax: -70,
              ay: -20,
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 320 }}
      />
    </ChartFrame>
  );
}
