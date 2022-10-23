<script setup lang="ts"></script>

<template>
  <span class="label"><slot></slot></span>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.label {
  font-weight: bold;
  display: block;
  width: 80px;
  padding: 2px 10px;
  text-align: center;
  color: $color-text;
  border-radius: 20px;
  background-color: #e8e8e8;

  @include font-size(12);
  // $break4: 768;
  @include mq(u-br4) {
    padding: 2px 8px;

    @include font-size(11);
  }
}
</style>
