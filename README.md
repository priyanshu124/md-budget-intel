# MBIS — Maryland Budget Intelligence System

A public, source-cited dashboard for Maryland's FY2027 operating budget. Built for the iSchool capstone project in partnership with NXT and Senate Budget & Taxation Committee staff.

**Stack:** Next.js 16 · React 19 · TypeScript · Plotly.js · D3.js · Tailwind CSS

---

## What this is

MBIS turns Maryland's budget PDFs (ACFR, JCR, DBM) into 10 interactive visualizations, 1 county map, and 6 KPI cards. Every figure deep-links back to its source PDF at the exact page.

The design philosophy is **Input → Magic Box → Output**:

- **Input** — 7 published PDFs (audited & legislative)
- **Magic Box** — Python notebooks that parse and aggregate (no LLM in the data path)
- **Output** — This Next.js dashboard

See `/methodology` and `/guardrails` on the live site for the full explainer.

---

## Project structure

```
md-budget-site/
├── app/
│   ├── page.tsx              Home — KPIs, ticker, insight cards, carousel, map
│   ├── narrative/            Deep-Dive (full narrative pages)
│   ├── methodology/          Methodology — NXT pillars, NIST AI RMF, sources
│   ├── guardrails/           Guardrails — what MBIS will and won't do
│   ├── operating/            Operating budget tables
│   ├── layout.tsx            Root layout + footer
│   └── globals.css           Theme (CSS variables, animations, scrollbar)
├── components/
│   ├── Header.tsx            Sticky header with logo + nav
│   ├── KpiRow.tsx            6 KPI cards with IntersectionObserver entry
│   ├── Carousel.tsx          10-slide horizontal scrollable carousel
│   ├── BudgetMapEmbed.tsx    County map iframe wrapper
│   └── charts/               Per-slide chart components
└── public/
    ├── md-crest.svg          Maryland state crest logo
    ├── budget-map.html       County choropleth (D3 + Chart.js)
    ├── fiscal-journey.html   Fiscal Journey infographic (Plotly)
    └── data/                 CSV inputs for Sankey
```

---

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Node 20+ recommended.

---

## Data sources

| Document | Pages | Use |
|----------|-------|-----|
| ACFR 2025 | 17–22, 45, 165, 225, 231–233 | Reserve, Federal exposure, MDH spending, Blueprint baseline, Structural gap |
| ACFR 2024 | 18–19, 45–47 | Reserve trend, Federal trend |
| ACFR 2023 | 17–22 | Reserve baseline |
| JCR 2025 | 33, 60, 233, 265, xxxiii–xxxiv | JCR cuts, Commerce cut, Blueprint cut |
| FY2026 Budget Vol 2 | 486–487 | Deficiency appropriations schedule |
| FY2027 Budget Highlights | 6, 9–10, 17–24 | Operating budget total, fund allocations |

All citations are deep-linked from the dashboard.

---

## NXT alignment

MBIS is built around NXT's five DNA pillars: **Purpose Driven, Service Minded, Integrity with Intentionality, Backed by Data, Outcomes Oriented**, plus the operating pillar **Industry Led**. Each pillar maps to a concrete design choice — see `/methodology` for the full mapping.

---

## NIST AI RMF alignment

The dashboard is structured around the four NIST AI RMF functions (Govern, Map, Measure, Manage) even though the system is deterministic. The framework keeps the design honest about what is computed vs. cited vs. modeled.

---

## What MBIS won't do

See `/guardrails`. Short version:

- No invented agency-level data
- No projections beyond stated horizons
- No hypothetical political answers
- No hidden uncertainty
- No numbers stripped from context
- No personalization of political actors

---

## Handoff documentation

For the next intern / contributor, three companion docs in this repo:

- **METHODOLOGY.md** — how the data pipeline works, end to end
- **HOW_TO_USE.md** — user-facing guide for legislators, journalists, citizens
- **ARCHITECTURE.md** — file-by-file walkthrough of the codebase

All three are readable without the live site running.

---

## Contributors

iSchool capstone team · NXT · Senate Budget & Taxation Committee staff

For questions on continuing post-project, contact Nish.
