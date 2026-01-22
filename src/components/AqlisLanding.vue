<template>
  <div class="aqlis-page" @mousemove="handleMouseMove">
    <!-- WebGL Shader Background -->
    <ShaderBackground />
    <div class="cursor-follower" :style="cursorStyle"></div>
    <SiteHeader />
    <main class="pt-0 relative">
      <HeroSection />
      <TrustedBySlider />
      <ValuesSection />
      <SolutionsSection />
      <OperateSection />
      <HorizontalScrollSection />
      <ClientsSlider />
      <CallToActionSection />
    </main>
    <SiteFooter :current-year="currentYear" />
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useParallax } from '../composables/useScrollAnimation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

import ShaderBackground from './ShaderBackground.vue';
import SiteHeader from './SiteHeader.vue';
import HeroSection from './HeroSection.vue';
import TrustedBySlider from './TrustedBySlider.vue';
import ValuesSection from './ValuesSection.vue';
import SolutionsSection from './SolutionsSection.vue';
import OperateSection from './OperateSection.vue';
import HorizontalScrollSection from './HorizontalScrollSection.vue';
import ClientsSlider from './ClientsSlider.vue';
import CallToActionSection from './CallToActionSection.vue';
import SiteFooter from './SiteFooter.vue';

const currentYear = computed(() => new Date().getFullYear());

// Cursor follower effect
const cursorStyle = ref({});
const handleMouseMove = (e) => {
  cursorStyle.value = {
    left: `${e.clientX}px`,
    top: `${e.clientY}px`,
  };
};

// Lenis Smooth Scroll
let lenis = null;

onMounted(() => {
  // Initialize Lenis without smooth scrolling for instant scroll
  lenis = new Lenis({
    duration: 0, // Instant scroll
    easing: (t) => t, // Linear easing for instant
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: false, // Disable smooth scrolling
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 1,
    infinite: false,
  });

  // Connect Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Use requestAnimationFrame for ScrollTrigger updates
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  // Optimize GSAP ticker
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.fps(60); // Lock to 60fps

  // Initialize parallax
  useParallax();

  // Add parallax effect to hero elements - Optimized with throttling
  let parallaxRaf = null;
  const handleParallax = () => {
    if (parallaxRaf) return;
    parallaxRaf = requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.dataset.parallax) || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
      parallaxRaf = null;
    });
  };

  window.addEventListener('scroll', handleParallax, { passive: true });
});

onBeforeUnmount(() => {
  if (lenis) {
    lenis.destroy();
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style>
.aqlis-page {
  min-height: 100vh;
  background-color: transparent;
  color: var(--humane-grey);
  position: relative;
  overflow-x: hidden;
}

.cursor-follower {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(54, 126, 114, 0.3), transparent);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  mix-blend-mode: difference;
  opacity: 0;
}

.aqlis-page:hover .cursor-follower {
  opacity: 1;
}

/* Base scroll animation */
/* Scroll animations disabled - all elements visible immediately */
.scroll-animate {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
}

.scroll-animate.animate-fade-up,
.scroll-animate.animate-fade-down,
.scroll-animate.animate-fade-left,
.scroll-animate.animate-fade-right,
.scroll-animate.animate-scale-up,
.scroll-animate.animate-fade,
.scroll-animate.animate-rotate {
  opacity: 1 !important;
  transform: none !important;
  transition: none !important;
}

/* Hero section should always be visible immediately */
#hero.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
  transition: none !important;
}

/* Scroll animations disabled - all elements visible by default */
[data-stagger-item] {
  opacity: 1 !important;
}

.section-heading h2,
.section-heading h3 {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.section-lead {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.card.scroll-animate {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

.impact-item.scroll-animate {
  opacity: 1 !important;
  transform: scale(1) translateY(0) !important;
}

/* Performance optimization */
.scroll-animate {
  backface-visibility: hidden;
  perspective: 1000px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--pure-white);
  border-bottom: 1px solid var(--compassion-mint);
  box-shadow: 0 10px 30px rgba(36, 111, 102, 0.08);
  backdrop-filter: blur(12px);
}

.site-header-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-mark {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, var(--compassion-mint), var(--ethical-teal));
  box-shadow: 0 0 0 6px rgba(174, 200, 185, 0.4);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.95rem;
}

.brand-tagline {
  font-size: 0.8rem;
  color: var(--insight-teal);
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.9rem;
}

.nav-link {
  position: relative;
  color: var(--humane-grey);
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 150ms ease, color 150ms ease;
}

.nav-link:hover {
  color: var(--insight-teal);
  border-bottom-color: var(--insight-teal);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.1rem;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--ethical-teal),
    var(--insight-teal)
  );
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 200ms ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-primary {
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  border: none;
  background-color: var(--ethical-teal);
  color: var(--pure-white);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(36, 111, 102, 0.35);
  transform: translateY(0);
  transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
}

.btn-primary:hover {
  transform: translateY(-1px);
  opacity: 0.97;
  box-shadow: 0 18px 38px rgba(36, 111, 102, 0.4);
}

.btn-secondary {
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--insight-teal);
  background-color: var(--pure-white);
  color: var(--insight-teal);
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease, box-shadow 160ms ease;
}

.btn-secondary:hover {
  background-color: var(--compassion-mint);
  box-shadow: 0 10px 25px rgba(54, 126, 114, 0.25);
}

.btn-ghost {
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background-color: transparent;
  color: var(--insight-teal);
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}

.btn-ghost:hover {
  background-color: var(--compassion-mint);
  color: var(--humane-grey);
}

.hero {
  background: linear-gradient(
    150deg,
    var(--pure-white),
    var(--compassion-mint)
  );
  position: relative;
  overflow: hidden;
}

.hero-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 3rem;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 2.75rem;
  align-items: center;
  animation: fade-up-soft 700ms ease-out both;
}

.hero-title {
  font-size: 2.4rem;
  line-height: 1.2;
  margin: 0 0 1rem;
}

.hero-subtitle {
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1.4rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.1rem;
}

.hero-meta {
  font-size: 0.83rem;
  max-width: 26rem;
  color: var(--insight-teal);
}

.hero-badges {
  margin: 1rem 0 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.hero-badge-main {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background-color: var(--pure-white);
  border: 1px solid var(--compassion-mint);
  max-width: fit-content;
  position: relative;
  overflow: hidden;
}

.hero-badge-label {
  font-size: 0.78rem;
}

.hero-badge-main::after {
  content: '';
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
  transform: translateX(-120%);
  animation: shine-soft 8s ease-in-out infinite;
}

.hero-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.hero-badge-pill {
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background-color: var(--compassion-mint);
  font-size: 0.75rem;
}

.hero-visual {
  display: flex;
  justify-content: flex-end;
}

.hero-visual-card {
  background-color: var(--pure-white);
  border-radius: 1rem;
  padding: 1.25rem;
  border: 1px solid var(--compassion-mint);
  max-width: 320px;
  box-shadow: 0 20px 40px rgba(54, 126, 114, 0.22);
  animation: float-soft 4.5s ease-in-out infinite;
}

.hero-visual-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.hero-visual-title {
  font-size: 0.9rem;
  font-weight: 700;
}

.hero-visual-pill {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background-color: var(--compassion-mint);
  color: var(--humane-grey);
}

.hero-visual-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
}

.metric {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.metric-label {
  font-size: 0.8rem;
}

.metric-bar {
  position: relative;
  height: 6px;
  border-radius: 999px;
  background-color: var(--compassion-mint);
  overflow: hidden;
}

.metric-bar-fill {
  height: 100%;
  width: 72%;
  border-radius: 999px;
  background-color: var(--insight-teal);
}

.metric-bar-fill-alt {
  width: 54%;
}

.metric-bar-fill-strong {
  width: 86%;
}

.metric-value {
  font-size: 0.75rem;
  color: var(--insight-teal);
}

.hero-visual-footer {
  font-size: 0.75rem;
  line-height: 1.5;
}

.hero-visual-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.hero-visual-tag {
  font-size: 0.75rem;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background-color: var(--compassion-mint);
}

.section {
  padding: 3.25rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.section-inner {
  max-width: 1120px;
  margin: 0 auto;
  animation: fade-up-soft 700ms ease-out both;
}

.section-inner-narrow {
  max-width: 880px;
}

.section-heading {
  max-width: 640px;
  margin-bottom: 2rem;
}

.section-heading-centered {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.section-heading-centered .section-lead {
  margin-left: auto;
  margin-right: auto;
}

.section h2 {
  margin: 0 0 0.75rem;
  font-size: 1.6rem;
}

.section-lead {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.8;
}

.grid {
  display: grid;
  gap: 1.25rem;
}

.grid-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card {
  background-color: var(--pure-white);
  border-radius: 0.9rem;
  padding: 1.15rem 1.2rem;
  border: 1px solid var(--compassion-mint);
  box-shadow: 0 10px 26px rgba(54, 126, 114, 0.08);
  transform: translateY(0) translateZ(0);
  transition: transform 170ms ease, border-color 170ms ease, box-shadow 170ms ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--insight-teal);
  box-shadow: 0 18px 40px rgba(54, 126, 114, 0.18);
}

/* Card-soft hover effect - lifts card up on hover */
.card.card-soft:hover {
  transform: translateY(-8px);
  border-color: var(--insight-teal);
  box-shadow: 0 20px 50px rgba(54, 126, 114, 0.25);
}

.card h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
}

.card p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
}

.card-soft {
  background-color: var(--compassion-mint);
}

.card-list {
  margin: 0.85rem 0 0;
  padding-left: 1.1rem;
  font-size: 0.87rem;
  line-height: 1.7;
}

.card-list li + li {
  margin-top: 0.25rem;
}

.card-icon {
  margin-bottom: 0.7rem;
}

.icon-circle {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 2px solid var(--insight-teal);
}

.section-values {
  background-color: transparent;
}

.section-solutions {
  background-color: transparent;
}

.section-behaviors {
  background-color: transparent;
}

.section-trust {
  background-color: var(--pure-white);
}

.section-values::before,
.section-solutions::before,
.section-behaviors::before,
.section-trust::before,
.section-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.15;
  mix-blend-mode: normal;
  z-index: -1;
}

.section-values::before {
  background: radial-gradient(
    circle at 0% 0%,
    rgba(174, 200, 185, 0.5),
    transparent 60%
  );
}

.section-solutions::before {
  background: radial-gradient(
    circle at 100% 0%,
    rgba(54, 126, 114, 0.35),
    transparent 65%
  );
}

.section-behaviors::before {
  background: radial-gradient(
    circle at 0% 100%,
    rgba(174, 200, 185, 0.4),
    transparent 65%
  );
}

.section-trust::before {
  background: radial-gradient(
    circle at 100% 100%,
    rgba(54, 126, 114, 0.3),
    transparent 65%
  );
}

.section-cta::before {
  background: linear-gradient(
    120deg,
    rgba(54, 126, 114, 0.35),
    rgba(174, 200, 185, 0.4)
  );
  opacity: 0.5;
}

.section-callout {
  margin-top: 2.25rem;
  padding: 1.5rem 1.5rem;
  border-radius: 0.9rem;
  border: 1px solid var(--insight-teal);
  background-color: var(--pure-white);
}

.section-callout h3 {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
}

.section-callout p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
}

.impact {
  margin-top: 2.5rem;
  padding: 1.75rem 1.5rem 1.9rem;
  border-radius: 0.9rem;
  border: 1px solid var(--insight-teal);
  background-color: var(--pure-white);
  box-shadow: 0 16px 34px rgba(36, 111, 102, 0.18);
}

.impact-header h3 {
  margin: 0 0 0.3rem;
  font-size: 1.05rem;
}

.impact-header p {
  margin: 0 0 1.1rem;
  font-size: 0.9rem;
  max-width: 30rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

.impact-item {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.impact-value {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.impact-label {
  font-size: 0.8rem;
}

.behaviors-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 1.75rem;
}

.behaviors-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1.15rem;
}

.behaviors-list li h3 {
  margin: 0 0 0.4rem;
  font-size: 1rem;
}

.behaviors-list li p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
}

.behaviors-aside-card {
  border-radius: 0.9rem;
  border: 1px solid var(--compassion-mint);
  padding: 1.2rem 1.25rem;
  background-color: var(--pure-white);
}

.behaviors-aside-card h3 {
  margin: 0 0 0.7rem;
  font-size: 1rem;
}

.aside-list {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.87rem;
  line-height: 1.7;
}

.trust-note {
  margin-top: 2rem;
  padding-top: 1.35rem;
  border-top: 1px solid var(--compassion-mint);
  font-size: 0.9rem;
  line-height: 1.7;
}

.trust-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.2fr);
  gap: 2rem;
  align-items: flex-start;
}

.trust-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;
}

.trust-card {
  background-color: var(--pure-white);
}

.trust-card h3 {
  margin-bottom: 0.5rem;
}

.section-cta {
  background-color: transparent;
  position: relative;
  overflow: hidden;
}

.section-inner-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 1120px;
  margin: 0 auto;
}

.cta-content h2 {
  margin: 0 0 0.6rem;
  font-size: 1.6rem;
}

.cta-content p {
  margin: 0;
  font-size: 0.95rem;
  max-width: 30rem;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-end;
}

.site-footer {
  border-top: 1px solid var(--compassion-mint);
  background-color: var(--pure-white);
  color: var(--humane-grey);
  box-shadow: 0 -12px 30px rgba(36, 111, 102, 0.06);
}

.site-footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.75rem 1.5rem 2rem;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 1.25rem;
  align-items: center;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.footer-name {
  font-weight: 700;
  font-size: 1rem;
}

.footer-tagline {
  font-size: 0.85rem;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  justify-content: flex-end;
  font-size: 0.82rem;
}

.footer-link {
  color: var(--humane-grey);
  border-bottom: 1px solid transparent;
  padding-bottom: 0.1rem;
  transition: border-color 120ms ease, color 120ms ease;
}

.footer-link:hover {
  color: var(--insight-teal);
  border-bottom-color: var(--insight-teal);
}

.footer-meta {
  grid-column: 1 / -1;
  margin-top: 0.75rem;
  font-size: 0.78rem;
  color: var(--humane-grey);
}

@media (max-width: 960px) {
  .site-header-inner {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .site-nav {
    display: none;
  }

  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .hero-visual {
    justify-content: flex-start;
  }

  .grid-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .grid-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .behaviors-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .trust-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .trust-cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .site-footer-inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .footer-links {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 2.5rem 1.25rem;
  }

  .hero-inner {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .grid-4,
  .grid-3 {
    grid-template-columns: minmax(0, 1fr);
  }

  .impact-grid {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .trust-cards {
    grid-template-columns: minmax(0, 1fr);
  }

  .section-inner-cta {
    flex-direction: column;
    align-items: flex-start;
  }

  .site-header-inner {
    padding-inline: 1.25rem;
  }

  .site-footer-inner {
    padding-inline: 1.25rem;
  }

  .nav-actions {
    margin-left: auto;
  }
}

@keyframes fade-up-soft {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-soft {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes shine-soft {
  0% {
    transform: translateX(-120%);
  }
  70% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(180%);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-30px) translateX(20px);
    opacity: 0.6;
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
}

/* Enhanced card hover effects */
.card {
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.card:hover::before {
  left: 100%;
}

/* Instant scroll behavior */
html {
  scroll-behavior: auto;
}

/* Enhanced button interactions */
button {
  position: relative;
  overflow: hidden;
}

button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

button:hover::after {
  width: 300px;
  height: 300px;
}

@media (prefers-reduced-motion: reduce) {
  .hero-inner,
  .hero-visual-card,
  .card,
  .impact,
  .section-inner,
  .scroll-animate {
    animation: none;
    transition: none;
  }

  .hero-badge-main::after,
  .nav-link::after,
  .card::before,
  button::after {
    animation: none;
  }

  html {
    scroll-behavior: auto;
  }
}
</style>
