#!/usr/bin/env node
/**
 * Maryland Budget Intelligence — Data Warehouse Ingestion
 * ─────────────────────────────────────────────────────────
 * Reads data/warehouse/sources.json, fetches each source, normalizes, and
 * writes to data/warehouse/out/{id}.json + a single build manifest.
 *
 * Design choices:
 *   • Zero non-stdlib deps — uses native fetch (Node ≥18)
 *   • Idempotent: re-running overwrites output safely
 *   • Manual-JSON sources (JCR, ACFR, DoIT) live in ./manual and are
 *     copied into out/ so charts can read from a single canonical path
 *   • Emits build manifest (build.json) with timestamp + source hashes
 *     for cache-busting and audit
 *
 * Usage:
 *   node data/warehouse/ingest.mjs          # fetch everything
 *   node data/warehouse/ingest.mjs md_rainy_day_fund  # single source
 */

import { readFile, writeFile, mkdir, copyFile, access } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const OUT_DIR = join(ROOT, "out");
const MANUAL_DIR = join(ROOT, "manual");

const args = process.argv.slice(2);
const onlyId = args[0];

async function ensureDir(p) {
  try { await access(p); } catch { await mkdir(p, { recursive: true }); }
}

async function readJson(p) {
  const raw = await readFile(p, "utf8");
  return JSON.parse(raw);
}

async function fetchSocrata(src) {
  const url = new URL(src.url);
  for (const [k, v] of Object.entries(src.params || {})) {
    url.searchParams.set(k, v);
  }
  const res = await fetch(url, { headers: { "User-Agent": "md-budget-intel/1.0" } });
  if (!res.ok) throw new Error(`${src.id}: HTTP ${res.status} — ${url.href}`);
  return res.json();
}

async function loadStatic(src) {
  const path = resolve(ROOT, src.path);
  try {
    return await readJson(path);
  } catch {
    // If the manual file isn't present, emit a stub so charts still render.
    return { _stub: true, note: `Manual file missing at ${src.path}. Populate it to enable live data.` };
  }
}

function hash(obj) {
  return createHash("sha256").update(JSON.stringify(obj)).digest("hex").slice(0, 12);
}

async function processSource(src) {
  const t0 = Date.now();
  let data;
  try {
    if (src.type === "opendata_socrata") data = await fetchSocrata(src);
    else if (src.type === "static_json") data = await loadStatic(src);
    else throw new Error(`Unknown source type: ${src.type}`);
  } catch (err) {
    console.error(`  ✗ ${src.id}: ${err.message}`);
    return { id: src.id, status: "error", error: err.message };
  }

  const outPath = join(OUT_DIR, `${src.id}.json`);
  const payload = {
    _meta: {
      id: src.id,
      label: src.label,
      citation: src.citation,
      fetched_at: new Date().toISOString(),
      row_count: Array.isArray(data) ? data.length : undefined,
      hash: hash(data),
    },
    data,
  };
  await writeFile(outPath, JSON.stringify(payload, null, 2));
  const ms = Date.now() - t0;
  console.log(`  ✓ ${src.id.padEnd(28)} ${String(payload._meta.row_count ?? "—").padStart(6)} rows · ${ms}ms · ${payload._meta.hash}`);
  return { id: src.id, status: "ok", rows: payload._meta.row_count, hash: payload._meta.hash, ms };
}

async function main() {
  await ensureDir(OUT_DIR);
  await ensureDir(MANUAL_DIR);

  const { sources } = await readJson(join(ROOT, "sources.json"));
  const targets = onlyId ? sources.filter((s) => s.id === onlyId) : sources;
  if (targets.length === 0) {
    console.error(`No source matches "${onlyId}"`);
    process.exit(1);
  }

  console.log(`▸ Maryland Budget Warehouse — ingesting ${targets.length} source(s)`);
  console.log("─".repeat(72));

  const results = [];
  for (const src of targets) {
    const r = await processSource(src);
    results.push(r);
  }

  const manifest = {
    built_at: new Date().toISOString(),
    node_version: process.version,
    sources: results,
    ok: results.filter((r) => r.status === "ok").length,
    errors: results.filter((r) => r.status === "error").length,
  };
  await writeFile(join(OUT_DIR, "build.json"), JSON.stringify(manifest, null, 2));

  console.log("─".repeat(72));
  console.log(`▸ Done. ${manifest.ok} ok · ${manifest.errors} error(s). Manifest → out/build.json`);
  if (manifest.errors > 0) process.exit(2);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
