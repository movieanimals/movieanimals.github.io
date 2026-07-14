# Guide for Claude and AI Assistants

This document provides guidance for AI assistants working with the Toth Movie Animals website repository.

## Repository Overview

This is a website for "Toth Movie Animals," providing animal training services for film and TV productions. It is a **single-page static site** hosted on GitHub Pages at **movieanimals.net** (custom domain via `CNAME`).

### Key Files

```
├── index.html              # Main website (all CSS/JS embedded inline)
├── CNAME                   # Custom domain (movieanimals.net)
├── site.webmanifest        # PWA manifest
├── robots.txt              # Crawler rules
├── sitemap.xml             # Sitemap for search engines
├── .gitignore              # Git ignore rules
├── paw.png                 # Logo image (512x512, deep teal paw #035256)
├── snake-wrangling.jpeg    # Snake wrangling photo (hero + gallery)
├── snake-wrangling.webp    # WebP version served via <picture>
├── assets/
│   └── img/
│       ├── IMG_9602.JPG    # Premiere photo (gallery)
│       ├── IMG_9602.webp   # WebP version served via <picture>
│       └── favicons/       # Favicon files for all platforms
├── readme.md               # Project README
└── claude-readme.md        # This file
```

### Architecture

- **Single-file architecture**: All CSS and JavaScript are embedded inline in `index.html`
- **No build system**: No npm, webpack, or other tooling required
- **No external JS dependencies**: Vanilla JS only (scroll reveals, nav shadow, form submit)
- **Contact form**: Uses Formspree (`https://formspree.io/f/xjkybrew`) for submissions
- **No AI-generated media**: Real photography only (owner decision — do not add AI video/images)

### Key Sections in index.html

1. `<head>`: SEO metas, Open Graph/Twitter cards, JSON-LD LocalBusiness schema — preserve these
2. `<style>` block: full design system and responsive breakpoints (900px, 640px)
3. Body: sticky nav → hero (split) → trust line → services cards → "On Set" gallery → about → contact (info + form) → footer
4. Script 1: scroll reveals (IntersectionObserver; releases `.reveal`/`.visible` classes after animating so hover transforms work) + nav scrolled-shadow toggle
5. Script 2: contact form AJAX with loading/disabled submit state

### Design System (light, sleek, single accent)

CSS variables defined in `:root`:
- `--ink: #121A19` (near-black text)
- `--muted: #5A6462` (secondary text)
- `--page-bg: #FFFFFF` / `--section-bg: #F5F7F6` (alternating sections)
- `--teal: #035256` / `--teal-hover: #04686D` (the ONLY accent — sampled from the paw logo)
- `--hairline: rgba(18, 26, 25, 0.1)` (borders)
- `--shadow`, `--radius: 16px`

Font (Google Fonts): **Inter only** — 400/500/600/700, tight letter-spacing on headings.

Motion is deliberately restrained: one-time scroll reveals, hover lifts, nav shadow.
`prefers-reduced-motion` disables everything.

### Common Tasks

**To add a gallery photo**: place the image (ideally with a WebP twin) in `assets/img/`,
then copy this block inside `<div class="gallery">`:

```html
<figure class="reveal">
  <picture>
    <source srcset="assets/img/YOUR-PHOTO.webp" type="image/webp">
    <img src="assets/img/YOUR-PHOTO.jpg" alt="Describe the photo" width="W" height="H" loading="lazy" decoding="async">
  </picture>
  <figcaption>Short caption</figcaption>
</figure>
```

The grid auto-fits; photos are cropped to 4:3 via `aspect-ratio` + `object-fit: cover`.

**To modify styles**: Edit the `<style>` block in `index.html`.

**To modify form behavior**: Edit the contact form script at the bottom of `index.html`.

### Deployment

Merging to the default branch `(root)` triggers GitHub Pages ("pages build and deployment").
Deploys occasionally flake with `failure` and no failed jobs — verify the run concluded
`success`; if it flaked, a fresh merge commit retriggers it.
