<template>
  <div class="animated-background" ref="backgroundRef">
    <!-- Mesh Gradient Background -->
    <svg class="mesh-gradient" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="mesh1" cx="30%" cy="20%">
          <stop offset="0%" :style="`stop-color:${colors[0]};stop-opacity:0.4`" />
          <stop offset="100%" :style="`stop-color:${colors[1]};stop-opacity:0`" />
        </radialGradient>
        <radialGradient id="mesh2" cx="70%" cy="80%">
          <stop offset="0%" :style="`stop-color:${colors[2]};stop-opacity:0.3`" />
          <stop offset="100%" :style="`stop-color:${colors[0]};stop-opacity:0`" />
        </radialGradient>
        <radialGradient id="mesh3" cx="50%" cy="50%">
          <stop offset="0%" :style="`stop-color:${colors[1]};stop-opacity:0.25`" />
          <stop offset="100%" :style="`stop-color:${colors[2]};stop-opacity:0`" />
        </radialGradient>
      </defs>
      
      <!-- Animated Mesh Circles -->
      <circle cx="360" cy="160" r="200" fill="url(#mesh1)" class="mesh-circle">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 50,-30; 0,0"
          dur="15s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="200;250;200"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="840" cy="640" r="180" fill="url(#mesh2)" class="mesh-circle">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -40,40; 0,0"
          dur="18s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="180;220;180"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle cx="600" cy="400" r="150" fill="url(#mesh3)" class="mesh-circle">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 30,30; 0,0"
          dur="20s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="150;180;150"
          dur="14s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    
    <!-- Animated Grid Overlay -->
    <div class="grid-overlay">
      <div
        v-for="(line, index) in gridLines"
        :key="'line-' + index"
        class="grid-line"
        :class="line.direction"
        :style="line.style"
      >
        <div class="grid-line-inner"></div>
      </div>
    </div>
    
    <!-- Floating Particles -->
    <div class="particles-container">
      <div
        v-for="(particle, index) in particles"
        :key="'particle-' + index"
        class="particle"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          width: particle.size + 'px',
          height: particle.size + 'px',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's',
          backgroundColor: particle.color,
          opacity: particle.opacity
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  colors: {
    type: Array,
    default: () => ['#367e72', '#246f66', '#aec8b9']
  }
});

const backgroundRef = ref(null);

// Generate grid lines
const gridLines = ref([]);
for (let i = 0; i < 20; i++) {
  gridLines.value.push({
    direction: i % 2 === 0 ? 'horizontal' : 'vertical',
    style: {
      [i % 2 === 0 ? 'top' : 'left']: `${(i / 20) * 100}%`,
      opacity: 0.05 + Math.random() * 0.05
    }
  });
}

// Generate particles
const particles = ref([]);
for (let i = 0; i < 30; i++) {
  particles.value.push({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 12,
    color: props.colors[Math.floor(Math.random() * props.colors.length)],
    opacity: 0.1 + Math.random() * 0.2
  });
}

onMounted(() => {
  // Additional setup if needed
});
</script>

<style scoped>
.animated-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.mesh-gradient {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(60px);
}

.mesh-circle {
  mix-blend-mode: multiply;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.3;
}

.grid-line {
  position: absolute;
  background: linear-gradient(
    to right,
    transparent,
    var(--insight-teal, #367e72),
    transparent
  );
}

.grid-line.horizontal {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(54, 126, 114, 0.1),
    transparent
  );
}

.grid-line.vertical {
  height: 100%;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(54, 126, 114, 0.1),
    transparent
  );
}

.grid-line-inner {
  width: 100%;
  height: 100%;
  animation: gridPulse 4s ease-in-out infinite;
}

@keyframes gridPulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.particles-container {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: floatParticle 10s ease-in-out infinite;
  filter: blur(1px);
}

@keyframes floatParticle {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(20px, -30px) scale(1.2);
    opacity: 0.6;
  }
  50% {
    transform: translate(-15px, -50px) scale(0.8);
    opacity: 0.4;
  }
  75% {
    transform: translate(25px, -20px) scale(1.1);
    opacity: 0.5;
  }
}
</style>

