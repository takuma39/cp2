<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  right: {
    type: Number,
    required: false,
    default: 0,
  },
  bottom: {
    type: Number,
    required: false,
    default: 0,
  },
});

// computed
const position = computed(() => {
  return {
    "--right": props.right,
    "--bottom": props.bottom,
  };
});
</script>

<template>
  <span class="scrollDown" :style="position">SCROLL</span>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.scrollDown {
  display: inline-block;
  position: absolute;
  left: auto;
  right: calc(1px * var(--right));
  bottom: calc(1px * var(--bottom));
  color: #fff;
  padding: 10px 10px 90px;
  letter-spacing: 0.2em;
  line-height: 1;
  text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  -ms-writing-mode: tb-rl;
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
  @include font-size(12);

  // $break4: 768;
  @include mq(u-br4) {
    right: 5px;
    padding: 10px 10px 60px;
  }
}
.scrollDown::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 1px;
  height: 80px;
  background: #fff;
  content: "";
  -webkit-animation: scrollDownLine 1.5s infinite;
  animation: scrollDownLine 1.5s infinite;

  // $break4: 768;
  @include mq(u-br4) {
    height: 50px;
  }
}

@keyframes scrollDownLine {
  0% {
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  50% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  50.1% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }
  100% {
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }
}
</style>
