# MBIS Architecture

A file-by-file walkthrough of the codebase for the next contributor.

---

## Top-level layout

```
md-budget-site/
├── app/                  Next.js App Router pages
├── components/           React components (charts, header, KPI row, carousel)
├── public/               Static assets (logo, HTML iframes, CSV data)
├── README.md             Project overview
├── METHODOLOGY.md        Data pipeline explanation
├── HOW_TO_USE.md         User-facing guide
├── ARCHITECTURE.md       This file
├── package.json          Dependencies
└── next.config.ts        Next.js config
```

---

## App Router pages (`app/`)

Each route is a folder under `app/` with a `page.tsx`.

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home — KPI row, ticker, insight cards, carousel, map |
| `/narrative` | `app/narrative/page.tsx` | Deep-Dive narrative pages |
| `/methodology` | `app/methodology/page.tsx` | NXT pillars, NIST RMF, sources |
| `/guardrails` | `app/guardrails/page.tsx` | What MBIS will and won't do |
| `/operating` | `app/operating/page.tsx` | Operating budget tables |

`app/layout.tsx` wraps every page with the Header component and a footer.

`app/globals.css` defines:

- CSS variables (NXT brand colors, typography stacks, neutrals)
- Body background gradient (institutional cool-neutral palette)
- `.card`, `.mono-label`, `.source-cite` utility classes
- `@keyframes fadeUp`, `@keyframes tickerScroll` animations
- `.carousel-scroll` styled scrollbar

---

## Components (`components/`)

### `Header.tsx`
Sticky glassmorphism header. Contains:
- Maryland crest SVG logo
- Title block ("Maryland Budget Intelligence" + "MBIS · Fiscal Analysis System")
- 4-item nav (Home, Deep-Dive, Methodology, Guardrails)
- Right-side budget badge ($70.8B FY2027 Proposed)
- Maryland flag stripe (4-color bar)

### `KpiRow.tsx`
Six KPI cards in a 6-column grid. Each card:
- IntersectionObserver triggers staggered fade-in (0–400ms delays)
- Hover: translateY(-3px) + colored shadow
- Top border color = direction (red/amber/green/purple)

### `Carousel.tsx`
10-slide horizontal carousel:
- Native horizontal scroll with `scroll-snap-type: x mandatory`
- Mouse drag-to-scroll handlers
- Keyboard arrow navigation
- Top progress bar
- Top nav with dot indicators + counter + prev/next buttons
- Bottom tab strip for direct navigation
- One slide is `fullWidth` (Fiscal Journey iframe, 860px tall)

### `BudgetMapEmbed.tsx`
Wraps `public/budget-map.html` in an iframe. Provides a fullscreen toggle button that calls `requestFullscreen()` on the parent div.

### `charts/` folder
Per-slide chart components. All are dynamically imported with `ssr: false` to avoid SSR issues with browser-only chart libraries.

| Component | Library | Source notebook cell |
|-----------|---------|----------------------|
| `MarylandFiscalJourneyChart` | Plotly (iframe) | Cell 17 (ACFR_JCR_3.2) |
| `SankeyChart` | Plotly | Cell 13 |
| `JcrCommerceChart` | Plotly | Cell 5 |
| `DeficiencyChart` | Plotly | Cell 7 |
| `StructuralGapChart` | Plotly | Cell 9 |
| `BlueprintChart` | Plotly | Cell 11 |
| `FederalCutCalculator` | Plotly + state slider | Cell 15 |
| `ReserveChart` | Plotly | (older notebook revision) |
| `HealthSpendingChart` | Plotly | (older notebook revision) |
| `JcrCutsChart` | Plotly | (older notebook revision) |

---

## Static assets (`public/`)

| File | Type | Use |
|------|------|-----|
| `md-crest.svg` | SVG | Maryland state crest logo (Header) |
| `budget-map.html` | HTML | Standalone D3 + Chart.js county map |
| `fiscal-journey.html` | HTML | Standalone Plotly Fiscal Journey infographic |
| `data/sankey_revenue.csv` | CSV | Sankey input — revenue side |
| `data/sankey_agency.csv` | CSV | Sankey input — agency side |

The two HTML files are served as iframes from inside React components. This keeps the heavy Plotly/D3 code off the main React bundle.

---

## State management

No global state library. Local component state only:

- Carousel: `current` index, drag refs
- KpiRow: per-card IntersectionObserver
- BudgetMapEmbed: `isFullscreen` boolean
- FederalCutCalculator: slider value, mode (global/per-agency)

---

## Styling approach

- **Inline styles** for component-specific layout (most components)
- **CSS variables** in `globals.css` for theme tokens (brand colors, typography)
- **Tailwind CSS 4** is installed but used sparingly — primarily for utility resets
- **No CSS Modules** — kept the system simple

---

## Build & deploy

```bash
npm run build     # next build with Turbopack
npm run start     # production server
npm run dev       # dev server with Turbopack
```

The build is fully static (`output: prerendered as static content` for all pages). Deploy to any static host (Vercel, Netlify, S3+CloudFront).

---

## Common changes

### Adding a new KPI card
Edit `components/KpiRow.tsx` → `CARDS` array. Each card needs `label`, `value`, `change`, `changeDir`, `color`, `cite`, `delay`.

### Adding a new carousel slide
Edit `components/Carousel.tsx` → `SLIDES` array. Each slide needs `title`, `insight`, `source`, `viz` (a JSX chart), `accentColor`. Set `fullWidth: true` for full-width slides without the sidebar.

### Updating the budget number
Search for the previous number across the codebase (Header, KpiRow, page.tsx ticker, layout.tsx footer). Update each occurrence.

### Swapping the color palette
Edit CSS variables in `app/globals.css`. The `--nxt-*` family controls brand colors, `--text-*` controls typography. **Do not touch chart colors** — those are deterministic and tied to the source notebook.

### Adding a new page
Create `app/<route>/page.tsx`. It will be auto-routed and rendered with the root layout (Header + footer).

---

## Don't touch

- The chart components in `components/charts/` — these mirror the notebook output exactly. If a chart needs to change, update the notebook first, regenerate the HTML, then update the component.
- The `public/budget-map.html` and `public/fiscal-journey.html` files — these are the canonical visualization HTML files.
- Citations in `Carousel.tsx` `SLIDES` array — these come from the notebook `_hed()` source param and must match exactly.

---

## Known gotchas

- **The Fiscal Journey slide is 860px tall** (vs. ~440px for other slides). Carousel inner-flex aligns all slides to the tallest, so the carousel grows.
- **Plotly bundles are large.** All chart components are `dynamic({ ssr: false })` to keep the initial bundle small.
- **Iframe height for `fiscal-journey.html`** is fixed at 860px in `MarylandFiscalJourneyChart.tsx`. Changing the inner HTML's body padding will require updating this height.
- **`scroll-snap-type` on the carousel** can occasionally desync with the `current` index during fast drag. The `onMouseUp` handler explicitly calls `scrollTo(idx)` to resync.
