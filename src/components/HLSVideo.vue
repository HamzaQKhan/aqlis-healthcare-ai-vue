<template>
  <video
    ref="videoElement"
    :class="className"
    :autoplay="autoplay"
    :loop="loop"
    :muted="muted"
    :playsinline="playsinline"
    class="hls-video"
  />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
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

const loadHLS = async () => {
  if (!videoElement.value) return;

  // Check if browser supports native HLS (Safari)
  if (videoElement.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoElement.value.src = props.src;
    return;
  }

  // For other browsers, use hls.js
  try {
    // Dynamically import hls.js
    const Hls = (await import('hls.js')).default;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 90,
      });

      hls.loadSource(props.src);
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
      videoElement.value.src = props.src;
    }
  }
};

watch(() => props.src, () => {
  if (hls) {
    hls.destroy();
    hls = null;
  }
  loadHLS();
});

onMounted(() => {
  loadHLS();
});

onBeforeUnmount(() => {
  if (hls) {
    hls.destroy();
    hls = null;
  }
});
</script>

<style scoped>
.hls-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

