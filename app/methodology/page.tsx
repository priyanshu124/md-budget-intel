"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const PROBLEMS = [
  {
    num: "01",
    problem: "Maryland's fiscal data was scattered across four official document types with no common schema",
    solution: "We built a single ingestion pipeline that reads all four source document types in parallel, normalizes every figure to a consistent fund-year-agency schema, and feeds both the home page charts and the Deep-Dive dashboard from the same reconciled data.",
    tag: "DATA INTEGRATION",
    color: "#6321a5",
  },
  {
    num: "02",
    problem: "Narrative claims in official reports could not be verified against audited numbers",
    solution: "We systematically cross-referenced the narrative sections of all four source document types against their corresponding audited financial statements. Where a narrative claim diverged from the underlying figures, we surfaced the divergence rather than republishing the claim. Where the legislative, executive, and audit perspectives converged, we treated that as a confirmed finding.",
    tag: "NARRATIVE RECONCILIATION",
    color: "#802CD7",
  },
  {
    num: "03",
    problem: "Budget flows were invisible: no one could see how revenue became agency spending",
    solution: "We mapped Maryland's full $70.8B FY2027 enacted budget as a three-layer Sankey diagram: revenue source to fund type to agency. The chart draws from the DBM dataset across FY2025, FY2026, and FY2027 and is the only interactive public tool to show this complete flow path in a single view.",
    tag: "FLOW VISUALIZATION",
    color: "#551c8e",
  },
  {
    num: "04",
    problem: "The structural deficit was abstract and lacked a verifiable trajectory",
    solution: "We derived the structural gap by calculating the divergence between revenue and expenditure growth rates from ACFR audited actuals (FY2019 to FY2025), then extended the slope to FY2030 using a deterministic linear projection. Assumptions and the base period are stated directly on the chart.",
    tag: "STRUCTURAL GAP",
    color: "#6321a5",
  },
  {
    num: "05",
    problem: "Federal dependency risk was known but not quantified by agency",
    solution: "We extracted agency-level federal fund percentages from the ACFR 2025 Statement of Activities (p.45) and built an interactive calculator. Users can drag a slider to model the impact of a 1-20% federal cut on each agency's budget in real time.",
    tag: "FEDERAL RISK",
    color: "#802CD7",
  },
  {
    num: "06",
    problem: "Agency- and program-level analysis needed a richer data layer than the ACFR alone could provide",
    solution: "The Deep-Dive dashboard runs against a separate analytical warehouse built with DBT on DuckDB. It ingests from the DBM open data portal and the state aid disclosure files, then layers in cached Claude-powered classifications that map every line item into TBM cost pools and IT towers. The result is program-level drill-downs within agencies, IT spend breakouts, year-over-year variance analysis, anomaly detection, and MITDP project drill-downs across 83 Maryland agencies for FY2017–FY2027.",
    tag: "DEEP DIVE METHODOLOGY",
    color: "#551c8e",
  },
];

const NXT_PILLARS = [
  {
    name: "Purpose Driven",
    motto: "Why before what.",
    how: "This tool exists to make Maryland's fiscal position legible to legislators, journalists, and the public, not to advocate for any position. Every chart answers a question a real reader would ask.",
    color: "#802CD7",
  },
  {
    name: "Service Minded",
    motto: "Show up. Follow up. Follow through.",
    how: "Built as a long-lived dashboard, not a one-off report. Citations link back to source PDFs at the exact page so any reader can verify the figure independently.",
    color: "#6321a5",
  },
  {
    name: "Integrity with Intentionality",
    motto: "We do what's right, especially when it's hard.",
    how: "We surface the structural deficit, the reserve collapse, and the federal exposure even when the headlines look favorable. Modeled figures are flagged; cited figures trace to audited sources.",
    color: "#551c8e",
  },
  {
    name: "Backed by Data",
    motto: "Proof, not promises.",
    how: "Every figure traces to ACFR, JCR, MFR, or DBM source documents. No projections without the slope and assumptions stated. No agency-level number that is not in a published audited statement.",
    color: "#802CD7",
  },
  {
    name: "Outcomes Oriented",
    motto: "Turn policy intent into lasting results.",
    how: "The KPIs, threshold colors, and red/amber/green triggers are designed so a non-finance reader can tell in five seconds whether something is on track or breaking down.",
    color: "#6321a5",
  },
];

const NIST_ITEMS = [
  {
    id: "GOVERN",
    color: "#211030",
    summary: "Accountability and transparency in every design decision",
    detail: "Source documents, methodology, and projection assumptions are public and version-controlled. Every claim carries a citation. Disagreements with the underlying data are tracked and disclosed rather than suppressed. The pipeline is deterministic: given the same source PDFs, it produces identical outputs.",
    compliant: true,
    notes: "Source documents, methodology, and editorial constraints are public. All outputs are reproducible from published government documents.",
  },
  {
    id: "MAP",
    color: "#551c8e",
    summary: "Context is preserved at every level of the data",
    detail: "Budget is mapped at three levels: revenue to fund type to agency (Sankey), agency to program (drill-downs in the Deep Dive Dashboard), and county to outcome (choropleth map). No figure is presented without its fund type, fiscal year, and source document. The ACFR, MFR, and JCR narrative layers are cross-referenced against financial statement figures before publication.",
    compliant: true,
    notes: "The tool adds narrative context to audited financial data. No figure is presented without its fund type, fiscal year, and source document.",
  },
  {
    id: "MEASURE",
    color: "#6321a5",
    summary: "Every KPI has a stated baseline, source, and threshold",
    detail: "Six KPI cards use red/amber/green thresholds defined in advance, not retroactively. Trends span eight to ten years where audited data exists. No measurement is presented without a stated baseline year. Projections display the slope, base period, and the audited actuals that anchor them.",
    compliant: true,
    notes: "Threshold definitions are documented in the Guardrails page. Projections state their base period and slope on each chart.",
  },
  {
    id: "MANAGE",
    color: "#802CD7",
    summary: "Explicit limits on what the tool will and will not do",
    detail: "The Guardrails page documents the tool's hard limits: no invented agency-level data, no projections beyond FY2030, no answers to hypothetical political questions. Every modeled figure is labeled as modeled. The tool does not generate policy recommendations or attribute blame.",
    compliant: true,
    notes: "Hard limits are enforced at the pipeline level, not stated as policy. If a figure cannot be sourced, it does not appear on the dashboard.",
  },
];

function NistAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {NIST_ITEMS.map((item) => {
        const isOpen = open === item.id;
        return (
          <div
            key={item.id}
            style={{
              background: "#fff",
              border: "1px solid var(--line)",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 1px 6px rgba(33,16,48,0.05)",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 0,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 72,
                  flexShrink: 0,
                  background: item.color,
                  padding: "18px 0",
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
                  minHeight: 64,
                }}
              >
                {item.id}
              </div>
              <div style={{ flex: 1, padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "var(--nxt-dark)", marginBottom: 3 }}>{item.summary}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: item.compliant ? "#15803D" : "#DC2626", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: item.compliant ? "#15803D" : "#DC2626", fontWeight: 700, letterSpacing: "0.1em" }}>
                      {item.compliant ? "ADDRESSED" : "NOT ADDRESSED"}
                    </span>
                  </div>
                </div>
                <span style={{ color: "var(--nxt-purple)", fontSize: 18, fontWeight: 700, flexShrink: 0, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                  ▾
                </span>
              </div>
            </button>
            {isOpen && (
              <div style={{ padding: "0 18px 18px 90px", borderTop: "1px solid var(--line-soft)" }}>
                <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginTop: 14, marginBottom: 10 }}>
                  {item.detail}
                </p>
                <div style={{ background: "var(--line-soft)", borderRadius: 6, padding: "10px 14px" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700, color: "#15803D", letterSpacing: "0.1em", textTransform: "uppercase", marginRight: 8 }}>Assessment</span>
                  <span style={{ fontSize: 12, color: "var(--text-soft)" }}>{item.notes}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const PIPELINE = [
  {
    label: "INPUT",
    title: "Source Documents",
    body: "ACFR 2023-2025 (audited), MFR 2015-2026 (monthly fiscal), JCR 2025 (legislative), FY2026-FY2027 DBM operating budgets (executive), and the DBM open data portal (live agency-level appropriations). Every figure on this dashboard and in the Deep-Dive originates from these official sources.",
    color: "#b376f6",
    num: "01",
  },
  {
    label: "PIPELINE",
    title: "Deterministic Processing",
    body: "Python scripts and DBT transformations parse, clean, and aggregate the raw data. Every figure is reproducible: download the source PDFs, run the processing scripts, rebuild the site.",
    color: "#6321a5",
    num: "02",
  },
  {
    label: "OUTPUT",
    title: "This Dashboard",
    body: "10 home page visualizations, 6 KPI cards, one county allocation map, and a Deep-Dive agency dashboard covering 80+ agencies. Every citation deep-links to the source PDF at the exact page.",
    color: "#211030",
    num: "03",
  },
];

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
            Methodology · Maryland Budget Intel Tool
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
            How This Tool Works
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", maxWidth: 700, lineHeight: 1.75 }}>
            Every number on this dashboard originates from a published, audited Maryland government document. The data pipeline is fully deterministic. Every chart cites its source, and every citation links directly to the exact page in the source PDF.
          </p>
          <div style={{ display: "flex", gap: 32, marginTop: 28, flexWrap: "wrap" }}>
            {[["4", "Official report types"], ["10", "Home page visualizations"], ["80+", "Agencies in Deep-Dive"], ["100%", "Source-cited to exact PDF page"]].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#b376f6", lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontFamily: "var(--mono)", letterSpacing: "0.08em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "48px 28px 72px" }}>

        {/* ── WHAT'S NOVEL ────────────────────────────────────── */}
        <ScrollReveal>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              What Makes This Different
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 16, letterSpacing: "-0.3px" }}>
              Cross-Document Reconciliation
            </h2>
            <div style={{ background: "linear-gradient(135deg, #f3eeff, #ede5f8)", borderRadius: 14, padding: "28px 32px", borderLeft: "4px solid var(--nxt-purple)" }}>
              <p style={{ fontSize: 14, color: "var(--nxt-dark)", lineHeight: 1.75, marginBottom: 12 }}>
                Maryland publishes its fiscal story across four official report types: the ACFR (Annual Comprehensive Financial Report), the MFR (Monthly Fiscal Report), the JCR (Joint Chairmen&apos;s Report), and the DBM operating budget books. Each document contains narrative interpretations of the numbers, but until this tool, no public-facing interactive resource had systematically checked those narratives against the underlying audited financial statements.
              </p>
              <p style={{ fontSize: 14, color: "var(--nxt-dark)", lineHeight: 1.75 }}>
                This tool does that. Where a narrative claim in one document diverges from what the audited figures show, we surface the divergence rather than republishing the claim. Where findings converge across the legislative, executive, and audit perspectives, we treat that convergence as a confirmed data point. The Deep-Dive dashboard extends this with live API queries against the DBM open data portal, covering 80+ agencies across FY2017 to FY2027.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── PIPELINE ────────────────────────────────────────── */}
        <ScrollReveal delay={60}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              The Pipeline
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 24, letterSpacing: "-0.3px" }}>
              Input, Processing, Output
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
                  <div key={`arrow-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--nxt-grape)", fontSize: 24, fontWeight: 900 }}>
                    →
                  </div>
                );
                return [card, arrow];
              })}
            </div>
            <p style={{ fontSize: 11, color: "var(--text-mute)", marginTop: 12, fontFamily: "var(--mono)", letterSpacing: "0.04em" }}>
              Anything the system cannot source, it does not show. See{" "}
              <a href="/guardrails" style={{ color: "var(--nxt-blue-vi)", fontWeight: 700 }}>Guardrails</a> for the explicit list.
            </p>
          </div>
        </ScrollReveal>

        {/* ── PROBLEMS WE SOLVED ──────────────────────────────── */}
        <ScrollReveal delay={80}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              Design Decisions
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
              Problems and How We Addressed Them
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
              Each visualization on this dashboard exists because a specific data problem had no good public solution. These are the problems and what we built to address them.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {PROBLEMS.map((item, idx) => (
                <ScrollReveal key={item.num} delay={idx * 50}>
                  <div
                    style={{
                      background: "#fff",
                      border: "1px solid var(--line)",
                      borderRadius: 12,
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(33,16,48,0.05)",
                      display: "flex",
                    }}
                  >
                    <div style={{ width: 6, flexShrink: 0, background: item.color }} />
                    <div style={{ flex: 1, padding: "20px 22px 18px" }}>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 10 }}>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 22, fontWeight: 900, color: "var(--line)", lineHeight: 1 }}>{item.num}</span>
                        <div>
                          <div style={{ fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700, color: item.color, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>{item.tag}</div>
                          <div style={{ fontWeight: 800, fontSize: 14, color: "var(--nxt-dark)", lineHeight: 1.35 }}>Problem: {item.problem}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, paddingLeft: 50 }}>
                        <strong style={{ color: "var(--nxt-dark)" }}>What we built:</strong> {item.solution}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── NXT DNA PILLARS ─────────────────────────────────── */}
        <ScrollReveal delay={60}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              NXT DNA
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
              Built on NXT&apos;s Five Pillars
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
              Each pillar maps to a concrete design or data decision in this tool.
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
        </ScrollReveal>

        {/* ── NIST AI RMF ACCORDION ───────────────────────────── */}
        <ScrollReveal delay={60}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              Risk Framework
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
              Governance Framework
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 8, maxWidth: 720 }}>
              We applied the governance and transparency dimensions of the NIST AI Risk Management Framework (RMF 1.0) to every design decision. Any public-facing tool that interprets government financial data carries accountability obligations. Click any function to expand the assessment.
            </p>
            <p style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 24, maxWidth: 720, fontStyle: "italic" }}>
              The system is fully deterministic, so traditional AI risk categories (hallucination, bias amplification, model drift) do not apply. The framework is applied to the governance and transparency dimensions only.
            </p>
            <NistAccordion />
          </div>
        </ScrollReveal>

        {/* ── DATA SOURCES ────────────────────────────────────── */}
        <ScrollReveal delay={60}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              Source Documents
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
              All Data from Official Sources
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 20, maxWidth: 680 }}>
              All data on this dashboard and in the Deep-Dive comes from Maryland&apos;s official government publications. The four primary source types are the ACFR (audited actuals from the Comptroller, editions 2023-2025), the JCR (legislative appropriations analysis, 2025 edition), the MFR (executive in-year tracking, 2015-2026), and the DBM Operating Budget Books (proposed and enacted, FY2026-FY2027). No third-party estimates or news-reported figures appear on this dashboard.
            </p>
            <a
              href="https://dbm.maryland.gov"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 20px",
                background: "#fff",
                border: "1px solid var(--line)",
                borderLeft: "4px solid var(--nxt-purple)",
                borderRadius: 8,
                textDecoration: "none",
                fontFamily: "var(--mono)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--nxt-dark)",
                boxShadow: "0 1px 4px rgba(33,16,48,0.06)",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(99,33,165,0.14)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 4px rgba(33,16,48,0.06)"; }}
            >
              📄 Maryland Department of Budget and Management · dbm.maryland.gov ↗
            </a>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
