#!/usr/bin/env node
/**
 * HUD CHAS — per-county rental cost burden
 * ─────────────────────────────────────────
 * CHAS = Comprehensive Housing Affordability Strategy. HUD's custom
 * Census tabulation, used by federal/state/local governments to plan
 * HUD program funding allocation. County-level.
 *
 * Vintage: 2016-2020 ACS 5-year (HUD's current CHAS release as of
 *          2026-04; CHAS refreshes ~every 3 years).
 *
 * Source: HUD ArcGIS FeatureServer (ACS_5YR_CHAS_Estimate_Data_by_County)
 *   https://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/
 *     ACS_5YR_CHAS_Estimate_Data_by_County/FeatureServer/4/query
 *
 * Metrics pulled:
 *   T8_CB_PCT    — % of renter households paying >30% of income for housing
 *                  (the headline "cost-burdened renter" rate)
 *   T8_CB50_PCT  — % of renters paying >50% (severely cost-burdened)
 *   T8_CB        — count of cost-burdened renter households
 *   RENT_DENOM   — total renter households (denominator)
 */

import { writeFile, mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "out");

const ENDPOINT = "https://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/ACS_5YR_CHAS_Estimate_Data_by_County/FeatureServer/4/query";

async function main() {
  try { await access(OUT_DIR); } catch { await mkdir(OUT_DIR, { recursive: true }); }

  console.log("▸ Fetching HUD CHAS per-county rental burden…");

  const params = new URLSearchParams({
    "where": "GEOID LIKE '24%'",
    "outFields": "GEOID,NAME,T8_CB,T8_CB_PCT,T8_CB50,T8_CB50_PCT,RENT_DENOM",
    "returnGeometry": "false",
    "f": "json",
  });
  const r = await fetch(`${ENDPOINT}?${params}`, { headers: { "User-Agent": "md-budget-intel/1.0" } });
  if (!r.ok) throw new Error(`CHAS HTTP ${r.status}`);
  const j = await r.json();
  if (j.error) throw new Error(`CHAS API: ${j.error.message}`);

  const rows = (j.features || []).map((f) => f.attributes);
  console.log(`  Received ${rows.length} MD counties`);

  const byFips = {};
  for (const a of rows) {
    byFips[a.GEOID] = {
      fips: a.GEOID,
      name: a.NAME,
      dhcd_renter_cost_burden_pct:        Number(a.T8_CB_PCT?.toFixed?.(2) ?? a.T8_CB_PCT),
      dhcd_renter_severe_burden_pct:      Number(a.T8_CB50_PCT?.toFixed?.(2) ?? a.T8_CB50_PCT),
      dhcd_cost_burdened_renters_count:   a.T8_CB,
      dhcd_total_renter_households:       a.RENT_DENOM,
    };
  }

  // Pretty-print summary
  const sorted = Object.values(byFips).sort((a, b) => b.dhcd_renter_cost_burden_pct - a.dhcd_renter_cost_burden_pct);
  console.log();
  for (const r of sorted) {
    console.log(`  ${r.name.padEnd(22)} ${r.dhcd_renter_cost_burden_pct.toFixed(1).padStart(5)}% burdened  (${(r.dhcd_renter_severe_burden_pct).toFixed(1)}% severe, n=${r.dhcd_total_renter_households.toLocaleString()})`);
  }

  const out = {
    _meta: {
      fetched_at: new Date().toISOString(),
      source: {
        publisher: "U.S. Department of Housing and Urban Development (HUD), Office of Policy Development and Research",
        dataset: "ACS 5-Year CHAS Estimate Data by County",
        vintage: "2016-2020 ACS 5-year (HUD's current CHAS release; refreshes ~every 3 years)",
        endpoint: ENDPOINT,
        landing_page: "https://www.huduser.gov/portal/datasets/cp.html",
        data_dictionary: "https://hud.maps.arcgis.com/sharing/rest/content/items/86a2a7d4dad64929982b8582c3edd104/data",
      },
      metrics: {
        dhcd_renter_cost_burden_pct:   "% of renter households paying >30% of gross income for housing (HUD T8_CB_PCT)",
        dhcd_renter_severe_burden_pct: "% of renter households paying >50% of gross income for housing (HUD T8_CB50_PCT)",
        dhcd_cost_burdened_renters_count: "count of cost-burdened renters (HUD T8_CB)",
        dhcd_total_renter_households:  "total renter households, denominator (HUD RENT_DENOM)",
      },
      counties_covered: Object.keys(byFips).length,
      note: "Every value is literally what the HUD CHAS FeatureServer returned. No transformation.",
    },
    data: Object.values(byFips).sort((a, b) => a.fips.localeCompare(b.fips)),
  };

  const p = join(OUT_DIR, "county_housing_burden.json");
  await writeFile(p, JSON.stringify(out, null, 2));
  console.log(`\n  ✓ ${out.data.length} counties → out/county_housing_burden.json`);
}

main().catch((e) => { console.error("Fatal:", e); process.exit(1); });
