"use client";
const NXT_PILLARS = [
  {
    name: "Purpose Driven",
    motto: "Why before what.",
    how: "MBIS exists to make Maryland's fiscal position legible to legislators, journalists, and the public — not to advocate. Every chart answers a question a real reader would ask.",
    color: "#802CD7",
  },
  {
    name: "Service Minded",
    motto: "Show up. Follow up. Follow through.",
    how: "Built as a long-lived dashboard, not a one-off report. Citations link back to source PDFs at the exact page so any reader can verify.",
    color: "#6321a5",
  },
  {
    name: "Integrity with Intentionality",
    motto: "We do what's right, especially when it's hard.",
    how: "We surface the structural deficit, the reserve collapse, and the federal exposure even when the headlines look fine. Modeled figures are flagged; cited figures trace to audited sources.",
    color: "#551c8e",
  },
  {
    name: "Backed by Data",
    motto: "Proof, not promises.",
    how: "Every figure traces to ACFR, JCR, or DBM source documents. No projections without the slope and assumptions stated. No agency-level number that isn't in a published audited statement.",
    color: "#802CD7",
  },
  {
    name: "Outcomes Oriented",
    motto: "Turn policy intent into lasting results.",
    how: "The KPIs, threshold colors, and trigger thresholds (red/amber/green) are designed so a non-finance reader knows in 5 seconds whether something is on track or breaking down.",
    color: "#6321a5",
  },
  {
    name: "Industry Led",
    motto: "Domain expertise from day one.",
    how: "Built in collaboration with Senate Budget & Taxation Committee staff and the iSchool capstone team — public finance literacy embedded in the product, not bolted on.",
    color: "#551c8e",
  },
];

const NIST_FUNCTIONS = [
  {
    fn: "GOVERN",
    color: "#211030",
    desc: "Source documents, methodology, and projection assumptions are public and version-controlled. Every claim has a citation. Disagreements with the data are tracked, not hidden.",
  },
  {
    fn: "MAP",
    color: "#551c8e",
    desc: "Budget mapped at three levels: revenue → fund type → agency (Sankey), agency → program (drill-downs), county → outcome (choropleth). Context is never removed from the data.",
  },
  {
    fn: "MEASURE",
    color: "#6321a5",
    desc: "Six KPI cards with red/amber/green thresholds. Trends shown over 8–10 years where audited data exists. No measurement without a stated baseline.",
  },
  {
    fn: "MANAGE",
    color: "#802CD7",
    desc: "The Guardrails page documents what the system refuses to do — answer hypothetical political questions, generate forecasts beyond stated horizons, or invent agency-level data not in source PDFs.",
  },
];

const PIPELINE = [
  {
    label: "INPUT",
    title: "7 Source Documents",
    body: "ACFR 2023–2025 (audited), JCR 2025 (legislative), FY2026–FY2027 DBM (executive). Every figure on this dashboard originates from one of these PDFs.",
    color: "#b376f6",
    num: "01",
  },
  {
    label: "MAGIC BOX",
    title: "Deterministic Pipeline",
    body: "Python notebooks parse, clean, and aggregate. No LLM in the loop. Every figure is reproducible: download the PDFs, run the notebooks, rebuild the site.",
    color: "#6321a5",
    num: "02",
  },
  {
    label: "OUTPUT",
    title: "This Dashboard",
    body: "10 visualizations + county map + 6 KPI cards. Every citation deep-links to the PDF at the exact page. Nothing is invented.",
    color: "#211030",
    num: "03",
  },
];

const SOURCES = [
  {
    title: "ACFR 2025 — Annual Comprehensive Financial Report",
    desc: "Primary source for all revenue, expenditure, and fund balance data. Audited actuals for FY2025.",
    url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2025-acfr-accessible.pdf",
    pages: "pp.17–22, 45, 165, 225, 231–233",
    tag: "AUDITED",
  },
  {
    title: "ACFR 2024",
    desc: "Prior-year actuals and federal dependency statements.",
    url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2024-acfr-accessible.pdf",
    pages: "pp.18–19, 45–47",
    tag: "AUDITED",
  },
  {
    title: "ACFR 2023",
    desc: "Reserve fund history and prior-year comparison data.",
    url: "https://www.marylandcomptroller.gov/content/dam/mdcomp/md/reports/financial/2023-acfr-accessible.pdf",
    pages: "pp.17–22",
    tag: "AUDITED",
  },
  {
    title: "Joint Chairmen's Report 2025",
    desc: "Legislative budget cuts, agency reductions, federal fund risk analysis.",
    url: "https://dls.maryland.gov/pubs/prod/RecurRpt/Joint-Chairmens-Report_2025.pdf",
    pages: "pp.33, 60, 233, 265, xxxiii–xxxiv",
    tag: "LEGISLATIVE",
  },
  {
    title: "FY2026 Proposed Budget — Volume 2",
    desc: "Deficiency appropriation schedule, agency narratives.",
    url: "https://dbm.maryland.gov/budget/Documents/operbudget/2026/proposed/FY2026-Volume2.pdf",
    pages: "pp.486–487",
    tag: "EXECUTIVE",
  },
  {
    title: "FY2027 Maryland State Budget Highlights",
    desc: "Governor's proposed FY2027 operating budget — $70.8B total.",
    url: "https://dbm.maryland.gov/budget/Documents/operbudget/2026/proposed/FY2026MarylandStateBudgetHighlights.pdf",
    pages: "pp.6, 9–10, 17–24",
    tag: "EXECUTIVE",
  },
];

const NOTES: Array<[string, string]> = [
  ["All-funds vs. General Fund", "The $70.8B FY2027 figure is the proposed all-funds operating budget. Charts reference the appropriate fund type per context — all-funds for the Sankey, General Fund for the structural gap and reserve analysis."],
  ["County-level estimates", "County budget allocation figures are modeled estimates based on agency program distributions and Census data. They are not official DBM allocations and are clearly labeled as modeled."],
  ["Deficiency data", "Deficiency appropriation totals come from the FY2026 Proposed Budget Vol. 2 (pp.486–487), which contains the FY2025 deficiency schedule."],
  ["Federal fund percentages", "Agency-level federal dependency ratios are derived from the ACFR 2025 Statement of Activities (p.45) and agency-specific schedules."],
  ["Projections", "Where projections appear (structural gap, Blueprint, MDH 2030), the slope and base years are stated on the chart. We do not extend projections beyond FY2030."],
];

const TAG_COLORS: Record<string, string> = {
  AUDITED: "#15803D",
  LEGISLATIVE: "#1D4F91",
  EXECUTIVE: "#6321a5",
};

export default function MethodologyPage() {
  return (
    <div className="page-enter" style={{ fontFamily: "var(--font)" }}>

      {/* ── HERO BAND ─────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #211030 0%, #551c8e 60%, #6321a5 100%)",
          padding: "56px 48px 52px",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              letterSpacing: "0.22em",
              fontWeight: 700,
              color: "#b376f6",
              marginBottom: 14,
              textTransform: "uppercase",
            }}
          >
            Methodology · MBIS · Maryland Budget Intelligence System
          </div>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 900,
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
              marginBottom: 18,
              color: "#fff",
            }}
          >
            How MBIS Works
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", maxWidth: 680, lineHeight: 1.75 }}>
            Every number on this dashboard originates from a published, audited government PDF.
            No LLM in the data loop. No invented figures. Every chart shows its source —
            and that source deep-links to the exact PDF page.
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 28, flexWrap: "wrap" }}>
            {[["7", "Source PDFs"], ["10", "Visualizations"], ["0", "LLM calls in data path"], ["100%", "Reproducible"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#b376f6", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontFamily: "var(--mono)", letterSpacing: "0.08em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "48px 28px 72px" }}>

        {/* ── PIPELINE ────────────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
            The Pipeline
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 24, letterSpacing: "-0.3px" }}>
            Input → Magic Box → Output
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr 40px 1fr", alignItems: "stretch", gap: 0 }}>
            {PIPELINE.flatMap((step, i) => {
              const card = (
                <div
                  key={step.label}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 2px 12px rgba(33,16,48,0.07)",
                  }}
                >
                  <div style={{ background: step.color, padding: "10px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 9, fontWeight: 800, color: "rgba(255,255,255,0.75)", letterSpacing: "0.18em" }}>{step.label}</span>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 18, fontWeight: 900, color: "rgba(255,255,255,0.25)" }}>{step.num}</span>
                  </div>
                  <div style={{ padding: "18px 18px 20px" }}>
                    <div style={{ fontWeight: 800, fontSize: 15, color: "var(--nxt-dark)", marginBottom: 8 }}>{step.title}</div>
                    <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.65 }}>{step.body}</div>
                  </div>
                </div>
              );
              if (i === PIPELINE.length - 1) return [card];
              const arrow = (
                <div key={`arrow-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--nxt-grape)", fontSize: 24, fontWeight: 900 }}>→</div>
              );
              return [card, arrow];
            })}
          </div>
          <p style={{ fontSize: 11, color: "var(--text-mute)", marginTop: 12, fontFamily: "var(--mono)", letterSpacing: "0.04em" }}>
            Anything the system can&apos;t source, it doesn&apos;t show. See{" "}
            <a href="/guardrails" style={{ color: "var(--nxt-blue-vi)", fontWeight: 700 }}>Guardrails ↗</a> for the explicit list.
          </p>
        </div>

        {/* ── NXT DNA PILLARS ─────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
            NXT DNA
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
            Built on NXT&apos;s Six Pillars
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
            MBIS doesn&apos;t just reference NXT&apos;s DNA — each pillar maps to a concrete design or data decision.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {NXT_PILLARS.map((p) => (
              <div
                key={p.name}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  padding: "20px 18px 18px",
                  borderTop: `3px solid ${p.color}`,
                  boxShadow: "0 2px 8px rgba(33,16,48,0.05)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(99,33,165,0.14)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(33,16,48,0.05)"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
              >
                <div style={{ fontWeight: 900, fontSize: 13, color: "var(--nxt-dark)", marginBottom: 5 }}>{p.name}</div>
                <div style={{ fontSize: 11, fontStyle: "italic", color: p.color, marginBottom: 10, fontFamily: "Georgia, serif" }}>
                  &ldquo;{p.motto}&rdquo;
                </div>
                <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.6 }}>{p.how}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── NIST AI RMF ─────────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
            Risk Framework
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
            NIST AI Risk Management Framework
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
            MBIS is structured around NIST AI RMF even though the system is fully deterministic.
            The framework keeps every design decision accountable.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {NIST_FUNCTIONS.map((f) => (
              <div
                key={f.fn}
                style={{
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(33,16,48,0.05)",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: 72,
                    flexShrink: 0,
                    background: f.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    writingMode: "vertical-rl",
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    fontWeight: 900,
                    letterSpacing: "0.15em",
                    color: "#fff",
                    textTransform: "uppercase",
                  }}
                >
                  {f.fn}
                </div>
                <div style={{ padding: "18px 18px 18px 16px" }}>
                  <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.7 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── METHODOLOGY NOTES ───────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
            Transparency
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 24, letterSpacing: "-0.3px" }}>
            Methodology Notes
          </h2>
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--line)",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(33,16,48,0.05)",
            }}
          >
            {NOTES.map(([term, detail], idx) => (
              <div
                key={term}
                style={{
                  display: "flex",
                  gap: 0,
                  borderBottom: idx < NOTES.length - 1 ? "1px solid var(--line)" : "none",
                }}
              >
                <div
                  style={{
                    width: 4,
                    flexShrink: 0,
                    background: idx % 2 === 0 ? "var(--nxt-blue-vi)" : "var(--nxt-lavender)",
                  }}
                />
                <div style={{ padding: "16px 20px" }}>
                  <div style={{ fontWeight: 800, fontSize: 12, color: "var(--nxt-dark)", marginBottom: 4 }}>{term}</div>
                  <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.65 }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DATA SOURCES ────────────────────────────────────── */}
        <div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
            Source Documents
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
            Every Figure Has a Source
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
            Click any document below to open the official PDF. Each citation on the dashboard links directly to the exact page listed here.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SOURCES.map((src) => (
              <a
                key={src.title}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  background: "#fff",
                  border: "1px solid var(--line)",
                  borderRadius: 10,
                  textDecoration: "none",
                  boxShadow: "0 1px 4px rgba(33,16,48,0.04)",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 18px rgba(99,33,165,0.13)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 4px rgba(33,16,48,0.04)"; (e.currentTarget as HTMLAnchorElement).style.transform = "none"; }}
              >
                <div style={{ fontSize: 20 }}>📄</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--nxt-dark)", marginBottom: 2 }}>{src.title}</div>
                  <div style={{ fontSize: 11, color: "var(--text-mute)", lineHeight: 1.5 }}>{src.desc} · Pages used: {src.pages}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      color: "#fff",
                      background: TAG_COLORS[src.tag] ?? "var(--nxt-grape)",
                      padding: "3px 8px",
                      borderRadius: 3,
                    }}
                  >
                    {src.tag}
                  </span>
                  <span style={{ color: "var(--nxt-blue-vi)", fontSize: 16 }}>↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
