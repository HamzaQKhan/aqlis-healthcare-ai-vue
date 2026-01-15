<template>
  <div class="operate-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="operateGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.34" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.28" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.22" />
        </linearGradient>
        <linearGradient id="operateGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.4" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.32" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.24" />
        </linearGradient>
        <radialGradient id="operateOrbGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.44" />
          <stop offset="60%" style="stop-color:#AEC8B9;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        
        <filter id="operateGlowFilter">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.75 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="operateSoftGlowFilter">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.6 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- AI Flow Lines -->
      <g class="ai-flow-lines" opacity="0.3">
        <path
          v-for="(line, index) in flowLines"
          :key="'flow-' + index"
          :d="line.path"
          :stroke="line.color"
          :stroke-width="line.width"
          fill="none"
          stroke-dasharray="6,6"
          stroke-linecap="round"
          filter="url(#operateSoftGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`${line.offset};${line.offset - 50};${line.offset}`"
            :dur="`${line.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`0.3;0.15;0.3`"
            :dur="`${line.duration * 1.5}s`"
            repeatCount="indefinite"
          />
        </path>
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
            filter="url(#operateSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 28,0; 0,0; -28,0; 0,0`"
              :dur="`${wave.duration * 1.7}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="stroke-dashoffset"
              :values="`${wave.offset};${wave.offset - 85};${wave.offset}`"
              :dur="`${wave.duration * 0.92}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity};${wave.opacity * 0.38};${wave.opacity}`"
              :dur="`${wave.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </path>
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
            filter="url(#operateSoftGlowFilter)"
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

      <!-- AI Processing Nodes -->
      <g class="ai-processing-nodes">
        <g
          v-for="(node, index) in aiNodes"
          :key="'node-' + index"
          :transform="`translate(${node.x}, ${node.y})`"
        >
          <circle cx="0" cy="0" :r="node.radius * 2" :fill="node.gradient" :opacity="node.opacity * 0.2" filter="url(#operateGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2};${node.radius * 3};${node.radius * 2}`"
              :dur="`${node.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius" :fill="node.gradient" :opacity="node.opacity" filter="url(#operateGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${node.moveX},${node.moveY}; 0,0; -${node.moveX * 0.6},-${node.moveY * 0.6}; 0,0`"
              :dur="`${node.duration * 1.5}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 1.45};${node.radius}`"
              :dur="`${node.duration * 0.95}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Floating Medical Elements -->
      <g class="floating-medical-elements">
        <!-- Pill Capsules -->
        <g
          v-for="(pill, index) in pillCapsules"
          :key="'pill-' + index"
          :transform="`translate(${pill.x}, ${pill.y})`"
        >
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="28"
            :fill="pill.gradient"
            :opacity="pill.opacity"
            filter="url(#operateSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${pill.moveX},${pill.moveY}; 0,0; -${pill.moveX * 0.5},${pill.moveY * 0.5}; 0,0`"
              :dur="`${pill.duration}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 50 50; ${pill.rotation} 50 50; 0 50 50; -${pill.rotation * 0.5} 50 50; 0 50 50`"
              :dur="`${pill.duration * 1.5}s`"
              repeatCount="indefinite"
              additive="sum"
            />
          </ellipse>
          <line x1="30" y1="50" x2="70" y2="50" :stroke="pill.lineColor" stroke-width="3" :opacity="pill.opacity * 1.3" stroke-linecap="round" filter="url(#operateSoftGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              :values="`0 50 50; ${pill.rotation} 50 50; 0 50 50`"
              :dur="`${pill.duration}s`"
              repeatCount="indefinite"
            />
          </line>
        </g>
        <!-- Medical Crosses -->
        <g
          v-for="(cross, index) in medicalCrosses"
          :key="'cross-' + index"
          :transform="`translate(${cross.x}, ${cross.y})`"
        >
          <g filter="url(#operateSoftGlowFilter)">
            <rect x="40" y="10" width="20" height="80" :fill="cross.gradient" :opacity="cross.opacity" rx="5">
              <animateTransform
                attributeName="transform"
                type="translate"
                :values="`0,0; 0,-${7 + index * 2}; 0,0; 0,${5 + index * 1.5}; 0,0`"
                :dur="`${cross.duration}s`"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
            </rect>
            <rect x="10" y="40" width="80" height="20" :fill="cross.gradient" :opacity="cross.opacity" rx="5">
              <animateTransform
                attributeName="transform"
                type="translate"
                :values="`0,0; 0,-${7 + index * 2}; 0,0; 0,${5 + index * 1.5}; 0,0`"
                :dur="`${cross.duration}s`"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
            </rect>
          </g>
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
          filter="url(#operateSoftGlowFilter)"
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
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const containerRef = ref(null);

// AI Flow Lines
const flowLines = ref([
  { path: 'M 200,150 Q 400,200 600,150 T 1000,150', color: '#367e72', width: 2, offset: 0, duration: 4 },
  { path: 'M 300,500 Q 500,400 700,500 T 1100,500', color: '#AEC8B9', width: 1.5, offset: 10, duration: 5 },
  { path: 'M 100,300 Q 300,250 500,300 T 900,300', color: '#367e72', width: 2, offset: 5, duration: 4.5 },
]);

// Health Pulse Waves (ECG Style) - MUST HAVE
const pulseWaves = ref([
  { x: 150, y: 250, path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.23, offset: 0, duration: 2.8 },
  { x: 450, y: 300, path: 'M 0,50 L 30,50 L 35,25 L 40,75 L 45,50 L 100,50', color: '#AEC8B9', width: 2, opacity: 0.21, offset: 10, duration: 3.2 },
  { x: 750, y: 350, path: 'M 0,50 L 30,50 L 35,15 L 40,85 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.22, offset: 5, duration: 3.5 },
  { x: 250, y: 550, path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', color: '#AEC8B9', width: 2, opacity: 0.2, offset: 2, duration: 3.3 },
  { x: 650, y: 600, path: 'M 0,50 L 30,50 L 35,22 L 40,78 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.21, offset: 8, duration: 3.4 },
]);

// Floating Health Icons
const healthIcons = ref([
  { x: 300, y: 120, color: '#367e72', opacity: 0.23, duration: 5.5, scale: 0.16, moveX: 11, moveY: -11 },
  { x: 600, y: 200, color: '#AEC8B9', opacity: 0.21, duration: 6, scale: 0.18, moveX: -13, moveY: 13 },
  { x: 900, y: 280, color: '#367e72', opacity: 0.22, duration: 5.8, scale: 0.17, moveX: 12, moveY: -12 },
]);

// AI Processing Nodes
const aiNodes = ref([
  { x: 200, y: 400, radius: 7, gradient: 'url(#operateOrbGrad)', opacity: 0.25, duration: 4.5, moveX: 12, moveY: -12 },
  { x: 500, y: 450, radius: 8, gradient: 'url(#operateOrbGrad)', opacity: 0.27, duration: 5, moveX: -14, moveY: 14 },
  { x: 800, y: 500, radius: 7, gradient: 'url(#operateOrbGrad)', opacity: 0.26, duration: 4.8, moveX: 13, moveY: -13 },
  { x: 350, y: 650, radius: 8, gradient: 'url(#operateOrbGrad)', opacity: 0.27, duration: 5.2, moveX: -15, moveY: 15 },
]);

// Floating Medical Elements
const pillCapsules = ref([
  { x: 150, y: 180, gradient: 'url(#operateGrad1)', lineColor: '#367e72', opacity: 0.2, rotation: 15, duration: 8, moveX: 12, moveY: -10 },
  { x: 550, y: 380, gradient: 'url(#operateGrad2)', lineColor: '#AEC8B9', opacity: 0.22, rotation: -12, duration: 9, moveX: -10, moveY: 12 },
  { x: 850, y: 480, gradient: 'url(#operateGrad1)', lineColor: '#367e72', opacity: 0.21, rotation: 20, duration: 7.5, moveX: 15, moveY: -12 },
]);

const medicalCrosses = ref([
  { x: 400, y: 320, gradient: 'url(#operateGrad1)', opacity: 0.22, duration: 13 },
  { x: 700, y: 420, gradient: 'url(#operateGrad2)', opacity: 0.24, duration: 15 },
]);

// Floating Particles
const floatingParticles = ref([
  { x: 180, y: 100, radius: 3.5, gradient: 'url(#operateOrbGrad)', opacity: 0.4, duration: 2.8, moveX: 25, moveY: -30 },
  { x: 450, y: 150, radius: 3, gradient: 'url(#operateOrbGrad)', opacity: 0.38, duration: 3.2, moveX: -28, moveY: 28 },
  { x: 750, y: 120, radius: 3.5, gradient: 'url(#operateOrbGrad)', opacity: 0.39, duration: 3, moveX: 30, moveY: -32 },
  { x: 350, y: 400, radius: 3, gradient: 'url(#operateOrbGrad)', opacity: 0.4, duration: 3.5, moveX: -27, moveY: 31 },
  { x: 650, y: 450, radius: 3.5, gradient: 'url(#operateOrbGrad)', opacity: 0.38, duration: 3.2, moveX: 29, moveY: -29 },
]);
</script>

<style scoped>
.operate-vectors {
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

.ai-flow-lines,
.health-pulse-waves,
.floating-health-icons,
.ai-processing-nodes,
.floating-medical-elements,
.floating-particles {
  animation: fade-in 2s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.ai-flow-lines path,
.health-pulse-waves path,
.floating-health-icons path,
.ai-processing-nodes circle,
.floating-medical-elements ellipse,
.floating-medical-elements line,
.floating-medical-elements rect,
.floating-particles circle {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
