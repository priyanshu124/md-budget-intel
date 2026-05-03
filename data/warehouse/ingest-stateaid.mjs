#!/usr/bin/env node
/**
 * DLS State Aid to Local Governments — per-county per-category per-FY
 * ───────────────────────────────────────────────────────────────────
 * Authoritative source. The Department of Legislative Services (MD General
 * Assembly's research arm) publishes this CSV from the same internal
 * database that produces the printed "Overview of State Aid to Local
 * Governments" book that legislators read.
 *
 * Endpoint (form submits to GET): /budget/state-aid-download/?YearSelection1=YYYY&YearSelection2=YYYY&County=0
 *   County=0 means "All Counties"
 *   Years: current allowance (FY27) and prior enacted (FY26)
 *
 * Output:
 *   out/county_state_aid.json
 *     data: [{ fips, name, fy26_total_usd, fy27_total_usd, by_category: {...}, line_items: [...] }]
 *     _meta.sources[] citing the DLS endpoint + publication URL
 *
 * 100% API-sourced. No manual entry.
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out");

// DLS uses its own county ordinal; we need FIPS.
const DLS_TO_FIPS = {
  "1":  "24001", // Allegany
  "2":  "24003", // Anne Arundel
  "3":  "24510", // Baltimore City
  "4":  "24005", // Baltimore County
  "5":  "24009", // Calvert
  "6":  "24011", // Caroline
  "7":  "24013", // Carroll
  "8":  "24015", // Cecil
  "9":  "24017", // Charles
  "10": "24019", // Dorchester
  "11": "24021", // Frederick
  "12": "24023", // Garrett
  "13": "24025", // Harford
  "14": "24027", // Howard
  "15": "24029", // Kent
  "16": "24031", // Montgomery
  "17": "24033", // Prince George's
  "18": "24035", // Queen Anne's
  "19": "24037", // St. Mary's
  "20": "24039", // Somerset
  "21": "24041", // Talbot
  "22": "24043", // Washington
  "23": "24045", // Wicomico
  "24": "24047", // Worcester
};

const ENDPOINT_FY27 = "https://dls.maryland.gov/budget/state-aid-download/?YearSelection1=2026&YearSelection2=2027&County=0";

// Zero-dep CSV parser good enough for DLS output (fields are quoted, commas
// only appear inside quoted dollar strings which we re-parse below).
function parseCsv(text) {
  const rows = [];
  let cur = [], field = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQ && text[i + 1] === '"') { field += '"'; i++; }
      else inQ = !inQ;
    } else if (ch === "," && !inQ) {
      cur.push(field); field = "";
    } else if ((ch === "\n" || ch === "\r") && !inQ) {
      if (field !== "" || cur.length) { cur.push(field); rows.push(cur); }
      cur = []; field = "";
      if (ch === "\r" && text[i + 1] === "\n") i++;
    } else {
      field += ch;
    }
  }
  if (field !== "" || cur.length) { cur.push(field); rows.push(cur); }
  const header = rows.shift().map((s) => s.trim());
  return rows.filter((r) => r.length === header.length).map((r) =>
    Object.fromEntries(header.map((h, i) => [h, (r[i] ?? "").trim()])),
  );
}

const usdToNumber = (s) => {
  if (!s) return 0;
  const n = parseFloat(String(s).replace(/[",]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

async function main() {
  try { await access(OUT_DIR); } catch { await mkdir(OUT_DIR, { recursive: true }); }

  console.log("▸ Fetching DLS State Aid to Local Governments…");
  const r = await fetch(ENDPOINT_FY27, { headers: { "User-Agent": "md-budget-intel/1.0" } });
  if (!r.ok) throw new Error(`DLS HTTP ${r.status}`);
  const text = await r.text();
  const rows = parseCsv(text);
  console.log(`  Received ${rows.length} line items`);

  // Aggregate per-county
  const byFips = {};
  const seenCategories = new Set();

  for (const row of rows) {
    const fips = DLS_TO_FIPS[row.county];
    if (!fips) continue;
    const cat = row.category_name.trim();
    seenCategories.add(cat);
    const fy26 = usdToNumber(row.fy2026);
    const fy27 = usdToNumber(row.fy2027);

    if (!byFips[fips]) {
      byFips[fips] = {
        fips,
        name: row.county_name.trim(),
        fy26_total_usd: 0,
        fy27_total_usd: 0,
        by_category: {},
        line_items: [],
      };
    }
    const bucket = byFips[fips];
    bucket.fy26_total_usd += fy26;
    bucket.fy27_total_usd += fy27;
    if (!bucket.by_category[cat]) bucket.by_category[cat] = { fy26: 0, fy27: 0 };
    bucket.by_category[cat].fy26 += fy26;
    bucket.by_category[cat].fy27 += fy27;
    bucket.line_items.push({
      category: cat,
      description: row.description.trim(),
      fy26, fy27,
      change_pct: parseFloat(row.Change_Pct || "0"),
    });
  }

  // Round totals to whole dollars
  for (const f of Object.values(byFips)) {
    f.fy26_total_usd = Math.round(f.fy26_total_usd);
    f.fy27_total_usd = Math.round(f.fy27_total_usd);
    for (const c of Object.values(f.by_category)) {
      c.fy26 = Math.round(c.fy26); c.fy27 = Math.round(c.fy27);
    }
  }

  const out = {
    _meta: {
      fetched_at: new Date().toISOString(),
      source: {
        publisher: "Maryland Department of Legislative Services",
        endpoint: ENDPOINT_FY27,
        publication: "Overview of State Aid to Local Governments Fiscal 2027 Allowance",
        publication_url: "https://dls.maryland.gov/pubs/prod/InterGovMatters/SteAidLocGov/Overview-of-State-Aid-to-Local-Governments-Fiscal-2027-Allowance.pdf",
      },
      years_covered: ["FY2026 Enacted", "FY2027 Allowance"],
      categories_present: [...seenCategories].sort(),
      counties_covered: Object.keys(byFips).length,
      total_line_items: rows.length,
      note: "Values are literally what the DLS download endpoint returned — USD amounts as published in the FY2027 State Aid book. No transformation other than dollar-string → number and aggregation by category.",
    },
    data: Object.values(byFips).sort((a, b) => a.fips.localeCompare(b.fips)),
  };

  const p = join(OUT_DIR, "county_state_aid.json");
  await writeFile(p, JSON.stringify(out, null, 2));

  // Print summary
  console.log();
  for (const f of out.data) {
    console.log(`  ${f.name.padEnd(22)} FY26 $${(f.fy26_total_usd/1e6).toFixed(1).padStart(8)}M  FY27 $${(f.fy27_total_usd/1e6).toFixed(1).padStart(8)}M`);
  }
  console.log(`\n  ✓ ${out.data.length} counties × ${seenCategories.size} categories × 2 FYs → out/county_state_aid.json`);
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
