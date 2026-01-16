<template>
  <section ref="sectionRef" class="horizontal-scroll-section relative overflow-hidden">
    <!-- Fixed container that holds all pages -->
    <div ref="scrollContainer" class="horizontal-scroll-container flex">
      <!-- Page 1 -->
      <div class="scroll-page min-w-full h-screen flex items-center justify-center relative" data-page="1">
        <!-- Background elements -->
        <div class="absolute inset-0 bg-gradient-to-br from-humaneGrey via-humaneGrey/95 to-humaneGrey/90 z-0"></div>
        <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 2px 2px, #367e72 1px, transparent 0); background-size: 50px 50px;"></div>
        
        <!-- Images Only - Page 1 -->
        <div class="animated-elements absolute inset-0 flex items-center justify-center gap-6 z-[5]">
          <!-- Professional Healthcare Images - Landscape (Wide) Format -->
          <img 
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=400&fit=crop&q=90" 
            alt="Healthcare Professional" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-60 animate-float-1 shadow-2xl"
            style="top: 15%; left: 5%;"
          />
          <img 
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop&q=90" 
            alt="Medical Team" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-55 animate-float-2 shadow-xl"
            style="bottom: 15%; right: 5%;"
          />
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&q=90" 
            alt="Hospital Technology" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-50 animate-float-3 shadow-lg"
            style="top: 30%; left: 25%;"
          />
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=400&fit=crop&q=90" 
            alt="Medical Care" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-58 animate-float-4 shadow-xl"
            style="bottom: 20%; left: 15%;"
          />
          <!-- Left side image to fill empty area -->
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&q=90" 
            alt="Healthcare Professional" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-65 animate-float-1 shadow-2xl"
            style="top: 25%; left: 2%;"
          />
        </div>
      </div>

      <!-- Page 2 -->
      <div class="scroll-page min-w-full h-screen flex items-center justify-center relative" data-page="2">
        <!-- Background elements -->
        <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/90 via-ethicalTeal/85 to-insightTeal/90 z-0"></div>
        <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0); background-size: 40px 40px;"></div>
        
        <!-- Images Only - Page 2 -->
        <div class="animated-elements absolute inset-0 flex items-center justify-center gap-6 z-[5]">
          <!-- Professional AI & Healthcare Technology Images - Landscape (Wide) Format -->
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&q=90" 
            alt="AI Technology" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-60 animate-float-1 shadow-2xl"
            style="top: 15%; left: 5%;"
          />
          <img 
            src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop&q=90" 
            alt="Data Analytics" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-55 animate-float-2 shadow-xl"
            style="bottom: 15%; right: 5%;"
          />
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop&q=90" 
            alt="Digital Health" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-50 animate-float-3 shadow-lg"
            style="top: 30%; left: 25%;"
          />
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop&q=90" 
            alt="Healthcare Innovation" 
            class="w-[500px] h-[400px] object-cover rounded-xl opacity-58 animate-float-4 shadow-xl"
            style="bottom: 20%; left: 15%;"
          />
          <!-- Left side image to fill empty area -->
          <img 
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=400&fit=crop&q=90" 
            alt="Medical Technology" 
            class="w-[500px] h-[400px] object-cover rounded-2xl opacity-65 animate-float-2 shadow-2xl"
            style="top: 25%; left: 2%;"
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

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const scrollContainer = ref(null);
const currentPage = ref(1);
let scrollTriggerInstance = null;

onMounted(async () => {
  await nextTick();
  
  // Wait a bit more for Lenis to initialize
  setTimeout(() => {
    if (sectionRef.value && scrollContainer.value) {
      const pages = scrollContainer.value.querySelectorAll('.scroll-page');
      const totalPages = pages.length;
      
      // Calculate scroll distance - each page is 100vw
      const scrollDistance = (totalPages - 1) * window.innerWidth;

      // Create horizontal scroll animation
      scrollTriggerInstance = gsap.to(scrollContainer.value, {
        x: () => -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Calculate current page based on progress
            const progress = self.progress;
            const pageIndex = Math.min(
              Math.max(Math.floor(progress * totalPages) + 1, 1),
              totalPages
            );
            currentPage.value = pageIndex;
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
}

.horizontal-scroll-container {
  display: flex;
  width: 200vw; /* 2 pages = 200% width */
  height: 100vh;
  will-change: transform;
  position: relative;
}

.scroll-page {
  position: relative;
  overflow: hidden;
}

.page-content {
  position: relative;
  z-index: 10;
}

.progress-dot {
  transition: all 0.3s ease;
}

/* Smooth transitions */
.scroll-page {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Floating animations */
@keyframes float-1 {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-15px) translateX(8px);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(12px) translateX(-12px);
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-12px) translateX(15px);
  }
}

@keyframes float-4 {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(10px) translateX(-10px);
  }
}

.animate-float-1 {
  animation: float-1 8s ease-in-out infinite;
}

.animate-float-2 {
  animation: float-2 10s ease-in-out infinite;
}

.animate-float-3 {
  animation: float-3 9s ease-in-out infinite;
}

.animate-float-4 {
  animation: float-4 11s ease-in-out infinite;
}
</style>
