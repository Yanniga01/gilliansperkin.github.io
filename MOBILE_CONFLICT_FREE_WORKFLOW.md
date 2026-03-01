# Mobile-Friendly, Low-Conflict Publishing Workflow

This workflow is designed to help you publish from mobile with fewer merge conflicts.

## Why conflicts happened
Most previous conflicts came from editing the same high-churn files in parallel (especially `index.html`, `blog/index.html`, and `sitemap.xml`).

## Golden rule
For each new article PR, keep edits to **only these files**:

1. `/<article-slug>/index.html` (new canonical article)
2. `/<article-slug>.html` (legacy redirect stub)
3. `sitemap.xml` (one new `<url>` block)
4. `categories/<relevant-category>/index.html` (add one list item only)

Avoid editing homepage sections and large shared blocks in the same PR unless absolutely needed.

## Mobile-safe branch flow
1. Sync branch with latest `main` before any edit.
2. Create one branch per article (`article/<slug>`).
3. Make minimal edits only (the 4-file rule above).
4. Open PR immediately.
5. If conflict appears:
   - Rebase/merge `main` into your branch.
   - Resolve only list-item or URL block differences.
   - Do **not** reformat large files.

## Suggested PR split (important)
To reduce conflict risk further, split into two PRs:

- **PR A (Structure):** article page + redirect + sitemap
- **PR B (Promotion):** extra internal links from homepage/blog widgets

This keeps urgent indexing unblocked even if promotional links conflict.

## Category mapping rule
Use topical relevance to avoid SEO confusion:

- `PDF Tools`: PDF editors, e-sign, form/document workflows
- `Email Marketing`: newsletter/automation/email campaign tools
- `Project Management`: PM/collaboration/task platforms
- `Finance`: accounting, invoicing, bookkeeping, payments

If unsure, keep article in the closest single category first; expand later.

## 5-point pre-merge checklist
- [ ] Canonical URL is `https://smartguidehubs.com/<article-slug>`
- [ ] Redirect stub sends `/<article-slug>.html` -> `/<article-slug>/`
- [ ] Category page has exactly one new list link
- [ ] `sitemap.xml` includes the canonical URL once
- [ ] Local quick check opens article + category without 404
