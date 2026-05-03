"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Scatter: X = federal dependency %, Y = JCR federal cut ($M), size = budget ($B) * 55
const agencies = [
  "DHS (Human Services)",
  "MDH (Health)",
  "Housing & Commerce",
  "Natural Resources",
  "General Government",
  "Transportation (MDOT)",
  "Education (MSDE)",
  "Public Safety & Corr.",
  "Judicial",
  "Higher Education",
];
const fedPct = [79.3, 55.0, 55.0, 35.0, 37.9, 23.2, 15.0, 1.7, 1.1, 10.0];
const jcrFedCut = [205.8, 101.3, 8.0, 2.0, 13.2, 0, 0, 0, 0, 0];
const budgetB = [4.0, 22.5, 0.9, 0.5, 3.2, 5.6, 12.9, 2.7, 1.1, 7.0];
const highlight = [true, true, false, false, false, false, false, false, false, false];

const colors = highlight.map((h) => (h ? "#C41230" : "#1D4F91"));
const sizes = budgetB.map((b) => Math.max(14, b * 3 + 12));

export default function FederalRiskChart() {
  return (
    <ChartFrame
      title="The ACFR Predicted It.  The JCR Confirmed It."
      deck="Agencies most dependent on federal funding took the biggest federal fund cuts — exactly as ACFR 2025 risk analysis warned"
      source="ACFR 2025 · pp.45–46 | JCR 2025 · pp.xxxiii–xxxiv"
    >
      <Plot
        data={[
          {
            x: fedPct,
            y: jcrFedCut,
            type: "scatter",
            mode: "text+markers",
            text: agencies,
            textposition: "top center",
            textfont: { family: "Georgia, serif", size: 9, color: "#121212" },
            marker: {
              size: sizes,
              color: colors,
              opacity: 0.75,
              line: { color: "#121212", width: 1 },
            },
            hovertemplate:
              "<b>%{text}</b><br>Federal share: %{x:.1f}%<br>JCR fed cut: $%{y:.1f}M<br>Budget: $%{customdata:.1f}B<extra></extra>",
            customdata: budgetB,
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 30, b: 55, l: 70 },
          xaxis: {
            title: { text: "% Federally Funded" } as never,
            gridcolor: "#EFEFEF",
            ticksuffix: "%",
            range: [-5, 90],
          },
          yaxis: {
            title: { text: "JCR Federal Fund Cut ($M)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.0f",
            range: [-20, 240],
          },
          showlegend: false,
          shapes: [
            {
              type: "rect",
              x0: 50,
              x1: 90,
              y0: 50,
              y1: 240,
              fillcolor: "rgba(196,18,48,0.06)",
              line: { color: "rgba(196,18,48,0.3)", width: 1, dash: "dash" },
              layer: "below",
            },
          ],
          annotations: [
            {
              x: 70,
              y: 220,
              text: "HIGH-RISK ZONE",
              showarrow: false,
              font: { color: "#C41230", size: 10, family: "Georgia, serif" },
            },
            {
              x: 70,
              y: 205,
              text: "High fed dependency + high cuts",
              showarrow: false,
              font: { color: "#C41230", size: 8, family: "Georgia, serif", style: "italic" },
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 380 }}
      />
    </ChartFrame>
  );
}
