---
sitemap: false 
---

7# Repository Analysis (Updated April 2, 2026)

This audit focused on indexing quality, table HTML validity, and discoverability issues that can affect Google performance (including Monday review visibility).

## What was fixed in recent patches

### 1) Metadata consistency and safer social/search snippets
- Updated `_layouts/default.html` so description tags fall back to post excerpts (not only generic site description).
- Added conditional keywords output, explicit robots directive, and dynamic `og:type` for post vs page.

**Why it matters:** clearer, page-specific metadata improves crawl interpretation and CTR potential.

### 2) Monday article parsing issue fixed
- Repaired malformed table header/body markup in both source and published Monday pages:
  - `_posts/2026-03-15-monday-review.md`
  - `monday-review-2026/index.html`

**Why it matters:** malformed table HTML can reduce parser confidence and content extraction quality for search systems.

### 3) Site-wide malformed table token cleanup
- Fixed malformed token patterns (e.g., `30<th`, `20<td`, `32<td`) across impacted review pages and matching static pages.
- Fixed remaining broken opening rows in Campaigner source posts.

**Why it matters:** table-heavy comparison content is a core ranking asset for these pages; structural validity helps readability for both users and crawlers.

### 4) Blog search UX improvements
- Search now shows preview results immediately (including one-letter searches) with direct article links.
- Added a bottom “Proceed to article” action for fastest path to top match.

**Why it matters:** better internal navigation can improve engagement and reduce orphan-like behavior for newer posts.

## Current known issues still worth addressing

1. Duplicate title intent still exists:
   - `contribute/index.html` and `write-for-us/index.html`
   - `sitemap.html` and `sitemap/index.html`

2. `sitemap.xml` still omits several crawlable utility/legal pages (`/privacy/`, `/terms/`, `/cookies/`, etc.).

3. `scripts/repo_audit.py` flags a “future post” by filename for `_posts/2026-06-15-quickbooks-review.md` even though frontmatter date differs.

## What to do going forward (priority order)

1. **Consolidate duplicate-intent URLs**
   - Pick one canonical “Write for Us” URL and one sitemap URL.
   - 301 redirect alternates and keep titles unique.

2. **Tighten sitemap strategy**
   - Include pages that should be indexed.
   - Keep non-index pages out of sitemap.

3. **Run monthly structural QA**
   - `python3 scripts/repo_audit.py`
   - `rg -n "\\b\\d+<t[dh]|</strong><td|<thead>\\s*<th" _posts *.html */index.html`

4. **For Monday article specifically**
   - Keep updating the comparison table quarterly with fresh pricing and feature deltas.
   - Add 2–3 internal links to Monday review from related project-management pages.
   - Re-submit URL in Search Console after meaningful update (not repeatedly without changes).

## Quick command checklist

```bash
python3 scripts/repo_audit.py
rg -n "\\b\\d+<t[dh]|</strong><td|<thead>\\s*<th" _posts *.html */index.html
```
