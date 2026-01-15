import { onMounted, onUnmounted } from 'vue';

export function useScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationType = element.dataset.animate || 'fade-up';
        element.classList.add('animate-in', `animate-${animationType}`);
        
        // Handle stagger animations for child elements
        if (element.dataset.stagger) {
          const children = element.querySelectorAll('[data-stagger-item]');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100);
          });
        }
        
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  const observeElement = (element, animationType = 'fade-up') => {
    if (element) {
      element.classList.add('scroll-animate');
      element.dataset.animate = animationType;
      observer.observe(element);
    }
  };

  const observeElements = (elements, animationType = 'fade-up') => {
    elements.forEach((element, index) => {
      observeElement(element, animationType);
    });
  };

  const observeWithStagger = (container, itemSelector, animationType = 'fade-up') => {
    if (container) {
      container.dataset.stagger = 'true';
      container.dataset.animate = animationType;
      container.classList.add('scroll-animate');
      
      const items = container.querySelectorAll(itemSelector);
      items.forEach((item, index) => {
        item.dataset.staggerItem = 'true';
        item.classList.add('scroll-animate');
      });
      
      observer.observe(container);
    }
  };

  return {
    observeElement,
    observeElements,
    observeWithStagger
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

