"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Election-cycle fiscal risk: structural gap projection vs. gubernatorial election years
const years = ["FY25", "FY26", "FY27", "FY28", "FY29", "FY30"];
const structuralGap = [-905, -1400, -2700, -8400, -9200, -10100]; // $M
const reserveBalance = [132, 140, 95, 40, 0, 0];                   // $M

const ELECTION_YEARS = ["FY27", "FY31"]; // next gubernatorial cycle

export default function JcrElectionRiskChart() {
  return (
    <ChartFrame
      title="Election-Cycle Fiscal Risk — Structural Gap Meets the 2026 Ballot"
      deck="Projected structural shortfall widens as reserve exhausts · Gubernatorial election falls in the worst year of the projection"
      source="JCR 2025 · pp.xxxiii–xlii (projections) | Board of Revenue Estimates Sep 2025 | ACFR 2025 Management Discussion"
    >
      <Plot
        data={[
          {
            x: years,
            y: structuralGap,
            type: "scatter",
            mode: "lines+markers",
            name: "Structural Gap ($M)",
            fill: "tozeroy",
            fillcolor: "rgba(196,18,48,0.12)",
            line: { color: "#C41230", width: 2.5 },
            marker: { size: 8, color: "#C41230" },
            hovertemplate: "<b>%{x}</b><br>Gap: $%{y:,}M<extra></extra>",
          },
          {
            x: years,
            y: reserveBalance,
            type: "scatter",
            mode: "lines+markers",
            name: "Reserve Balance ($M)",
            line: { color: "#1D4F91", width: 2, dash: "dot" },
            marker: { size: 7, color: "#1D4F91" },
            yaxis: "y2",
            hovertemplate: "<b>%{x}</b><br>Reserve: $%{y:,}M<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 30, r: 70, b: 70, l: 80 },
          xaxis: { showgrid: false },
          yaxis: {
            title: { text: "Structural Gap ($M)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
            zeroline: true,
            zerolinecolor: "#121212",
            zerolinewidth: 1,
          },
          yaxis2: {
            title: { text: "Reserve Balance ($M)" } as never,
            overlaying: "y",
            side: "right",
            gridcolor: "transparent",
            tickformat: "$,.0f",
          },
          legend: { orientation: "h", y: -0.22, x: 0.5, xanchor: "center" },
          shapes: ELECTION_YEARS.filter((y) => years.includes(y)).map((y) => ({
            type: "line",
            x0: y, x1: y,
            yref: "paper", y0: 0, y1: 1,
            line: { color: "#C4820A", width: 2, dash: "dash" },
          })),
          annotations: ELECTION_YEARS.filter((y) => years.includes(y)).map((y) => ({
            x: y, xref: "x", yref: "paper", y: 1,
            text: `🗳 ${y} — Gubernatorial`,
            showarrow: false,
            font: { color: "#C4820A", size: 10, family: "Georgia, serif" },
            yanchor: "bottom",
            xshift: 4,
          })),
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 420 }}
      />
    </ChartFrame>
  );
}
