<template>
  <div class="security-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="securityGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#246f66;stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0.05" />
        </linearGradient>
        <linearGradient id="securityGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#aec8b9;stop-opacity:0.12" />
          <stop offset="100%" style="stop-color:#246f66;stop-opacity:0.08" />
        </linearGradient>
        <radialGradient id="shieldGlow">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Multiple Animated Shield Shapes -->
      <g class="shield-group" transform="translate(200, 150)">
        <path
          d="M 0 -40 L 30 -20 L 30 20 L 0 40 L -30 20 L -30 -20 Z"
          fill="url(#securityGrad1)"
          opacity="0.4"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 0 0; 360 0 0"
            dur="20s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <g class="shield-group-2" transform="translate(1000, 600)">
        <path
          d="M 0 -30 L 25 -15 L 25 15 L 0 30 L -25 15 L -25 -15 Z"
          fill="url(#securityGrad2)"
          opacity="0.35"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="360 0 0; 0 0 0"
            dur="25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.25;0.5;0.25"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <g class="shield-group-3" transform="translate(80, 500)">
        <path
          d="M 0 -25 L 20 -12 L 20 12 L 0 25 L -20 12 L -20 -12 Z"
          fill="url(#securityGrad1)"
          opacity="0.3"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 0 0; 360 0 0"
            dur="30s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.2;0.45;0.2"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <!-- Multiple Floating Lock Icons -->
      <g class="lock-group" transform="translate(900, 200)">
        <rect x="-15" y="-20" width="30" height="25" rx="3" fill="none" stroke="#367e72" stroke-width="2" opacity="0.3">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />
        </rect>
        <circle cx="0" cy="-10" r="4" fill="#367e72" opacity="0.3">
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      <g class="lock-group-2" transform="translate(150, 300)">
        <rect x="-12" y="-16" width="24" height="20" rx="2" fill="none" stroke="#246f66" stroke-width="1.5" opacity="0.25">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-8; 0,0"
            dur="4s"
            repeatCount="indefinite"
          />
        </rect>
        <circle cx="0" cy="-8" r="3" fill="#246f66" opacity="0.25">
          <animate
            attributeName="opacity"
            values="0.15;0.4;0.15"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      <g class="lock-group-3" transform="translate(1100, 400)">
        <rect x="-10" y="-14" width="20" height="18" rx="2" fill="none" stroke="#aec8b9" stroke-width="1.5" opacity="0.2">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-6; 0,0"
            dur="5s"
            repeatCount="indefinite"
          />
        </rect>
        <circle cx="0" cy="-7" r="2.5" fill="#aec8b9" opacity="0.2">
          <animate
            attributeName="opacity"
            values="0.1;0.35;0.1"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      <!-- Animated Checkmarks -->
      <g class="checkmark-group" transform="translate(500, 100)">
        <path
          d="M -15 -5 L -5 5 L 15 -15"
          stroke="#367e72"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 5,-5; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.2;0.4;0.2"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <g class="checkmark-group-2" transform="translate(300, 700)">
        <path
          d="M -12 -4 L -4 4 L 12 -12"
          stroke="#246f66"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          opacity="0.25"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -4,4; 0,0"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.15;0.35;0.15"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <!-- Connection Lines -->
      <g class="connection-lines">
        <line
          x1="200"
          y1="150"
          x2="500"
          y2="100"
          stroke="#367e72"
          stroke-width="1"
          opacity="0.15"
          stroke-dasharray="3,3"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;10;0"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.2;0.1"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="900"
          y1="200"
          x2="1100"
          y2="400"
          stroke="#246f66"
          stroke-width="1"
          opacity="0.12"
          stroke-dasharray="3,3"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;10;0"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.08;0.18;0.08"
            dur="5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="150"
          y1="300"
          x2="300"
          y2="700"
          stroke="#aec8b9"
          stroke-width="1"
          opacity="0.1"
          stroke-dasharray="3,3"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;10;0"
            dur="5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.05;0.15;0.05"
            dur="6s"
            repeatCount="indefinite"
          />
        </line>
      </g>
      
      <!-- Animated Encryption Lines -->
      <g class="encryption-lines">
        <path
          v-for="(line, index) in encryptionLines"
          :key="'line-' + index"
          :d="line.path"
          :stroke="line.color"
          :stroke-width="line.width"
          fill="none"
          :opacity="line.opacity"
          stroke-dasharray="5,5"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`${line.offset};${line.offset - 20};${line.offset}`"
            :dur="`${line.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${line.opacity};${line.opacity * 0.5};${line.opacity}`"
            :dur="`${line.duration * 1.5}s`"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <!-- Pulsing Security Orbs -->
      <circle
        v-for="(orb, index) in securityOrbs"
        :key="'orb-' + index"
        :cx="orb.x"
        :cy="orb.y"
        :r="orb.radius"
        :fill="orb.color"
        :opacity="orb.opacity"
        filter="url(#glow)"
      >
        <animate
          attributeName="r"
          :values="`${orb.radius};${orb.radius * 1.5};${orb.radius}`"
          :dur="`${orb.duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          :values="`${orb.opacity};${orb.opacity * 0.3};${orb.opacity}`"
          :dur="`${orb.duration}s`"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          :values="`0,0; ${orb.moveX},${orb.moveY}; 0,0`"
          :dur="`${orb.duration * 2}s`"
          repeatCount="indefinite"
        />
      </circle>
      
      <!-- Grid Pattern -->
      <pattern id="securityGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#367e72" stroke-width="0.5" opacity="0.1">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="6s" repeatCount="indefinite" />
        </path>
      </pattern>
      <rect width="100%" height="100%" fill="url(#securityGrid)" />
      
      <!-- Floating Particles -->
      <circle
        v-for="(particle, index) in particles"
        :key="'particle-' + index"
        :cx="particle.x"
        :cy="particle.y"
        r="2"
        :fill="particle.color"
        :opacity="particle.opacity"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          :values="`0,0; ${particle.moveX},${particle.moveY}; 0,0`"
          :dur="`${particle.duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          :values="`${particle.opacity};0;${particle.opacity}`"
          :dur="`${particle.duration}s`"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const containerRef = ref(null);

const encryptionLines = ref([
  { path: 'M 100 300 Q 300 200 500 300', color: '#367e72', width: 2, opacity: 0.3, offset: 0, duration: 4 },
  { path: 'M 700 500 Q 900 400 1100 500', color: '#246f66', width: 1.5, opacity: 0.25, offset: 10, duration: 5 },
  { path: 'M 150 600 Q 400 500 650 600', color: '#aec8b9', width: 1.5, opacity: 0.2, offset: 5, duration: 6 },
  { path: 'M 50 200 Q 250 150 450 200', color: '#367e72', width: 1.5, opacity: 0.2, offset: 8, duration: 5.5 },
  { path: 'M 800 300 Q 1000 250 1150 300', color: '#246f66', width: 1.5, opacity: 0.18, offset: 12, duration: 6.5 },
  { path: 'M 200 700 Q 500 650 800 700', color: '#aec8b9', width: 1.5, opacity: 0.15, offset: 6, duration: 7 },
]);

const securityOrbs = ref([
  { x: 150, y: 100, radius: 40, color: '#367e72', opacity: 0.15, duration: 8, moveX: 30, moveY: -20 },
  { x: 1050, y: 700, radius: 50, color: '#246f66', opacity: 0.12, duration: 10, moveX: -40, moveY: 30 },
  { x: 600, y: 150, radius: 35, color: '#aec8b9', opacity: 0.1, duration: 7, moveX: 20, moveY: 25 },
  { x: 400, y: 500, radius: 30, color: '#367e72', opacity: 0.12, duration: 9, moveX: -25, moveY: -15 },
  { x: 950, y: 100, radius: 28, color: '#246f66', opacity: 0.1, duration: 8.5, moveX: 15, moveY: 20 },
  { x: 250, y: 650, radius: 32, color: '#aec8b9', opacity: 0.08, duration: 11, moveX: -20, moveY: 25 },
]);

const particles = ref([]);

onMounted(() => {
  // Generate more random particles
  for (let i = 0; i < 25; i++) {
    particles.value.push({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      color: ['#367e72', '#246f66', '#aec8b9'][Math.floor(Math.random() * 3)],
      opacity: 0.15 + Math.random() * 0.25,
      moveX: (Math.random() - 0.5) * 120,
      moveY: (Math.random() - 0.5) * 120,
      duration: 4 + Math.random() * 6,
    });
  }
});
</script>

<style scoped>
.security-vectors {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.vector-background {
  width: 100%;
  height: 100%;
}

.shield-group {
  animation: float 6s ease-in-out infinite;
}

.shield-group-2 {
  animation: float 8s ease-in-out infinite;
  animation-delay: -2s;
}

.shield-group-3 {
  animation: float 7s ease-in-out infinite;
  animation-delay: -4s;
}

.lock-group {
  animation: float 5s ease-in-out infinite;
}

.lock-group-2 {
  animation: float 6.5s ease-in-out infinite;
  animation-delay: -1.5s;
}

.lock-group-3 {
  animation: float 7.5s ease-in-out infinite;
  animation-delay: -3s;
}

.checkmark-group {
  animation: float 4s ease-in-out infinite;
}

.checkmark-group-2 {
  animation: float 5.5s ease-in-out infinite;
  animation-delay: -2.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-15px) translateX(5px);
  }
  50% {
    transform: translateY(-20px) translateX(0px);
  }
  75% {
    transform: translateY(-15px) translateX(-5px);
  }
}
</style>

