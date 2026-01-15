<template>
  <section
    id="operate"
    class="section section-behaviors scroll-animate relative overflow-hidden"
    aria-labelledby="operate-title"
  >
    <OperateVectors class="absolute inset-0 opacity-50" />
    <div class="section-inner relative z-10 mx-auto max-w-5xl px-6 py-4">
      <div class="section-heading mb-8 max-w-xl">
        <h2
          id="operate-title"
          class="text-2xl font-semibold tracking-tight text-humaneGrey"
        >
          How we operate as a partner
        </h2>
        <p class="section-lead mt-2 text-sm leading-relaxed text-humaneGrey/90">
          Beyond technology, Aqlis is defined by how we work with healthcare
          organizations and their communities.
        </p>
      </div>
      <div class="behaviors-layout grid gap.dash.w-8 md:grid-cols-[1fr_1fr] pb-10">
        <div class="behaviors-left">
          <ul class="behaviors-list grid grid-cols-1 gap-6">
            <li class="behavior-item group relative scroll-animate animate-fade-left" data-stagger-item="true">
              <div class="flex items-start gap-4">
                <div class="behavior-icon-wrapper flex-shrink-0">
                  <div class="behavior-icon flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-insightTeal/30 group-hover:to-ethicalTeal/30">
                    <svg class="h-6 w-6 text-insightTeal transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-humaneGrey transition-colors duration-300 group-hover:text-insightTeal mb-2">
                    Accessible UI and UX
                  </h3>
                  <p class="text-sm leading-relaxed text-humaneGrey/80">
                    Interfaces that are legible in demanding environments with careful
                    attention to contrast and clarity.
                  </p>
                </div>
              </div>
            </li>
            <li class="behavior-item group relative scroll-animate animate-fade-left" data-stagger-item="true">
              <div class="flex items-start gap-4">
                <div class="behavior-icon-wrapper flex-shrink-0">
                  <div class="behavior-icon flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-insightTeal/30 group-hover:to-ethicalTeal/30">
                    <svg class="h-6 w-6 text-insightTeal transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-humaneGrey transition-colors duration-300 group-hover:text-insightTeal mb-2">
                    Transparent onboarding
                  </h3>
                  <p class="text-sm leading-relaxed text-humaneGrey/80">
                    Guided rollouts with clear education about capabilities, limits,
                    and escalation paths for every team.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="behaviors-right">
          <ul class="behaviors-list grid grid-cols-1 gap-6">
            <li class="behavior-item behavior-item-right group relative scroll-animate animate-fade-right" data-stagger-item="true">
              <div class="flex items-start gap-4">
                <div class="behavior-icon-wrapper flex-shrink-0">
                  <div class="behavior-icon flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-insightTeal/30 group-hover:to-ethicalTeal/30">
                    <svg class="h-6 w-6 text-insightTeal transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-humaneGrey transition-colors duration-300 group-hover:text-insightTeal mb-2">
                    Ethical AI testing
                  </h3>
                  <p class="text-sm leading-relaxed text-humaneGrey/80">
                    Structured evaluation with clinicians, ethicists, and governance
                    boards before any system is relied on in practice.
                  </p>
                </div>
              </div>
            </li>
            <li class="behavior-item behavior-item-right group relative scroll-animate animate-fade-right" data-stagger-item="true">
              <div class="flex items-start gap-4">
                <div class="behavior-icon-wrapper flex-shrink-0">
                  <div class="behavior-icon flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-insightTeal/30 group-hover:to-ethicalTeal/30">
                    <svg class="h-6 w-6 text-insightTeal transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-humaneGrey transition-colors duration-300 group-hover:text-insightTeal mb-2">
                    Privacy-first architecture
                  </h3>
                  <p class="text-sm leading-relaxed text-humaneGrey/80">
                    Deployment patterns that keep sensitive data within your control
                    with transparent documentation of data flows.
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <!-- <aside
            class="behaviors-aside mt-8 scroll-animate animate-fade-right"
            aria-label="Engagement snapshot"
          >
          <div
            class="behaviors-aside-card group relative overflow-hidden rounded-2xl border-2 border-compassionMint/50 bg-gradient-to-br from-pureWhite to-compassionMint/10 p-6 shadow-[0_10px_30px_rgba(54,126,114,0.15)] transition-all duration-500 hover:border-insightTeal hover:shadow-[0_20px_50px_rgba(54,126,114,0.25)] hover:scale-[1.02]"
          >
            <div class="absolute -inset-0.5 bg-gradient-to-r from-insightTeal/20 via-ethicalTeal/20 to-insightTeal/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-4">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20">
                  <svg class="h-5 w-5 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-humaneGrey transition-colors duration-300 group-hover:text-insightTeal">
                  Typical engagement
                </h3>
              </div>
              <ul
                class="aside-list space-y-3 pl-2 text-sm leading-relaxed text-humaneGrey/80"
              >
                <li class="flex items-start gap-2">
                  <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-insightTeal/20 text-xs font-bold text-insightTeal mt-0.5">1</span>
                  <span>Discovery sessions with clinical, IT, and privacy stakeholders</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-insightTeal/20 text-xs font-bold text-insightTeal mt-0.5">2</span>
                  <span>Jointly defined safety, governance, and performance criteria</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-insightTeal/20 text-xs font-bold text-insightTeal mt-0.5">3</span>
                  <span>Measured pilot in a focused setting before wider rollout</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-insightTeal/20 text-xs font-bold text-insightTeal mt-0.5">4</span>
                  <span>Ongoing monitoring, feedback channels, and retraining aligned to policy</span>
                </li>
              </ul>
            </div>
          </div>
          </aside> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OperateVectors from './OperateVectors.vue';
</script>

<style scoped>
.behaviors-layout {
  align-items: flex-start;
}

.behaviors-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.behavior-item {
  position: relative;
  min-height: 154px;
  padding: 1.6rem 1.8rem;
  border-radius: 1.25rem;
  background:
    radial-gradient(circle at top left, rgba(54, 126, 114, 0.08), transparent 55%),
    rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(54, 126, 114, 0.18);
  box-shadow: 0 10px 26px rgba(36, 111, 102, 0.12);
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease;
}

.behavior-item::before {
  content: '';
  position: absolute;
  inset: -40%;
  background: radial-gradient(
    circle at top right,
    rgba(54, 126, 114, 0.16),
    transparent 55%
  );
  opacity: 0;
  transform: translate3d(20px, -10px, 0);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.behavior-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(36, 111, 102, 0.18);
  border-color: #367e72;
}

.behavior-item:hover::before {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.behavior-icon-wrapper {
  position: relative;
}

.behavior-icon {
  position: relative;
  box-shadow: 0 0 0 1px rgba(54, 126, 114, 0.16);
}

.behavior-icon::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(54, 126, 114, 0.35), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.behavior-item:hover .behavior-icon::after {
  opacity: 1;
}

.behavior-item h3 {
  letter-spacing: -0.01em;
}

.behavior-item p {
  line-height: 1.55;
}

.aside-list li {
  transition: all 0.2s ease;
}

.aside-list li:hover {
  transform: translateX(5px);
  color: #367e72;
}
</style>
