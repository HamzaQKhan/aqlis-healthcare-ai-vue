<template>
  <section
    id="hero"
    ref="heroSection"
    class="hero min-h-screen flex items-center justify-center overflow-hidden"
    aria-labelledby="hero-title"
  >
    <!-- Video Background - COMMENTED OUT to use ShaderBackground from AqlisLanding -->
    <!--
    <div class="absolute inset-0 z-0">
      <OptimizedVideo
        :optimized-src="randomOptimizedVideo"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-background/60" />
    </div>
    -->
    
    <!-- Overlay for text readability - Made very light so ShaderBackground shows through -->
    <div class="absolute inset-0 bg-black/10 z-[1]" />

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
      <p
        ref="subtitleText"
        class="text-muted-custom text-sm md:text-base uppercase tracking-widest mb-6"
      >
        AI-Powered Healthcare Solutions
      </p>

      <h1
        id="hero-title"
        ref="titleText"
        class="text-hero mb-8"
      >
        Empathetic AI for<br />
        <span class="accent-teal">Compassionate Care</span>
      </h1>

      <p
        ref="bodyText"
        class="text-body max-w-2xl mx-auto mb-12"
      >
        Transforming patient outcomes through intelligent, privacy-first healthcare technology that puts human connection at the center of every interaction.
      </p>

      <div
        ref="buttonContainer"
        class="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button class="btn-primary text-lg px-8 py-4" type="button">
          Explore Solutions
        </button>
        <button class="btn-glass text-lg px-8 py-4" type="button">
          Watch Demo
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
      style="animation-delay: 1.2s"
    >
      <div class="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
        <div class="w-1.5 h-3 rounded-full bg-foreground/50 animate-bounce" />
      </div>
    </div>

    <!-- OLD CODE - COMMENTED OUT -->
    <!--
    <div class="hero-background absolute inset-0 bg-gradient-to-br from-pureWhite via-compassionMint/30 to-compassionMint/50"></div>
    <div class="hero-pattern absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 2px 2px, #246F66 1px, transparent 0); background-size: 40px 40px;"></div>
    <div class="hero-glow absolute -top-40 -right-40 h-80 w-80 rounded-full bg-insightTeal/20 blur-3xl animate-pulse-slow" data-parallax="0.5"></div>
    <div class="hero-glow-2 absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-compassionMint/30 blur-3xl animate-pulse-slow" data-parallax="0.4"></div>
    <div class="hero-particles absolute inset-0 overflow-hidden">
      <div class="particle absolute w-2 h-2 bg-insightTeal/20 rounded-full" style="left: 20%; top: 30%; animation: float 6s ease-in-out infinite;"></div>
      <div class="particle absolute w-1.5 h-1.5 bg-ethicalTeal/20 rounded-full" style="left: 60%; top: 50%; animation: float 8s ease-in-out infinite 2s;"></div>
      <div class="particle absolute w-2 h-2 bg-compassionMint/30 rounded-full" style="left: 80%; top: 20%; animation: float 7s ease-in-out infinite 1s;"></div>
    </div>
    
    
    <div
      class="hero-inner relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr] z-10"
    >
      <div class="hero-copy space-y-6 relative z-10">
        <div class="hero-title-wrapper">
          <h1
            id="hero-title"
            class="hero-title text-4xl font-bold leading-tight tracking-tight text-humaneGrey sm:text-5xl md:text-6xl lg:text-[3.5rem]"
          >
            <span class="block">Humane AI</span>
            <span class="block bg-gradient-to-r from-insightTeal via-ethicalTeal to-insightTeal bg-clip-text text-transparent">
              for healthcare
            </span>
          </h1>
        </div>
        <p
          class="hero-subtitle text-base leading-relaxed text-humaneGrey/80 sm:text-lg md:text-xl max-w-2xl"
        >
          We partner with clinicians to build intelligent systems that enhance
          patient care, reduce administrative burden, and protect trust.
          <span class="font-medium text-humaneGrey">Ethical, secure, and designed for real clinical workflows.</span>
        </p>
        <div class="hero-badges mt-6 flex flex-col gap-3">
          <div
            class="hero-badge-main group relative inline-flex max-w-max items-center gap-2 overflow-hidden rounded-full border-2 border-compassionMint/60 bg-gradient-to-r from-pureWhite to-compassionMint/30 px-5 py-2.5 text-sm font-semibold shadow-[0_4px_12px_rgba(54,126,114,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_20px_rgba(54,126,114,0.25)]"
          >
            <span class="relative z-10 flex items-center gap-2">
              <svg class="h-4 w-4 text-insightTeal" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Trusted by 200+ healthcare organizations
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-insightTeal/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
          <div
            class="hero-badge-row flex flex-wrap gap-2.5"
            aria-label="Compliance highlights"
          >
            <span
              class="hero-badge-pill inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-compassionMint to-compassionMint/80 px-3.5 py-1.5 text-xs font-semibold text-humaneGrey shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-insightTeal"></span>
              HIPAA compliant
            </span>
            <span
              class="hero-badge-pill inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-compassionMint to-compassionMint/80 px-3.5 py-1.5 text-xs font-semibold text-humaneGrey shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-insightTeal"></span>
              SOC 2 Type II
            </span>
            <span
              class="hero-badge-pill inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-compassionMint to-compassionMint/80 px-3.5 py-1.5 text-xs font-semibold text-humaneGrey shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-insightTeal"></span>
              Patient-first design
            </span>
          </div>
        </div>
        <div class="hero-actions mt-6 flex flex-wrap gap-4">
          <button
            class="btn-primary group relative inline-flex min-w-[180px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-ethicalTeal via-insightTeal to-ethicalTeal px-6 py-3.5 text-sm font-bold text-pureWhite shadow-[0_8px_24px_rgba(36,111,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(36,111,102,0.5)]"
            type="button"
          >
            <span class="relative z-10">Talk to our team</span>
            <svg class="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          <button
            class="btn-ghost group inline-flex items-center justify-center gap-2 rounded-full border-2 border-insightTeal/40 bg-pureWhite/50 px-6 py-3.5 text-sm font-semibold text-insightTeal backdrop-blur-sm transition-all duration-300 hover:border-insightTeal hover:bg-compassionMint/70 hover:scale-105 hover:shadow-md"
            type="button"
          >
            <svg class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Download product overview
          </button>
        </div>
        <div class="hero-meta-wrapper mt-6 rounded-2xl border border-compassionMint/40 bg-gradient-to-br from-compassionMint/20 to-pureWhite/50 p-4 backdrop-blur-sm">
          <p
            class="hero-meta max-w-lg text-sm font-medium leading-relaxed text-insightTeal sm:text-base"
          >
            <span class="inline-flex items-center gap-2">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </span>
            Always human-centered. Aqlis amplifies clinical judgement and protects
            patient dignity, it never replaces the clinician.
          </p>
        </div>
      </div>
      <div class="hero-visual mt-8 flex justify-center lg:justify-end lg:mt-0 relative z-20" aria-hidden="true">
        <HealthcareIllustration class="w-full h-auto max-w-md" />
      </div>
    </div>
    -->
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Video import commented out - using ShaderBackground from AqlisLanding instead
// import OptimizedVideo from './OptimizedVideo.vue';
// OLD IMPORTS - COMMENTED OUT
// import HealthVectors from './HealthVectors.vue';
// import HealthcareIllustration from './HealthcareIllustration.vue';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Video imports commented out - using ShaderBackground instead
// import stars from '../assets/videos/stars.mp4';
// import clouds from '../assets/videos/clouds.mp4';
// import waves_animation from '../assets/videos/waves_animation.mp4';

// const OPTIMIZED_VIDEO_URLS = [
//   stars,
//   clouds,
//   waves_animation,
// ];

// const randomOptimizedVideo = computed(() => {
//   if (OPTIMIZED_VIDEO_URLS.length > 0) {
//     return OPTIMIZED_VIDEO_URLS[Math.floor(Math.random() * OPTIMIZED_VIDEO_URLS.length)];
//   }
//   return null;
// });

const heroSection = ref(null);
const subtitleText = ref(null);
const titleText = ref(null);
const bodyText = ref(null);
const buttonContainer = ref(null);

onMounted(() => {
  // Setup GSAP Fade-in Animations (Simplified)
  if (subtitleText.value && titleText.value && bodyText.value && buttonContainer.value) {
    // Animate subtitle
    gsap.fromTo(
      subtitleText.value,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    // Animate title
    gsap.fromTo(
      titleText.value,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      }
    );

    // Animate body text
    gsap.fromTo(
      bodyText.value,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6,
      }
    );

    // Animate buttons
    gsap.fromTo(
      buttonContainer.value,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8,
      }
    );
  }
});

onBeforeUnmount(() => {
  // Cleanup GSAP ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
/* Hero section normal positioning */
.hero {
  position: relative;
  width: 100%;
  z-index: 1;
  background: transparent;
}

/* Fade-in animation */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

/* Text styles - white for dark background */
.text-muted-custom {
  color: white;
}

/* Removed word-wrapper styles - no longer needed */

.text-hero {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: #ffffff;
}

@media (min-width: 768px) {
  .text-hero {
    font-size: 4.5rem;
  }
}

.accent-teal {
  background: linear-gradient(to right, #AEC8B9, #246f66, #AEC8B9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-body {
  font-size: 1.125rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.95);
}

@media (min-width: 768px) {
  .text-body {
    font-size: 1.25rem;
  }
}

.bg-background {
  background-color: rgba(255, 255, 255, 0.6);
}

.btn-primary {
  background: linear-gradient(to right, #246f66, #367e72, #246f66);
  color: white;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(36, 111, 102, 0.4);
}

.btn-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-glass:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(54, 126, 114, 0.5);
  transform: scale(1.05);
}

.border-foreground {
  border-color: rgba(255, 255, 255, 0.3);
}

.bg-foreground {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
