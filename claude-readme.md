# Guide for Claude and AI Assistants

This document provides specific guidance for Claude and other AI assistants working with the Toth Movie Animals website repository. It contains important context, file relationships, and common patterns to help you navigate and modify the codebase effectively.

## Repository Overview

This is a website for "Toth Movie Animals," a company providing animal training services for film and TV productions. The site has been structured for maintainability with separated CSS and JavaScript files.

### Key Files and Their Relationships

```
├── index.html              # Main HTML file that references all other assets
├── site.webmanifest        # Web app manifest for mobile/PWA configuration
├── assets/
│   ├── css/
│   │   ├── main.css        # Core styles for layout and typography
│   │   └── animations.css  # Animation-specific styles and effects
│   ├── js/
│   │   ├── main.js         # Entry point that initializes all components
│   │   ├── preloader.js    # Handles the initial loading animation
│   │   ├── cursor.js       # Custom cursor implementation
│   │   ├── animations.js   # Visual effects and animations
│   │   └── forms.js        # Form validation and submission handling
│   └── images/             # Image assets (to be added)
└── docs/
    ├── components.md       # Documentation of all UI components
    ├── code-patterns.md    # Common code patterns used in the project
    ├── optimization-notes.md # Performance considerations
    └── future-work.md      # Planned improvements
```

## Working with This Codebase

### File Modification Guidelines

When modifying files in this repository, follow these guidelines:

1. **HTML Changes**: 
   - Modify `index.html` for structural changes
   - Maintain semantic HTML structure with proper section IDs for navigation

2. **CSS Changes**:
   - Add layout and typography styles to `main.css`
   - Add animation and effect styles to `animations.css`
   - Maintain the CSS variable system in `:root` for consistent theming

3. **JavaScript Changes**:
   - Add new component initialization to `main.js`
   - Create new component files for significant new functionality
   - Follow the component pattern with `init[ComponentName]()` functions

### Common Patterns

#### Component Initialization Pattern

All JavaScript components follow this pattern:

```javascript
function initComponentName() {
  // Get DOM elements
  const element = document.getElementById('element-id');
  
  // Exit if elements don't exist
  if (!element) return;
  
  // Component logic
  // ...
}

// Called from main.js when DOM is loaded
```

#### CSS Structure Pattern

CSS follows this organization:

```css
/* Component wrapper */
.component-name {
  /* Base styles */
}

/* Component elements */
.component-name-element {
  /* Element styles */
}

/* Component states/modifiers */
.component-name--state {
  /* State-specific styles */
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .component-name {
    /* Mobile styles */
  }
}
```

## Common Tasks

### Adding a New Section

To add a new section to the website:

1. Add HTML for the section to `index.html`:
   ```html
   <section class="container" id="new-section">
     <h2 class="section-title">New <span class="highlight">Section</span></h2>
     <!-- Section content -->
   </section>
   ```

2. Add navigation link in the header:
   ```html
   <nav>
     <!-- Existing links -->
     <a href="#new-section" class="nav-link">New Section</a>
   </nav>
   ```

3. Add any specific styles to `main.css`

### Modifying the Preloader

The preloader can be customized in several ways:

1. Change the visual appearance in `animations.css`
2. Modify the loading behavior in `preloader.js`
3. Update the HTML structure in `index.html`

### Adding New Animation Effects

To add new animation effects:

1. Define keyframes in `animations.css`:
   ```css
   @keyframes newAnimation {
     0% { /* start state */ }
     100% { /* end state */ }
   }
   ```

2. Apply the animation to elements:
   ```css
   .animated-element {
     animation: newAnimation 2s ease infinite;
   }
   ```

3. For JavaScript-triggered animations, add logic to `animations.js`

## Troubleshooting Common Issues

### Custom Cursor Not Working

If the custom cursor is not working:

1. Check if cursor elements exist in HTML:
   ```html
   <div id="cursor"></div>
   <div id="cursor-trail"></div>
   ```

2. Verify `cursor.js` is being loaded
3. Check for any JavaScript errors in the console
4. The cursor is intentionally disabled on mobile (width <= 768px)

### Animations Not Appearing

If animations are not appearing:

1. Verify the section has the correct class structure for animations
2. Check that `initSectionReveal()` is being called in `main.js`
3. Ensure CSS animations are properly defined in `animations.css`
4. Verify that the animations aren't disabled in a media query for the current viewport size

### Forms Not Submitting

If forms are not submitting:

1. Check for JavaScript errors in `forms.js`
2. Verify that form IDs match those referenced in JavaScript
3. Check for proper form attributes (action, method)
4. Look for validation errors preventing submission

## Extending the Codebase

When extending the codebase with new features:

1. Document new components in `docs/components.md`
2. Follow existing code patterns for consistency
3. Update relevant README files to reflect changes
4. Maintain the separation of concerns between files

## AI-Specific Notes

### Context Awareness

When working with this codebase:

1. **File References**: When you see HTML referencing external files (like `<link href="assets/css/main.css">`), be aware that these files are separate and contain their own code.

2. **JavaScript Execution Flow**: The JavaScript execution flow begins with `main.js`, which calls initialization functions from other files when the DOM is loaded.

3. **Visual Components**: The site uses several visual techniques:
   - Custom cursor following mouse movement
   - Section reveal animations on scroll
   - Preloader animation on initial load
   - Particle.js background effects

### Common Confusions

To avoid confusion:

1. The custom cursor and animation effects are intentionally disabled on mobile.
2. The cinematic text effect in the hero section is handled by JavaScript.
3. Section animations are triggered by scroll position.
4. The site uses both CSS animations and JavaScript-controlled animations.

### Core Functionality Anchors

When making changes, preserve these core functionalities:

1. Navigation with smooth scrolling to sections
2. Form validation and submission handling
3. Responsive design across device sizes
4. Animation effects for engagement
5. Portfolio tab switching functionality

## Implementation Guidelines

When implementing new features or fixing issues:

1. **Progressive Enhancement**: Ensure basic functionality works without JavaScript.
2. **Mobile Consideration**: Always consider mobile users in design changes.
3. **Performance Impact**: Consider performance impact of animations and effects.
4. **Accessibility**: Maintain accessibility in all UI components.
5. **Code Organization**: Keep related code together and maintain separation of concerns.
