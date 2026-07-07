# Guide for Claude and AI Assistants

This document provides guidance for AI assistants working with the Toth Movie Animals website repository.

## Repository Overview

This is a website for "Toth Movie Animals," providing animal training services for film and TV productions. It is a **single-page static site** hosted on GitHub Pages.

### Key Files

```
├── index.html              # Main website (all CSS/JS embedded inline)
├── site.webmanifest        # PWA manifest
├── robots.txt              # Crawler rules
├── sitemap.xml             # Sitemap for search engines
├── .gitignore              # Git ignore rules
├── paw.png                 # Logo image (512x512, optimized)
├── snake-wrangling.jpeg    # Snake wrangling photo (referenced in index.html)
├── snake-wrangling.webp    # WebP version served via <picture>
├── assets/
│   └── img/
│       ├── IMG_9602.JPG    # Additional photo (referenced in index.html)
│       ├── IMG_9602.webp   # WebP version served via <picture>
│       └── favicons/       # Favicon files for all platforms
├── readme.md               # Project README
└── claude-readme.md        # This file
```

### Architecture

- **Single-file architecture**: All CSS and JavaScript are embedded inline in `index.html`
- **No build system**: No npm, webpack, or other tooling required
- **No external JS dependencies**: Particle animation is custom vanilla JS
- **Contact form**: Uses Formspree (`https://formspree.io/f/xjkybrew`) for submissions

### Key Sections in index.html

1. `<style>` block (lines ~10-514): All CSS including responsive breakpoints
2. Particle animation script (lines ~520-564): Creates floating particle effect
3. Main content (lines ~566-636): Logo, about text, images, contact form, social links
4. Contact form script (lines ~639-679): Form submission via Formspree AJAX

### Design System

CSS variables defined in `:root` (light editorial theme):
- `--ink: #201D18` (near-black text)
- `--muted: #6B655B` (secondary text)
- `--page-bg: #FBF9F5` (warm off-white background)
- `--card-bg: #FFFFFF` (cards)
- `--olive: #5F6650` / `--olive-deep: #2F332A` (brand olive; deep version for primary buttons)
- `--brown: #8A6A4F` (warm brown)
- `--terracotta: #A65E3F` (accent — eyebrows, icons, links)
- `--hairline: rgba(32, 29, 24, 0.1)` (borders)

Fonts (Google Fonts): Fraunces (display serif — headings, brand) + Inter (body)

Layout: top nav bar with CTA, left-aligned hero with trust badges, services grid,
about/certified two-column, contact two-column (info + form), hairline footer.
Scroll-reveal animations via IntersectionObserver (`.reveal` elements), ambient
gradient glow blobs in the background (`.bg-glow`).

### Common Tasks

**To modify content**: Edit the HTML in `index.html` between `<div class="content">` tags.

**To modify styles**: Edit the `<style>` block in `index.html`.

**To modify form behavior**: Edit the contact form script at the bottom of `index.html`.

**To add images**: Place in `assets/img/` and reference from `index.html`.
