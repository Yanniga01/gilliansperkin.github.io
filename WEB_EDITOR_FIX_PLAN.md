# Quick Fix Plan (If You Can Only Use GitHub Web Editor)

If the full technical cleanup feels too complex, do this **minimum viable fix** directly in GitHub’s web editor.

## Goal
Remove Semrush "Poor heading hierarchy" warnings without touching advanced templates.

## 1) Edit only these pages first (highest impact)
- `index.html`
- `semrush-review/index.html`
- `quickbooks-review-2026/index.html`
- `jobber-review-2026/index.html`
- `monday-review-2026/index.html`
- `asana-vs-trello-vs-clickup-2026/index.html`
- `campaigner-for-ecommerce-stores/index.html`
- `campaigner-pricing-explained-2026/index.html`
- `best-smtp-servers-bulk-email-2026/index.html`

## 2) Apply these safe text replacements (Find/Replace)

### A) Author box heading fix
Replace:
```html
<h3>
  Reviewed by ...
</h3>
```
With:
```html
<p class="author-reviewed-by"><strong>Reviewed by ...</strong></p>
```

### B) Skip-level fix
If you see `<h4>` directly under an `<h2>` section, change that `<h4>` to `<h3>`.

If you see `<h5>` directly after `<h3>`, change that `<h5>` to `<h4>`.

## 3) Homepage-only fix
In `index.html`, add one heading before the blog cards:
```html
<h2>Featured Reviews</h2>
```
This prevents `H1 -> H3` jump on homepage cards.

## 4) Commit in small batches
Use 2-3 files per commit in web editor. Suggested order:
1. `index.html` + `semrush-review/index.html`
2. `quickbooks-review-2026/index.html` + `jobber-review-2026/index.html`
3. remaining pages

## 5) Re-run Semrush Site Audit
After publishing, wait for deploy and run crawl again.

---

## If you want the simplest path
Ignore all `_posts/*.md` for now and edit only the published `*/index.html` files listed above.
That is enough to remove most visible Semrush heading errors on the live site.
