"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// Reserve burn scenarios — interactive
const months = Array.from({ length: 13 }, (_, i) => i); // 0..12 months
const RESERVE_START = 132; // $M

// Burn rates ($M/month) per scenario
const SCENARIOS = [
  { key: "mild",   label: "Mild (status-quo deficiency pace)", burn: 15,  color: "#1A7340" },
  { key: "mod",    label: "Moderate (MDH overrun continues)",  burn: 35,  color: "#C4820A" },
  { key: "severe", label: "Severe (federal cut triggers)",     burn: 75,  color: "#C41230" },
];

export default function ReserveBurnChart() {
  const [rate, setRate] = useState(35);

  const traces = SCENARIOS.map((s) => ({
    x: months,
    y: months.map((m) => Math.max(0, RESERVE_START - s.burn * m)),
    type: "scatter" as const,
    mode: "lines+markers" as const,
    name: s.label,
    line: { color: s.color, width: 2, dash: s.key === "mod" ? ("solid" as const) : ("dot" as const) },
    marker: { size: 6, color: s.color },
    hovertemplate: `<b>${s.label}</b><br>Month %{x}: $%{y:.0f}M<extra></extra>`,
  }));

  const interactive = {
    x: months,
    y: months.map((m) => Math.max(0, RESERVE_START - rate * m)),
    type: "scatter" as const,
    mode: "lines" as const,
    name: `Custom rate: $${rate}M/mo`,
    line: { color: "#6B3FA0", width: 3 },
    hovertemplate: `<b>Custom</b><br>Month %{x}: $%{y:.0f}M<extra></extra>`,
  };

  const monthsToZero = Math.ceil(RESERVE_START / rate);

  return (
    <ChartFrame
      title="$132M Reserve: Gone in Months, Not Years"
      deck="The Rainy Day Fund collapsed from $3.6B to $132M · Under any realistic deficiency scenario, it exhausts within the current fiscal year"
      source="ACFR 2025 · p.46 (Reserve Fund balance) | JCR 2025 · p.xxxvii | Deficiency appropriation pace from MDH supplemental track"
    >
      <div
        style={{
          marginBottom: 12,
          padding: "12px 14px",
          background: "rgba(107,63,160,0.06)",
          borderLeft: "3px solid #6B3FA0",
          borderRadius: "0 4px 4px 0",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#6B3FA0", fontWeight: 700, letterSpacing: "0.08em" }}>
          ADJUST BURN RATE
        </div>
        <input
          type="range"
          min={5} max={120} step={5}
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          style={{ flex: 1, minWidth: 200, accentColor: "#6B3FA0" }}
        />
        <div style={{ fontFamily: "Georgia, serif", fontSize: 13, color: "#121212" }}>
          <b style={{ color: "#6B3FA0" }}>${rate}M/mo</b> &nbsp;→&nbsp; reserve hits zero in{" "}
          <b style={{ color: "#C41230" }}>{monthsToZero} month{monthsToZero === 1 ? "" : "s"}</b>
        </div>
      </div>

      <Plot
        data={[...traces, interactive]}
        layout={{
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 18, r: 30, b: 80, l: 70 },
          xaxis: { title: { text: "Months from July 2025" } as never, gridcolor: "#EFEFEF", dtick: 1 },
          yaxis: { title: { text: "Reserve balance ($M)" } as never, gridcolor: "#EFEFEF", tickformat: "$,.0f" },
          legend: { orientation: "h", y: -0.28, x: 0.5, xanchor: "center" },
          shapes: [
            {
              type: "line",
              xref: "paper", x0: 0, x1: 1,
              y0: 0, y1: 0,
              line: { color: "#121212", width: 1 },
            },
          ],
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 380 }}
      />
    </ChartFrame>
  );
}
