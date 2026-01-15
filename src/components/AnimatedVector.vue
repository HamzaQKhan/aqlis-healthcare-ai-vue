<template>
  <div class="animated-vector" ref="vectorContainer">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 200 200"
      class="vector-svg"
      ref="svgElement"
    >
      <!-- Animated Circle -->
      <circle
        cx="100"
        cy="100"
        :r="circleRadius"
        :fill="color"
        :opacity="opacity"
        class="vector-circle"
      >
        <animate
          attributeName="r"
          :values="`${circleRadius};${circleRadius + 10};${circleRadius}`"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      
      <!-- Animated Path/Wave -->
      <path
        :d="wavePath"
        :fill="color"
        :opacity="opacity * 0.5"
        class="vector-wave"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 20,0; 0,0"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      
      <!-- Floating Particles -->
      <circle
        v-for="(particle, index) in particles"
        :key="index"
        :cx="particle.x"
        :cy="particle.y"
        :r="particle.r"
        :fill="color"
        :opacity="particle.opacity"
      >
        <animate
          attributeName="cy"
          :values="`${particle.y};${particle.y - 20};${particle.y}`"
          :dur="`${2 + index * 0.5}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          :values="`${particle.opacity};${particle.opacity * 0.3};${particle.opacity}`"
          :dur="`${2 + index * 0.5}s`"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 200
  },
  color: {
    type: String,
    default: '#367e72'
  },
  opacity: {
    type: Number,
    default: 0.3
  },
  circleRadius: {
    type: Number,
    default: 40
  }
});

const vectorContainer = ref(null);
const svgElement = ref(null);

const wavePath = computed(() => {
  return `M 0,100 Q 50,80 100,100 T 200,100 L 200,200 L 0,200 Z`;
});

const particles = ref([
  { x: 50, y: 50, r: 3, opacity: 0.4 },
  { x: 150, y: 80, r: 4, opacity: 0.5 },
  { x: 80, y: 150, r: 2, opacity: 0.3 },
  { x: 120, y: 40, r: 3, opacity: 0.4 }
]);

onMounted(() => {
  // Additional GSAP animations can be added here if needed
});
</script>

<style scoped>
.animated-vector {
  display: inline-block;
  pointer-events: none;
}

.vector-svg {
  display: block;
  filter: blur(0.5px);
}

.vector-circle,
.vector-wave {
  transition: all 0.3s ease;
}
</style>

