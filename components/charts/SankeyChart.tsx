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
const PROG_PALETTE = [
  "#B71C1C","#1A237E","#1B5E20","#880E4F","#006064",
  "#F57F17","#4527A0","#37474F","#33691E","#3E2723",
  "#0D47A1","#4A148C","#E65100","#1B5E20","#263238",
  "#6A1B9A","#AD1457","#00695C","#558B2F","#2E7D32",
];

/* ── CSV row types ──────────────────────────────────────────── */
interface RevRow { year: number; category: string; gf: number; sf: number; ff: number; }
interface AgenRow { year: number; agency: string; gf: number; sf: number; ff: number; total: number; }
type FundKey = "gf" | "sf" | "ff";

interface ProgEntry { count: number; names: string[]; vals: number[]; total: number; }
type ProgDrilldowns = Record<string, Record<string, ProgEntry>>;

interface SankeySpec {
  labels: string[];
  colors: string[];
  src: number[];
  tgt: number[];
  val: number[];
  lc: string[];
  ll: string[];
  prog_count?: number;
}

interface OverviewExtras {
  revRows: RevRow[];
  agencyFunds: Record<string, { gf: number; sf: number; ff: number }>;
  agencies: string[];
}

function parseCsv<T>(text: string): T[] {
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

function buildOverview(year: number, dfRev: RevRow[], dfAgen: AgenRow[]): SankeySpec & OverviewExtras {
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

  // Drill-down extras: per-agency fund actuals (scaled to FY targets, like fund-to-agency links)
  const agencyFunds: Record<string, { gf: number; sf: number; ff: number }> = {};
  topList.forEach((a2, ai) => {
    void ai;
    agencyFunds[a2.name] = {
      gf: Math.round(a2.gf * sc_a[idx_gf]),
      sf: Math.round(a2.sf * sc_a[idx_sf]),
      ff: Math.round(a2.ff * sc_a[idx_ff]),
    };
  });

  return {
    labels: allLabels, colors: allColors,
    src: osrc, tgt: otgt, val: oval, lc: olc, ll: oll,
    revRows, agencyFunds,
    agencies: topList.map(t => t.name),
  };
}

/* ── Drill-down: Revenue → Fund → [Agency] → Top 20 Programs ─ */
function buildDrilldown(
  year: number,
  agency: string,
  ov: SankeySpec & OverviewExtras,
  drills: ProgDrilldowns,
): SankeySpec | null {
  const progs = drills[String(year)]?.[agency];
  if (!progs) return null;
  const agencyFunds = ov.agencyFunds[agency];
  if (!agencyFunds) return null;
  const agencyTotal = agencyFunds.gf + agencyFunds.sf + agencyFunds.ff;
  if (agencyTotal === 0) return null;

  const N_rev = ov.revRows.length;
  const idx_gf = N_rev, idx_sf = N_rev + 1, idx_ff = N_rev + 2;
  const idx_ag = N_rev + 3;
  const prog_start = N_rev + 4;
  const N_prog = progs.count;

  const labels = [
    ...ov.revRows.map(r => r.category),
    ...FUND_NODES,
    agency,
    ...progs.names,
  ];
  const colors = [
    ...ov.revRows.map((_, i) => h2r(REV_COLORS[i % REV_COLORS.length], "CC")),
    ...FUND_NODES.map(f => FUND_COLORS[f]),
    "#0A0A0A",
    ...Array.from({ length: N_prog }, (_, i) => PROG_PALETTE[i % PROG_PALETTE.length]),
  ];

  const fundToAg: Record<number, number> = {
    [idx_gf]: agencyFunds.gf,
    [idx_sf]: agencyFunds.sf,
    [idx_ff]: agencyFunds.ff,
  };
  const fundTotals = FUND_TOTALS[year];
  const fkey: Record<number, FundKey> = { [idx_gf]: "gf", [idx_sf]: "sf", [idx_ff]: "ff" };
  const fn: Record<number, string> = {
    [idx_gf]: "General Fund", [idx_sf]: "Special Fund", [idx_ff]: "Federal Fund",
  };

  const src: number[] = [], tgt: number[] = [], val: number[] = [], lc: string[] = [], ll: string[] = [];

  // Revenue -> Fund, scaled to agency's share of each fund
  ov.revRows.forEach((r, i) => {
    [idx_gf, idx_sf, idx_ff].forEach(fi => {
      const rawRevV = r[fkey[fi]];
      const totalFund = fundTotals[fkey[fi]];
      if (rawRevV <= 0 || totalFund <= 0) return;
      const agFundShare = fundToAg[fi];
      if (agFundShare <= 0) return;
      const scaled = Math.floor((rawRevV * agFundShare) / totalFund);
      if (scaled > 500_000) {
        src.push(i); tgt.push(fi); val.push(scaled);
        lc.push(h2r(FUND_COLORS[fn[fi]].replace("#", ""), "55"));
        ll.push(`$${(scaled / 1e9).toFixed(3)}B  ${r.category} → ${fn[fi]}`);
      }
    });
  });

  // Fund -> Agency
  [idx_gf, idx_sf, idx_ff].forEach(fi => {
    const v = fundToAg[fi];
    if (v > 0) {
      src.push(fi); tgt.push(idx_ag); val.push(v);
      lc.push(h2r("0A0A0A", "55"));
      ll.push(`$${(v / 1e9).toFixed(3)}B  ${fn[fi]} → ${agency}`);
    }
  });

  // Agency -> Programs (rescale so total matches agency total)
  const progTotal = progs.total;
  const scale = progTotal > 0 ? agencyTotal / progTotal : 1;
  progs.names.forEach((pname, pi) => {
    const scaledP = Math.floor(progs.vals[pi] * scale);
    src.push(idx_ag); tgt.push(prog_start + pi); val.push(scaledP);
    lc.push(h2r(PROG_PALETTE[pi % PROG_PALETTE.length].replace("#", ""), "88"));
    ll.push(`$${(scaledP / 1e9).toFixed(3)}B  ${agency} → ${pname}`);
  });

  return { labels, colors, src, tgt, val, lc, ll, prog_count: N_prog };
}

/* ── HTML template (drill-down enabled) ─────────────────────── */
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
.back-btn{border:1.5px solid #C41230;background:#fff;color:#C41230;border-radius:6px;padding:5px 14px;font-size:12px;cursor:pointer;font-weight:700;display:none;margin-left:10px}
.back-btn.show{display:inline-block}
.back-btn:hover{background:#C41230;color:#fff}
.layout{height:560px}
.chart-area{width:100%;height:100%}
.hint{padding:8px 14px;font-size:11px;color:#888;font-style:italic;border-top:1px solid #eee}
</style></head><body>
<div class="ctrl">
  <span class="mode-tag" id="mode-label">OVERVIEW MODE</span>
  <button class="back-btn" id="back-btn" onclick="resetOverview()">&larr; Back to Overview</button>
  <div style="margin-left:auto;display:flex;gap:8px">
    <button class="yr-btn" id="btn-2025" onclick="setYear('2025')">FY2025</button>
    <button class="yr-btn active" id="btn-2026" onclick="setYear('2026')">FY2026</button>
    <button class="yr-btn" id="btn-2027" onclick="setYear('2027')">FY2027</button>
  </div>
</div>
<div class="layout">
  <div class="chart-area" id="sankey-chart"></div>
</div>
<div class="hint" id="hint">Click any agency node in the Sankey to drill down: Revenue → Fund → Agency → Programs.</div>
<script>
const DATA = JSON.parse('__DATA__');
let yr = '2026';
let mode = 'overview';
let selectedAgency = null;

function selectAgency(name){
  selectedAgency = name;
  mode = 'drilldown';
  document.getElementById('mode-label').textContent = 'DRILL-DOWN: ' + name.toUpperCase();
  document.getElementById('back-btn').classList.add('show');
  document.getElementById('hint').textContent = 'Revenue → Fund Type → ' + name + ' → Top programs. Click Back to return.';
  renderChart();
}

function resetOverview(){
  mode = 'overview';
  selectedAgency = null;
  document.getElementById('mode-label').textContent = 'OVERVIEW MODE';
  document.getElementById('back-btn').classList.remove('show');
  document.getElementById('hint').textContent = 'Click any agency node in the Sankey to drill down: Revenue → Fund → Agency → Programs.';
  renderChart();
}

function makeSankeySpec(d, title){
  return {
    data: [{
      type:'sankey', arrangement:'perpendicular',
      node:{ pad:14, thickness:20, line:{color:'#555',width:0.4}, label:d.labels, color:d.colors, hovertemplate:'<b>%{label}<\/b><br>$%{value:,.0f}<extra><\/extra>' },
      link:{ source:d.src, target:d.tgt, value:d.val, color:d.lc, label:d.ll, hovertemplate:'%{label}<extra><\/extra>' }
    }],
    layout:{
      title:{text:'<b>'+title+'<\/b>  <span style="font-size:11px;color:#888">'+DATA[yr].label+'<\/span>', x:0.02, xanchor:'left', font:{size:13,color:'#121212',family:'Georgia,serif'}},
      paper_bgcolor:'#fff', plot_bgcolor:'#fff',
      font:{color:'#333',size:11,family:'Georgia,serif'},
      height:560, margin:{t:50,l:6,r:6,b:16}
    },
    config:{responsive:true,displayModeBar:true,modeBarButtonsToRemove:['select2d','lasso2d'],displaylogo:false}
  };
}

function renderChart(){
  let spec;
  if (mode === 'overview'){
    spec = makeSankeySpec(DATA[yr].overview, 'Maryland Budget Flow — Revenue → Fund Types → Agencies');
  } else {
    const dd = DATA[yr].drilldown[selectedAgency];
    spec = makeSankeySpec(dd, 'Revenue → Fund Types → ' + selectedAgency + ' → Programs');
  }
  Plotly.newPlot('sankey-chart', spec.data, spec.layout, spec.config).then(gd => {
    gd.on('plotly_click', ev => {
      if (!ev.points || !ev.points[0]) return;
      const lbl = ev.points[0].label;
      if (mode === 'overview' && lbl && DATA[yr].drilldown[lbl]){
        selectAgency(lbl);
      }
    });
  });
}

function setYear(y){
  yr = y;
  document.getElementById('btn-2025').className = 'yr-btn'+(y==='2025'?' active':'');
  document.getElementById('btn-2026').className = 'yr-btn'+(y==='2026'?' active':'');
  document.getElementById('btn-2027').className = 'yr-btn'+(y==='2027'?' active':'');
  if (mode === 'drilldown' && !DATA[yr].drilldown[selectedAgency]) resetOverview();
  else renderChart();
}

renderChart();
<\/script></body></html>`;

export default function SankeyChart() {
  const [srcDoc, setSrcDoc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/sankey_revenue.csv").then(r => r.text()),
      fetch("/sankey_agency.csv").then(r => r.text()),
      fetch("/sankey_drilldowns.json").then(r => r.json()).catch(() => ({} as ProgDrilldowns)),
    ]).then(([revText, agenText, drills]) => {
      const dfRev = parseCsv<RevRow>(revText);
      const dfAgen = parseCsv<AgenRow>(agenText);

      const allData: Record<string, unknown> = {};
      for (const yr of [2025, 2026, 2027]) {
        const ov = buildOverview(yr, dfRev, dfAgen);
        const tot = BUDGET_TOTALS[yr] / 1e9;
        const yearDrills: Record<string, SankeySpec> = {};
        for (const ag of ov.agencies) {
          const dd = buildDrilldown(yr, ag, ov, drills as ProgDrilldowns);
          if (dd) yearDrills[ag] = dd;
        }
        allData[String(yr)] = {
          label: `FY${yr}${yr === 2027 ? " (est.)" : ""} · $${tot.toFixed(2)}B`,
          overview: {
            labels: ov.labels, colors: ov.colors,
            src: ov.src, tgt: ov.tgt, val: ov.val, lc: ov.lc, ll: ov.ll,
            agencies: ov.agencies,
          },
          drilldown: yearDrills,
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
    <div style={{ padding: "16px 20px 0" }}>
      <h3
        style={{
          fontFamily: "Georgia, serif",
          fontSize: 18,
          fontWeight: 800,
          color: "var(--nxt-deep)",
          lineHeight: 1.25,
          margin: 0,
          marginBottom: 4,
        }}
      >
        Budget Flow: Revenue to Agency
      </h3>
      <p
        style={{
          fontSize: 12,
          color: "var(--text-soft)",
          lineHeight: 1.5,
          margin: 0,
          marginBottom: 10,
        }}
      >
        Maryland&apos;s budget flows from 6 revenue streams through 3 types of funds into 30+ agencies.
      </p>
      <iframe
        srcDoc={srcDoc}
        style={{ width: "100%", height: 640, border: "none", borderRadius: 8 }}
        title="Maryland Budget Flow"
      />
    </div>
  );
}
