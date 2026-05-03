"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Consent decree / OLA audit compliance status across agencies
const agencies = [
  "DDA Waiver Services",
  "MDH Medicaid Eligibility",
  "MSDE Special Education",
  "DJS Youth Services",
  "DPSCS Medical Care",
  "DHS Child Welfare",
];
const compliance = [62, 71, 58, 45, 67, 73]; // % of consent-decree targets met
const findings = [14, 9, 18, 22, 11, 8];     // # open OLA findings

export default function JcrConsentDecreeChart() {
  return (
    <ChartFrame
      title="Consent Decree & OLA Audit Posture"
      deck="Open findings vs. compliance with federal & state consent decrees · Low compliance + high findings = elevated liability risk"
      source="JCR 2025 · pp.147, 210, 258, 341 | Office of Legislative Audits — Findings Register FY2024–25 | DOJ / HHS OCR consent-decree monitors"
    >
      <Plot
        data={[
          {
            x: agencies,
            y: compliance,
            type: "bar",
            name: "Compliance %",
            yaxis: "y",
            marker: { color: "#1D4F91", line: { color: "#121212", width: 0.5 } },
            text: compliance.map((v) => `${v}%`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 10 },
            hovertemplate: "<b>%{x}</b><br>Compliance: %{y}%<extra></extra>",
          },
          {
            x: agencies,
            y: findings,
            type: "scatter",
            mode: "lines+markers",
            name: "Open OLA Findings",
            yaxis: "y2",
            line: { color: "#C41230", width: 2 },
            marker: { size: 9, color: "#C41230", line: { color: "#121212", width: 0.5 } },
            hovertemplate: "<b>%{x}</b><br>Open findings: %{y}<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 28, r: 70, b: 90, l: 70 },
          xaxis: { tickangle: -18, showgrid: false },
          yaxis: {
            title: { text: "Compliance with consent-decree targets (%)" } as never,
            gridcolor: "#EFEFEF",
            range: [0, 100],
          },
          yaxis2: {
            title: { text: "Open OLA findings (#)" } as never,
            overlaying: "y",
            side: "right",
            gridcolor: "transparent",
            range: [0, 25],
          },
          legend: { orientation: "h", y: -0.32, x: 0.5, xanchor: "center" },
          shapes: [
            {
              type: "line",
              xref: "paper", x0: 0, x1: 1,
              y0: 80, y1: 80,
              line: { color: "#1A7340", width: 1, dash: "dash" },
            },
          ],
          annotations: [
            {
              xref: "paper", x: 0.99, y: 80, yref: "y",
              text: "80% benchmark",
              showarrow: false,
              font: { color: "#1A7340", size: 9, family: "Georgia, serif" },
              xanchor: "right", yanchor: "bottom",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 400 }}
      />
    </ChartFrame>
  );
}
