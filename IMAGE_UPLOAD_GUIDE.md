# Image Upload & Optimization Guide

This project uses `jekyll-responsive-magick` to generate responsive variants for post images.

## Why this helps
- Smaller files load faster and improve Core Web Vitals.
- `srcset` lets the browser choose the right size for each screen.
- Explicit width/height reduces layout shift (CLS).
- WebP output usually cuts image size significantly compared to JPG/PNG.

## Before you upload an image
1. **Use the right aspect ratio:** Prefer **1200 × 630** for blog cards.
2. **Keep source files clean:** Avoid screenshots with unnecessary whitespace.
3. **Compress before commit:** Export at reasonable quality (around 75–85).
4. **Use descriptive names:** Example: `campaigner-pricing-card.jpg`.

## Upload checklist (required)
1. Place the file in `Images/`.
2. Reference it in post front matter with exact case, e.g.:
   ```yaml
   image: /Images/campaigner-pricing-card.jpg
   ```
3. Keep path casing consistent (`/Images/...`, not `/images/...`).
4. Ensure the image is at least 1200px wide for quality responsive downsizing.

## Local build checklist
1. Install ImageMagick.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve`.
4. Open the blog page and confirm images render.
5. In browser devtools, inspect a card image and verify:
   - `srcset` exists
   - `sizes` exists
   - `loading` is `lazy` for non-first cards

## Optional quality tips
- Prefer photos/gradients in JPG or WebP.
- Prefer logos/icons in SVG or optimized PNG.
- Avoid very large originals (e.g., 4000px wide) unless needed.
