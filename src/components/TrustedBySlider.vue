<template>
  <section
    class="trusted-by-slider py-10 border-y border-insightTeal/20 overflow-hidden relative"
  >
    <!-- Subtle top border for separation -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-insightTeal/30 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-6 text-center mb-8 relative z-10">
      <p class="text-xs font-semibold text-white tracking-wider uppercase">
        Trusted by forward-thinking healthcare organizations
      </p>
    </div>

    <div
      class="trust-mask relative w-full overflow-hidden select-none"
    >
      <div
        class="trust-marquee flex flex-nowrap gap-12 items-center transition-all duration-500"
      >
        <template v-for="(org, i) in [...organizations, ...organizations, ...organizations, ...organizations]" :key="i">
          <div class="flex items-center gap-3 flex-shrink-0">
            <!-- Healthcare Icon -->
            <div class="w-8 h-8 flex items-center justify-center">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="#ffffff"
                viewBox="0 0 24 24"
                style="color: #ffffff;"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="org.iconPath"
                  style="stroke: #ffffff;"
                />
              </svg>
            </div>
            <span class="font-bold text-lg tracking-tight" style="color: #ffffff;">
              {{ org.name }}
            </span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const organizations = [
  {
    name: 'Metro Hospital',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
  {
    name: 'HealthCare Plus',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    name: 'Medical Center',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    name: 'United Health',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    name: 'Prime Hospital',
    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  },
  {
    name: 'City Hospital',
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    name: 'General Hospital',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    name: 'St. Mary\'s Hospital',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
];
</script>

<style scoped>
.trust-mask {
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.trust-mask:hover .trust-marquee {
  animation-play-state: paused;
}

.trust-marquee {
  width: max-content;
  animation: trustMarquee 30s linear infinite;
}

@keyframes trustMarquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 4));
  }
}

.trusted-by-slider {
  background: transparent;
  position: relative;
}
</style>
