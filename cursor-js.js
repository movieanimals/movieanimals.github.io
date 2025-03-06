/**
 * Custom Cursor Component
 * Creates an interactive custom cursor with trail effect
 */

function initCursor() {
  const cursor = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursor-trail');
  const spotlight = document.getElementById('spotlight');
  
  // Exit if cursor elements don't exist (for mobile compatibility)
  if (!cursor || !cursorTrail) return;

  // Update cursor position on mouse move
  document.addEventListener('mousemove', (e) => {
    // Position main cursor at exact mouse position
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Position cursor trail with slight delay for effect
    setTimeout(() => {
      cursorTrail.style.left = e.clientX + 'px';
      cursorTrail.style.top = e.clientY + 'px';
    }, 100);
    
    // Spotlight effect (if element exists)
    if (spotlight) {
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
      
      // Show spotlight only on header
      const header = document.querySelector('header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        
        if (
          e.clientY >= headerRect.top &&
          e.clientY <= headerRect.bottom &&
          e.clientX >= headerRect.left &&
          e.clientX <= headerRect.right
        ) {
          spotlight.classList.add('active');
        } else {
          spotlight.classList.remove('active');
        }
      }
    }
  });
  
  // Change cursor style on interactive elements
  const clickables = document.querySelectorAll('a, button, input, textarea, .credit-tab, .portfolio-item');
  
  clickables.forEach(element => {
    // Enlarge and change cursor on hover
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.backgroundColor = '#ffffff';
      cursor.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.4)';
      cursorTrail.style.opacity = '0.8';
      cursorTrail.style.borderColor = '#ffffff';
    });
    
    // Reset cursor on mouse leave
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = 'var(--primary-color)';
      cursor.style.boxShadow = '0 0 10px rgba(229, 9, 20, 0.8), 0 0 20px rgba(229, 9, 20, 0.4)';
      cursorTrail.style.opacity = '0.7';
      cursorTrail.style.borderColor = 'var(--primary-color)';
    });
  });

  // Hide default cursor
  document.body.style.cursor = 'none';
  
  // Handle cursor for edge cases
  
  // Show cursor when it enters the window
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorTrail.style.opacity = '0.7';
  });
  
  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorTrail.style.opacity = '0';
  });
  
  // Handle clicks - create press effect
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorTrail.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  // Disable custom cursor for mobile devices
  if (window.innerWidth <= 768) {
    document.body.style.cursor = 'auto';
    if (cursor) cursor.style.display = 'none';
    if (cursorTrail) cursorTrail.style.display = 'none';
  }
}
