# Website Components

This document describes the main components of the Toth Movie Animals website and how they interact with each other.

## Core Components

### Preloader

The preloader displays a loading animation and progress bar during the initial page load, providing visual feedback to users while assets are being loaded.

**Files:**
- `assets/js/preloader.js`
- Relevant CSS in `assets/css/animations.css`

**Usage:**
```javascript
// Initialize preloader
initPreloader();

// To manually update preloader progress
window.updatePreloaderProgress(75); // 75% complete

// To manually hide preloader
window.hidePreloader();
```

**HTML Structure:**
```html
<div id="preloader">
  <div id="clapperboard">
    <div class="clapperboard-top"></div>
    <div class="clapperboard-bottom">
      <span>TOTH MOVIE ANIMALS</span>
      <span>TAKE 1</span>
      <span>ACTION!</span>
    </div>
  </div>
  <div id="preloader-text">NOW LOADING</div>
  <div id="preloader-progress">
    <div id="preloader-progress-bar"></div>
  </div>
</div>
```

### Custom Cursor

Creates an interactive custom cursor with a trailing effect that changes appearance when hovering over interactive elements.

**Files:**
- `assets/js/cursor.js`
- Relevant CSS in `assets/css/animations.css`

**Usage:**
```javascript
// Initialize custom cursor
initCursor();
```

**HTML Structure:**
```html
<div id="cursor"></div>
<div id="cursor-trail"></div>
```

**Notes:**
- Automatically disables itself on mobile devices (screen width <= 768px)
- Changes appearance when hovering over clickable elements
- Creates a "press" effect when clicking

### Spotlight Effect

Creates a spotlight effect that follows the cursor when hovering over the header.

**Files:**
- Managed by `assets/js/cursor.js`
- Styled in `assets/css/animations.css`

**HTML Structure:**
```html
<div class="spotlight" id="spotlight"></div>
```

**Notes:**
- Only activates when cursor is over the header section
- Integrated with the custom cursor component

### Section Reveal

Animates sections into view as they scroll into the viewport.

**Files:**
- Managed in `assets/js/main.js` (initSectionReveal function)
- Relevant CSS in `assets/css/main.css`

**Notes:**
- Applies the 'visible' class to sections as they come into view
- Uses scroll position to determine visibility
- Also updates the active navigation link based on scroll position

### Portfolio Tabs

Creates tabbed content for displaying different categories of portfolio items.

**Files:**
- Managed in `assets/js/main.js` (initPortfolioTabs function)

**Usage:**
```html
<div class="credit-tabs">
  <div class="credit-tab active" data-tab="films">Films</div>
  <div class="credit-tab" data-tab="tv">TV</div>
</div>

<div class="credit-content active" id="films-content">
  <!-- Films content here -->
</div>
<div class="credit-content" id="tv-content">
  <!-- TV content here -->
</div>
```

### Modals

Dialog windows for displaying additional content or forms.

**Files:**
- Managed in `assets/js/main.js` (initModalFunctionality function)
- Styled in `assets/css/animations.css`

**Usage:**
```html
<!-- Modal trigger -->
<a href="#" id="book-now-btn">Book Now</a>

<!-- Modal structure -->
<div class="modal" id="booking-modal">
  <div class="modal-content">
    <div class="modal-close" id="booking-modal-close">&times;</div>
    <h2>Quick Booking Request</h2>
    <!-- Form or content goes here -->
  </div>
</div>
```

### Text Effects

Various text animation effects used throughout the site.

**Files:**
- `assets/js/animations.js` (includes TextScramble class)
- Initialized in `assets/js/main.js`

**Effects:**
- Text reveal with character-by-character fade in
- Text scramble effect for section headings
- Glitch effect for cinematic text

### Forms Handling

Form validation and submission handling for contact and booking forms.

**Files:**
- `assets/js/forms.js`

**Features:**
- Real-time validation with visual feedback
- Submit button loading state
- Success message display
- Form submission handling

## Background Effects

### Particles Background

Creates an interactive particle animation in the background.

**Files:**
- Initialized in `assets/js/animations.js`
- Requires particles.js library

**HTML Structure:**
```html
<div id="particles-js"></div>
```

### Video Background

Creates a simulated showreel background effect using canvas.

**Files:**
- Implemented in `assets/js/animations.js`

**HTML Structure:**
```html
<div id="video-background">
  <div class="overlay"></div>
</div>
```

**Notes:**
- Uses canvas to create dynamic background with text and visual effects
- Simulates film grain and lens flare effects
