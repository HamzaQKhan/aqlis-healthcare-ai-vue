<template>
  <div class="cta-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ctaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.25" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.2" />
        </linearGradient>
        <linearGradient id="ctaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.38" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.22" />
        </linearGradient>
        <radialGradient id="ctaOrbGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.4" />
          <stop offset="60%" style="stop-color:#AEC8B9;stop-opacity:0.28" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        
        <filter id="ctaGlowFilter">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.7 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="ctaSoftGlowFilter">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.55 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- AI Data Charts -->
      <g class="ai-data-charts">
        <g
          v-for="(chart, index) in dataCharts"
          :key="'chart-' + index"
          :transform="`translate(${chart.x}, ${chart.y})`"
        >
          <rect x="0" y="0" width="80" height="60" :fill="chart.gradient" :opacity="chart.opacity * 0.2" rx="6" filter="url(#ctaSoftGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${chart.moveX},${chart.moveY}; 0,0; -${chart.moveX * 0.6},-${chart.moveY * 0.6}; 0,0`"
              :dur="`${chart.duration}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </rect>
          <rect x="10" y="40" width="12" :height="chart.bar1" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar1};${chart.bar1 + 8};${chart.bar1}`"
              :dur="`${chart.duration * 0.7}s`"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="28" y="35" width="12" :height="chart.bar2" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar2};${chart.bar2 + 10};${chart.bar2}`"
              :dur="`${chart.duration * 0.8}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </rect>
          <rect x="46" y="30" width="12" :height="chart.bar3" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar3};${chart.bar3 + 12};${chart.bar3}`"
              :dur="`${chart.duration * 0.9}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </rect>
          <rect x="64" y="25" width="12" :height="chart.bar4" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar4};${chart.bar4 + 9};${chart.bar4}`"
              :dur="`${chart.duration * 0.75}s`"
              repeatCount="indefinite"
              begin="0.6s"
            />
          </rect>
        </g>
      </g>

      <!-- Health Pulse Waves (ECG Style) - MUST HAVE -->
      <g class="health-pulse-waves">
        <g
          v-for="(wave, index) in pulseWaves"
          :key="'wave-' + index"
          :transform="`translate(${wave.x}, ${wave.y})`"
        >
          <path
            :d="wave.path"
            :stroke="wave.color"
            :stroke-width="wave.width"
            fill="none"
            :opacity="wave.opacity"
            stroke-linecap="round"
            filter="url(#ctaSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 30,0; 0,0; -30,0; 0,0`"
              :dur="`${wave.duration * 1.6}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="stroke-dashoffset"
              :values="`${wave.offset};${wave.offset - 90};${wave.offset}`"
              :dur="`${wave.duration * 0.95}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity};${wave.opacity * 0.35};${wave.opacity}`"
              :dur="`${wave.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>

      <!-- AI Neural Network Nodes -->
      <g class="ai-neural-nodes">
        <g
          v-for="(node, index) in aiNeuralNodes"
          :key="'node-' + index"
          :transform="`translate(${node.x}, ${node.y})`"
        >
          <circle cx="0" cy="0" :r="node.radius * 2" :fill="node.gradient" :opacity="node.opacity * 0.2" filter="url(#ctaGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2};${node.radius * 3};${node.radius * 2}`"
              :dur="`${node.duration * 1.2}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius" :fill="node.gradient" :opacity="node.opacity" filter="url(#ctaGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${node.moveX},${node.moveY}; 0,0; -${node.moveX * 0.6},-${node.moveY * 0.6}; 0,0`"
              :dur="`${node.duration * 1.4}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 1.4};${node.radius}`"
              :dur="`${node.duration * 0.9}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Floating Health Icons -->
      <g class="floating-health-icons">
        <g
          v-for="(icon, index) in healthIcons"
          :key="'icon-' + index"
          :transform="`translate(${icon.x}, ${icon.y})`"
        >
          <path
            d="M 50,85 C 50,85 15,60 15,40 C 15,20 35,10 50,10 C 65,10 85,20 85,40 C 85,60 50,85 50,85 Z"
            :fill="icon.color"
            :opacity="icon.opacity"
            filter="url(#ctaSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${icon.moveX},${icon.moveY}; 0,0; -${icon.moveX * 0.65},-${icon.moveY * 0.65}; 0,0`"
              :dur="`${icon.duration}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animateTransform
              type="scale"
              :values="`1;${1 + icon.scale};1`"
              :dur="`${icon.duration * 1.3}s`"
              repeatCount="indefinite"
              additive="sum"
            />
          </path>
        </g>
      </g>

      <!-- Floating AI Particles -->
      <g class="floating-particles">
        <circle
          v-for="(particle, index) in floatingParticles"
          :key="'particle-' + index"
          :cx="particle.x"
          :cy="particle.y"
          :r="particle.radius"
          :fill="particle.gradient"
          :opacity="particle.opacity"
          filter="url(#ctaSoftGlowFilter)"
        >
          <animate
            attributeName="r"
            :values="`${particle.radius};${particle.radius * 2};${particle.radius}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${particle.opacity};${particle.opacity * 0.2};${particle.opacity}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`0,0; ${particle.moveX},${particle.moveY}; 0,0; -${particle.moveX * 0.5},-${particle.moveY * 0.5}; 0,0`"
            :dur="`${particle.duration * 1.8}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
        </circle>
      </g>

      <!-- AI Connection Lines -->
      <g class="ai-connections" opacity="0.25">
        <path
          v-for="(conn, index) in aiConnections"
          :key="'conn-' + index"
          :d="conn.path"
          :stroke="conn.color"
          :stroke-width="conn.width"
          fill="none"
          stroke-dasharray="5,5"
          stroke-linecap="round"
          filter="url(#ctaSoftGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`0;${conn.dashLength};0`"
            :dur="`${conn.duration}s`"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const containerRef = ref(null);

// AI Data Charts
const dataCharts = ref([
  { x: 200, y: 150, color: '#367e72', gradient: 'url(#ctaGrad1)', opacity: 0.22, duration: 5, moveX: 8, moveY: -8, bar1: 15, bar2: 20, bar3: 25, bar4: 30 },
  { x: 600, y: 250, color: '#AEC8B9', gradient: 'url(#ctaGrad2)', opacity: 0.24, duration: 5.5, moveX: -10, moveY: 10, bar1: 18, bar2: 22, bar3: 28, bar4: 32 },
  { x: 900, y: 400, color: '#367e72', gradient: 'url(#ctaGrad1)', opacity: 0.21, duration: 5.2, moveX: 9, moveY: -9, bar1: 12, bar2: 18, bar3: 22, bar4: 28 },
]);

// Health Pulse Waves (ECG Style) - MUST HAVE
const pulseWaves = ref([
  { x: 150, y: 350, path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.22, offset: 0, duration: 2.8 },
  { x: 500, y: 400, path: 'M 0,50 L 30,50 L 35,25 L 40,75 L 45,50 L 100,50', color: '#AEC8B9', width: 2, opacity: 0.2, offset: 10, duration: 3.2 },
  { x: 800, y: 450, path: 'M 0,50 L 30,50 L 35,15 L 40,85 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.21, offset: 5, duration: 3.5 },
  { x: 300, y: 600, path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', color: '#AEC8B9', width: 2, opacity: 0.19, offset: 2, duration: 3.3 },
]);

// AI Neural Nodes
const aiNeuralNodes = ref([
  { x: 350, y: 200, radius: 7, gradient: 'url(#ctaOrbGrad)', opacity: 0.24, duration: 4.5, moveX: 12, moveY: -12 },
  { x: 700, y: 300, radius: 8, gradient: 'url(#ctaOrbGrad)', opacity: 0.26, duration: 5, moveX: -14, moveY: 14 },
  { x: 550, y: 550, radius: 7, gradient: 'url(#ctaOrbGrad)', opacity: 0.25, duration: 4.8, moveX: 13, moveY: -13 },
]);

// Floating Health Icons
const healthIcons = ref([
  { x: 250, y: 120, color: '#367e72', opacity: 0.21, duration: 5.5, scale: 0.15, moveX: 10, moveY: -10 },
  { x: 750, y: 180, color: '#AEC8B9', opacity: 0.19, duration: 6, scale: 0.17, moveX: -12, moveY: 12 },
  { x: 450, y: 650, color: '#367e72', opacity: 0.2, duration: 5.8, scale: 0.16, moveX: 11, moveY: -11 },
]);

// Floating Particles
const floatingParticles = ref([
  { x: 180, y: 100, radius: 3.5, gradient: 'url(#ctaOrbGrad)', opacity: 0.35, duration: 2.8, moveX: 25, moveY: -30 },
  { x: 550, y: 150, radius: 3, gradient: 'url(#ctaOrbGrad)', opacity: 0.33, duration: 3.2, moveX: -28, moveY: 28 },
  { x: 850, y: 120, radius: 3.5, gradient: 'url(#ctaOrbGrad)', opacity: 0.34, duration: 3, moveX: 30, moveY: -32 },
  { x: 400, y: 400, radius: 3, gradient: 'url(#ctaOrbGrad)', opacity: 0.35, duration: 3.5, moveX: -27, moveY: 31 },
  { x: 700, y: 450, radius: 3.5, gradient: 'url(#ctaOrbGrad)', opacity: 0.33, duration: 3.2, moveX: 29, moveY: -29 },
]);

// AI Connections
const aiConnections = ref([
  { path: 'M 350,200 Q 500,250 700,300', color: '#367e72', width: 1.5, dashLength: 28, duration: 4 },
  { path: 'M 700,300 Q 625,425 550,550', color: '#AEC8B9', width: 1.5, dashLength: 32, duration: 4.5 },
]);
</script>

<style scoped>
.cta-vectors {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.vector-background {
  width: 100%;
  height: 100%;
  will-change: transform;
  transform: translateZ(0);
}

.ai-data-charts,
.health-pulse-waves,
.ai-neural-nodes,
.floating-health-icons,
.floating-particles,
.ai-connections {
  animation: fade-in 2s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.ai-data-charts rect,
.health-pulse-waves path,
.ai-neural-nodes circle,
.floating-health-icons path,
.floating-particles circle,
.ai-connections path {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>

