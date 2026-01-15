<template>
  <div class="health-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <!-- AI Theme Gradients -->
        <linearGradient id="aiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.35" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.28" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.2" />
        </linearGradient>
        <linearGradient id="aiGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.4" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.22" />
        </linearGradient>
        <linearGradient id="aiGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#383838;stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.25" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0.2" />
        </linearGradient>
        <radialGradient id="aiOrbGrad1" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.5" />
          <stop offset="60%" style="stop-color:#AEC8B9;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="aiOrbGrad2" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.45" />
          <stop offset="60%" style="stop-color:#367e72;stop-opacity:0.28" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="aiPulseGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="aiNodeGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.6" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0" />
        </radialGradient>
        
        <!-- Advanced Filters -->
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.75 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softGlowFilter">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.6 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="intenseGlowFilter">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.9 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="blurFilter">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
          </feMerge>
        </filter>
      </defs>

      <!-- AI Neural Network Nodes (Full Width) -->
      <g class="ai-neural-nodes">
        <g
          v-for="(node, index) in aiNeuralNodes"
          :key="'neural-node-' + index"
          :transform="`translate(${node.x}, ${node.y})`"
        >
          <!-- Outer pulse ring -->
          <circle
            cx="0"
            cy="0"
            :r="node.radius * 2.2"
            :fill="node.gradient"
            :opacity="node.opacity * 0.2"
            filter="url(#glowFilter)"
          >
            <animate
              attributeName="r"
              :values="`${node.radius * 2.2};${node.radius * 3.2};${node.radius * 2.2}`"
              :dur="`${node.duration * 1.2}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.2};${node.opacity * 0.08};${node.opacity * 0.2}`"
              :dur="`${node.duration * 1.5}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
          </circle>
          <!-- Main node -->
          <circle
            cx="0"
            cy="0"
            :r="node.radius"
            :fill="node.gradient"
            :opacity="node.opacity"
            filter="url(#intenseGlowFilter)"
          >
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 1.4};${node.radius}`"
              :dur="`${node.duration * 0.85}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity};${node.opacity * 0.5};${node.opacity}`"
              :dur="`${node.duration * 1.1}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
          </circle>
          <!-- Inner tech core -->
          <circle
            cx="0"
            cy="0"
            :r="node.radius * 0.4"
            fill="url(#aiNodeGrad)"
            :opacity="node.opacity * 1.5"
          >
            <animate
              attributeName="r"
              :values="`${node.radius * 0.4};${node.radius * 0.7};${node.radius * 0.4}`"
              :dur="`${node.duration * 0.8}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 1.5};${node.opacity * 0.7};${node.opacity * 1.5}`"
              :dur="`${node.duration * 1.1}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
          </circle>
          <!-- Transform for floating -->
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`0,0; ${node.moveX},${node.moveY}; 0,0; -${node.moveX * 0.6},-${node.moveY * 0.6}; 0,0`"
            :dur="`${node.duration * 1.3}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
        </g>
      </g>

      <!-- AI Connection Lines (Data Flow) -->
      <g class="ai-connections" opacity="0.3">
        <path
          v-for="(conn, index) in aiConnections"
          :key="'conn-' + index"
          :d="conn.path"
          :stroke="conn.color"
          :stroke-width="conn.width"
          fill="none"
          stroke-dasharray="5,5"
          stroke-linecap="round"
          filter="url(#softGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`0;${conn.dashLength};0`"
            :dur="`${conn.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`0.3;0.15;0.3`"
            :dur="`${conn.duration * 1.5}s`"
            repeatCount="indefinite"
          />
        </path>
      </g>

      <!-- AI Circuit Patterns (Full Width) -->
      <g class="ai-circuits-full">
        <g
          v-for="(circuit, index) in aiCircuitsFull"
          :key="'circuit-' + index"
          :transform="`translate(${circuit.x}, ${circuit.y})`"
        >
          <!-- Circuit path -->
          <path
            :d="circuit.path"
            :stroke="circuit.color"
            :stroke-width="circuit.width"
            fill="none"
            :opacity="circuit.opacity"
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke-dasharray="`${circuit.dashLength},${circuit.dashLength}`"
            filter="url(#softGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${circuit.moveX},${circuit.moveY}; 0,0; -${circuit.moveX * 0.5},-${circuit.moveY * 0.5}; 0,0`"
              :dur="`${circuit.duration}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="stroke-dashoffset"
              :values="`0;${circuit.dashLength * 2};0`"
              :dur="`${circuit.duration * 0.6}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${circuit.opacity};${circuit.opacity * 0.4};${circuit.opacity}`"
              :dur="`${circuit.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Circuit nodes -->
          <circle
            v-for="(nodePos, nodeIndex) in circuit.nodes"
            :key="`circuit-node-${index}-${nodeIndex}`"
            :cx="nodePos.x"
            :cy="nodePos.y"
            r="3"
            :fill="circuit.color"
            :opacity="circuit.opacity * 1.2"
            filter="url(#softGlowFilter)"
          >
            <animate
              attributeName="r"
              :values="`3;5;3`"
              :dur="`${circuit.duration * 1.5}s`"
              repeatCount="indefinite"
              :begin="`${nodeIndex * 0.2}s`"
            />
            <animate
              attributeName="opacity"
              :values="`${circuit.opacity * 1.2};${circuit.opacity * 0.6};${circuit.opacity * 1.2}`"
              :dur="`${circuit.duration * 1.2}s`"
              repeatCount="indefinite"
              :begin="`${nodeIndex * 0.15}s`"
            />
          </circle>
        </g>
      </g>

      <!-- AI Tech Grid Pattern -->
      <g class="ai-tech-grid" opacity="0.15">
        <defs>
          <pattern id="techGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#367e72" stroke-width="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#techGrid)">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 60,60; 0,0"
            dur="20s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      <!-- AI Data Particles -->
      <g class="ai-particles">
        <circle
          v-for="(particle, index) in aiParticles"
          :key="'particle-' + index"
          :cx="particle.x"
          :cy="particle.y"
          :r="particle.radius"
          :fill="particle.gradient"
          :opacity="particle.opacity"
          filter="url(#softGlowFilter)"
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

      <!-- AI Processing Units (Hexagonal) -->
      <g class="ai-processing-units">
        <g
          v-for="(unit, index) in aiProcessingUnits"
          :key="'unit-' + index"
          :transform="`translate(${unit.x}, ${unit.y})`"
        >
          <!-- Outer hexagon glow -->
          <polygon
            :points="unit.hexPoints"
            :fill="unit.gradient"
            :opacity="unit.opacity * 0.25"
            filter="url(#glowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1;1.2;1`"
              :dur="`${unit.duration * 1.3}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
          </polygon>
          <!-- Main hexagon -->
          <polygon
            :points="unit.hexPoints"
            :fill="unit.gradient"
            :opacity="unit.opacity"
            :stroke="unit.color"
            stroke-width="1.5"
            filter="url(#softGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${unit.moveX},${unit.moveY}; 0,0; -${unit.moveX * 0.6},-${unit.moveY * 0.6}; 0,0`"
              :dur="`${unit.duration}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              :values="`0 30 30; ${unit.rotation} 30 30; 0 30 30; -${unit.rotation * 0.5} 30 30; 0 30 30`"
              :dur="`${unit.duration * 2}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${unit.opacity};${unit.opacity * 0.5};${unit.opacity}`"
              :dur="`${unit.duration * 1.2}s`"
              repeatCount="indefinite"
            />
          </polygon>
          <!-- Inner tech core -->
          <circle cx="30" cy="30" r="8" fill="url(#aiNodeGrad)" :opacity="unit.opacity * 1.4" filter="url(#softGlowFilter)">
            <animate
              attributeName="r"
              :values="`8;12;8`"
              :dur="`${unit.duration * 0.9}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${unit.opacity * 1.4};${unit.opacity * 0.7};${unit.opacity * 1.4}`"
              :dur="`${unit.duration * 1.1}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Corner nodes -->
          <circle
            v-for="(corner, cornerIndex) in unit.corners"
            :key="`corner-${index}-${cornerIndex}`"
            :cx="corner.x"
            :cy="corner.y"
            r="2"
            :fill="unit.color"
            :opacity="unit.opacity * 1.2"
            filter="url(#softGlowFilter)"
          >
            <animate
              attributeName="r"
              :values="`2;4;2`"
              :dur="`${unit.duration * 1.5}s`"
              repeatCount="indefinite"
              :begin="`${cornerIndex * 0.1}s`"
            />
          </circle>
        </g>
      </g>

      <!-- AI Data Visualization Charts -->
      <g class="ai-data-charts">
        <g
          v-for="(chart, index) in aiDataCharts"
          :key="'chart-' + index"
          :transform="`translate(${chart.x}, ${chart.y})`"
        >
          <!-- Chart background -->
          <rect x="0" y="0" width="80" height="60" :fill="chart.gradient" :opacity="chart.opacity * 0.2" rx="6" filter="url(#softGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${chart.moveX},${chart.moveY}; 0,0; -${chart.moveX * 0.6},-${chart.moveY * 0.6}; 0,0`"
              :dur="`${chart.duration}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </rect>
          <!-- Chart bars -->
          <rect x="10" y="40" width="12" :height="chart.bar1" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar1};${chart.bar1 + 8};${chart.bar1}`"
              :dur="`${chart.duration * 0.7}s`"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="28" y="35" width="12" :height="chart.bar2" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar2};${chart.bar2 + 10};${chart.bar2}`"
              :dur="`${chart.duration * 0.8}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </rect>
          <rect x="46" y="30" width="12" :height="chart.bar3" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar3};${chart.bar3 + 12};${chart.bar3}`"
              :dur="`${chart.duration * 0.9}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </rect>
          <rect x="64" y="25" width="12" :height="chart.bar4" :fill="chart.color" :opacity="chart.opacity" rx="2">
            <animate
              attributeName="height"
              :values="`${chart.bar4};${chart.bar4 + 9};${chart.bar4}`"
              :dur="`${chart.duration * 0.75}s`"
              repeatCount="indefinite"
              begin="0.6s"
            />
          </rect>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const containerRef = ref(null);

// AI Neural Network Nodes (Full Width Distribution)
const aiNeuralNodes = ref([
  { x: 100, y: 120, radius: 8, gradient: 'url(#aiOrbGrad1)', opacity: 0.28, duration: 4.5, moveX: 15, moveY: -15 },
  { x: 300, y: 200, radius: 10, gradient: 'url(#aiOrbGrad2)', opacity: 0.3, duration: 5, moveX: -18, moveY: 18 },
  { x: 500, y: 150, radius: 9, gradient: 'url(#aiOrbGrad1)', opacity: 0.29, duration: 4.8, moveX: 20, moveY: -20 },
  { x: 700, y: 250, radius: 11, gradient: 'url(#aiOrbGrad2)', opacity: 0.31, duration: 5.2, moveX: -16, moveY: 16 },
  { x: 900, y: 180, radius: 8, gradient: 'url(#aiOrbGrad1)', opacity: 0.27, duration: 4.6, moveX: 17, moveY: -17 },
  { x: 1100, y: 300, radius: 9, gradient: 'url(#aiOrbGrad2)', opacity: 0.3, duration: 5.5, moveX: -19, moveY: 19 },
  { x: 200, y: 400, radius: 10, gradient: 'url(#aiOrbGrad1)', opacity: 0.28, duration: 4.9, moveX: 14, moveY: -14 },
  { x: 450, y: 450, radius: 8, gradient: 'url(#aiOrbGrad2)', opacity: 0.26, duration: 5.3, moveX: -15, moveY: 15 },
  { x: 750, y: 420, radius: 9, gradient: 'url(#aiOrbGrad1)', opacity: 0.29, duration: 4.7, moveX: 18, moveY: -18 },
  { x: 1000, y: 500, radius: 10, gradient: 'url(#aiOrbGrad2)', opacity: 0.3, duration: 5.1, moveX: -17, moveY: 17 },
  { x: 150, y: 600, radius: 8, gradient: 'url(#aiOrbGrad1)', opacity: 0.27, duration: 4.8, moveX: 16, moveY: -16 },
  { x: 600, y: 650, radius: 9, gradient: 'url(#aiOrbGrad2)', opacity: 0.28, duration: 5.4, moveX: -20, moveY: 20 },
]);

// AI Connection Lines (Data Flow)
const aiConnections = ref([
  { path: 'M 100,120 Q 300,200 500,150', color: '#367e72', width: 1.5, dashLength: 25, duration: 4 },
  { path: 'M 500,150 Q 700,250 900,180', color: '#AEC8B9', width: 1.5, dashLength: 30, duration: 4.5 },
  { path: 'M 200,400 Q 450,450 750,420', color: '#367e72', width: 1.5, dashLength: 28, duration: 4.2 },
  { path: 'M 300,200 Q 500,300 700,250', color: '#383838', width: 1.5, dashLength: 32, duration: 4.8 },
  { path: 'M 750,420 Q 900,500 1100,300', color: '#AEC8B9', width: 1.5, dashLength: 26, duration: 4.3 },
  { path: 'M 150,600 Q 400,550 600,650', color: '#367e72', width: 1.5, dashLength: 29, duration: 4.6 },
  { path: 'M 100,120 Q 200,300 200,400', color: '#383838', width: 1.5, dashLength: 27, duration: 4.4 },
  { path: 'M 900,180 Q 1000,350 1000,500', color: '#AEC8B9', width: 1.5, dashLength: 31, duration: 4.7 },
]);

// AI Circuit Patterns (Full Width)
const aiCircuitsFull = ref([
  { x: 150, y: 100, path: 'M 0,0 L 40,0 L 40,25 L 80,25 L 80,0 L 120,0', color: '#367e72', width: 2, opacity: 0.22, duration: 4.5, moveX: 12, moveY: -12, dashLength: 35, nodes: [{x: 40, y: 0}, {x: 80, y: 25}] },
  { x: 400, y: 180, path: 'M 0,0 L 35,0 L 35,20 L 70,20 L 70,0 L 105,0', color: '#AEC8B9', width: 1.5, opacity: 0.24, duration: 5, moveX: -14, moveY: 14, dashLength: 32, nodes: [{x: 35, y: 0}, {x: 70, y: 20}] },
  { x: 700, y: 120, path: 'M 0,0 L 45,0 L 45,30 L 90,30 L 90,0 L 135,0', color: '#367e72', width: 2, opacity: 0.21, duration: 4.8, moveX: 13, moveY: -13, dashLength: 38, nodes: [{x: 45, y: 0}, {x: 90, y: 30}] },
  { x: 950, y: 220, path: 'M 0,0 L 30,0 L 30,18 L 60,18 L 60,0 L 90,0', color: '#383838', width: 1.5, opacity: 0.23, duration: 5.2, moveX: -15, moveY: 15, dashLength: 30, nodes: [{x: 30, y: 0}, {x: 60, y: 18}] },
  { x: 250, y: 500, path: 'M 0,0 L 38,0 L 38,22 L 76,22 L 76,0 L 114,0', color: '#AEC8B9', width: 2, opacity: 0.22, duration: 4.6, moveX: 11, moveY: -11, dashLength: 33, nodes: [{x: 38, y: 0}, {x: 76, y: 22}] },
  { x: 600, y: 580, path: 'M 0,0 L 42,0 L 42,28 L 84,28 L 84,0 L 126,0', color: '#367e72', width: 1.5, opacity: 0.24, duration: 5.3, moveX: -13, moveY: 13, dashLength: 36, nodes: [{x: 42, y: 0}, {x: 84, y: 28}] },
  { x: 850, y: 550, path: 'M 0,0 L 33,0 L 33,19 L 66,19 L 66,0 L 99,0', color: '#383838', width: 2, opacity: 0.21, duration: 4.9, moveX: 14, moveY: -14, dashLength: 31, nodes: [{x: 33, y: 0}, {x: 66, y: 19}] },
]);

// AI Data Particles
const aiParticles = ref([
  { x: 120, y: 80, radius: 4, gradient: 'url(#aiOrbGrad1)', opacity: 0.4, duration: 2.8, moveX: 30, moveY: -35 },
  { x: 350, y: 150, radius: 3.5, gradient: 'url(#aiOrbGrad2)', opacity: 0.38, duration: 3.2, moveX: -28, moveY: 30 },
  { x: 550, y: 100, radius: 4, gradient: 'url(#aiOrbGrad1)', opacity: 0.42, duration: 3, moveX: 32, moveY: -32 },
  { x: 750, y: 200, radius: 3.5, gradient: 'url(#aiOrbGrad2)', opacity: 0.4, duration: 3.5, moveX: -30, moveY: 33 },
  { x: 950, y: 140, radius: 4, gradient: 'url(#aiOrbGrad1)', opacity: 0.39, duration: 3.2, moveX: 28, moveY: -28 },
  { x: 200, y: 350, radius: 3.5, gradient: 'url(#aiOrbGrad2)', opacity: 0.41, duration: 3.8, moveX: -27, moveY: 31 },
  { x: 450, y: 400, radius: 4, gradient: 'url(#aiOrbGrad1)', opacity: 0.4, duration: 2.9, moveX: 33, moveY: -33 },
  { x: 700, y: 380, radius: 3.5, gradient: 'url(#aiOrbGrad2)', opacity: 0.38, duration: 4, moveX: -31, moveY: 35 },
  { x: 1000, y: 450, radius: 4, gradient: 'url(#aiOrbGrad1)', opacity: 0.41, duration: 3.4, moveX: 29, moveY: -29 },
  { x: 300, y: 600, radius: 3.5, gradient: 'url(#aiOrbGrad2)', opacity: 0.39, duration: 3.6, moveX: -28, moveY: 32 },
  { x: 600, y: 650, radius: 4, gradient: 'url(#aiOrbGrad1)', opacity: 0.4, duration: 3.1, moveX: 31, moveY: -30 },
  { x: 900, y: 700, radius: 3.5, gradient: 'url(#aiOrbGrad2)', opacity: 0.38, duration: 3.3, moveX: -29, moveY: 34 },
]);

// AI Processing Units (Hexagonal)
const aiProcessingUnits = ref([
  { 
    x: 250, 
    y: 160, 
    color: '#367e72', 
    gradient: 'url(#aiGrad1)', 
    opacity: 0.25, 
    duration: 6, 
    moveX: 10, 
    moveY: -10,
    rotation: 15,
    hexPoints: '30,10 50,10 60,30 50,50 30,50 20,30',
    corners: [{x: 30, y: 10}, {x: 50, y: 10}, {x: 60, y: 30}, {x: 50, y: 50}, {x: 30, y: 50}, {x: 20, y: 30}]
  },
  { 
    x: 600, 
    y: 280, 
    color: '#AEC8B9', 
    gradient: 'url(#aiGrad2)', 
    opacity: 0.27, 
    duration: 6.5, 
    moveX: -12, 
    moveY: 12,
    rotation: -18,
    hexPoints: '30,10 50,10 60,30 50,50 30,50 20,30',
    corners: [{x: 30, y: 10}, {x: 50, y: 10}, {x: 60, y: 30}, {x: 50, y: 50}, {x: 30, y: 50}, {x: 20, y: 30}]
  },
  { 
    x: 850, 
    y: 440, 
    color: '#383838', 
    gradient: 'url(#aiGrad3)', 
    opacity: 0.24, 
    duration: 5.8, 
    moveX: 11, 
    moveY: -11,
    rotation: 20,
    hexPoints: '30,10 50,10 60,30 50,50 30,50 20,30',
    corners: [{x: 30, y: 10}, {x: 50, y: 10}, {x: 60, y: 30}, {x: 50, y: 50}, {x: 30, y: 50}, {x: 20, y: 30}]
  },
  { 
    x: 400, 
    y: 560, 
    color: '#367e72', 
    gradient: 'url(#aiGrad1)', 
    opacity: 0.26, 
    duration: 6.2, 
    moveX: -13, 
    moveY: 13,
    rotation: -15,
    hexPoints: '30,10 50,10 60,30 50,50 30,50 20,30',
    corners: [{x: 30, y: 10}, {x: 50, y: 10}, {x: 60, y: 30}, {x: 50, y: 50}, {x: 30, y: 50}, {x: 20, y: 30}]
  },
]);

// AI Data Visualization Charts
const aiDataCharts = ref([
  { x: 150, y: 120, color: '#367e72', gradient: 'url(#aiGrad1)', opacity: 0.24, duration: 5, moveX: 8, moveY: -8, bar1: 15, bar2: 20, bar3: 25, bar4: 30 },
  { x: 500, y: 240, color: '#AEC8B9', gradient: 'url(#aiGrad2)', opacity: 0.26, duration: 5.5, moveX: -10, moveY: 10, bar1: 18, bar2: 22, bar3: 28, bar4: 32 },
  { x: 800, y: 400, color: '#383838', gradient: 'url(#aiGrad3)', opacity: 0.23, duration: 5.2, moveX: 9, moveY: -9, bar1: 12, bar2: 18, bar3: 22, bar4: 28 },
  { x: 1050, y: 340, color: '#367e72', gradient: 'url(#aiGrad1)', opacity: 0.25, duration: 5.8, moveX: -11, moveY: 11, bar1: 20, bar2: 24, bar3: 30, bar4: 35 },
]);

onMounted(() => {
  // Component mounted
});
</script>

<style scoped>
.health-vectors {
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

.ai-neural-nodes,
.ai-connections,
.ai-circuits-full,
.ai-tech-grid,
.ai-particles,
.ai-processing-units,
.ai-data-charts {
  animation: fade-in 2s ease-in;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-8px) translateX(5px);
  }
  50% {
    transform: translateY(-12px) translateX(0);
  }
  75% {
    transform: translateY(-8px) translateX(-5px);
  }
}

.health-vectors {
  animation: float-gentle 12s ease-in-out infinite;
}

.ai-neural-nodes circle,
.ai-connections path,
.ai-circuits-full path,
.ai-circuits-full circle,
.ai-particles circle,
.ai-processing-units polygon,
.ai-processing-units circle,
.ai-data-charts rect {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Enhanced visual polish */
.vector-background {
  filter: drop-shadow(0 0 20px rgba(54, 126, 114, 0.1));
}
</style>
