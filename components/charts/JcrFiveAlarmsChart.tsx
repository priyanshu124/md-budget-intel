"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// The five fiscal alarms from JCR 2025
const alarms = [
  {
    label: "Rainy Day Reserve",
    value: 132,
    threshold: 1750,
    status: "CRITICAL",
    detail: "$132M vs $1,750M statutory min",
    pct: 7.5,
  },
  {
    label: "Structural Gap (FY28)",
    value: 8400,
    threshold: 0,
    status: "CRITICAL",
    detail: "−$8.4B projected at current trajectory",
    pct: 100,
  },
  {
    label: "Federal Fund Dependency",
    value: 33,
    threshold: 25,
    status: "HIGH",
    detail: "33% of FY25 budget ($19.4B of $58.4B)",
    pct: 132,
  },
  {
    label: "Blueprint Compliance Gap",
    value: 5400,
    threshold: 0,
    status: "CRITICAL",
    detail: "$5.4B shortfall by FY2030 vs SB 1372",
    pct: 100,
  },
  {
    label: "Legacy IT Replacement Debt",
    value: 1015,
    threshold: 65.5,
    status: "HIGH",
    detail: "$1.015B backlog · $65.5M/yr funded",
    pct: 1549,
  },
];

const STATUS_COLOR: Record<string, string> = {
  CRITICAL: "#C41230",
  HIGH: "#C4820A",
  MEDIUM: "#1D4F91",
};

export default function JcrFiveAlarmsChart() {
  return (
    <ChartFrame
      title="The Five Fiscal Alarms"
      deck="Five simultaneous structural stresses — any one of which alone would warrant concern; together they compound into the most dangerous fiscal position in a decade"
      source="JCR 2025 · pp.xxxiii–xlii (summary) | ACFR 2025 · pp.17–46 | Blueprint SB 1372 | DoIT Ch.497 Legacy Report"
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
        {alarms.map((a, i) => (
          <div
            key={a.label}
            style={{
              position: "relative",
              background: "#fff",
              border: `2px solid ${STATUS_COLOR[a.status]}`,
              borderRadius: 8,
              padding: "14px 14px 12px",
              fontFamily: "Georgia, serif",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -10,
                left: 12,
                background: STATUS_COLOR[a.status],
                color: "white",
                padding: "2px 8px",
                fontFamily: "var(--mono)",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.08em",
                borderRadius: 3,
              }}
            >
              ALARM {i + 1} · {a.status}
            </div>
            <div style={{ fontSize: 11, color: "#666", marginTop: 6, marginBottom: 4 }}>
              {a.label}
            </div>
            <div style={{ fontSize: 22, fontWeight: 900, color: STATUS_COLOR[a.status], lineHeight: 1.1 }}>
              {a.value >= 1000 ? `$${(a.value / 1000).toFixed(1)}B` : a.label.includes("%") || a.label.includes("Dependency") ? `${a.value}%` : `$${a.value}M`}
            </div>
            <div style={{ fontSize: 10, color: "#666", marginTop: 6, lineHeight: 1.4, fontStyle: "italic" }}>
              {a.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Aggregate risk score */}
      <div
        style={{
          marginTop: 16,
          padding: "12px 16px",
          background: "linear-gradient(90deg, rgba(196,18,48,0.08), rgba(196,130,10,0.08))",
          border: "1px solid #C41230",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#C41230", fontWeight: 700, letterSpacing: "0.1em" }}>
          COMPOSITE RISK
        </div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#121212", lineHeight: 1.5 }}>
          3 alarms at <b style={{ color: "#C41230" }}>CRITICAL</b> · 2 at <b style={{ color: "#C4820A" }}>HIGH</b>
          &nbsp;·&nbsp; Aggregate structural exposure across all 5: <b>−$14.9B</b> over FY2025–FY2030
        </div>
      </div>
    </ChartFrame>
  );
}
