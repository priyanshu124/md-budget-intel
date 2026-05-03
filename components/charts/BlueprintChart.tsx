"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const histYears = ["FY2016","FY2017","FY2018","FY2019","FY2020","FY2021","FY2022","FY2023","FY2024","FY2025"];
const histEd = [7.860, 8.486, 8.494, 8.448, 9.090, 9.413, 9.738, 10.619, 12.066, 12.885];

// Blueprint mandate trajectory (FY2025 start → FY2030 $18.3B)
const bpYears = ["FY2025","FY2026","FY2027","FY2028","FY2029","FY2030"];
const bpMandate = [12.885, 13.800, 14.800, 16.000, 17.200, 18.300];

// After JCR cut ($65M below starting point, trending with deficit pressure)
const afterCut = [12.820, 13.450, 14.100, 14.800, 15.400, 15.900];

export default function BlueprintChart() {
  return (
    <ChartFrame
      title="A Legal Mandate Requires Education to Grow.  The Budget Is Moving the Other Way."
      deck="Blueprint for Maryland's Future requires $18.3B by FY2030 (+42%) — the JCR just cut $65M from the starting line"
      source="ACFR 2025 · p.165 (actual) | JCR 2025 pp.xxxiii–xxxiv (cuts) | Blueprint for Maryland's Future SB 1372"
    >
      <Plot
        data={[
          {
            x: histYears, y: histEd,
            type: "scatter", mode: "lines+markers",
            name: "Actual (FY2016–FY2025)",
            line: { color: "#0A2A4A", width: 2.8 },
            marker: { size: 6, color: "#0A2A4A" },
            hovertemplate: "<b>%{x}</b><br>Actual: $%{y:.2f}B<extra></extra>",
          },
          {
            x: bpYears, y: bpMandate,
            type: "scatter", mode: "lines+markers",
            name: "Blueprint Mandate",
            line: { color: "#1A7340", width: 2.5, dash: "dash" },
            marker: { size: 7, color: "#1A7340", symbol: "diamond" },
            hovertemplate: "<b>%{x}</b><br>Mandate: $%{y:.2f}B<extra></extra>",
          },
          {
            x: bpYears, y: afterCut,
            type: "scatter", mode: "lines+markers",
            name: "After JCR Cut",
            line: { color: "#C41230", width: 2.5, dash: "dot" },
            marker: { size: 7, color: "#C41230", symbol: "x" },
            hovertemplate: "<b>%{x}</b><br>Post-cut path: $%{y:.2f}B<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 30, b: 40, l: 60 },
          yaxis: {
            title: { text: "Education Spending ($ Billions)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$.0f",
            ticksuffix: "B",
            range: [6, 20],
          },
          xaxis: { showgrid: false },
          legend: { orientation: "h", y: -0.2, x: 0.5, xanchor: "center" },
          hovermode: "x unified",
          shapes: [
            {
              type: "line",
              x0: "FY2030", x1: "FY2030",
              y0: 15.9, y1: 18.3,
              line: { color: "#C41230", width: 2 },
            },
          ],
          annotations: [
            {
              x: "FY2030",
              y: 17.1,
              text: "$5.4B gap",
              showarrow: false,
              font: { color: "#C41230", size: 12, family: "Georgia, serif" },
              xanchor: "right",
              xshift: -6,
            },
            {
              x: "FY2030", y: 18.3,
              text: "Mandate $18.3B",
              showarrow: false,
              font: { color: "#1A7340", size: 10, family: "Georgia, serif" },
              xanchor: "right",
              yanchor: "bottom",
            },
            {
              x: "FY2030", y: 15.9,
              text: "Projected $15.9B",
              showarrow: false,
              font: { color: "#C41230", size: 10, family: "Georgia, serif" },
              xanchor: "right",
              yanchor: "top",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 340 }}
      />
    </ChartFrame>
  );
}
