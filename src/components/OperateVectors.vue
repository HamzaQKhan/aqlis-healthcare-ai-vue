<template>
  <div class="operate-vectors" ref="containerRef">
    <svg class="operate-svg" viewBox="0 0 1200 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="operateGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :style="`stop-color:${colors[0]};stop-opacity:0.25`" />
          <stop offset="100%" :style="`stop-color:${colors[1]};stop-opacity:0`" />
        </linearGradient>
        <radialGradient id="operateGrad2" cx="50%" cy="50%">
          <stop offset="0%" :style="`stop-color:${colors[2]};stop-opacity:0.3`" />
          <stop offset="100%" :style="`stop-color:${colors[0]};stop-opacity:0`" />
        </radialGradient>
      </defs>
      
      <!-- Animated Flow Lines -->
      <g class="flow-lines">
        <path
          v-for="(flow, index) in flowLines"
          :key="'flow-' + index"
          :d="flow.path"
          :stroke="flow.color"
          :stroke-width="flow.width"
          fill="none"
          :opacity="flow.opacity"
          class="flow-line"
          :stroke-dasharray="flow.dashArray"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`${flow.dashOffset};0;${flow.dashOffset}`"
            :dur="`${flow.duration}s`"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`${flow.startX},${flow.startY}; ${flow.endX},${flow.endY}; ${flow.startX},${flow.startY}`"
            :dur="`${flow.duration * 1.5}s`"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <!-- Animated Nodes/Connection Points -->
      <g class="connection-nodes">
        <circle
          v-for="(node, index) in connectionNodes"
          :key="'node-' + index"
          :cx="node.x"
          :cy="node.y"
          :r="node.radius"
          :fill="node.color"
          :opacity="node.opacity"
          class="connection-node"
        >
          <animate
            attributeName="r"
            :values="`${node.radius};${node.radius * 1.6};${node.radius}`"
            :dur="`${node.pulseSpeed}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${node.opacity};${node.opacity * 0.4};${node.opacity}`"
            :dur="`${node.pulseSpeed}s`"
            repeatCount="indefinite"
          />
          <!-- Ripple effect -->
          <circle
            :cx="node.x"
            :cy="node.y"
            :r="node.radius"
            :fill="node.color"
            :opacity="0"
            class="ripple"
          >
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 4};${node.radius * 4}`"
              :dur="`${node.pulseSpeed * 2}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0;0"
              :dur="`${node.pulseSpeed * 2}s`"
              repeatCount="indefinite"
            />
          </circle>
        </circle>
      </g>
      
      <!-- Animated Arrows/Flow Indicators -->
      <g class="flow-arrows">
        <path
          v-for="(arrow, index) in flowArrows"
          :key="'arrow-' + index"
          :d="arrow.path"
          :fill="arrow.color"
          :opacity="arrow.opacity"
          class="flow-arrow"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`${arrow.startX},${arrow.startY}; ${arrow.endX},${arrow.endY}; ${arrow.startX},${arrow.startY}`"
            :dur="`${arrow.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${arrow.opacity};${arrow.opacity * 0.3};${arrow.opacity}`"
            :dur="`${arrow.duration}s`"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      <!-- Animated Process Steps Circles -->
      <g class="process-steps">
        <circle
          v-for="(step, index) in processSteps"
          :key="'step-' + index"
          :cx="step.x"
          :cy="step.y"
          :r="step.radius"
          :fill="step.fill"
          :stroke="step.stroke"
          :stroke-width="step.strokeWidth"
          :opacity="step.opacity"
          class="process-step"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            :values="`1;1.2;1`"
            :dur="`${step.scaleSpeed}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            :values="`${step.strokeWidth};${step.strokeWidth * 2};${step.strokeWidth}`"
            :dur="`${step.scaleSpeed}s`"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      <!-- Animated Data Flow Visualization -->
      <g class="data-flow">
        <rect
          v-for="(data, index) in dataFlow"
          :key="'data-' + index"
          :x="data.x"
          :y="data.y"
          :width="data.width"
          :height="data.height"
          :rx="data.rx"
          :fill="data.fill"
          :opacity="data.opacity"
          class="data-block"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`0,0; ${data.moveX},${data.moveY}; 0,0`"
            :dur="`${data.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${data.opacity};${data.opacity * 0.5};${data.opacity}`"
            :dur="`${data.duration}s`"
            repeatCount="indefinite"
          />
        </rect>
      </g>
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

// Flow lines connecting elements
const flowLines = ref([
  {
    path: 'M 200,300 Q 400,200 600,300',
    color: props.colors[0],
    width: 2,
    opacity: 0.2,
    dashArray: '10,5',
    dashOffset: 15,
    duration: 3,
    startX: 0,
    startY: 0,
    endX: 20,
    endY: -10
  },
  {
    path: 'M 600,300 Q 800,400 1000,300',
    color: props.colors[1],
    width: 1.5,
    opacity: 0.15,
    dashArray: '8,4',
    dashOffset: 12,
    duration: 4,
    startX: 0,
    startY: 0,
    endX: -15,
    endY: 15
  },
  {
    path: 'M 300,600 Q 500,500 700,600',
    color: props.colors[2],
    width: 2,
    opacity: 0.18,
    dashArray: '12,6',
    dashOffset: 18,
    duration: 3.5,
    startX: 0,
    startY: 0,
    endX: 25,
    endY: -20
  }
]);

// Connection nodes
const connectionNodes = ref([
  { x: 200, y: 300, radius: 8, color: props.colors[0], opacity: 0.4, pulseSpeed: 2 },
  { x: 600, y: 300, radius: 10, color: props.colors[1], opacity: 0.35, pulseSpeed: 2.5 },
  { x: 1000, y: 300, radius: 8, color: props.colors[0], opacity: 0.4, pulseSpeed: 2.2 },
  { x: 300, y: 600, radius: 9, color: props.colors[2], opacity: 0.38, pulseSpeed: 2.3 },
  { x: 700, y: 600, radius: 7, color: props.colors[1], opacity: 0.32, pulseSpeed: 2.1 }
]);

// Flow arrows
const flowArrows = ref([
  {
    path: 'M 0,0 L 15,5 L 0,10 Z',
    color: props.colors[0],
    opacity: 0.3,
    startX: 400,
    startY: 250,
    endX: 500,
    endY: 200,
    duration: 3
  },
  {
    path: 'M 0,0 L 15,5 L 0,10 Z',
    color: props.colors[1],
    opacity: 0.25,
    startX: 800,
    startY: 350,
    endX: 900,
    endY: 300,
    duration: 3.5
  },
  {
    path: 'M 0,0 L 15,5 L 0,10 Z',
    color: props.colors[2],
    opacity: 0.28,
    startX: 500,
    startY: 550,
    endX: 600,
    endY: 500,
    duration: 4
  }
]);

// Process steps circles
const processSteps = ref([
  { x: 200, y: 200, radius: 25, fill: props.colors[0], stroke: props.colors[0], strokeWidth: 2, opacity: 0.2, scaleSpeed: 3 },
  { x: 500, y: 200, radius: 30, fill: props.colors[1], stroke: props.colors[1], strokeWidth: 2.5, opacity: 0.22, scaleSpeed: 3.5 },
  { x: 800, y: 200, radius: 28, fill: props.colors[2], stroke: props.colors[2], strokeWidth: 2, opacity: 0.18, scaleSpeed: 3.2 },
  { x: 400, y: 500, radius: 27, fill: props.colors[0], stroke: props.colors[0], strokeWidth: 2, opacity: 0.2, scaleSpeed: 3.3 },
  { x: 700, y: 500, radius: 26, fill: props.colors[1], stroke: props.colors[1], strokeWidth: 2, opacity: 0.19, scaleSpeed: 3.1 }
]);

// Data flow blocks
const dataFlow = ref([
  { x: 150, y: 150, width: 40, height: 20, rx: 4, fill: props.colors[0], opacity: 0.15, moveX: 100, moveY: 0, duration: 4 },
  { x: 450, y: 150, width: 50, height: 25, rx: 5, fill: props.colors[1], opacity: 0.12, moveX: 100, moveY: 0, duration: 4.5 },
  { x: 750, y: 150, width: 45, height: 22, rx: 4, fill: props.colors[2], opacity: 0.14, moveX: 100, moveY: 0, duration: 4.2 },
  { x: 350, y: 450, width: 42, height: 20, rx: 4, fill: props.colors[0], opacity: 0.13, moveX: 80, moveY: 0, duration: 5 },
  { x: 650, y: 450, width: 48, height: 24, rx: 5, fill: props.colors[1], opacity: 0.11, moveX: 90, moveY: 0, duration: 4.8 }
]);

onMounted(() => {
  // Additional animations can be added here
});
</script>

<style scoped>
.operate-vectors {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.operate-svg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.flow-line,
.connection-node,
.flow-arrow,
.process-step,
.data-block {
  transition: all 0.3s ease;
}

.flow-line {
  filter: blur(0.5px);
}

.connection-node {
  filter: drop-shadow(0 0 3px currentColor);
}

.ripple {
  filter: blur(2px);
}

.flow-arrow {
  filter: blur(0.3px);
}

.data-block {
  filter: blur(0.5px);
}
</style>

