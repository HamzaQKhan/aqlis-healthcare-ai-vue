import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useVectorAnimations() {
  const animateSVGPath = (svgPath, options = {}) => {
    const {
      duration = 2,
      delay = 0,
      ease = 'power2.out',
      start = 'top 80%'
    } = options;

    if (!svgPath) return;

    const pathLength = svgPath.getTotalLength();
    
    // Set up the starting positions
    svgPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    svgPath.style.strokeDashoffset = pathLength;
    svgPath.style.opacity = '0';

    // Create the animation
    gsap.to(svgPath, {
      strokeDashoffset: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: svgPath,
        start,
        toggleActions: 'play none none reverse'
      }
    });
  };

  const animateVectorMorph = (element, morphPaths, options = {}) => {
    const {
      duration = 3,
      repeat = -1,
      yoyo = true,
      ease = 'sine.inOut'
    } = options;

    if (!element || !morphPaths || morphPaths.length < 2) return;

    const morphTimeline = gsap.timeline({ repeat, yoyo, ease });
    
    morphPaths.forEach((path, index) => {
      if (index === 0) {
        morphTimeline.set(element, { attr: { d: path } });
      } else {
        morphTimeline.to(element, {
          attr: { d: path },
          duration,
          ease
        });
      }
    });

    return morphTimeline;
  };

  const animateFloatingVector = (element, options = {}) => {
    const {
      x = 0,
      y = 0,
      duration = 3,
      repeat = -1,
      ease = 'sine.inOut'
    } = options;

    if (!element) return;

    gsap.to(element, {
      x,
      y,
      duration,
      repeat,
      yoyo: true,
      ease,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  };

  const animateVectorRotation = (element, options = {}) => {
    const {
      rotation = 360,
      duration = 10,
      repeat = -1,
      ease = 'none'
    } = options;

    if (!element) return;

    gsap.to(element, {
      rotation,
      duration,
      repeat,
      ease,
      transformOrigin: 'center center'
    });
  };

  const animateVectorScale = (element, options = {}) => {
    const {
      scale = 1.2,
      duration = 2,
      repeat = -1,
      yoyo = true,
      ease = 'sine.inOut',
      start = 'top 80%'
    } = options;

    if (!element) return;

    gsap.to(element, {
      scale,
      duration,
      repeat,
      yoyo,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse'
      }
    });
  };

  return {
    animateSVGPath,
    animateVectorMorph,
    animateFloatingVector,
    animateVectorRotation,
    animateVectorScale
  };
}

