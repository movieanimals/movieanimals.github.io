# Code Patterns

This document outlines the common code patterns and conventions used throughout the Toth Movie Animals website codebase.

## JavaScript Patterns

### Component Initialization

The website follows a component-based architecture where each functional area is initialized separately. This pattern allows for better organization and maintainability.

```javascript
// Component initialization function
function initComponentName() {
  // Get required DOM elements
  const element = document.getElementById('element-id');
  
  // Exit early if elements don't exist (defensive programming)
  if (!element) return;
  
  // Component logic here
  // ...
  
  // Optional: Expose public methods if needed
  window.componentPublicMethod = function() {
    // Method implementation
  };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initComponentName();
});
```

### Event Delegation

For handling multiple similar elements, event delegation is used to improve performance:

```javascript
// Instead of attaching event listeners to each element
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', handleClick);
});

// Use event delegation
document.addEventListener('click', function(event) {
  if (event.target.matches('.button')) {
    handleClick(event);
  }
});
```

### Defensive Programming

Code defensively checks for element existence before operating on them:

```javascript
const element = document.getElementById('element-id');
if (!element) return; // Exit if element doesn't exist

// Continue with logic that uses the element
```

### Feature Detection

Use feature detection rather than browser detection:

```javascript
// Check if a feature exists before using it
if ('IntersectionObserver' in window) {
  // Use IntersectionObserver
} else {
  // Fallback for browsers without support
}
```

## CSS Patterns

### CSS Variables

CSS variables (custom properties) are used for consistent theming across the site:

```css
:root {
  --primary-color: #E50914;
  --secondary-color: #1DB954;
  --accent-color: #F5C518;
  /* other variables */
}

.element {
  color: var(--primary-color);
  border-color: var(--accent-color);
}
```

### CSS Animations

Animations are defined with keyframes and then applied to elements:

```css
/* Define the animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Apply the animation */
.element {
  animation: fadeIn 0.5s ease forwards;
}
```

### Responsive Design Pattern

Media queries are used to create responsive layouts:

```css
/* Desktop first approach */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

/* Tablet */
@media screen and (max-width: 992px) {
  .container {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
```

### BEM-inspired Naming

While not strictly following BEM methodology, the CSS uses a component-based naming convention:

```css
/* Component */
.card { }

/* Component element */
.card-title { }
.card-content { }

/* Component modifier */
.card-primary { }
.card-secondary { }
```

## HTML Patterns

### Semantic Structure

The HTML uses semantic elements for better accessibility and SEO:

```html
<header>
  <!-- Site header content -->
</header>

<main>
  <section id="about">
    <!-- Section content -->
  </section>
  
  <section id="services">
    <!-- Section content -->
  </section>
</main>

<footer>
  <!-- Site footer content -->
</footer>
```

### Component Structure

UI components follow a consistent pattern:

```html
<!-- Component wrapper with descriptive class name -->
<div class="component-name">
  <!-- Component header if needed -->
  <div class="component-name-header">
    <h2 class="component-name-title">Title</h2>
  </div>
  
  <!-- Component content -->
  <div class="component-name-content">
    <!-- Content elements -->
  </div>
  
  <!-- Component footer if needed -->
  <div class="component-name-footer">
    <!-- Footer elements -->
  </div>
</div>
```

## Error Handling Patterns

### Form Validation

Form validation follows a consistent pattern:

```javascript
// Get form and inputs
const form = document.getElementById('form-id');
const inputs = form.querySelectorAll('input, textarea, select');

// Add submit event listener
form.addEventListener('submit', e => {
  let isValid = true;
  
  // Check each required input
  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  // Prevent submission if validation fails
  if (!isValid) {
    e.preventDefault();
  }
});
```

### API/Resource Loading Error Handling

For external resources like scripts and APIs:

```javascript
// Initialize external functionality safely
function initExternalFeature() {
  if (typeof externalLib !== 'undefined') {
    try {
      // Use the external library
      externalLib.initialize(options);
    } catch (error) {
      console.error('Error initializing external feature:', error);
      // Fallback behavior if available
    }
  } else {
    console.warn('External library not available');
    // Optional: Load library dynamically or use fallback
  }
}
```
