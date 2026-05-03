#!/usr/bin/env node
/**
 * Expands the per-county state-aid and outcomes CSV templates so every one of
 * the 24 MD jurisdictions × every metric has a row with PENDING value.
 *
 * Run this ONCE to create the full blank grid, then fill in values from the
 * source workbooks cited in each row.
 *
 * Usage: node data/warehouse/expand-templates.mjs
 */

import { writeFile, readFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const MANUAL_DIR = join(__dirname, "manual");

const COUNTIES = [
  ["24001", "Allegany"], ["24003", "Anne Arundel"], ["24005", "Baltimore Co."],
  ["24009", "Calvert"], ["24011", "Caroline"], ["24013", "Carroll"],
  ["24015", "Cecil"], ["24017", "Charles"], ["24019", "Dorchester"],
  ["24021", "Frederick"], ["24023", "Garrett"], ["24025", "Harford"],
  ["24027", "Howard"], ["24029", "Kent"], ["24031", "Montgomery"],
  ["24033", "Prince George's"], ["24035", "Queen Anne's"], ["24037", "St. Mary's"],
  ["24039", "Somerset"], ["24041", "Talbot"], ["24043", "Washington"],
  ["24045", "Wicomico"], ["24047", "Worcester"], ["24510", "Baltimore City"],
];

const FISCAL_YEARS = [2026, 2027]; // edit if you want FY25 historic too

const AGENCIES = [
  { key: "k12",   label: "MD DBM State Aid Workbook",    urlPrefix: "https://dbm.maryland.gov/budget/Pages/operbudget/FY",    suffix: "StateAid.aspx", notes: "" },
  { key: "mdh",   label: "MD DBM State Aid Workbook",    urlPrefix: "https://dbm.maryland.gov/budget/Pages/operbudget/FY",    suffix: "StateAid.aspx", notes: "" },
  { key: "dda",   label: "MDH DDA Chapter 639 Report",   urlPrefix: "https://health.maryland.gov/dda/Pages/home.aspx",        suffix: "", notes: "Manual entry from DDA regional tables" },
  { key: "bha",   label: "MDH BHA Data Portal",          urlPrefix: "https://bha.health.maryland.gov/Pages/data.aspx",        suffix: "", notes: "" },
  { key: "dhs",   label: "MD DBM State Aid Workbook",    urlPrefix: "https://dbm.maryland.gov/budget/Pages/operbudget/FY",    suffix: "StateAid.aspx", notes: "" },
  { key: "dpscs", label: "MD DBM State Aid Workbook",    urlPrefix: "https://dbm.maryland.gov/budget/Pages/operbudget/FY",    suffix: "StateAid.aspx", notes: "" },
  { key: "mdot",  label: "MDOT CTP Appendix B",          urlPrefix: "https://www.mdot.maryland.gov/tso/pages/ctp.aspx",       suffix: "", notes: "Highway User Revenue" },
  { key: "dhcd",  label: "DHCD Annual Report",           urlPrefix: "https://dhcd.maryland.gov/Pages/About-DHCD/AnnualReports.aspx", suffix: "", notes: "" },
];

const OUTCOMES = [
  { key: "k12_proficiency_pct",         unit: "percent",  vintage: "SY2024-25",       label: "MSDE Report Card",                 url: "https://reportcard.msde.maryland.gov/Graphs/", notes: "Grade 8 ELA Meeting/Exceeding %" },
  { key: "k12_grad_rate_pct",           unit: "percent",  vintage: "Class of 2024",   label: "MSDE Report Card",                 url: "https://reportcard.msde.maryland.gov/Graphs/", notes: "4-year Adjusted Cohort Grad Rate" },
  { key: "mdh_life_exp_years",          unit: "years",    vintage: "2020-2022",       label: "MDH SHIP",                         url: "https://health.maryland.gov/ship/Pages/home.aspx", notes: "" },
  { key: "mdh_prev_hosp_per_10k",       unit: "per_10k",  vintage: "2022",            label: "MDH SHIP",                         url: "https://health.maryland.gov/ship/Pages/home.aspx", notes: "" },
  { key: "dda_waitlist_count",          unit: "count",    vintage: "FY25",            label: "DDA Chapter 639 Annual Report",    url: "https://health.maryland.gov/dda/Pages/home.aspx", notes: "" },
  { key: "dda_served_per_1k",           unit: "per_1k",   vintage: "FY25",            label: "DDA Ch.639 + Census",              url: "https://health.maryland.gov/dda/Pages/home.aspx", notes: "Computed: served / pop × 1000" },
  { key: "bha_opioid_death_per_100k",   unit: "per_100k", vintage: "CY2023",          label: "MDH Vital Statistics / Overdose",  url: "https://health.maryland.gov/vsa/Pages/overdose.aspx", notes: "" },
  { key: "bha_treatment_capacity_per_1k", unit: "per_1k", vintage: "2024",            label: "BHA Data Portal",                  url: "https://bha.health.maryland.gov/Pages/data.aspx", notes: "" },
  { key: "dhs_snap_participation_pct",  unit: "percent",  vintage: "FY25 avg",        label: "DHS Caseload Report",              url: "https://dhs.maryland.gov/about/data-dashboards/", notes: "" },
  { key: "dhs_child_welfare_per_1k",    unit: "per_1k",   vintage: "FY25",            label: "DHS CPS Reports",                  url: "https://dhs.maryland.gov/about/data-dashboards/", notes: "" },
  { key: "dpscs_violent_crime_per_100k", unit: "per_100k", vintage: "CY2024",         label: "MSP UCR",                          url: "https://opendata.maryland.gov/Public-Safety/Maryland-Uniform-Crime-Reports-1975-to-Present/rqud-htmh", notes: "" },
  { key: "mdot_per_capita_aid_usd",     unit: "usd",      vintage: "FY27 CTP",        label: "MDOT CTP Appendix B",              url: "https://www.mdot.maryland.gov/tso/pages/ctp.aspx", notes: "" },
  { key: "dhcd_rental_burden_pct",      unit: "percent",  vintage: "CHAS 2017-2021", label: "HUD CHAS",                         url: "https://www.huduser.gov/portal/datasets/cp.html", notes: "" },
];

function csvEscape(s) {
  if (s === null || s === undefined) return "";
  const str = String(s);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function expandStateAid() {
  const rows = ["fips,name,fy,agency,amount_usd,source_label,source_url,vintage,notes"];
  for (const [fips, name] of COUNTIES) {
    for (const fy of FISCAL_YEARS) {
      for (const a of AGENCIES) {
        const url = a.urlPrefix.includes("budget/Pages/operbudget/FY")
          ? `${a.urlPrefix}${String(fy).slice(-2)}${a.suffix}`
          : a.urlPrefix;
        rows.push([
          fips, csvEscape(name), fy, a.key, "PENDING",
          csvEscape(a.label), url, `FY${String(fy).slice(-2)} Enacted`, csvEscape(a.notes),
        ].join(","));
      }
    }
  }
  const out = join(MANUAL_DIR, "county_state_aid.expanded.csv");
  await writeFile(out, rows.join("\n") + "\n");
  console.log(`  ✓ county_state_aid.expanded.csv (${rows.length - 1} rows)`);
}

async function expandOutcomes() {
  const rows = ["fips,name,metric,value,unit,vintage,source_label,source_url,notes"];
  for (const [fips, name] of COUNTIES) {
    for (const m of OUTCOMES) {
      rows.push([
        fips, csvEscape(name), m.key, "PENDING", m.unit, m.vintage,
        csvEscape(m.label), m.url, csvEscape(m.notes),
      ].join(","));
    }
  }
  const out = join(MANUAL_DIR, "county_outcomes.expanded.csv");
  await writeFile(out, rows.join("\n") + "\n");
  console.log(`  ✓ county_outcomes.expanded.csv (${rows.length - 1} rows)`);
}

async function main() {
  console.log("▸ Expanding manual templates…");
  await expandStateAid();
  await expandOutcomes();
  console.log("\nNext steps:");
  console.log("  1. Open manual/county_state_aid.expanded.csv — fill PENDING cells from the source URL in each row");
  console.log("  2. Open manual/county_outcomes.expanded.csv — same");
  console.log("  3. Run: node data/warehouse/validate.mjs   (will fail until all PENDING replaced)");
  console.log("  4. Run: npm run build");
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
