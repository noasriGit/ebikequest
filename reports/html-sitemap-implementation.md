# HTML Sitemap Implementation Report

## 1. Preflight findings

| Item | Finding |
|------|---------|
| Framework | Next.js 15.5.19 (App Router), React 19, Turbopack |
| Routing | App Router under `app/` with `(site)` route group |
| XML sitemap | Previously `app/sitemap.ts` → `/sitemap.xml`; conflicted with HTML `/sitemap` route |
| HTML sitemap | Did not exist before this work |
| Content source | File-based TypeScript content modules in `content/`, accessed via `lib/content/` |
| CMS | None (ISR webhook stub only) |
| Trailing slashes | Default Next.js (no trailing slash) |
| Indexability | `status === "published" && !seo?.noIndex` in content accessors |
| Canonical | `buildPageMetadata()` / `buildCanonical()` — no trailing slash |
| robots.txt | Allows `/`, disallows `/api/`, references `/sitemap.xml` |
| Tests | No unit test runner; validation via `scripts/validate-*.ts` |

### How indexable pages are defined

Published content filtered by `lib/content/trails.ts`, `guides.ts`, and `laws.ts` using `status === "published" && !seo?.noIndex`. Static pages are explicit route files under `app/(site)/`. Dynamic routes use `generateStaticParams()` with `dynamicParams = false`.

### Proposed architecture (implemented)

- Shared builder at `lib/sitemap/` aggregates all indexable URLs from content accessors and a small static-page config.
- Main HTML sitemap at `/sitemap` with topical sections (no pagination).
- XML sitemap at `/sitemap.xml` via route handler, using the same entry builder.
- Validation script ensures integrity and detects draft/noindex leakage.

## 2. Existing content sources used

| Source | Purpose |
|--------|---------|
| `lib/content/trails.ts` → `getTrails()` | 22 trail detail pages |
| `lib/content/guides.ts` → `getGuides()` | 23 guide articles |
| `lib/content/laws.ts` → `getPublishedLaws()` | 3 jurisdiction law pages |
| `lib/content/hubs.ts` → `getAllHubs()` | Trails, guides, laws, and jurisdiction trail hub pages |
| `lib/content/jurisdictions.ts` → `getPublicJurisdictions()` | Public jurisdiction filtering |
| `lib/sitemap/static-pages.ts` | Static trust, legal, and utility pages |
| `config/site.ts` | Site name, description, URL |
| `content/static/marketing.ts` | About and suggest-trail titles/descriptions |

## 3. Sitemap architecture implemented

```
/sitemap                          Main HTML sitemap (SSG)
/sitemap.xml                      XML sitemap (route handler, shared data)
```

No category subpages or pagination — total indexable count (~64) is well below the 50–100 pagination threshold.

### Sections on `/sitemap`

1. **Start here** — home, main hubs (trails, guides, laws), editorial standards
2. **Recently published** — 15 newest trails/guides by `publishedAt`
3. **Trails** — grouped by jurisdiction (VA, MD, DC) with hub + trail listings
4. **Guides** — grouped by guide category (6 categories)
5. **E-bike laws** — jurisdiction law pages with hub link
6. **About & policies** — about, suggest-trail, image credits, accessibility, affiliate disclosure, privacy, terms

## 4. Included content types

| Type | Count |
|------|-------|
| Home | 1 |
| Hub pages | 6 |
| Trail detail | 22 |
| Guide articles | 23 |
| Law pages | 3 |
| Static (trust/legal/utility) | 9 |
| **Total indexable** | **64** |

## 5. Exclusion rules

Excluded from the HTML and XML sitemaps:

- API routes (`/api/*`)
- Error/404 page
- Draft content (`status !== "published"`)
- `noindex` content (`seo.noIndex === true`)
- Non-public jurisdictions (48 of 51 — no routes generated)
- Redirect sources (`/privacy-policy`, `/trails/va`, `/trails/md`, `/trails/dc`, `/laws/va`, etc.)
- Coming-soon platform categories (shops, rentals, repairs, events, reviews, news)
- Search-result and query-string URLs
- The HTML sitemap page itself is included in XML but omitted from topical sections (utility only)

## 6. Category and pagination decisions

- **Categories:** Mirrors site IA — jurisdiction for trails, `GuideCategory` for guides, nav groupings for static pages.
- **Pagination:** Not implemented. Largest subsection is 23 guides in one category; all fit on one page.
- **Category subpages:** Not created (`/sitemap/category-slug/` not needed).

## 7. Recently published logic

- Source: `publishedAt` on trails and guides (authoritative content dates).
- Sort: descending by `publishedAt`.
- Limit: 15 entries.
- Display: formatted date shown in the recent section only.

## 8. Featured-content logic

Featured flag on:

- Home (`/`)
- Main hubs: `/trails`, `/guides`, `/laws`
- `/editorial-standards` (structural cornerstone per site navigation)

No popularity or analytics labels used.

## 9. A–Z logic

Omitted. Site has 64 indexable pages with clear topical groupings; an alphabetical index would add little discovery value.

## 10. Search implementation

Omitted. Entry count is small; all links are server-rendered in topical sections with jump links. Site-wide search remains in the header via `lib/search/`.

## 11. SEO and structured-data implementation

- Unique title and meta description via `buildPageMetadata({ path: "/sitemap" })`
- Self-referencing canonical: `https://www.ebikequest.com/sitemap`
- JSON-LD: `CollectionPage`, `BreadcrumbList`, `ItemList`
- Semantic HTML: one H1, H2 per section, H3 per subsection, `<nav>` jump links, crawlable `<a>` elements
- Breadcrumbs in `PageHero`
- XML sitemap moved to `app/sitemap.xml/route.ts` to avoid route conflict with `/sitemap` HTML page
- `/sitemap` added to XML sitemap at priority 0.5
- Footer explore nav updated with Sitemap link

## 12. Accessibility and responsive results

- Jump-to-section nav with anchor links (`scroll-mt-24` on sections)
- Visible focus states on links
- Keyboard-accessible navigation (native anchors, no JS-only disclosure)
- Responsive single-column layout; no tiny multi-column mobile grids
- Uses existing design tokens, `PageHero`, `Container`, and `link-editorial` styles
- Dark mode compatible via existing CSS variables

## 13. Performance considerations

- Fully static generation (○ `/sitemap` in build output)
- Server components only — no client JavaScript on the sitemap page
- Compact data structures; descriptions reused from content, not full article bodies
- XML sitemap cached with `s-maxage=3600, stale-while-revalidate=86400`
- Single shared builder — no duplicate maintenance between HTML and XML

## 14. Validation results

| Check | Result |
|-------|--------|
| `npm run validate:sitemap` | Passed (64 entries, 6 sections) |
| `npm run validate:content` | Passed |
| `npm run validate:seo` | Passed |
| `npm run lint` | Passed (pre-existing warnings only) |
| `npm run build` | Passed (71 routes generated) |

Validation checks: duplicate URLs/IDs, missing titles, invalid paths, trailing slashes, draft/noindex leakage, empty sections, section/path consistency.

## 15. Exact files changed

| File | Change |
|------|--------|
| `lib/sitemap/types.ts` | New — typed sitemap records |
| `lib/sitemap/static-pages.ts` | New — static page config |
| `lib/sitemap/build.ts` | New — entry builder from content sources |
| `lib/sitemap/sections.ts` | New — section grouping for UI |
| `lib/sitemap/xml.ts` | New — XML sitemap generation |
| `lib/sitemap/index.ts` | New — public exports |
| `components/sitemap/SitemapEntryList.tsx` | New — entry list component |
| `components/sitemap/SitemapSection.tsx` | New — section component |
| `app/(site)/sitemap/page.tsx` | New — HTML sitemap page |
| `app/sitemap.xml/route.ts` | New — XML sitemap route handler |
| `app/sitemap.ts` | Deleted — conflicted with `/sitemap` HTML route |
| `scripts/validate-sitemap.ts` | New — automated sitemap validation |
| `config/navigation.ts` | Added footer Sitemap link |
| `package.json` | Added `validate:sitemap` script |
| `vercel.json` | Added sitemap validation to build pipeline |
| `reports/html-sitemap-implementation.md` | This report |

## 16. Known limitations

- XML sitemap `lastModified` uses content `updatedAt`/`publishedAt` where available; static pages without dates fall back to build time in the route handler.
- Redirect destination validation (HTTP 200, no redirect chains) is not performed in CI — would require a running server or production URL fetch.
- Jurisdiction law hub (`/laws`) appears in “Start here” but not duplicated in the laws section entries (hub link provided via section header).
- Coming-soon platform categories are not listed (no routes exist).
- No unit tests — project has no test runner; validation is script-based.
