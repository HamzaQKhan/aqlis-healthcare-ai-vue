<template>
  <div class="animated-icon-wrapper" :class="{ 'animate-on-scroll': animateOnScroll }">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 100 100"
      class="animated-icon"
      ref="iconRef"
    >
      <!-- Animated Healthcare Cross Icon -->
      <g v-if="type === 'healthcare'">
        <circle
          cx="50"
          cy="50"
          r="45"
          :fill="color"
          opacity="0.1"
          class="icon-bg"
        >
          <animate
            attributeName="r"
            values="45;50;45"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <path
          d="M 50 20 L 50 80 M 20 50 L 80 50"
          :stroke="color"
          stroke-width="8"
          stroke-linecap="round"
          class="icon-cross"
        >
          <animate
            attributeName="stroke-width"
            values="8;10;8"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <!-- Animated Shield Icon -->
      <g v-else-if="type === 'shield'">
        <path
          d="M 50 10 L 70 20 L 70 45 Q 70 65 50 85 Q 30 65 30 45 L 30 20 Z"
          :fill="color"
          :opacity="opacity"
          class="icon-shield"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.05;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M 50 10 L 70 20 L 70 45 Q 70 65 50 85 Q 30 65 30 45 L 30 20 Z"
          :stroke="color"
          stroke-width="2"
          fill="none"
        />
      </g>
      
      <!-- Animated Heart Icon -->
      <g v-else-if="type === 'heart'">
        <path
          d="M 50 30 Q 50 20 40 20 Q 30 20 30 30 Q 30 40 50 60 Q 70 40 70 30 Q 70 20 60 20 Q 50 20 50 30"
          :fill="color"
          :opacity="opacity"
          class="icon-heart"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.1;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <!-- Default Animated Circle -->
      <g v-else>
        <circle
          cx="50"
          cy="50"
          r="30"
          :fill="color"
          :opacity="opacity"
        >
          <animate
            attributeName="r"
            values="30;35;30"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['healthcare', 'shield', 'heart', 'default'].includes(value)
  },
  size: {
    type: Number,
    default: 100
  },
  color: {
    type: String,
    default: '#367e72'
  },
  opacity: {
    type: Number,
    default: 0.6
  },
  animateOnScroll: {
    type: Boolean,
    default: false
  }
});

const iconRef = ref(null);

onMounted(() => {
  if (props.animateOnScroll && iconRef.value) {
    // Add scroll-triggered animations using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(iconRef.value);
  }
});
</script>

<style scoped>
.animated-icon-wrapper {
  display: inline-block;
  transition: transform 0.3s ease;
}

.animated-icon-wrapper:hover {
  transform: scale(1.1);
}

.animated-icon {
  display: block;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.icon-bg,
.icon-cross,
.icon-shield,
.icon-heart {
  transition: all 0.3s ease;
}

.animate-on-scroll .animated-icon {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.animate-on-scroll.is-visible .animated-icon {
  opacity: 1;
  transform: scale(1);
}
</style>

