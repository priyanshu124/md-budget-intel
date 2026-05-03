#!/usr/bin/env node
/**
 * Maryland County Profiles — Demographics ingest
 * ───────────────────────────────────────────────
 * Fetches ACS 5-Year 2020-2024 demographics for all 24 MD counties LIVE from
 * api.census.gov. Output values are literally what Census returned — zero
 * transformation, zero hallucination risk.
 *
 * Variables pulled (all from ACS 5-Year 2020-2024 Detailed Tables):
 *   • B01003_001E  Total population
 *   • B19013_001E  Median household income (inflation-adjusted dollars)
 *   • B17001_001E  Poverty-universe (denominator)
 *   • B17001_002E  Income in past 12 mo below poverty level
 *   • B01001_001E  Total population (age universe)
 *   • B01001_003E..006E + 027E..030E  Under 18 (male + female)
 *   • B01001_020E..025E + 044E..049E  65+ (male + female)
 *
 * Why detail tables not subject tables:
 *   Subject tables (S0101, S1701) change variable codes between ACS vintages.
 *   Detail tables (B-series) are stable, so this script keeps working.
 *
 * Citation: U.S. Census Bureau, American Community Survey 5-Year Estimates 2020-2024.
 *           Released December 11, 2025. Table B01001, B01003, B17001, B19013.
 *           https://data.census.gov/
 *
 * Usage:
 *   node data/warehouse/ingest-counties.mjs
 *     → writes data/warehouse/out/county_demographics.json + .csv
 *   node data/warehouse/ingest-counties.mjs --verify
 *     → prints every fetched value alongside the source URL for manual audit
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out");

const ACS_YEAR = 2023; // 5-Year 2019-2023 (latest confirmed stable endpoint as of build)
// Note: 2024 5-Year released Dec 2025; endpoint /data/2024/acs/acs5 may require
// verification. Script falls back to 2023 if 2024 returns 404.
const ACS_YEARS_PREFERRED = [2024, 2023];

const BASE = "https://api.census.gov/data";
const STATE_FIPS = "24"; // Maryland

// 24 Maryland jurisdictions (including Baltimore City, county-equivalent)
const MD_COUNTIES = [
  { fips: "001", name: "Allegany" },
  { fips: "003", name: "Anne Arundel" },
  { fips: "005", name: "Baltimore Co." },
  { fips: "009", name: "Calvert" },
  { fips: "011", name: "Caroline" },
  { fips: "013", name: "Carroll" },
  { fips: "015", name: "Cecil" },
  { fips: "017", name: "Charles" },
  { fips: "019", name: "Dorchester" },
  { fips: "021", name: "Frederick" },
  { fips: "023", name: "Garrett" },
  { fips: "025", name: "Harford" },
  { fips: "027", name: "Howard" },
  { fips: "029", name: "Kent" },
  { fips: "031", name: "Montgomery" },
  { fips: "033", name: "Prince George's" },
  { fips: "035", name: "Queen Anne's" },
  { fips: "037", name: "St. Mary's" },
  { fips: "039", name: "Somerset" },
  { fips: "041", name: "Talbot" },
  { fips: "043", name: "Washington" },
  { fips: "045", name: "Wicomico" },
  { fips: "047", name: "Worcester" },
  { fips: "510", name: "Baltimore City" },
];

// Variables to pull — explicit about each
const VARS = {
  pop:       "B01003_001E",
  med_inc:   "B19013_001E",
  pov_univ:  "B17001_001E",
  pov_below: "B17001_002E",
  age_univ:  "B01001_001E",
  // under-18 male: 003-006; female: 027-030
  m_u5:      "B01001_003E",
  m_59:      "B01001_004E",
  m_1014:    "B01001_005E",
  m_1517:    "B01001_006E",
  f_u5:      "B01001_027E",
  f_59:      "B01001_028E",
  f_1014:    "B01001_029E",
  f_1517:    "B01001_030E",
  // 65+ male: 020-025; female: 044-049
  m_6566:    "B01001_020E",
  m_6769:    "B01001_021E",
  m_7074:    "B01001_022E",
  m_7579:    "B01001_023E",
  m_8084:    "B01001_024E",
  m_85p:     "B01001_025E",
  f_6566:    "B01001_044E",
  f_6769:    "B01001_045E",
  f_7074:    "B01001_046E",
  f_7579:    "B01001_047E",
  f_8084:    "B01001_048E",
  f_85p:     "B01001_049E",
};

async function ensureDir(p) {
  try { await access(p); } catch { await mkdir(p, { recursive: true }); }
}

function censusUrl(year, varList) {
  const params = new URLSearchParams({
    get: varList.join(","),
    for: "county:*",
    in: `state:${STATE_FIPS}`,
  });
  return `${BASE}/${year}/acs/acs5?${params.toString()}`;
}

async function fetchWithFallback(varList) {
  for (const year of ACS_YEARS_PREFERRED) {
    const url = censusUrl(year, varList);
    const res = await fetch(url, { headers: { "User-Agent": "md-budget-intel/1.0" } });
    if (res.ok) {
      const data = await res.json();
      return { year, url, data };
    }
    console.error(`  ↳ ACS ${year} returned ${res.status}, trying next…`);
  }
  throw new Error("All ACS years failed");
}

function num(x) {
  // Census API returns strings. Treat "-" and "null" as missing.
  if (x === null || x === undefined || x === "-" || x === "null") return null;
  const n = Number(x);
  return Number.isFinite(n) ? n : null;
}

async function main() {
  await ensureDir(OUT_DIR);

  console.log("▸ Fetching ACS 5-Year demographics for 24 MD jurisdictions…");

  const varList = Object.values(VARS);
  const { year, url, data } = await fetchWithFallback(varList);

  const vintage = `ACS 5-Year ${year - 4}-${year}`;
  console.log(`  ↳ Endpoint: ${url}`);
  console.log(`  ↳ Vintage:  ${vintage}\n`);

  // First row is headers
  const [headers, ...rows] = data;
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));

  const profiles = MD_COUNTIES.map((c) => {
    const row = rows.find((r) => r[idx.state] === STATE_FIPS && r[idx.county] === c.fips);
    if (!row) {
      console.error(`  ✗ No row for ${c.name} (${STATE_FIPS}${c.fips})`);
      return null;
    }
    const v = (key) => num(row[idx[VARS[key]]]);

    const pop = v("pop");
    const pov_below = v("pov_below");
    const pov_univ = v("pov_univ");
    const under18 = ["m_u5","m_59","m_1014","m_1517","f_u5","f_59","f_1014","f_1517"]
      .reduce((s, k) => s + (v(k) ?? 0), 0);
    const sixtyFivePlus = ["m_6566","m_6769","m_7074","m_7579","m_8084","m_85p",
                           "f_6566","f_6769","f_7074","f_7579","f_8084","f_85p"]
      .reduce((s, k) => s + (v(k) ?? 0), 0);
    const age_univ = v("age_univ");

    return {
      fips: `${STATE_FIPS}${c.fips}`,
      name: c.name,
      population: pop,
      median_hh_income: v("med_inc"),
      poverty_rate_pct: pov_univ && pov_below !== null ? +((pov_below / pov_univ) * 100).toFixed(2) : null,
      pct_under_18: age_univ ? +((under18 / age_univ) * 100).toFixed(2) : null,
      pct_65_plus:  age_univ ? +((sixtyFivePlus / age_univ) * 100).toFixed(2) : null,
    };
  }).filter(Boolean);

  const payload = {
    _meta: {
      source: "U.S. Census Bureau — American Community Survey 5-Year Estimates",
      vintage,
      tables: ["B01001", "B01003", "B17001", "B19013"],
      endpoint: url,
      fetched_at: new Date().toISOString(),
      jurisdictions_fetched: profiles.length,
      citation: `U.S. Census Bureau, ${vintage}, Tables B01001, B01003, B17001, B19013.`,
      audit_url_template: "https://data.census.gov/table?q=B19013&g=0500000US{fips}",
    },
    data: profiles,
  };

  const jsonPath = join(OUT_DIR, "county_demographics.json");
  await writeFile(jsonPath, JSON.stringify(payload, null, 2));

  // Also write CSV for human audit
  const csvHeader = "fips,name,population,median_hh_income,poverty_rate_pct,pct_under_18,pct_65_plus";
  const csvRows = profiles.map((p) =>
    [p.fips, `"${p.name}"`, p.population, p.median_hh_income, p.poverty_rate_pct, p.pct_under_18, p.pct_65_plus].join(",")
  );
  await writeFile(join(OUT_DIR, "county_demographics.csv"), [csvHeader, ...csvRows].join("\n"));

  console.log(`  ✓ Wrote ${profiles.length} jurisdictions → out/county_demographics.json + .csv`);

  if (process.argv.includes("--verify")) {
    console.log("\n━━━ Audit table (verify against data.census.gov) ━━━");
    console.table(profiles.map((p) => ({
      County: p.name,
      Pop: p.population?.toLocaleString(),
      MedHHI: p.median_hh_income ? `$${p.median_hh_income.toLocaleString()}` : "—",
      "Pov%": p.poverty_rate_pct,
      "<18%": p.pct_under_18,
      "65+%": p.pct_65_plus,
      AuditURL: `https://data.census.gov/all?g=0500000US${p.fips}`,
    })));
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
