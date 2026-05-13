"use client";

import { useState } from "react";

const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ??
  "https://deep-dive-stage-budget.netlify.app";

const SUB_PAGES = [
  { label: "Budget Office", path: "/budget-office" },
  { label: "Technology", path: "/technology" },
  { label: "Variance Analysis", path: "/variance-analysis" },
  { label: "Anomaly Detection", path: "/anomaly-detection" },
] as const;

export default function DeepDivePage() {
  const [activePath, setActivePath] = useState<string>(SUB_PAGES[0].path);

  return (
    <div className="page-enter" style={{ maxWidth: 1600, margin: "0 auto" }}>
      {/* Sub-navigation tabs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          padding: "12px 28px 0",
          borderBottom: "1px solid var(--line)",
          background: "rgba(255,255,255,0.6)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 9,
            color: "var(--nxt-tint)",
            letterSpacing: "0.16em",
            fontWeight: 700,
            textTransform: "uppercase",
            marginRight: 16,
          }}
        >
          Deep-Dive Dashboard
        </span>
        {SUB_PAGES.map((page) => {
          const active = activePath === page.path;
          return (
            <button
              key={page.path}
              onClick={() => setActivePath(page.path)}
              style={{
                fontSize: 12,
                fontWeight: active ? 700 : 500,
                color: active ? "var(--nxt-deep)" : "var(--text-mute)",
                background: active ? "var(--nxt-pink)" : "transparent",
                border: "none",
                borderBottom: active
                  ? "2px solid var(--nxt-purple)"
                  : "2px solid transparent",
                padding: "8px 14px",
                borderRadius: "6px 6px 0 0",
                cursor: "pointer",
                transition: "all 0.15s",
                fontFamily: "var(--font)",
              }}
            >
              {page.label}
            </button>
          );
        })}
      </div>

      {/* Evidence dashboard iframe */}
      <iframe
        key={activePath}
        src={`${DASHBOARD_URL}${activePath}`}
        title="Deep-Dive Dashboard"
        style={{
          width: "100%",
          height: "calc(100vh - 160px)",
          border: "none",
          display: "block",
          background: "#fbf9ff",
        }}
        allow="clipboard-write"
      />
    </div>
  );
}
