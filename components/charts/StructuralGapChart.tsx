"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const yrs = ["FY2016","FY2017","FY2018","FY2019","FY2020","FY2021","FY2022","FY2023","FY2024","FY2025"];
const rev = [37.2, 38.5, 40.1, 41.8, 44.5, 53.6, 58.3, 55.9, 57.2, 57.1];
const exp = [36.1, 37.8, 39.0, 41.2, 42.6, 50.2, 55.4, 54.8, 55.9, 59.8];

// Projected: FY2023→FY2025 slope extrapolated
const projYrs = ["FY2025","FY2026","FY2027","FY2028"];
const projRev = [57.1, 57.7, 58.3, 58.9];
const projExp = [59.8, 62.3, 64.8, 67.3];

const gap = yrs.map((_, i) => rev[i] - exp[i]);
const projGap = projYrs.map((_, i) => projRev[i] - projExp[i]);

export default function StructuralGapChart() {
  return (
    <ChartFrame
      title="Spending Is Growing 4x Faster Than Revenue"
      deck="Post-ARPA: expenditures +$2.5B/yr vs. revenue +$0.6B/yr — gap projected at −$8.4B by FY2028"
      source="ACFR 2025 · p.165 | Revenue & Expenditure 10-Year Table (audited) | Projection: FY2023–2025 slope"
    >
      <Plot
        data={[
          {
            x: yrs, y: rev,
            type: "scatter", mode: "lines+markers",
            name: "Revenue (actual)",
            line: { color: "#1A7340", width: 2.8 },
            marker: { size: 6, color: "#1A7340" },
            hovertemplate: "<b>%{x}</b><br>Revenue: $%{y:.1f}B<extra></extra>",
          },
          {
            x: yrs, y: exp,
            type: "scatter", mode: "lines+markers",
            name: "Expenditure (actual)",
            line: { color: "#C41230", width: 2.8 },
            marker: { size: 6, color: "#C41230" },
            fill: "tonexty",
            fillcolor: "rgba(196,18,48,0.08)",
            hovertemplate: "<b>%{x}</b><br>Expenditure: $%{y:.1f}B<extra></extra>",
          },
          {
            x: projYrs, y: projRev,
            type: "scatter", mode: "lines",
            name: "Revenue (projected)",
            line: { color: "#1A7340", width: 2, dash: "dash" },
            showlegend: false,
            hovertemplate: "<b>%{x}</b><br>Proj Rev: $%{y:.1f}B<extra></extra>",
          },
          {
            x: projYrs, y: projExp,
            type: "scatter", mode: "lines",
            name: "Expenditure (projected)",
            line: { color: "#C41230", width: 2, dash: "dash" },
            showlegend: false,
            hovertemplate: "<b>%{x}</b><br>Proj Exp: $%{y:.1f}B<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 20, b: 40, l: 60 },
          yaxis: {
            title: { text: "$ Billions" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$.0f",
            ticksuffix: "B",
          },
          xaxis: { showgrid: false },
          legend: { orientation: "h", y: -0.2, x: 0.5, xanchor: "center" },
          hovermode: "x unified",
          shapes: [
            {
              type: "rect",
              xref: "x",
              yref: "paper",
              x0: "FY2020",
              x1: "FY2022",
              y0: 0,
              y1: 1,
              fillcolor: "rgba(196,130,10,0.08)",
              line: { width: 0 },
              layer: "below",
            },
          ],
          annotations: [
            {
              x: "FY2021",
              xref: "x",
              y: 1,
              yref: "paper",
              text: "ARPA federal aid",
              showarrow: false,
              font: { color: "#B8860B", size: 9, family: "Georgia, serif" },
              yanchor: "bottom",
            },
            {
              x: "FY2025", y: 59.8,
              text: "Gap: −$2.7B",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#C41230",
              font: { color: "#C41230", size: 11, family: "Georgia, serif" },
              ax: -60, ay: -20,
            },
            {
              x: "FY2028", y: 67.3,
              text: "Projected −$8.4B",
              showarrow: true,
              arrowhead: 2,
              arrowcolor: "#C41230",
              font: { color: "#C41230", size: 10, family: "Georgia, serif" },
              ax: -50, ay: -30,
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 320 }}
      />

      {/* Surplus / Deficit bar strip */}
      <div style={{ marginTop: 4 }}>
        <Plot
          data={[
            {
              x: [...yrs, ...projYrs.slice(1)],
              y: [...gap, ...projGap.slice(1)],
              type: "bar",
              marker: {
                color: [...gap, ...projGap.slice(1)].map((v) =>
                  v >= 0 ? "#1A7340" : "#C41230"
                ),
                opacity: [...yrs.map(() => 1), ...projYrs.slice(1).map(() => 0.5)],
              },
              hovertemplate: "<b>%{x}</b><br>Gap: $%{y:.1f}B<extra></extra>",
            },
          ]}
          layout={{
            paper_bgcolor: "white",
            plot_bgcolor: "white",
            font: { family: "Georgia, serif", size: 10, color: "#121212" },
            margin: { t: 4, r: 20, b: 30, l: 60 },
            yaxis: {
              title: { text: "Surplus / Deficit" } as never,
              gridcolor: "#EFEFEF",
              tickformat: "$.0f",
              ticksuffix: "B",
              zeroline: true,
              zerolinecolor: "#121212",
            },
            xaxis: { showgrid: false, tickfont: { size: 9 } },
            showlegend: false,
            hovermode: "x unified",
          }}
          config={{ displayModeBar: false, responsive: true }}
          style={{ width: "100%", height: 120 }}
        />
      </div>
    </ChartFrame>
  );
}
