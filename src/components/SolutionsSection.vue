<template>
  <section
    id="solutions"
    class="section section-solutions scroll-animate relative overflow-hidden"
    aria-labelledby="solutions-title"
  >
    <SolutionsVectors class="absolute inset-0 opacity-40" />
    <div class="section-inner relative z-10 mx-auto max-w-5xl px-6 py-16">
      <div class="section-heading mb-8 max-w-xl">
        <h2
          id="solutions-title"
          class="text-2xl font-semibold tracking-tight text-humaneGrey"
        >
          AI that works for healthcare
        </h2>
        <p class="section-lead mt-2 text-sm leading-relaxed text-humaneGrey/90">
          Purpose-built tools for the real constraints of clinical environments.
          Not generic automation, but systems tailored to how your teams
          actually work today.
        </p>
      </div>
      <div
        class="grid grid-3 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <article
          class="card card-soft rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)]"
        >
          <h3 class="text-base font-semibold text-humaneGrey">
            Hospital intelligence
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90">
            Predictive analytics for bed management, staffing, and resource
            allocation, designed to support smoother patient flow.
          </p>
          <ul
            class="card-list mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-humaneGrey/90"
          >
            <li>Capacity forecasting and surge planning</li>
            <li>Staff scheduling and workload insights</li>
            <li>Supply and resource utilization trends</li>
          </ul>
        </article>
        <article
          class="card card-soft rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)]"
        >
          <h3 class="text-base font-semibold text-humaneGrey">
            Clinician workflow support
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90">
            Tools that simplify chart review and documentation so clinicians can
            focus on listening, examining, and deciding, not clicking.
          </p>
          <ul
            class="card-list mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-humaneGrey/90"
          >
            <li>Voice-to-documentation aligned to clinical notes</li>
            <li>Smart, context-aware alerts that reduce noise</li>
            <li>Evidence synthesis surfaced at the right moment</li>
          </ul>
        </article>
        <article
          class="card card-soft rounded-xl border border-compassionMint/80 bg-compassionMint p-5 shadow-[0_10px_26px_rgba(54,126,114,0.08)]"
        >
          <h3 class="text-base font-semibold text-humaneGrey">
            Secure data insights
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90">
            Privacy-conscious analytics for quality and population health teams,
            built on federated and privacy-preserving methods.
          </p>
          <ul
            class="card-list mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-humaneGrey/90"
          >
            <li>Population health analytics and outcomes tracking</li>
            <li>Quality metrics with transparent methodology</li>
            <li>Federated learning with zero raw data exposure</li>
          </ul>
        </article>
      </div>
      <div
        class="section-callout mt-8 rounded-xl border border-insightTeal bg-pureWhite p-6 shadow-sm"
      >
        <h3 class="text-base font-semibold text-humaneGrey">
          Patient-centric outcomes
        </h3>
        <p class="mt-2 text-sm leading-relaxed text-humaneGrey/90">
          Remote monitoring, care coordination, and communication tools that are
          built around the realities of patients’ lives, not just abstract
          metrics.
        </p>
      </div>
      <section
        class="impact mt-10 rounded-xl border border-insightTeal bg-pureWhite p-6 shadow-[0_16px_34px_rgba(36,111,102,0.18)]"
      >
        <div class="impact-header mb-4">
          <h3 class="text-base font-semibold text-humaneGrey">
            Our impact in numbers
          </h3>
          <p class="mt-1 text-sm leading-relaxed text-humaneGrey/90">
            Aqlis deployments are measured against clear, jointly defined
            clinical and operational outcomes.
          </p>
        </div>
        <div
          class="impact-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          aria-label="Impact statistics"
        >
          <div class="impact-item space-y-1">
            <div class="impact-value text-xl font-bold text-humaneGrey">
              98%
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Clinician satisfaction rate
            </div>
          </div>
          <div class="impact-item space-y-1">
            <div class="impact-value text-xl font-bold text-humaneGrey">
              2M+
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Patients supported annually
            </div>
          </div>
          <div class="impact-item space-y-1">
            <div class="impact-value text-xl font-bold text-humaneGrey">
              40%
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Average reduction in admin time
            </div>
          </div>
          <div class="impact-item space-y-1">
            <div class="impact-value text-xl font-bold text-humaneGrey">
              0
            </div>
            <div class="impact-label text-xs text-humaneGrey/90">
              Data breaches since founding
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import HealthVectors from './HealthVectors.vue';
</script>
