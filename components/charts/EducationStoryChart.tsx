"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Where each education dollar goes + outcome tracking
const years = ["FY2016","FY2017","FY2018","FY2019","FY2020","FY2021","FY2022","FY2023","FY2024","FY2025"];
const k12Aid = [5420, 5784, 5823, 5850, 6180, 6360, 6610, 7280, 8165, 8860];
const higherEd = [1420, 1490, 1500, 1480, 1590, 1620, 1660, 1810, 2030, 2105];
const schoolConstr = [380, 412, 420, 400, 450, 440, 465, 520, 590, 620];
const specialEd = [640, 680, 680, 718, 770, 793, 803, 869, 1081, 1120];
const other = [hist(0, 8860, 1420, 380, 1120, 7860), hist(1, 5784, 1490, 412, 680, 8486), 0, 0, 0, 0, 0, 140, 200, 180];

function hist(i: number, k: number, h: number, sc: number, sp: number, tot: number): number {
  return tot - k - h - sc - sp;
}
const otherClean = years.map((_, i) => Math.max(0, [7860, 8486, 8494, 8448, 9090, 9413, 9738, 10619, 12066, 12885][i] - k12Aid[i] - higherEd[i] - schoolConstr[i] - specialEd[i]));

export default function EducationStoryChart() {
  return (
    <ChartFrame
      title="Where the Education Dollar Goes — Allocation vs Outcomes"
      deck="K–12 aid grew 63% FY2016→FY2025; special education nearly doubled · Over the shorter MFR window (RY2022→RY2025) proficiency has risen modestly while chronic absenteeism has eased from its pandemic peak"
      source="ACFR 2025 · p.165 (spending) | MD DBM Managing for Results 2024 & 2026 Annual Performance Reports (outcomes, KPIs 2.5–2.11) | Blueprint for Maryland's Future SB 1372"
    >
      <Plot
        data={[
          { x: years, y: k12Aid,      type: "bar", name: "K-12 Aid",           marker: { color: "#1D4F91" }, hovertemplate: "<b>%{x}</b><br>K-12 Aid: $%{y:,}M<extra></extra>" },
          { x: years, y: specialEd,   type: "bar", name: "Special Education",  marker: { color: "#6B3FA0" }, hovertemplate: "<b>%{x}</b><br>Special Ed: $%{y:,}M<extra></extra>" },
          { x: years, y: higherEd,    type: "bar", name: "Higher Education",   marker: { color: "#1D6FA4" }, hovertemplate: "<b>%{x}</b><br>Higher Ed: $%{y:,}M<extra></extra>" },
          { x: years, y: schoolConstr,type: "bar", name: "School Construction",marker: { color: "#C4820A" }, hovertemplate: "<b>%{x}</b><br>School Constr: $%{y:,}M<extra></extra>" },
          { x: years, y: otherClean,  type: "bar", name: "Other Ed",           marker: { color: "#888888" }, hovertemplate: "<b>%{x}</b><br>Other: $%{y:,}M<extra></extra>" },
        ]}
        layout={{
          barmode: "stack",
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 30, b: 50, l: 70 },
          yaxis: { title: { text: "$ Millions" } as never, gridcolor: "#EFEFEF", tickformat: "$,.0f" },
          xaxis: { showgrid: false },
          legend: { orientation: "h", y: -0.18, x: 0.5, xanchor: "center" },
          hovermode: "x unified",
          annotations: [
            {
              xref: "paper", yref: "paper", x: 0.02, y: 0.95,
              text: "<b>Total K–12+</b><br>FY2016: $7.86B<br>FY2025: $12.89B<br>(+64%)",
              showarrow: false,
              font: { family: "Georgia, serif", size: 10, color: "#0A2A4A" },
              bgcolor: "rgba(255,255,255,0.92)",
              bordercolor: "#DDDDDD",
              borderwidth: 1,
              borderpad: 6,
              xanchor: "left", yanchor: "top",
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 340 }}
      />

      {/* Outcome strip */}
      <div style={{ marginTop: 16, padding: 14, background: "#fafafa", borderRadius: 6 }}>
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#666", letterSpacing: "0.08em", marginBottom: 8 }}>
          STUDENT OUTCOMES — MFR REPORT YEAR 2022 → 2025 (MSDE VIA DBM MFR)
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {/*
            Every value below is cross-checked against the Maryland DBM
            Managing for Results (MFR) Annual Performance Reports for 2024
            and 2026. Prior versions of this strip contained fabricated
            values (e.g., Grade 4 Math 2024 shown as 38% when MFR reports
            28.6%) — replaced here with verified MFR KPIs 2.5, 2.6, 2.7,
            2.11. We use MFR's Report Year window (RY2022→RY2025) because
            Maryland transitioned from PARCC to MCAP assessments and
            pre-2019 proficiency numbers are not directly comparable.
          */}
          {[
            // KPI 2.7 Four-Year HS Graduation Rate (Cohort)
            { label: "HS Grad Rate (Cohort) — MFR KPI 2.7", v16: "87.2%", v24: "87.6%", delta: "+0.4pt", color: "#1A7340" },
            // KPI 2.5 Grade 3 ELA Proficient (first reported RY2023)
            { label: "Grade 3 ELA Proficient — MFR KPI 2.5", v16: "45.8%", v24: "50.0%", delta: "+4.2pt", color: "#1A7340" },
            // KPI 2.6 Kindergarten Readiness (Demonstrating Readiness)
            { label: "K Readiness (KRA) — MFR KPI 2.6",      v16: "39.6%", v24: "44.1%", delta: "+4.5pt", color: "#1A7340" },
            // KPI 2.11 Percent chronically absent (lower is favorable)
            { label: "Chronic Absenteeism — MFR KPI 2.11",   v16: "30.9%", v24: "25.2%", delta: "−5.7pt", color: "#1A7340" },
          ].map((o) => (
            <div key={o.label}>
              <div style={{ fontSize: 10, color: "#666", lineHeight: 1.3, marginBottom: 4 }}>{o.label}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#121212" }}>
                {o.v16} → <b>{o.v24}</b>
              </div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 800, color: o.color }}>
                {o.delta}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 10, color: "#888", lineHeight: 1.4 }}>
          Labels show MFR Report Year 2022 → 2025 where available; Grade 3 ELA and K Readiness start at RY2023 (first MCAP year). Lower is favorable for chronic absenteeism.
        </div>
      </div>
    </ChartFrame>
  );
}
