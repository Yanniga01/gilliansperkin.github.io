---
sitemap: false
---

# SEO & Google Indexing Recovery Audit

Audit date: 2026-07-23
Site: `https://smartguidehubs.com`

## Executive summary

The highest-risk technical issue found was a set of legacy static `*/index.html` article files that reused the same final URLs as Jekyll posts. During a GitHub Pages/Jekyll build, those source pages compete for identical output paths with `_posts` that declare the same `permalink`. That can cause overwritten output, duplicate metadata, unstable canonical output, and inconsistent sitemap/indexing signals after restructuring.

The second highest-risk issue was that important collection hubs (`/blog/`, `/reviews/`, `/guides/`, `/comparisons/`, and `/categories/`) were excluded from the XML sitemap with `sitemap: false`. These pages are useful crawl and internal-discovery hubs and should be indexable canonical URLs.

The third issue was inconsistent template behavior: paginated archive pages were emitted as `noindex, follow`, and the canonical logic could preserve `index.html` if Jekyll exposed that in `page.url`. The default layout now emits one normalized, trailing-slash canonical URL and indexable robots directives for ordinary pages.

## Issues found and fixes applied

| Severity | Issue | Why it matters for Google | Files affected | Fix applied |
|---|---|---|---|---|
| Critical | Duplicate source pages mapped to the same canonical article URLs as Jekyll posts | Duplicate source files can produce unstable generated HTML and metadata for previously ranking URLs after a Jekyll restructure. Google may see changed titles, schemas, canonicals, or content at the same URL. | Legacy directories for Semrush, Jobber, QuickBooks, Monday, Campaigner, Adobe/PDFfiller, SMTP, analytics, and Asana comparison articles | Removed the duplicate static article directories and kept the `_posts` canonical versions. |
| High | Key hub pages excluded from sitemap | Hub pages help Google discover review, guide, comparison, and category clusters. Excluding them weakens crawl paths and makes the XML sitemap less representative of canonical site architecture. | `blog/index.html`, `reviews/index.html`, `guides/index.html`, `comparisons/index.html`, `categories/index.html` | Removed `sitemap: false` from indexable hub pages and added missing canonical metadata where needed. |
| High | Pagination was intentionally noindexed | Noindex on paginated archives can reduce discoverability of older articles linked primarily from deeper archive pages. | `_layouts/default.html` | Replaced conditional paginated `noindex` with a consistent `index, follow, max-image-preview:large` directive. |
| High | Canonical generation did not explicitly strip `index.html` | Canonical URLs should consolidate to clean, trailing-slash URLs rather than `/index.html` variants. | `_layouts/default.html` | Normalized `page.url` by removing `index.html` before applying `absolute_url`. |
| Medium | Header navigation mixed slash and non-slash internal URLs | Internal links should consistently point to the canonical trailing-slash URL form to avoid unnecessary redirects and signal splitting. | `_layouts/default.html` | Updated About, Editorial Team, and Contact header links to `/about/`, `/editorial-team/`, and `/contact/`. |
| Medium | RSS feed not present in source | Feed discovery is not a direct ranking factor, but it is a standard crawl/discovery signal and improves syndication. | `feed.xml`, `_layouts/default.html` | Added a canonical RSS feed and linked it from the global head. |
| Medium | Several posts had `permalink` but no explicit `canonical_url` metadata | Explicit metadata makes page intent auditable and reduces future migration mistakes. | Older `_posts` entries and top-level hub pages | Added matching `canonical_url` values for every audited canonical permalink page that was missing one. |
| Low | Legacy redirect-style pages use meta refresh rather than HTTP 301 | GitHub Pages cannot define arbitrary server-side 301 redirects without additional infrastructure. Meta refresh is weaker than HTTP redirects, but keeping those legacy files noindexed avoids adding duplicate indexable pages. | `article-pdffiller/index.html`, `contribute/index.html`, `sitemap.html`, `sitemap/index.html` | Left in place because they are legacy bridge/noindex pages. Recommended future fix: move redirects to Cloudflare, Netlify, or another edge layer that supports real 301s. |
| Low | `/media-kit-print.html` remains a deliberate non-canonical utility URL | This is an intentional print view linked from `/media-kit/`, not an SEO landing page. | `media-kit.md`, `media-kit-print.html` | Left unchanged and excluded from sitemap. |

## Repository comparison: likely traffic-drop causes

Recent repository history shows multiple SEO-focused revert/analysis commits and a later migration to Jekyll/permalink-based article URLs. The audit found that the current repository contained both Jekyll posts and old static `index.html` article directories for the same URLs. That is the clearest technical explanation for a sudden impressions collapse after restructuring: generated output for important ranking URLs could change depending on build ordering or conflicts.

The migration also left key hub pages out of the sitemap, while the global layout noindexed paginated archive pages. Together, these changes could reduce crawl discovery for older articles and make Google rely on weaker internal pathways after URL/content structure changes.

No evidence was found of broad robots.txt blocking, accidental sitewide `noindex`, HTTPS/canonical domain mismatch, or a 404 pattern in source.

## Post-fix expected URL policy

Canonical indexable pages should resolve and self-canonicalize as:

- `https://smartguidehubs.com/`
- `https://smartguidehubs.com/article-name/`
- `https://smartguidehubs.com/reviews/`
- `https://smartguidehubs.com/guides/`
- `https://smartguidehubs.com/comparisons/`
- `https://smartguidehubs.com/categories/`
- `https://smartguidehubs.com/blog/`

Avoid linking internally to:

- `/article-name.html`
- `/article-name/index.html`
- `/page` when `/page/` is the canonical URL

## Items verified

- Global canonical tag exists in the default layout.
- Global robots meta exists and is indexable for normal pages.
- Homepage canonical resolves to `https://smartguidehubs.com/` through permalink `/`.
- Internal header navigation now uses trailing slash canonical URLs.
- Duplicate source files for article URLs were removed.
- Hub pages are sitemap-eligible and have unique titles/descriptions.
- Robots.txt allows crawling and points to `https://smartguidehubs.com/sitemap.xml`.
- Structured data in the global layout emits `BlogPosting` for posts and `WebPage` for other pages.
- Organization schema remains present in the footer.
- RSS feed is available at `/feed.xml` and linked in the head.

## Remaining recommendations outside this repository

1. In Google Search Console, inspect a sample of previously ranking URLs and request recrawl after deployment.
2. If using Cloudflare or another DNS/edge provider, add real 301 redirects for legacy URLs such as `/article-pdffiller/`, `/contribute/`, `/sitemap.html`, and `/index.html` to their canonical destinations.
3. After GitHub Pages deploys, crawl the live site and confirm no `*.html` article URLs appear in live internal links or sitemap output.
4. Monitor Search Console for canonical selection changes and impressions over the next 2–6 weeks.
