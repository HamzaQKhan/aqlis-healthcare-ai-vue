<template>
  <div class="healthcare-illustration relative w-full max-w-md h-full min-h-[500px] flex items-center justify-center">
    <svg
      viewBox="0 0 400 500"
      class="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <!-- Enhanced Gradients with Theme Colors -->
        <linearGradient id="healthGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.95" />
          <stop offset="50%" style="stop-color:#246f66;stop-opacity:0.85" />
          <stop offset="100%" style="stop-color:#AEC8B9;stop-opacity:0.75" />
        </linearGradient>
        <linearGradient id="healthGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#AEC8B9;stop-opacity:0.9" />
          <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#246f66;stop-opacity:0.7" />
        </linearGradient>
        <radialGradient id="pulseGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.5" />
          <stop offset="70%" style="stop-color:#AEC8B9;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0" />
        </radialGradient>
        <radialGradient id="orbGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
          <stop offset="50%" style="stop-color:#AEC8B9;stop-opacity:0.7" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0.4" />
        </radialGradient>
        <radialGradient id="beadGrad" cx="50%" cy="50%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.95" />
          <stop offset="40%" style="stop-color:#AEC8B9;stop-opacity:0.85" />
          <stop offset="100%" style="stop-color:#367e72;stop-opacity:0.6" />
        </radialGradient>
        
        <!-- Enhanced Filters - Reduced Blur for Clarity -->
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.6 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="intenseGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.7 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.5 0"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Background Pulse Circle - Subtle -->
      <circle cx="200" cy="250" r="180" fill="url(#pulseGrad)" opacity="0.25" class="pulse-circle-1">
        <animate attributeName="r" values="180;210;180" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        <animate attributeName="opacity" values="0.25;0.08;0.25" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
      </circle>

      <!-- Elegant Infinity Symbol (∞) - Timeless Style with Flowing Beads -->
      <g class="infinity-symbol" transform="translate(200, 250)">
        <!-- Left Loop - Smooth Curved Path -->
        <path
          d="M -90,0 C -130,-70 -90,-90 -50,-70 C -30,-60 -20,-40 -20,-20 C -20,0 -20,20 -20,40 C -20,60 -30,70 -50,70 C -90,90 -130,70 -90,0 Z"
          fill="none"
          stroke="url(#healthGrad1)"
          stroke-width="4"
          opacity="0.95"
          filter="url(#glow)"
          class="infinity-stroke-left"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,600; 300,300; 600,0; 300,300; 0,600"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
          <animate
            attributeName="opacity"
            values="0.7;0.5;0.7;0.5;0.7"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
        </path>

        <!-- Right Loop - Smooth Curved Path -->
        <path
          d="M 90,0 C 130,-70 90,-90 50,-70 C 30,-60 20,-40 20,-20 C 20,0 20,20 20,40 C 20,60 30,70 50,70 C 90,90 130,70 90,0 Z"
          fill="none"
          stroke="url(#healthGrad2)"
          stroke-width="4"
          opacity="0.95"
          filter="url(#glow)"
          class="infinity-stroke-right"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0,600; 300,300; 600,0; 300,300; 0,600"
            dur="10s"
            repeatCount="indefinite"
            begin="0.5s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
          <animate
            attributeName="opacity"
            values="0.7;0.5;0.7;0.5;0.7"
            dur="8s"
            repeatCount="indefinite"
            begin="0.5s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
        </path>

        <!-- Flowing Beads on Left Loop -->
        <circle r="11" fill="url(#beadGrad)" opacity="1" filter="url(#softGlow)" class="bead-left-1">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-90,0; -110,-35; -90,-70; -50,-70; -30,-50; -20,-20; -20,0; -20,20; -20,50; -30,70; -50,70; -90,70; -110,35; -90,0"
            dur="12s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="11;13;11" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle r="10" fill="url(#beadGrad)" opacity="0.98" filter="url(#softGlow)" class="bead-left-2">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-90,0; -110,-35; -90,-70; -50,-70; -30,-50; -20,-20; -20,0; -20,20; -20,50; -30,70; -50,70; -90,70; -110,35; -90,0"
            dur="12s"
            repeatCount="indefinite"
            begin="0.8s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="10;12;10" dur="2.7s" repeatCount="indefinite" begin="0.8s" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle r="9.5" fill="url(#beadGrad)" opacity="0.96" filter="url(#softGlow)" class="bead-left-3">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-90,0; -110,-35; -90,-70; -50,-70; -30,-50; -20,-20; -20,0; -20,20; -20,50; -30,70; -50,70; -90,70; -110,35; -90,0"
            dur="12s"
            repeatCount="indefinite"
            begin="1.6s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="9.5;11.5;9.5" dur="2.9s" repeatCount="indefinite" begin="1.6s" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle r="9" fill="url(#beadGrad)" opacity="0.94" filter="url(#softGlow)" class="bead-left-4">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="-90,0; -110,-35; -90,-70; -50,-70; -30,-50; -20,-20; -20,0; -20,20; -20,50; -30,70; -50,70; -90,70; -110,35; -90,0"
            dur="12s"
            repeatCount="indefinite"
            begin="2.4s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="9;11;9" dur="3s" repeatCount="indefinite" begin="2.4s" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>

        <!-- Flowing Beads on Right Loop -->
        <circle r="11" fill="url(#beadGrad)" opacity="1" filter="url(#softGlow)" class="bead-right-1">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="90,0; 110,-35; 90,-70; 50,-70; 30,-50; 20,-20; 20,0; 20,20; 20,50; 30,70; 50,70; 90,70; 110,35; 90,0"
            dur="12s"
            repeatCount="indefinite"
            begin="0.4s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="10;12;10" dur="2.5s" repeatCount="indefinite" begin="0.4s" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle r="10" fill="url(#beadGrad)" opacity="0.98" filter="url(#softGlow)" class="bead-right-2">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="90,0; 110,-35; 90,-70; 50,-70; 30,-50; 20,-20; 20,0; 20,20; 20,50; 30,70; 50,70; 90,70; 110,35; 90,0"
            dur="12s"
            repeatCount="indefinite"
            begin="1.2s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="10;12;10" dur="2.7s" repeatCount="indefinite" begin="1.2s" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle r="9.5" fill="url(#beadGrad)" opacity="0.96" filter="url(#softGlow)" class="bead-right-3">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="90,0; 110,-35; 90,-70; 50,-70; 30,-50; 20,-20; 20,0; 20,20; 20,50; 30,70; 50,70; 90,70; 110,35; 90,0"
            dur="12s"
            repeatCount="indefinite"
            begin="2s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="9.5;11.5;9.5" dur="2.9s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle r="9" fill="url(#beadGrad)" opacity="0.94" filter="url(#softGlow)" class="bead-right-4">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="90,0; 110,-35; 90,-70; 50,-70; 30,-50; 20,-20; 20,0; 20,20; 20,50; 30,70; 50,70; 90,70; 110,35; 90,0"
            dur="12s"
            repeatCount="indefinite"
            begin="2.8s"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.077; 0.154; 0.231; 0.308; 0.385; 0.462; 0.539; 0.616; 0.693; 0.77; 0.847; 0.924; 1"
          />
          <animate attributeName="r" values="9;11;9" dur="3s" repeatCount="indefinite" begin="2.8s" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>

        <!-- Center Connection Point with Elegant Pulse -->
        <circle cx="0" cy="0" r="18" fill="url(#orbGrad)" opacity="0.95" filter="url(#intenseGlow)" class="center-pulse">
          <animate attributeName="r" values="18;26;18" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
          <animate attributeName="opacity" values="0.95;0.7;0.95" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="0" cy="0" r="9" fill="#ffffff" opacity="1" class="center-core">
          <animate attributeName="opacity" values="1;0.75;1" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
          <animate attributeName="r" values="9;11;9" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
      </g>

      <!-- Additional Floating Healthcare Elements -->
      <g class="floating-elements">
        <!-- Small floating hearts -->
        <g transform="translate(100, 150)" class="float-heart-1">
          <path
            d="M 0,0 C 0,0 -6,-6 -6,-12 C -6,-18 -3,-21 0,-21 C 3,-21 6,-18 6,-12 C 6,-6 0,0 0,0 Z"
            fill="#AEC8B9"
            opacity="0.6"
            filter="url(#softGlow)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 10,-12; 0,0; -6,8; 0,0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.3;0.6"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.5; 1"
            />
          </path>
        </g>
        <g transform="translate(300, 350)" class="float-heart-2">
          <path
            d="M 0,0 C 0,0 -6,-6 -6,-12 C -6,-18 -3,-21 0,-21 C 3,-21 6,-18 6,-12 C 6,-6 0,0 0,0 Z"
            fill="#367e72"
            opacity="0.55"
            filter="url(#softGlow)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -8,10; 0,0; 5,-6; 0,0"
              dur="6s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate
              attributeName="opacity"
              values="0.55;0.25;0.55"
              dur="6s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              keyTimes="0; 0.5; 1"
            />
          </path>
        </g>

        <!-- Floating particles -->
        <circle cx="150" cy="200" r="4" fill="#367e72" opacity="0.7" filter="url(#softGlow)" class="particle-1">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 20,-20; 0,0; -12,12; 0,0"
            dur="7s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="250" cy="300" r="3.5" fill="#AEC8B9" opacity="0.65" filter="url(#softGlow)" class="particle-2">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -15,15; 0,0; 10,-10; 0,0"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          />
          <animate attributeName="opacity" values="0.65;0.2;0.65" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1" keyTimes="0; 0.5; 1" />
        </circle>
      </g>
    </svg>
  </div>
</template>

<script setup>
// Component for healthcare illustration with animated infinity symbol
</script>

<style scoped>
.healthcare-illustration {
  position: relative;
  overflow: visible;
}

.healthcare-illustration svg {
  filter: drop-shadow(0 8px 25px rgba(54, 126, 114, 0.25));
  will-change: transform;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  shape-rendering: geometricPrecision;
}

/* Timeless-style smooth animations */
.infinity-symbol path,
.infinity-symbol circle,
.floating-elements path,
.floating-elements circle {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  transition: opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Elegant container pulse - Timeless style */
@keyframes timeless-pulse {
  0%, 100% {
    transform: scale(1) translateZ(0);
  }
  50% {
    transform: scale(1.02) translateZ(0);
  }
}

.healthcare-illustration {
  animation: timeless-pulse 12s ease-in-out infinite;
}

/* Smooth fade-in for elements */
.pulse-circle-1,
.infinity-stroke-left,
.infinity-stroke-right,
.center-pulse,
.center-core,
.float-heart-1,
.float-heart-2,
.particle-1,
.particle-2 {
  animation: fade-in-elegant 2s ease-out forwards;
  opacity: 0;
}

@keyframes fade-in-elegant {
  from {
    opacity: 0;
    transform: translateY(15px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Staggered animation delays for Timeless effect */
.pulse-circle-1 { animation-delay: 0s; }
.infinity-stroke-left { animation-delay: 0.3s; }
.infinity-stroke-right { animation-delay: 0.5s; }
.center-pulse { animation-delay: 0.7s; }
.center-core { animation-delay: 0.9s; }
.float-heart-1 { animation-delay: 1s; }
.float-heart-2 { animation-delay: 1.2s; }
.particle-1 { animation-delay: 1.4s; }
.particle-2 { animation-delay: 1.6s; }
</style>
