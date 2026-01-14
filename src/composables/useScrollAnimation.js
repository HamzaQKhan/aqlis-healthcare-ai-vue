import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const observeElement = (element) => {
    if (element) {
      element.classList.add('scroll-animate');
      observer.observe(element);
    }
  };

  const observeElements = (elements) => {
    elements.forEach(observeElement);
  };

  return {
    observeElement,
    observeElements
  };
}

export function useParallax() {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach((element) => {
          const speed = parseFloat(element.dataset.parallax) || 0.5;
          const yPos = -(scrolled * speed);
          element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });

        ticking = false;
      });
      ticking = true;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
}

