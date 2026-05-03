"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Age progression of legacy systems across FY25/FY27/FY30
const systems = [
  "FMIS (R*Stars)",
  "SIS / Mainframe",
  "SAIL / RAPIDS",
  "ADPICS",
  "CARES / BEACON",
  "MMIS Medicaid",
  "MOSST",
  "CJIS",
  "PARIS Police",
  "BEACON HR",
];
const ageFY25 = [35, 38, 30, 28, 22, 18, 24, 25, 20, 19];
const ageFY27 = ageFY25.map((a) => a + 2);
const ageFY30 = ageFY25.map((a) => a + 5);

const LIFECYCLE = 30; // enterprise-system expected replacement age

export default function ItAgeBombChart() {
  return (
    <ChartFrame
      title="The Legacy Age-Bomb — Every System Past Lifecycle by FY2030"
      deck="With only $65.5M/yr ITIF funding, replacement pace cannot keep up · By FY2030 nearly every critical system exceeds the 30-year enterprise lifecycle threshold"
      source="JCR 2025 F50 · pp.60–90 | Ch.497 Legacy IT Inventory (DoIT mandated Jul 2025) | ACFR 2024 Capital Asset footnotes"
    >
      <Plot
        data={[
          {
            x: systems, y: ageFY25,
            type: "bar", name: "FY2025",
            marker: { color: "#1D4F91", line: { color: "#121212", width: 0.4 } },
            hovertemplate: "<b>%{x}</b><br>FY2025: %{y}yr<extra></extra>",
          },
          {
            x: systems, y: ageFY27,
            type: "bar", name: "FY2027",
            marker: { color: "#C4820A", line: { color: "#121212", width: 0.4 } },
            hovertemplate: "<b>%{x}</b><br>FY2027: %{y}yr<extra></extra>",
          },
          {
            x: systems, y: ageFY30,
            type: "bar", name: "FY2030",
            marker: { color: "#C41230", line: { color: "#121212", width: 0.4 } },
            hovertemplate: "<b>%{x}</b><br>FY2030: %{y}yr<extra></extra>",
          },
        ]}
        layout={{
          barmode: "group",
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 28, r: 30, b: 110, l: 70 },
          xaxis: { tickangle: -30, showgrid: false },
          yaxis: { title: { text: "System Age (years)" } as never, gridcolor: "#EFEFEF" },
          legend: { orientation: "h", y: -0.42, x: 0.5, xanchor: "center" },
          shapes: [
            {
              type: "line",
              xref: "paper", x0: 0, x1: 1,
              y0: LIFECYCLE, y1: LIFECYCLE,
              line: { color: "#C41230", width: 1.5, dash: "dash" },
            },
          ],
          annotations: [
            {
              xref: "paper", x: 0.99, y: LIFECYCLE, yref: "y",
              text: `${LIFECYCLE}yr enterprise lifecycle`,
              showarrow: false,
              font: { color: "#C41230", size: 10, family: "Georgia, serif" },
              xanchor: "right", yanchor: "bottom",
              bgcolor: "rgba(255,255,255,0.9)",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 440 }}
      />
    </ChartFrame>
  );
}
