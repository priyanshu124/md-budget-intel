"use client";
import dynamic from "next/dynamic";
import KpiRow from "@/components/KpiRow";
import Carousel from "@/components/Carousel";
import BudgetMapEmbed from "@/components/BudgetMapEmbed";

const TICKER = [
  "FY2027 Operating Budget: $70.8B",
  "Shortfall Closed: $1.5B — No new taxes or fees",
  "Structural Deficit Ahead: $2.3B projected for FY2028",
  "Budget Surplus: $250M",
  "Rainy Day Fund: 8% of General Fund revenues",
  "DDA Cut: −$126M from Developmental Disabilities Admin",
  "SEIF Transfer: $292M moved to General Fund",
  "Retirement Cost Shift: $39.3M to local governments",
  "Implementation: New budget begins July 1",
  "Gap-closing Mix: Cuts · Transfers · Bond swaps",
];

const INSIGHT_CARDS = [
  {
    tag: "KEY FINDING",
    title: "The Health Spiral",
    body: "Maryland's Dept. of Health grew 84% over 10 years — now consuming 37% of the entire state budget. MDH drove $2.25B of $2.9B in emergency deficiency appropriations in FY2025 alone.",
    href: "#",
    color: "var(--red)",
    icon: "🏥",
  },
  {
    tag: "RISK FACTOR",
    title: "The Federal Cliff",
    body: "Maryland receives $19.4B in federal funds annually — 33% of the entire budget. DHS is 79% federally funded, MDH 55%. With reserves at $132M, any federal cut creates an immediate service delivery crisis.",
    href: "#",
    color: "var(--amber)",
    icon: "⚠️",
  },
  {
    tag: "MANDATE",
    title: "The Blueprint Bind",
    body: "The Blueprint for Maryland's Future legally mandates education spending to grow from $12.9B to $18.3B by FY2030 — a $5.4B increase — while the state simultaneously faces a $2.7B structural deficit.",
    href: "/methodology",
    color: "var(--nxt-purple)",
    icon: "📚",
  },
];

export default function HomePage() {
  return (
    <div className="page-enter" style={{ padding: "28px 28px 60px", maxWidth: 1400, margin: "0 auto" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div style={{ marginBottom: 20 }}>
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
          Maryland Budget Intelligence System · MBIS
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
          FY2027 Fiscal Intelligence Dashboard
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
          Ten interactive visualizations, one county map, and six key indicators — explaining where Maryland&apos;s
          proposed $70.8B operating budget goes, how the $1.5B shortfall was closed, and what&apos;s ahead for
          every agency.
        </p>
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

      {/* ── Insight cards ─────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 14,
          marginBottom: 30,
        }}
      >
        {INSIGHT_CARDS.map((card) => (
          <a
            key={card.tag}
            href={card.href}
            style={{
              textDecoration: "none",
              background: "#fff",
              border: "1px solid var(--line)",
              borderTop: `3px solid ${card.color}`,
              borderRadius: 10,
              padding: "18px 20px 16px",
              display: "block",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = `0 8px 24px ${card.color}28`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 18 }}>{card.icon}</span>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  color: card.color,
                  fontWeight: 700,
                }}
              >
                {card.tag}
              </div>
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 18,
                fontWeight: 800,
                color: "var(--nxt-deep)",
                marginBottom: 8,
                lineHeight: 1.2,
              }}
            >
              {card.title}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.6 }}>{card.body}</div>
          </a>
        ))}
      </div>

      {/* ── Carousel section header ────────────────────────────── */}
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

      {/* ── Main carousel ─────────────────────────────────────── */}
      <Carousel />

      {/* ── Budget Map section ────────────────────────────────── */}
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
      <BudgetMapEmbed />

      {/* ── Minimal bottom ────────────────────────────────────── */}
      <div
        style={{
          marginTop: 36,
          paddingTop: 24,
          borderTop: "1px solid var(--line-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text-mute)", letterSpacing: "0.06em" }}>
          MBIS · Maryland Budget Intelligence System · Data through FY2025 actuals, FY2027 proposed
        </div>
        <a
          href="/methodology"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "var(--nxt-purple)",
            fontWeight: 700,
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          Methodology &amp; Sources ↗
        </a>
      </div>
    </div>
  );
}
