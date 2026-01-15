<template>
  <div class="floating-vectors" ref="containerRef">
    <svg
      v-for="(vector, index) in vectors"
      :key="index"
      :width="vector.size"
      :height="vector.size"
      viewBox="0 0 100 100"
      class="floating-vector"
      :style="{
        left: vector.x + '%',
        top: vector.y + '%',
        animationDelay: vector.delay + 's',
        animationDuration: vector.duration + 's'
      }"
    >
      <!-- Animated Geometric Shapes -->
      <circle
        v-if="vector.shape === 'circle'"
        cx="50"
        cy="50"
        r="30"
        :fill="vector.color"
        :opacity="vector.opacity"
      >
        <animate
          attributeName="r"
          :values="`30;${30 + vector.pulse};30`"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          :values="`${vector.opacity};${vector.opacity * 0.5};${vector.opacity}`"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      
      <rect
        v-else-if="vector.shape === 'square'"
        x="20"
        y="20"
        width="60"
        height="60"
        :fill="vector.color"
        :opacity="vector.opacity"
        rx="5"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          :dur="`${vector.rotation}s`"
          repeatCount="indefinite"
        />
      </rect>
      
      <polygon
        v-else-if="vector.shape === 'triangle'"
        points="50,20 80,80 20,80"
        :fill="vector.color"
        :opacity="vector.opacity"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;-360 50 50"
          :dur="`${vector.rotation}s`"
          repeatCount="indefinite"
        />
      </polygon>
      
      <!-- Animated Path/Wave -->
      <path
        v-else
        :d="wavePath"
        :fill="vector.color"
        :opacity="vector.opacity * 0.6"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; 10,0; 0,0"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
  count: {
    type: Number,
    default: 5
  },
  colors: {
    type: Array,
    default: () => ['#367e72', '#246f66', '#aec8b9']
  }
});

const containerRef = ref(null);

const wavePath = computed(() => {
  return 'M 0,50 Q 25,30 50,50 T 100,50 L 100,100 L 0,100 Z';
});

const vectors = ref([]);

onMounted(() => {
  // Generate random floating vectors
  vectors.value = Array.from({ length: props.count }, (_, index) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 40 + Math.random() * 60,
    shape: ['circle', 'square', 'triangle', 'wave'][Math.floor(Math.random() * 4)],
    color: props.colors[Math.floor(Math.random() * props.colors.length)],
    opacity: 0.1 + Math.random() * 0.2,
    delay: Math.random() * 2,
    duration: 8 + Math.random() * 4,
    pulse: 5 + Math.random() * 10,
    rotation: 10 + Math.random() * 20
  }));
});
</script>

<style scoped>
.floating-vectors {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.floating-vector {
  position: absolute;
  animation: float 8s ease-in-out infinite;
  filter: blur(1px);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-20px) translateX(10px) rotate(90deg);
  }
  50% {
    transform: translateY(-40px) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(-20px) translateX(10px) rotate(270deg);
  }
}
</style>

