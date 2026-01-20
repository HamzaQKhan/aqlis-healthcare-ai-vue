<template>
  <section
    id="solutions"
    ref="solutionsSection"
    class="section section-solutions scroll-animate relative overflow-hidden"
    aria-labelledby="solutions-title"
  >
    <SolutionsVectors class="absolute inset-0 opacity-40" />
    
    <!-- Floating animated elements -->
    <div class="floating-elements absolute inset-0 pointer-events-none z-0">
      <div ref="float1" class="float-element absolute w-20 h-20 rounded-full bg-insightTeal/10 blur-xl"></div>
      <div ref="float2" class="float-element absolute w-16 h-16 rounded-full bg-ethicalTeal/10 blur-xl"></div>
      <div ref="float3" class="float-element absolute w-24 h-24 rounded-full bg-compassionMint/15 blur-xl"></div>
    </div>

    <div class="section-inner relative z-10 mx-auto max-w-5xl px-6 py-16">
      <div ref="sectionHeading" class="section-heading mb-8 max-w-xl">
        <h2
          id="solutions-title"
          class="text-2xl font-semibold tracking-tight text-humaneGrey"
        >
          AI that works for healthcare
        </h2>
        <p class="section-lead mt-2 text-sm leading-relaxed text-humaneGrey/90">
          Purpose-built tools for the real constraints of clinical environments.
          Not generic automation, but systems tailored to how your teams
          actually work today.
        </p>
      </div>
      <div
        ref="cardsContainer"
        class="grid grid-3 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <article
          ref="card1"
          class="solution-card card card-soft rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)] group relative overflow-hidden"
        >
          <!-- Animated background gradient -->
          <div class="card-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-insightTeal/10 to-ethicalTeal/10"></div>
          
          <!-- Icon/Decoration -->
          <div class="card-icon-wrapper mb-3 relative z-10">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>

          <h3 class="text-base font-semibold text-humaneGrey relative z-10 group-hover:text-insightTeal transition-colors duration-300">
            Hospital intelligence
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
            Predictive analytics for bed management, staffing, and resource
            allocation, designed to support smoother patient flow.
          </p>
          <ul
            class="card-list mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-humaneGrey/90 relative z-10"
          >
            <li class="group-hover:translate-x-1 transition-transform duration-300">Capacity forecasting and surge planning</li>
            <li class="group-hover:translate-x-1 transition-transform duration-300 delay-75">Staff scheduling and workload insights</li>
            <li class="group-hover:translate-x-1 transition-transform duration-300 delay-150">Supply and resource utilization trends</li>
          </ul>
        </article>
        <article
          ref="card2"
          class="solution-card card card-soft rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)] group relative overflow-hidden"
        >
          <!-- Animated background gradient -->
          <div class="card-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-insightTeal/10 to-ethicalTeal/10"></div>
          
          <!-- Icon/Decoration -->
          <div class="card-icon-wrapper mb-3 relative z-10">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
            </div>
          </div>

          <h3 class="text-base font-semibold text-humaneGrey relative z-10 group-hover:text-insightTeal transition-colors duration-300">
            Clinician workflow support
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
            Tools that simplify chart review and documentation so clinicians can
            focus on listening, examining, and deciding, not clicking.
          </p>
          <ul
            class="card-list mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-humaneGrey/90 relative z-10"
          >
            <li class="group-hover:translate-x-1 transition-transform duration-300">Voice-to-documentation aligned to clinical notes</li>
            <li class="group-hover:translate-x-1 transition-transform duration-300 delay-75">Smart, context-aware alerts that reduce noise</li>
            <li class="group-hover:translate-x-1 transition-transform duration-300 delay-150">Evidence synthesis surfaced at the right moment</li>
          </ul>
        </article>
        <article
          ref="card3"
          class="solution-card card card-soft rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)] group relative overflow-hidden"
        >
          <!-- Animated background gradient -->
          <div class="card-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-insightTeal/10 to-ethicalTeal/10"></div>
          
          <!-- Icon/Decoration -->
          <div class="card-icon-wrapper mb-3 relative z-10">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
          </div>

          <h3 class="text-base font-semibold text-humaneGrey relative z-10 group-hover:text-insightTeal transition-colors duration-300">
            Secure data insights
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
            Privacy-conscious analytics for quality and population health teams,
            built on federated and privacy-preserving methods.
          </p>
          <ul
            class="card-list mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-humaneGrey/90 relative z-10"
          >
            <li class="group-hover:translate-x-1 transition-transform duration-300">Population health analytics and outcomes tracking</li>
            <li class="group-hover:translate-x-1 transition-transform duration-300 delay-75">Quality metrics with transparent methodology</li>
            <li class="group-hover:translate-x-1 transition-transform duration-300 delay-150">Federated learning with zero raw data exposure</li>
          </ul>
        </article>
      </div>
      <div
        ref="calloutCard"
        class="section-callout mt-8 rounded-xl border border-insightTeal bg-pureWhite p-6 shadow-sm group relative overflow-hidden"
      >
        <!-- Animated background on hover -->
        <div class="absolute inset-0 bg-gradient-to-r from-insightTeal/5 to-ethicalTeal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <h3 class="text-base font-semibold text-humaneGrey relative z-10 group-hover:text-insightTeal transition-colors duration-300">
          Patient-centric outcomes
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
          Remote monitoring, care coordination, and communication tools that are
          built around the realities of patients' lives, not just abstract
          metrics.
        </p>
      </div>
      <section
        ref="impactSection"
        class="impact mt-10 rounded-xl border border-insightTeal bg-pureWhite p-6 shadow-[0_16px_34px_rgba(36,111,102,0.18)] relative overflow-hidden"
      >
        <!-- Animated background pattern -->
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 2px 2px, #246F66 1px, transparent 0); background-size: 30px 30px;"></div>
        
        <div class="impact-header mb-4 relative z-10">
          <h3 class="text-base font-semibold text-humaneGrey">
            Our impact in numbers
          </h3>
          <p class="mt-1 text-sm leading-relaxed text-humaneGrey/90">
            Aqlis deployments are measured against clear, jointly defined
            clinical and operational outcomes.
          </p>
        </div>
        <div
          ref="impactGrid"
          class="impact-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4 relative z-10"
          aria-label="Impact statistics"
        >
          <div ref="impact1" class="impact-item space-y-1 group">
            <div class="impact-value text-xl font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
              98%
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Clinician satisfaction rate
            </div>
          </div>
          <div ref="impact2" class="impact-item space-y-1 group">
            <div class="impact-value text-xl font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
              2M+
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Patients supported annually
            </div>
          </div>
          <div ref="impact3" class="impact-item space-y-1 group">
            <div class="impact-value text-xl font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
              40%
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Average reduction in admin time
            </div>
          </div>
          <div ref="impact4" class="impact-item space-y-1 group">
            <div class="impact-value text-xl font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
              0
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Data breaches since founding
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SolutionsVectors from './SolutionsVectors.vue';

gsap.registerPlugin(ScrollTrigger);

const solutionsSection = ref(null);
const sectionHeading = ref(null);
const cardsContainer = ref(null);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const calloutCard = ref(null);
const impactSection = ref(null);
const impactGrid = ref(null);
const impact1 = ref(null);
const impact2 = ref(null);
const impact3 = ref(null);
const impact4 = ref(null);
const float1 = ref(null);
const float2 = ref(null);
const float3 = ref(null);

onMounted(() => {
  // Floating elements animation
  if (float1.value && float2.value && float3.value) {
    gsap.to(float1.value, {
      x: 100,
      y: -50,
      duration: 8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
    gsap.to(float2.value, {
      x: -80,
      y: 60,
      duration: 10,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
    gsap.to(float3.value, {
      x: 120,
      y: 40,
      duration: 12,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });
  }

  // Section heading animation
  if (sectionHeading.value) {
    gsap.fromTo(
      sectionHeading.value,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionHeading.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // Cards stagger animation
  if (card1.value && card2.value && card3.value) {
    gsap.fromTo(
      [card1.value, card2.value, card3.value],
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsContainer.value,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // Callout card animation
  if (calloutCard.value) {
    gsap.fromTo(
      calloutCard.value,
      {
        opacity: 0,
        x: -30,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: calloutCard.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // Impact section animation
  if (impactSection.value) {
    gsap.fromTo(
      impactSection.value,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: impactSection.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }

  // Impact items stagger animation
  if (impact1.value && impact2.value && impact3.value && impact4.value) {
    gsap.fromTo(
      [impact1.value, impact2.value, impact3.value, impact4.value],
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: impactGrid.value,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
/* Floating elements positioning */
.floating-elements {
  overflow: hidden;
}

.float-element {
  will-change: transform;
  animation: float-gentle 8s ease-in-out infinite;
}

.float-element:nth-child(1) {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.float-element:nth-child(2) {
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.float-element:nth-child(3) {
  bottom: 15%;
  left: 15%;
  animation-delay: 4s;
}

@keyframes float-gentle {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
    opacity: 0.8;
  }
}

/* Solution card enhancements */
.solution-card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(54, 126, 114, 0.25);
  border-color: rgba(54, 126, 114, 0.5);
}

.card-gradient {
  border-radius: 0.75rem;
  transition: opacity 0.2s ease;
}

.card-icon-wrapper {
  transition: transform 0.3s ease;
}

.solution-card:hover .card-icon-wrapper {
  transform: translateY(-5px);
}

/* List item animations */
.card-list li {
  transition: transform 0.2s ease, color 0.2s ease;
}

.solution-card:hover .card-list li {
  color: rgba(56, 56, 56, 1);
}

/* Impact section enhancements */
.impact-item {
  transition: transform 0.3s ease;
  cursor: default;
}

.impact-item:hover {
  transform: translateY(-4px) scale(1.05);
}

.impact-value {
  transition: all 0.3s ease;
  position: relative;
}

.impact-item:hover .impact-value {
  transform: scale(1.1);
}

/* Section callout enhancements */
.section-callout {
  transition: all 0.3s ease;
}

.section-callout:hover {
  transform: translateX(4px);
  box-shadow: 0 12px 30px rgba(54, 126, 114, 0.15);
}

/* Smooth transitions for all interactive elements */
.solution-card,
.section-callout,
.impact-item {
  will-change: transform;
  backface-visibility: hidden;
}
</style>
