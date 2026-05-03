"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// MDH 10-year history + 7% CAGR extrapolation to FY2030
const histYears = ["FY16","FY17","FY18","FY19","FY20","FY21","FY22","FY23","FY24","FY25"];
const histMDH   = [12.2, 13.1, 14.0, 15.0, 16.2, 17.3, 18.7, 20.1, 21.4, 22.5]; // $B

// Extrapolate @ 7% CAGR
const projYears = ["FY25","FY26","FY27","FY28","FY29","FY30"];
const CAGR = 0.07;
const projMDH = projYears.map((_, i) => +(22.5 * Math.pow(1 + CAGR, i)).toFixed(2));

// Revenue growth track (baseline ~3% realistic)
const revGrowth = projYears.map((_, i) => +(57.1 * Math.pow(1 + 0.03, i)).toFixed(2));

export default function MdhCagrChart() {
  return (
    <ChartFrame
      title="MDH Spending at 7% CAGR — Headed for a Collision with Revenue"
      deck="Maryland Dept of Health grew 84% over 10 years · At current 7% CAGR, MDH alone consumes a growing share of every new revenue dollar"
      source="ACFR 2016–2025 · MDH operating expenditures | Board of Revenue Estimates Sep 2025 | JCR 2025 · p.xxxv (baseline assumptions)"
    >
      <Plot
        data={[
          {
            x: histYears, y: histMDH,
            type: "scatter", mode: "lines+markers",
            name: "MDH (actual)",
            line: { color: "#C41230", width: 3 },
            marker: { size: 7, color: "#C41230" },
            hovertemplate: "<b>%{x}</b><br>MDH: $%{y:.1f}B<extra></extra>",
          },
          {
            x: projYears, y: projMDH,
            type: "scatter", mode: "lines+markers",
            name: "MDH @ 7% CAGR (projected)",
            line: { color: "#C41230", width: 2.5, dash: "dash" },
            marker: { size: 6, color: "#C41230", symbol: "diamond" },
            hovertemplate: "<b>%{x}</b><br>MDH (proj): $%{y:.1f}B<extra></extra>",
          },
          {
            x: projYears, y: revGrowth,
            type: "scatter", mode: "lines",
            name: "Total revenue @ 3% (projected)",
            line: { color: "#1A7340", width: 2, dash: "dot" },
            hovertemplate: "<b>%{x}</b><br>Revenue (proj): $%{y:.1f}B<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 26, r: 30, b: 70, l: 70 },
          xaxis: { showgrid: false, tickangle: -15 },
          yaxis: {
            title: { text: "$ Billions" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
          },
          legend: { orientation: "h", y: -0.22, x: 0.5, xanchor: "center" },
          annotations: [
            {
              x: "FY30", xref: "x", y: projMDH[projMDH.length - 1], yref: "y",
              text: `FY30 MDH ≈ $${projMDH[projMDH.length - 1].toFixed(1)}B`,
              showarrow: true, arrowhead: 2, ax: -40, ay: -30,
              font: { color: "#C41230", size: 10, family: "Georgia, serif" },
              bgcolor: "rgba(255,255,255,0.9)",
              bordercolor: "#C41230",
              borderwidth: 1,
              borderpad: 4,
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 420 }}
      />
    </ChartFrame>
  );
}
