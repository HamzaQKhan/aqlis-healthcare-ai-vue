<template>
  <div class="advanced-vectors" ref="containerRef">
    <!-- Complex Animated Background Pattern -->
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <!-- Animated Grid Pattern -->
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" :stroke="colors[0]" stroke-width="0.5" opacity="0.2">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
          </path>
        </pattern>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :style="`stop-color:${colors[0]};stop-opacity:0.3`" />
          <stop offset="100%" :style="`stop-color:${colors[1]};stop-opacity:0.1`" />
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      <!-- Animated Curved Paths -->
      <path
        v-for="(path, index) in curvedPaths"
        :key="'path-' + index"
        :d="path.d"
        :fill="path.fill"
        :opacity="path.opacity"
        class="curved-path"
        :style="{ filter: `blur(${path.blur}px)` }"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          :values="`${path.startX},${path.startY}; ${path.endX},${path.endY}; ${path.startX},${path.startY}`"
          :dur="`${path.duration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          :values="`${path.opacity};${path.opacity * 0.5};${path.opacity}`"
          :dur="`${path.duration}s`"
          repeatCount="indefinite"
        />
      </path>
      
      <!-- Morphing Blob Shapes -->
      <path
        v-for="(blob, index) in morphingBlobs"
        :key="'blob-' + index"
        :d="blob.path"
        :fill="blob.color"
        :opacity="blob.opacity"
        class="morphing-blob"
      >
        <animate
          attributeName="d"
          :values="blob.morphPaths"
          :dur="`${blob.duration}s`"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          :values="`0 ${blob.centerX} ${blob.centerY}; 360 ${blob.centerX} ${blob.centerY}`"
          :dur="`${blob.rotationDuration}s`"
          repeatCount="indefinite"
        />
      </path>
      
      <!-- Animated Orbs -->
      <circle
        v-for="(orb, index) in animatedOrbs"
        :key="'orb-' + index"
        :cx="orb.x"
        :cy="orb.y"
        :r="orb.radius"
        :fill="orb.color"
        :opacity="orb.opacity"
        class="animated-orb"
      >
        <animate
          attributeName="r"
          :values="`${orb.radius};${orb.radius * 1.5};${orb.radius}`"
          :dur="`${orb.pulseDuration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          :values="`${orb.opacity};${orb.opacity * 0.3};${orb.opacity}`"
          :dur="`${orb.pulseDuration}s`"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          :values="`0,0; ${orb.moveX},${orb.moveY}; 0,0`"
          :dur="`${orb.moveDuration}s`"
          repeatCount="indefinite"
        />
      </circle>
      
      <!-- Animated Wave Lines -->
      <path
        v-for="(wave, index) in waveLines"
        :key="'wave-' + index"
        :d="wave.path"
        :stroke="wave.color"
        :stroke-width="wave.width"
        fill="none"
        :opacity="wave.opacity"
        class="wave-line"
      >
        <animate
          attributeName="d"
          :values="wave.morphPaths"
          :dur="`${wave.duration}s`"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          :values="`0,0; ${wave.translateX},0; 0,0`"
          :dur="`${wave.duration}s`"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  colors: {
    type: Array,
    default: () => ['#367e72', '#246f66', '#aec8b9', '#54a89a']
  },
  intensity: {
    type: String,
    default: 'medium',
    validator: (value) => ['low', 'medium', 'high'].includes(value)
  }
});

const containerRef = ref(null);

const intensityMultiplier = computed(() => {
  const multipliers = { low: 0.5, medium: 1, high: 1.5 };
  return multipliers[props.intensity];
});

// Generate curved paths
const curvedPaths = ref([
  {
    d: 'M 0,200 Q 200,100 400,200 T 800,200',
    fill: `url(#grad1)`,
    opacity: 0.15,
    blur: 2,
    startX: -100,
    startY: 0,
    endX: 100,
    endY: -50,
    duration: 8
  },
  {
    d: 'M 0,400 Q 300,300 600,400 T 1200,400',
    fill: props.colors[1],
    opacity: 0.12,
    blur: 3,
    startX: 0,
    startY: 0,
    endX: -80,
    endY: 30,
    duration: 10
  },
  {
    d: 'M 200,0 Q 400,150 600,0',
    fill: props.colors[2],
    opacity: 0.1,
    blur: 2,
    startX: 0,
    startY: 50,
    endX: 50,
    endY: 0,
    duration: 12
  }
]);

// Morphing blob shapes
const morphingBlobs = ref([
  {
    path: 'M 200,300 Q 250,250 300,300 Q 250,350 200,300',
    morphPaths: 'M 200,300 Q 250,250 300,300 Q 250,350 200,300; M 220,280 Q 270,240 320,300 Q 270,360 220,320; M 200,300 Q 250,250 300,300 Q 250,350 200,300',
    color: props.colors[0],
    opacity: 0.08,
    centerX: 250,
    centerY: 300,
    duration: 6,
    rotationDuration: 20
  },
  {
    path: 'M 800,500 Q 850,450 900,500 Q 850,550 800,500',
    morphPaths: 'M 800,500 Q 850,450 900,500 Q 850,550 800,500; M 780,480 Q 830,440 880,500 Q 830,560 780,520; M 800,500 Q 850,450 900,500 Q 850,550 800,500',
    color: props.colors[1],
    opacity: 0.1,
    centerX: 850,
    centerY: 500,
    duration: 8,
    rotationDuration: 25
  },
  {
    path: 'M 500,100 Q 550,50 600,100 Q 550,150 500,100',
    morphPaths: 'M 500,100 Q 550,50 600,100 Q 550,150 500,100; M 480,120 Q 530,70 580,120 Q 530,170 480,130; M 500,100 Q 550,50 600,100 Q 550,150 500,100',
    color: props.colors[2],
    opacity: 0.12,
    centerX: 550,
    centerY: 100,
    duration: 7,
    rotationDuration: 18
  }
]);

// Animated orbs
const animatedOrbs = ref([
  { x: 150, y: 150, radius: 30, color: props.colors[0], opacity: 0.15, pulseDuration: 4, moveX: 50, moveY: -30, moveDuration: 6 },
  { x: 900, y: 200, radius: 40, color: props.colors[1], opacity: 0.12, pulseDuration: 5, moveX: -40, moveY: 40, moveDuration: 8 },
  { x: 600, y: 600, radius: 35, color: props.colors[2], opacity: 0.18, pulseDuration: 3.5, moveX: 60, moveY: -50, moveDuration: 7 },
  { x: 300, y: 650, radius: 25, color: props.colors[0], opacity: 0.1, pulseDuration: 4.5, moveX: -30, moveY: 30, moveDuration: 9 },
  { x: 1000, y: 500, radius: 45, color: props.colors[1], opacity: 0.14, pulseDuration: 5.5, moveX: 40, moveY: -40, moveDuration: 10 }
]);

// Wave lines
const waveLines = ref([
  {
    path: 'M 0,200 Q 200,150 400,200 T 800,200',
    morphPaths: 'M 0,200 Q 200,150 400,200 T 800,200; M 0,200 Q 200,180 400,200 T 800,200; M 0,200 Q 200,150 400,200 T 800,200',
    color: props.colors[0],
    width: 2,
    opacity: 0.2,
    duration: 4,
    translateX: 50
  },
  {
    path: 'M 0,600 Q 300,550 600,600 T 1200,600',
    morphPaths: 'M 0,600 Q 300,550 600,600 T 1200,600; M 0,600 Q 300,580 600,600 T 1200,600; M 0,600 Q 300,550 600,600 T 1200,600',
    color: props.colors[1],
    width: 1.5,
    opacity: 0.15,
    duration: 5,
    translateX: -30
  }
]);

onMounted(() => {
  // Additional GSAP animations can be added here
});
</script>

<style scoped>
.advanced-vectors {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.vector-background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.curved-path,
.morphing-blob,
.animated-orb,
.wave-line {
  transition: all 0.3s ease;
}

.morphing-blob {
  filter: blur(1px);
}

.animated-orb {
  filter: blur(0.5px);
}
</style>

