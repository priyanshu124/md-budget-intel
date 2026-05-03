"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Escalation arc: JCR 2024 vs JCR 2025 findings
const categories = ["Admin funds<br>restricted", "Legislative<br>override of<br>Gov. cuts"];
const v24 = [1.0, 0.0];
const v25 = [3.25, 147.24];

export default function DdaDeepDiveChart() {
  return (
    <ChartFrame
      title="DDA — A Pattern of Institutional Failure"
      deck="Cross-analysis: JCR 2024 (April 2024) vs JCR 2025 (April 2025) · Both reports, read together, reveal an agency in structural breakdown"
      source="JCR 2024 · pp.145–160 | JCR 2025 · pp.153–162 (M00M) | Legislative override data: JCR 2025 Committee Narrative"
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 16 }}>
        {/* Panel 1: Escalation */}
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 700, color: "#121212", marginBottom: 6 }}>
            The Escalation Arc
          </div>
          <Plot
            data={[
              {
                x: categories,
                y: v24,
                type: "bar",
                name: "JCR 2024",
                marker: { color: "#1D4F91" },
                text: v24.map((v) => `$${v.toFixed(1)}M`),
                textposition: "outside",
                textfont: { family: "Georgia, serif", size: 10 },
                hovertemplate: "<b>JCR 2024</b><br>%{x}: $%{y:.1f}M<extra></extra>",
              },
              {
                x: categories,
                y: v25,
                type: "bar",
                name: "JCR 2025",
                marker: { color: "#C41230" },
                text: v25.map((v) => v > 0 ? `$${v.toFixed(1)}M` : "$0"),
                textposition: "outside",
                textfont: { family: "Georgia, serif", size: 10 },
                hovertemplate: "<b>JCR 2025</b><br>%{x}: $%{y:.1f}M<extra></extra>",
              },
            ]}
            layout={{
              barmode: "group",
              paper_bgcolor: "white",
              plot_bgcolor: "white",
              font: { family: "Georgia, serif", size: 10, color: "#121212" },
              margin: { t: 10, r: 10, b: 60, l: 50 },
              yaxis: { title: { text: "$M" } as never, gridcolor: "#EFEFEF" },
              xaxis: { showgrid: false },
              legend: { orientation: "h", y: -0.2, x: 0.5, xanchor: "center" },
              annotations: [
                {
                  x: 0, y: 3.25, text: "+225%", showarrow: false,
                  font: { color: "#C41230", size: 11, family: "Georgia, serif" },
                  yshift: 20,
                },
                {
                  x: 1, y: 147.24, text: "$0 → $147M<br>(full override)",
                  showarrow: false,
                  font: { color: "#C41230", size: 10, family: "Georgia, serif" },
                  yshift: 20,
                },
              ],
            }}
            config={{ displayModeBar: false, responsive: true }}
            style={{ width: "100%", height: 260 }}
          />
        </div>

        {/* Panel 2: The Broken Promise */}
        <div>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 700, color: "#121212", marginBottom: 6 }}>
            The Broken Promise
          </div>
          <div
            style={{
              background: "rgba(29,79,145,0.08)",
              borderLeft: "3px solid #1D4F91",
              padding: "10px 14px",
              fontFamily: "Georgia, serif",
              fontSize: 11,
              lineHeight: 1.5,
              fontStyle: "italic",
              marginBottom: 10,
              borderRadius: "0 4px 4px 0",
            }}
          >
            <div style={{ fontFamily: "var(--mono)", fontSize: 8, color: "#1D4F91", fontWeight: 700, fontStyle: "normal", marginBottom: 4 }}>
              JCR 2024 PROMISE
            </div>
            &ldquo;These changes should improve DDA&apos;s data collection, forecasting accuracy, and budget discipline...&rdquo;
          </div>
          <div
            style={{
              background: "rgba(196,18,48,0.08)",
              borderLeft: "3px solid #C41230",
              padding: "10px 14px",
              fontFamily: "Georgia, serif",
              fontSize: 11,
              lineHeight: 1.5,
              fontStyle: "italic",
              borderRadius: "0 4px 4px 0",
            }}
          >
            <div style={{ fontFamily: "var(--mono)", fontSize: 8, color: "#C41230", fontWeight: 700, fontStyle: "normal", marginBottom: 4 }}>
              JCR 2025 REALITY
            </div>
            &ldquo;Actual spending significantly surpassed the legislative appropriation. Forecasts continued to underestimate caseload and rate pressures.&rdquo;
          </div>
        </div>
      </div>

      {/* Panel 3: Key findings strip */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10,
          padding: 12,
          background: "#fafafa",
          borderRadius: 6,
        }}
      >
        {[
          { metric: "Deficiencies", val: "$736.6M", sub: "carried forward" },
          { metric: "Caseload growth", val: "+22%", sub: "FY2022 → FY2025" },
          { metric: "Provider rate ↑", val: "+18%", sub: "over same period" },
          { metric: "FY2027 proposed cut", val: "−$299M", sub: "cost containment" },
        ].map((m) => (
          <div key={m.metric}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#666", letterSpacing: "0.08em" }}>
              {m.metric.toUpperCase()}
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 800, color: "#C41230" }}>
              {m.val}
            </div>
            <div style={{ fontSize: 10, color: "#888" }}>{m.sub}</div>
          </div>
        ))}
      </div>
    </ChartFrame>
  );
}
