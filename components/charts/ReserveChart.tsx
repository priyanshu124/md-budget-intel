"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const years = ["FY2021", "FY2022", "FY2023", "FY2024", "FY2025"];
const reserve = [3200, 3600, 3469, 838, 132];
const gfUnassigned: (number | null)[] = [null, null, 3000, 838, -905];

export default function ReserveChart() {
  return (
    <ChartFrame
      title="Maryland's Two Fiscal Safety Nets — Both in Collapse"
      deck="Reserve Fund still positive ($132M) — but General Fund Unassigned crossed into −$905M deficit"
      source="Reserve Fund: ACFR 2023 p.20 | ACFR 2024 pp.18–19 | ACFR 2025 pp.17–22"
    >
      <Plot
        data={[
          {
            x: years,
            y: reserve,
            type: "bar",
            name: "Rainy Day Reserve",
            marker: {
              color: reserve.map((v) =>
                v < 500 ? "#C41230" : v < 1500 ? "#B8860B" : "#1A7340"
              ),
              line: { color: "#121212", width: 0.5 },
            },
            hovertemplate: "<b>%{x}</b><br>Reserve: $%{y:,.0f}M<extra></extra>",
          },
          {
            x: years,
            y: gfUnassigned,
            type: "scatter",
            mode: "lines+markers",
            name: "General Fund — Unassigned",
            line: { color: "#1D4F91", width: 2.5, dash: "dot" },
            marker: { size: 9, symbol: "diamond", color: "#1D4F91" },
            hovertemplate: "<b>%{x}</b><br>GF Unassigned: $%{y:,.0f}M<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 20, b: 40, l: 70 },
          yaxis: {
            title: { text: "$ Millions" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
            zeroline: true,
            zerolinecolor: "#121212",
            zerolinewidth: 1,
          },
          xaxis: { showgrid: false },
          legend: { orientation: "h", y: -0.2, x: 0.5, xanchor: "center" },
          hovermode: "x unified",
          shapes: [
            {
              type: "line",
              xref: "paper",
              x0: 0,
              x1: 1,
              y0: 2500,
              y1: 2500,
              line: { color: "#B8860B", width: 1, dash: "dash" },
            },
            {
              type: "line",
              xref: "paper",
              x0: 0,
              x1: 1,
              y0: 1750,
              y1: 1750,
              line: { color: "#C41230", width: 1, dash: "dash" },
            },
          ],
          annotations: [
            {
              xref: "paper",
              x: 0.01,
              y: 2500,
              text: "Prudent floor $2,500M",
              showarrow: false,
              font: { color: "#B8860B", size: 9, family: "Georgia, serif" },
              xanchor: "left",
              yanchor: "bottom",
            },
            {
              xref: "paper",
              x: 0.01,
              y: 1750,
              text: "Statutory minimum $1,750M",
              showarrow: false,
              font: { color: "#C41230", size: 9, family: "Georgia, serif" },
              xanchor: "left",
              yanchor: "bottom",
            },
            {
              x: "FY2025",
              y: 132,
              text: "$132M",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#C41230",
              font: { color: "#C41230", size: 11, family: "Georgia, serif" },
              ax: 40,
              ay: -40,
            },
            {
              x: "FY2025",
              y: -905,
              text: "−$905M",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#1D4F91",
              font: { color: "#1D4F91", size: 11, family: "Georgia, serif" },
              ax: 50,
              ay: 30,
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 320 }}
      />
    </ChartFrame>
  );
}
