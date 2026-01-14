<template>
  <header
    class="site-header sticky top-0 z-50 border-b border-compassionMint/40 bg-gradient-to-b from-pureWhite/95 via-pureWhite/90 to-pureWhite/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(36,111,102,0.12)] transition-all duration-300"
    :class="{ 'shadow-[0_8px_30px_rgba(36,111,102,0.2)]': scrolled }"
  >
    <div class="header-glow absolute inset-0 bg-gradient-to-r from-insightTeal/5 via-transparent to-insightTeal/5 pointer-events-none"></div>
    <div
      class="site-header-inner relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5"
    >
      <div class="brand flex items-center gap-3 group cursor-pointer">
        <div
          class="brand-mark relative h-10 w-10 rounded-full bg-gradient-to-br from-compassionMint via-insightTeal to-ethicalTeal shadow-[0_4px_12px_rgba(36,111,102,0.25)] ring-4 ring-compassionMint/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(36,111,102,0.35)] group-hover:ring-compassionMint/50"
          aria-hidden="true"
        >
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
          <div class="absolute inset-2 rounded-full bg-gradient-to-br from-compassionMint to-insightTeal opacity-60"></div>
        </div>
        <div class="brand-text flex flex-col">
          <span
            class="brand-name text-[0.85rem] font-bold uppercase tracking-[0.2em] text-humaneGrey transition-colors duration-300 group-hover:text-insightTeal"
          >
            Aqlis
          </span>
          <span class="brand-tagline text-[0.75rem] font-medium text-insightTeal/90">
            Ethical Healthcare AI
          </span>
        </div>
      </div>
      <nav
        class="site-nav hidden items-center gap-6 text-sm md:flex"
        aria-label="Primary"
      >
        <a
          href="#solutions"
          class="nav-link group relative px-2 py-1.5 text-humaneGrey/85 font-medium transition-all duration-200 hover:text-insightTeal hover:scale-105"
        >
          Solutions
          <span class="nav-link-underline absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-insightTeal to-ethicalTeal transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#values"
          class="nav-link group relative px-2 py-1.5 text-humaneGrey/85 font-medium transition-all duration-200 hover:text-insightTeal hover:scale-105"
        >
          Values
          <span class="nav-link-underline absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-insightTeal to-ethicalTeal transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#operate"
          class="nav-link group relative px-2 py-1.5 text-humaneGrey/85 font-medium transition-all duration-200 hover:text-insightTeal hover:scale-105"
        >
          How we operate
          <span class="nav-link-underline absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-insightTeal to-ethicalTeal transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#trust"
          class="nav-link group relative px-2 py-1.5 text-humaneGrey/85 font-medium transition-all duration-200 hover:text-insightTeal hover:scale-105"
        >
          Trust &amp; security
          <span class="nav-link-underline absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-insightTeal to-ethicalTeal transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>
      <div class="nav-actions flex items-center gap-3">
        <button
          class="btn-secondary group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-insightTeal/60 bg-pureWhite px-5 py-2.5 text-xs font-semibold text-insightTeal shadow-[0_2px_8px_rgba(54,126,114,0.15)] transition-all duration-300 hover:border-insightTeal hover:bg-gradient-to-r hover:from-compassionMint/50 hover:to-compassionMint hover:shadow-[0_4px_16px_rgba(54,126,114,0.25)] hover:scale-105 sm:text-sm"
          type="button"
        >
          <span class="relative z-10">Download overview</span>
          <div class="absolute inset-0 bg-gradient-to-r from-insightTeal/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
        <button
          class="btn-primary group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-ethicalTeal via-insightTeal to-ethicalTeal px-6 py-2.5 text-xs font-bold text-pureWhite shadow-[0_8px_24px_rgba(36,111,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(36,111,102,0.5)] sm:text-sm"
          type="button"
        >
          <span class="relative z-10">Talk to our team</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-link:hover .nav-link-underline {
  width: 100%;
}

.header-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}
</style>
