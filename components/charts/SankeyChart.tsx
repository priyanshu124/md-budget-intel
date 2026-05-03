"use client";
import dynamic from "next/dynamic";
import ChartFrame from "./ChartFrame";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// FY2025 flows in $M, aggregated from sankey_revenue.csv + sankey_agency.csv
// Source node indices
const S = {
  // Revenue (0-7)
  IIT: 0, FED: 1, OSR: 2, SUT: 3, TRV: 4, CIT: 5, PROP: 6, OTH: 7,
  // Fund types (8-10)
  GF: 8, SF: 9, FF: 10,
  // Agencies (11-19)
  MDH: 11, EDU: 12, MDOT: 13, DHS: 14, PSC: 15, HE: 16, DBM: 17, NR: 18, RST: 19,
};

const NODE_LABELS = [
  "Individual Income Tax",
  "Federal Grants & Aid",
  "Other Special Revenue",
  "Sales & Use Tax",
  "Transportation Revenue",
  "Corporate Income Tax",
  "Property & Transfer",
  "Other Revenue",
  "General Fund",
  "Special Fund",
  "Federal Fund",
  "MDH (Health)",
  "Education (K–12)",
  "Transportation (MDOT)",
  "Human Services (DHS)",
  "Public Safety & Corr.",
  "Higher Education",
  "Budget & Management",
  "Natural Resources",
  "All Other Agencies",
];

const NODE_COLORS = [
  "#1A7340", "#1D4F91", "#B8860B", "#1A7340", "#1D6FA4",
  "#1A7340", "#1A7340", "#9B9B9B",
  "#6B3FA0", "#B8860B", "#1D4F91",
  "#C41230", "#1D4F91", "#1D6FA4", "#C4820A", "#374151",
  "#6B3FA0", "#888888", "#1A7340", "#9B9B9B",
];

// FY2025 ($M) — rolled from CSV
const LINKS: Array<[number, number, number]> = [
  // Revenue → Fund type
  [S.IIT, S.GF, 14421],
  [S.FED, S.FF, 17776],
  [S.OSR, S.SF, 7224],
  [S.SUT, S.GF, 6973],
  [S.SUT, S.SF, 43],
  [S.TRV, S.SF, 4674],
  [S.TRV, S.FF, 1576],
  [S.CIT, S.GF, 1884],
  [S.CIT, S.SF, 409],
  [S.PROP, S.GF, 1285],
  [S.OTH, S.GF, 1709],
  [S.OTH, S.SF, 115],

  // Fund type → Agency (FY2025 expenditures)
  // General Fund $26,566M
  [S.GF, S.MDH, 7612],
  [S.GF, S.EDU, 7758],
  [S.GF, S.DHS, 911],
  [S.GF, S.PSC, 1524],
  [S.GF, S.HE, 856],
  [S.GF, S.DBM, 414],
  [S.GF, S.NR, 133],
  [S.GF, S.RST, 7358], // remainder

  // Special Fund $12,464M
  [S.SF, S.MDH, 1368],
  [S.SF, S.EDU, 1864],
  [S.SF, S.MDOT, 4674],
  [S.SF, S.DHS, 166],
  [S.SF, S.HE, 40],
  [S.SF, S.NR, 322],
  [S.SF, S.DBM, 91],
  [S.SF, S.RST, 3939],

  // Federal Fund $19,352M
  [S.FF, S.MDH, 10496],
  [S.FF, S.EDU, 1564],
  [S.FF, S.MDOT, 1576],
  [S.FF, S.DHS, 3027],
  [S.FF, S.HE, 1],
  [S.FF, S.RST, 2688],
];

export default function SankeyChart() {
  return (
    <ChartFrame
      title="Where Every Dollar Flows — Maryland's $60B Operating Budget"
      deck="FY2025 flow: revenue sources → fund types (General / Special / Federal) → top agencies · MDH absorbs $19.5B, Education $11.2B"
      source="FY2026 Budget Vol 1–2 | ACFR 2025 | sankey_revenue.csv + sankey_agency.csv"
    >
      <Plot
        data={[
          {
            type: "sankey",
            orientation: "h",
            arrangement: "snap",
            node: {
              pad: 18,
              thickness: 18,
              line: { color: "#ffffff", width: 0.5 },
              label: NODE_LABELS,
              color: NODE_COLORS,
              hovertemplate: "<b>%{label}</b><br>$%{value:,.0f}M<extra></extra>",
            },
            link: {
              source: LINKS.map((l) => l[0]),
              target: LINKS.map((l) => l[1]),
              value: LINKS.map((l) => l[2]),
              color: LINKS.map(() => "rgba(141,39,130,0.16)"),
              hovertemplate: "%{source.label} → %{target.label}<br>$%{value:,.0f}M<extra></extra>",
            },
          } as never,
        ]}
        layout={{
          paper_bgcolor: "white",
          font: { family: "Georgia, serif", size: 11, color: "#121212" },
          margin: { t: 10, r: 20, b: 20, l: 20 },
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 460 }}
      />
    </ChartFrame>
  );
}
