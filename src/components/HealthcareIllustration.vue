<template>
    <div class="healthcare-illustration relative w-full max-w-md h-full min-h-[500px] flex items-center justify-center">
      <svg
        viewBox="0 0 400 500"
        class="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="healthGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.9" />
            <stop offset="50%" style="stop-color:#246f66;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#aec8b9;stop-opacity:0.7" />
          </linearGradient>
          <linearGradient id="healthGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#aec8b9;stop-opacity:0.8" />
            <stop offset="50%" style="stop-color:#367e72;stop-opacity:0.7" />
            <stop offset="100%" style="stop-color:#246f66;stop-opacity:0.6" />
          </linearGradient>
          <radialGradient id="pulseGrad" cx="50%" cy="50%">
            <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.5" />
            <stop offset="70%" style="stop-color:#246f66;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#367e72;stop-opacity:0" />
          </radialGradient>
          <radialGradient id="orbGrad" cx="50%" cy="50%">
            <stop offset="0%" style="stop-color:#367e72;stop-opacity:0.6" />
            <stop offset="100%" style="stop-color:#246f66;stop-opacity:0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.8 0"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="intenseGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.9 0"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feColorMatrix in="coloredBlur" type="matrix" values="0 0 0 0 0.212 0 0 0 0 0.494 0 0 0 0 0.447 0 0 0 0.6 0"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
  
        <!-- Background Pulse Circles -->
        <circle cx="200" cy="250" r="200" fill="url(#pulseGrad)" opacity="0.4">
          <animate attributeName="r" values="200;230;200" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="200" cy="250" r="160" fill="url(#pulseGrad)" opacity="0.5">
          <animate attributeName="r" values="160;185;160" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
        <circle cx="200" cy="250" r="120" fill="url(#pulseGrad)" opacity="0.6">
          <animate attributeName="r" values="120;140;120" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
        </circle>
  
        <!-- Main Heart (Center) -->
        <g class="main-heart" transform="translate(200, 250)">
          <!-- Outer glow -->
          <path
            d="M 0,-40 C -20,-60 -40,-50 -40,-30 C -40,-15 -20,0 0,20 C 20,0 40,-15 40,-30 C 40,-50 20,-60 0,-40 Z"
            fill="url(#healthGrad1)"
            filter="url(#intenseGlow)"
            opacity="0.4"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1.15;1.3;1.15"
              dur="2.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
          </path>
          <!-- Main heart -->
          <path
            d="M 0,-40 C -20,-60 -40,-50 -40,-30 C -40,-15 -20,0 0,20 C 20,0 40,-15 40,-30 C 40,-50 20,-60 0,-40 Z"
            fill="url(#healthGrad1)"
            filter="url(#glow)"
            opacity="0.95"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.12;1"
              dur="2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-5; 0,0; 0,3; 0,0"
              dur="3s"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </path>
          <!-- Inner highlight -->
          <ellipse cx="0" cy="-10" rx="18" ry="15" fill="url(#orbGrad)" opacity="0.7">
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.2;1"
              dur="2.2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
            <animate
              attributeName="opacity"
              values="0.7;0.4;0.7"
              dur="2.2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.5; 1"
            />
          </ellipse>
          <!-- Heart Pulse Lines -->
          <circle cx="0" cy="-20" r="4" fill="#fff" opacity="0.9" filter="url(#softGlow)">
            <animate attributeName="r" values="4;7;4" dur="1.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <!-- Additional pulse points -->
          <circle cx="-15" cy="-15" r="2.5" fill="#fff" opacity="0.7" filter="url(#softGlow)">
            <animate attributeName="r" values="2.5;4.5;2.5" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
          </circle>
          <circle cx="15" cy="-15" r="2.5" fill="#fff" opacity="0.7" filter="url(#softGlow)">
            <animate attributeName="r" values="2.5;4.5;2.5" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
          </circle>
        </g>
  
        <!-- Medical Cross (Top Left) -->
        <g class="medical-cross" transform="translate(100, 100)">
          <!-- Outer glow -->
          <g opacity="0.4" filter="url(#intenseGlow)">
            <rect x="43" y="18" width="14" height="64" fill="url(#healthGrad2)" rx="3" />
            <rect x="18" y="43" width="64" height="14" fill="url(#healthGrad2)" rx="3" />
          </g>
          <!-- Main cross -->
          <rect x="45" y="20" width="10" height="60" fill="url(#healthGrad2)" rx="2" filter="url(#glow)" opacity="0.9">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50; 360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-8; 0,0; 0,5; 0,0"
              dur="4s"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </rect>
          <rect x="20" y="45" width="60" height="10" fill="url(#healthGrad2)" rx="2" filter="url(#glow)" opacity="0.9">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 50 50; 360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-8; 0,0; 0,5; 0,0"
              dur="4s"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </rect>
          <!-- Center highlight -->
          <circle cx="50" cy="50" r="8" fill="url(#orbGrad)" opacity="0.8" filter="url(#softGlow)">
            <animate attributeName="r" values="8;11;8" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
        </g>
  
        <!-- Stethoscope (Top Right) -->
        <g class="stethoscope" transform="translate(300, 120)">
          <!-- Main stethoscope path -->
          <path
            d="M 0,0 Q 20,-10 40,0 Q 50,10 60,0 Q 70,-10 80,0 L 80,30 Q 70,40 60,30 Q 50,20 40,30 Q 30,40 20,30 Q 10,20 0,30 Z"
            fill="none"
            stroke="url(#healthGrad1)"
            stroke-width="5"
            stroke-linecap="round"
            filter="url(#glow)"
            opacity="0.9"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 8,-8; 0,0; -5,5; 0,0"
              dur="3.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 40 15; 3 40 15; 0 40 15; -3 40 15; 0 40 15"
              dur="4s"
              repeatCount="indefinite"
              additive="sum"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </path>
          <!-- Stethoscope Earpieces -->
          <circle cx="20" cy="30" r="9" fill="url(#healthGrad2)" opacity="0.8" filter="url(#softGlow)">
            <animate attributeName="r" values="9;12;9" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <circle cx="60" cy="30" r="9" fill="url(#healthGrad2)" opacity="0.8" filter="url(#softGlow)">
            <animate attributeName="r" values="9;12;9" dur="2s" repeatCount="indefinite" begin="0.3s" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2s" repeatCount="indefinite" begin="0.3s" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <!-- Inner highlights -->
          <circle cx="20" cy="30" r="4" fill="#fff" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="30" r="4" fill="#fff" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" begin="0.3s" />
          </circle>
        </g>
  
        <!-- ECG Pulse Wave (Bottom) -->
        <g class="ecg-wave" transform="translate(50, 400)">
          <!-- Background glow -->
          <path
            d="M 0,30 L 30,30 L 35,10 L 40,30 L 50,30 L 55,50 L 60,30 L 100,30 L 105,10 L 110,30 L 150,30 L 155,50 L 160,30 L 200,30 L 205,10 L 210,30 L 250,30"
            fill="none"
            stroke="url(#healthGrad1)"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            filter="url(#intenseGlow)"
            opacity="0.3"
          />
          <!-- Main ECG line -->
          <path
            d="M 0,30 L 30,30 L 35,10 L 40,30 L 50,30 L 55,50 L 60,30 L 100,30 L 105,10 L 110,30 L 150,30 L 155,50 L 160,30 L 200,30 L 205,10 L 210,30 L 250,30"
            fill="none"
            stroke="url(#healthGrad1)"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            filter="url(#glow)"
            opacity="0.95"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,300; 300,0"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 15,0; 0,0; -10,0; 0,0"
              dur="3s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
          </path>
          <!-- Pulse Dots -->
          <circle cx="35" cy="10" r="5" fill="#fff" opacity="0.95" filter="url(#softGlow)">
            <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            <animate attributeName="opacity" values="0.95;0.4;0.95" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <circle cx="105" cy="10" r="5" fill="#fff" opacity="0.95" filter="url(#softGlow)">
            <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" begin="0.3s" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            <animate attributeName="opacity" values="0.95;0.4;0.95" dur="1s" repeatCount="indefinite" begin="0.3s" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <circle cx="205" cy="10" r="5" fill="#fff" opacity="0.95" filter="url(#softGlow)">
            <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite" begin="0.6s" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
            <animate attributeName="opacity" values="0.95;0.4;0.95" dur="1s" repeatCount="indefinite" begin="0.6s" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <!-- Additional pulse indicators -->
          <circle cx="55" cy="50" r="3" fill="#fff" opacity="0.8" filter="url(#softGlow)">
            <animate attributeName="r" values="3;6;3" dur="1.2s" repeatCount="indefinite" begin="0.15s" />
          </circle>
          <circle cx="155" cy="50" r="3" fill="#fff" opacity="0.8" filter="url(#softGlow)">
            <animate attributeName="r" values="3;6;3" dur="1.2s" repeatCount="indefinite" begin="0.45s" />
          </circle>
        </g>
  
        <!-- Floating Small Hearts -->
        <g class="floating-hearts">
          <g transform="translate(80, 180)">
            <path
              d="M 0,0 C 0,0 -10,-10 -10,-20 C -10,-30 -5,-35 0,-35 C 5,-35 10,-30 10,-20 C 10,-10 0,0 0,0 Z"
              fill="#aec8b9"
              opacity="0.7"
              filter="url(#softGlow)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 12,-18; 0,0; -8,10; 0,0"
                dur="4.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.15;1"
                dur="3s"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.5; 1"
              />
              <animate
                attributeName="opacity"
                values="0.7;0.3;0.7"
                dur="4.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.5; 1"
              />
            </path>
          </g>
          <g transform="translate(320, 320)">
            <path
              d="M 0,0 C 0,0 -10,-10 -10,-20 C -10,-30 -5,-35 0,-35 C 5,-35 10,-30 10,-20 C 10,-10 0,0 0,0 Z"
              fill="#367e72"
              opacity="0.65"
              filter="url(#softGlow)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -10,15; 0,0; 6,-8; 0,0"
                dur="5.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.2;1"
                dur="3.5s"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.5; 1"
              />
              <animate
                attributeName="opacity"
                values="0.65;0.25;0.65"
                dur="5.5s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.5; 1"
              />
            </path>
          </g>
          <!-- Additional floating heart -->
          <g transform="translate(150, 350)">
            <path
              d="M 0,0 C 0,0 -8,-8 -8,-16 C -8,-24 -4,-28 0,-28 C 4,-28 8,-24 8,-16 C 8,-8 0,0 0,0 Z"
              fill="#246f66"
              opacity="0.6"
              filter="url(#softGlow)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 15,-12; 0,0; -10,8; 0,0"
                dur="4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animate
                attributeName="opacity"
                values="0.6;0.2;0.6"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
  
        <!-- Health Data Particles -->
        <g class="data-particles">
          <circle cx="150" cy="200" r="4" fill="#367e72" opacity="0.8" filter="url(#softGlow)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 25,-25; 0,0; -15,15; 0,0"
              dur="6s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <circle cx="250" cy="300" r="3.5" fill="#aec8b9" opacity="0.75" filter="url(#softGlow)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -18,18; 0,0; 12,-12; 0,0"
              dur="7s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate attributeName="r" values="3.5;5.5;3.5" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.75;0.15;0.75" dur="7s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <circle cx="120" cy="350" r="3" fill="#246f66" opacity="0.7" filter="url(#softGlow)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 30,-12; 0,0; -18,8; 0,0"
              dur="5.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.15;0.7" dur="5.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" keyTimes="0; 0.5; 1" />
          </circle>
          <!-- Additional particles -->
          <circle cx="350" cy="250" r="3" fill="#367e72" opacity="0.65" filter="url(#softGlow)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -20,-15; 0,0; 12,10; 0,0"
              dur="5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate attributeName="opacity" values="0.65;0.2;0.65" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="280" r="2.5" fill="#aec8b9" opacity="0.6" filter="url(#softGlow)">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 18,20; 0,0; -10,-12; 0,0"
              dur="6.5s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
            />
            <animate attributeName="opacity" values="0.6;0.15;0.6" dur="6.5s" repeatCount="indefinite" />
          </circle>
        </g>
  
        <!-- Connection Lines -->
        <g class="connection-lines" opacity="0.4">
          <line x1="100" y1="100" x2="200" y2="210" stroke="#367e72" stroke-width="2" stroke-dasharray="4,4" filter="url(#softGlow)">
            <animate
              attributeName="stroke-dashoffset"
              values="0;16;0"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.2;0.4"
              dur="3s"
              repeatCount="indefinite"
            />
          </line>
          <line x1="300" y1="120" x2="200" y2="230" stroke="#aec8b9" stroke-width="2" stroke-dasharray="4,4" filter="url(#softGlow)">
            <animate
              attributeName="stroke-dashoffset"
              values="0;16;0"
              dur="3.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.2;0.4"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </line>
          <line x1="200" y1="250" x2="150" y2="400" stroke="#246f66" stroke-width="2" stroke-dasharray="4,4" filter="url(#softGlow)">
            <animate
              attributeName="stroke-dashoffset"
              values="0;16;0"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0.2;0.4"
              dur="4s"
              repeatCount="indefinite"
            />
          </line>
          <!-- Additional connection lines -->
          <line x1="200" y1="250" x2="300" y2="120" stroke="#367e72" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.3" filter="url(#softGlow)">
            <animate
              attributeName="stroke-dashoffset"
              values="0;12;0"
              dur="3.8s"
              repeatCount="indefinite"
            />
          </line>
          <line x1="200" y1="250" x2="100" y2="100" stroke="#aec8b9" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.3" filter="url(#softGlow)">
            <animate
              attributeName="stroke-dashoffset"
              values="0;12;0"
              dur="4.2s"
              repeatCount="indefinite"
            />
          </line>
        </g>
  
        <!-- Pill Capsules -->
        <g class="pill-capsules">
          <g transform="translate(70, 250)">
            <ellipse cx="0" cy="0" rx="25" ry="18" fill="url(#healthGrad2)" opacity="0.7" filter="url(#softGlow)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 15,-10; 0,0; -8,6; 0,0"
                dur="5s"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 0 0; 15 0 0; 0 0 0; -15 0 0; 0 0 0"
                dur="6s"
                repeatCount="indefinite"
                additive="sum"
              />
              <animate attributeName="opacity" values="0.7;0.4;0.7" dur="5s" repeatCount="indefinite" />
            </ellipse>
            <line x1="-20" y1="0" x2="20" y2="0" stroke="#246f66" stroke-width="2" opacity="0.8" stroke-linecap="round" />
          </g>
          <g transform="translate(330, 350)">
            <ellipse cx="0" cy="0" rx="22" ry="16" fill="url(#healthGrad1)" opacity="0.65" filter="url(#softGlow)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -12,12; 0,0; 8,-6; 0,0"
                dur="5.5s"
                repeatCount="indefinite"
                additive="sum"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1; 0.4 0 0.6 1"
                keyTimes="0; 0.25; 0.5; 0.75; 1"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 0 0; -12 0 0; 0 0 0; 12 0 0; 0 0 0"
                dur="6.5s"
                repeatCount="indefinite"
                additive="sum"
              />
              <animate attributeName="opacity" values="0.65;0.35;0.65" dur="5.5s" repeatCount="indefinite" />
            </ellipse>
            <line x1="-18" y1="0" x2="18" y2="0" stroke="#367e72" stroke-width="2" opacity="0.8" stroke-linecap="round" />
          </g>
        </g>
      </svg>
    </div>
  </template>
  
  <script setup>
  // Component for healthcare illustration
  </script>
  
  <style scoped>
  .healthcare-illustration {
    position: relative;
    overflow: visible;
  }
  
  .healthcare-illustration svg {
    filter: drop-shadow(0 10px 40px rgba(54, 126, 114, 0.3));
    will-change: transform;
    transform: translateZ(0);
  }
  
  .main-heart path,
  .medical-cross rect,
  .stethoscope path,
  .ecg-wave path,
  .floating-hearts path,
  .data-particles circle,
  .pill-capsules ellipse {
    will-change: transform, opacity;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  
  @keyframes gentle-pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  .healthcare-illustration {
    animation: gentle-pulse 8s ease-in-out infinite;
  }
  </style>
  
  