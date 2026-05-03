"use client";
import { useEffect, useRef } from "react";

interface KpiCard {
  label: string;
  value: string;
  change: string;
  changeDir: "up" | "down" | "warn";
  color: string;
  cite: string;
  delay: number;
}

const CARDS: KpiCard[] = [
  {
    label: "FY2027 Operating Budget",
    value: "$70.8B",
    change: "Governor's proposed · enacted July 1",
    changeDir: "up",
    color: "var(--nxt-purple)",
    cite: "Governor's FY2027 Budget Book",
    delay: 0,
  },
  {
    label: "Shortfall Closed",
    value: "$1.5B",
    change: "Gap closed without tax/fee hikes",
    changeDir: "warn",
    color: "var(--amber)",
    cite: "FY2027 Gap-Closing Plan",
    delay: 80,
  },
  {
    label: "Structural Deficit Ahead",
    value: "$2.3B",
    change: "Projected for next year's budget",
    changeDir: "down",
    color: "var(--red)",
    cite: "Board of Revenue Estimates",
    delay: 160,
  },
  {
    label: "Budget Surplus",
    value: "$250M",
    change: "Ending fund balance",
    changeDir: "up",
    color: "var(--green)",
    cite: "General Fund Projection · FY2027",
    delay: 240,
  },
  {
    label: "Rainy Day Fund",
    value: "8%",
    change: "Of General Fund revenues maintained",
    changeDir: "up",
    color: "var(--green)",
    cite: "State Reserve Fund · FY2027",
    delay: 320,
  },
  {
    label: "DDA Reduction",
    value: "−$126M",
    change: "Developmental Disabilities Admin",
    changeDir: "down",
    color: "var(--red)",
    cite: "FY2027 Budget Reductions",
    delay: 400,
  },
];

function KpiCard({ card }: { card: KpiCard }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, card.delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [card.delay]);

  const dirColor =
    card.changeDir === "down" ? "var(--red)"
    : card.changeDir === "warn" ? "var(--amber)"
    : "var(--green)";

  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: 12,
        padding: "16px 18px 12px",
        borderTop: `3px solid ${card.color}`,
        opacity: 0,
        transform: "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = `0 8px 28px ${card.color}28`;
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      <div className="mono-label" style={{ marginBottom: 4 }}>{card.label}</div>
      <div
        style={{
          fontSize: 26,
          fontWeight: 900,
          color: card.color,
          lineHeight: 1.05,
          marginBottom: 5,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.5px",
        }}
      >
        {card.value}
      </div>
      <div style={{ fontSize: 10, color: dirColor, fontFamily: "var(--mono)", fontWeight: 600, marginBottom: 6 }}>
        {card.change}
      </div>
      <div style={{ fontSize: 9, color: "var(--text-mute)", fontFamily: "var(--mono)", borderTop: "1px dashed var(--line)", paddingTop: 5 }}>
        {card.cite}
      </div>
    </div>
  );
}

export default function KpiRow() {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.12em", color: "var(--nxt-deep)", fontWeight: 700 }}>
          KEY FISCAL INDICATORS
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--line)" }} />
        <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--text-mute)" }}>
          FY2027 proposed operating budget
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
        {CARDS.map((card) => <KpiCard key={card.label} card={card} />)}
      </div>
    </div>
  );
}
