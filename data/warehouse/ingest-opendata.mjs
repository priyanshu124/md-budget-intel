#!/usr/bin/env node
/**
 * Maryland Open Data — Per-county outcome metrics
 * ────────────────────────────────────────────────
 * Pulls every structured per-county dataset available on
 * opendata.maryland.gov that maps to the map's outcome tabs. No manual
 * entry — values are literally what the API returned.
 *
 * Datasets used:
 *   5imf-t65z  SHIP Life Expectancy 2010-2021
 *              https://opendata.maryland.gov/d/5imf-t65z
 *   c6t5-8ixv  SHIP High School Graduation Rate 2010-2022
 *              https://opendata.maryland.gov/d/c6t5-8ixv
 *   jwfa-fdxs  Violent Crime & Property Crime by County 1975-present
 *              https://opendata.maryland.gov/d/jwfa-fdxs
 *   63pe-mygy  Choose Maryland: Compare Counties — Education
 *              https://opendata.maryland.gov/d/63pe-mygy
 *
 * Output: data/warehouse/out/county_outcomes.json (keyed by FIPS)
 *         with _meta.sources[] listing every dataset + latest-year used.
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out");

const FIPS_BY_NAME = {
  "Allegany": "24001", "Anne Arundel": "24003", "Baltimore County": "24005",
  "Baltimore Co.": "24005", "Baltimore": "24005", // Socrata sometimes strips "County"
  "Calvert": "24009", "Caroline": "24011", "Carroll": "24013",
  "Cecil": "24015", "Charles": "24017", "Dorchester": "24019",
  "Frederick": "24021", "Garrett": "24023", "Harford": "24025",
  "Howard": "24027", "Kent": "24029", "Montgomery": "24031",
  "Prince George's": "24033", "Prince Georges": "24033",
  "Queen Anne's": "24035", "Queen Annes": "24035",
  "St. Mary's": "24037", "St Marys": "24037", "Saint Mary's": "24037",
  "Somerset": "24039", "Talbot": "24041", "Washington": "24043",
  "Wicomico": "24045", "Worcester": "24047",
  "Baltimore City": "24510",
};

// Socrata jurisdiction strings can end with " County". Normalize.
function normalizeJurisdiction(raw) {
  if (!raw) return null;
  let s = raw.replace(/\s+County$/i, "").trim();
  // Handle "Baltimore" ambiguity — Crime dataset uses "Baltimore County" explicitly
  if (s === "Baltimore" && raw.toLowerCase().includes("city")) s = "Baltimore City";
  return FIPS_BY_NAME[s] || FIPS_BY_NAME[raw.trim()] || null;
}

async function socrata(id, query = "") {
  const url = `https://opendata.maryland.gov/resource/${id}.json${query ? "?" + query : ""}`;
  const r = await fetch(url, { headers: { "User-Agent": "md-budget-intel/1.0" } });
  if (!r.ok) throw new Error(`${id}: HTTP ${r.status}`);
  return { url, data: await r.json() };
}

// Generic SHIP fetcher: every SHIP dataset exposes the same
// {jurisdiction, value, race_ethnicity, year, measure} shape. Filter on
// race_ethnicity="All" client-side (server-side $where breaks on apostrophes).
async function fetchShip(id, metric, unit) {
  const { url, data } = await socrata(id, "$limit=10000");
  const latest = {};
  for (const r of data) {
    if (!/all/i.test(r.race_ethnicity || "")) continue;
    const fips = normalizeJurisdiction(r.jurisdiction);
    if (!fips) continue;
    const val = parseFloat(r.value);
    if (!Number.isFinite(val)) continue;
    if (!latest[fips] || (r.year || "") > latest[fips].vintage) {
      latest[fips] = { value: val, vintage: r.year, source_url: url };
    }
  }
  return { metric, unit, data: latest };
}

async function fetchCrime() {
  // Dataset spans 1975-present. Pull most recent 5 years, pick latest per jurisdiction.
  const q = "$where=year >= '2020'&$limit=10000";
  const { url, data } = await socrata("jwfa-fdxs", q);
  const latest = {};
  for (const r of data) {
    const fips = normalizeJurisdiction(r.jurisdiction);
    if (!fips) continue;
    const rate = parseFloat(r.violent_crime_rate_per_100_000_people);
    if (!Number.isFinite(rate)) continue;
    if (!latest[fips] || r.year > latest[fips].vintage) {
      latest[fips] = { value: rate, vintage: r.year, source_url: url };
    }
  }
  return { metric: "dpscs_violent_crime_per_100k", unit: "per_100k", data: latest };
}

async function fetchEducationCompare() {
  // Single dataset with per-county rows including per-pupil spend & attainment
  const { url, data } = await socrata("63pe-mygy", "$limit=200");
  const spend = {};
  const bachelors = {};
  for (const r of data) {
    const fips = normalizeJurisdiction(r.county);
    if (!fips) continue;
    const pp = parseFloat(r.public_school_expenditures_per_pupil);
    const ba = parseFloat(r.bachelors_degree_attainment);
    if (Number.isFinite(pp)) spend[fips]     = { value: pp, vintage: "latest Choose MD", source_url: url };
    if (Number.isFinite(ba)) bachelors[fips] = { value: ba, vintage: "latest Choose MD", source_url: url };
  }
  return [
    { metric: "k12_per_pupil_spend_usd", unit: "usd", data: spend },
    { metric: "edu_bachelors_pct",       unit: "percent", data: bachelors },
  ];
}

async function main() {
  try { await access(OUT_DIR); } catch { await mkdir(OUT_DIR, { recursive: true }); }

  console.log("▸ Fetching per-county outcomes from MD Open Data…\n");

  const results = [];
  const sources = [];

  async function run(label, fn) {
    try {
      const out = await fn();
      const arr = Array.isArray(out) ? out : [out];
      for (const m of arr) {
        const coverage = Object.keys(m.data).length;
        console.log(`  ✓ ${m.metric.padEnd(32)} ${coverage}/24 counties`);
        results.push(m);
      }
    } catch (e) {
      console.error(`  ✗ ${label}: ${e.message}`);
    }
  }

  await run("Life Expectancy (SHIP)",        () => fetchShip("5imf-t65z", "mdh_life_exp_years",       "years"));
  await run("HS Grad Rate (SHIP)",           () => fetchShip("c6t5-8ixv", "k12_grad_rate_pct",        "percent"));
  await run("Drug-Induced Death (SHIP)",     () => fetchShip("eekg-2ryj", "bha_drug_death_per_100k",  "per_100k"));
  await run("Child Maltreatment (SHIP)",     () => fetchShip("qwwu-cu4u", "dhs_child_maltreat_per_1k","per_1k"));
  await run("Cancer Mortality (SHIP)",       () => fetchShip("sy7q-56ei", "mdh_cancer_mort_per_100k", "per_100k"));
  await run("Affordable Housing (SHIP)",     () => fetchShip("kv5a-92e7", "dhcd_affordable_housing_pct","percent"));
  await run("Violent Crime by County",       fetchCrime);
  await run("Education Compare Counties",    fetchEducationCompare);

  // Rebuild payload keyed by FIPS for easy join with demographics
  const byFips = {};
  for (const m of results) {
    for (const [fips, cell] of Object.entries(m.data)) {
      byFips[fips] = byFips[fips] || { fips };
      byFips[fips][m.metric] = cell.value;
      byFips[fips][`${m.metric}__vintage`] = cell.vintage;
      byFips[fips][`${m.metric}__source_url`] = cell.source_url;
    }
  }

  const payload = {
    _meta: {
      fetched_at: new Date().toISOString(),
      datasets: [
        { id: "5imf-t65z", name: "SHIP Life Expectancy 2010-2021",           url: "https://opendata.maryland.gov/d/5imf-t65z" },
        { id: "c6t5-8ixv", name: "SHIP HS Graduation Rate 2010-2022",        url: "https://opendata.maryland.gov/d/c6t5-8ixv" },
        { id: "eekg-2ryj", name: "SHIP Drug-Induced Death Rate 2009-2021",   url: "https://opendata.maryland.gov/d/eekg-2ryj" },
        { id: "qwwu-cu4u", name: "SHIP Child Maltreatment Rate 2010-2022",   url: "https://opendata.maryland.gov/d/qwwu-cu4u" },
        { id: "sy7q-56ei", name: "SHIP Cancer Mortality Rate 2009-2021",     url: "https://opendata.maryland.gov/d/sy7q-56ei" },
        { id: "kv5a-92e7", name: "SHIP Affordable Housing 2010-2020",        url: "https://opendata.maryland.gov/d/kv5a-92e7" },
        { id: "jwfa-fdxs", name: "Violent & Property Crime by County (last updated 2022, covers 1975-2020)", url: "https://opendata.maryland.gov/d/jwfa-fdxs" },
        { id: "63pe-mygy", name: "Choose MD — Education Compare Counties (last updated Dec 2019, treat as historical)", url: "https://opendata.maryland.gov/d/63pe-mygy" },
      ],
      metrics: results.map((m) => ({ metric: m.metric, unit: m.unit, coverage: Object.keys(m.data).length })),
      note: "Every value is literally what the Socrata API returned. No manual entry, no transformation other than jurisdiction-string normalization and picking the latest vintage per county.",
    },
    data: Object.values(byFips),
  };

  const outPath = join(OUT_DIR, "county_outcomes.json");
  await writeFile(outPath, JSON.stringify(payload, null, 2));
  console.log(`\n  ✓ Wrote ${payload.data.length} counties → out/county_outcomes.json`);
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
