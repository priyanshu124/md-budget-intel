"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// ─── Core narrative charts
const StructuralGapChart  = dynamic(() => import("@/components/charts/StructuralGapChart"),  { ssr: false });
const ReserveChart        = dynamic(() => import("@/components/charts/ReserveChart"),         { ssr: false });
const HealthSpendingChart = dynamic(() => import("@/components/charts/HealthSpendingChart"),  { ssr: false });
const DeficiencyChart     = dynamic(() => import("@/components/charts/DeficiencyChart"),      { ssr: false });
const FederalRiskChart    = dynamic(() => import("@/components/charts/FederalRiskChart"),     { ssr: false });
const BlueprintChart      = dynamic(() => import("@/components/charts/BlueprintChart"),       { ssr: false });
const JcrCutsChart        = dynamic(() => import("@/components/charts/JcrCutsChart"),         { ssr: false });

// ─── Story deep-dives
const DdaBudgetChart         = dynamic(() => import("@/components/charts/DdaBudgetChart"),         { ssr: false });
const DdaDeepDiveChart       = dynamic(() => import("@/components/charts/DdaDeepDiveChart"),       { ssr: false });
const DdaSubBreakdownChart   = dynamic(() => import("@/components/charts/DdaSubBreakdownChart"),   { ssr: false });
const EducationStoryChart    = dynamic(() => import("@/components/charts/EducationStoryChart"),    { ssr: false });

// ─── IT & legacy
const ItLegacyChart       = dynamic(() => import("@/components/charts/ItLegacyChart"),       { ssr: false });
const LegacyBubblesChart  = dynamic(() => import("@/components/charts/LegacyBubblesChart"),  { ssr: false });

// ─── JCR analysis
const JcrOverviewChart       = dynamic(() => import("@/components/charts/JcrOverviewChart"),       { ssr: false });
const JcrCommerceChart       = dynamic(() => import("@/components/charts/JcrCommerceChart"),       { ssr: false });
const JcrFiveAlarmsChart     = dynamic(() => import("@/components/charts/JcrFiveAlarmsChart"),     { ssr: false });
const JcrConsentDecreeChart  = dynamic(() => import("@/components/charts/JcrConsentDecreeChart"),  { ssr: false });
const JcrElectionRiskChart   = dynamic(() => import("@/components/charts/JcrElectionRiskChart"),   { ssr: false });

// ─── Projections
const MdhCagrChart        = dynamic(() => import("@/components/charts/MdhCagrChart"),        { ssr: false });
const ReserveBurnChart    = dynamic(() => import("@/components/charts/ReserveBurnChart"),    { ssr: false });
const BlueprintGapChart   = dynamic(() => import("@/components/charts/BlueprintGapChart"),   { ssr: false });
const ItAgeBombChart      = dynamic(() => import("@/components/charts/ItAgeBombChart"),      { ssr: false });

// ─── Sankey
const SankeyChart         = dynamic(() => import("@/components/charts/SankeyChart"),         { ssr: false });

// ─── Interactive
const FederalCutCalculator = dynamic(() => import("@/components/charts/FederalCutCalculator"), { ssr: false });

type Tab = "highlights" | "jcr" | "it" | "stories" | "projections" | "flow" | "jcr_analysis";

const TABS: Array<{ key: Tab; label: string; note: string }> = [
  { key: "highlights",   label: "Budget Highlights", note: "The 7-chart narrative arc" },
  { key: "jcr",          label: "JCR Cuts",          note: "Where the legislature cut" },
  { key: "it",           label: "IT & Legacy",       note: "Replacement backlog" },
  { key: "stories",      label: "Story Deep-Dives",  note: "DDA · Education · Health" },
  { key: "projections",  label: "Projections",       note: "What happens next" },
  { key: "flow",         label: "Budget Flow",       note: "Revenue → agency Sankey" },
  { key: "jcr_analysis", label: "JCR Analysis",      note: "Five alarms · decrees · elections" },
];

export default function NarrativePage() {
  const [tab, setTab] = useState<Tab>("highlights");

  return (
    <div className="page-enter" style={{ padding: "28px 28px 60px", maxWidth: 1400, margin: "0 auto" }}>
      <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-deep)", marginBottom: 4 }}>
        Budget Narrative
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-soft)", marginBottom: 20, maxWidth: 800, lineHeight: 1.6 }}>
        The full analytical workbook — Maryland&apos;s fiscal story told across seven chapters.
        Every chart, caption, and citation is drawn verbatim from Senator Guzzone&apos;s briefing materials
        (ACFR 2023–2025, JCR 2025, FY2026–FY2027 budget volumes, DoIT Chapter 497, SB 1372 Blueprint).
      </p>

      {/* Tab bar */}
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 8,
          borderBottom: "2px solid var(--line)",
          overflowX: "auto",
          paddingBottom: 0,
        }}
      >
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              padding: "10px 16px 12px",
              background: tab === t.key ? "var(--nxt-purple)" : "transparent",
              color: tab === t.key ? "white" : "var(--nxt-deep)",
              border: "none",
              borderRadius: "6px 6px 0 0",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 700,
              whiteSpace: "nowrap",
              transition: "all 0.18s ease",
              letterSpacing: "-0.1px",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        style={{
          fontSize: 11,
          color: "var(--text-soft)",
          fontStyle: "italic",
          marginBottom: 24,
          paddingLeft: 4,
        }}
      >
        {TABS.find((t) => t.key === tab)?.note}
      </div>

      {tab === "highlights" && <HighlightsTab />}
      {tab === "jcr" && <JcrTab />}
      {tab === "it" && <ItTab />}
      {tab === "stories" && <StoriesTab />}
      {tab === "projections" && <ProjectionsTab />}
      {tab === "flow" && <FlowTab />}
      {tab === "jcr_analysis" && <JcrAnalysisTab />}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// Reusable layout helpers
// ═══════════════════════════════════════════════════════════════

function Grid({ children, cols = 2 }: { children: React.ReactNode; cols?: 1 | 2 }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: cols === 1 ? "1fr" : "1fr 1fr",
        gap: 24,
      }}
    >
      {children}
    </div>
  );
}

function Card({ children, full }: { children: React.ReactNode; full?: boolean }) {
  return (
    <div
      className="card"
      style={{
        padding: 22,
        gridColumn: full ? "1 / -1" : "auto",
      }}
    >
      {children}
    </div>
  );
}

function SubTabs<T extends string>({
  tabs, current, onChange,
}: {
  tabs: Array<{ key: T; label: string }>;
  current: T;
  onChange: (k: T) => void;
}) {
  return (
    <div style={{ display: "flex", gap: 6, marginBottom: 18, flexWrap: "wrap" }}>
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          style={{
            padding: "6px 14px",
            background: current === t.key ? "var(--nxt-tint, #B05AA8)" : "white",
            color: current === t.key ? "white" : "var(--nxt-deep)",
            border: `1px solid ${current === t.key ? "var(--nxt-tint, #B05AA8)" : "var(--line)"}`,
            borderRadius: 4,
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "var(--mono)",
            letterSpacing: "0.04em",
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// Tabs
// ═══════════════════════════════════════════════════════════════

function HighlightsTab() {
  return (
    <Grid>
      <Card full><StructuralGapChart /></Card>
      <Card><ReserveChart /></Card>
      <Card><HealthSpendingChart /></Card>
      <Card><DeficiencyChart /></Card>
      <Card><FederalRiskChart /></Card>
      <Card full><BlueprintChart /></Card>
      <Card full><JcrCutsChart /></Card>
    </Grid>
  );
}

function JcrTab() {
  return (
    <Grid>
      <Card full><JcrOverviewChart /></Card>
      <Card full><JcrCutsChart /></Card>
      <Card><JcrCommerceChart /></Card>
      <Card><JcrConsentDecreeChart /></Card>
    </Grid>
  );
}

function ItTab() {
  return (
    <Grid>
      <Card full><ItLegacyChart /></Card>
      <Card><LegacyBubblesChart /></Card>
      <Card><ItAgeBombChart /></Card>
    </Grid>
  );
}

function StoriesTab() {
  type SubKey = "dda" | "dda_deep" | "dda_breakdown" | "education" | "health" | "deficiency" | "federal" | "blueprint" | "reserve";
  const [sub, setSub] = useState<SubKey>("dda");
  const subs: Array<{ key: SubKey; label: string }> = [
    { key: "dda",           label: "DDA Budget" },
    { key: "dda_deep",      label: "DDA Deep-Dive" },
    { key: "dda_breakdown", label: "DDA Sub-Breakdown" },
    { key: "education",     label: "Education" },
    { key: "health",        label: "Health Spiral" },
    { key: "deficiency",    label: "Deficiency Bomb" },
    { key: "federal",       label: "Federal Risk" },
    { key: "blueprint",     label: "Blueprint" },
    { key: "reserve",       label: "Reserve Collapse" },
  ];
  return (
    <>
      <SubTabs tabs={subs} current={sub} onChange={setSub} />
      <Grid cols={1}>
        {sub === "dda"           && <Card><DdaBudgetChart /></Card>}
        {sub === "dda_deep"      && <Card><DdaDeepDiveChart /></Card>}
        {sub === "dda_breakdown" && <Card><DdaSubBreakdownChart /></Card>}
        {sub === "education"     && <Card><EducationStoryChart /></Card>}
        {sub === "health"        && <Card><HealthSpendingChart /></Card>}
        {sub === "deficiency"    && <Card><DeficiencyChart /></Card>}
        {sub === "federal"       && <Card><FederalRiskChart /></Card>}
        {sub === "blueprint"     && <Card><BlueprintChart /></Card>}
        {sub === "reserve"       && <Card><ReserveChart /></Card>}
      </Grid>
    </>
  );
}

function ProjectionsTab() {
  type SubKey = "gap" | "mdh" | "reserve_burn" | "blueprint" | "it_age" | "federal_calc";
  const [sub, setSub] = useState<SubKey>("gap");
  const subs: Array<{ key: SubKey; label: string }> = [
    { key: "gap",          label: "Structural Gap" },
    { key: "mdh",          label: "MDH 7% CAGR" },
    { key: "reserve_burn", label: "Reserve Burn" },
    { key: "blueprint",    label: "Blueprint Gap" },
    { key: "it_age",       label: "IT Age-Bomb" },
    { key: "federal_calc", label: "Federal Cut Calculator" },
  ];
  return (
    <>
      <SubTabs tabs={subs} current={sub} onChange={setSub} />
      <Grid cols={1}>
        {sub === "gap"          && <Card><StructuralGapChart /></Card>}
        {sub === "mdh"          && <Card><MdhCagrChart /></Card>}
        {sub === "reserve_burn" && <Card><ReserveBurnChart /></Card>}
        {sub === "blueprint"    && <Card><BlueprintGapChart /></Card>}
        {sub === "it_age"       && <Card><ItAgeBombChart /></Card>}
        {sub === "federal_calc" && <Card><FederalCutCalculator /></Card>}
      </Grid>
    </>
  );
}

function FlowTab() {
  return (
    <Grid cols={1}>
      <Card><SankeyChart /></Card>
    </Grid>
  );
}

function JcrAnalysisTab() {
  type SubKey = "alarms" | "overview" | "commerce" | "consent" | "election" | "cuts";
  const [sub, setSub] = useState<SubKey>("alarms");
  const subs: Array<{ key: SubKey; label: string }> = [
    { key: "alarms",   label: "Five Fiscal Alarms" },
    { key: "overview", label: "JCR 2024 vs 2025" },
    { key: "commerce", label: "Commerce Cut" },
    { key: "consent",  label: "Consent Decrees" },
    { key: "election", label: "Election Risk" },
    { key: "cuts",     label: "Cuts Waterfall" },
  ];
  return (
    <>
      <SubTabs tabs={subs} current={sub} onChange={setSub} />
      <Grid cols={1}>
        {sub === "alarms"   && <Card><JcrFiveAlarmsChart /></Card>}
        {sub === "overview" && <Card><JcrOverviewChart /></Card>}
        {sub === "commerce" && <Card><JcrCommerceChart /></Card>}
        {sub === "consent"  && <Card><JcrConsentDecreeChart /></Card>}
        {sub === "election" && <Card><JcrElectionRiskChart /></Card>}
        {sub === "cuts"     && <Card><JcrCutsChart /></Card>}
      </Grid>
    </>
  );
}
