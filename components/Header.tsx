"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home",         href: "/" },
  { label: "Deep-Dive",    href: "/narrative" },
  { label: "Methodology",  href: "/methodology" },
  { label: "Guardrails",   href: "/guardrails" },
];

export default function Header() {
  const path = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--line)",
        boxShadow: "0 1px 6px rgba(78,19,75,0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 28px",
          maxWidth: 1600,
          margin: "0 auto",
          gap: 14,
        }}
      >
        {/* Logo — Maryland state crest shield */}
        <img
          src="/logo.png"
          alt="Maryland state crest"
          width={38}
          height={42}
          style={{ flexShrink: 0, display: "block" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span
            style={{
              fontSize: 15,
              fontWeight: 900,
              letterSpacing: "-0.4px",
              color: "var(--nxt-deep)",
              fontFamily: "Georgia, serif",
              lineHeight: 1.1,
            }}
          >
            Maryland Budget Intelligence
          </span>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: 9,
              color: "var(--text-mute)",
              letterSpacing: "0.06em",
              lineHeight: 1.2,
            }}
          >
            MBIS · Fiscal Analysis System
          </span>
        </div>

        <nav style={{ display: "flex", gap: 2, marginLeft: 24 }}>
          {NAV.map((item) => {
            const active = path === item.href || (item.href !== "/" && path.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: active ? "var(--nxt-deep)" : "var(--text-mute)",
                  textDecoration: "none",
                  padding: "7px 14px",
                  borderRadius: 8,
                  background: active ? "var(--nxt-pink)" : "transparent",
                  borderBottom: active ? "2px solid var(--nxt-purple)" : "2px solid transparent",
                  transition: "all 0.18s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--nxt-purple)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--nxt-lavender)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-mute)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right — Dashboard link + FY2027 badge */}
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>

          {/* MBTSA Dashboard button */}
          <a
            href="deep-dive-stage-budget.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#802cd7',
              color: '#fff',
              padding: '6px 14px',
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              fontFamily: 'var(--mono)',
              whiteSpace: 'nowrap',
              border: '1.5px solid #6321a5',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#6321a5';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#802cd7';
            }}
          >
            Deep-Dive Dashboard ↗
          </a>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 16,
                fontWeight: 900,
                color: "var(--nxt-deep)",
                letterSpacing: "-0.3px",
              }}
            >
              $70.8B
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 8,
                color: "var(--text-mute)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              FY2027 Proposed · Operating Budget
            </div>
          </div>
        </div>
      </div>

      {/* Maryland flag stripe */}
      <div style={{ display: "flex", height: 4, width: "100%" }}>
        <div style={{ flex: 1, background: "#CE1126" }} />
        <div style={{ flex: 1, background: "#E8A317" }} />
        <div style={{ flex: 1, background: "#000000" }} />
        <div style={{ flex: 1, background: "#ffffff", borderBottom: "1px solid var(--line)" }} />
      </div>
    </header>
  );
}
