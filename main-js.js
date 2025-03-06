/**
 * Toth Movie Animals Website
 * Main JavaScript file
 * 
 * This file initializes all components and manages the core functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initPreloader();
  initCursor();
  initParticles();
  initScrollProgress();
  initSectionReveal();
  initVideoBackground();
  initNavigation();
  initPortfolioTabs();
  initModalFunctionality();
  initFormValidation();
  initTextEffects();
});

/**
 * Initialize scroll progress indicator
 */
function initScrollProgress() {
  const scrollProgress = document.getElementById('scroll-progress');
  
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    
    scrollProgress.style.width = scrollPercentage + '%';
  });
}

/**
 * Initialize section reveal on scroll
 */
function initSectionReveal() {
  window.addEventListener('scroll', () => {
    // Reveal sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - sectionHeight / 4) {
        section.classList.add('visible');
      }
    });
    
    // Update active navigation based on scroll position
    const navItems = document.querySelectorAll('nav a');
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(navItem => {
      navItem.classList.remove('active');
      if (navItem.getAttribute('href') === `#${current}`) {
        navItem.classList.add('active');
      }
    });
  });
}

/**
 * Initialize navigation smooth scrolling
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('nav a, .hero-button');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
          
          // Update active nav link
          document.querySelectorAll('nav a').forEach(navLink => navLink.classList.remove('active'));
          if (link.classList.contains('nav-link')) {
            link.classList.add('active');
          }
        }
      }
    });
  });
}

/**
 * Initialize portfolio tabs functionality
 */
function initPortfolioTabs() {
  const creditTabs = document.querySelectorAll('.credit-tab');
  const creditContents = document.querySelectorAll('.credit-content');
  
  creditTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs and contents
      creditTabs.forEach(t => t.classList.remove('active'));
      creditContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show corresponding content
      const tabId = tab.getAttribute('data-tab');
      document.getElementById(`${tabId}-content`).classList.add('active');
    });
  });
}

/**
 * Initialize modal functionality
 */
function initModalFunctionality() {
  // Booking modal
  const bookNowBtn = document.getElementById('book-now-btn');
  const bookingModal = document.getElementById('booking-modal');
  const bookingModalClose = document.getElementById('booking-modal-close');
  
  if (bookNowBtn && bookingModal && bookingModalClose) {
    bookNowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    bookingModalClose.addEventListener('click', () => {
      bookingModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
  
  // Video modal
  const videoModal = document.getElementById('video-modal');
  const modalClose = document.getElementById('modal-close');
  
  if (videoModal && modalClose) {
    modalClose.addEventListener('click', () => {
      videoModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

/**
 * Initialize text effects
 */
function initTextEffects() {
  // Cinematic text reveal effect
  const heroHeading = document.querySelector('.cinematic-text');
  
  if (heroHeading) {
    const revealText = (element) => {
      const text = element.textContent;
      element.textContent = '';
      
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.opacity = '0';
        span.style.animation = `fadeIn 0.1s forwards ${i * 0.05}s`;
        element.appendChild(span);
      }
    };
    
    revealText(heroHeading);
  }
}

/**
 * Check for form submission success
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
