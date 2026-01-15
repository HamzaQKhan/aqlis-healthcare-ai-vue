<template>
  <div class="trust-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="trustGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.36" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.24" />
        </linearGradient>
        <linearGradient id="trustGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.42" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.34" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.26" />
        </linearGradient>
        <radialGradient id="trustOrbGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.46" />
          <stop offset="60%" style="stop-color:#AEC8B9;stop-opacity:0.32" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        
        <filter id="trustGlowFilter">
          <feGaussianBlur stdDeviation="7" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.8 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="trustSoftGlowFilter">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.65 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Security Shield Patterns -->
      <g class="security-shields">
        <g
          v-for="(shield, index) in securityShields"
          :key="'shield-' + index"
          :transform="`translate(${shield.x}, ${shield.y})`"
        >
          <path
            d="M 50,10 Q 30,10 20,25 Q 15,40 25,55 Q 30,70 50,80 Q 70,70 75,55 Q 85,40 80,25 Q 70,10 50,10 Z"
            :fill="shield.gradient"
            :opacity="shield.opacity * 0.3"
            filter="url(#trustGlowFilter)"
          />
          <path
            d="M 50,10 Q 30,10 20,25 Q 15,40 25,55 Q 30,70 50,80 Q 70,70 75,55 Q 85,40 80,25 Q 70,10 50,10 M 50,30 L 40,40 L 50,50 L 60,40 Z"
            :stroke="shield.color"
            :stroke-width="2"
            fill="none"
            :opacity="shield.opacity"
            stroke-linecap="round"
            filter="url(#trustSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${shield.moveX},${shield.moveY}; 0,0; -${shield.moveX * 0.6},-${shield.moveY * 0.6}; 0,0`"
              :dur="`${shield.duration}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 50 45; ${shield.rotation} 50 45; 0 50 45; -${shield.rotation * 0.5} 50 45; 0 50 45`"
              :dur="`${shield.duration * 2}s`"
              repeatCount="indefinite"
              additive="sum"
            />
          </path>
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
            filter="url(#trustSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 32,0; 0,0; -32,0; 0,0`"
              :dur="`${wave.duration * 1.8}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="stroke-dashoffset"
              :values="`${wave.offset};${wave.offset - 95};${wave.offset}`"
              :dur="`${wave.duration * 0.98}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity};${wave.opacity * 0.4};${wave.opacity}`"
              :dur="`${wave.duration * 1.5}s`"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>

      <!-- AI Lock Icons (Security) -->
      <g class="ai-lock-icons">
        <g
          v-for="(lock, index) in lockIcons"
          :key="'lock-' + index"
          :transform="`translate(${lock.x}, ${lock.y})`"
        >
          <rect x="30" y="40" width="40" height="50" :fill="lock.gradient" :opacity="lock.opacity" rx="5" filter="url(#trustSoftGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 0,-${6 + index * 1.5}; 0,0; 0,${4 + index}; 0,0`"
              :dur="`${lock.duration}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </rect>
          <path
            d="M 30,40 Q 30,20 50,20 Q 70,20 70,40"
            :stroke="lock.color"
            :stroke-width="3"
            fill="none"
            :opacity="lock.opacity * 1.2"
            stroke-linecap="round"
            filter="url(#trustSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 0,-${6 + index * 1.5}; 0,0; 0,${4 + index}; 0,0`"
              :dur="`${lock.duration}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
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
          <circle cx="0" cy="0" :r="node.radius * 2.3" :fill="node.gradient" :opacity="node.opacity * 0.22" filter="url(#trustGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2.3};${node.radius * 3.3};${node.radius * 2.3}`"
              :dur="`${node.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius" :fill="node.gradient" :opacity="node.opacity" filter="url(#trustGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${node.moveX},${node.moveY}; 0,0; -${node.moveX * 0.6},-${node.moveY * 0.6}; 0,0`"
              :dur="`${node.duration * 1.6}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 1.5};${node.radius}`"
              :dur="`${node.duration * 1}s`"
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
            filter="url(#trustSoftGlowFilter)"
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
              :dur="`${icon.duration * 1.4}s`"
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
          filter="url(#trustSoftGlowFilter)"
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
      <g class="ai-connections" opacity="0.3">
        <path
          v-for="(conn, index) in aiConnections"
          :key="'conn-' + index"
          :d="conn.path"
          :stroke="conn.color"
          :stroke-width="conn.width"
          fill="none"
          stroke-dasharray="6,6"
          stroke-linecap="round"
          filter="url(#trustSoftGlowFilter)"
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

// Security Shields
const securityShields = ref([
  { x: 200, y: 150, color: '#367e72', gradient: 'url(#trustGrad1)', opacity: 0.24, duration: 6, moveX: 10, moveY: -10, rotation: 12 },
  { x: 600, y: 250, color: '#AEC8B9', gradient: 'url(#trustGrad2)', opacity: 0.26, duration: 6.5, moveX: -12, moveY: 12, rotation: -15 },
  { x: 900, y: 400, color: '#367e72', gradient: 'url(#trustGrad1)', opacity: 0.25, duration: 5.8, moveX: 11, moveY: -11, rotation: 18 },
  { x: 400, y: 550, color: '#AEC8B9', gradient: 'url(#trustGrad2)', opacity: 0.27, duration: 6.2, moveX: -13, moveY: 13, rotation: -12 },
]);

// Health Pulse Waves (ECG Style) - MUST HAVE
const pulseWaves = ref([
  { x: 150, y: 300, path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.25, offset: 0, duration: 2.8 },
  { x: 500, y: 350, path: 'M 0,50 L 30,50 L 35,25 L 40,75 L 45,50 L 100,50', color: '#AEC8B9', width: 2, opacity: 0.23, offset: 10, duration: 3.2 },
  { x: 800, y: 400, path: 'M 0,50 L 30,50 L 35,15 L 40,85 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.24, offset: 5, duration: 3.5 },
  { x: 300, y: 600, path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', color: '#AEC8B9', width: 2, opacity: 0.22, offset: 2, duration: 3.3 },
  { x: 700, y: 650, path: 'M 0,50 L 30,50 L 35,22 L 40,78 L 45,50 L 100,50', color: '#367e72', width: 2.5, opacity: 0.23, offset: 8, duration: 3.4 },
]);

// AI Lock Icons
const lockIcons = ref([
  { x: 350, y: 200, color: '#367e72', gradient: 'url(#trustGrad1)', opacity: 0.22, duration: 12 },
  { x: 750, y: 300, color: '#AEC8B9', gradient: 'url(#trustGrad2)', opacity: 0.24, duration: 14 },
  { x: 550, y: 500, color: '#367e72', gradient: 'url(#trustGrad1)', opacity: 0.23, duration: 13 },
]);

// AI Neural Nodes
const aiNeuralNodes = ref([
  { x: 250, y: 400, radius: 8, gradient: 'url(#trustOrbGrad)', opacity: 0.27, duration: 4.5, moveX: 12, moveY: -12 },
  { x: 650, y: 450, radius: 9, gradient: 'url(#trustOrbGrad)', opacity: 0.29, duration: 5, moveX: -14, moveY: 14 },
  { x: 850, y: 550, radius: 8, gradient: 'url(#trustOrbGrad)', opacity: 0.28, duration: 4.8, moveX: 13, moveY: -13 },
]);

// Floating Health Icons
const healthIcons = ref([
  { x: 300, y: 120, color: '#367e72', opacity: 0.24, duration: 5.5, scale: 0.17, moveX: 11, moveY: -11 },
  { x: 700, y: 180, color: '#AEC8B9', opacity: 0.22, duration: 6, scale: 0.19, moveX: -13, moveY: 13 },
  { x: 500, y: 600, color: '#367e72', opacity: 0.23, duration: 5.8, scale: 0.18, moveX: 12, moveY: -12 },
]);

// Floating Particles
const floatingParticles = ref([
  { x: 180, y: 100, radius: 3.5, gradient: 'url(#trustOrbGrad)', opacity: 0.42, duration: 2.8, moveX: 25, moveY: -30 },
  { x: 550, y: 150, radius: 3, gradient: 'url(#trustOrbGrad)', opacity: 0.4, duration: 3.2, moveX: -28, moveY: 28 },
  { x: 850, y: 120, radius: 3.5, gradient: 'url(#trustOrbGrad)', opacity: 0.41, duration: 3, moveX: 30, moveY: -32 },
  { x: 400, y: 400, radius: 3, gradient: 'url(#trustOrbGrad)', opacity: 0.42, duration: 3.5, moveX: -27, moveY: 31 },
  { x: 750, y: 450, radius: 3.5, gradient: 'url(#trustOrbGrad)', opacity: 0.4, duration: 3.2, moveX: 29, moveY: -29 },
  { x: 600, y: 700, radius: 3, gradient: 'url(#trustOrbGrad)', opacity: 0.41, duration: 3.8, moveX: -26, moveY: 33 },
]);

// AI Connections
const aiConnections = ref([
  { path: 'M 250,400 Q 400,425 650,450', color: '#367e72', width: 1.5, dashLength: 30, duration: 4 },
  { path: 'M 650,450 Q 750,500 850,550', color: '#AEC8B9', width: 1.5, dashLength: 35, duration: 4.5 },
]);
</script>

<style scoped>
.trust-vectors {
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

.security-shields,
.health-pulse-waves,
.ai-lock-icons,
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

.security-shields path,
.health-pulse-waves path,
.ai-lock-icons rect,
.ai-lock-icons path,
.ai-neural-nodes circle,
.floating-health-icons path,
.floating-particles circle,
.ai-connections path {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>

