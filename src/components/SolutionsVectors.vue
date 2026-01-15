<template>
  <div class="solutions-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <!-- Advanced Gradients -->
        <linearGradient id="solutionsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.38" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.32" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.24" />
        </linearGradient>
        <linearGradient id="solutionsGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.45" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.36" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.28" />
        </linearGradient>
        <linearGradient id="solutionsGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#383838;stop-opacity:0.35" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0.25" />
        </linearGradient>
        <radialGradient id="solutionsOrbGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.55" />
          <stop offset="60%" style="stop-color:#AEC8B9;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="solutionsNodeGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.7" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="solutionsPulseGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0" />
        </radialGradient>
        
        <!-- Advanced Filters -->
        <filter id="solutionsGlowFilter">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.85 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="solutionsSoftGlowFilter">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.7 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="solutionsIntenseGlowFilter">
          <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 1 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Advanced AI Circuit Patterns with Multi-layer Animation -->
      <g class="ai-circuits">
        <g
          v-for="(circuit, index) in aiCircuits"
          :key="'circuit-' + index"
          :transform="`translate(${circuit.x}, ${circuit.y})`"
        >
          <!-- Background glow layer -->
          <path
            :d="circuit.path"
            :stroke="circuit.color"
            :stroke-width="circuit.width * 2.5"
            fill="none"
            :opacity="circuit.opacity * 0.25"
            stroke-linecap="round"
            :stroke-dasharray="`${circuit.dashLength},${circuit.dashLength}`"
            filter="url(#solutionsGlowFilter)"
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
          </path>
          <!-- Main circuit path -->
          <path
            :d="circuit.path"
            :stroke="circuit.color"
            :stroke-width="circuit.width"
            fill="none"
            :opacity="circuit.opacity"
            stroke-linecap="round"
            stroke-linejoin="round"
            :stroke-dasharray="`${circuit.dashLength},${circuit.dashLength}`"
            filter="url(#solutionsIntenseGlowFilter)"
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
              :values="`${circuit.opacity};${circuit.opacity * 0.3};${circuit.opacity * 0.6};${circuit.opacity}`"
              :dur="`${circuit.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Circuit nodes with enhanced animation -->
          <circle
            v-for="(nodePos, nodeIndex) in circuit.nodes"
            :key="`circuit-node-${index}-${nodeIndex}`"
            :cx="nodePos.x"
            :cy="nodePos.y"
            r="4"
            :fill="circuit.color"
            :opacity="circuit.opacity * 1.4"
            filter="url(#solutionsIntenseGlowFilter)"
          >
            <!-- Outer pulse ring -->
            <circle cx="0" cy="0" r="8" :fill="circuit.color" :opacity="circuit.opacity * 0.3" filter="url(#solutionsGlowFilter)">
              <animate
                attributeName="r"
                :values="`8;12;8`"
                :dur="`${circuit.duration * 1.6}s`"
                repeatCount="indefinite"
                :begin="`${nodeIndex * 0.2}s`"
              />
              <animate
                attributeName="opacity"
                :values="`${circuit.opacity * 0.3};${circuit.opacity * 0.1};${circuit.opacity * 0.3}`"
                :dur="`${circuit.duration * 1.6}s`"
                repeatCount="indefinite"
                :begin="`${nodeIndex * 0.2}s`"
              />
            </circle>
            <animate
              attributeName="r"
              :values="`4;7;4`"
              :dur="`${circuit.duration * 1.6}s`"
              repeatCount="indefinite"
              :begin="`${nodeIndex * 0.2}s`"
            />
            <animate
              attributeName="opacity"
              :values="`${circuit.opacity * 1.4};${circuit.opacity * 0.5};${circuit.opacity * 1.4}`"
              :dur="`${circuit.duration * 1.3}s`"
              repeatCount="indefinite"
              :begin="`${nodeIndex * 0.15}s`"
            />
            <!-- Inner highlight -->
            <circle cx="0" cy="0" r="2" fill="#ffffff" :opacity="circuit.opacity * 2">
              <animate
                attributeName="opacity"
                :values="`${circuit.opacity * 2};${circuit.opacity * 0.4};${circuit.opacity * 2}`"
                :dur="`${circuit.duration * 0.8}s`"
                repeatCount="indefinite"
                :begin="`${nodeIndex * 0.1}s`"
              />
            </circle>
          </circle>
        </g>
      </g>

      <!-- Advanced Health Pulse Waves (ECG Style) - MUST HAVE with Enhanced Effects -->
      <g class="health-pulse-waves">
        <g
          v-for="(wave, index) in pulseWaves"
          :key="'wave-' + index"
          :transform="`translate(${wave.x}, ${wave.y})`"
        >
          <!-- Triple-layer glow effect -->
          <path
            :d="wave.path"
            :stroke="wave.color"
            :stroke-width="wave.width * 2.5"
            fill="none"
            :opacity="wave.opacity * 0.2"
            stroke-linecap="round"
            filter="url(#solutionsGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 40,0; 0,0; -40,0; 0,0`"
              :dur="`${wave.duration * 2}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </path>
          <path
            :d="wave.path"
            :stroke="wave.color"
            :stroke-width="wave.width * 1.8"
            fill="none"
            :opacity="wave.opacity * 0.35"
            stroke-linecap="round"
            filter="url(#solutionsSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 40,0; 0,0; -40,0; 0,0`"
              :dur="`${wave.duration * 2}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </path>
          <!-- Main pulse wave -->
          <path
            :d="wave.path"
            :stroke="wave.color"
            :stroke-width="wave.width"
            fill="none"
            :opacity="wave.opacity"
            stroke-linecap="round"
            filter="url(#solutionsIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 40,0; 0,0; -40,0; 0,0`"
              :dur="`${wave.duration * 2}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="stroke-dashoffset"
              :values="`${wave.offset};${wave.offset - 110};${wave.offset}`"
              :dur="`${wave.duration * 1}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity};${wave.opacity * 0.25};${wave.opacity * 0.65};${wave.opacity}`"
              :dur="`${wave.duration * 1.5}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Enhanced pulse dots -->
          <circle
            v-for="(dot, dotIndex) in wave.dots"
            :key="`dot-${index}-${dotIndex}`"
            :cx="dot.x"
            :cy="dot.y"
            r="5"
            :fill="wave.color"
            :opacity="wave.opacity * 1.5"
            filter="url(#solutionsIntenseGlowFilter)"
          >
            <!-- Outer glow ring -->
            <circle cx="0" cy="0" r="10" :fill="wave.color" :opacity="wave.opacity * 0.4" filter="url(#solutionsGlowFilter)">
              <animate
                attributeName="r"
                :values="`10;15;10`"
                :dur="`${wave.duration * 0.9}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.2}s`"
              />
              <animate
                attributeName="opacity"
                :values="`${wave.opacity * 0.4};${wave.opacity * 0.1};${wave.opacity * 0.4}`"
                :dur="`${wave.duration * 0.9}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.2}s`"
              />
            </circle>
            <animate
              attributeName="r"
              :values="`5;8;5`"
              :dur="`${wave.duration * 0.9}s`"
              repeatCount="indefinite"
              :begin="`${dotIndex * 0.2}s`"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity * 1.5};${wave.opacity * 0.4};${wave.opacity * 1.5}`"
              :dur="`${wave.duration * 0.9}s`"
              repeatCount="indefinite"
              :begin="`${dotIndex * 0.2}s`"
            />
            <!-- Inner white core -->
            <circle cx="0" cy="0" r="2" fill="#ffffff" :opacity="wave.opacity * 2">
              <animate
                attributeName="opacity"
                :values="`${wave.opacity * 2};${wave.opacity * 0.3};${wave.opacity * 2}`"
                :dur="`${wave.duration * 0.7}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.15}s`"
              />
            </circle>
          </circle>
        </g>
      </g>

      <!-- Advanced AI Neural Network Nodes with Complex Animations -->
      <g class="ai-neural-nodes">
        <g
          v-for="(node, index) in aiNeuralNodes"
          :key="'node-' + index"
          :transform="`translate(${node.x}, ${node.y})`"
        >
          <!-- Triple-layer pulse rings -->
          <circle cx="0" cy="0" :r="node.radius * 3" :fill="node.gradient" :opacity="node.opacity * 0.12" filter="url(#solutionsGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 3};${node.radius * 4.5};${node.radius * 3}`"
              :dur="`${node.duration * 1.6}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.12};${node.opacity * 0.04};${node.opacity * 0.12}`"
              :dur="`${node.duration * 2}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius * 2.5" :fill="node.gradient" :opacity="node.opacity * 0.18" filter="url(#solutionsGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2.5};${node.radius * 3.8};${node.radius * 2.5}`"
              :dur="`${node.duration * 1.4}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.18};${node.opacity * 0.06};${node.opacity * 0.18}`"
              :dur="`${node.duration * 1.8}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius * 2" :fill="node.gradient" :opacity="node.opacity * 0.22" filter="url(#solutionsGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2};${node.radius * 3.2};${node.radius * 2}`"
              :dur="`${node.duration * 1.2}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.22};${node.opacity * 0.08};${node.opacity * 0.22}`"
              :dur="`${node.duration * 1.5}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </circle>
          <!-- Main node -->
          <circle cx="0" cy="0" :r="node.radius" :fill="node.gradient" :opacity="node.opacity" filter="url(#solutionsIntenseGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${node.moveX},${node.moveY}; ${node.moveX * 0.4},${node.moveY * 0.4}; -${node.moveX * 0.8},-${node.moveY * 0.8}; 0,0`"
              :dur="`${node.duration * 1.8}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 1.6};${node.radius * 1.3};${node.radius}`"
              :dur="`${node.duration * 1}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity};${node.opacity * 0.35};${node.opacity * 0.75};${node.opacity}`"
              :dur="`${node.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Inner tech core with rotation -->
          <circle cx="0" cy="0" :r="node.radius * 0.45" fill="url(#solutionsNodeGrad)" :opacity="node.opacity * 1.8">
            <animateTransform
              attributeName="transform"
              type="rotate"
              :values="`0 0 0; 360 0 0`"
              :dur="`${node.duration * 1.8}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              :values="`${node.radius * 0.45};${node.radius * 0.8};${node.radius * 0.45}`"
              :dur="`${node.duration * 0.9}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 1.8};${node.opacity * 0.9};${node.opacity * 1.8}`"
              :dur="`${node.duration * 1.2}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Inner highlight dot -->
          <circle cx="0" cy="0" :r="node.radius * 0.2" fill="#ffffff" :opacity="node.opacity * 2.5">
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 2.5};${node.opacity * 0.6};${node.opacity * 2.5}`"
              :dur="`${node.duration * 0.8}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              :values="`${node.radius * 0.2};${node.radius * 0.35};${node.radius * 0.2}`"
              :dur="`${node.duration * 0.8}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Advanced Floating Health Elements with Enhanced Animations -->
      <g class="floating-health-elements">
        <!-- Stethoscopes with Multi-layer Effects -->
        <g
          v-for="(steth, index) in stethoscopes"
          :key="'steth-' + index"
          :transform="`translate(${steth.x}, ${steth.y})`"
        >
          <!-- Outer glow -->
          <path
            d="M 20,30 Q 30,15 40,30 Q 50,45 60,30 Q 70,15 80,30 L 80,55 Q 70,70 60,55 Q 50,40 40,55 Q 30,70 20,55 Z"
            :fill="steth.gradient"
            :opacity="steth.opacity * 0.4"
            filter="url(#solutionsGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1.15;1.4;1.15`"
              :dur="`${steth.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Main stethoscope -->
          <path
            d="M 20,30 Q 30,15 40,30 Q 50,45 60,30 Q 70,15 80,30 L 80,55 Q 70,70 60,55 Q 50,40 40,55 Q 30,70 20,55 Z"
            :fill="steth.gradient"
            :opacity="steth.opacity"
            filter="url(#solutionsIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${steth.moveX},${steth.moveY}; ${steth.moveX * 0.5},${steth.moveY * 0.5}; -${steth.moveX * 0.6},-${steth.moveY * 0.6}; 0,0`"
              :dur="`${steth.duration * 1.6}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 50 50; ${steth.rotation} 50 50; 0 50 50; -${steth.rotation * 0.7} 50 50; 0 50 50`"
              :dur="`${steth.duration * 2.5}s`"
              repeatCount="indefinite"
              additive="sum"
            />
            <animate
              attributeName="opacity"
              :values="`${steth.opacity};${steth.opacity * 0.4};${steth.opacity * 0.8};${steth.opacity}`"
              :dur="`${steth.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Earpieces with glow -->
          <circle cx="20" cy="42" r="10" :fill="steth.color" :opacity="steth.opacity * 1.4" filter="url(#solutionsIntenseGlowFilter)">
            <circle cx="0" cy="0" r="15" :fill="steth.color" :opacity="steth.opacity * 0.3" filter="url(#solutionsGlowFilter)">
              <animate
                attributeName="r"
                :values="`15;20;15`"
                :dur="`${steth.duration * 2.2}s`"
                repeatCount="indefinite"
              />
            </circle>
            <animate attributeName="r" values="10;12;10" :dur="`${steth.duration * 2.2}s`" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <circle cx="60" cy="42" r="10" :fill="steth.color" :opacity="steth.opacity * 1.4" filter="url(#solutionsIntenseGlowFilter)">
            <circle cx="0" cy="0" r="15" :fill="steth.color" :opacity="steth.opacity * 0.3" filter="url(#solutionsGlowFilter)">
              <animate
                attributeName="r"
                :values="`15;20;15`"
                :dur="`${steth.duration * 2.2}s`"
                repeatCount="indefinite"
                begin="0.3s"
              />
            </circle>
            <animate attributeName="r" values="10;12;10" :dur="`${steth.duration * 2.2}s`" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" begin="0.3s" />
          </circle>
        </g>
        <!-- Medical Crosses with Advanced Animation -->
        <g
          v-for="(cross, index) in medicalCrosses"
          :key="'cross-' + index"
          :transform="`translate(${cross.x}, ${cross.y})`"
        >
          <!-- Triple-layer glow -->
          <g opacity="0.5" filter="url(#solutionsGlowFilter)">
            <rect x="38" y="8" width="24" height="84" :fill="cross.color" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration * 0.7}s`"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="8" y="38" width="84" height="24" :fill="cross.color" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration * 0.7}s`"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <!-- Main cross -->
          <g filter="url(#solutionsIntenseGlowFilter)">
            <rect x="40" y="10" width="20" height="80" :fill="cross.gradient" :opacity="cross.opacity" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration}s`"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                :values="`0,0; 0,-${12 + index * 3}; 0,0; 0,${8 + index * 2.5}; 0,0`"
                :dur="`${cross.duration * 0.95}s`"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animate
                attributeName="opacity"
                :values="`${cross.opacity};${cross.opacity * 0.4};${cross.opacity * 0.85};${cross.opacity}`"
                :dur="`${cross.duration * 0.6}s`"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="10" y="40" width="80" height="20" :fill="cross.gradient" :opacity="cross.opacity" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration}s`"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="translate"
                :values="`0,0; 0,-${12 + index * 3}; 0,0; 0,${8 + index * 2.5}; 0,0`"
                :dur="`${cross.duration * 0.95}s`"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animate
                attributeName="opacity"
                :values="`${cross.opacity};${cross.opacity * 0.4};${cross.opacity * 0.85};${cross.opacity}`"
                :dur="`${cross.duration * 0.6}s`"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <!-- Enhanced center highlight -->
          <circle cx="50" cy="50" r="14" fill="url(#solutionsNodeGrad)" :opacity="cross.opacity * 1.5" filter="url(#solutionsIntenseGlowFilter)">
            <animate
              attributeName="r"
              :values="`14;19;14`"
              :dur="`${cross.duration * 1.3}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${cross.opacity * 1.5};${cross.opacity * 0.5};${cross.opacity * 1.5}`"
              :dur="`${cross.duration * 1.3}s`"
              repeatCount="indefinite"
            />
            <!-- Inner white dot -->
            <circle cx="0" cy="0" r="5" fill="#ffffff" :opacity="cross.opacity * 2">
              <animate
                attributeName="opacity"
                :values="`${cross.opacity * 2};${cross.opacity * 0.4};${cross.opacity * 2}`"
                :dur="`${cross.duration * 0.9}s`"
                repeatCount="indefinite"
              />
            </circle>
          </circle>
        </g>
      </g>

      <!-- Advanced Floating AI Particles with Complex Paths -->
      <g class="floating-particles">
        <circle
          v-for="(particle, index) in floatingParticles"
          :key="'particle-' + index"
          :cx="particle.x"
          :cy="particle.y"
          :r="particle.radius"
          :fill="particle.gradient"
          :opacity="particle.opacity"
          filter="url(#solutionsSoftGlowFilter)"
        >
          <!-- Outer pulse ring -->
          <circle cx="0" cy="0" :r="particle.radius * 2.5" :fill="particle.gradient" :opacity="particle.opacity * 0.3" filter="url(#solutionsGlowFilter)">
            <animate
              attributeName="r"
              :values="`${particle.radius * 2.5};${particle.radius * 4};${particle.radius * 2.5}`"
              :dur="`${particle.duration * 1.2}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${particle.opacity * 0.3};${particle.opacity * 0.1};${particle.opacity * 0.3}`"
              :dur="`${particle.duration * 1.2}s`"
              repeatCount="indefinite"
            />
          </circle>
          <animate
            attributeName="r"
            :values="`${particle.radius};${particle.radius * 2.8};${particle.radius * 1.8};${particle.radius}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.33; 0.67; 1"
          />
          <animate
            attributeName="opacity"
            :values="`${particle.opacity};${particle.opacity * 0.1};${particle.opacity * 0.5};${particle.opacity}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.33; 0.67; 1"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`0,0; ${particle.moveX},${particle.moveY}; ${particle.moveX * 0.7},${particle.moveY * 0.7}; -${particle.moveX * 0.5},-${particle.moveY * 0.5}; 0,0`"
            :dur="`${particle.duration * 2.2}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
          />
        </circle>
      </g>

      <!-- Advanced AI Connection Lines with Enhanced Data Flow -->
      <g class="ai-connections" opacity="0.3">
        <path
          v-for="(conn, index) in aiConnections"
          :key="'conn-' + index"
          :d="conn.path"
          :stroke="conn.color"
          :stroke-width="conn.width"
          fill="none"
          stroke-dasharray="8,8"
          stroke-linecap="round"
          filter="url(#solutionsSoftGlowFilter)"
        >
          <!-- Background glow -->
          <path
            :d="conn.path"
            :stroke="conn.color"
            :stroke-width="conn.width * 2.5"
            fill="none"
            :opacity="conn.opacity * 0.2"
            stroke-dasharray="8,8"
            stroke-linecap="round"
            filter="url(#solutionsGlowFilter)"
          >
            <animate
              attributeName="stroke-dashoffset"
              :values="`0;${conn.dashLength};0`"
              :dur="`${conn.duration}s`"
              repeatCount="indefinite"
            />
          </path>
          <animate
            attributeName="stroke-dashoffset"
            :values="`0;${conn.dashLength};0`"
            :dur="`${conn.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`0.3;0.15;0.25;0.3`"
            :dur="`${conn.duration * 2}s`"
            repeatCount="indefinite"
          />
          <!-- Multiple data flow particles -->
          <circle r="4" :fill="conn.color" :opacity="conn.opacity" filter="url(#solutionsIntenseGlowFilter)">
            <animateMotion
              :dur="`${conn.duration * 1.8}s`"
              repeatCount="indefinite"
              :path="conn.path"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              :values="`${conn.opacity};${conn.opacity * 1.8};${conn.opacity}`"
              :dur="`${conn.duration * 0.6}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="3" :fill="conn.color" :opacity="conn.opacity * 0.8" filter="url(#solutionsSoftGlowFilter)">
            <animateMotion
              :dur="`${conn.duration * 1.5}s`"
              repeatCount="indefinite"
              :path="conn.path"
              calcMode="linear"
              begin="0.3s"
            />
          </circle>
        </path>
      </g>

      <!-- Advanced Health Icons (Hearts) with Multi-layer Effects -->
      <g class="floating-health-icons">
        <g
          v-for="(icon, index) in healthIcons"
          :key="'icon-' + index"
          :transform="`translate(${icon.x}, ${icon.y})`"
        >
          <!-- Triple-layer glow -->
          <path
            d="M 50,85 C 50,85 15,60 15,40 C 15,20 35,10 50,10 C 65,10 85,20 85,40 C 85,60 50,85 50,85 Z"
            :fill="icon.color"
            :opacity="icon.opacity * 0.6"
            filter="url(#solutionsGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1.3;1.6;1.3`"
              :dur="`${icon.duration * 1.5}s`"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M 50,85 C 50,85 15,60 15,40 C 15,20 35,10 50,10 C 65,10 85,20 85,40 C 85,60 50,85 50,85 Z"
            :fill="icon.color"
            :opacity="icon.opacity * 0.4"
            filter="url(#solutionsSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1.2;1.5;1.2`"
              :dur="`${icon.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Main heart icon -->
          <path
            d="M 50,85 C 50,85 15,60 15,40 C 15,20 35,10 50,10 C 65,10 85,20 85,40 C 85,60 50,85 50,85 Z"
            :fill="icon.color"
            :opacity="icon.opacity"
            filter="url(#solutionsIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${icon.moveX},${icon.moveY}; ${icon.moveX * 0.5},${icon.moveY * 0.5}; -${icon.moveX * 0.8},-${icon.moveY * 0.8}; 0,0`"
              :dur="`${icon.duration * 1.7}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animateTransform
              type="scale"
              :values="`1;${1 + icon.scale};${1 + icon.scale * 0.6};1`"
              :dur="`${icon.duration * 1.4}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 0.75; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 50 50; ${icon.rotation} 50 50; 0 50 50; -${icon.rotation * 0.8} 50 50; 0 50 50`"
              :dur="`${icon.duration * 3}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${icon.opacity};${icon.opacity * 0.4};${icon.opacity * 0.85};${icon.opacity}`"
              :dur="`${icon.duration * 1.5}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Enhanced inner highlight -->
          <ellipse
            cx="50"
            cy="35"
            rx="20"
            ry="17"
            fill="url(#solutionsNodeGrad)"
            :opacity="icon.opacity * 1.4"
          >
            <animate
              attributeName="opacity"
              :values="`${icon.opacity * 1.4};${icon.opacity * 0.3};${icon.opacity * 1.4}`"
              :dur="`${icon.duration * 1.8}s`"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1;1.4;1`"
              :dur="`${icon.duration * 1.4}s`"
              repeatCount="indefinite"
            />
            <!-- Inner white dot -->
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#ffffff" :opacity="icon.opacity * 2">
              <animate
                attributeName="opacity"
                :values="`${icon.opacity * 2};${icon.opacity * 0.5};${icon.opacity * 2}`"
                :dur="`${icon.duration * 1.2}s`"
                repeatCount="indefinite"
              />
            </ellipse>
          </ellipse>
        </g>
      </g>

      <!-- Advanced AI Data Visualization Charts -->
      <g class="ai-data-charts">
        <g
          v-for="(chart, index) in dataCharts"
          :key="'chart-' + index"
          :transform="`translate(${chart.x}, ${chart.y})`"
        >
          <!-- Background glow -->
          <rect x="0" y="0" width="80" height="60" :fill="chart.gradient" :opacity="chart.opacity * 0.3" rx="6" filter="url(#solutionsGlowFilter)">
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
          <!-- Chart background -->
          <rect x="0" y="0" width="80" height="60" :fill="chart.gradient" :opacity="chart.opacity * 0.2" rx="6" filter="url(#solutionsSoftGlowFilter)">
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
          <!-- Enhanced chart bars with glow -->
          <rect x="10" y="40" width="12" :height="chart.bar1" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#solutionsIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar1};${chart.bar1 + 10};${chart.bar1}`"
              :dur="`${chart.duration * 0.7}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.5};${chart.opacity}`"
              :dur="`${chart.duration * 0.7}s`"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="28" y="35" width="12" :height="chart.bar2" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#solutionsIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar2};${chart.bar2 + 12};${chart.bar2}`"
              :dur="`${chart.duration * 0.8}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.5};${chart.opacity}`"
              :dur="`${chart.duration * 0.8}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </rect>
          <rect x="46" y="30" width="12" :height="chart.bar3" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#solutionsIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar3};${chart.bar3 + 15};${chart.bar3}`"
              :dur="`${chart.duration * 0.9}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.5};${chart.opacity}`"
              :dur="`${chart.duration * 0.9}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </rect>
          <rect x="64" y="25" width="12" :height="chart.bar4" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#solutionsIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar4};${chart.bar4 + 11};${chart.bar4}`"
              :dur="`${chart.duration * 0.75}s`"
              repeatCount="indefinite"
              begin="0.6s"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.5};${chart.opacity}`"
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
import { ref } from 'vue';

const containerRef = ref(null);

// Advanced AI Circuits
const aiCircuits = ref([
  { x: 150, y: 120, path: 'M 0,0 L 40,0 L 40,25 L 80,25 L 80,0 L 120,0', color: '#367e72', width: 2.5, opacity: 0.28, duration: 4.5, moveX: 14, moveY: -14, dashLength: 38, nodes: [{x: 40, y: 0}, {x: 80, y: 25}] },
  { x: 450, y: 180, path: 'M 0,0 L 35,0 L 35,20 L 70,20 L 70,0 L 105,0', color: '#AEC8B9', width: 2, opacity: 0.3, duration: 5, moveX: -16, moveY: 16, dashLength: 35, nodes: [{x: 35, y: 0}, {x: 70, y: 20}] },
  { x: 750, y: 150, path: 'M 0,0 L 45,0 L 45,30 L 90,30 L 90,0 L 135,0', color: '#367e72', width: 2.5, opacity: 0.27, duration: 4.8, moveX: 15, moveY: -15, dashLength: 42, nodes: [{x: 45, y: 0}, {x: 90, y: 30}] },
  { x: 950, y: 220, path: 'M 0,0 L 30,0 L 30,18 L 60,18 L 60,0 L 90,0', color: '#AEC8B9', width: 2, opacity: 0.29, duration: 5.2, moveX: -17, moveY: 17, dashLength: 33, nodes: [{x: 30, y: 0}, {x: 60, y: 18}] },
  { x: 300, y: 500, path: 'M 0,0 L 38,0 L 38,22 L 76,22 L 76,0 L 114,0', color: '#367e72', width: 2.5, opacity: 0.26, duration: 4.6, moveX: 13, moveY: -13, dashLength: 36, nodes: [{x: 38, y: 0}, {x: 76, y: 22}] },
  { x: 600, y: 580, path: 'M 0,0 L 42,0 L 42,28 L 84,28 L 84,0 L 126,0', color: '#AEC8B9', width: 2, opacity: 0.28, duration: 5.3, moveX: -15, moveY: 15, dashLength: 39, nodes: [{x: 42, y: 0}, {x: 84, y: 28}] },
]);

// Advanced Health Pulse Waves (ECG Style) - MUST HAVE
const pulseWaves = ref([
  { 
    x: 200, 
    y: 350, 
    path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 3, 
    opacity: 0.28, 
    offset: 0, 
    duration: 2.8,
    dots: [{x: 35, y: 20}, {x: 40, y: 80}, {x: 45, y: 50}]
  },
  { 
    x: 500, 
    y: 400, 
    path: 'M 0,50 L 30,50 L 35,25 L 40,75 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2.5, 
    opacity: 0.26, 
    offset: 10, 
    duration: 3.2,
    dots: [{x: 35, y: 25}, {x: 40, y: 75}, {x: 45, y: 50}]
  },
  { 
    x: 800, 
    y: 450, 
    path: 'M 0,50 L 30,50 L 35,15 L 40,85 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 3, 
    opacity: 0.27, 
    offset: 5, 
    duration: 3.5,
    dots: [{x: 35, y: 15}, {x: 40, y: 85}, {x: 45, y: 50}]
  },
  { 
    x: 300, 
    y: 600, 
    path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2.5, 
    opacity: 0.25, 
    offset: 2, 
    duration: 3.3,
    dots: [{x: 35, y: 20}, {x: 40, y: 80}, {x: 45, y: 50}]
  },
  { 
    x: 700, 
    y: 650, 
    path: 'M 0,50 L 30,50 L 35,22 L 40,78 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 3, 
    opacity: 0.27, 
    offset: 8, 
    duration: 3.4,
    dots: [{x: 35, y: 22}, {x: 40, y: 78}, {x: 45, y: 50}]
  },
]);

// Advanced AI Neural Nodes
const aiNeuralNodes = ref([
  { x: 300, y: 200, radius: 9, gradient: 'url(#solutionsOrbGrad)', opacity: 0.3, duration: 4.5, moveX: 14, moveY: -14 },
  { x: 600, y: 250, radius: 10, gradient: 'url(#solutionsOrbGrad)', opacity: 0.32, duration: 5, moveX: -16, moveY: 16 },
  { x: 900, y: 300, radius: 9, gradient: 'url(#solutionsOrbGrad)', opacity: 0.31, duration: 4.8, moveX: 15, moveY: -15 },
  { x: 400, y: 550, radius: 9, gradient: 'url(#solutionsOrbGrad)', opacity: 0.3, duration: 5.2, moveX: -17, moveY: 17 },
  { x: 700, y: 600, radius: 10, gradient: 'url(#solutionsOrbGrad)', opacity: 0.32, duration: 4.6, moveX: 13, moveY: -13 },
  { x: 1000, y: 500, radius: 9, gradient: 'url(#solutionsOrbGrad)', opacity: 0.31, duration: 5.3, moveX: -15, moveY: 15 },
]);

// Advanced Floating Health Elements
const stethoscopes = ref([
  { x: 250, y: 480, gradient: 'url(#solutionsGrad1)', color: '#367e72', opacity: 0.22, duration: 12, moveX: 20, moveY: -20, rotation: 12 },
  { x: 650, y: 520, gradient: 'url(#solutionsGrad2)', color: '#AEC8B9', opacity: 0.24, duration: 14, moveX: -18, moveY: 18, rotation: -15 },
  { x: 850, y: 450, gradient: 'url(#solutionsGrad1)', color: '#367e72', opacity: 0.23, duration: 13, moveX: 19, moveY: -19, rotation: 18 },
]);

const medicalCrosses = ref([
  { x: 150, y: 280, color: '#367e72', gradient: 'url(#solutionsGrad1)', opacity: 0.26, duration: 13 },
  { x: 550, y: 380, color: '#AEC8B9', gradient: 'url(#solutionsGrad2)', opacity: 0.28, duration: 15 },
  { x: 850, y: 480, color: '#367e72', gradient: 'url(#solutionsGrad1)', opacity: 0.27, duration: 14 },
  { x: 450, y: 680, color: '#AEC8B9', gradient: 'url(#solutionsGrad2)', opacity: 0.26, duration: 13.5 },
]);

// Advanced Floating Particles
const floatingParticles = ref([
  { x: 180, y: 100, radius: 4, gradient: 'url(#solutionsOrbGrad)', opacity: 0.45, duration: 2.8, moveX: 32, moveY: -38 },
  { x: 450, y: 150, radius: 3.5, gradient: 'url(#solutionsOrbGrad)', opacity: 0.43, duration: 3.2, moveX: -35, moveY: 35 },
  { x: 750, y: 120, radius: 4, gradient: 'url(#solutionsOrbGrad)', opacity: 0.44, duration: 3, moveX: 38, moveY: -40 },
  { x: 350, y: 400, radius: 3.5, gradient: 'url(#solutionsOrbGrad)', opacity: 0.45, duration: 3.5, moveX: -33, moveY: 37 },
  { x: 650, y: 450, radius: 4, gradient: 'url(#solutionsOrbGrad)', opacity: 0.43, duration: 3.2, moveX: 36, moveY: -36 },
  { x: 900, y: 500, radius: 3.5, gradient: 'url(#solutionsOrbGrad)', opacity: 0.44, duration: 3.8, moveX: -34, moveY: 39 },
  { x: 250, y: 700, radius: 4, gradient: 'url(#solutionsOrbGrad)', opacity: 0.45, duration: 2.9, moveX: 35, moveY: -37 },
  { x: 550, y: 750, radius: 3.5, gradient: 'url(#solutionsOrbGrad)', opacity: 0.43, duration: 3.4, moveX: -31, moveY: 38 },
]);

// Advanced AI Connections
const aiConnections = ref([
  { path: 'M 300,200 Q 450,225 600,250', color: '#367e72', width: 1.5, dashLength: 32, duration: 4, opacity: 0.3 },
  { path: 'M 600,250 Q 750,275 900,300', color: '#AEC8B9', width: 1.5, dashLength: 36, duration: 4.5, opacity: 0.3 },
  { path: 'M 400,550 Q 550,575 700,600', color: '#367e72', width: 1.5, dashLength: 34, duration: 4.2, opacity: 0.3 },
  { path: 'M 1000,500 Q 950,550 900,480', color: '#AEC8B9', width: 1.5, dashLength: 30, duration: 4.8, opacity: 0.3 },
]);

// Advanced Floating Health Icons
const healthIcons = ref([
  { x: 200, y: 120, color: '#367e72', opacity: 0.28, duration: 5.5, scale: 0.2, moveX: 13, moveY: -13, rotation: 18 },
  { x: 500, y: 180, color: '#AEC8B9', opacity: 0.26, duration: 6, scale: 0.22, moveX: -15, moveY: 15, rotation: -20 },
  { x: 800, y: 220, color: '#367e72', opacity: 0.27, duration: 5.8, scale: 0.21, moveX: 14, moveY: -14, rotation: 22 },
  { x: 400, y: 650, color: '#AEC8B9', opacity: 0.28, duration: 6.2, scale: 0.2, moveX: -16, moveY: 16, rotation: -19 },
  { x: 950, y: 580, color: '#367e72', opacity: 0.27, duration: 5.6, scale: 0.22, moveX: 12, moveY: -12, rotation: 17 },
]);

// Advanced AI Data Charts
const dataCharts = ref([
  { x: 150, y: 120, color: '#367e72', gradient: 'url(#solutionsGrad1)', opacity: 0.26, duration: 5, moveX: 10, moveY: -10, bar1: 15, bar2: 20, bar3: 25, bar4: 30 },
  { x: 500, y: 240, color: '#AEC8B9', gradient: 'url(#solutionsGrad2)', opacity: 0.28, duration: 5.5, moveX: -12, moveY: 12, bar1: 18, bar2: 22, bar3: 28, bar4: 32 },
  { x: 800, y: 400, color: '#367e72', gradient: 'url(#solutionsGrad1)', opacity: 0.27, duration: 5.2, moveX: 11, moveY: -11, bar1: 12, bar2: 18, bar3: 22, bar4: 28 },
  { x: 1050, y: 340, color: '#AEC8B9', gradient: 'url(#solutionsGrad2)', opacity: 0.28, duration: 5.8, moveX: -13, moveY: 13, bar1: 20, bar2: 24, bar3: 30, bar4: 35 },
]);
</script>

<style scoped>
.solutions-vectors {
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

.ai-circuits,
.health-pulse-waves,
.ai-neural-nodes,
.floating-health-elements,
.floating-particles,
.ai-connections,
.floating-health-icons,
.ai-data-charts {
  animation: fade-in 2s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-12px) translateX(8px);
  }
  50% {
    transform: translateY(-18px) translateX(0);
  }
  75% {
    transform: translateY(-12px) translateX(-8px);
  }
}

.solutions-vectors {
  animation: float-gentle 16s ease-in-out infinite;
}

.ai-circuits path,
.ai-circuits circle,
.health-pulse-waves path,
.health-pulse-waves circle,
.ai-neural-nodes circle,
.floating-health-elements path,
.floating-health-elements rect,
.floating-health-elements circle,
.floating-particles circle,
.ai-connections path,
.ai-connections circle,
.floating-health-icons path,
.floating-health-icons ellipse,
.ai-data-charts rect {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Enhanced visual polish */
.vector-background {
  filter: drop-shadow(0 0 30px rgba(54, 126, 114, 0.2));
}
</style>
