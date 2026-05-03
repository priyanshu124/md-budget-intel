# MBIS Methodology

How Maryland Budget Intelligence System turns published budget documents into the dashboard you see.

---

## 1. Source documents (Input)

Seven published PDFs anchor every number on the dashboard:

| Source | Type | Year | What we use |
|--------|------|------|-------------|
| ACFR | Audited | 2023 | Reserve baseline, fund balances |
| ACFR | Audited | 2024 | Reserve trend, federal grants |
| ACFR | Audited | 2025 | Statement of Activities, Statistical Section, Expenses by Function |
| JCR | Legislative | 2025 | Agency reductions, Blueprint cut, Commerce cut |
| FY2026 Budget Vol 2 | Executive | 2025 | Deficiency appropriations schedule |
| FY2027 Budget Highlights | Executive | 2026 | Proposed $70.8B operating budget |
| Sankey workbook | DBM internal | 2026 | Revenue → fund type → agency mapping |

We do **not** use third-party data aggregators, lobbying-firm analyses, or news reporting in the data pipeline. News articles are referenced for narrative copy only and never as a numerical source.

---

## 2. Processing pipeline (Magic Box)

The pipeline is deterministic. No LLM is in the data loop.

### 2.1 Extraction

- PDFs are downloaded to a local `data/sources/` directory
- Tables are extracted with PDF-table parsers (Camelot, Tabula) for structured data
- Narrative numbers are entered into Python dicts with the page citation alongside

### 2.2 Cleaning

- Currency strings normalized to floats in millions
- Fiscal year strings normalized to integer years (e.g. "FY 2025" → 2025)
- Agency names normalized to canonical forms (e.g. "MDH" = "Maryland Department of Health")

### 2.3 Aggregation

- Per-chart aggregations live in `ACFR_JCR_3.2.ipynb` (and the `(1)` revision)
- Each cell produces one chart and writes its `_hed()` source string with page citations
- The `_hed(fig, title, deck, src)` helper places the source string in the chart footer at fixed coordinates

### 2.4 Projections

Projections appear only on these charts:

- **Structural Gap** — FY2023–2025 slope extended to FY2030 (linear)
- **Blueprint** — historical avg growth applied to JCR-cut starting line
- **MDH spending** — 7% CAGR extended to FY2030

Every projection chart shows the slope and base years on the chart itself. We do not extrapolate beyond FY2030.

---

## 3. Output (Dashboard)

### 3.1 Components

- **KPI Row** — 6 cards with red/amber/green threshold colors
- **Ticker** — 10 rotating headline metrics (B2 trend layer)
- **Insight cards** — 3 cards: Health Spiral, Federal Cliff, Blueprint Bind
- **Carousel** — 10 horizontally scrollable slides, each with chart + commentary + citation
- **Map** — D3 county choropleth with 4 metric layers and year slider FY2015–2026
- **Methodology page** — NXT pillars, NIST AI RMF, source list
- **Guardrails page** — What MBIS will and won't do

### 3.2 Citations

Every chart citation appears in three places:

1. The chart footer (matplotlib `_hed()` source param)
2. The carousel slide sidebar (Source field)
3. The Methodology page (linked source list)

Citations follow the pattern `<DOCUMENT> · <YEAR> · pp.<PAGES> (PDF p.<PDF_PAGE>)`.

---

## 4. Deterministic guarantee

Every figure on the dashboard is reproducible by:

1. Downloading the source PDFs listed above
2. Running the Python notebooks
3. Building the Next.js site

There is no hidden data path. There is no LLM call between the source PDF and the rendered figure.

---

## 5. NIST AI RMF mapping

| Function | How MBIS implements it |
|----------|------------------------|
| GOVERN   | Source documents and methodology are public and version-controlled |
| MAP      | Three levels of mapping: revenue→agency, agency→program, county→outcome |
| MEASURE  | Six KPI cards with threshold colors and stated baselines |
| MANAGE   | Guardrails page documents explicit refusals |

---

## 6. NXT pillar mapping

| Pillar | Concrete design choice |
|--------|------------------------|
| Purpose Driven | Every chart answers a real reader's question |
| Service Minded | Long-lived dashboard, citations link to source PDFs |
| Integrity with Intentionality | Modeled estimates flagged; structural problems surfaced |
| Backed by Data | Every figure traces to ACFR/JCR/DBM |
| Outcomes Oriented | Red/amber/green thresholds give 5-second readability |
| Industry Led | Built with Senate B&T staff and iSchool capstone team |

---

## 7. Reading-level commitment

Plain-language sections (KPI captions, ticker, insight cards, methodology intros) target a 3rd-grade reading level for accessibility. Technical citations target verifiers and are written at a higher reading level.

Both audiences are first-class users of the dashboard.

---

## 8. Versioning

The dashboard tracks the FY2027 Governor's Proposed Operating Budget. When subsequent fiscal year budgets are released, the dashboard will be updated to a new version with the prior year frozen as a snapshot.
