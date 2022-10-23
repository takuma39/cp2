<script setup lang="ts">
// import { require } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  src: {
    type: String,
    required: false,
    default: "",
  },
  link: {
    type: String,
    required: false,
    default: "",
  },
  col: {
    type: String,
    required: false,
    default: "col-3",
  },
  type: {
    type: String,
    required: false,
    default: "A",
  },
});
</script>

<template>
  <div class="c-card" :data-type="props.col" v-if="props.type === 'A'">
    <div class="c-card__img-wrapper">
      <img class="c-card__img" :src="props.src" alt="" />
    </div>
    <div class="c-card__body">
      <div class="c-card__title"><slot name="title" /></div>
      <div class="c-card__text">
        <p><slot name="text" /></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.c-card {
  &__body {
    display: flex;
    flex-direction: column;
  }
  &__img-wrapper {
    margin-bottom: 15px;
  }
  &__img {
    width: 100%;
    height: auto;
  }
  &__body {
    color: $color-text;
  }
  &__title {
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 15px;
    text-align: center;

    @include font-size(18);
    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 10px;
    }
  }
  &__caption {
    text-align: center;

    @include font-size(16);
  }
}

.c-card[data-type="col-3"] {
  margin-bottom: 30px;
  width: calc(33.33333% - 60px / 3);
  margin-right: 30px;

  // $break4: 768;
  @include mq(u-br4) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  }
  &:nth-child(3n) {
    margin-right: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
