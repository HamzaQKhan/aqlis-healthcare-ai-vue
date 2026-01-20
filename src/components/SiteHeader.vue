<template>
  <header
    class="site-header border-b border-compassionMint/20 shadow-[0_4px_20px_rgba(36,111,102,0.06)] transition-all duration-300"
    :class="{ 'shadow-[0_8px_30px_rgba(36,111,102,0.12)] border-compassionMint/30': scrolled }"
  >
    <div class="header-glow absolute inset-0 bg-gradient-to-r from-insightTeal/5 via-transparent to-insightTeal/5 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
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
      </nav>
      <div class="nav-actions flex items-center gap-3">
        <button
          class="btn-secondary hidden md:inline-flex group relative items-center gap-2 overflow-hidden rounded-full border-2 border-insightTeal/60 bg-pureWhite px-5 py-2.5 text-xs font-semibold text-insightTeal shadow-[0_2px_8px_rgba(54,126,114,0.15)] transition-all duration-300 hover:border-insightTeal hover:bg-gradient-to-r hover:from-compassionMint/50 hover:to-compassionMint hover:shadow-[0_4px_16px_rgba(54,126,114,0.25)] hover:scale-105 sm:text-sm"
          type="button"
        >
          <span class="relative z-10">Download overview</span>
          <div class="absolute inset-0 bg-gradient-to-r from-insightTeal/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </button>
        <button
          class="btn-primary hidden md:inline-flex group relative items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-ethicalTeal via-insightTeal to-ethicalTeal px-6 py-2.5 text-xs font-bold text-pureWhite shadow-[0_8px_24px_rgba(36,111,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(36,111,102,0.5)] sm:text-sm"
          type="button"
        >
          <span class="relative z-10">Talk to our team</span>
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
        <!-- Hamburger Menu Button (Mobile Only) -->
        <button
          @click="toggleMobileMenu"
          class="mobile-menu-btn md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg border border-compassionMint/30 bg-pureWhite/80 backdrop-blur-sm text-humaneGrey transition-all duration-300 hover:border-insightTeal hover:bg-insightTeal/10 hover:text-insightTeal"
          type="button"
          aria-label="Toggle menu"
          aria-expanded="isMobileMenuOpen"
        >
          <span
            class="block w-5 h-0.5 bg-current transition-all duration-300"
            :class="isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''"
          ></span>
          <span
            class="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300"
            :class="isMobileMenuOpen ? 'opacity-0' : ''"
          ></span>
          <span
            class="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300"
            :class="isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <div
      v-if="isMobileMenuOpen"
      @click="closeMobileMenu"
      class="mobile-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] transition-opacity duration-300 md:hidden"
    ></div>

    <!-- Mobile Sidebar -->
    <aside
      v-if="isMobileMenuOpen"
      class="mobile-sidebar fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-pureWhite via-compassionMint/5 to-pureWhite backdrop-blur-xl z-[10001] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col h-full">
        <!-- Sidebar Header -->
        <div class="flex items-center justify-between p-6 border-b border-compassionMint/20">
          <div class="flex items-center gap-3">
            <div class="relative h-10 w-10 rounded-full bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 border-2 border-insightTeal/30">
              <svg class="h-6 w-6 text-insightTeal absolute inset-0 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span class="text-lg font-bold text-humaneGrey">Menu</span>
          </div>
          <button
            @click="closeMobileMenu"
            class="flex items-center justify-center w-8 h-8 rounded-lg text-humaneGrey/70 hover:text-insightTeal hover:bg-insightTeal/10 transition-all duration-200"
            aria-label="Close menu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Sidebar Navigation Links -->
        <nav class="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
          <ul class="space-y-2">
            <li>
              <a
                href="#solutions"
                @click="closeMobileMenu"
                class="mobile-nav-link group flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-humaneGrey/80 transition-all duration-200 hover:text-insightTeal hover:bg-gradient-to-r hover:from-compassionMint/20 hover:to-compassionMint/10"
              >
                <svg class="w-5 h-5 text-insightTeal/70 group-hover:text-insightTeal transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#values"
                @click="closeMobileMenu"
                class="mobile-nav-link group flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-humaneGrey/80 transition-all duration-200 hover:text-insightTeal hover:bg-gradient-to-r hover:from-compassionMint/20 hover:to-compassionMint/10"
              >
                <svg class="w-5 h-5 text-insightTeal/70 group-hover:text-insightTeal transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Values
              </a>
            </li>
            <li>
              <a
                href="#operate"
                @click="closeMobileMenu"
                class="mobile-nav-link group flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-humaneGrey/80 transition-all duration-200 hover:text-insightTeal hover:bg-gradient-to-r hover:from-compassionMint/20 hover:to-compassionMint/10"
              >
                <svg class="w-5 h-5 text-insightTeal/70 group-hover:text-insightTeal transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                How we operate
              </a>
            </li>
          </ul>
        </nav>

        <!-- Sidebar Footer Actions -->
        <div class="p-6 border-t border-compassionMint/20 space-y-3">
          <button
            @click="closeMobileMenu"
            class="w-full px-5 py-3 rounded-lg border-2 border-insightTeal/60 bg-pureWhite text-sm font-semibold text-insightTeal shadow-sm transition-all duration-300 hover:border-insightTeal hover:bg-gradient-to-r hover:from-compassionMint/50 hover:to-compassionMint hover:shadow-md"
            type="button"
          >
            Download overview
          </button>
          <button
            @click="closeMobileMenu"
            class="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-ethicalTeal via-insightTeal to-ethicalTeal text-sm font-bold text-pureWhite shadow-lg transition-all duration-300 hover:shadow-xl"
            type="button"
          >
            Talk to our team
          </button>
        </div>
      </div>
    </aside>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Close menu on escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px) saturate(180%);
  -webkit-backdrop-filter: blur(8px) saturate(180%);
}

.site-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  pointer-events: none;
  z-index: -1;
}

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

.mobile-nav-link {
  position: relative;
}

.mobile-nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--insight-teal), var(--ethical-teal));
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}

.mobile-nav-link:hover::after,
.mobile-nav-link:active::after {
  transform: scaleY(1);
}

.mobile-sidebar {
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  height: 100vh !important;
  width: 320px !important;
  max-width: 85vw !important;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95)) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
}

.mobile-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
}

@media (min-width: 768px) {
  .mobile-sidebar,
  .mobile-overlay {
    display: none !important;
  }
}
</style>
