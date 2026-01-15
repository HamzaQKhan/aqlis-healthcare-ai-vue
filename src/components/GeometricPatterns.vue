<template>
  <div class="geometric-patterns" ref="containerRef">
    <svg class="pattern-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="patternGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :style="`stop-color:${colors[0]};stop-opacity:0.2`" />
          <stop offset="50%" :style="`stop-color:${colors[1]};stop-opacity:0.1`" />
          <stop offset="100%" :style="`stop-color:${colors[2]};stop-opacity:0.15`" />
        </linearGradient>
        <radialGradient id="patternGrad2" cx="50%" cy="50%">
          <stop offset="0%" :style="`stop-color:${colors[0]};stop-opacity:0.3`" />
          <stop offset="100%" :style="`stop-color:${colors[1]};stop-opacity:0`" />
        </radialGradient>
      </defs>
      
      <!-- Hexagon Pattern -->
      <g class="hexagon-group" v-for="(hex, index) in hexagons" :key="'hex-' + index">
        <polygon
          :points="hex.points"
          :fill="hex.fill"
          :opacity="hex.opacity"
          class="hexagon"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            :values="`0 ${hex.centerX} ${hex.centerY}; 360 ${hex.centerX} ${hex.centerY}`"
            :dur="`${hex.rotationSpeed}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${hex.opacity};${hex.opacity * 0.3};${hex.opacity}`"
            :dur="`${hex.pulseSpeed}s`"
            repeatCount="indefinite"
          />
        </polygon>
      </g>
      
      <!-- Animated Lines Connecting Points -->
      <g class="connecting-lines">
        <line
          v-for="(line, index) in connectingLines"
          :key="'line-' + index"
          :x1="line.x1"
          :y1="line.y1"
          :x2="line.x2"
          :y2="line.y2"
          :stroke="line.color"
          :stroke-width="line.width"
          :opacity="line.opacity"
          class="connecting-line"
        >
          <animate
            attributeName="opacity"
            :values="`${line.opacity};${line.opacity * 0.2};${line.opacity}`"
            :dur="`${line.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            :values="`${line.width};${line.width * 1.5};${line.width}`"
            :dur="`${line.duration}s`"
            repeatCount="indefinite"
          />
        </line>
      </g>
      
      <!-- Animated Circles Pattern -->
      <g class="circles-group">
        <circle
          v-for="(circle, index) in circles"
          :key="'circle-' + index"
          :cx="circle.x"
          :cy="circle.y"
          :r="circle.radius"
          :fill="circle.fill"
          :opacity="circle.opacity"
          class="pattern-circle"
        >
          <animate
            attributeName="r"
            :values="`${circle.radius};${circle.radius * 1.8};${circle.radius}`"
            :dur="`${circle.pulseSpeed}s`"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`0,0; ${circle.moveX},${circle.moveY}; 0,0`"
            :dur="`${circle.moveSpeed}s`"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      <!-- Animated Star Shapes -->
      <g class="stars-group">
        <polygon
          v-for="(star, index) in stars"
          :key="'star-' + index"
          :points="star.points"
          :fill="star.fill"
          :opacity="star.opacity"
          class="star-shape"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            :values="`0 ${star.centerX} ${star.centerY}; 360 ${star.centerX} ${star.centerY}`"
            :dur="`${star.rotationSpeed}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${star.opacity};${star.opacity * 0.4};${star.opacity}`"
            :dur="`${star.twinkleSpeed}s`"
            repeatCount="indefinite"
          />
        </polygon>
      </g>
      
      <!-- Animated Spiral Paths -->
      <path
        v-for="(spiral, index) in spirals"
        :key="'spiral-' + index"
        :d="spiral.path"
        :stroke="spiral.color"
        :stroke-width="spiral.width"
        fill="none"
        :opacity="spiral.opacity"
        class="spiral-path"
      >
        <animate
          attributeName="stroke-dasharray"
          :values="`0 ${spiral.length}; ${spiral.length} 0`"
          :dur="`${spiral.duration}s`"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          :values="`0 ${spiral.centerX} ${spiral.centerY}; 360 ${spiral.centerX} ${spiral.centerY}`"
          :dur="`${spiral.rotationDuration}s`"
          repeatCount="indefinite"
        />
      </path>
    </svg>
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

const containerRef = ref(null);

// Generate hexagons
const generateHexagon = (x, y, size) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = x + size * Math.cos(angle);
    const py = y + size * Math.sin(angle);
    points.push(`${px},${py}`);
  }
  return points.join(' ');
};

const hexagons = ref([
  { points: generateHexagon(200, 200, 40), fill: props.colors[0], opacity: 0.1, centerX: 200, centerY: 200, rotationSpeed: 15, pulseSpeed: 3 },
  { points: generateHexagon(600, 300, 50), fill: props.colors[1], opacity: 0.12, centerX: 600, centerY: 300, rotationSpeed: 20, pulseSpeed: 4 },
  { points: generateHexagon(800, 600, 35), fill: props.colors[2], opacity: 0.08, centerX: 800, centerY: 600, rotationSpeed: 18, pulseSpeed: 3.5 },
  { points: generateHexagon(300, 700, 45), fill: props.colors[0], opacity: 0.1, centerX: 300, centerY: 700, rotationSpeed: 22, pulseSpeed: 4.5 }
]);

// Connecting lines
const connectingLines = ref([
  { x1: 200, y1: 200, x2: 600, y2: 300, color: props.colors[0], width: 1, opacity: 0.15, duration: 3 },
  { x1: 600, y1: 300, x2: 800, y2: 600, color: props.colors[1], width: 1.5, opacity: 0.12, duration: 4 },
  { x1: 800, y1: 600, x2: 300, y2: 700, color: props.colors[2], width: 1, opacity: 0.1, duration: 3.5 },
  { x1: 300, y1: 700, x2: 200, y2: 200, color: props.colors[0], width: 1.2, opacity: 0.13, duration: 4.5 }
]);

// Circles
const circles = ref([
  { x: 150, y: 150, radius: 20, fill: props.colors[0], opacity: 0.15, pulseSpeed: 2, moveX: 30, moveY: -20, moveSpeed: 5 },
  { x: 750, y: 250, radius: 25, fill: props.colors[1], opacity: 0.12, pulseSpeed: 2.5, moveX: -25, moveY: 30, moveSpeed: 6 },
  { x: 450, y: 750, radius: 18, fill: props.colors[2], opacity: 0.18, pulseSpeed: 2.2, moveX: 35, moveY: -25, moveSpeed: 5.5 },
  { x: 900, y: 800, radius: 22, fill: props.colors[0], opacity: 0.1, pulseSpeed: 2.8, moveX: -20, moveY: 20, moveSpeed: 7 }
]);

// Stars
const generateStar = (x, y, outerRadius, innerRadius) => {
  const points = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const px = x + radius * Math.cos(angle);
    const py = y + radius * Math.sin(angle);
    points.push(`${px},${py}`);
  }
  return points.join(' ');
};

const stars = ref([
  { points: generateStar(500, 400, 30, 15), fill: props.colors[0], opacity: 0.2, centerX: 500, centerY: 400, rotationSpeed: 10, twinkleSpeed: 2 },
  { points: generateStar(700, 100, 25, 12), fill: props.colors[1], opacity: 0.15, centerX: 700, centerY: 100, rotationSpeed: 12, twinkleSpeed: 2.5 },
  { points: generateStar(100, 500, 20, 10), fill: props.colors[2], opacity: 0.18, centerX: 100, centerY: 500, rotationSpeed: 8, twinkleSpeed: 1.8 }
]);

// Spirals
const spirals = ref([
  {
    path: 'M 500,500 Q 550,450 600,500 Q 550,550 500,500 Q 450,550 400,500 Q 450,450 500,500',
    color: props.colors[0],
    width: 2,
    opacity: 0.15,
    length: 400,
    duration: 3,
    centerX: 500,
    centerY: 500,
    rotationDuration: 15
  },
  {
    path: 'M 200,200 Q 250,150 300,200 Q 250,250 200,200 Q 150,250 100,200 Q 150,150 200,200',
    color: props.colors[1],
    width: 1.5,
    opacity: 0.12,
    length: 300,
    duration: 4,
    centerX: 200,
    centerY: 200,
    rotationDuration: 20
  }
]);

onMounted(() => {
  // Additional animations can be added here
});
</script>

<style scoped>
.geometric-patterns {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.pattern-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.hexagon,
.connecting-line,
.pattern-circle,
.star-shape,
.spiral-path {
  transition: all 0.3s ease;
}

.hexagon {
  filter: blur(0.5px);
}

.star-shape {
  filter: drop-shadow(0 0 2px currentColor);
}
</style>

