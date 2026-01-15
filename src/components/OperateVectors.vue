<template>
  <div class="operate-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <!-- Advanced Gradients -->
        <linearGradient id="operateGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.4" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.32" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.26" />
        </linearGradient>
        <linearGradient id="operateGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.45" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.38" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.3" />
        </linearGradient>
        <linearGradient id="operateGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#383838;stop-opacity:0.38" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.32" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0.28" />
        </linearGradient>
        <radialGradient id="operateOrbGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.58" />
          <stop offset="60%" style="stop-color:#AEC8B9;stop-opacity:0.42" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="operateNodeGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.75" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.55" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="operatePulseGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.55" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0" />
        </radialGradient>
        
        <!-- Advanced Filters -->
        <filter id="operateGlowFilter">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.88 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="operateSoftGlowFilter">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.72 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="operateIntenseGlowFilter">
          <feGaussianBlur stdDeviation="11" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 1.05 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Advanced AI Flow Lines with Multi-layer Effects -->
      <g class="ai-flow-lines" opacity="0.35">
        <path
          v-for="(line, index) in flowLines"
          :key="'flow-' + index"
          :d="line.path"
          :stroke="line.color"
          :stroke-width="line.width * 2.5"
          fill="none"
          stroke-dasharray="8,8"
          stroke-linecap="round"
          :opacity="line.opacity * 0.2"
          filter="url(#operateGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`${line.offset};${line.offset - 60};${line.offset}`"
            :dur="`${line.duration}s`"
            repeatCount="indefinite"
          />
        </path>
        <path
          v-for="(line, index) in flowLines"
          :key="'flow-main-' + index"
          :d="line.path"
          :stroke="line.color"
          :stroke-width="line.width"
          fill="none"
          stroke-dasharray="8,8"
          stroke-linecap="round"
          :opacity="line.opacity"
          filter="url(#operateIntenseGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`${line.offset};${line.offset - 60};${line.offset}`"
            :dur="`${line.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${line.opacity};${line.opacity * 0.2};${line.opacity * 0.6};${line.opacity}`"
            :dur="`${line.duration * 1.8}s`"
            repeatCount="indefinite"
          />
          <!-- Data flow particles -->
          <circle r="5" :fill="line.color" :opacity="line.opacity * 1.2" filter="url(#operateIntenseGlowFilter)">
            <circle cx="0" cy="0" r="10" :fill="line.color" :opacity="line.opacity * 0.4" filter="url(#operateGlowFilter)">
              <animate
                attributeName="r"
                :values="`10;15;10`"
                :dur="`${line.duration * 1.5}s`"
                repeatCount="indefinite"
              />
            </circle>
            <animateMotion
              :dur="`${line.duration * 1.2}s`"
              repeatCount="indefinite"
              :path="line.path"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              :values="`${line.opacity * 1.2};${line.opacity * 2};${line.opacity * 1.2}`"
              :dur="`${line.duration * 0.6}s`"
              repeatCount="indefinite"
            />
          </circle>
        </path>
      </g>

      <!-- Advanced Health Pulse Waves (ECG Style) - MUST HAVE with Triple-layer Effects -->
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
            :stroke-width="wave.width * 3"
            fill="none"
            :opacity="wave.opacity * 0.18"
            stroke-linecap="round"
            filter="url(#operateGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 45,0; 0,0; -45,0; 0,0`"
              :dur="`${wave.duration * 2.2}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </path>
          <path
            :d="wave.path"
            :stroke="wave.color"
            :stroke-width="wave.width * 2"
            fill="none"
            :opacity="wave.opacity * 0.4"
            stroke-linecap="round"
            filter="url(#operateSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 45,0; 0,0; -45,0; 0,0`"
              :dur="`${wave.duration * 2.2}s`"
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
            filter="url(#operateIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 45,0; 0,0; -45,0; 0,0`"
              :dur="`${wave.duration * 2.2}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="stroke-dashoffset"
              :values="`${wave.offset};${wave.offset - 105};${wave.offset}`"
              :dur="`${wave.duration * 1.05}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity};${wave.opacity * 0.2};${wave.opacity * 0.7};${wave.opacity}`"
              :dur="`${wave.duration * 1.6}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Enhanced pulse dots with multi-layer -->
          <circle
            v-for="(dot, dotIndex) in wave.dots"
            :key="`dot-${index}-${dotIndex}`"
            :cx="dot.x"
            :cy="dot.y"
            r="6"
            :fill="wave.color"
            :opacity="wave.opacity * 1.6"
            filter="url(#operateIntenseGlowFilter)"
          >
            <!-- Outer triple rings -->
            <circle cx="0" cy="0" r="15" :fill="wave.color" :opacity="wave.opacity * 0.35" filter="url(#operateGlowFilter)">
              <animate
                attributeName="r"
                :values="`15;22;15`"
                :dur="`${wave.duration * 1.1}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.25}s`"
              />
              <animate
                attributeName="opacity"
                :values="`${wave.opacity * 0.35};${wave.opacity * 0.08};${wave.opacity * 0.35}`"
                :dur="`${wave.duration * 1.1}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.25}s`"
              />
            </circle>
            <circle cx="0" cy="0" r="12" :fill="wave.color" :opacity="wave.opacity * 0.45" filter="url(#operateSoftGlowFilter)">
              <animate
                attributeName="r"
                :values="`12;18;12`"
                :dur="`${wave.duration * 1.1}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.2}s`"
              />
            </circle>
            <animate
              attributeName="r"
              :values="`6;10;6`"
              :dur="`${wave.duration * 1.1}s`"
              repeatCount="indefinite"
              :begin="`${dotIndex * 0.2}s`"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity * 1.6};${wave.opacity * 0.3};${wave.opacity * 1.6}`"
              :dur="`${wave.duration * 1.1}s`"
              repeatCount="indefinite"
              :begin="`${dotIndex * 0.2}s`"
            />
            <!-- Inner white core -->
            <circle cx="0" cy="0" r="3" fill="#ffffff" :opacity="wave.opacity * 2.5">
              <animate
                attributeName="opacity"
                :values="`${wave.opacity * 2.5};${wave.opacity * 0.2};${wave.opacity * 2.5}`"
                :dur="`${wave.duration * 0.8}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.15}s`"
              />
              <animate
                attributeName="r"
                :values="`3;5;3`"
                :dur="`${wave.duration * 0.8}s`"
                repeatCount="indefinite"
                :begin="`${dotIndex * 0.15}s`"
              />
            </circle>
          </circle>
        </g>
      </g>

      <!-- Advanced Floating Health Icons with Enhanced Multi-layer Animation -->
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
            :opacity="icon.opacity * 0.7"
            filter="url(#operateGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1.4;1.7;1.4`"
              :dur="`${icon.duration * 1.6}s`"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M 50,85 C 50,85 15,60 15,40 C 15,20 35,10 50,10 C 65,10 85,20 85,40 C 85,60 50,85 50,85 Z"
            :fill="icon.color"
            :opacity="icon.opacity * 0.5"
            filter="url(#operateSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1.3;1.6;1.3`"
              :dur="`${icon.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Main heart icon -->
          <path
            d="M 50,85 C 50,85 15,60 15,40 C 15,20 35,10 50,10 C 65,10 85,20 85,40 C 85,60 50,85 50,85 Z"
            :fill="icon.color"
            :opacity="icon.opacity"
            filter="url(#operateIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${icon.moveX},${icon.moveY}; ${icon.moveX * 0.6},${icon.moveY * 0.6}; -${icon.moveX * 0.9},-${icon.moveY * 0.9}; 0,0`"
              :dur="`${icon.duration * 1.8}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animateTransform
              type="scale"
              :values="`1;${1 + icon.scale};${1 + icon.scale * 0.7};1`"
              :dur="`${icon.duration * 1.5}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 0.75; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 50 50; ${icon.rotation} 50 50; 0 50 50; -${icon.rotation * 0.9} 50 50; 0 50 50`"
              :dur="`${icon.duration * 3.5}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${icon.opacity};${icon.opacity * 0.3};${icon.opacity * 0.9};${icon.opacity}`"
              :dur="`${icon.duration * 1.6}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Enhanced inner highlight with multiple layers -->
          <ellipse
            cx="50"
            cy="35"
            rx="22"
            ry="19"
            fill="url(#operateNodeGrad)"
            :opacity="icon.opacity * 1.6"
          >
            <animate
              attributeName="opacity"
              :values="`${icon.opacity * 1.6};${icon.opacity * 0.2};${icon.opacity * 1.6}`"
              :dur="`${icon.duration * 2}s`"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1;1.5;1`"
              :dur="`${icon.duration * 1.5}s`"
              repeatCount="indefinite"
            />
            <!-- Inner white dot -->
            <ellipse cx="0" cy="0" rx="10" ry="8" fill="#ffffff" :opacity="icon.opacity * 2.5">
              <animate
                attributeName="opacity"
                :values="`${icon.opacity * 2.5};${icon.opacity * 0.4};${icon.opacity * 2.5}`"
                :dur="`${icon.duration * 1.3}s`"
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                :values="`1;1.3;1`"
                :dur="`${icon.duration * 1.3}s`"
                repeatCount="indefinite"
              />
            </ellipse>
          </ellipse>
        </g>
      </g>

      <!-- Advanced AI Processing Nodes with Complex Multi-layer Animation -->
      <g class="ai-processing-nodes">
        <g
          v-for="(node, index) in aiNodes"
          :key="'node-' + index"
          :transform="`translate(${node.x}, ${node.y})`"
        >
          <!-- Quadruple-layer pulse rings -->
          <circle cx="0" cy="0" :r="node.radius * 3.5" :fill="node.gradient" :opacity="node.opacity * 0.1" filter="url(#operateGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 3.5};${node.radius * 5};${node.radius * 3.5}`"
              :dur="`${node.duration * 1.8}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.1};${node.opacity * 0.03};${node.opacity * 0.1}`"
              :dur="`${node.duration * 2.2}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius * 3" :fill="node.gradient" :opacity="node.opacity * 0.15" filter="url(#operateGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 3};${node.radius * 4.5};${node.radius * 3}`"
              :dur="`${node.duration * 1.6}s`"
              repeatCount="indefinite"
              begin="0.15s"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.15};${node.opacity * 0.05};${node.opacity * 0.15}`"
              :dur="`${node.duration * 1.9}s`"
              repeatCount="indefinite"
              begin="0.15s"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius * 2.5" :fill="node.gradient" :opacity="node.opacity * 0.2" filter="url(#operateGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2.5};${node.radius * 3.8};${node.radius * 2.5}`"
              :dur="`${node.duration * 1.4}s`"
              repeatCount="indefinite"
              begin="0.3s"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.2};${node.opacity * 0.08};${node.opacity * 0.2}`"
              :dur="`${node.duration * 1.7}s`"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </circle>
          <circle cx="0" cy="0" :r="node.radius * 2" :fill="node.gradient" :opacity="node.opacity * 0.25" filter="url(#operateGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2};${node.radius * 3.2};${node.radius * 2}`"
              :dur="`${node.duration * 1.2}s`"
              repeatCount="indefinite"
              begin="0.45s"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.25};${node.opacity * 0.1};${node.opacity * 0.25}`"
              :dur="`${node.duration * 1.5}s`"
              repeatCount="indefinite"
              begin="0.45s"
            />
          </circle>
          <!-- Main node -->
          <circle cx="0" cy="0" :r="node.radius" :fill="node.gradient" :opacity="node.opacity" filter="url(#operateIntenseGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${node.moveX},${node.moveY}; ${node.moveX * 0.5},${node.moveY * 0.5}; -${node.moveX * 0.9},-${node.moveY * 0.9}; 0,0`"
              :dur="`${node.duration * 2}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 1.7};${node.radius * 1.4};${node.radius}`"
              :dur="`${node.duration * 1.1}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity};${node.opacity * 0.3};${node.opacity * 0.8};${node.opacity}`"
              :dur="`${node.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Inner tech core with rotation -->
          <circle cx="0" cy="0" :r="node.radius * 0.5" fill="url(#operateNodeGrad)" :opacity="node.opacity * 2">
            <animateTransform
              attributeName="transform"
              type="rotate"
              :values="`0 0 0; 360 0 0`"
              :dur="`${node.duration * 1.6}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              :values="`${node.radius * 0.5};${node.radius * 0.9};${node.radius * 0.5}`"
              :dur="`${node.duration * 1}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 2};${node.opacity * 1};${node.opacity * 2}`"
              :dur="`${node.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Inner highlight dot -->
          <circle cx="0" cy="0" :r="node.radius * 0.25" fill="#ffffff" :opacity="node.opacity * 3">
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 3};${node.opacity * 0.5};${node.opacity * 3}`"
              :dur="`${node.duration * 0.9}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              :values="`${node.radius * 0.25};${node.radius * 0.4};${node.radius * 0.25}`"
              :dur="`${node.duration * 0.9}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Advanced Floating Medical Elements with Enhanced Animations -->
      <g class="floating-medical-elements">
        <!-- Pill Capsules with Multi-layer Effects -->
        <g
          v-for="(pill, index) in pillCapsules"
          :key="'pill-' + index"
          :transform="`translate(${pill.x}, ${pill.y})`"
        >
          <!-- Shadow layer -->
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="32"
            :fill="pill.color"
            :opacity="pill.opacity * 0.25"
            filter="url(#operateGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,2; ${pill.moveX * 0.3},${pill.moveY * 0.3 + 2}; 0,2`"
              :dur="`${pill.duration}s`"
              repeatCount="indefinite"
            />
          </ellipse>
          <!-- Outer glow -->
          <ellipse
            cx="50"
            cy="50"
            rx="42"
            ry="30"
            :fill="pill.gradient"
            :opacity="pill.opacity * 0.4"
            filter="url(#operateGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1;1.2;1`"
              :dur="`${pill.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </ellipse>
          <!-- Main pill -->
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="28"
            :fill="pill.gradient"
            :opacity="pill.opacity"
            filter="url(#operateIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${pill.moveX},${pill.moveY}; ${pill.moveX * 0.6},${pill.moveY * 0.6}; -${pill.moveX * 0.5},${pill.moveY * 0.5}; 0,0`"
              :dur="`${pill.duration * 1.7}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 50 50; ${pill.rotation} 50 50; 0 50 50; -${pill.rotation * 0.7} 50 50; 0 50 50`"
              :dur="`${pill.duration * 1.8}s`"
              repeatCount="indefinite"
              additive="sum"
            />
            <animate
              attributeName="opacity"
              :values="`${pill.opacity};${pill.opacity * 0.5};${pill.opacity * 0.9};${pill.opacity}`"
              :dur="`${pill.duration * 1.5}s`"
              repeatCount="indefinite"
            />
          </ellipse>
          <!-- Division line with glow -->
          <line x1="30" y1="50" x2="70" y2="50" :stroke="pill.lineColor" stroke-width="4" :opacity="pill.opacity * 1.5" stroke-linecap="round" filter="url(#operateIntenseGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              :values="`0 50 50; ${pill.rotation} 50 50; 0 50 50`"
              :dur="`${pill.duration}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${pill.opacity * 1.5};${pill.opacity * 0.6};${pill.opacity * 1.5}`"
              :dur="`${pill.duration * 1.2}s`"
              repeatCount="indefinite"
            />
          </line>
          <!-- Highlight -->
          <ellipse
            cx="35"
            cy="40"
            rx="10"
            ry="8"
            fill="url(#operateNodeGrad)"
            :opacity="pill.opacity * 0.9"
          >
            <animate
              attributeName="opacity"
              :values="`${pill.opacity * 0.9};${pill.opacity * 0.5};${pill.opacity * 0.9}`"
              :dur="`${pill.duration * 2.2}s`"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              :values="`1;1.2;1`"
              :dur="`${pill.duration * 1.8}s`"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
        <!-- Medical Crosses with Advanced Animation -->
        <g
          v-for="(cross, index) in medicalCrosses"
          :key="'cross-' + index"
          :transform="`translate(${cross.x}, ${cross.y})`"
        >
          <!-- Quadruple-layer glow -->
          <g opacity="0.6" filter="url(#operateGlowFilter)">
            <rect x="38" y="8" width="24" height="84" :fill="cross.color" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration * 0.6}s`"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="8" y="38" width="84" height="24" :fill="cross.color" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration * 0.6}s`"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <!-- Main cross -->
          <g filter="url(#operateIntenseGlowFilter)">
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
                :values="`0,0; 0,-${14 + index * 3.5}; 0,0; 0,${10 + index * 3}; 0,0`"
                :dur="`${cross.duration * 1.1}s`"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animate
                attributeName="opacity"
                :values="`${cross.opacity};${cross.opacity * 0.35};${cross.opacity * 0.9};${cross.opacity}`"
                :dur="`${cross.duration * 0.65}s`"
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
                :values="`0,0; 0,-${14 + index * 3.5}; 0,0; 0,${10 + index * 3}; 0,0`"
                :dur="`${cross.duration * 1.1}s`"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animate
                attributeName="opacity"
                :values="`${cross.opacity};${cross.opacity * 0.35};${cross.opacity * 0.9};${cross.opacity}`"
                :dur="`${cross.duration * 0.65}s`"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <!-- Enhanced center highlight -->
          <circle cx="50" cy="50" r="16" fill="url(#operateNodeGrad)" :opacity="cross.opacity * 1.7" filter="url(#operateIntenseGlowFilter)">
            <animate
              attributeName="r"
              :values="`16;22;16`"
              :dur="`${cross.duration * 1.4}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${cross.opacity * 1.7};${cross.opacity * 0.4};${cross.opacity * 1.7}`"
              :dur="`${cross.duration * 1.4}s`"
              repeatCount="indefinite"
            />
            <!-- Inner white dot -->
            <circle cx="0" cy="0" r="6" fill="#ffffff" :opacity="cross.opacity * 2.5">
              <animate
                attributeName="opacity"
                :values="`${cross.opacity * 2.5};${cross.opacity * 0.3};${cross.opacity * 2.5}`"
                :dur="`${cross.duration * 1.1}s`"
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                :values="`6;9;6`"
                :dur="`${cross.duration * 1.1}s`"
                repeatCount="indefinite"
              />
            </circle>
          </circle>
        </g>
      </g>

      <!-- Advanced Floating AI Particles with Complex Multi-stage Animation -->
      <g class="floating-particles">
        <circle
          v-for="(particle, index) in floatingParticles"
          :key="'particle-' + index"
          :cx="particle.x"
          :cy="particle.y"
          :r="particle.radius"
          :fill="particle.gradient"
          :opacity="particle.opacity"
          filter="url(#operateSoftGlowFilter)"
        >
          <!-- Outer pulse rings -->
          <circle cx="0" cy="0" :r="particle.radius * 3" :fill="particle.gradient" :opacity="particle.opacity * 0.35" filter="url(#operateGlowFilter)">
            <animate
              attributeName="r"
              :values="`${particle.radius * 3};${particle.radius * 5};${particle.radius * 3}`"
              :dur="`${particle.duration * 1.3}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${particle.opacity * 0.35};${particle.opacity * 0.12};${particle.opacity * 0.35}`"
              :dur="`${particle.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="0" cy="0" :r="particle.radius * 2.5" :fill="particle.gradient" :opacity="particle.opacity * 0.4" filter="url(#operateSoftGlowFilter)">
            <animate
              attributeName="r"
              :values="`${particle.radius * 2.5};${particle.radius * 4};${particle.radius * 2.5}`"
              :dur="`${particle.duration * 1.1}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </circle>
          <animate
            attributeName="r"
            :values="`${particle.radius};${particle.radius * 3};${particle.radius * 2};${particle.radius}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.33; 0.67; 1"
          />
          <animate
            attributeName="opacity"
            :values="`${particle.opacity};${particle.opacity * 0.08};${particle.opacity * 0.55};${particle.opacity}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.33; 0.67; 1"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`0,0; ${particle.moveX},${particle.moveY}; ${particle.moveX * 0.8},${particle.moveY * 0.8}; -${particle.moveX * 0.6},-${particle.moveY * 0.6}; 0,0`"
            :dur="`${particle.duration * 2.5}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
          />
        </circle>
      </g>

      <!-- Advanced AI Connection Lines with Enhanced Data Flow -->
      <g class="ai-connections" opacity="0.32">
        <path
          v-for="(conn, index) in aiConnections"
          :key="'conn-' + index"
          :d="conn.path"
          :stroke="conn.color"
          :stroke-width="conn.width * 2.5"
          fill="none"
          stroke-dasharray="7,7"
          stroke-linecap="round"
          :opacity="conn.opacity * 0.25"
          filter="url(#operateGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`0;${conn.dashLength};0`"
            :dur="`${conn.duration}s`"
            repeatCount="indefinite"
          />
        </path>
        <path
          v-for="(conn, index) in aiConnections"
          :key="'conn-main-' + index"
          :d="conn.path"
          :stroke="conn.color"
          :stroke-width="conn.width"
          fill="none"
          stroke-dasharray="7,7"
          stroke-linecap="round"
          :opacity="conn.opacity"
          filter="url(#operateIntenseGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`0;${conn.dashLength};0`"
            :dur="`${conn.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`${conn.opacity};${conn.opacity * 0.2};${conn.opacity * 0.7};${conn.opacity}`"
            :dur="`${conn.duration * 2.2}s`"
            repeatCount="indefinite"
          />
          <!-- Multiple data flow particles -->
          <circle r="5" :fill="conn.color" :opacity="conn.opacity * 1.3" filter="url(#operateIntenseGlowFilter)">
            <circle cx="0" cy="0" r="12" :fill="conn.color" :opacity="conn.opacity * 0.45" filter="url(#operateGlowFilter)">
              <animate
                attributeName="r"
                :values="`12;18;12`"
                :dur="`${conn.duration * 1.8}s`"
                repeatCount="indefinite"
              />
            </circle>
            <animateMotion
              :dur="`${conn.duration * 2}s`"
              repeatCount="indefinite"
              :path="conn.path"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              :values="`${conn.opacity * 1.3};${conn.opacity * 2.2};${conn.opacity * 1.3}`"
              :dur="`${conn.duration * 0.7}s`"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="3.5" :fill="conn.color" :opacity="conn.opacity * 1" filter="url(#operateSoftGlowFilter)">
            <animateMotion
              :dur="`${conn.duration * 1.6}s`"
              repeatCount="indefinite"
              :path="conn.path"
              calcMode="linear"
              begin="0.4s"
            />
          </circle>
        </path>
      </g>

      <!-- Advanced Health Data Visualization Charts -->
      <g class="health-data-charts">
        <g
          v-for="(chart, index) in dataCharts"
          :key="'chart-' + index"
          :transform="`translate(${chart.x}, ${chart.y})`"
        >
          <!-- Background glow -->
          <rect x="0" y="0" width="80" height="60" :fill="chart.gradient" :opacity="chart.opacity * 0.35" rx="6" filter="url(#operateGlowFilter)">
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
          <rect x="0" y="0" width="80" height="60" :fill="chart.gradient" :opacity="chart.opacity * 0.25" rx="6" filter="url(#operateSoftGlowFilter)">
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
          <rect x="10" y="40" width="12" :height="chart.bar1" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#operateIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar1};${chart.bar1 + 12};${chart.bar1}`"
              :dur="`${chart.duration * 0.7}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.8};${chart.opacity}`"
              :dur="`${chart.duration * 0.7}s`"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="28" y="35" width="12" :height="chart.bar2" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#operateIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar2};${chart.bar2 + 15};${chart.bar2}`"
              :dur="`${chart.duration * 0.8}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.8};${chart.opacity}`"
              :dur="`${chart.duration * 0.8}s`"
              repeatCount="indefinite"
              begin="0.2s"
            />
          </rect>
          <rect x="46" y="30" width="12" :height="chart.bar3" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#operateIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar3};${chart.bar3 + 18};${chart.bar3}`"
              :dur="`${chart.duration * 0.9}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.8};${chart.opacity}`"
              :dur="`${chart.duration * 0.9}s`"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </rect>
          <rect x="64" y="25" width="12" :height="chart.bar4" :fill="chart.color" :opacity="chart.opacity" rx="2" filter="url(#operateIntenseGlowFilter)">
            <animate
              attributeName="height"
              :values="`${chart.bar4};${chart.bar4 + 13};${chart.bar4}`"
              :dur="`${chart.duration * 0.75}s`"
              repeatCount="indefinite"
              begin="0.6s"
            />
            <animate
              attributeName="opacity"
              :values="`${chart.opacity};${chart.opacity * 1.8};${chart.opacity}`"
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

// Advanced AI Flow Lines
const flowLines = ref([
  { path: 'M 200,150 Q 400,200 600,150 T 1000,150', color: '#367e72', width: 2.5, offset: 0, duration: 4, opacity: 0.35 },
  { path: 'M 300,500 Q 500,400 700,500 T 1100,500', color: '#AEC8B9', width: 2, offset: 10, duration: 5, opacity: 0.35 },
  { path: 'M 100,300 Q 300,250 500,300 T 900,300', color: '#367e72', width: 2.5, offset: 5, duration: 4.5, opacity: 0.35 },
  { path: 'M 400,650 Q 600,600 800,650', color: '#AEC8B9', width: 2, offset: 8, duration: 5.5, opacity: 0.35 },
]);

// Advanced Health Pulse Waves (ECG Style) - MUST HAVE
const pulseWaves = ref([
  { 
    x: 150, 
    y: 250, 
    path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 3, 
    opacity: 0.27, 
    offset: 0, 
    duration: 2.8,
    dots: [{x: 35, y: 20}, {x: 40, y: 80}, {x: 45, y: 50}]
  },
  { 
    x: 450, 
    y: 300, 
    path: 'M 0,50 L 30,50 L 35,25 L 40,75 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2.5, 
    opacity: 0.25, 
    offset: 10, 
    duration: 3.2,
    dots: [{x: 35, y: 25}, {x: 40, y: 75}, {x: 45, y: 50}]
  },
  { 
    x: 750, 
    y: 350, 
    path: 'M 0,50 L 30,50 L 35,15 L 40,85 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 3, 
    opacity: 0.26, 
    offset: 5, 
    duration: 3.5,
    dots: [{x: 35, y: 15}, {x: 40, y: 85}, {x: 45, y: 50}]
  },
  { 
    x: 250, 
    y: 550, 
    path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2.5, 
    opacity: 0.24, 
    offset: 2, 
    duration: 3.3,
    dots: [{x: 35, y: 20}, {x: 40, y: 80}, {x: 45, y: 50}]
  },
  { 
    x: 650, 
    y: 600, 
    path: 'M 0,50 L 30,50 L 35,22 L 40,78 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 3, 
    opacity: 0.25, 
    offset: 8, 
    duration: 3.4,
    dots: [{x: 35, y: 22}, {x: 40, y: 78}, {x: 45, y: 50}]
  },
  { 
    x: 950, 
    y: 500, 
    path: 'M 0,50 L 30,50 L 35,18 L 40,82 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2.5, 
    opacity: 0.26, 
    offset: 6, 
    duration: 3.6,
    dots: [{x: 35, y: 18}, {x: 40, y: 82}, {x: 45, y: 50}]
  },
]);

// Advanced Floating Health Icons
const healthIcons = ref([
  { x: 300, y: 120, color: '#367e72', opacity: 0.28, duration: 5.5, scale: 0.19, moveX: 13, moveY: -13, rotation: 20 },
  { x: 600, y: 200, color: '#AEC8B9', opacity: 0.26, duration: 6, scale: 0.21, moveX: -15, moveY: 15, rotation: -22 },
  { x: 900, y: 280, color: '#367e72', opacity: 0.27, duration: 5.8, scale: 0.2, moveX: 14, moveY: -14, rotation: 24 },
  { x: 400, y: 650, color: '#AEC8B9', opacity: 0.28, duration: 6.2, scale: 0.19, moveX: -16, moveY: 16, rotation: -21 },
  { x: 800, y: 700, color: '#367e72', opacity: 0.27, duration: 5.6, scale: 0.21, moveX: 12, moveY: -12, rotation: 19 },
]);

// Advanced AI Processing Nodes
const aiNodes = ref([
  { x: 200, y: 400, radius: 8, gradient: 'url(#operateOrbGrad)', opacity: 0.29, duration: 4.5, moveX: 14, moveY: -14 },
  { x: 500, y: 450, radius: 9, gradient: 'url(#operateOrbGrad)', opacity: 0.31, duration: 5, moveX: -16, moveY: 16 },
  { x: 800, y: 500, radius: 8, gradient: 'url(#operateOrbGrad)', opacity: 0.3, duration: 4.8, moveX: 15, moveY: -15 },
  { x: 350, y: 650, radius: 9, gradient: 'url(#operateOrbGrad)', opacity: 0.31, duration: 5.2, moveX: -17, moveY: 17 },
  { x: 700, y: 700, radius: 8, gradient: 'url(#operateOrbGrad)', opacity: 0.29, duration: 4.6, moveX: 13, moveY: -13 },
  { x: 1000, y: 600, radius: 9, gradient: 'url(#operateOrbGrad)', opacity: 0.3, duration: 5.3, moveX: -15, moveY: 15 },
]);

// Advanced Floating Medical Elements
const pillCapsules = ref([
  { x: 150, y: 180, gradient: 'url(#operateGrad1)', lineColor: '#367e72', opacity: 0.24, rotation: 18, duration: 8, moveX: 14, moveY: -12 },
  { x: 550, y: 380, gradient: 'url(#operateGrad2)', lineColor: '#AEC8B9', opacity: 0.26, rotation: -15, duration: 9, moveX: -12, moveY: 14 },
  { x: 850, y: 480, gradient: 'url(#operateGrad1)', lineColor: '#367e72', opacity: 0.25, rotation: 22, duration: 7.5, moveX: 17, moveY: -14 },
  { x: 300, y: 600, gradient: 'url(#operateGrad2)', lineColor: '#AEC8B9', opacity: 0.24, rotation: -19, duration: 8.5, moveX: -13, moveY: 15 },
]);

const medicalCrosses = ref([
  { x: 400, y: 320, color: '#367e72', gradient: 'url(#operateGrad1)', opacity: 0.28, duration: 13 },
  { x: 700, y: 420, color: '#AEC8B9', gradient: 'url(#operateGrad2)', opacity: 0.3, duration: 15 },
  { x: 500, y: 750, color: '#367e72', gradient: 'url(#operateGrad1)', opacity: 0.29, duration: 14 },
]);

// Advanced Floating Particles
const floatingParticles = ref([
  { x: 180, y: 100, radius: 4, gradient: 'url(#operateOrbGrad)', opacity: 0.48, duration: 2.8, moveX: 35, moveY: -42 },
  { x: 450, y: 150, radius: 3.5, gradient: 'url(#operateOrbGrad)', opacity: 0.46, duration: 3.2, moveX: -38, moveY: 38 },
  { x: 750, y: 120, radius: 4, gradient: 'url(#operateOrbGrad)', opacity: 0.47, duration: 3, moveX: 40, moveY: -44 },
  { x: 350, y: 400, radius: 3.5, gradient: 'url(#operateOrbGrad)', opacity: 0.48, duration: 3.5, moveX: -36, moveY: 40 },
  { x: 650, y: 450, radius: 4, gradient: 'url(#operateOrbGrad)', opacity: 0.46, duration: 3.2, moveX: 38, moveY: -40 },
  { x: 900, y: 500, radius: 3.5, gradient: 'url(#operateOrbGrad)', opacity: 0.47, duration: 3.8, moveX: -34, moveY: 42 },
  { x: 250, y: 700, radius: 4, gradient: 'url(#operateOrbGrad)', opacity: 0.48, duration: 2.9, moveX: 37, moveY: -39 },
  { x: 550, y: 750, radius: 3.5, gradient: 'url(#operateOrbGrad)', opacity: 0.46, duration: 3.4, moveX: -35, moveY: 41 },
]);

// Advanced AI Connections
const aiConnections = ref([
  { path: 'M 200,400 Q 350,425 500,450', color: '#367e72', width: 1.5, dashLength: 32, duration: 4, opacity: 0.32 },
  { path: 'M 500,450 Q 650,475 800,500', color: '#AEC8B9', width: 1.5, dashLength: 36, duration: 4.5, opacity: 0.32 },
  { path: 'M 350,650 Q 525,675 700,700', color: '#367e72', width: 1.5, dashLength: 34, duration: 4.2, opacity: 0.32 },
  { path: 'M 1000,600 Q 900,650 800,500', color: '#AEC8B9', width: 1.5, dashLength: 30, duration: 4.8, opacity: 0.32 },
]);

// Advanced Health Data Charts
const dataCharts = ref([
  { x: 150, y: 120, color: '#367e72', gradient: 'url(#operateGrad1)', opacity: 0.28, duration: 5, moveX: 10, moveY: -10, bar1: 15, bar2: 20, bar3: 25, bar4: 30 },
  { x: 500, y: 240, color: '#AEC8B9', gradient: 'url(#operateGrad2)', opacity: 0.3, duration: 5.5, moveX: -12, moveY: 12, bar1: 18, bar2: 22, bar3: 28, bar4: 32 },
  { x: 800, y: 400, color: '#367e72', gradient: 'url(#operateGrad1)', opacity: 0.29, duration: 5.2, moveX: 11, moveY: -11, bar1: 12, bar2: 18, bar3: 22, bar4: 28 },
  { x: 1050, y: 340, color: '#AEC8B9', gradient: 'url(#operateGrad2)', opacity: 0.3, duration: 5.8, moveX: -13, moveY: 13, bar1: 20, bar2: 24, bar3: 30, bar4: 35 },
]);
</script>

<style scoped>
.operate-vectors {
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

.ai-flow-lines,
.health-pulse-waves,
.floating-health-icons,
.ai-processing-nodes,
.floating-medical-elements,
.floating-particles,
.ai-connections,
.health-data-charts {
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
    transform: translateY(-14px) translateX(10px);
  }
  50% {
    transform: translateY(-20px) translateX(0);
  }
  75% {
    transform: translateY(-14px) translateX(-10px);
  }
}

.operate-vectors {
  animation: float-gentle 18s ease-in-out infinite;
}

.ai-flow-lines path,
.ai-flow-lines circle,
.health-pulse-waves path,
.health-pulse-waves circle,
.floating-health-icons path,
.floating-health-icons ellipse,
.ai-processing-nodes circle,
.floating-medical-elements ellipse,
.floating-medical-elements line,
.floating-medical-elements rect,
.floating-medical-elements circle,
.floating-particles circle,
.ai-connections path,
.ai-connections circle,
.health-data-charts rect {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Enhanced visual polish */
.vector-background {
  filter: drop-shadow(0 0 35px rgba(54, 126, 114, 0.25));
}
</style>

