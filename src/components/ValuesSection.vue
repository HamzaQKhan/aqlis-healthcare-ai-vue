<template>
  <section
    id="values"
    class="section section-values scroll-animate relative overflow-hidden z-20"
    style="background-color: transparent; position: relative;"
    aria-labelledby="values-title"
  >
    <!-- Subtle top border/shadow for separation -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-insightTeal/30 to-transparent"></div>
    <div class="section-inner mx-auto max-w-5xl px-6 py-16">
      <div class="section-heading mb-12 max-w-2xl relative">
        <AnimatedIcon 
          type="heart" 
          :size="60" 
          color="#367e72" 
          :opacity="0.1"
          class="absolute -left-8 top-0"
          :animate-on-scroll="true"
        />
        <h2
          id="values-title"
          class="text-3xl font-bold tracking-tight text-white sm:text-4xl relative z-10"
        >
          Values that guide every decision
        </h2>
        <p class="section-lead mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
          Healthcare demands the highest ethical standards. For Aqlis, values
          are not marketing language, they are operational requirements baked
          into every system we deploy.
        </p>
      </div>
      <div
        class="grid grid-4 gap-5 md:grid-cols-2 lg:grid-cols-4"
        data-stagger="true"
        data-stagger-delay="100"
      >
        <article
          class="card group relative overflow-hidden rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)] transition-all duration-500"
          data-stagger-item="true"
        >
          <!-- Animated background gradient -->
          <div class="card-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-insightTeal/10 to-ethicalTeal/10"></div>
          
          <!-- Icon/Decoration -->
          <div class="card-icon-wrapper mb-3 relative z-10">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-base font-semibold text-humaneGrey relative z-10 group-hover:text-insightTeal transition-colors duration-300">
            Humane technology
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
            AI that amplifies clinical judgement, never replaces it. Every model
            is designed with compassion and accountability at its core.
          </p>
        </article>
        <article
          class="card group relative overflow-hidden rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)] transition-all duration-500"
          data-stagger-item="true"
        >
          <!-- Animated background gradient -->
          <div class="card-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-insightTeal/10 to-ethicalTeal/10"></div>
          
          <!-- Icon/Decoration -->
          <div class="card-icon-wrapper mb-3 relative z-10">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-base font-semibold text-humaneGrey relative z-10 group-hover:text-insightTeal transition-colors duration-300">
            Sustainability
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
            Responsible computing with minimal environmental impact. Architected
            for safety, maintainability, and long-term clinical use, not
            short-lived pilots.
          </p>
        </article>
        <article
          class="card group relative overflow-hidden rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)] transition-all duration-500"
          data-stagger-item="true"
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
            Privacy consciousness
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
            Zero-trust architecture, data minimization, and encryption end to
            end. Patient data stays protected and under your control.
          </p>
        </article>
        <article
          class="card group relative overflow-hidden rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)] transition-all duration-500"
          data-stagger-item="true"
        >
          <!-- Animated background gradient -->
          <div class="card-gradient absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-insightTeal/10 to-ethicalTeal/10"></div>
          
          <!-- Icon/Decoration -->
          <div class="card-icon-wrapper mb-3 relative z-10">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-insightTeal to-ethicalTeal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
          </div>
          <h3 class="text-base font-semibold text-humaneGrey relative z-10 group-hover:text-insightTeal transition-colors duration-300">Empathy</h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90 relative z-10">
            Built alongside clinicians, nurses, and patients. We listen to real
            constraints in care settings before we design anything.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedIcon from './AnimatedIcon.vue';
</script>

<style scoped>
/* Card enhancements to match SolutionsSection */
.card {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
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

.card:hover .card-icon-wrapper {
  transform: translateY(-5px);
}
</style>
