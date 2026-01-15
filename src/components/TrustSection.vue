<template>
  <section
    id="trust"
    class="section section-trust scroll-animate relative overflow-hidden"
    aria-labelledby="trust-title"
  >
    <TrustVectors class="absolute inset-0 opacity-45" />
    <div class="section-inner section-inner-narrow mx-auto max-w-5xl px-6 py-16 relative z-10">
      <div class="trust-layout grid gap-12 items-start md:grid-cols-2">
        <div class="trust-copy">
          <div class="section-heading mb-8 relative">
            <div class="icon-container absolute -left-10 top-0 w-16 h-16 flex items-center justify-center">
              <div class="icon-glow absolute inset-0 rounded-full bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 blur-xl opacity-60"></div>
              <svg class="relative z-10 w-10 h-10 text-insightTeal opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2
              id="trust-title"
              class="text-3xl font-bold tracking-tight text-humaneGrey relative z-10 mb-4 bg-gradient-to-r from-humaneGrey to-insightTeal bg-clip-text text-transparent pl-2"
            >
              Your data security is our priority
            </h2>
            <p
              class="section-lead text-base leading-relaxed text-humaneGrey/90 relative z-10 mb-6"
            >
              We understand the weight of responsibility that comes with
              healthcare data. Aqlis security and governance practices are built
              to exceed industry expectations, not just meet them.
            </p>
          </div>

          <!-- Security Stats -->
          <div class="security-stats grid grid-cols-2 gap-4 mb-6">
            <div class="stat-card group relative overflow-hidden rounded-xl border border-compassionMint/30 bg-gradient-to-br from-pureWhite to-compassionMint/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-insightTeal/50 hover:shadow-md">
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-humaneGrey">100%</div>
                  <div class="text-xs text-humaneGrey/70">Encrypted</div>
                </div>
              </div>
            </div>
            <div class="stat-card group relative overflow-hidden rounded-xl border border-compassionMint/30 bg-gradient-to-br from-pureWhite to-compassionMint/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-insightTeal/50 hover:shadow-md">
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold text-humaneGrey">0</div>
                  <div class="text-xs text-humaneGrey/70">Breaches</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Trust Note -->
          <div
            class="trust-note relative overflow-hidden rounded-xl border-l-4 border-insightTeal bg-gradient-to-r from-insightTeal/8 via-insightTeal/5 to-transparent backdrop-blur-sm p-5 mb-6"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-insightTeal/5 to-transparent rounded-full blur-2xl -mr-16 -mt-16"></div>
            <div class="flex items-start gap-3 relative z-10">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-insightTeal/20 flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm leading-relaxed text-humaneGrey/90">
                Aqlis systems are deployed with clear documentation, audit trails,
                and ongoing monitoring so your teams can see how AI behaves over
                time, not just on day one.
              </p>
            </div>
          </div>

          <!-- Security Badges -->
          <div class="security-badges flex flex-wrap gap-3">
            <div class="badge-item flex items-center gap-2 px-4 py-2 rounded-lg border border-compassionMint/30 bg-pureWhite/50 backdrop-blur-sm text-xs font-medium text-humaneGrey/80 hover:border-insightTeal/50 hover:bg-insightTeal/5 transition-all duration-300">
              <svg class="w-4 h-4 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>HIPAA Compliant</span>
            </div>
            <div class="badge-item flex items-center gap-2 px-4 py-2 rounded-lg border border-compassionMint/30 bg-pureWhite/50 backdrop-blur-sm text-xs font-medium text-humaneGrey/80 hover:border-insightTeal/50 hover:bg-insightTeal/5 transition-all duration-300">
              <svg class="w-4 h-4 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>SOC 2 Type II</span>
            </div>
            <div class="badge-item flex items-center gap-2 px-4 py-2 rounded-lg border border-compassionMint/30 bg-pureWhite/50 backdrop-blur-sm text-xs font-medium text-humaneGrey/80 hover:border-insightTeal/50 hover:bg-insightTeal/5 transition-all duration-300">
              <svg class="w-4 h-4 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>AES-256</span>
            </div>
          </div>
        </div>
        <div class="trust-cards grid gap-5 md:grid-cols-2" data-stagger="true" data-stagger-delay="100">
          <article
            class="trust-card group relative overflow-hidden rounded-2xl border-2 border-compassionMint/50 bg-gradient-to-br from-pureWhite via-pureWhite to-compassionMint/5 p-6 shadow-[0_8px_24px_rgba(54,126,114,0.12)] transition-all duration-500 hover:border-insightTeal hover:shadow-[0_16px_40px_rgba(54,126,114,0.2)] hover:-translate-y-2"
            data-stagger-item="true"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/0 via-insightTeal/0 to-insightTeal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
                  HIPAA aligned
                </h3>
              </div>
              <p class="text-sm leading-relaxed text-humaneGrey/90">
                Designed for full alignment with HIPAA requirements across data
                handling, access, and retention policies.
              </p>
            </div>
          </article>
          <article
            class="trust-card group relative overflow-hidden rounded-2xl border-2 border-compassionMint/50 bg-gradient-to-br from-pureWhite via-pureWhite to-compassionMint/5 p-6 shadow-[0_8px_24px_rgba(54,126,114,0.12)] transition-all duration-500 hover:border-insightTeal hover:shadow-[0_16px_40px_rgba(54,126,114,0.2)] hover:-translate-y-2"
            data-stagger-item="true"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/0 via-insightTeal/0 to-insightTeal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
                  End-to-end encryption
                </h3>
              </div>
              <p class="text-sm leading-relaxed text-humaneGrey/90">
                AES-256 encryption in transit and at rest, with options to keep
                all sensitive data within your own boundary.
              </p>
            </div>
          </article>
          <article
            class="trust-card group relative overflow-hidden rounded-2xl border-2 border-compassionMint/50 bg-gradient-to-br from-pureWhite via-pureWhite to-compassionMint/5 p-6 shadow-[0_8px_24px_rgba(54,126,114,0.12)] transition-all duration-500 hover:border-insightTeal hover:shadow-[0_16px_40px_rgba(54,126,114,0.2)] hover:-translate-y-2"
            data-stagger-item="true"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/0 via-insightTeal/0 to-insightTeal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
                  Regular audits
                </h3>
              </div>
              <p class="text-sm leading-relaxed text-humaneGrey/90">
                Independent security assessments and penetration testing, aligned
                with SOC-style controls and reporting.
              </p>
            </div>
          </article>
          <article
            class="trust-card group relative overflow-hidden rounded-2xl border-2 border-compassionMint/50 bg-gradient-to-br from-pureWhite via-pureWhite to-compassionMint/5 p-6 shadow-[0_8px_24px_rgba(54,126,114,0.12)] transition-all duration-500 hover:border-insightTeal hover:shadow-[0_16px_40px_rgba(54,126,114,0.2)] hover:-translate-y-2"
            data-stagger-item="true"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/0 via-insightTeal/0 to-insightTeal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-3">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-humaneGrey group-hover:text-insightTeal transition-colors duration-300">
                  Transparency reports
                </h3>
              </div>
              <p class="text-sm leading-relaxed text-humaneGrey/90">
                Clear reporting on performance, reliability, and bias monitoring so
                governance teams stay informed.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TrustVectors from './TrustVectors.vue';
</script>

<style scoped>
.trust-card {
  position: relative;
}

.trust-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(54, 126, 114, 0.1), rgba(36, 111, 102, 0.05));
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

.trust-card:hover::before {
  opacity: 1;
}

.icon-container {
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}
</style>
