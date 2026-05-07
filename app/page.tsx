"use client";
import dynamic from "next/dynamic";
import KpiRow from "@/components/KpiRow";
import Carousel from "@/components/Carousel";
import BudgetMapEmbed from "@/components/BudgetMapEmbed";
import ScrollReveal from "@/components/ScrollReveal";

const TICKER = [
  "FY2027 Operating Budget: $70.8B",
  "Shortfall Closed: $1.5B, No new taxes or fees",
  "Structural Deficit Ahead: $2.3B projected for FY2028",
  "Budget Surplus: $250M",
  "Rainy Day Fund: 8% of General Fund revenues",
  "DDA Cut: -$126M from Developmental Disabilities Admin",
  "SEIF Transfer: $292M moved to General Fund",
  "Retirement Cost Shift: $39.3M to local governments",
  "Implementation: New budget begins July 1",
  "Gap-closing Mix: Cuts, Transfers, Bond swaps",
];

export default function HomePage() {
  return (
    <div className="page-enter" style={{ padding: "28px 28px 60px", maxWidth: 1400, margin: "0 auto" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div style={{ marginBottom: 20 }}>
        <div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              color: "var(--nxt-tint)",
              letterSpacing: "0.18em",
              fontWeight: 700,
              marginBottom: 8,
              textTransform: "uppercase",
            }}
          >
            Maryland Budget Intel Tool
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 36,
              fontWeight: 900,
              color: "var(--nxt-deep)",
              letterSpacing: "-0.9px",
              marginBottom: 10,
              lineHeight: 1.08,
            }}
          >
            Maryland&apos;s Budget, Visualized
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: 14,
              color: "#666",
              maxWidth: 740,
              lineHeight: 1.6,
            }}
          >
            Ten interactive visualizations, one county map, and a deep-dive agency dashboard. All data
            sourced directly from Maryland&apos;s official budget documents.
          </p>
        </div>
      </div>

      {/* ── Scrolling ticker ──────────────────────────────────── */}
      <div
        style={{
          background: "var(--nxt-deep)",
          color: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          marginBottom: 22,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 40,
            padding: "9px 0",
            whiteSpace: "nowrap",
            animation: "tickerScroll 55s linear infinite",
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.03em",
          }}
        >
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "var(--flag-gold)", fontSize: 8 }}>◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── KPI cards ─────────────────────────────────────────── */}
      <KpiRow />

      {/* ── Carousel section header ────────────────────────────── */}
      <ScrollReveal>
        <div
          style={{
            marginBottom: 12,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          <h3
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--nxt-deep)",
              letterSpacing: "-0.3px",
            }}
          >
            Top Insights and Trends from MD State&apos;s Budget
          </h3>
        </div>
      </ScrollReveal>

      {/* ── Main carousel ─────────────────────────────────────── */}
      <ScrollReveal delay={60}>
        <Carousel />
      </ScrollReveal>

      {/* ── Budget Map section ────────────────────────────────── */}
      <ScrollReveal>
        <div
          id="map"
          style={{
            marginTop: 40,
            marginBottom: 12,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          <h3
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--nxt-deep)",
              letterSpacing: "-0.3px",
            }}
          >
            County Budget &amp; Outcomes Map
          </h3>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={60}>
        <BudgetMapEmbed />
      </ScrollReveal>

    </div>
  );
}
