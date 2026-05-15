"use client";
import ScrollReveal from "@/components/ScrollReveal";

const HARD_LIMITS = [
  {
    title: "Invent agency-level data",
    detail: "If a number is not in a published, audited source document, it does not appear on this dashboard. County-level allocation estimates are modeled from agency program distributions and Census data. These are labeled as modeled wherever they appear and are never shown alongside audited actuals without that distinction.",
  },
  {
    title: "Project beyond stated horizons",
    detail: "Projections on the home page extend only to FY2030, using the slope derived from ACFR audited actuals. The growth rate and base period are labeled on each chart. We do not extend projections beyond FY2030, and we do not introduce assumptions beyond the stated slope. The Deep-Dive displays sourced historical data only and carries no projections.",
  },
  {
    title: "Answer hypothetical political questions",
    detail: "This tool does not say which agency should be cut, who bears responsibility for the deficit, or what the legislature ought to do. It presents the data and the citations. The analysis stops where the published record stops.",
  },
  {
    title: "Hide uncertainty",
    detail: "Every projection is labeled as a projection. Every modeled figure is labeled as modeled. Every audited figure links to the source document at the exact page. The distinction between these three categories is never blurred.",
  },
  {
    title: "Strip context from numbers",
    detail: "A dollar figure without its fund type, fiscal year, and source document does not appear on this dashboard. A percentage without its base year does not appear. The reader always sees the conditions that produce a given number.",
  },
  {
    title: "Personalize political actors",
    detail: "This dashboard is built for any reader: legislator, staffer, journalist, policy analyst, or member of the public. Numbers are not framed as wins or losses for specific individuals, parties, or administrations. The same data is presented to every reader.",
  },
];

const COMMITMENTS = [
  {
    title: "All data comes from official sources",
    detail: "Every figure on this dashboard and in the Deep-Dive originates from a Maryland state government publication: the ACFR, JCR, MFR, or DBM operating budget documents. No third-party estimates, no academic projections, no news reporting. The data is what Maryland's own auditors, budget officials, and legislators published.",
  },
  {
    title: "Methodology follows established best practices",
    detail: "The data pipeline follows deterministic, reproducible processing. Every step from raw PDF to published chart is documented and can be independently verified. No statistical model introduces assumptions that are not stated explicitly on the chart.",
  },
  {
    title: "No personal judgment or political opinion",
    detail: "The findings on this dashboard are what the data dictates. The structural deficit, the reserve depletion, and the federal dependency figures appear because they are in the audited record, not because the team holds a view about fiscal policy. If the data showed a different story, the charts would show a different story.",
  },
  {
    title: "Errors are corrected in the open",
    detail: "If a number is wrong, we correct it and note the change. Prior figures are not silently revised. The version history reflects every material update to the data or methodology.",
  },
];

export default function GuardrailsPage() {
  return (
    <div className="page-enter" style={{ fontFamily: "var(--font)" }}>

      {/* ── HERO BAND ─────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg, #211030 0%, #6321a5 65%, #802CD7 100%)",
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
            Guardrails · Maryland Budget Intel Tool
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
            What This Tool Will and Will Not Do
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", maxWidth: 700, lineHeight: 1.75 }}>
            A public budget tool built on government data has to be honest about its limits.
            These are not aspirations. They are technical and editorial constraints built into every data decision.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "48px 28px 72px" }}>

        {/* ── DATA INTEGRITY CALLOUT ──────────────────────────── */}
        <ScrollReveal>
          <div
            style={{
              background: "linear-gradient(135deg, #211030 0%, #551c8e 100%)",
              borderRadius: 14,
              padding: "32px 36px",
              marginBottom: 56,
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -30,
                right: -30,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "rgba(179,118,246,0.1)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.2em",
                fontWeight: 800,
                color: "#b376f6",
                marginBottom: 12,
                textTransform: "uppercase",
              }}
            >
              Data Integrity Statement
            </div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.75, marginBottom: 12, maxWidth: 760 }}>
              All data on this dashboard and in the Deep-Dive agency dashboard comes from Maryland&apos;s official state government publications. No figure has been altered, estimated, or sourced from unofficial channels. Where aggregation or projection was required, the method is documented on the Methodology page and the source figures are cited on the chart.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.75, maxWidth: 760 }}>
              The data pipeline is fully deterministic. Numbers come from published government documents. Projections are visible on each chart with their base period and slope stated. Every figure traces back to the page in the source document where it was first stated.
            </p>
            <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
              {[["4", "Official report types"], ["10", "Source-cited visualizations"], ["80+", "Agencies in Deep-Dive"], ["100%", "Traceable to exact page"]].map(([val, lbl]) => (
                <div key={lbl} style={{ borderLeft: "2px solid #b376f6", paddingLeft: 14 }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#b376f6" }}>{val}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontFamily: "var(--mono)", letterSpacing: "0.06em", marginTop: 3 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── HARD LIMITS ─────────────────────────────────────── */}
        <ScrollReveal delay={60}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              Hard Limits
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
              What This Tool Will Not Do
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
              These constraints are not policy statements. They are built into the data pipeline and the editorial process. A figure that cannot meet these standards does not appear on the dashboard.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
              {HARD_LIMITS.map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 40}>
                  <div
                    style={{
                      background: "#fff",
                      border: "1px solid var(--line)",
                      borderRadius: 12,
                      padding: "20px 20px 18px",
                      display: "flex",
                      gap: 14,
                      boxShadow: "0 2px 8px rgba(33,16,48,0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#DC2626",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        fontWeight: 900,
                        color: "#fff",
                        fontFamily: "var(--mono)",
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 13, color: "var(--nxt-dark)", marginBottom: 6 }}>
                        We will not {item.title.toLowerCase()}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.65 }}>{item.detail}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── COMMITMENTS ─────────────────────────────────────── */}
        <ScrollReveal delay={60}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              Commitments
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
              Standards Every Release Is Held To
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
              These commitments apply to the data, the methodology, and the presentation. They are checked before each update to the dashboard.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
              {COMMITMENTS.map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 40}>
                  <div
                    style={{
                      background: "#fff",
                      border: "1px solid #D1FAE5",
                      borderLeft: "4px solid #15803D",
                      borderRadius: 12,
                      padding: "20px 20px 18px",
                      display: "flex",
                      gap: 14,
                      boxShadow: "0 2px 8px rgba(21,128,61,0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#15803D",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 16,
                        color: "#fff",
                        fontWeight: 900,
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 13, color: "var(--nxt-dark)", marginBottom: 6 }}>{item.title}</div>
                      <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.65 }}>{item.detail}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── OFFICIAL SOURCE CALLOUT ─────────────────────────── */}
        <ScrollReveal delay={60}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
              Official Data Source
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 16, letterSpacing: "-0.3px" }}>
              Where to Verify the Numbers
            </h2>
            <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 12, padding: "24px 28px" }}>
              <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.75, marginBottom: 16 }}>
                All budget data on this dashboard is sourced from Maryland&apos;s official state government publications. For independent verification of any figure, the primary source is:
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
                  background: "var(--line-soft)",
                  border: "1px solid var(--line)",
                  borderLeft: "4px solid var(--nxt-purple)",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--nxt-dark)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(99,33,165,0.14)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
              >
                📄 Maryland Department of Budget and Management · dbm.maryland.gov ↗
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ── FOOTER LINK ─────────────────────────────────────── */}
        <ScrollReveal delay={60}>
          <div
            style={{
              background: "linear-gradient(135deg, #211030, #6321a5)",
              borderRadius: 12,
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#fff", marginBottom: 4 }}>Want to understand the full pipeline?</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>How numbers flow from source document to dashboard</div>
            </div>
            <a
              href="/methodology"
              style={{
                background: "#b376f6",
                color: "#211030",
                fontWeight: 800,
                fontSize: 13,
                padding: "10px 22px",
                borderRadius: 8,
                textDecoration: "none",
                whiteSpace: "nowrap",
                fontFamily: "var(--mono)",
                letterSpacing: "0.06em",
              }}
            >
              View Methodology ↗
            </a>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
