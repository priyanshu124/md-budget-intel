"use client";
const REFUSALS = [
  {
    title: "Invent agency-level data",
    detail: "If a number is not in a published, audited source, MBIS does not show it. County allocations that we model are clearly labeled as modeled estimates.",
  },
  {
    title: "Project beyond stated horizons",
    detail: "Projections extend only to FY2030 and only along the slope shown on the chart. We never extrapolate decades into the future.",
  },
  {
    title: "Answer hypothetical political questions",
    detail: "MBIS does not say which agency 'should' be cut, who is to blame, or what the legislature 'ought' to do. It shows the data and the citations.",
  },
  {
    title: "Hide uncertainty",
    detail: "Every projection is labeled as a projection. Every modeled figure is labeled as modeled. Every audited figure links to the audited source.",
  },
  {
    title: "Strip context from numbers",
    detail: "A dollar figure without its fund type, year, or source is not shown. A percentage without its base year is not shown. The reader always sees what produces the number.",
  },
  {
    title: "Personalize political actors",
    detail: "The dashboard is built for any reader — legislator, journalist, citizen. We do not frame numbers as wins or losses for specific people in office.",
  },
];

const COMMITMENTS = [
  {
    icon: "✓",
    title: "Every figure is sourced",
    detail: "ACFR, JCR, DBM. Each citation deep-links to the exact PDF page. If you can't find a source link, the figure isn't on the dashboard.",
    color: "#15803D",
  },
  {
    icon: "✓",
    title: "Methodology is public",
    detail: "The processing pipeline (Input → Magic Box → Output) is documented on the Methodology page. The notebooks are open and reproducible.",
    color: "#15803D",
  },
  {
    icon: "✓",
    title: "Errors are fixed in the open",
    detail: "If a number is wrong, we update it and note the change. We do not silently rewrite history.",
    color: "#15803D",
  },
  {
    icon: "✓",
    title: "Reading level matters",
    detail: "Plain-language explanations target a broad audience. Technical citations target verifiers. Both audiences are first-class users of this dashboard.",
    color: "#15803D",
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
            Guardrails · MBIS · Maryland Budget Intelligence System
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
            What MBIS Will and Won&apos;t Do
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.78)", maxWidth: 700, lineHeight: 1.75 }}>
            A budget dashboard built on public money has to be honest about its limits.
            These rules are not marketing copy — they are how the product is built.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "48px 28px 72px" }}>

        {/* ── AI CALLOUT ──────────────────────────────────────── */}
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
            Ethical Evasion in the Age of AI
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, marginBottom: 12, maxWidth: 760 }}>
            AI systems can produce confident answers to questions they have no business answering.
            A budget dashboard that &ldquo;summarizes&rdquo; or &ldquo;projects&rdquo; without showing its work
            isn&apos;t saving the reader time — it&apos;s laundering uncertainty as fact.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: 1.75, maxWidth: 760 }}>
            MBIS uses <strong style={{ color: "#b376f6" }}>no LLM in its data pipeline</strong>. Numbers come from published, audited government PDFs.
            Projections are deterministic and visible on each chart. Every figure traces back
            to the page in the source document where it was first stated.
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
            {[["0", "LLM calls in data path"], ["7", "Audited source PDFs"], ["100%", "Traceable to page #"]].map(([val, lbl]) => (
              <div key={lbl} style={{ borderLeft: "2px solid #b376f6", paddingLeft: 14 }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: "#b376f6" }}>{val}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontFamily: "var(--mono)", letterSpacing: "0.06em", marginTop: 3 }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── REFUSALS ────────────────────────────────────────── */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
            Hard Limits
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
            Six Things MBIS Will Not Do
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
            These are not aspirations. They are technical and editorial constraints built into every data decision.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {REFUSALS.map((item, idx) => (
              <div
                key={item.title}
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
            ))}
          </div>
        </div>

        {/* ── COMMITMENTS ─────────────────────────────────────── */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--nxt-blue-vi)", letterSpacing: "0.18em", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
            Commitments
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 900, color: "var(--nxt-dark)", marginBottom: 6, letterSpacing: "-0.3px" }}>
            What We Stand Behind
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-soft)", lineHeight: 1.7, marginBottom: 28, maxWidth: 680 }}>
            These are the standards every release is held to.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {COMMITMENTS.map((item) => (
              <div
                key={item.title}
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
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 13, color: "var(--nxt-dark)", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-soft)", lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER LINK ─────────────────────────────────────── */}
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
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>How numbers flow from PDF → notebook → dashboard</div>
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

      </div>
    </div>
  );
}
