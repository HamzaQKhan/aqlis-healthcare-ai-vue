<template>
  <video
    ref="videoElement"
    :class="className"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :playsinline="playsinline"
    :poster="poster"
    preload="auto"
    class="optimized-video"
    @error="handleVideoError"
    @loadeddata="handleVideoLoaded"
  >
    <!-- Optimized video sources (MP4/WebM) -->
    <source
      v-if="optimizedSrc"
      :src="optimizedSrc"
      :type="optimizedType || detectVideoType(optimizedSrc)"
    />
    <!-- Fallback to HLS if optimized version not available -->
    <source
      v-if="hlsSrc && !optimizedSrc"
      :src="hlsSrc"
      type="application/vnd.apple.mpegurl"
    />
  </video>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  // Optimized video URL (MP4 or WebM)
  optimizedSrc: {
    type: String,
    default: null,
  },
  // HLS fallback URL
  hlsSrc: {
    type: String,
    default: null,
  },
  // Video type (auto-detected from URL if not provided)
  optimizedType: {
    type: String,
    default: null,
  },
  // Poster image for faster initial display
  poster: {
    type: String,
    default: null,
  },
  className: {
    type: String,
    default: '',
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  muted: {
    type: Boolean,
    default: true,
  },
  playsinline: {
    type: Boolean,
    default: true,
  },
});

const videoElement = ref(null);
let hls = null;

// Detect video type from URL
const detectVideoType = (url) => {
  if (!url) return null;
  if (url.includes('.webm')) return 'video/webm';
  if (url.includes('.mp4')) return 'video/mp4';
  if (url.includes('.m3u8')) return 'application/vnd.apple.mpegurl';
  return 'video/mp4'; // Default to MP4
};

// Handle video errors
const handleVideoError = (e) => {
  console.error('Video error:', e);
  console.error('Video src:', props.optimizedSrc);
  // Try fallback to HLS
  if (props.hlsSrc && props.optimizedSrc) {
    console.log('Falling back to HLS due to error...');
    loadHLS();
  }
};

// Handle video loaded
const handleVideoLoaded = () => {
  if (props.autoplay && videoElement.value) {
    videoElement.value.play().catch((err) => {
      console.warn('Autoplay prevented:', err);
    });
  }
};

const loadVideo = async () => {
  if (!videoElement.value) return;

  // Prefer optimized video (MP4/WebM) over HLS
  if (props.optimizedSrc) {
    const videoType = props.optimizedType || detectVideoType(props.optimizedSrc);
    
    // For MP4, most browsers support it, so try loading directly
    if (videoType === 'video/mp4' || videoType === 'video/webm') {
      videoElement.value.src = props.optimizedSrc;
      videoElement.value.load();
      
      // Add error handling
      videoElement.value.addEventListener('error', (e) => {
        console.error('Video loading error:', e);
        console.error('Video src:', props.optimizedSrc);
        // Fallback to HLS if MP4 fails
        if (props.hlsSrc) {
          console.log('Falling back to HLS...');
          loadHLS();
        }
      });
      
      // Play video when loaded
      videoElement.value.addEventListener('loadeddata', () => {
        if (props.autoplay) {
          videoElement.value.play().catch((err) => {
            console.warn('Autoplay prevented:', err);
          });
        }
      });
      
      return;
    }
  }

  // Fallback to HLS if optimized version not available or not supported
  if (props.hlsSrc) {
    await loadHLS();
  }
};

const loadHLS = async () => {
  if (!videoElement.value || !props.hlsSrc) return;

  // Check if browser supports native HLS (Safari)
  if (videoElement.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoElement.value.src = props.hlsSrc;
    videoElement.value.load();
    if (props.autoplay) {
      videoElement.value.play().catch((err) => {
        console.warn('Autoplay prevented:', err);
      });
    }
    return;
  }

  // For other browsers, use hls.js
  try {
    const Hls = (await import('hls.js')).default;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });

      hls.loadSource(props.hlsSrc);
      hls.attachMedia(videoElement.value);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (props.autoplay) {
          videoElement.value?.play().catch((err) => {
            console.warn('Autoplay prevented:', err);
          });
        }
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.error('Fatal network error, trying to recover...');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.error('Fatal media error, trying to recover...');
              hls.recoverMediaError();
              break;
            default:
              console.error('Fatal error, destroying HLS instance...');
              hls.destroy();
              break;
          }
        }
      });
    } else {
      console.error('HLS is not supported in this browser');
    }
  } catch (error) {
    console.error('Error loading HLS.js:', error);
    // Fallback: try to set src directly
    if (videoElement.value) {
      videoElement.value.src = props.hlsSrc;
    }
  }
};

watch(() => [props.optimizedSrc, props.hlsSrc], () => {
  if (hls) {
    hls.destroy();
    hls = null;
  }
  loadVideo();
});

onMounted(() => {
  // Debug logging
  if (props.optimizedSrc) {
    console.log('Loading optimized video:', props.optimizedSrc);
  }
  if (props.hlsSrc) {
    console.log('HLS fallback available:', props.hlsSrc);
  }
  loadVideo();
});

onBeforeUnmount(() => {
  if (hls) {
    hls.destroy();
    hls = null;
  }
});
</script>

<style scoped>
.optimized-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Performance optimizations */
  will-change: contents;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
