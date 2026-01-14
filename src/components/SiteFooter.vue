<template>
  <footer
    class="site-footer border-t border-compassionMint bg-pureWhite text-humaneGrey shadow-[0_-12px_30px_rgba(36,111,102,0.06)]"
    aria-label="Footer"
  >
    <div
      class="site-footer-inner mx-auto grid max-w-5xl items-center gap-4 px-6 py-7 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
    >
      <div class="footer-brand flex flex-col gap-1">
        <span class="footer-name text-base font-semibold">Aqlis</span>
        <span class="footer-tagline text-xs text-humaneGrey/90">
          Ethical, humane AI for healthcare organizations.
        </span>
      </div>
      <div
        class="footer-links flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-[0.82rem] md:justify-end"
      >
        <a href="#" class="footer-link border-b border-transparent pb-0.5">
          Privacy policy
        </a>
        <a href="#" class="footer-link border-b border-transparent pb-0.5">
          Data protection
        </a>
        <a href="#" class="footer-link border-b border-transparent pb-0.5">
          Responsible AI
        </a>
        <a href="#" class="footer-link border-b border-transparent pb-0.5">
          Contact
        </a>
      </div>
      <div class="footer-meta col-span-full mt-1 text-[0.78rem] text-humaneGrey">
        <span>© {{ currentYear }} Aqlis. All rights reserved.</span>
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
