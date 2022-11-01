<script setup lang="ts">
// const props = defineProps({
//   color: {
//     type: String,
//     required: false,
//     default: "",
//   },
// });

</script>

<template>
  <div class="message">
    <div class="message__heading">
      <span class="message__underline">
        <slot name="title" />
      </span>
    </div>
    <div class="message__text">
      <p>
        <slot name="text" />
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.message {
  margin-bottom: 30px;
  text-align: center;
  background-repeat: no-repeat, no-repeat;
  background-position: center center, center center;
  background-size: cover, cover;

  &__heading {
    font-weight: bold;
    line-height: 1;
    display: inline-block;
    margin-bottom: 40px;

    @include font-size(40);
    // $break4: 768;
    @include mq(u-br4) {
      line-height: 1.5;

      @include font-size(32);
    }
  }
  &__underline {
    background: linear-gradient(transparent 70%, #f5f534 0%);
  }
}
</style>
