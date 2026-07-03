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

CSS variables defined in `:root` (light theme):
- `--primary-color: #5F6650` (deep olive — headings, buttons)
- `--secondary-color: #8A6A4F` (warm brown — highlights)
- `--accent-color: #A65E3F` (terracotta/sienna — links, accents)
- `--page-bg: #F7F3ED` (warm cream background)
- `--card-bg: #FFFFFF` (card background)
- `--text-color: #37332D` (dark body text)
- `--muted-text: #6E675D` (secondary text)
- `--light-text: #FFFFFF` (text on colored buttons)

Font: Montserrat (Google Fonts) - weights 400, 600, 700

### Common Tasks

**To modify content**: Edit the HTML in `index.html` between `<div class="content">` tags.

**To modify styles**: Edit the `<style>` block in `index.html`.

**To modify form behavior**: Edit the contact form script at the bottom of `index.html`.

**To add images**: Place in `assets/img/` and reference from `index.html`.
