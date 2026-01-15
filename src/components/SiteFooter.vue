<template>
  <footer
    class="site-footer relative overflow-hidden border-t-2 border-compassionMint/40 bg-gradient-to-br from-pureWhite via-compassionMint/8 to-insightTeal/5 text-humaneGrey shadow-[0_-16px_40px_rgba(36,111,102,0.12)]"
    aria-label="Footer"
  >
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 opacity-25">
      <div class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-insightTeal/12 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-ethicalTeal/12 to-transparent rounded-full blur-3xl"></div>
    </div>
    
    <div class="site-footer-inner relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
        <!-- Brand Section -->
        <div class="footer-brand sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-br from-insightTeal/30 to-ethicalTeal/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-insightTeal/20 to-ethicalTeal/20 border-2 border-insightTeal/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="h-6 w-6 text-insightTeal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <span class="footer-name text-2xl sm:text-3xl font-bold bg-gradient-to-r from-humaneGrey via-insightTeal to-humaneGrey bg-clip-text text-transparent">Aqlis</span>
          </div>
          <p class="footer-tagline text-xs sm:text-sm leading-relaxed text-humaneGrey/80 mb-5">
            Ethical, humane AI for healthcare organizations.
          </p>
          <!-- Social Links -->
          <div class="flex items-center gap-2.5">
            <a href="#" class="social-link group relative flex h-9 w-9 items-center justify-center rounded-lg border border-compassionMint/30 bg-pureWhite/80 backdrop-blur-sm text-humaneGrey/70 transition-all duration-300 hover:border-insightTeal hover:bg-gradient-to-br hover:from-insightTeal/20 hover:to-ethicalTeal/20 hover:text-insightTeal hover:scale-110 hover:shadow-md">
              <svg class="h-4 w-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="social-link group relative flex h-9 w-9 items-center justify-center rounded-lg border border-compassionMint/30 bg-pureWhite/80 backdrop-blur-sm text-humaneGrey/70 transition-all duration-300 hover:border-insightTeal hover:bg-gradient-to-br hover:from-insightTeal/20 hover:to-ethicalTeal/20 hover:text-insightTeal hover:scale-110 hover:shadow-md">
              <svg class="h-4 w-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="social-link group relative flex h-9 w-9 items-center justify-center rounded-lg border border-compassionMint/30 bg-pureWhite/80 backdrop-blur-sm text-humaneGrey/70 transition-all duration-300 hover:border-insightTeal hover:bg-gradient-to-br hover:from-insightTeal/20 hover:to-ethicalTeal/20 hover:text-insightTeal hover:scale-110 hover:shadow-md">
              <svg class="h-4 w-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links-section">
          <h3 class="footer-section-title text-sm sm:text-base font-bold text-humaneGrey mb-4 flex items-center gap-2">
            <div class="h-1 w-1 rounded-full bg-insightTeal"></div>
            Quick Links
          </h3>
          <ul class="space-y-2.5">
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Privacy policy</span>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Data protection</span>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Responsible AI</span>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="footer-resources">
          <h3 class="footer-section-title text-sm sm:text-base font-bold text-humaneGrey mb-4 flex items-center gap-2">
            <div class="h-1 w-1 rounded-full bg-insightTeal"></div>
            Resources
          </h3>
          <ul class="space-y-2.5">
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Documentation</span>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Case Studies</span>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Blog</span>
              </a>
            </li>
            <li>
              <a href="#" class="footer-link group inline-flex items-center gap-2 text-xs sm:text-sm text-humaneGrey/80 transition-all duration-300 hover:text-insightTeal">
                <svg class="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span class="border-b border-transparent group-hover:border-insightTeal/50 transition-colors duration-300 pb-0.5">Support</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar with Certifications -->
      <div class="footer-bottom border-t border-compassionMint/30 pt-6 sm:pt-8">
        <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-humaneGrey/70 mb-4">
          <span class="badge-item flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-compassionMint/30 bg-gradient-to-br from-pureWhite/50 to-compassionMint/5 backdrop-blur-sm hover:border-insightTeal/50 hover:bg-insightTeal/5 transition-all duration-300">
            <svg class="h-3.5 w-3.5 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span class="whitespace-nowrap">HIPAA</span>
          </span>
          <span class="badge-item flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-compassionMint/30 bg-gradient-to-br from-pureWhite/50 to-compassionMint/5 backdrop-blur-sm hover:border-insightTeal/50 hover:bg-insightTeal/5 transition-all duration-300">
            <svg class="h-3.5 w-3.5 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span class="whitespace-nowrap">SOC 2</span>
          </span>
          <span class="badge-item flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-compassionMint/30 bg-gradient-to-br from-pureWhite/50 to-compassionMint/5 backdrop-blur-sm hover:border-insightTeal/50 hover:bg-insightTeal/5 transition-all duration-300">
            <svg class="h-3.5 w-3.5 text-insightTeal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span class="whitespace-nowrap">ISO 27001</span>
          </span>
        </div>
        <!-- Copyright Row -->
        <div class="footer-meta text-xs text-humaneGrey/70 text-center pt-4 border-t border-compassionMint/20">
          <span>© {{ currentYear }} Aqlis. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  currentYear: {
    type: Number,
    required: true
  }
});
</script>

<style scoped>
.footer-link:hover {
  transform: translateX(4px);
}

.social-link {
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: radial-gradient(circle, rgba(54, 126, 114, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.social-link:hover::before {
  opacity: 1;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.badge-item {
  cursor: default;
}

.badge-item:hover {
  transform: translateY(-2px);
}
</style>
