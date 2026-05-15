"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const MarylandFiscalJourneyChart = dynamic(() => import("@/components/charts/MarylandFiscalJourneyChart"), { ssr: false });
const SankeyChart                 = dynamic(() => import("@/components/charts/SankeyChart"),                { ssr: false });
const JcrCommerceChart            = dynamic(() => import("@/components/charts/JcrCommerceChart"),           { ssr: false });
const DeficiencyChart             = dynamic(() => import("@/components/charts/DeficiencyChart"),            { ssr: false });
const StructuralGapChart          = dynamic(() => import("@/components/charts/StructuralGapChart"),         { ssr: false });
const BlueprintChart              = dynamic(() => import("@/components/charts/BlueprintChart"),             { ssr: false });
const FederalCutCalculator        = dynamic(() => import("@/components/charts/FederalCutCalculator"),       { ssr: false });
const ReserveChart                = dynamic(() => import("@/components/charts/ReserveChart"),               { ssr: false });
const HealthSpendingChart         = dynamic(() => import("@/components/charts/HealthSpendingChart"),        { ssr: false });
const JcrCutsChart                = dynamic(() => import("@/components/charts/JcrCutsChart"),               { ssr: false });

interface CitationLink {
  label: string;
  url: string;
}

interface Slide {
  title: string;
  insight: string;
  source: string;
  citations: CitationLink[];
  viz: React.ReactNode;
  accentColor?: string;
  fullWidth?: boolean;
}

// Order mirrors notebook: Fiscal Journey → Sankey → Commerce → Deficiency →
// Structural Gap → Blueprint → Federal Calculator → Reserve → Health → JCR Cuts
const SLIDES: Slide[] = [
  {
    title: "Maryland's Fiscal Journey",
    insight:
      "Eight-year spending trend from FY2019 to FY2026, rising from $43.8B to $67.3B. Filter by fiscal year to see categorical breakdowns and the strategic priorities driving each budget.",
    source: "MD DBM · FY2021–FY2026 Budget Highlights (each year's PDF, pp.6–10)",
    citations: [
      { label: "FY2026 Maryland State Budget Highlights · pp.6–7", url: "https://dbm.maryland.gov/budget/Documents/operbudget/2026/proposed/FY2026MarylandStateBudgetHighlights.pdf#page=6" },
      { label: "FY2025 Maryland State Budget Highlights · pp.6–7", url: "https://dbm.maryland.gov/budget/Documents/operbudget/2025/proposed/FY2025MarylandStateBudgetHighlights.pdf#page=6" },
      { label: "FY2024 Maryland State Budget Highlights · pp.9–10", url: "https://dbm.maryland.gov/budget/Documents/operbudget/2024/proposed/FY2024MarylandStateBudgetHighlights.pdf#page=9" },
      { label: "FY2023 Maryland State Budget Highlights · pp.7–8", url: "https://dbm.maryland.gov/budget/Documents/operbudget/2023/proposed/FY2023MarylandStateBudgetHighlights.pdf#page=7" },
      { label: "FY2022 Maryland State Budget Highlights · pp.6–7", url: "https://dbm.maryland.gov/budget/Documents/operbudget/2022/proposed/FY2022MarylandStateBudgetHighlights.pdf#page=6" },
      { label: "FY2021 Maryland State Budget Highlights · pp.6–7", url: "https://dbm.maryland.gov/budget/Documents/operbudget/2021/proposed/FY2021MarylandStateBudgetHighlights.pdf#page=6" },
    ],
    viz: <MarylandFiscalJourneyChart />,
    accentColor: "#8A1538",
    fullWidth: true,
  },
  {
    title: "Budget Flow: Revenue to Agency",
    insight:
      "Maryland's budget flows from 6 revenue streams through 3 types of funds into 30+ agencies.",
    source: "",
    citations: [],
    viz: <SankeyChart />,
    accentColor: "#6B3FA0",
    fullWidth: true,
  },
  {
    title: "Dept. of Commerce: $27.5M Cut",
    insight:
      "The largest percentage reduction among major agencies. Economic Development took the biggest hit at −$15M, followed by Supplemental No. 1 Programs at −$4.3M. The combined cut totals $27.69M across six program areas. Regular Budget Cut $23.2M + Supplemental No.1 $4.3M.",
    source: "JCR 2025  |  p.265 — Dept. of Commerce budget analysis (PDF p.365)",
    citations: [
      { label: "Joint Chairmen’s Report 2025 · p.265 — Dept. of Commerce budget analysis (T00)", url: "https://dls.maryland.gov/pubs/prod/RecurRpt/Joint-Chairmens-Report_2025.pdf#page=365" },
    ],
    viz: <JcrCommerceChart />,
    accentColor: "#C41230",
  },
  {
    title: "One Agency Caused 77¢ of Every Dollar in Maryland's Budget Shortfall",
    insight:
      "FY2025 deficiency appropriations totaled $2.9B. MDH (Medicaid + DDA + Behavioral Health) accounted for $2,250M, more than all other agencies combined.",
    source: "FY2026 Budget Vol 2  ·  pp.486–487 (PDF pp.487–488)",
    citations: [
      { label: "FY2026 Maryland State Budget Volume 2 · pp.486–487 — Summary of FY2025 Deficiency Appropriations", url: "https://dbm.maryland.gov/budget/Documents/operbudget/2026/proposed/FY2026-Volume2.pdf#page=487" },
    ],
    viz: <DeficiencyChart />,
    accentColor: "#C41230",
  },
  {
    title: "Spending Is Growing 4× Faster Than Revenue",
    insight:
      "Post-ARPA: expenditures growing $3.8B/yr vs. revenue growing $1.2B/yr, three times faster. Expenditure overtook revenue in FY2025 and the structural gap reaches -$19.7B by FY2030 if current trends hold.",
    source: "ACFR 2025  ·  Statistical Section  ·  pp.231–233 (PDF p.247)  |  Changes in Fund Balances, Governmental Funds, Last Ten Fiscal Years (audited)  |  Projection: FY2023–2025 slope extended to FY2030",
    citations: [
      { label: "ACFR 2025 · Statistical Section · pp.231–233 — Changes in Fund Balances, Governmental Funds, Last Ten Fiscal Years (audited)", url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2025-acfr-accessible.pdf#page=247" },
    ],
    viz: <StructuralGapChart />,
    accentColor: "#C41230",
  },
  {
    title: "A $65M Cut Creates a Permanent ~$1B Annual Compliance Deficit",
    insight:
      "Blueprint mandate grows each year. The JCR starting-line cut means Maryland never catches up even at historical growth rates. Mandated spending: $12.9B to $18.3B by FY2030.",
    source: "Actual K-12: ACFR 2025  ·  p.225  |  JCR cuts: JCR 2025  ·  pp.xxxiii–xxxiv + p.233  |  Blueprint: SB 1372",
    citations: [
      { label: "ACFR 2025 · Statistical Section · p.225 — Expenses by Function, Last Ten Fiscal Years (Education row, audited)", url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2025-acfr-accessible.pdf#page=241" },
      { label: "JCR 2025 · pp.xxxiii–xxxiv — Net Changes in Appropriations (MSDE Aid to Ed −$44.0M + MHEC SFA −$11.5M)", url: "https://dls.maryland.gov/pubs/prod/RecurRpt/Joint-Chairmens-Report_2025.pdf#page=33" },
      { label: "JCR 2025 · p.233 — R00A02 Aid to Education, Blueprint for Maryland's Future Fund amendments", url: "https://dls.maryland.gov/pubs/prod/RecurRpt/Joint-Chairmens-Report_2025.pdf#page=333" },
    ],
    viz: <BlueprintChart />,
    accentColor: "#C4820A",
  },
  {
    title: "Federal Cut Calculator (Interactive)",
    insight:
      "Drag the slider from 0% to 20% (pick 1, 3, 13, etc.) and the chart re-renders with the new cut amount. Dollar impact per agency at the chosen reduction in federal grants, based on ACFR 2025 verified federal dependency percentages.",
    source: "ACFR 2025  ·  pp.45–46 (PDF p.61)",
    citations: [
      { label: "ACFR 2025 · pp.45–46 — Statement of Activities, Year Ended June 30, 2025 (audited)", url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2025-acfr-accessible.pdf#page=61" },
    ],
    viz: <FederalCutCalculator />,
    accentColor: "#1D4F91",
  },
  {
    title: "Maryland's Two Fiscal Safety Nets: Both in Decline",
    insight:
      "Maryland's Rainy Day Fund dropped 96% in three years, from $3.6B (FY2022) to $132M (FY2025). The General Fund balance turned negative (-$905M) for the first time in modern history.",
    source: "Reserve Fund: ACFR 2023 p.20  |  ACFR 2024 pp.18–19  |  ACFR 2025 pp.17–22",
    citations: [
      { label: "ACFR 2025 · pp.17–22 — Balance Sheet, Governmental Funds — Reserve Fund balance (audited)", url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2025-acfr-accessible.pdf#page=33" },
      { label: "ACFR 2024 · pp.18–19 — Balance Sheet, Governmental Funds — Reserve Fund balance (audited)", url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2024-acfr-accessible.pdf#page=19" },
      { label: "ACFR 2023 · p.20 — Balance Sheet, Governmental Funds — Reserve Fund balance (audited)", url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2023-acfr-accessible.pdf#page=20" },
    ],
    viz: <ReserveChart />,
    accentColor: "#C41230",
  },
  {
    title: "Health Spending Grew Twice as Fast as Every Other Agency Combined",
    insight:
      "The Maryland Department of Health grew 84% over 10 years at a 7% compound annual rate, driven by Medicaid enrollment, DDA caseloads, and behavioral health demand that outpaced any other state function.",
    source: "ACFR 2025  ·  p.165  |  Expenses by Function — Last Ten Fiscal Years (audited)",
    citations: [
      { label: "ACFR 2025 · p.165 — Expenses by Function, Last Ten Fiscal Years — Health row (audited)", url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2025-acfr-accessible.pdf#page=181" },
    ],
    viz: <HealthSpendingChart />,
    accentColor: "#C41230",
  },
  {
    title: "The Legislature's $1.1 Billion Response: Where the Cuts Fell",
    insight:
      "The Joint Chairmen's Report cut $1.27B to partially close FY2025 shortfalls. The largest single cut: -$469M to the State Reserve Fund itself, leaving almost nothing in the rainy day account.",
    source: "JCR 2025  ·  p.33  |  Statewide Reductions Summary",
    citations: [
      { label: "JCR 2025 · p.33 — Statewide Reductions Summary, FY2025 Deficiency & FY2026 Budget Reductions", url: "https://dls.maryland.gov/pubs/prod/RecurRpt/Joint-Chairmens-Report_2025.pdf#page=33" },
    ],
    viz: <JcrCutsChart />,
    accentColor: "#1D4F91",
  },
];

/* ── Citation block — matches notebook display(HTML()) style exactly ─── */
function CitationBlock({ citations }: { citations: CitationLink[] }) {
  const multi = citations.length > 1;
  return (
    <div
      style={{
        fontFamily: "Georgia, serif",
        background: "#FAF6EE",
        borderTop: "3px double #0A0A0A",
        padding: "14px 18px 12px",
        marginTop: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', ui-monospace, monospace",
          fontSize: 10,
          letterSpacing: "2px",
          color: "#8A1538",
          fontWeight: 700,
          marginBottom: 8,
          textTransform: "uppercase",
        }}
      >
        {multi ? "SOURCES" : "SOURCE"}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {citations.map((c, idx) => (
          <a
            key={idx}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "9px 13px",
              background: "#fff",
              color: "#1a1a1a",
              border: "1px solid #1a1a1a",
              textDecoration: "none",
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 1,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#f0ead9"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; }}
          >
            <span style={{ lineHeight: 1.4 }}>📄 {c.label}</span>
            <span style={{ opacity: 0.65, marginLeft: 12, fontSize: 14, flexShrink: 0 }}>↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const scrollRef  = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart  = useRef(0);
  const scrollStart = useRef(0);
  const isScrolling = useRef(false);

  /* ── programmatic scroll-to ──────────────────────────────── */
  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    isScrolling.current = true;
    el.scrollTo({ left: el.clientWidth * index, behavior: "smooth" });
    setCurrent(index);
    setTimeout(() => { isScrolling.current = false; }, 650);
  }, []);

  const prev = useCallback(() => scrollTo(Math.max(0, current - 1)), [current, scrollTo]);
  const next = useCallback(() => scrollTo(Math.min(SLIDES.length - 1, current + 1)), [current, scrollTo]);

  /* ── sync current index when user natively scrolls ──────── */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (isScrolling.current) return;
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      if (idx !== current) setCurrent(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [current]);

  /* ── mouse-drag to scroll ────────────────────────────────── */
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStart.current  = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = dragStart.current - e.clientX;
    scrollRef.current.scrollLeft = scrollStart.current + dx;
  };

  const onMouseUp = () => {
    if (!scrollRef.current) return;
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
    scrollRef.current.style.userSelect = "";
    // Snap to nearest slide
    const el = scrollRef.current;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    scrollTo(Math.min(Math.max(0, idx), SLIDES.length - 1));
  };

  /* ── keyboard navigation ─────────────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const progress = SLIDES.length > 1 ? (current / (SLIDES.length - 1)) * 100 : 0;
  const slide    = SLIDES[current];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      {/* ── progress bar ────────────────────────────────────── */}
      <div style={{ height: 3, background: "var(--line-soft)" }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--nxt-purple), var(--nxt-tint))",
            transition: "width 0.35s ease",
            borderRadius: "0 2px 2px 0",
          }}
        />
      </div>

      {/* ── top nav bar ─────────────────────────────────────── */}
      <div
        style={{
          background: "var(--line-soft)",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--line)",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontWeight: 700,
              fontSize: 13,
              color: "var(--nxt-deep)",
              fontFamily: "var(--font)",
            }}
          >
            Top Insights and Trends from MD State&apos;s Budget
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* Dot indicators */}
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                title={SLIDES[i].title}
                style={{
                  width: i === current ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? "var(--nxt-purple)" : "var(--line)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--text-mute)",
              minWidth: 48,
              textAlign: "right",
            }}
          >
            {current + 1} / {SLIDES.length}
          </span>

          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous slide"
            style={{
              padding: "5px 11px",
              borderRadius: 6,
              border: "1px solid var(--line)",
              background: current === 0 ? "var(--line-soft)" : "#fff",
              cursor: current === 0 ? "default" : "pointer",
              fontSize: 14,
              color: current === 0 ? "var(--text-mute)" : "var(--nxt-deep)",
              transition: "background 0.15s",
              opacity: current === 0 ? 0.45 : 1,
            }}
            onMouseEnter={(e) => { if (current > 0) (e.currentTarget as HTMLButtonElement).style.background = "var(--nxt-pink)"; }}
            onMouseLeave={(e) => { if (current > 0) (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
          >
            ◀
          </button>
          <button
            onClick={next}
            disabled={current === SLIDES.length - 1}
            aria-label="Next slide"
            style={{
              padding: "5px 11px",
              borderRadius: 6,
              border: "1px solid var(--line)",
              background: current === SLIDES.length - 1 ? "var(--line-soft)" : "#fff",
              cursor: current === SLIDES.length - 1 ? "default" : "pointer",
              fontSize: 14,
              color: current === SLIDES.length - 1 ? "var(--text-mute)" : "var(--nxt-deep)",
              transition: "background 0.15s",
              opacity: current === SLIDES.length - 1 ? 0.45 : 1,
            }}
            onMouseEnter={(e) => { if (current < SLIDES.length - 1) (e.currentTarget as HTMLButtonElement).style.background = "var(--nxt-pink)"; }}
            onMouseLeave={(e) => { if (current < SLIDES.length - 1) (e.currentTarget as HTMLButtonElement).style.background = "#fff"; }}
          >
            ▶
          </button>
        </div>
      </div>

      {/* ── slides strip — ACTUALLY scrollable ──────────────── */}
      <div
        ref={scrollRef}
        className="carousel-scroll"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        {SLIDES.map((s, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "100%",
              scrollSnapAlign: "start",
            }}
          >
            {s.fullWidth ? (
              /* Full-width layout — chart fills its own natural height */
              <div style={{ background: "#FAF6EE" }}>
                <div style={{ minHeight: 460 }}>
                  {s.viz}
                </div>
              </div>
            ) : (
              /* Two-column: chart + commentary sidebar */
              <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 0, minHeight: 440 }}>
                <div style={{ padding: "24px 20px 20px 24px", background: "#fafafa" }}>
                  {s.viz}
                </div>
                <div
                  style={{
                    padding: "24px 24px 20px",
                    borderLeft: `4px solid ${s.accentColor ?? "var(--nxt-purple)"}`,
                    background: "linear-gradient(180deg, #fff 0%, var(--nxt-lavender) 100%)",
                    animation: i === current ? "fadeUp 0.35s ease both" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: 10,
                  }}
                >
                  <div className="mono-label">
                    Chart {i + 1} of {SLIDES.length}
                  </div>
                  <h4
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "var(--nxt-deep)",
                      lineHeight: 1.3,
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {s.title}
                  </h4>
                  <p style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.65 }}>
                    {s.insight}
                  </p>
                  {/* Clickable source links — replaces plain text source */}
                  <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--line)" }}>
                    <div className="mono-label" style={{ marginBottom: 6, color: "#8A1538" }}>
                      {s.citations.length > 1 ? "SOURCES" : "SOURCE"}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      {s.citations.map((c, idx) => (
                        <a key={idx} href={c.url} target="_blank" rel="noopener noreferrer"
                          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", background: "#fff", color: "#1a1a1a", border: "1px solid #1a1a1a", textDecoration: "none", fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700, lineHeight: 1.4, borderRadius: 1 }}>
                          <span>📄 {c.label}</span>
                          <span style={{ opacity: 0.65, marginLeft: 8, flexShrink: 0 }}>↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── tab strip — quick jump ───────────────────────────── */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          borderTop: "1px solid var(--line)",
          background: "#fff",
          padding: "0 8px",
          scrollbarWidth: "none",
        }}
        className="carousel-scroll-hide"
      >
        {SLIDES.map((s, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              flexShrink: 0,
              padding: "10px 14px",
              border: "none",
              borderBottom: i === current ? "2px solid var(--nxt-purple)" : "2px solid transparent",
              background: "transparent",
              cursor: "pointer",
              fontSize: 11,
              fontWeight: i === current ? 700 : 500,
              color: i === current ? "var(--nxt-purple)" : "var(--text-mute)",
              whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (i !== current) (e.currentTarget as HTMLButtonElement).style.color = "var(--nxt-deep)";
            }}
            onMouseLeave={(e) => {
              if (i !== current) (e.currentTarget as HTMLButtonElement).style.color = "var(--text-mute)";
            }}
          >
            {i + 1}. {s.title}
          </button>
        ))}
      </div>
    </div>
  );
}
