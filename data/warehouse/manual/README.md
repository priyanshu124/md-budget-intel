# Manual data mirrors

Sources that do not have an open-data endpoint live here as hand-curated JSON.
The ingest script copies them into `../out/` alongside the API-fetched datasets.

Update cadence:
- `jcr_2025_highlights.json` — once per JCR publication (annual, April)
- `acfr_reserve.json` — once per ACFR release (annual, December)
- `legacy_it.json` — once per Chapter 497 DoIT report (annual, July)

Each file should be valid JSON and include a `citation` string.
