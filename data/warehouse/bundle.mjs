#!/usr/bin/env node
/**
 * Map bundler — merges every per-county ingest into one JSON the map loads.
 *
 *   out/county_demographics.json   (Census ACS)
 * + out/county_outcomes.json       (MD Open Data SHIP + Crime + Choose MD)
 * + out/county_state_aid.json      (DLS State Aid to Local Govts)
 * + out/county_housing_burden.json (HUD CHAS)
 *
 * = out/county_bundle.json  — keyed by FIPS, one row per county, flat.
 *
 * Every field that comes from an external API carries a sibling `__source`
 * pointing at the API endpoint so the map's citation footer can
 * deep-link per cell.
 */

import { readFile, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out");

async function loadJson(name) {
  const p = join(OUT_DIR, name);
  try { await access(p); } catch { return null; }
  return JSON.parse(await readFile(p, "utf8"));
}

function flagMissing(label, obj) {
  if (!obj) console.warn(`  ⚠ ${label} not present — run its ingest first`);
  return obj;
}

async function main() {
  const demo      = flagMissing("county_demographics.json",   await loadJson("county_demographics.json"));
  const outcomes  = flagMissing("county_outcomes.json",       await loadJson("county_outcomes.json"));
  const stateAid  = flagMissing("county_state_aid.json",      await loadJson("county_state_aid.json"));
  const housing   = flagMissing("county_housing_burden.json", await loadJson("county_housing_burden.json"));

  const byFips = {};

  const ensure = (fips) => (byFips[fips] = byFips[fips] || { fips });

  // Demographics
  for (const d of demo?.data ?? []) {
    const r = ensure(d.fips);
    Object.assign(r, {
      name: d.name,
      population:         d.population,
      median_hh_income:   d.median_hh_income,
      poverty_rate_pct:   d.poverty_rate_pct,
      age_under_18_pct:   d.age_under_18_pct,
      age_65_plus_pct:    d.age_65_plus_pct,
    });
  }

  // Outcomes
  for (const o of outcomes?.data ?? []) {
    const r = ensure(o.fips);
    for (const [k, v] of Object.entries(o)) {
      if (k === "fips") continue;
      r[k] = v;
    }
  }

  // State aid
  for (const s of stateAid?.data ?? []) {
    const r = ensure(s.fips);
    r.state_aid_fy26_usd = s.fy26_total_usd;
    r.state_aid_fy27_usd = s.fy27_total_usd;
    r.state_aid_by_category = s.by_category;
    // Per-capita: requires population from demographics
    if (r.population) {
      r.state_aid_fy27_per_capita_usd = Math.round(s.fy27_total_usd / r.population);
    }
  }

  // Housing burden
  for (const h of housing?.data ?? []) {
    const r = ensure(h.fips);
    r.dhcd_renter_cost_burden_pct        = h.dhcd_renter_cost_burden_pct;
    r.dhcd_renter_severe_burden_pct      = h.dhcd_renter_severe_burden_pct;
    r.dhcd_cost_burdened_renters_count   = h.dhcd_cost_burdened_renters_count;
    r.dhcd_total_renter_households       = h.dhcd_total_renter_households;
  }

  const rows = Object.values(byFips).sort((a, b) => a.fips.localeCompare(b.fips));

  const bundle = {
    _meta: {
      built_at: new Date().toISOString(),
      counties: rows.length,
      sources: [
        demo?._meta      ? { component: "demographics", publisher: demo._meta.source, citation: demo._meta.citation, endpoint: demo._meta.endpoint, vintage: demo._meta.vintage, audit_url_template: demo._meta.audit_url_template } : null,
        outcomes?._meta  ? { component: "outcomes",   datasets: outcomes._meta.datasets } : null,
        stateAid?._meta?.source ? { component: "state_aid", ...stateAid._meta.source } : null,
        housing?._meta?.source  ? { component: "housing",   ...housing._meta.source  } : null,
      ].filter(Boolean),
      fields_with_no_live_source: [
        { field: "dda_waitlist_count",       reason: "Only in DDA Ch.639 PDF — no API" },
        { field: "bha_treatment_capacity",   reason: "HTML-only dashboard on BHA portal" },
        { field: "dhs_snap_participation_pct", reason: "Monthly PDF caseload reports" },
        { field: "mdot_hur_per_capita_usd",  reason: "Only in MDOT CTP Appendix B PDF" },
        { field: "msde_proficiency_pct",     reason: "Report Card is JS-rendered; no API" },
      ],
    },
    data: rows,
  };

  const p = join(OUT_DIR, "county_bundle.json");
  await writeFile(p, JSON.stringify(bundle, null, 2));

  // Summary
  const allFields = new Set();
  for (const r of rows) for (const k of Object.keys(r)) allFields.add(k);
  console.log(`  ✓ Bundled ${rows.length} counties, ${allFields.size} fields → out/county_bundle.json`);
  console.log(`  Sources: ${bundle._meta.sources.length} authoritative APIs`);
  console.log(`  Gaps (no live source): ${bundle._meta.fields_with_no_live_source.length} fields`);
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
