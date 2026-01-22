<template>
  <section ref="sectionRef" class="horizontal-scroll-section relative overflow-hidden">
    <!-- Subtle top border/shadow for separation -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-insightTeal/30 to-transparent z-10"></div>
    <!-- Fixed container that holds all pages -->
    <div ref="scrollContainer" class="horizontal-scroll-container flex">
      <!-- Page 1 -->
      <div class="scroll-page min-w-full h-screen flex items-center justify-center relative" data-page="1">
        <!-- Background elements - Made transparent for shader visibility -->
        <div class="absolute inset-0 bg-gradient-to-br from-humaneGrey/20 via-humaneGrey/15 to-humaneGrey/20 z-0" style="transform: translateZ(0); contain: strict;"></div>
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, #367e72 1px, transparent 0); background-size: 50px 50px; transform: translateZ(0); contain: strict; will-change: auto;"></div>
        
        <!-- Images Only - Page 1 -->
        <div class="animated-elements absolute inset-0 flex items-center justify-center gap-6 z-[50]" style="transform: translateZ(0); will-change: contents;">
          <!-- Professional Healthcare Images - Using Local Assets -->
          <img 
            :src="doctorsImg" 
            alt="Healthcare Professional" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-100 animate-float-1"
            style="top: 15%; left: 5%; transform: translateZ(0); will-change: transform;"
            loading="eager"
          />
          <img 
            :src="medicalMachineRoomImg" 
            alt="Medical Team" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-100 animate-float-2"
            style="bottom: 15%; right: 5%; transform: translateZ(0); will-change: transform;"
            loading="eager"
          />
          <img 
            :src="machineImg" 
            alt="Hospital Technology" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-100 animate-float-3"
            style="top: 30%; left: 25%; transform: translateZ(0); will-change: transform;"
            loading="eager"
          />
          <img 
            :src="brainImg" 
            alt="Medical Care" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-100 animate-float-4"
            style="bottom: 20%; left: 15%; transform: translateZ(0); will-change: transform;"
            loading="eager"
          />
          <!-- Left side image to fill empty area -->
          <img 
            :src="doctorsImg" 
            alt="Healthcare Professional" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-100 animate-float-1"
            style="top: 25%; left: 2%; transform: translateZ(0); will-change: transform;"
            loading="eager"
          />
        </div>
      </div>

      <!-- Page 2 -->
      <div class="scroll-page min-w-full h-screen flex items-center justify-center relative" data-page="2">
        <!-- Background elements - Made transparent for shader visibility -->
        <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/15 via-ethicalTeal/12 to-insightTeal/15 z-0" style="transform: translateZ(0); contain: strict;"></div>
        <div class="absolute inset-0 opacity-8" style="background-image: radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0); background-size: 40px 40px; transform: translateZ(0); contain: strict; will-change: auto;"></div>
        
        <!-- Images Only - Page 2 -->
        <div class="animated-elements absolute inset-0 flex items-center justify-center gap-6 z-[50]" style="transform: translateZ(0); will-change: contents;">
          <!-- Professional AI & Healthcare Technology Images - Using Local Assets -->
          <img 
            :src="brainImg" 
            alt="AI Technology" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-60 animate-float-1"
            style="top: 15%; left: 5%; transform: translateZ(0); will-change: transform; z-index: 51;"
            loading="eager"
          />
          <img 
            :src="machineImg" 
            alt="Data Analytics" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-55 animate-float-2"
            style="bottom: 15%; right: 5%; transform: translateZ(0); will-change: transform; z-index: 51;"
            loading="eager"
          />
          <img 
            :src="medicalMachineRoomImg" 
            alt="Digital Health" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-50 animate-float-3"
            style="top: 30%; left: 25%; transform: translateZ(0); will-change: transform; z-index: 51;"
            loading="eager"
          />
          <img 
            :src="doctorsImg" 
            alt="Healthcare Innovation" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-58 animate-float-4"
            style="bottom: 20%; left: 15%; transform: translateZ(0); will-change: transform; z-index: 51;"
            loading="eager"
          />
          <!-- Left side image to fill empty area -->
          <img 
            :src="brainImg" 
            alt="Medical Technology" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-65 animate-float-2"
            style="top: 25%; left: 2%; transform: translateZ(0); will-change: transform; z-index: 51;"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <!-- Progress indicator -->
    <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
      <div
        v-for="(page, index) in 2"
        :key="index"
        class="progress-dot w-2 h-2 rounded-full transition-all duration-300"
        :class="currentPage === index + 1 ? 'bg-insightTeal w-8' : 'bg-white/40'"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import local images
import brainImg from '../assets/images/brain.jpg';
import doctorsImg from '../assets/images/doctors.jpg';
import machineImg from '../assets/images/machine.jpg';
import medicalMachineRoomImg from '../assets/images/medical_machine_room.jpg';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const scrollContainer = ref(null);
const currentPage = ref(1);
let scrollTriggerInstance = null;

onMounted(async () => {
  await nextTick();
  
  // Preload local images for better performance
  const localImages = [
    brainImg,
    doctorsImg,
    machineImg,
    medicalMachineRoomImg,
  ];
  
  // Preload images
  localImages.forEach(imgSrc => {
    const img = new Image();
    img.src = imgSrc;
  });
  
  // Wait a bit more for Lenis to initialize
  setTimeout(() => {
    if (sectionRef.value && scrollContainer.value) {
      const pages = scrollContainer.value.querySelectorAll('.scroll-page');
      const totalPages = pages.length;
      
      // Calculate scroll distance - each page is 100vw
      const scrollDistance = (totalPages - 1) * window.innerWidth;

      // Create horizontal scroll animation with optimized settings
      scrollTriggerInstance = gsap.to(scrollContainer.value, {
        x: () => -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 0.3, // Ultra-smooth scrubbing
          invalidateOnRefresh: true,
          anticipatePin: 1,
          markers: false,
          onUpdate: (self) => {
            // Debounce page updates for better performance
            if (!self.updateTimeout) {
              self.updateTimeout = requestAnimationFrame(() => {
                const progress = self.progress;
                const pageIndex = Math.min(
                  Math.max(Math.floor(progress * totalPages) + 1, 1),
                  totalPages
                );
                currentPage.value = pageIndex;
                self.updateTimeout = null;
              });
            }
          },
        },
      });

      // Refresh ScrollTrigger after setup
      ScrollTrigger.refresh();
    }
  }, 300);
});

onBeforeUnmount(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars?.trigger === sectionRef.value) {
      trigger.kill();
    }
  });
});
</script>

<style scoped>
.horizontal-scroll-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  contain: strict;
  isolation: isolate;
}

.horizontal-scroll-container {
  display: flex;
  width: 200vw; /* 2 pages = 200% width */
  height: 100vh;
  will-change: transform;
  position: relative;
  transform: translateZ(0); /* GPU acceleration */
  backface-visibility: hidden;
  perspective: 1000px;
  contain: strict;
  isolation: isolate;
  transform-style: preserve-3d;
}

.scroll-page {
  position: relative;
  overflow: hidden;
  transform: translateZ(0); /* GPU acceleration */
  will-change: transform;
  contain: strict;
  isolation: isolate;
  transform-style: preserve-3d;
}

.page-content {
  position: relative;
  z-index: 10;
}

.progress-dot {
  transition: all 0.3s ease;
  will-change: width, background-color;
  transform: translateZ(0);
}

/* Image optimization */
.horizontal-scroll-section img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  contain: layout style paint;
}

/* Smooth transitions */
.scroll-page {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Floating animations - Reduced movement for better performance */
@keyframes float-1 {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(5px, -10px, 0);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-8px, 8px, 0);
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(10px, -8px, 0);
  }
}

@keyframes float-4 {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-6px, 6px, 0);
  }
}

.animate-float-1 {
  animation: float-1 12s ease-in-out infinite;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.animate-float-2 {
  animation: float-2 14s ease-in-out infinite;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.animate-float-3 {
  animation: float-3 13s ease-in-out infinite;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.animate-float-4 {
  animation: float-4 15s ease-in-out infinite;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
</style>
