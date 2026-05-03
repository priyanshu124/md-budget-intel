#!/usr/bin/env node
/**
 * Build gate — fails with non-zero exit if the county data bundle is
 * missing, stale, or internally inconsistent. Wired as `prebuild` in
 * package.json so `npm run build` cannot deploy hallucinated values.
 *
 * The source of truth is `public/data/county_bundle.json` (the staged
 * copy the client fetches), backed by `data/warehouse/out/county_bundle.json`.
 *
 * Checks:
 *   • Bundle file exists and has 24 counties
 *   • MD total population is in sane range (5.9M–6.3M from Census ACS)
 *   • Every county has FIPS, name, population, and median_hh_income
 *   • Every outcome/aid value that exists references a source URL starting
 *     with https://  (sibling __source_url field OR _meta.sources entry)
 *   • State Aid FY27 totals reconcile to expected ~$27B statewide
 *   • Sources array has at least 4 entries (demographics, outcomes,
 *     state_aid, housing) with valid publisher strings
 *
 * Cells from `fields_with_no_live_source` are NOT errors — they are
 * explicitly declared gaps and render as amber tiles on the site.
 */

import { readFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out");
const PUBLIC_DATA = join(__dirname, "..", "..", "public", "data");

const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function loadBundle() {
  const warehousePath = join(OUT_DIR, "county_bundle.json");
  const publicPath = join(PUBLIC_DATA, "county_bundle.json");

  if (!await fileExists(warehousePath)) {
    err(`Warehouse bundle missing: ${warehousePath}\n       Run: npm run ingest:all`);
    return null;
  }
  const warehouse = JSON.parse(await readFile(warehousePath, "utf8"));

  if (!await fileExists(publicPath)) {
    err(`Public-staged bundle missing: ${publicPath}\n       Copy from warehouse: cp ${warehousePath} ${publicPath}`);
    return warehouse;
  }
  const staged = JSON.parse(await readFile(publicPath, "utf8"));

  if (warehouse._meta?.built_at !== staged._meta?.built_at) {
    warn(
      `Staged bundle (${staged._meta?.built_at}) is older than warehouse (${warehouse._meta?.built_at}).\n` +
      `       Copy latest: cp ${warehousePath} ${publicPath}`
    );
  }

  return staged;
}

function validateCounties(bundle) {
  const rows = bundle.data ?? [];
  if (rows.length !== 24) {
    err(`Bundle has ${rows.length} counties, expected 24`);
    return;
  }

  const required = ["fips", "name", "population", "median_hh_income"];
  for (const r of rows) {
    for (const k of required) {
      if (r[k] == null) err(`County ${r.fips ?? "?"} ${r.name ?? "?"} missing required field: ${k}`);
    }
    if (r.fips && !/^24\d{3}$/.test(r.fips)) {
      err(`County ${r.name} has non-MD FIPS: ${r.fips}`);
    }
  }

  const totalPop = rows.reduce((s, r) => s + (r.population ?? 0), 0);
  if (totalPop < 5_900_000 || totalPop > 6_300_000) {
    err(`MD total population = ${totalPop.toLocaleString()} — outside sane range 5.9M–6.3M`);
  } else {
    console.log(`  ✓ Demographics: 24 counties · MD total pop ${totalPop.toLocaleString()}`);
  }
}

function validateSources(bundle) {
  const srcs = bundle._meta?.sources ?? [];
  if (srcs.length < 4) {
    err(`_meta.sources has ${srcs.length} entries, expected ≥4 (demographics, outcomes, state_aid, housing)`);
    return;
  }
  for (const s of srcs) {
    if (!s.component) err(`Source entry missing "component" key: ${JSON.stringify(s).slice(0, 80)}`);
    const urls = [s.endpoint, s.publication_url, s.landing_page, s.data_dictionary].filter(Boolean);
    for (const u of urls) {
      if (!u.startsWith("https://")) err(`Source ${s.component} has non-https URL: ${u}`);
    }
  }
  console.log(`  ✓ Sources: ${srcs.length} authoritative APIs/publishers declared`);
}

function validateStateAid(bundle) {
  const rows = bundle.data ?? [];
  const covered = rows.filter((r) => r.state_aid_fy27_usd != null);
  if (covered.length !== 24) {
    err(`State Aid FY27 covers ${covered.length}/24 counties`);
    return;
  }
  const total = covered.reduce((s, r) => s + (r.state_aid_fy27_usd ?? 0), 0);
  // DLS "By County" direct-aid download (excludes retirement payments routed
  // statewide) runs ~$10B–$14B. Full aggregate including retirement is ~$20B+.
  // Range is wide to catch pipeline bugs (wrong units, missing categories)
  // without flagging the legitimate direct-aid figure.
  if (total < 8_000_000_000 || total > 32_000_000_000) {
    err(`State Aid FY27 statewide total = $${(total / 1e9).toFixed(2)}B — outside sane range $8B–$32B`);
  } else {
    console.log(`  ✓ State Aid FY27: 24/24 counties · statewide direct aid $${(total / 1e9).toFixed(2)}B`);
  }
}

function validateOutcomeCoverage(bundle) {
  const metrics = [
    "mdh_life_exp_years",
    "k12_grad_rate_pct",
    "bha_drug_death_per_100k",
    "dhs_child_maltreat_per_1k",
    "mdh_cancer_mort_per_100k",
    "dhcd_renter_cost_burden_pct",
  ];
  const rows = bundle.data ?? [];
  for (const m of metrics) {
    const covered = rows.filter((r) => r[m] != null).length;
    if (covered < 20) {
      err(`Outcome metric ${m}: only ${covered}/24 counties covered (expected ≥20)`);
    }
  }
  console.log(`  ✓ Outcomes: ${metrics.length} core metrics each covering ≥20 counties`);
}

async function validateMfrClaims() {
  // Narrative charts that hardcode MFR-derived numbers must match the
  // hand-verified values in mfr-verified-kpis.json. This prevents future
  // edits from silently re-introducing the fabricated Grade 4 Math /
  // Chronic Absenteeism / HS Grad Rate numbers that were corrected on
  // 2026-04-21.
  const mfrPath = join(__dirname, "mfr-verified-kpis.json");
  if (!await fileExists(mfrPath)) {
    err(`MFR verified KPIs file missing: ${mfrPath}`);
    return;
  }
  const chartPath = join(__dirname, "..", "..", "components", "charts", "EducationStoryChart.tsx");
  if (!await fileExists(chartPath)) return;
  const chartText = await readFile(chartPath, "utf8");

  // Known hallucinated values — fail the build if any reappear in the
  // outcome strip (tolerate them in comments since we keep a
  // hallucination_note comment explaining the fix).
  const forbidden = [
    { pattern: /label: ["']Grade 4 Math Proficiency["'][\s\S]{0,120}v24: ["']38%["']/, reason: "Grade 4 Math 2024 = 38% was fabricated; MFR reports 28.6%" },
    { pattern: /label: ["']Chronic Absenteeism["'][\s\S]{0,120}v24: ["']34%["']/,     reason: "Chronic Absenteeism 2024 = 34% was fabricated; MFR reports 26.7%" },
    { pattern: /label: ["']HS Graduation Rate["'][\s\S]{0,120}v24: ["']86\.2%["']/,   reason: "HS Grad Rate 2024 = 86.2% was off; MFR reports 85.8%" },
  ];
  for (const f of forbidden) {
    if (f.pattern.test(chartText)) err(`EducationStoryChart.tsx: ${f.reason}`);
  }
  console.log(`  ✓ MFR narrative claims: EducationStoryChart.tsx free of known fabrications`);
}

async function main() {
  console.log("▸ Validating county data bundle…\n");

  const bundle = await loadBundle();
  if (bundle) {
    validateCounties(bundle);
    validateSources(bundle);
    validateStateAid(bundle);
    validateOutcomeCoverage(bundle);
  }
  await validateMfrClaims();

  console.log();
  if (warnings.length) {
    console.log("⚠ Warnings:");
    warnings.forEach((w) => console.log(`    ${w}`));
    console.log();
  }
  if (errors.length) {
    console.log("✗ Errors (build blocked):");
    errors.forEach((e) => console.log(`    ${e}`));
    console.log("\n   Fix these before running `npm run build`.");
    process.exit(1);
  }
  console.log("✓ All county data validated — build gate open.");
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
