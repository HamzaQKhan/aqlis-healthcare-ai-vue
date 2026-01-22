<template>
  <canvas ref="canvasRef" class="shader-background"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const canvasRef = ref(null);

let gl = null;
let shaderProgram = null;
let positionBuffer = null;
let programInfo = null;
let animationFrameId = null;
let startTime = null;

// Vertex shader program
const vsSource = `
  attribute vec4 aVertexPosition;
  void main() {
    gl_Position = aVertexPosition;
  }
`;

// Fragment shader program
const fsSource = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  
  const float overallSpeed = 0.2;
  const float gridSmoothWidth = 0.015;
  const float axisWidth = 0.05;
  const float majorLineWidth = 0.025;
  const float minorLineWidth = 0.0125;
  const float majorLineFrequency = 5.0;
  const float minorLineFrequency = 1.0;
  const vec4 gridColor = vec4(0.5);
  const float scale = 5.0;
  // Brand colors: 246F66, AEC8B9, 383838, 367e72
  const vec4 lineColor = vec4(0.212, 0.494, 0.447, 1.0); // 367e72 (insight-teal)
  const float minLineWidth = 0.01;
  const float maxLineWidth = 0.2;
  const float lineSpeed = 1.0 * overallSpeed;
  const float lineAmplitude = 1.0;
  const float lineFrequency = 0.2;
  const float warpSpeed = 0.2 * overallSpeed;
  const float warpFrequency = 0.5;
  const float warpAmplitude = 1.0;
  const float offsetFrequency = 0.5;
  const float offsetSpeed = 1.33 * overallSpeed;
  const float minOffsetSpread = 0.6;
  const float maxOffsetSpread = 2.0;
  const int linesPerGroup = 16;
  
  #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
  #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
  #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
  #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))
  
  float drawGridLines(float axis) {
    return drawCrispLine(0.0, axisWidth, axis)
          + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
          + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
  }
  
  float drawGrid(vec2 space) {
    return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
  }
  
  float random(float t) {
    return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;   
  }
  
  float getPlasmaY(float x, float horizontalFade, float offset) {
    return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
  }
  
  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec4 fragColor;
    
    vec2 uv = fragCoord.xy / iResolution.xy;
    vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;
    
    float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
    float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);
  
    // Wind/turbulence effect
    space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
    space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;
    
    vec4 lines = vec4(0.0);
    // Brand colors: 246F66 (ethical-teal), AEC8B9 (compassion-mint), 383838 (humane-grey), 367e72 (insight-teal)
    vec4 bgColor1 = vec4(0.141, 0.435, 0.4, 1.0); // 246F66 (ethical-teal) - darker
    vec4 bgColor2 = vec4(0.220, 0.220, 0.220, 1.0); // 383838 (humane-grey)
    
    // Brand color palette
    vec3 ethicalTeal = vec3(0.141, 0.435, 0.4); // 246F66
    vec3 compassionMint = vec3(0.682, 0.784, 0.725); // AEC8B9
    vec3 humaneGrey = vec3(0.220, 0.220, 0.220); // 383838
    vec3 insightTeal = vec3(0.212, 0.494, 0.447); // 367e72
    
    for(int l = 0; l < linesPerGroup; l++) {
      float normalizedLineIndex = float(l) / float(linesPerGroup);
      float offsetTime = iTime * offsetSpeed;
      float offsetPosition = float(l) + space.x * offsetFrequency;
      float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
      float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
      float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
      float linePosition = getPlasmaY(space.x, horizontalFade, offset);
      float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);
      
      float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
      vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
      float circle = drawCircle(circlePosition, 0.01, space) * 4.0;
      
      // Mix brand colors for lines based on position and time
      vec3 lineColorMix = mix(insightTeal, ethicalTeal, normalizedLineIndex * 0.5 + rand * 0.3);
      lineColorMix = mix(lineColorMix, compassionMint, sin(offsetTime + normalizedLineIndex) * 0.2 + 0.2);
      
      line = line + circle;
      lines += line * vec4(lineColorMix, 1.0) * rand;
    }
    
    fragColor = mix(bgColor1, bgColor2, uv.x);
    fragColor *= verticalFade;
    fragColor.a = 1.0;
    fragColor += lines;
    
    gl_FragColor = fragColor;
  }
`;

// Initialize shaders
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

// Resize canvas to match window size
function resizeCanvas() {
  if (!canvasRef.value) return;
  
  const canvas = canvasRef.value;
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  
  if (gl) {
    gl.viewport(0, 0, canvas.width, canvas.height);
    // Update resolution uniform if program is already initialized
    if (programInfo && shaderProgram) {
      gl.useProgram(shaderProgram);
      gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
    }
  }
}

// Animation loop
function render() {
  if (!gl || !shaderProgram || !programInfo) return;

  const currentTime = (Date.now() - startTime) / 1000;

  // Clear the canvas
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Use the shader program
  gl.useProgram(programInfo.program);

  // Set uniforms
  const canvas = canvasRef.value;
  gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
  gl.uniform1f(programInfo.uniformLocations.time, currentTime);

  // Set vertex attributes
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(
    programInfo.attribLocations.vertexPosition,
    2,
    gl.FLOAT,
    false,
    0,
    0
  );
  gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

  // Draw the quad
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  animationFrameId = requestAnimationFrame(render);
}

function init() {
  if (!canvasRef.value) {
    console.error('Canvas ref not available');
    return;
  }

  const canvas = canvasRef.value;
  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  if (!gl) {
    console.error('WebGL not supported in your browser');
    // Try to show a fallback background
    canvas.style.backgroundColor = '#1a0a2e';
    return;
  }

  console.log('WebGL initialized successfully');

  // Create shader program
  shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  if (!shaderProgram) {
    console.error('Failed to create shader program');
    return;
  }
  
  console.log('Shader program created successfully');

  // Setup geometry (a quad that fills the screen)
  positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [
    -1.0, -1.0,
     1.0, -1.0,
    -1.0,  1.0,
     1.0,  1.0,
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Setup attributes and uniforms
  programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    },
    uniformLocations: {
      resolution: gl.getUniformLocation(shaderProgram, 'iResolution'),
      time: gl.getUniformLocation(shaderProgram, 'iTime'),
    },
  };

  // Resize canvas
  resizeCanvas();

  // Start animation
  startTime = Date.now();
  render();
}

onMounted(async () => {
  // Wait for DOM to be fully rendered
  await nextTick();
  // Small delay to ensure canvas is ready
  setTimeout(() => {
    init();
  }, 100);
  window.addEventListener('resize', resizeCanvas);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCanvas);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (gl && positionBuffer) {
    gl.deleteBuffer(positionBuffer);
  }
  if (gl && shaderProgram) {
    gl.deleteProgram(shaderProgram);
  }
  gl = null;
  shaderProgram = null;
  positionBuffer = null;
  programInfo = null;
});
</script>

<style scoped>
.shader-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  display: block;
  pointer-events: none;
  background: transparent;
}
</style>
