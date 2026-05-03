"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Blueprint compliance: required spend vs. enacted — gap grows to ~$1B/yr by FY30
const years = ["FY24", "FY25", "FY26", "FY27", "FY28", "FY29", "FY30"];
const required = [8.8, 9.4, 10.1, 10.8, 11.6, 12.4, 13.2]; // $B — SB 1372 trajectory
const enacted  = [8.8, 9.3, 9.6,  9.9, 10.4, 10.9, 11.4]; // $B — realistic with $65M cut
const gap      = required.map((r, i) => +(r - enacted[i]).toFixed(2));

const cumGap = gap.reduce((a, b) => a + b, 0);

export default function BlueprintGapChart() {
  return (
    <ChartFrame
      title="$65M Cut Creates a Permanent ~$1B Annual Compliance Deficit"
      deck="Blueprint SB 1372 mandates a required funding trajectory · A small cut today compounds into a $5.4B cumulative gap by FY2030"
      source="SB 1372 (Blueprint for Maryland's Future) · JCR 2025 · pp.xxxix–xl | MSDE Blueprint funding tables | DLS analysis Mar 2025"
    >
      <Plot
        data={[
          {
            x: years, y: required,
            type: "scatter", mode: "lines+markers",
            name: "Required by SB 1372",
            line: { color: "#1A7340", width: 3 },
            marker: { size: 7, color: "#1A7340" },
            hovertemplate: "<b>%{x}</b><br>Required: $%{y:.1f}B<extra></extra>",
          },
          {
            x: years, y: enacted,
            type: "scatter", mode: "lines+markers",
            name: "Enacted / Projected",
            line: { color: "#C41230", width: 3 },
            marker: { size: 7, color: "#C41230" },
            hovertemplate: "<b>%{x}</b><br>Enacted: $%{y:.1f}B<extra></extra>",
          },
          {
            x: years, y: gap,
            type: "bar",
            name: "Annual Gap ($B)",
            yaxis: "y2",
            marker: { color: "rgba(196,130,10,0.55)", line: { color: "#C4820A", width: 1 } },
            text: gap.map((g) => `$${g.toFixed(1)}B`),
            textposition: "outside",
            textfont: { family: "Georgia, serif", size: 9, color: "#7A5A08" },
            hovertemplate: "<b>%{x}</b><br>Gap: $%{y:.1f}B<extra></extra>",
          },
        ]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 32, r: 70, b: 80, l: 70 },
          xaxis: { showgrid: false },
          yaxis: {
            title: { text: "Blueprint Spend ($B)" } as never,
            gridcolor: "#EFEFEF",
            tickformat: "$,.1f",
          },
          yaxis2: {
            title: { text: "Annual Compliance Gap ($B)" } as never,
            overlaying: "y",
            side: "right",
            gridcolor: "transparent",
            tickformat: "$,.1f",
            range: [0, 3],
          },
          legend: { orientation: "h", y: -0.22, x: 0.5, xanchor: "center" },
          annotations: [
            {
              xref: "paper", yref: "paper", x: 0.02, y: 0.98,
              text: `<b>Cumulative gap FY24–FY30 ≈ $${cumGap.toFixed(1)}B</b>`,
              showarrow: false,
              font: { color: "#C41230", size: 12, family: "Georgia, serif" },
              bgcolor: "rgba(255,255,255,0.92)",
              bordercolor: "#C41230",
              borderwidth: 1,
              borderpad: 6,
              xanchor: "left", yanchor: "top",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 440 }}
      />
    </ChartFrame>
  );
}
