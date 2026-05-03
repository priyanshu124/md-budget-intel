"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const SankeyChart     = dynamic(() => import("@/components/charts/SankeyChart"),     { ssr: false });
const DeficiencyChart = dynamic(() => import("@/components/charts/DeficiencyChart"), { ssr: false });
const JcrCutsChart    = dynamic(() => import("@/components/charts/JcrCutsChart"),    { ssr: false });

const AGENCIES = [
  { name: "MDH — Health",             gf: 7612,  sf: 1368, ff: 10496, total: 19477, pctTotal: 33.4 },
  { name: "Education (K–12)",         gf: 7758,  sf: 1864, ff: 1564,  total: 11186, pctTotal: 19.2 },
  { name: "Transportation (MDOT)",    gf: 0,     sf: 4674, ff: 1576,  total: 6250,  pctTotal: 10.7 },
  { name: "Human Services (DHS)",     gf: 911,   sf: 166,  ff: 3027,  total: 4104,  pctTotal: 7.0 },
  { name: "Public Safety & Corr.",    gf: 1524,  sf: 88,   ff: 27,    total: 1640,  pctTotal: 2.8 },
  { name: "Higher Education (Other)", gf: 856,   sf: 40,   ff: 0,     total: 897,   pctTotal: 1.5 },
  { name: "Judiciary",                gf: 696,   sf: 84,   ff: 2,     total: 783,   pctTotal: 1.3 },
  { name: "State Reserve Fund",       gf: 765,   sf: 90,   ff: 0,     total: 855,   pctTotal: 1.5 },
  { name: "Budget & Management",      gf: 414,   sf: 91,   ff: 52,    total: 557,   pctTotal: 1.0 },
  { name: "Natural Resources",        gf: 133,   sf: 322,  ff: 58,    total: 513,   pctTotal: 0.9 },
];

const FUND_COLORS: Record<string, string> = {
  gf: "#6B3FA0",
  sf: "#B8860B",
  ff: "#1D4F91",
};

export default function OperatingPage() {
  const [sortBy, setSortBy] = useState<"total" | "gf" | "ff">("total");
  const sorted = [...AGENCIES].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div className="page-enter" style={{ padding: "28px 28px 60px", maxWidth: 1400, margin: "0 auto" }}>
      <h2 style={{ fontSize: 24, fontWeight: 900, color: "var(--nxt-deep)", marginBottom: 4 }}>
        Operating Budget Explorer
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-soft)", marginBottom: 24, maxWidth: 780, lineHeight: 1.6 }}>
        Agency-level budget flows, deficiency appropriations, and JCR legislative cuts for FY2025 — the last year of audited actuals.
      </p>

      {/* Sankey */}
      <div className="card" style={{ marginBottom: 24, padding: 22 }}>
        <SankeyChart />
        <div style={{ display: "flex", gap: 16, marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--line)" }}>
          {[
            { color: "#6B3FA0", label: "General Fund" },
            { color: "#B8860B", label: "Special Fund" },
            { color: "#1D4F91", label: "Federal Fund" },
          ].map((f) => (
            <div key={f.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: f.color }} />
              <span style={{ fontSize: 11, color: "var(--text-soft)" }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Agency table */}
      <div className="card" style={{ marginBottom: 24, padding: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: "var(--nxt-deep)", fontFamily: "Georgia, serif" }}>
            FY2025 Agency Expenditures — Audited Actuals ($M)
          </h3>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span className="mono-label" style={{ marginBottom: 0 }}>Sort by:</span>
            {(["total", "gf", "ff"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSortBy(key)}
                style={{
                  padding: "4px 10px",
                  borderRadius: 12,
                  border: "1px solid",
                  borderColor: sortBy === key ? "var(--nxt-purple)" : "var(--line)",
                  background: sortBy === key ? "var(--nxt-purple)" : "#fff",
                  color: sortBy === key ? "#fff" : "var(--text-soft)",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {key === "total" ? "Total" : key === "gf" ? "General Fund" : "Federal Fund"}
              </button>
            ))}
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "var(--nxt-deep)" }}>
                {["Agency", "General Fund", "Special Fund", "Federal Fund", "Total", "% of Budget"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "10px 12px",
                      textAlign: h === "Agency" ? "left" : "right",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, i) => (
                <tr
                  key={row.name}
                  style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = "var(--nxt-lavender)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLTableRowElement).style.background = i % 2 === 0 ? "#fff" : "#fafafa")}
                >
                  <td style={{ padding: "10px 12px", fontWeight: 600, color: "var(--text)" }}>{row.name}</td>
                  {(["gf", "sf", "ff"] as const).map((key) => (
                    <td key={key} style={{ padding: "10px 12px", textAlign: "right", fontFamily: "var(--mono)", fontSize: 12 }}>
                      <span style={{ color: FUND_COLORS[key] }}>${row[key].toLocaleString()}</span>
                    </td>
                  ))}
                  <td style={{ padding: "10px 12px", textAlign: "right", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700 }}>
                    ${row.total.toLocaleString()}
                  </td>
                  <td style={{ padding: "10px 12px", textAlign: "right" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 6 }}>
                      <div
                        style={{
                          width: Math.min(row.pctTotal * 2, 80),
                          height: 6,
                          background: "var(--nxt-purple)",
                          borderRadius: 3,
                          opacity: 0.6,
                        }}
                      />
                      <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-soft)" }}>
                        {row.pctTotal}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 10 }}>
          <span className="source-cite">Source: sankey_agency.csv · ACFR 2025 p.165</span>
        </div>
      </div>

      {/* Deficiency + JCR side-by-side */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div className="card" style={{ padding: 22 }}>
          <DeficiencyChart />
        </div>
        <div className="card" style={{ padding: 22 }}>
          <JcrCutsChart />
        </div>
      </div>
    </div>
  );
}
