<template>
  <section class="clients-slider-section relative py-20 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-compassionMint/8 via-pureWhite to-compassionMint/12"></div>
    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 2px 2px, #246F66 1px, transparent 0); background-size: 40px 40px;"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-humaneGrey mb-4">
          Trusted by <span class="text-insightTeal">200+</span> healthcare organizations
        </h2>
        <p class="text-humaneGrey/70 text-lg">
          Leading healthcare institutions trust Aqlis for their AI needs
        </p>
      </div>

      <!-- Slider Container -->
      <div class="clients-slider-wrapper relative">
        <!-- Gradient Overlays -->
        <div class="slider-gradient-left absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"></div>
        <div class="slider-gradient-right absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"></div>

        <!-- Slider Track -->
        <div ref="sliderTrack" class="clients-slider-track flex gap-8">
          <!-- First Set of Clients -->
          <div
            v-for="(client, index) in clients"
            :key="`first-${index}`"
            class="client-item flex-shrink-0"
          >
            <div class="client-card group relative bg-gradient-to-br from-pureWhite to-compassionMint/30 rounded-2xl p-8 shadow-xl border-2 border-compassionMint/30 hover:shadow-2xl hover:border-insightTeal/50 hover:bg-gradient-to-br hover:from-pureWhite hover:to-compassionMint/40 transition-all duration-300 hover:scale-105">
              <div class="client-logo mb-4">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center text-white font-bold text-xl">
                  {{ client.initials }}
                </div>
              </div>
              <h3 class="client-name text-xl font-bold text-humaneGrey mb-2">{{ client.name }}</h3>
              <p class="client-role text-sm text-humaneGrey/60 mb-4">{{ client.role }}</p>
              <p class="client-quote text-base text-humaneGrey/80 italic">
                "{{ client.quote }}"
              </p>
            </div>
          </div>

          <!-- Duplicate Set for Seamless Loop -->
          <div
            v-for="(client, index) in clients"
            :key="`second-${index}`"
            class="client-item flex-shrink-0"
          >
            <div class="client-card group relative bg-gradient-to-br from-pureWhite to-compassionMint/30 rounded-2xl p-8 shadow-xl border-2 border-compassionMint/30 hover:shadow-2xl hover:border-insightTeal/50 hover:bg-gradient-to-br hover:from-pureWhite hover:to-compassionMint/40 transition-all duration-300 hover:scale-105">
              <div class="client-logo mb-4">
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center text-white font-bold text-xl">
                  {{ client.initials }}
                </div>
              </div>
              <h3 class="client-name text-xl font-bold text-humaneGrey mb-2">{{ client.name }}</h3>
              <p class="client-role text-sm text-humaneGrey/60 mb-4">{{ client.role }}</p>
              <p class="client-quote text-base text-humaneGrey/80 italic">
                "{{ client.quote }}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

const sliderTrack = ref(null);

// Sample client data - replace with your actual clients
const clients = [
  {
    initials: 'MH',
    name: 'Metro Hospital',
    role: 'Chief Medical Officer',
    quote: 'Aqlis transformed our patient care workflow. The AI integration is seamless and intuitive.',
  },
  {
    initials: 'HC',
    name: 'HealthCare Plus',
    role: 'Director of Operations',
    quote: 'Best decision we made. Reduced administrative time by 40% while improving patient outcomes.',
  },
  {
    initials: 'MC',
    name: 'Medical Center',
    role: 'Head of Technology',
    quote: 'The ethical approach to AI in healthcare is exactly what we needed. Highly recommend.',
  },
  {
    initials: 'UH',
    name: 'United Health',
    role: 'VP of Innovation',
    quote: 'Aqlis has become essential to our daily operations. The team support is exceptional.',
  },
  {
    initials: 'PH',
    name: 'Prime Hospital',
    role: 'CEO',
    quote: 'Outstanding platform. Our clinicians love how it enhances their decision-making process.',
  },
  {
    initials: 'CH',
    name: 'City Hospital',
    role: 'Chief Information Officer',
    quote: 'Privacy-first design with powerful AI capabilities. Exactly what healthcare needs.',
  },
  {
    initials: 'GH',
    name: 'General Hospital',
    role: 'Medical Director',
    quote: 'Patient care improved significantly. The AI insights are accurate and actionable.',
  },
  {
    initials: 'SH',
    name: 'St. Mary\'s Hospital',
    role: 'Head of Digital Health',
    quote: 'Seamless integration, excellent support, and measurable results. Couldn\'t be happier.',
  },
];

let animation = null;

onMounted(() => {
  if (sliderTrack.value) {
    // Calculate total width
    const totalWidth = sliderTrack.value.scrollWidth / 2; // Divide by 2 because we duplicate the items

    // Create infinite scroll animation
    animation = gsap.to(sliderTrack.value, {
      x: -totalWidth,
      duration: 30, // Adjust speed here (higher = slower)
      ease: 'none',
      repeat: -1, // Infinite loop
    });
  }
});

onBeforeUnmount(() => {
  if (animation) {
    animation.kill();
  }
});
</script>

<style scoped>
.clients-slider-section {
  position: relative;
  background: linear-gradient(135deg, rgba(174, 200, 185, 0.08) 0%, rgba(255, 255, 255, 1) 50%, rgba(174, 200, 185, 0.12) 100%);
}

.clients-slider-wrapper {
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
}

.clients-slider-track {
  width: fit-content;
  will-change: transform;
}

.client-item {
  width: 380px; /* Fixed width for consistent cards */
}

.client-card {
  min-height: 280px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Gradient overlays for fade effect */
.slider-gradient-left {
  background: none
}

.slider-gradient-right {
  background: none
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .client-item {
    width: 320px;
  }

  .slider-gradient-left,
  .slider-gradient-right {
    width: 4rem;
  }
}
</style>

