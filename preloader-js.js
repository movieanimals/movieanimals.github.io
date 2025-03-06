/**
 * Preloader Component
 * Displays a loading animation and progress bar during initial page load
 */

function initPreloader() {
  const preloader = document.getElementById('preloader');
  const preloaderProgressBar = document.getElementById('preloader-progress-bar');
  const main = document.querySelector('main');
  
  // Only initialize if preloader elements exist
  if (!preloader || !preloaderProgressBar || !main) return;
  
  // Simulate loading progress with cinematic effect
  let progress = 0;
  const loadingInterval = setInterval(() => {
    // Increment progress with random amount to make it feel more natural
    progress += Math.random() * 10;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadingInterval);
      
      // Hide preloader with fade out effect after a slight delay
      setTimeout(() => {
        preloader.style.opacity = '0';
        main.style.opacity = '1';
        
        // Remove from DOM after animation completes
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 1000);
      }, 800);
    }
    
    // Update progress bar width
    preloaderProgressBar.style.width = `${progress}%`;
  }, 200);
  
  /**
   * Public method to manually update preloader progress
   * @param {number} percent - Progress percentage (0-100)
   */
  window.updatePreloaderProgress = function(percent) {
    if (percent >= 0 && percent <= 100 && preloaderProgressBar) {
      preloaderProgressBar.style.width = `${percent}%`;
      
      if (percent === 100) {
        setTimeout(() => {
          preloader.style.opacity = '0';
          main.style.opacity = '1';
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 1000);
        }, 800);
      }
    }
  };
  
  /**
   * Public method to hide preloader manually
   */
  window.hidePreloader = function() {
    if (preloader && main) {
      preloader.style.opacity = '0';
      main.style.opacity = '1';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 1000);
    }
  };
}
