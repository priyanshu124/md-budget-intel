"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home",         href: "/" },
  { label: "Deep-Dive",    href: "https://md-budget-intel-deep-dive.netlify.app/" },
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
            Maryland Budget Intel Tool
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
            Fiscal Analysis Tool
          </span>
        </div>

        <nav style={{ display: "flex", gap: 2, marginLeft: 24 }}>
          {NAV.map((item) => {
            const isExternal = item.href.startsWith("http");
            const active = !isExternal && (path === item.href || (item.href !== "/" && path.startsWith(item.href)) || (item.href.startsWith("/deep-dive") && path.startsWith("/deep-dive")));
            const commonStyle = {
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
            } as const;

            const hoverHandlers = {
              onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!active) {
                  e.currentTarget.style.color = "var(--nxt-purple)";
                  e.currentTarget.style.background = "var(--nxt-lavender)";
                }
              },
              onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (!active) {
                  e.currentTarget.style.color = "var(--text-mute)";
                  e.currentTarget.style.background = "transparent";
                }
              },
            };

            return isExternal ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={commonStyle}
                {...hoverHandlers}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} style={commonStyle} {...hoverHandlers}>
                {item.label}
              </Link>
            );
          })}
        </nav>
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
