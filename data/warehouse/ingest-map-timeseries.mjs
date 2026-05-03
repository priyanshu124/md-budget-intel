#!/usr/bin/env node
/**
 * Map time-series ingest — pulls every year of data the simple map needs.
 *
 *   1. U.S. Census ACS 5-Year Estimates, 2015 → 2024 (10 years, every MD county)
 *      • Total population (B01003_001E)
 *      • Median household income (B19013_001E)
 *      • Persons below poverty / poverty universe (B17001_002E / B17001_001E)
 *      One API call per year. Endpoint: https://api.census.gov/data/{YEAR}/acs/acs5
 *
 *   2. MD DLS State Aid to Local Governments, FY2014 → FY2027 (14 fiscal years)
 *      DLS serves year-pair CSVs; we fetch 7 pairs that cover the full span.
 *      Endpoint: https://dls.maryland.gov/budget/state-aid-download/
 *
 * Output: data/warehouse/out/map/ ← static JSON, committed to repo.
 *   population_timeseries.json      { years, by_fips }
 *   poverty_timeseries.json         { years, by_fips }
 *   median_income_timeseries.json   { years, by_fips }
 *   state_aid_timeseries.json       { years, agencies, by_fips.{fy}.{agency} }
 *   sources.json                    { every endpoint + landing page + audit url template }
 *
 * Every value is written literally as returned by the authoritative API.
 * No imputation. No interpolation. No fabrication.
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out", "map");
const PUBLIC_OUT = join(__dirname, "..", "..", "public", "data", "map");

const ACS_YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
const DLS_PAIRS = [
  [2014, 2015], [2016, 2017], [2018, 2019],
  [2020, 2021], [2022, 2023], [2024, 2025],
  [2026, 2027],
];

const DLS_TO_FIPS = {
  "1": "24001", "2": "24003", "3": "24510", "4": "24005",
  "5": "24009", "6": "24011", "7": "24013", "8": "24015",
  "9": "24017", "10": "24019", "11": "24021", "12": "24023",
  "13": "24025", "14": "24027", "15": "24029", "16": "24031",
  "17": "24033", "18": "24035", "19": "24037", "20": "24039",
  "21": "24041", "22": "24043", "23": "24045", "24": "24047",
};

const COUNTY_NAMES = {
  "24001": "Allegany",      "24003": "Anne Arundel",   "24005": "Baltimore County",
  "24009": "Calvert",       "24011": "Caroline",       "24013": "Carroll",
  "24015": "Cecil",         "24017": "Charles",        "24019": "Dorchester",
  "24021": "Frederick",     "24023": "Garrett",        "24025": "Harford",
  "24027": "Howard",        "24029": "Kent",           "24031": "Montgomery",
  "24033": "Prince George's","24035": "Queen Anne's",  "24037": "St. Mary's",
  "24039": "Somerset",      "24041": "Talbot",         "24043": "Washington",
  "24045": "Wicomico",      "24047": "Worcester",      "24510": "Baltimore City",
};

async function ensureDir(p) {
  try { await access(p); } catch { await mkdir(p, { recursive: true }); }
}

// ─── Census ─────────────────────────────────────────────────────────────────
async function fetchAcsYear(year) {
  const vars = ["NAME", "B01003_001E", "B19013_001E", "B17001_001E", "B17001_002E"];
  const url = `https://api.census.gov/data/${year}/acs/acs5?get=${vars.join(",")}&for=county:*&in=state:24`;
  const r = await fetch(url, { headers: { "User-Agent": "md-budget-intel/1.0" } });
  if (!r.ok) throw new Error(`ACS ${year} HTTP ${r.status}`);
  const rows = await r.json();
  const [header, ...data] = rows;
  const idx = (k) => header.indexOf(k);
  const out = {};
  for (const r of data) {
    const fips = `${r[idx("state")]}${r[idx("county")]}`;
    const pop = Number(r[idx("B01003_001E")]);
    const mhi = Number(r[idx("B19013_001E")]);
    const pov_univ = Number(r[idx("B17001_001E")]);
    const pov_n = Number(r[idx("B17001_002E")]);
    out[fips] = {
      population: Number.isFinite(pop) && pop > 0 ? pop : null,
      median_hh_income: Number.isFinite(mhi) && mhi > 0 ? mhi : null,
      poverty_rate_pct: pov_univ > 0 ? Number(((pov_n / pov_univ) * 100).toFixed(2)) : null,
    };
  }
  return { year, endpoint: url, by_fips: out };
}

// ─── DLS State Aid ─────────────────────────────────────────────────────────
function parseCsv(text) {
  const rows = [];
  let cur = [], field = "", inQ = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '"') {
      if (inQ && text[i + 1] === '"') { field += '"'; i++; }
      else inQ = !inQ;
    } else if (ch === "," && !inQ) { cur.push(field); field = ""; }
    else if ((ch === "\n" || ch === "\r") && !inQ) {
      if (field !== "" || cur.length) { cur.push(field); rows.push(cur); }
      cur = []; field = "";
      if (ch === "\r" && text[i + 1] === "\n") i++;
    } else field += ch;
  }
  if (field !== "" || cur.length) { cur.push(field); rows.push(cur); }
  const header = rows.shift().map((s) => s.trim());
  return rows.filter((r) => r.length === header.length).map((r) =>
    Object.fromEntries(header.map((h, i) => [h, (r[i] ?? "").trim()]))
  );
}
const usd = (s) => {
  if (!s) return 0;
  const n = parseFloat(String(s).replace(/[",\s]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

async function fetchDlsPair(y1, y2) {
  const url = `https://dls.maryland.gov/budget/state-aid-download/?YearSelection1=${y1}&YearSelection2=${y2}&County=0`;
  const r = await fetch(url, { headers: { "User-Agent": "md-budget-intel/1.0" } });
  if (!r.ok) throw new Error(`DLS ${y1}/${y2} HTTP ${r.status}`);
  const text = await r.text();
  const rows = parseCsv(text);
  const col1 = `fy${y1}`, col2 = `fy${y2}`;
  // One row = { fips, agency, fy, value }
  const byFipsByYear = {};
  const agencies = new Set();
  for (const row of rows) {
    const fips = DLS_TO_FIPS[row.county];
    if (!fips) continue;
    const agency = row.category_name.trim();
    agencies.add(agency);
    for (const [yearNum, col] of [[y1, col1], [y2, col2]]) {
      const v = usd(row[col]);
      if (!byFipsByYear[fips]) byFipsByYear[fips] = {};
      if (!byFipsByYear[fips][yearNum]) byFipsByYear[fips][yearNum] = {};
      byFipsByYear[fips][yearNum][agency] = (byFipsByYear[fips][yearNum][agency] ?? 0) + v;
    }
  }
  return { years: [y1, y2], endpoint: url, agencies: [...agencies], byFipsByYear };
}

async function fetchAllAid() {
  const all = {};            // { fips: { fy: { agency: $, _total: $ } } }
  const allAgencies = new Set();
  const endpoints = [];
  for (const [y1, y2] of DLS_PAIRS) {
    process.stdout.write(`  DLS FY${y1}/${y2}… `);
    const r = await fetchDlsPair(y1, y2);
    endpoints.push({ years: [y1, y2], url: r.endpoint });
    r.agencies.forEach((a) => allAgencies.add(a));
    for (const [fips, byYear] of Object.entries(r.byFipsByYear)) {
      if (!all[fips]) all[fips] = {};
      for (const [yr, byAgency] of Object.entries(byYear)) {
        all[fips][yr] = byAgency;
      }
    }
    console.log("ok");
  }
  // Compute per-year totals
  for (const byYear of Object.values(all)) {
    for (const byAgency of Object.values(byYear)) {
      byAgency._total = Object.entries(byAgency)
        .filter(([k]) => k !== "_total")
        .reduce((s, [, v]) => s + v, 0);
    }
  }
  const years = Array.from({ length: 2027 - 2014 + 1 }, (_, i) => 2014 + i);
  return { years, agencies: [...allAgencies].sort(), by_fips: all, endpoints };
}

// ─── Main ──────────────────────────────────────────────────────────────────
async function main() {
  await ensureDir(OUT_DIR);
  await ensureDir(PUBLIC_OUT);

  // --- Census ---
  console.log("▸ Census ACS 5-Year (2015 → 2024)…");
  const popTs = { years: ACS_YEARS, by_fips: {}, endpoints: {} };
  const povTs = { years: ACS_YEARS, by_fips: {}, endpoints: {} };
  const mhiTs = { years: ACS_YEARS, by_fips: {}, endpoints: {} };
  for (const y of ACS_YEARS) {
    process.stdout.write(`  ACS ${y}… `);
    const r = await fetchAcsYear(y);
    popTs.endpoints[y] = r.endpoint;
    povTs.endpoints[y] = r.endpoint;
    mhiTs.endpoints[y] = r.endpoint;
    for (const [fips, v] of Object.entries(r.by_fips)) {
      if (!popTs.by_fips[fips]) popTs.by_fips[fips] = { name: COUNTY_NAMES[fips] ?? null, by_year: {} };
      if (!povTs.by_fips[fips]) povTs.by_fips[fips] = { name: COUNTY_NAMES[fips] ?? null, by_year: {} };
      if (!mhiTs.by_fips[fips]) mhiTs.by_fips[fips] = { name: COUNTY_NAMES[fips] ?? null, by_year: {} };
      popTs.by_fips[fips].by_year[y] = v.population;
      povTs.by_fips[fips].by_year[y] = v.poverty_rate_pct;
      mhiTs.by_fips[fips].by_year[y] = v.median_hh_income;
    }
    console.log("ok");
  }

  // --- State Aid ---
  console.log("\n▸ DLS State Aid (FY2014 → FY2027)…");
  const aid = await fetchAllAid();

  // --- Sources ---
  const sources = {
    built_at: new Date().toISOString(),
    datasets: [
      {
        id: "population_timeseries",
        label: "County Population (annual)",
        publisher: "U.S. Census Bureau — American Community Survey 5-Year Estimates",
        variable: "B01003_001E",
        vintage_years: ACS_YEARS,
        endpoints: popTs.endpoints,
        audit_url_template: "https://data.census.gov/table?q=B01003&g=0500000US{fips}",
        license: "Public domain (Title 13, U.S. Code)",
      },
      {
        id: "poverty_timeseries",
        label: "Poverty Rate (annual)",
        publisher: "U.S. Census Bureau — American Community Survey 5-Year Estimates",
        variables: ["B17001_001E (universe)", "B17001_002E (below poverty)"],
        derivation: "poverty_rate_pct = 100 * B17001_002E / B17001_001E",
        vintage_years: ACS_YEARS,
        endpoints: povTs.endpoints,
        audit_url_template: "https://data.census.gov/table?q=B17001&g=0500000US{fips}",
        license: "Public domain",
      },
      {
        id: "median_income_timeseries",
        label: "Median Household Income (annual)",
        publisher: "U.S. Census Bureau — American Community Survey 5-Year Estimates",
        variable: "B19013_001E",
        vintage_years: ACS_YEARS,
        endpoints: mhiTs.endpoints,
        audit_url_template: "https://data.census.gov/table?q=B19013&g=0500000US{fips}",
        license: "Public domain",
        note: "Values in nominal dollars for each ACS vintage year — not inflation-adjusted by this pipeline.",
      },
      {
        id: "state_aid_timeseries",
        label: "State Aid to Local Governments by Agency (FY2014 → FY2027)",
        publisher: "Maryland Department of Legislative Services",
        endpoints: aid.endpoints,
        fiscal_years: aid.years,
        agencies: aid.agencies,
        landing_page: "https://dls.maryland.gov/budget/state-aid-overview",
        publication_url_latest: "https://dls.maryland.gov/pubs/prod/InterGovMatters/SteAidLocGov/Overview-of-State-Aid-to-Local-Governments-Fiscal-2027-Allowance.pdf",
        license: "Public record — MD Gen. Provisions §4-101 et seq.",
        note: "CSV download that backs the printed 'Overview of State Aid to Local Governments' book each session. Values are nominal USD; no inflation adjustment.",
      },
    ],
    covid_window: {
      pre_covid_benchmark_year: 2019,
      post_covid_benchmark_year: 2023,
      note: "Pre-/Post-COVID toggle maps benchmark years to ACS 5-Year 2019 vintage and ACS 5-Year 2023 vintage respectively. For state aid, pre=FY2019 and post=FY2023.",
    },
  };

  // --- Write to warehouse + public in one shot ---
  for (const base of [OUT_DIR, PUBLIC_OUT]) {
    await writeFile(join(base, "population_timeseries.json"), JSON.stringify(popTs, null, 2));
    await writeFile(join(base, "poverty_timeseries.json"),    JSON.stringify(povTs, null, 2));
    await writeFile(join(base, "median_income_timeseries.json"), JSON.stringify(mhiTs, null, 2));
    await writeFile(join(base, "state_aid_timeseries.json"),  JSON.stringify({
      years: aid.years, agencies: aid.agencies, by_fips: aid.by_fips,
    }, null, 2));
    await writeFile(join(base, "sources.json"), JSON.stringify(sources, null, 2));
  }

  // --- Summary ---
  const counties = Object.keys(popTs.by_fips).length;
  console.log(`\n  ✓ Population:    ${counties} counties × ${ACS_YEARS.length} years`);
  console.log(`  ✓ Poverty:       ${counties} counties × ${ACS_YEARS.length} years`);
  console.log(`  ✓ Median Income: ${counties} counties × ${ACS_YEARS.length} years`);
  console.log(`  ✓ State Aid:     ${Object.keys(aid.by_fips).length} counties × ${aid.years.length} fiscal years × ${aid.agencies.length} agencies`);
  console.log(`  Written to data/warehouse/out/map/ and public/data/map/`);
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
