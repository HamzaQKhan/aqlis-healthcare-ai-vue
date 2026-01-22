<template>
  <section class="section section-cta scroll-animate relative overflow-hidden" aria-labelledby="cta-title">
    <!-- Subtle top border/shadow for separation -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-insightTeal/30 to-transparent z-10"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-compassionMint/10 via-insightTeal/8 to-compassionMint/12"></div>
    
    <div class="section-inner section-inner-cta relative z-10 mx-auto max-w-6xl px-6 py-8">
      <div class="cta-layout grid gap-8 md:grid-cols-[1.2fr_1fr] items-center">
        <!-- Left Side - Main CTA Content -->
        <div class="cta-main-content">
          <div class="cta-icon-wrapper inline-flex items-center justify-center mb-3">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/30 to-ethicalTeal/30 rounded-full blur-2xl animate-pulse"></div>
              <div class="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 backdrop-blur-sm border-2 border-insightTeal/30">
                <svg class="h-7 w-7 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <h2
            id="cta-title"
            class="text-2xl font-bold tracking-tight text-white mb-3 sm:text-3xl bg-gradient-to-r from-humaneGrey via-insightTeal to-humaneGrey bg-clip-text text-transparent"
          >
            Ready to build more humane healthcare AI?
          </h2>
          <p class="text-sm leading-relaxed text-white/90 sm:text-base mb-5">
            Join healthcare organizations that are reshaping clinical workflows
            with ethical, privacy-conscious AI that keeps humans at the center of
            care.
          </p>
          
          <div class="cta-actions flex flex-wrap items-center gap-3">
            <button
              class="btn-primary group relative inline-flex min-w-[160px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-ethicalTeal via-insightTeal to-ethicalTeal px-5 py-2.5 text-sm font-bold text-pureWhite shadow-[0_8px_24px_rgba(36,111,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(36,111,102,0.5)]"
              type="button"
            >
              <span class="relative z-10">Talk to our team</span>
              <svg class="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button
              class="btn-ghost group inline-flex items-center justify-center gap-2 rounded-full border-2 border-insightTeal/40 bg-pureWhite/50 px-5 py-2.5 text-sm font-semibold text-insightTeal backdrop-blur-sm transition-all duration-300 hover:border-insightTeal hover:bg-compassionMint/70 hover:scale-105 hover:shadow-md"
              type="button"
            >
              <svg class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download overview
            </button>
          </div>
        </div>

        <!-- Right Side - Feature Cards -->
        <div class="cta-features grid grid-cols-1 gap-3">
          <div class="feature-card group relative overflow-hidden rounded-lg border border-compassionMint/30 bg-gradient-to-br from-pureWhite/80 to-compassionMint/10 p-3 backdrop-blur-sm transition-all duration-300 hover:border-insightTeal/50 hover:shadow-md hover:-translate-y-0.5">
            <div class="flex items-center gap-2.5">
              <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                <svg class="h-4 w-4 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-bold text-humaneGrey mb-0.5 group-hover:text-insightTeal transition-colors duration-300">
                  Expert Support
                </h3>
                <p class="text-xs leading-snug text-humaneGrey/80 line-clamp-2">
                  Dedicated team of healthcare AI specialists ready to guide your implementation journey.
                </p>
              </div>
            </div>
          </div>

          <div class="feature-card group relative overflow-hidden rounded-lg border border-compassionMint/30 bg-gradient-to-br from-pureWhite/80 to-compassionMint/10 p-3 backdrop-blur-sm transition-all duration-300 hover:border-insightTeal/50 hover:shadow-md hover:-translate-y-0.5">
            <div class="flex items-center gap-2.5">
              <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                <svg class="h-4 w-4 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-bold text-humaneGrey mb-0.5 group-hover:text-insightTeal transition-colors duration-300">
                  Fast Implementation
                </h3>
                <p class="text-xs leading-snug text-humaneGrey/80 line-clamp-2">
                  Get up and running quickly with our streamlined deployment process and comprehensive documentation.
                </p>
              </div>
            </div>
          </div>

          <div class="feature-card group relative overflow-hidden rounded-lg border border-compassionMint/30 bg-gradient-to-br from-pureWhite/80 to-compassionMint/10 p-3 backdrop-blur-sm transition-all duration-300 hover:border-insightTeal/50 hover:shadow-md hover:-translate-y-0.5">
            <div class="flex items-center gap-2.5">
              <div class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                <svg class="h-4 w-4 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-bold text-humaneGrey mb-0.5 group-hover:text-insightTeal transition-colors duration-300">
                  Proven Results
                </h3>
                <p class="text-xs leading-snug text-humaneGrey/80 line-clamp-2">
                  Join organizations already seeing measurable improvements in efficiency and patient outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-icon-wrapper {
  animation: float-gentle 4s ease-in-out infinite;
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(54, 126, 114, 0.1), rgba(36, 111, 102, 0.05));
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

.feature-card:hover::before {
  opacity: 1;
}
</style>
