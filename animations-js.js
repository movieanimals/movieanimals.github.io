/**
 * Animations Component
 * Manages various animations and visual effects throughout the site
 */

/**
 * Initialize particles.js background
 */
function initParticles() {
  if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: '#E50914' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#F5C518',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        }
      },
      retina_detect: true
    });
  }
}

/**
 * Initialize video background with cinema effect
 */
function initVideoBackground() {
  const videoBackground = document.getElementById('video-background');
  
  if (!videoBackground) return;
  
  // Create a virtual showreel of work using canvas
  const createVirtualShowreel = () => {
    // Create a canvas element for dynamic content
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    videoBackground.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Define frames for our "virtual showreel"
    const frames = [
      { color: '#000', text: 'TOTH MOVIE ANIMALS PRESENTS' },
      { color: '#111', text: 'ANIMAL TALENT THAT STEALS THE SHOW' },
      { color: '#222', text: 'FEATURED IN MAJOR PRODUCTIONS' },
      { color: '#111', text: 'TRUSTED BY LEADING DIRECTORS' },
      { color: '#000', text: 'AWARD-WINNING TRAINING' },
    ];
    
    let currentFrame = 0;
    
    // Animation function
    const animate = () => {
      const frame = frames[currentFrame];
      
      // Create cinematic letterbox effect
      ctx.fillStyle = frame.color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add film grain
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const opacity = Math.random() * 0.05;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillRect(x, y, 1, 1);
      }
      
      // Add text
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 32px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(frame.text, canvas.width / 2, canvas.height / 2);
      
      // Simulate lens flare occasionally
      if (Math.random() > 0.97) {
        const flareX = Math.random() * canvas.width;
        const flareY = Math.random() * canvas.height;
        const gradient = ctx.createRadialGradient(flareX, flareY, 0, flareX, flareY, 100);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Change frame
      if (Math.random() > 0.99) {
        currentFrame = (currentFrame + 1) % frames.length;
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  };
  
  createVirtualShowreel();
}

/**
 * Text scramble effect for headings
 */
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

/**
 * Initialize text scramble effect on section headings
 */
function initTextScramble() {
  // Apply text scramble to all section headings
  const headings = document.querySelectorAll('h2.section-title');
  
  headings.forEach(heading => {
    const originalText = heading.textContent;
    const fx = new TextScramble(heading);
    
    // Use IntersectionObserver to trigger the effect when the heading comes into view
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fx.setText(originalText);
            observer.unobserve(heading);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(heading);
    } else {
      // Fallback for browsers without IntersectionObserver support
      setTimeout(() => {
        fx.setText(originalText);
      }, 500);
    }
  });
}

/**
 * Add parallax effect to images
 */
function initParallaxEffect() {
  const parallaxImages = document.querySelectorAll('.parallax-img');
  
  if (parallaxImages.length === 0) return;
  
  window.addEventListener('scroll', () => {
    parallaxImages.forEach(image => {
      const scrollPosition = window.pageYOffset;
      const imagePosition = image.offsetTop;
      const windowHeight = window.innerHeight;
      
      if (imagePosition < scrollPosition + windowHeight && imagePosition + image.height > scrollPosition) {
        const distance = (scrollPosition + windowHeight - imagePosition) * 0.1;
        image.style.transform = `translateY(${distance}px)`;
      }
    });
  });
}
