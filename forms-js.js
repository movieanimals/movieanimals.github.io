/**
 * Forms Component
 * Handles form validation, submission, and animations
 */

/**
 * Initialize form validation and submission handling
 */
function initFormValidation() {
  // Contact form validation and submission
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  
  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validate form
      const formInputs = contactForm.querySelectorAll('input, textarea');
      let isValid = true;
      
      formInputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          input.style.borderColor = '#E50914';
        } else {
          input.classList.remove('error');
          input.style.borderColor = '';
        }
      });
      
      if (isValid) {
        // Show loading animation
        submitBtn.innerHTML = 'Sending...';
        submitBtn.style.width = '150px';
        submitBtn.disabled = true;
        
        // Simulate form submission with delay for animation
        setTimeout(() => {
          // In a real implementation, this would send the form data to a server
          contactForm.submit();
        }, 1500);
      }
    });
  }
  
  // Booking form validation and submission
  const bookingForm = document.getElementById('booking-form');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Validate form
      const formInputs = bookingForm.querySelectorAll('input, textarea, select');
      let isValid = true;
      
      formInputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      
      if (isValid) {
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        
        if (submitBtn) {
          // Show loading animation
          submitBtn.innerHTML = 'Processing...';
          submitBtn.disabled = true;
          
          // Simulate form submission
          setTimeout(() => {
            // In a real implementation, this would send the form data to a server
            bookingForm.submit();
          }, 1500);
        }
      }
    });
  }
  
  // Enhanced form validation for all forms
  enhanceFormValidation();
  
  // Check for form submission success (for when user returns after submission)
  checkForFormSuccess();
}

/**
 * Enhanced form validation
 * Adds real-time validation and feedback to all forms
 */
function enhanceFormValidation() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      // Show validation state on blur
      input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      
      // Remove error class on input
      input.addEventListener('input', () => {
        input.classList.remove('error');
      });
    });
    
    // Add enhanced validation before submission
    form.addEventListener('submit', e => {
      let isValid = true;
      
      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          input.classList.add('error');
          isValid = false;
          
          // Scroll to first error
          if (isValid === false) {
            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            input.focus();
            isValid = null; // Prevent multiple scrolls
          }
        }
      });
      
      if (isValid === false) {
        e.preventDefault();
      }
    });
  });
}

/**
 * Check for form submission success
 * Displays a thank you message if the URL contains success parameters
 */
function checkForFormSuccess() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('success') || urlParams.has('thank-you') || urlParams.has('thanks')) {
    const thanksMessage = document.createElement('div');
    thanksMessage.className = 'thanks-message';
    thanksMessage.innerHTML = `
      <h3>Thank You!</h3>
      <p>Your message has been sent successfully. We'll be in touch soon!</p>
    `;
    document.body.appendChild(thanksMessage);
    
    setTimeout(() => {
      thanksMessage.classList.add('active');
      
      setTimeout(() => {
        thanksMessage.classList.remove('active');
        setTimeout(() => {
          thanksMessage.remove();
        }, 500);
      }, 3000);
    }, 500);
    
    // Clean up the URL without reloading the page
    const url = new URL(window.location);
    url.searchParams.delete('success');
    url.searchParams.delete('thank-you');
    url.searchParams.delete('thanks');
    window.history.replaceState({}, '', url);
  }
}