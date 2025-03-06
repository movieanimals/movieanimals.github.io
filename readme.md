# Toth Movie Animals Website

This repository contains the website for Toth Movie Animals, a premier animal training service for film and TV productions. The site showcases the company's services, portfolio, and contact information with a cinematic design aesthetic.

## Repository Structure

- `index.html` - Main website content
- `site.webmanifest` - Web app manifest for mobile/PWA support
- `assets/` - Contains all static resources
  - `css/` - Stylesheets
    - `main.css` - Primary styles
    - `animations.css` - Animation-specific styles
  - `js/` - JavaScript files
    - `main.js` - Core functionality
    - `preloader.js` - Loading animation
    - `cursor.js` - Custom cursor implementation
    - `animations.js` - Visual effects and animations
    - `forms.js` - Form validation and submission
  - `images/` - Image assets
- `docs/` - Documentation
  - `components.md` - Component documentation
  - `code-patterns.md` - Common patterns used
  - `optimization-notes.md` - Performance considerations
  - `future-work.md` - Planned improvements

## Features

- Cinematic design with film industry aesthetic
- Custom animated preloader with progress indicator
- Custom cursor and spotlight effects
- Responsive layout for all device sizes
- Particle.js background integration
- Animated section reveals on scroll
- Contact form with validation
- Portfolio/Credits showcase with tabs

## Development Notes

The website uses vanilla HTML, CSS, and JavaScript with the following external dependencies:
- particles.js - For background particle effects
- GSAP - For advanced animations
- Three.js - For 3D effects
- Howler.js - For sound effects

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser to view the site
3. Edit files as needed

## Performance Considerations

- Minimize HTTP requests by combining CSS and JS files where appropriate
- Optimize images for web to reduce load times
- Use a CDN for external libraries
- Implement lazy loading for images

## Browser Compatibility

The site is designed to work with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved. This code is proprietary to Toth Movie Animals.
