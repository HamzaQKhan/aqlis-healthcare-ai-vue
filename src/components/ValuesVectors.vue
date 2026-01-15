<template>
  <div class="values-vectors" ref="containerRef">
    <svg class="vector-background" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <!-- Advanced Gradients -->
        <linearGradient id="valuesGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.35" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.28" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.22" />
        </linearGradient>
        <linearGradient id="valuesGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.4" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.32" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0.24" />
        </linearGradient>
        <linearGradient id="valuesGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#383838;stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.25" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0.2" />
        </linearGradient>
        <radialGradient id="valuesOrbGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.5" />
          <stop offset="60%" style="stop-color:#AEC8B9;stop-opacity:0.35" />
          <stop offset="100%" style="stop-color:#383838;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="valuesNodeGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.6" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.4" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="valuesPulseGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.45" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0" />
        </radialGradient>
        
        <!-- Advanced Filters -->
        <filter id="valuesGlowFilter">
          <feGaussianBlur stdDeviation="7" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.8 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="valuesSoftGlowFilter">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.65 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="valuesIntenseGlowFilter">
          <feGaussianBlur stdDeviation="9" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.95 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Advanced AI Neural Network Nodes with Multi-layer Animation -->
      <g class="ai-health-nodes">
        <g
          v-for="(node, index) in aiHealthNodes"
          :key="'node-' + index"
          :transform="`translate(${node.x}, ${node.y})`"
        >
          <!-- Outer pulse ring 1 -->
          <circle cx="0" cy="0" :r="node.radius * 2.5" :fill="node.gradient" :opacity="node.opacity * 0.15" filter="url(#valuesGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2.5};${node.radius * 3.8};${node.radius * 2.5}`"
              :dur="`${node.duration * 1.4}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.15};${node.opacity * 0.05};${node.opacity * 0.15}`"
              :dur="`${node.duration * 1.7}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Outer pulse ring 2 -->
          <circle cx="0" cy="0" :r="node.radius * 2" :fill="node.gradient" :opacity="node.opacity * 0.2" filter="url(#valuesGlowFilter)">
            <animate
              attributeName="r"
              :values="`${node.radius * 2};${node.radius * 3.2};${node.radius * 2}`"
              :dur="`${node.duration * 1.2}s`"
              repeatCount="indefinite"
              begin="0.3s"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 0.2};${node.opacity * 0.08};${node.opacity * 0.2}`"
              :dur="`${node.duration * 1.5}s`"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </circle>
          <!-- Main node -->
          <circle cx="0" cy="0" :r="node.radius" :fill="node.gradient" :opacity="node.opacity" filter="url(#valuesIntenseGlowFilter)">
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${node.moveX},${node.moveY}; 0,0; -${node.moveX * 0.7},-${node.moveY * 0.7}; 0,0; ${node.moveX * 0.4},${node.moveY * 0.4}; 0,0`"
              :dur="`${node.duration * 1.6}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.17; 0.33; 0.5; 0.67; 0.83; 1"
            />
            <animate
              attributeName="r"
              :values="`${node.radius};${node.radius * 1.5};${node.radius * 1.2};${node.radius}`"
              :dur="`${node.duration * 0.9}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity};${node.opacity * 0.4};${node.opacity * 0.7};${node.opacity}`"
              :dur="`${node.duration * 1.2}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Inner tech core with rotation -->
          <circle cx="0" cy="0" :r="node.radius * 0.4" fill="url(#valuesNodeGrad)" :opacity="node.opacity * 1.6">
            <animateTransform
              attributeName="transform"
              type="rotate"
              :values="`0 0 0; 360 0 0`"
              :dur="`${node.duration * 2}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              :values="`${node.radius * 0.4};${node.radius * 0.75};${node.radius * 0.4}`"
              :dur="`${node.duration * 0.85}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 1.6};${node.opacity * 0.8};${node.opacity * 1.6}`"
              :dur="`${node.duration * 1.1}s`"
              repeatCount="indefinite"
            />
          </circle>
          <!-- Inner highlight dot -->
          <circle cx="0" cy="0" :r="node.radius * 0.15" fill="#ffffff" :opacity="node.opacity * 2">
            <animate
              attributeName="opacity"
              :values="`${node.opacity * 2};${node.opacity * 0.5};${node.opacity * 2}`"
              :dur="`${node.duration * 0.7}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Advanced Health Pulse Waves (ECG Style) - MUST HAVE with Enhanced Animation -->
      <g class="health-pulse-waves">
        <g
          v-for="(wave, index) in pulseWaves"
          :key="'wave-' + index"
          :transform="`translate(${wave.x}, ${wave.y})`"
        >
          <!-- Background glow layer -->
          <path
            :d="wave.path"
            :stroke="wave.color"
            :stroke-width="wave.width * 1.8"
            fill="none"
            :opacity="wave.opacity * 0.3"
            stroke-linecap="round"
            filter="url(#valuesGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 35,0; 0,0; -35,0; 0,0`"
              :dur="`${wave.duration * 1.8}s`"
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
            filter="url(#valuesIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 35,0; 0,0; -35,0; 0,0`"
              :dur="`${wave.duration * 1.8}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="stroke-dashoffset"
              :values="`${wave.offset};${wave.offset - 100};${wave.offset}`"
              :dur="`${wave.duration * 0.95}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity};${wave.opacity * 0.3};${wave.opacity * 0.6};${wave.opacity}`"
              :dur="`${wave.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Pulse dots -->
          <circle
            v-for="(dot, dotIndex) in wave.dots"
            :key="`dot-${index}-${dotIndex}`"
            :cx="dot.x"
            :cy="dot.y"
            r="4"
            :fill="wave.color"
            :opacity="wave.opacity * 1.3"
            filter="url(#valuesSoftGlowFilter)"
          >
            <animate
              attributeName="r"
              :values="`4;7;4`"
              :dur="`${wave.duration * 0.8}s`"
              repeatCount="indefinite"
              :begin="`${dotIndex * 0.15}s`"
            />
            <animate
              attributeName="opacity"
              :values="`${wave.opacity * 1.3};${wave.opacity * 0.5};${wave.opacity * 1.3}`"
              :dur="`${wave.duration * 0.8}s`"
              repeatCount="indefinite"
              :begin="`${dotIndex * 0.15}s`"
            />
          </circle>
        </g>
      </g>

      <!-- Advanced Floating Health Icons (Hearts) with Multi-directional Movement -->
      <g class="floating-health-icons">
        <g
          v-for="(icon, index) in healthIcons"
          :key="'icon-' + index"
          :transform="`translate(${icon.x}, ${icon.y})`"
        >
          <!-- Outer glow ring -->
          <path
            d="M 50,85 C 50,85 15,60 15,40 C 15,20 35,10 50,10 C 65,10 85,20 85,40 C 85,60 50,85 50,85 Z"
            :fill="icon.color"
            :opacity="icon.opacity * 0.5"
            filter="url(#valuesGlowFilter)"
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
            filter="url(#valuesIntenseGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${icon.moveX},${icon.moveY}; ${icon.moveX * 0.3},${icon.moveY * 0.3}; -${icon.moveX * 0.7},-${icon.moveY * 0.7}; 0,0`"
              :dur="`${icon.duration * 1.5}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animateTransform
              type="scale"
              :values="`1;${1 + icon.scale};${1 + icon.scale * 0.5};1`"
              :dur="`${icon.duration * 1.3}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 0.75; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 50 50; ${icon.rotation} 50 50; 0 50 50; -${icon.rotation * 0.6} 50 50; 0 50 50`"
              :dur="`${icon.duration * 2.5}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${icon.opacity};${icon.opacity * 0.5};${icon.opacity * 0.8};${icon.opacity}`"
              :dur="`${icon.duration * 1.4}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Inner highlight -->
          <ellipse
            cx="50"
            cy="35"
            rx="18"
            ry="15"
            fill="url(#valuesNodeGrad)"
            :opacity="icon.opacity * 1.2"
          >
            <animate
              attributeName="opacity"
              :values="`${icon.opacity * 1.2};${icon.opacity * 0.4};${icon.opacity * 1.2}`"
              :dur="`${icon.duration * 1.6}s`"
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
        </g>
      </g>

      <!-- Advanced AI Connection Lines with Data Flow Animation -->
      <g class="ai-connections" opacity="0.3">
        <path
          v-for="(conn, index) in aiConnections"
          :key="'conn-' + index"
          :d="conn.path"
          :stroke="conn.color"
          :stroke-width="conn.width"
          fill="none"
          stroke-dasharray="6,6"
          stroke-linecap="round"
          filter="url(#valuesSoftGlowFilter)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="`0;${conn.dashLength};0`"
            :dur="`${conn.duration}s`"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            :values="`0.3;0.15;0.25;0.3`"
            :dur="`${conn.duration * 1.8}s`"
            repeatCount="indefinite"
          />
          <!-- Data flow particles along the line -->
          <circle r="3" :fill="conn.color" :opacity="conn.opacity" filter="url(#valuesSoftGlowFilter)">
            <animateMotion
              :dur="`${conn.duration * 1.5}s`"
              repeatCount="indefinite"
              :path="conn.path"
              calcMode="linear"
            />
            <animate
              attributeName="opacity"
              :values="`${conn.opacity};${conn.opacity * 1.5};${conn.opacity}`"
              :dur="`${conn.duration * 0.5}s`"
              repeatCount="indefinite"
            />
          </circle>
        </path>
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
          filter="url(#valuesSoftGlowFilter)"
        >
          <animate
            attributeName="r"
            :values="`${particle.radius};${particle.radius * 2.5};${particle.radius * 1.5};${particle.radius}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.33; 0.67; 1"
          />
          <animate
            attributeName="opacity"
            :values="`${particle.opacity};${particle.opacity * 0.15};${particle.opacity * 0.4};${particle.opacity}`"
            :dur="`${particle.duration}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.33; 0.67; 1"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            :values="`0,0; ${particle.moveX},${particle.moveY}; ${particle.moveX * 0.6},${particle.moveY * 0.6}; -${particle.moveX * 0.4},-${particle.moveY * 0.4}; 0,0`"
            :dur="`${particle.duration * 2}s`"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
          />
        </circle>
      </g>

      <!-- Advanced Floating Medical Crosses with Rotation -->
      <g class="floating-crosses">
        <g
          v-for="(cross, index) in medicalCrosses"
          :key="'cross-' + index"
          :transform="`translate(${cross.x}, ${cross.y})`"
        >
          <!-- Outer glow -->
          <g opacity="0.4" filter="url(#valuesGlowFilter)">
            <rect x="38" y="8" width="24" height="84" :fill="cross.color" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration * 0.8}s`"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="8" y="38" width="84" height="24" :fill="cross.color" rx="5">
              <animateTransform
                attributeName="transform"
                type="rotate"
                :values="`0 50 50; 360 50 50`"
                :dur="`${cross.duration * 0.8}s`"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <!-- Main cross -->
          <g filter="url(#valuesIntenseGlowFilter)">
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
                :values="`0,0; 0,-${10 + index * 2.5}; 0,0; 0,${6 + index * 2}; 0,0`"
                :dur="`${cross.duration * 0.9}s`"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animate
                attributeName="opacity"
                :values="`${cross.opacity};${cross.opacity * 0.5};${cross.opacity * 0.8};${cross.opacity}`"
                :dur="`${cross.duration * 0.5}s`"
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
                :values="`0,0; 0,-${10 + index * 2.5}; 0,0; 0,${6 + index * 2}; 0,0`"
                :dur="`${cross.duration * 0.9}s`"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animate
                attributeName="opacity"
                :values="`${cross.opacity};${cross.opacity * 0.5};${cross.opacity * 0.8};${cross.opacity}`"
                :dur="`${cross.duration * 0.5}s`"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <!-- Center highlight -->
          <circle cx="50" cy="50" r="12" fill="url(#valuesNodeGrad)" :opacity="cross.opacity * 1.3" filter="url(#valuesSoftGlowFilter)">
            <animate
              attributeName="r"
              :values="`12;16;12`"
              :dur="`${cross.duration * 1.2}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              :values="`${cross.opacity * 1.3};${cross.opacity * 0.6};${cross.opacity * 1.3}`"
              :dur="`${cross.duration * 1.2}s`"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>

      <!-- Advanced Floating Geometric Shapes -->
      <g class="floating-geometric-shapes">
        <g
          v-for="(shape, index) in geometricShapes"
          :key="'shape-' + index"
          :transform="`translate(${shape.x}, ${shape.y})`"
        >
          <polygon
            :points="shape.points"
            :fill="shape.gradient"
            :opacity="shape.opacity"
            :stroke="shape.color"
            stroke-width="1.5"
            filter="url(#valuesSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; ${shape.moveX},${shape.moveY}; ${shape.moveX * 0.5},${shape.moveY * 0.5}; -${shape.moveX * 0.6},-${shape.moveY * 0.6}; 0,0`"
              :dur="`${shape.duration}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.2; 0.4; 0.6; 0.8; 1"
            />
            <animateTransform
              type="rotate"
              :values="`0 0 0; ${shape.rotation} 0 0; 0 0 0; -${shape.rotation * 0.7} 0 0; 0 0 0`"
              :dur="`${shape.duration * 1.8}s`"
              repeatCount="indefinite"
              additive="sum"
            />
            <animate
              attributeName="opacity"
              :values="`${shape.opacity};${shape.opacity * 0.4};${shape.opacity * 0.7};${shape.opacity}`"
              :dur="`${shape.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </polygon>
        </g>
      </g>

      <!-- Advanced DNA Helix Patterns -->
      <g class="dna-helix-patterns">
        <g
          v-for="(dna, index) in dnaHelixes"
          :key="'dna-' + index"
          :transform="`translate(${dna.x}, ${dna.y})`"
        >
          <!-- First strand -->
          <path
            :d="dna.strand1"
            :stroke="dna.color1"
            :stroke-width="dna.width"
            fill="none"
            :opacity="dna.opacity"
            stroke-linecap="round"
            filter="url(#valuesSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 0,${dna.moveY * 1.3}; 0,0; 0,-${dna.moveY * 0.9}; 0,0`"
              :dur="`${dna.duration * 1.3}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 12,0; 0,0; -12,0; 0,0`"
              :dur="`${dna.duration * 1.6}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${dna.opacity};${dna.opacity * 0.25};${dna.opacity * 0.5};${dna.opacity}`"
              :dur="`${dna.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Second strand -->
          <path
            :d="dna.strand2"
            :stroke="dna.color2"
            :stroke-width="dna.width"
            fill="none"
            :opacity="dna.opacity"
            stroke-linecap="round"
            filter="url(#valuesSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 0,${dna.moveY * 1.3}; 0,0; 0,-${dna.moveY * 0.9}; 0,0`"
              :dur="`${dna.duration * 1.3}s`"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; -12,0; 0,0; 12,0; 0,0`"
              :dur="`${dna.duration * 1.6}s`"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              :values="`${dna.opacity};${dna.opacity * 0.25};${dna.opacity * 0.5};${dna.opacity}`"
              :dur="`${dna.duration * 1.3}s`"
              repeatCount="indefinite"
            />
          </path>
          <!-- Connection nodes -->
          <circle
            v-for="(node, nodeIndex) in dna.nodes"
            :key="`node-${index}-${nodeIndex}`"
            :cx="node.x"
            :cy="node.y"
            r="4"
            :fill="dna.color1"
            :opacity="dna.opacity * 1.4"
            filter="url(#valuesSoftGlowFilter)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              :values="`0,0; 0,${dna.moveY}; 0,0`"
              :dur="`${dna.duration}s`"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              :values="`4;6;4`"
              :dur="`${dna.duration * 1.6}s`"
              repeatCount="indefinite"
              :begin="`${nodeIndex * 0.2}s`"
            />
            <animate
              attributeName="opacity"
              :values="`${dna.opacity * 1.4};${dna.opacity * 0.6};${dna.opacity * 1.4}`"
              :dur="`${dna.duration * 1.4}s`"
              repeatCount="indefinite"
              :begin="`${nodeIndex * 0.15}s`"
            />
          </circle>
        </g>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const containerRef = ref(null);

// Advanced AI-Health Mixed Nodes
const aiHealthNodes = ref([
  { x: 150, y: 150, radius: 8, gradient: 'url(#valuesOrbGrad)', opacity: 0.28, duration: 4.5, moveX: 15, moveY: -15 },
  { x: 400, y: 200, radius: 9, gradient: 'url(#valuesOrbGrad)', opacity: 0.3, duration: 5, moveX: -18, moveY: 18 },
  { x: 700, y: 180, radius: 8, gradient: 'url(#valuesOrbGrad)', opacity: 0.29, duration: 4.8, moveX: 17, moveY: -17 },
  { x: 950, y: 250, radius: 9, gradient: 'url(#valuesOrbGrad)', opacity: 0.31, duration: 5.2, moveX: -20, moveY: 20 },
  { x: 300, y: 450, radius: 8, gradient: 'url(#valuesOrbGrad)', opacity: 0.28, duration: 4.6, moveX: 14, moveY: -14 },
  { x: 600, y: 500, radius: 9, gradient: 'url(#valuesOrbGrad)', opacity: 0.3, duration: 5.3, moveX: -16, moveY: 16 },
  { x: 850, y: 550, radius: 8, gradient: 'url(#valuesOrbGrad)', opacity: 0.29, duration: 4.9, moveX: 18, moveY: -18 },
  { x: 200, y: 650, radius: 9, gradient: 'url(#valuesOrbGrad)', opacity: 0.3, duration: 5.1, moveX: -15, moveY: 15 },
]);

// Advanced Health Pulse Waves (ECG Style) - MUST HAVE
const pulseWaves = ref([
  { 
    x: 100, 
    y: 300, 
    path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 2.5, 
    opacity: 0.26, 
    offset: 0, 
    duration: 2.8,
    dots: [{x: 35, y: 20}, {x: 40, y: 80}, {x: 45, y: 50}]
  },
  { 
    x: 350, 
    y: 350, 
    path: 'M 0,50 L 30,50 L 35,25 L 40,75 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2, 
    opacity: 0.24, 
    offset: 10, 
    duration: 3.2,
    dots: [{x: 35, y: 25}, {x: 40, y: 75}, {x: 45, y: 50}]
  },
  { 
    x: 600, 
    y: 400, 
    path: 'M 0,50 L 30,50 L 35,15 L 40,85 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 2.5, 
    opacity: 0.25, 
    offset: 5, 
    duration: 3.5,
    dots: [{x: 35, y: 15}, {x: 40, y: 85}, {x: 45, y: 50}]
  },
  { 
    x: 850, 
    y: 450, 
    path: 'M 0,50 L 30,50 L 35,20 L 40,80 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2, 
    opacity: 0.26, 
    offset: 2, 
    duration: 3.3,
    dots: [{x: 35, y: 20}, {x: 40, y: 80}, {x: 45, y: 50}]
  },
  { 
    x: 200, 
    y: 600, 
    path: 'M 0,50 L 30,50 L 35,22 L 40,78 L 45,50 L 100,50', 
    color: '#367e72', 
    width: 2.5, 
    opacity: 0.24, 
    offset: 8, 
    duration: 3.4,
    dots: [{x: 35, y: 22}, {x: 40, y: 78}, {x: 45, y: 50}]
  },
  { 
    x: 750, 
    y: 650, 
    path: 'M 0,50 L 30,50 L 35,18 L 40,82 L 45,50 L 100,50', 
    color: '#AEC8B9', 
    width: 2, 
    opacity: 0.25, 
    offset: 6, 
    duration: 3.6,
    dots: [{x: 35, y: 18}, {x: 40, y: 82}, {x: 45, y: 50}]
  },
]);

// Advanced Floating Health Icons
const healthIcons = ref([
  { x: 250, y: 120, color: '#367e72', opacity: 0.26, duration: 5.5, scale: 0.18, moveX: 12, moveY: -12, rotation: 15 },
  { x: 550, y: 280, color: '#AEC8B9', opacity: 0.24, duration: 6, scale: 0.2, moveX: -14, moveY: 14, rotation: -18 },
  { x: 800, y: 320, color: '#367e72', opacity: 0.25, duration: 5.8, scale: 0.19, moveX: 13, moveY: -13, rotation: 20 },
  { x: 450, y: 600, color: '#AEC8B9', opacity: 0.26, duration: 6.2, scale: 0.18, moveX: -15, moveY: 15, rotation: -16 },
  { x: 1000, y: 500, color: '#367e72', opacity: 0.24, duration: 5.6, scale: 0.2, moveX: 11, moveY: -11, rotation: 17 },
]);

// Advanced AI Connection Lines
const aiConnections = ref([
  { path: 'M 150,150 Q 300,200 400,200', color: '#367e72', width: 1.5, dashLength: 25, duration: 4, opacity: 0.3 },
  { path: 'M 400,200 Q 550,250 700,180', color: '#AEC8B9', width: 1.5, dashLength: 30, duration: 4.5, opacity: 0.3 },
  { path: 'M 300,450 Q 450,475 600,500', color: '#367e72', width: 1.5, dashLength: 28, duration: 4.2, opacity: 0.3 },
  { path: 'M 600,500 Q 725,525 850,550', color: '#AEC8B9', width: 1.5, dashLength: 32, duration: 4.8, opacity: 0.3 },
  { path: 'M 950,250 Q 975,400 1000,500', color: '#367e72', width: 1.5, dashLength: 26, duration: 4.3, opacity: 0.3 },
]);

// Advanced Floating Particles
const floatingParticles = ref([
  { x: 180, y: 100, radius: 4, gradient: 'url(#valuesOrbGrad)', opacity: 0.4, duration: 2.8, moveX: 30, moveY: -35 },
  { x: 450, y: 150, radius: 3.5, gradient: 'url(#valuesOrbGrad)', opacity: 0.38, duration: 3.2, moveX: -32, moveY: 32 },
  { x: 750, y: 120, radius: 4, gradient: 'url(#valuesOrbGrad)', opacity: 0.39, duration: 3, moveX: 35, moveY: -38 },
  { x: 350, y: 400, radius: 3.5, gradient: 'url(#valuesOrbGrad)', opacity: 0.4, duration: 3.5, moveX: -28, moveY: 31 },
  { x: 650, y: 450, radius: 4, gradient: 'url(#valuesOrbGrad)', opacity: 0.38, duration: 3.2, moveX: 33, moveY: -34 },
  { x: 900, y: 500, radius: 3.5, gradient: 'url(#valuesOrbGrad)', opacity: 0.39, duration: 3.8, moveX: -30, moveY: 36 },
  { x: 250, y: 700, radius: 4, gradient: 'url(#valuesOrbGrad)', opacity: 0.4, duration: 2.9, moveX: 31, moveY: -32 },
  { x: 550, y: 750, radius: 3.5, gradient: 'url(#valuesOrbGrad)', opacity: 0.38, duration: 3.4, moveX: -29, moveY: 33 },
]);

// Advanced Medical Crosses
const medicalCrosses = ref([
  { x: 200, y: 250, color: '#367e72', gradient: 'url(#valuesGrad1)', opacity: 0.24, duration: 12 },
  { x: 500, y: 380, color: '#AEC8B9', gradient: 'url(#valuesGrad2)', opacity: 0.26, duration: 14 },
  { x: 750, y: 480, color: '#367e72', gradient: 'url(#valuesGrad1)', opacity: 0.25, duration: 13 },
  { x: 400, y: 680, color: '#AEC8B9', gradient: 'url(#valuesGrad2)', opacity: 0.24, duration: 12.5 },
]);

// Advanced Geometric Shapes
const geometricShapes = ref([
  { x: 300, y: 100, points: '0,0 20,-12 40,0 30,20 10,20', gradient: 'url(#valuesGrad1)', color: '#367e72', opacity: 0.22, duration: 5.5, moveX: 18, moveY: -18, rotation: 20 },
  { x: 700, y: 200, points: '0,0 15,-10 30,0 22,15 8,15', gradient: 'url(#valuesGrad2)', color: '#AEC8B9', opacity: 0.24, duration: 6, moveX: -20, moveY: 20, rotation: -15 },
  { x: 500, y: 550, points: '0,0 18,-11 36,0 27,18 9,18', gradient: 'url(#valuesGrad3)', color: '#367e72', opacity: 0.23, duration: 5.8, moveX: 19, moveY: -19, rotation: 18 },
  { x: 900, y: 600, points: '0,0 16,-9 32,0 24,16 8,16', gradient: 'url(#valuesGrad1)', color: '#AEC8B9', opacity: 0.21, duration: 6.2, moveX: -17, moveY: 17, rotation: -22 },
]);

// Advanced DNA Helixes
const dnaHelixes = ref([
  {
    x: 150,
    y: 500,
    strand1: 'M 0,0 Q 15,-25 30,0 Q 45,25 60,0 Q 75,-25 90,0',
    strand2: 'M 0,0 Q 15,25 30,0 Q 45,-25 60,0 Q 75,25 90,0',
    color1: '#367e72',
    color2: '#AEC8B9',
    width: 3,
    opacity: 0.22,
    duration: 6,
    moveY: -30,
    nodes: [{x: 30, y: 0}, {x: 60, y: 0}]
  },
  {
    x: 800,
    y: 300,
    strand1: 'M 0,0 Q 15,-25 30,0 Q 45,25 60,0 Q 75,-25 90,0',
    strand2: 'M 0,0 Q 15,25 30,0 Q 45,-25 60,0 Q 75,25 90,0',
    color1: '#AEC8B9',
    color2: '#367e72',
    width: 3,
    opacity: 0.21,
    duration: 7,
    moveY: 35,
    nodes: [{x: 30, y: 0}, {x: 60, y: 0}]
  },
  {
    x: 450,
    y: 250,
    strand1: 'M 0,0 Q 15,-25 30,0 Q 45,25 60,0',
    strand2: 'M 0,0 Q 15,25 30,0 Q 45,-25 60,0',
    color1: '#367e72',
    color2: '#AEC8B9',
    width: 2.5,
    opacity: 0.2,
    duration: 5.5,
    moveY: -25,
    nodes: [{x: 30, y: 0}, {x: 60, y: 0}]
  },
]);
</script>

<style scoped>
.values-vectors {
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

.ai-health-nodes,
.health-pulse-waves,
.floating-health-icons,
.ai-connections,
.floating-particles,
.floating-crosses,
.floating-geometric-shapes,
.dna-helix-patterns {
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
    transform: translateY(-10px) translateX(6px);
  }
  50% {
    transform: translateY(-15px) translateX(0);
  }
  75% {
    transform: translateY(-10px) translateX(-6px);
  }
}

.values-vectors {
  animation: float-gentle 14s ease-in-out infinite;
}

.ai-health-nodes circle,
.health-pulse-waves path,
.health-pulse-waves circle,
.floating-health-icons path,
.floating-health-icons ellipse,
.ai-connections path,
.ai-connections circle,
.floating-particles circle,
.floating-crosses rect,
.floating-crosses circle,
.floating-geometric-shapes polygon,
.dna-helix-patterns path,
.dna-helix-patterns circle {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Enhanced visual polish */
.vector-background {
  filter: drop-shadow(0 0 25px rgba(54, 126, 114, 0.15));
}
</style>
