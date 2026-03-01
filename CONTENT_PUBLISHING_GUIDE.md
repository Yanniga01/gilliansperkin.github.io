# SmartGuideHubs Article Publishing Guide (Conflict-Safe)

Use this guide when adding a new article so you don’t break structure or indexing.

## 1) File structure (always)
- Create article at: `/<slug>/index.html`
- Keep slug lowercase and hyphenated (example: `/best-invoicing-software-2026/`).
- Do **not** remove old `.html` redirect files.

## 2) Required updates for each new article
1. Create the article page file.
2. Add the new article card/link to `/blog` (`blog/index.html`).
3. Add internal links from one related article and one related category page.
4. Add the new URL to `sitemap.xml` with realistic `<lastmod>`.

## 3) On-page SEO checklist
- `<title>` includes primary keyword and year.
- `<meta name="description">` answers user intent in 140-160 chars.
- `<meta name="keywords">` includes primary + 4-6 related phrases.
- `<link rel="canonical">` points to extensionless URL.
- Add Open Graph + Twitter meta.
- Add JSON-LD `Article` schema.
- Include FAQ section and Related Articles section.

## 4) Internal linking checklist
Inside every new post, add links to:
- `/blog`
- one category page (`/categories/finance`, `/categories/pdf-tools`, `/categories/project-management`)
- two closely related articles
- one comparison page (`...-vs-...`) when relevant

## 5) Safe publishing order
1. Add article file
2. Add article to blog page
3. Add article to category page
4. Add URL in sitemap
5. Request indexing in GSC for canonical URL only (not `.html` redirect URL)
