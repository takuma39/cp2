<script setup lang="ts">
</script>

<template>
  <div class="c-card-wrapper c-card-wrapper--col3">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.c-card-wrapper {
  // margin-bottom: -30px;
  display: flex;
  flex-wrap: wrap;

  // $break4: 768;
  @include mq(u-br4) {
    display: block;
    // margin-bottom: 0;
  }
}
</style>
