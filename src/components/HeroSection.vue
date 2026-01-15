<template>
  <section
    id="hero"
    class="hero relative overflow-hidden min-h-screen flex items-center animate-in"
    aria-labelledby="hero-title"
    data-parallax="0.3"
  >
    <div class="hero-background absolute inset-0 bg-gradient-to-br from-pureWhite via-compassionMint/30 to-compassionMint/50"></div>
    <div class="hero-pattern absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 2px 2px, #246F66 1px, transparent 0); background-size: 40px 40px;"></div>
    <div class="hero-glow absolute -top-40 -right-40 h-80 w-80 rounded-full bg-insightTeal/20 blur-3xl animate-pulse-slow" data-parallax="0.5"></div>
    <div class="hero-glow-2 absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-compassionMint/30 blur-3xl animate-pulse-slow" data-parallax="0.4"></div>
    <div class="hero-particles absolute inset-0 overflow-hidden">
      <div class="particle absolute w-2 h-2 bg-insightTeal/20 rounded-full" style="left: 20%; top: 30%; animation: float 6s ease-in-out infinite;"></div>
      <div class="particle absolute w-1.5 h-1.5 bg-ethicalTeal/20 rounded-full" style="left: 60%; top: 50%; animation: float 8s ease-in-out infinite 2s;"></div>
      <div class="particle absolute w-2 h-2 bg-compassionMint/30 rounded-full" style="left: 80%; top: 20%; animation: float 7s ease-in-out infinite 1s;"></div>
    </div>
    
    <!-- Advanced Vector Animations -->
    <FloatingVectors :count="8" class="absolute inset-0 z-0" />
    <AdvancedVectors :intensity="'high'" class="absolute inset-0 z-0" />
    <GeometricPatterns class="absolute inset-0 z-0" />
    <AnimatedBackground class="absolute inset-0 z-0" />
    
    <!-- Animated Vector Icons -->
    <div class="hero-vector-icons absolute inset-0 pointer-events-none z-0">
      <AnimatedIcon 
        type="healthcare" 
        :size="120" 
        color="#367e72" 
        :opacity="0.15"
        class="absolute top-20 right-20"
        :animate-on-scroll="true"
      />
      <AnimatedIcon 
        type="shield" 
        :size="100" 
        color="#246f66" 
        :opacity="0.12"
        class="absolute bottom-32 left-16"
        :animate-on-scroll="true"
      />
      <AnimatedIcon 
        type="heart" 
        :size="80" 
        color="#aec8b9" 
        :opacity="0.18"
        class="absolute top-1/2 right-1/4"
        :animate-on-scroll="true"
      />
    </div>
    
    <div
      class="hero-inner relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr] z-10"
    >
      <div class="hero-copy space-y-6">
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
      <div class="hero-visual mt-8 flex justify-end lg:mt-0" aria-hidden="true">
        <div
          class="hero-visual-card group relative w-full max-w-sm rounded-3xl border-2 border-compassionMint/50 bg-gradient-to-br from-pureWhite via-pureWhite to-compassionMint/20 p-6 shadow-[0_20px_60px_rgba(54,126,114,0.25)] backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_70px_rgba(54,126,114,0.35)]"
        >
          <div class="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-insightTeal/20 via-ethicalTeal/20 to-insightTeal/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
          <div class="relative">
            <div class="hero-visual-header mb-5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="h-2 w-2 rounded-full bg-insightTeal animate-pulse"></div>
                <span class="hero-visual-title text-sm font-bold text-humaneGrey">
                  Clinical signal overview
                </span>
              </div>
              <span
                class="hero-visual-pill inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-compassionMint to-compassionMint/80 px-3 py-1.5 text-[0.7rem] font-semibold text-humaneGrey shadow-sm"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-insightTeal animate-pulse"></span>
                Assisting
              </span>
            </div>
            <div class="hero-visual-metrics mb-5 flex flex-col gap-4">
              <div class="metric flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <span class="metric-label text-xs font-semibold text-humaneGrey/80">
                    Alert clarity
                  </span>
                  <span class="metric-value text-xs font-bold text-insightTeal flex items-center gap-1">
                    <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    32%
                  </span>
                </div>
                <div
                  class="metric-bar relative h-2.5 w-full overflow-hidden rounded-full bg-compassionMint/50"
                >
                  <div
                    class="metric-bar-fill h-full w-[72%] rounded-full bg-gradient-to-r from-insightTeal to-ethicalTeal shadow-sm transition-all duration-1000 ease-out"
                  ></div>
                </div>
              </div>
              <div class="metric flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <span class="metric-label text-xs font-semibold text-humaneGrey/80">Review time</span>
                  <span class="metric-value text-xs font-bold text-insightTeal flex items-center gap-1">
                    <svg class="h-3 w-3 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    21%
                  </span>
                </div>
                <div
                  class="metric-bar relative h-2.5 w-full overflow-hidden rounded-full bg-compassionMint/50"
                >
                  <div
                    class="metric-bar-fill metric-bar-fill-alt h-full w-[54%] rounded-full bg-gradient-to-r from-insightTeal to-ethicalTeal shadow-sm transition-all duration-1000 ease-out"
                  ></div>
                </div>
              </div>
              <div class="metric flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <span class="metric-label text-xs font-semibold text-humaneGrey/80">
                    Clinician confidence
                  </span>
                  <span class="metric-value text-xs font-bold text-insightTeal flex items-center gap-1">
                    <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    27%
                  </span>
                </div>
                <div
                  class="metric-bar relative h-2.5 w-full overflow-hidden rounded-full bg-compassionMint/50"
                >
                  <div
                    class="metric-bar-fill metric-bar-fill-strong h-full w-[86%] rounded-full bg-gradient-to-r from-insightTeal to-ethicalTeal shadow-sm transition-all duration-1000 ease-out"
                  ></div>
                </div>
              </div>
            </div>
            <div class="hero-visual-tags flex flex-wrap gap-2 pt-4 border-t border-compassionMint/40">
              <span
                class="hero-visual-tag inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-compassionMint/80 to-compassionMint px-3 py-1.5 text-[0.7rem] font-semibold text-humaneGrey shadow-sm transition-all duration-200 hover:scale-105"
              >
                <svg class="h-3 w-3 text-insightTeal" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                HIPAA aligned
              </span>
              <span
                class="hero-visual-tag inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-compassionMint/80 to-compassionMint px-3 py-1.5 text-[0.7rem] font-semibold text-humaneGrey shadow-sm transition-all duration-200 hover:scale-105"
              >
                <svg class="h-3 w-3 text-insightTeal" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
                Zero data export
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FloatingVectors from './FloatingVectors.vue';
import AnimatedIcon from './AnimatedIcon.vue';
import AdvancedVectors from './AdvancedVectors.vue';
import GeometricPatterns from './GeometricPatterns.vue';
import AnimatedBackground from './AnimatedBackground.vue';
</script>
