# Repository Analysis (March 28, 2026)

This audit focused on potential indexing, duplication, and crawl-quality issues across the site.

## What was checked

- Duplicate `<title>` usage across HTML pages.
- Case-sensitive asset path mismatches (important on Linux hosts).
- Coverage gaps between live pages and `sitemap.xml`.
- Future-dated post filenames in `_posts/` that can delay publishing.

## Findings

### 1) Duplicate indexable pages and title overlap

- `sitemap.html` and `sitemap/index.html` both exist and share the same page intent/title.
- `contribute/index.html` and `write-for-us/index.html` currently share the same title text.

**Impact:** This can dilute signals and cause search engines to split ranking signals across near-duplicate URLs.

**Action taken in this patch:**  
- Kept `sitemap.html` as non-indexable and aligned its canonical + OG URL to the preferred `/sitemap/` URL.

### 2) Case-sensitive asset path issue

- `jobber-review-2026/index.html` referenced `/assets/logos/servicetitan.png`, but the real file is `/assets/logos/ServiceTitan.png`.

**Impact:** On case-sensitive production file systems, this can produce broken images and lower quality signals on important pages.

**Action taken in this patch:**  
- Updated the image path casing to match the actual file.

### 3) `sitemap.xml` does not include all crawlable pages

The following pages exist but are currently missing from `sitemap.xml`:

- `/terms/`
- `/contribute/`
- `/cookies/`
- `/privacy/`
- `/media-kit/`
- `/conditions/`
- `/sitemap/`
- `/disclosure/`
- `/write-for-us/`

**Impact:** Not fatal (search engines can still discover via links), but slower discovery/re-crawl and weaker crawl guidance.

### 4) One future-dated post filename

- `_posts/2026-06-15-quickbooks-review.md` is dated in the future relative to this audit date (March 28, 2026).

**Impact:** Jekyll generally skips future posts by default unless `future: true` is enabled during build.

## Recommended next steps

1. Add missing URLs to `sitemap.xml` (especially legal pages and submission pages).
2. Choose one “Write for Us” URL as primary and:
   - 301 redirect the alternate, or
   - keep both but use distinct intents/titles and strong cross-canonical strategy.
3. Consider removing legacy `sitemap.html` or auto-redirecting it to `/sitemap/`.
4. Decide whether the June 15, 2026 post should stay unpublished until that date or be backdated for immediate visibility.

## Tooling added

- `scripts/repo_audit.py` was added to make repeat audits easy:
  - Duplicate titles
  - Case-sensitive path problems
  - Sitemap coverage gaps
  - Future-dated posts

Run with:

```bash
python scripts/repo_audit.py
```
