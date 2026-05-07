"use client";
import { useEffect, useState } from "react";

/* ── Constants ported from the notebook ────────────────────── */
const FUND_TOTALS: Record<number, { gf: number; sf: number; ff: number }> = {
  2025: { gf: 27_432_917_840, sf: 13_122_284_473, ff: 19_691_459_273 },
  2026: { gf: 27_978_038_591, sf: 14_934_111_490, ff: 21_345_394_708 },
  2027: { gf: 27_816_833_615, sf: 15_903_907_377, ff: 21_144_356_398 },
};
const BUDGET_TOTALS: Record<number, number> = {
  2025: 60_541_555_644,
  2026: 64_401_763_300,
  2027: 64_895_040_609,
};
const TOP_AGENCIES = [
  "MD Dept of Health", "Aid To Education", "Transportation (MDOT)",
  "Dept of Human Services", "Public Safety & Corrections",
  "Higher Education (Other)", "Judiciary", "State Reserve Fund",
  "Housing & Comm Dev", "Maryland Health Benefit Exchange",
  "Labor", "State Police", "Environment", "Natural Resources",
  "State Department of Education", "Budget & Management", "Commerce",
  "Department of Information Technology", "Comptroller of Maryland",
  "General Services", "Agriculture", "Office of the Attorney General",
  "Military Department",
];
const FUND_NODES = ["General Fund", "Special Fund", "Federal Fund"];
const FUND_KEYS = ["gf", "sf", "ff"] as const;
const FUND_COLORS: Record<string, string> = {
  "General Fund": "#1D4F91",
  "Special Fund": "#C4820A",
  "Federal Fund": "#6B3FA0",
};
const REV_COLORS = [
  "#2196F3","#42A5F5","#64B5F6","#90CAF9","#4CAF50",
  "#7E57C2","#AB47BC","#FF7043","#FFA726","#FFCA28",
  "#A5D6A7","#B0BEC5","#78909C","#4DB6AC","#26A69A",
];
const AGENCY_COLORS = [
  "#B71C1C","#880E4F","#1A237E","#006064","#1B5E20",
  "#F57F17","#455A64","#37474F","#4E342E","#33691E",
  "#4527A0","#546E7A","#78909C","#3E2723","#00695C",
  "#AD1457","#E65100","#4A148C","#263238","#2E7D32",
  "#558B2F","#6A1B9A","#01579B",
];

/* ── CSV row types ──────────────────────────────────────────── */
interface RevRow { year: number; category: string; gf: number; sf: number; ff: number; }
interface AgenRow { year: number; agency: string; gf: number; sf: number; ff: number; total: number; }

function parseCsv<T extends Record<string, string | number>>(text: string): T[] {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map(h => h.trim());
  return lines.slice(1).map(line => {
    const vals = line.split(",");
    const obj: Record<string, string | number> = {};
    headers.forEach((h, i) => {
      const v = (vals[i] ?? "").trim();
      obj[h] = isNaN(Number(v)) ? v : Number(v);
    });
    return obj as T;
  });
}

function h2r(hex: string, alphaByte: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${(parseInt(alphaByte, 16) / 255).toFixed(2)})`;
}

function assignAgency(name: string, budget: number): string | null {
  const p = name.toLowerCase().trim();
  if ([
    "medical care provider","medicaid behavioral health","reinsurance program",
    "maryland children's health","family health and chronic",
    "infectious disease and environmental","health services cost review",
    "spring grove hospital","springfield hospital","clifton t. perkins",
    "thomas b. finan","eastern shore hospital","maryland health care commission",
    "community services for medicaid","maryland community health resources",
    "office of preparedness","core public health",
    "benefits management and provider","maryland health benefit exchange",
    "office of enterprise technology - medicaid","office of health care quality",
    "health professional boards","mdh hospital","office of population health",
    "deputy secretary for health care financing","medicaid fraud control",
    "behavioral health administration","md behavioral health",
    "office of the inspector general for health","laboratory services",
  ].some(k => p.includes(k))) return "MD Dept of Health";
  if (p === "community services" && budget > 1_000_000_000) return "MD Dept of Health";
  if ([
    "state share of foundation","compensatory education",
    "aid for local employee fringe","students with disabilities",
    "limited english proficient","food services program",
    "concentration of poverty","county and municipality funds",
    "educationally deprived","assistance to state for educating",
    "disparity grants","education effort adjustment","educational excellence",
    "prekindergarten","supplemental public school construction",
    "teacher development","state superintendent","division of early childhood",
    "blueprint for maryland","guaranteed tax base","aid to libraries",
    "non-public school health","local law enforcement grants",
    "aid to community colleges - fringe",
  ].some(k => p.includes(k))) return "Aid To Education";
  if ([
    "support for state operated institutions of higher education",
    "senator john a. cade funding formula","joseph a. sellinger formula",
    "aid to community colleges",
  ].some(k => p.includes(k))) return "Higher Education (Other)";
  if ([
    "state system construction","bus operations","washington metropolitan area transit",
    "port facilities and capital","port operations","rail operations","airport operations",
    "airport facilities","motor vehicle operations","transit administration",
    "state system maintenance","washington metropolitan area transit-capital",
  ].some(k => p.includes(k))) return "Transportation (MDOT)";
  if ((p === "transportation" || p === "facilities and capital equipment") && budget > 300_000_000)
    return "Transportation (MDOT)";
  if ([
    "assistance payments","child care assistance","foster care maintenance",
    "office of home energy","child welfare services","local family investment",
    "rental services programs","maryland office for refugees",
    "child support administration","adult services","office of unemployment insurance",
    "division of rehabilitation","division of paid leave","veterans home program",
  ].some(k => p.includes(k))) return "Dept of Human Services";
  if (p === "community services" && budget < 700_000_000) return "Dept of Human Services";
  if ([
    "correctional institution","correctional center","correctional facility",
    "correctional training","correctional enterprises","maryland correctional",
    "metropolitan transition","dorsey run","patuxent institution",
    "chesapeake detention","roxbury correctional","north branch correctional",
    "western correctional","jessup correctional","eastern correctional",
    "parole and probation","juvenile services","adult corrections",
    "field operations bureau","criminal investigation bureau",
    "support services bureau","district operations","state aid for police protection",
    "baltimore central booking","baltimore city correctional","central maryland correctional",
    "facility operations administration","general administration and hearings",
    "maryland department of emergency management","local law enforcement",
  ].some(k => p.includes(k))) return "Public Safety & Corrections";
  if ([
    "clerks of the circuit court","administrative office of the courts",
    "circuit court judges","judicial information systems",
    "supreme court of maryland","appellate court of maryland",
  ].some(k => p.includes(k))) return "Judiciary";
  if ([
    "redemption and interest on state bonds","debt service requirements",
  ].some(k => p.includes(k))) return "State Reserve Fund";
  if ([
    "water quality revolving","drinking water revolving","renewable and clean energy",
    "watershed and climate","water and science administration",
    "outdoor recreation land","bay restoration","chesapeake","natural resources",
  ].some(k => p.includes(k))) return "Natural Resources";
  return null;
}

function buildOverview(year: number, dfRev: RevRow[], dfAgen: AgenRow[]) {
  const rv = dfRev.filter(r => r.year === year);
  const ag = dfAgen.filter(r => r.year === year);

  // Deduplicate revenue rows
  const seen = new Set<string>();
  const revRows: RevRow[] = [];
  for (const row of rv) {
    const base = row.category.replace(" (est.)", "").trim();
    if (!seen.has(base) && (row.gf + row.sf + row.ff) > 0) {
      revRows.push({ ...row, category: base });
      seen.add(base);
    }
  }
  const N_rev = revRows.length;

  // Pick best agency row for each TOP_AGENCY
  const agenTop: Record<string, [number, number, number]> = {};
  for (const row of ag) {
    const a2 = row.agency;
    if (!TOP_AGENCIES.includes(a2)) continue;
    const tot = row.gf + row.sf + row.ff;
    if (tot < 1_000_000) continue;
    if (!agenTop[a2] || tot > agenTop[a2][0] + agenTop[a2][1] + agenTop[a2][2])
      agenTop[a2] = [row.gf, row.sf, row.ff];
  }
  const topList = TOP_AGENCIES
    .filter(a => agenTop[a])
    .map(a => ({ name: a, gf: agenTop[a][0], sf: agenTop[a][1], ff: agenTop[a][2] }));
  const N_ag = topList.length;

  const fi_off = N_rev;
  const ag_off = N_rev + 3;
  const idx_gf = fi_off, idx_sf = fi_off + 1, idx_ff = fi_off + 2;
  const fmap = [idx_gf, idx_sf, idx_ff];
  const fc: Record<number, string> = {
    [idx_gf]: FUND_COLORS["General Fund"],
    [idx_sf]: FUND_COLORS["Special Fund"],
    [idx_ff]: FUND_COLORS["Federal Fund"],
  };
  const fn: Record<number, string> = {
    [idx_gf]: "General Fund",
    [idx_sf]: "Special Fund",
    [idx_ff]: "Federal Fund",
  };

  const allLabels = [
    ...revRows.map(r => r.category),
    ...FUND_NODES,
    ...topList.map(t => t.name),
  ];
  const allColors = [
    ...revRows.map((_, i) => h2r(REV_COLORS[i % REV_COLORS.length], "CC")),
    ...FUND_NODES.map(f => FUND_COLORS[f]),
    ...topList.map((_, j) => AGENCY_COLORS[j % AGENCY_COLORS.length]),
  ];

  const tgt_totals = FUND_TOTALS[year];
  const target: Record<number, number> = {
    [idx_gf]: tgt_totals.gf,
    [idx_sf]: tgt_totals.sf,
    [idx_ff]: tgt_totals.ff,
  };

  // Revenue -> Fund
  const rawRf: [number, number, number][] = [];
  const rawIn: Record<number, number> = { [idx_gf]: 0, [idx_sf]: 0, [idx_ff]: 0 };
  for (let i = 0; i < revRows.length; i++) {
    const row = revRows[i];
    FUND_KEYS.forEach((key, fi) => {
      const v = row[key];
      if (v > 0) { rawRf.push([i, fmap[fi], v]); rawIn[fmap[fi]] += v; }
    });
  }
  const sc_r: Record<number, number> = {};
  [idx_gf, idx_sf, idx_ff].forEach(fi => {
    sc_r[fi] = rawIn[fi] > 0 ? target[fi] / rawIn[fi] : 1;
  });

  // Fund -> Agency
  const rawFa: [number, number, number][] = [];
  const rawOut: Record<number, number> = { [idx_gf]: 0, [idx_sf]: 0, [idx_ff]: 0 };
  topList.forEach((ag2, ai) => {
    [[idx_gf, ag2.gf], [idx_sf, ag2.sf], [idx_ff, ag2.ff]].forEach(([fi, v]) => {
      if (v > 0) { rawFa.push([fi, ai, v]); rawOut[fi as number] += v; }
    });
  });
  const sc_a: Record<number, number> = {};
  [idx_gf, idx_sf, idx_ff].forEach(fi => {
    sc_a[fi] = rawOut[fi] > 0 ? target[fi] / rawOut[fi] : 1;
  });

  const osrc: number[] = [], otgt: number[] = [], oval: number[] = [], olc: string[] = [], oll: string[] = [];
  for (const [ri, fi, v] of rawRf) {
    const sv = Math.round(v * sc_r[fi]);
    if (sv > 5_000_000) {
      osrc.push(ri); otgt.push(fi); oval.push(sv);
      olc.push(h2r(fc[fi].replace("#", ""), "55"));
      oll.push(`$${(sv / 1e9).toFixed(2)}B  ${revRows[ri].category} → ${fn[fi]}`);
    }
  }
  for (const [fi, ai, v] of rawFa) {
    const sv = Math.round(v * sc_a[fi]);
    if (sv > 5_000_000) {
      osrc.push(fi); otgt.push(ag_off + ai); oval.push(sv);
      olc.push(h2r(AGENCY_COLORS[ai % AGENCY_COLORS.length], "55"));
      oll.push(`$${(sv / 1e9).toFixed(2)}B  ${fn[fi]} → ${topList[ai].name}`);
    }
  }

  return {
    labels: allLabels, colors: allColors,
    src: osrc, tgt: otgt, val: oval, lc: olc, ll: oll,
    agencies: topList.map(t => t.name),
  };
}

/* ── HTML template (self-contained Plotly page) ─────────────── */
const HTML_TEMPLATE = `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<script src="https://cdnjs.cloudflare.com/ajax/libs/plotly.js/2.27.0/plotly.min.js"><\/script>
<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:Georgia,serif}
body{background:#fff}
.ctrl{display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #ddd;flex-wrap:wrap}
.yr-btn{border:1.5px solid #ddd;background:white;border-radius:6px;padding:5px 14px;font-size:12px;cursor:pointer;font-weight:600;transition:all .15s}
.yr-btn.active{background:#1D4F91;color:white;border-color:#1D4F91}
.mode-tag{font-family:'JetBrains Mono',monospace;font-size:11px;color:#555;letter-spacing:1px;margin-left:16px}
.layout{display:flex;height:900px}
.chart-area{flex:1;min-width:0}
.right-panel{width:260px;border-left:1px solid #ddd;display:flex;flex-direction:column;background:#FAFAFA;overflow:hidden}
.panel-top{padding:10px;border-bottom:1px solid #eee;overflow-y:auto;max-height:900px}
.panel-lbl{font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#999;margin-bottom:8px}
.chip-list{display:flex;flex-direction:column;gap:4px}
.chip{display:flex;align-items:center;justify-content:space-between;width:100%;text-align:left;cursor:default;padding:7px 9px;font-size:11.5px;border-radius:4px;border:1px solid #ddd;background:white;color:#1a1a1a;line-height:1.3;font-family:Georgia,serif}
.hint{padding:8px 14px;font-size:11px;color:#888;font-style:italic;border-top:1px solid #eee}
</style></head><body>
<div class="ctrl">
  <span class="mode-tag" id="mode-label">OVERVIEW</span>
  <div style="margin-left:auto;display:flex;gap:8px">
    <button class="yr-btn" id="btn-2025" onclick="setYear('2025')">FY2025</button>
    <button class="yr-btn active" id="btn-2026" onclick="setYear('2026')">FY2026</button>
    <button class="yr-btn" id="btn-2027" onclick="setYear('2027')">FY2027</button>
  </div>
</div>
<div class="layout">
  <div class="chart-area" id="sankey-chart"></div>
  <div class="right-panel">
    <div class="panel-top">
      <div class="panel-lbl">Agencies</div>
      <div class="chip-list" id="chip-list"></div>
    </div>
  </div>
</div>
<div class="hint">Revenue sources flow through fund types into agencies. Toggle fiscal years above.</div>
<script>
const DATA = JSON.parse('__DATA__');
let yr = '2026';
function buildChips(){
  const box = document.getElementById('chip-list');
  box.innerHTML = '';
  const agencies = DATA[yr].overview.agencies;
  agencies.forEach(name => {
    const btn = document.createElement('div');
    btn.className = 'chip';
    btn.textContent = name;
    box.appendChild(btn);
  });
}
function renderChart(){
  const d = DATA[yr].overview;
  const title = 'Maryland Budget Flow: Revenue → Fund Types → Agencies &nbsp; <span style="font-size:11px;color:#888">' + DATA[yr].label + '<\/span>';
  Plotly.newPlot('sankey-chart', [{
    type:'sankey', arrangement:'perpendicular',
    node:{ pad:14, thickness:20, line:{color:'#555',width:0.4}, label:d.labels, color:d.colors, hovertemplate:'<b>%{label}<\/b><br>$%{value:,.0f}<extra><\/extra>' },
    link:{ source:d.src, target:d.tgt, value:d.val, color:d.lc, label:d.ll, hovertemplate:'%{label}<extra><\/extra>' }
  }], {
    title:{text:title, x:0.02, xanchor:'left', font:{size:13,color:'#121212',family:'Georgia,serif'}},
    paper_bgcolor:'#fff', plot_bgcolor:'#fff',
    font:{color:'#333',size:11,family:'Georgia,serif'},
    height:900, margin:{t:50,l:6,r:6,b:16}
  }, {responsive:true, displayModeBar:true, modeBarButtonsToRemove:['select2d','lasso2d'], displaylogo:false});
}
function setYear(y){
  yr = y;
  document.getElementById('btn-2025').className = 'yr-btn'+(y==='2025'?' active':'');
  document.getElementById('btn-2026').className = 'yr-btn'+(y==='2026'?' active':'');
  document.getElementById('btn-2027').className = 'yr-btn'+(y==='2027'?' active':'');
  renderChart(); buildChips();
}
renderChart(); buildChips();
<\/script></body></html>`;

export default function SankeyChart() {
  const [srcDoc, setSrcDoc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/sankey_revenue.csv").then(r => r.text()),
      fetch("/sankey_agency.csv").then(r => r.text()),
    ]).then(([revText, agenText]) => {
      const dfRev = parseCsv<RevRow>(revText);
      const dfAgen = parseCsv<AgenRow>(agenText);

      const allData: Record<string, unknown> = {};
      for (const yr of [2025, 2026, 2027]) {
        const ov = buildOverview(yr, dfRev, dfAgen);
        const tot = BUDGET_TOTALS[yr] / 1e9;
        allData[String(yr)] = {
          label: `FY${yr} $${tot.toFixed(2)}B`,
          overview: {
            labels: ov.labels, colors: ov.colors,
            src: ov.src, tgt: ov.tgt, val: ov.val, lc: ov.lc, ll: ov.ll,
            agencies: ov.agencies,
          },
        };
      }

      const dataJson = JSON.stringify(allData)
        .replace(/<\/script>/g, "<\\/script>")
        .replace(/'/g, "\\'");
      setSrcDoc(HTML_TEMPLATE.replace("__DATA__", dataJson));
      setLoading(false);
    }).catch(err => {
      console.error("Sankey data load failed:", err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div style={{ height: 460, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-mute)", fontFamily: "var(--mono)", fontSize: 11 }}>
        Loading budget flow data...
      </div>
    );
  }

  return (
    <iframe
      srcDoc={srcDoc}
      style={{ width: "100%", height: 980, border: "none", borderRadius: 8 }}
      title="Maryland Budget Flow"
    />
  );
}
