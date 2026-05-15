# Maryland Budget Intel Tool

A public, source-cited dashboard for Maryland's FY2027 operating budget. Every figure deep-links to its source PDF at the exact page — there is no LLM in the data path, and no agency-level number that does not trace back to a published audited document.

**Live:** https://md-budget-site.netlify.app

Built for the iSchool capstone in partnership with NXT and Senate Budget & Taxation Committee staff.

---

## What's on the site

| Page | Route | What it shows |
|---|---|---|
| Home | `/` | Hero, ticker, 6 KPI cards, 10-slide carousel, county map |
| Methodology | `/methodology` | NXT pillar mapping, NIST AI RMF alignment, source documents |
| Guardrails | `/guardrails` | What MBIT will and won't do, with rationale |
| Deep-Dive | `/deep-dive/*` | Multi-page TBM analysis (Budget Office, Technology, Variance, Anomaly Detection, IT Projects) — see **Deep-Dive sub-app** below |

The carousel covers ten stories from the FY2027 budget: Fiscal Journey · Revenue→Agency Sankey · Commerce cut · DDA shortfall driver · Spending vs revenue growth · Blueprint compliance gap · Federal cut calculator · Reserve & Rainy Day trends · Health spending growth · Legislative response.

---

## Stack

- **Framework** — Next.js 16 (App Router, Turbopack) + React 19 + TypeScript
- **Charts** — Plotly.js (`react-plotly.js`), all dynamically imported with `ssr: false`
- **Maps** — Standalone D3 HTML files (`public/budget-map.html`) loaded via iframe
- **Deep-Dive** — Evidence (SvelteKit) prebuilt into `public/deep-dive/`, served via Next.js rewrites
- **Styling** — Inline styles + CSS variables in `app/globals.css`. Tailwind 4 is installed but used sparingly
- **Deploy** — Fully static. Netlify auto-deploys on push to `master`

No backend, no database, no server runtime. Every page prerenders at build time.

---

## Quick start

```bash
# Node 20+
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
npm run start      # serve the build
npm run lint
```

To work on the Deep-Dive sub-app, see the next section.

---

## Repo layout

```
md-budget-site/
├── app/                      Next.js App Router pages
│   ├── page.tsx              Home — hero, ticker, KPIs, carousel, map
│   ├── methodology/page.tsx  Methodology — NXT pillars, NIST RMF, sources
│   ├── guardrails/page.tsx   Guardrails — what MBIT will/won't do
│   ├── layout.tsx            Header + footer wrapper
│   └── globals.css           CSS variables, animations, scrollbar
├── components/
│   ├── Header.tsx            Sticky header, nav, MD flag stripe
│   ├── KpiRow.tsx            6 KPI cards w/ IntersectionObserver entry
│   ├── Carousel.tsx          10-slide horizontal carousel
│   ├── BudgetMapEmbed.tsx    County map iframe + fullscreen toggle
│   ├── ScrollReveal.tsx      Scroll-triggered fade-up wrapper
│   └── charts/               One file per Plotly chart (10 charts + ChartFrame)
├── dashboard/                Evidence (SvelteKit) source for the Deep-Dive
├── public/
│   ├── budget-map.html       Standalone D3 county map (iframed by BudgetMapEmbed)
│   ├── fiscal-journey.html   Standalone Plotly Fiscal Journey (iframed by chart)
│   ├── sankey_revenue.csv    Sankey input — revenue side
│   ├── sankey_agency.csv     Sankey input — agency side
│   ├── logo.png              Maryland state crest (Header)
│   └── deep-dive/            Prebuilt Evidence output (do not edit by hand)
├── next.config.ts            Rewrites /deep-dive/* → /deep-dive/*/index.html
├── AGENTS.md / CLAUDE.md     Instructions for Claude Code sessions
└── README.md                 This file
```

---

## Data sources

Every figure on the site traces to one of these published documents:

| Document | Year | Pages used | What it anchors |
|---|---|---|---|
| ACFR (Annual Comprehensive Financial Report) | 2023 | 17–22 | Reserve baseline |
| ACFR | 2024 | 18–19, 45–47 | Reserve trend, federal grants |
| ACFR | 2025 | 17–22, 45, 165, 225, 231–233 | Reserve, federal exposure, MDH spending, Blueprint baseline, structural gap |
| JCR (Joint Chairmen's Report) | 2025 | 33, 60, 233, 265, xxxiii–xxxiv | Agency cuts, Commerce cut, Blueprint cut |
| FY2026 Budget Volume 2 | 2025 | 486–487 | Deficiency appropriations schedule |
| FY2027 Budget Highlights | 2026 | 6, 9–10, 17–24 | Operating budget total, fund allocations |
| DBM Sankey workbook | 2026 | (internal) | Revenue → fund type → agency mapping |

No third-party aggregators, lobbying analyses, or news reporting feed the data pipeline. News is referenced for narrative context only and is never a numerical source.

The full source list with deep links is on the live `/methodology` page.

---

## Deep-Dive sub-app

The `/deep-dive/*` routes are an [Evidence](https://docs.evidence.dev/) (SvelteKit) project that lives in `dashboard/` and is **prebuilt** into `public/deep-dive/`. The main Next.js app serves the prebuilt HTML via rewrites in `next.config.ts`.

### Data flow

The Evidence project reads from a DuckDB warehouse (`../../../dbt-sql/mbtsa_work.duckdb`) generated by a separate dbt project. The schema lives in `dashboard/sources/mbtsa/*.sql`. Built parquet files end up under `public/deep-dive/data/mbtsa/*/`.

### Working on the Deep-Dive locally

```bash
npm run dashboard:install    # one-time, installs Evidence deps
npm run dashboard:dev        # → http://localhost:3000/deep-dive
```

### Rebuilding the bundled output

When you change anything in `dashboard/`, you must rebuild and commit the generated files for the live site to pick them up:

```bash
npm run dashboard:build
git add public/deep-dive dashboard
git commit -m "deep-dive: <what changed>"
```

The header in `dashboard/pages/+layout.svelte` and the styling in `dashboard/static/custom.css` are intentionally aligned with the main site's Header — match the existing tokens (`--nxt-deep`, `--nxt-pink`, etc.) when adding new chrome.

---

## NXT alignment

The tool is built around NXT's DNA pillars: **Purpose Driven, Service Minded, Integrity with Intentionality, Backed by Data, Outcomes Oriented**. Each maps to a concrete design choice — citations on every chart, threshold colors for 5-second readability, flagged projections, no agency-level fabrications. The full mapping is on `/methodology`.

## NIST AI RMF alignment

The dashboard is organized around the four NIST AI RMF functions (Govern, Map, Measure, Manage) even though the system is deterministic and contains no generative AI. The framework keeps the design honest about what is computed, cited, or modeled. See `/methodology` for the per-function mapping.

## Guardrails (short version)

What MBIT **will not** do:
- Invent agency-level data
- Project beyond stated horizons (FY2030)
- Answer hypothetical political questions
- Hide uncertainty
- Strip numbers from context
- Personalize political actors

Full rationale on `/guardrails`.

---

## Updating to a new fiscal year

When the FY2028 budget drops, the main edits live in:

1. **`components/KpiRow.tsx`** — `CARDS` array (six KPIs, the headline number, threshold colors)
2. **`components/Carousel.tsx`** — `SLIDES` array (insights, citations, chart components)
3. **`app/page.tsx`** — `TICKER` (10 rotating headlines) and the hero block
4. **`app/layout.tsx`** — footer year/budget badge
5. **`components/Header.tsx`** — the `FY2027` chip on the right
6. **`public/sankey_revenue.csv` / `public/sankey_agency.csv`** — Sankey inputs
7. **`public/fiscal-journey.html`** — regenerated separately (Plotly export from the source notebook)
8. **Deep-Dive** — regenerate the upstream DuckDB warehouse, then `npm run dashboard:build`

Search the codebase for the previous budget number (e.g. `70.8` and `70.94`) to make sure no occurrence is missed.

---

## Conventions

- **Inline styles** for component layout. CSS variables in `app/globals.css` for theme tokens.
- **Chart colors are deterministic.** The `--nxt-*` color tokens drive brand chrome; charts use a fixed palette aligned with the source notebooks. Don't recolor a chart casually — it changes meaning.
- **Iframe sizing is fragile.** The Fiscal Journey iframe is fixed at 860px in `MarylandFiscalJourneyChart.tsx`; the carousel sizes to the tallest slide. Changing the inner HTML's padding will require updating the host height.
- **Citations are load-bearing.** Every carousel slide has a `source` field that must match the chart's footer citation exactly. They're the audit trail.

---

## Working with Claude Code

This repo is wired for [Claude Code on the Web](https://code.claude.com/docs/en/claude-code-on-the-web). Session conventions:

- `CLAUDE.md` includes `AGENTS.md` — both are read automatically by Claude at session start.
- `AGENTS.md` warns the agent that Next.js 16 has breaking changes vs. its training data and points it to `node_modules/next/dist/docs/`.
- Feature work happens on `claude/<task>-<id>` branches; the agent never pushes to `master` directly.

---

## Deploy

Production is on Netlify, auto-deploying from `master`. The build is fully static (no SSR, no API routes); any static host works (Vercel, S3+CloudFront, GitHub Pages with rewrites).

The Deep-Dive's prebuilt output is committed to the repo, so the production build does not need to install Evidence's dependencies.

---

## Credits

iSchool capstone team — Aarushi Singh, Nadvi Haque, Priyanshu Gupta, James Van Doorn — in partnership with NXT and Senate Budget & Taxation Committee staff.
