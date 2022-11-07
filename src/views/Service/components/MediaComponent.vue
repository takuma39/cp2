<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="media">
    <div class="media__imgWrapper">
      <img :src="props.image" class="media__img" alt="" />
    </div>
    <div class="media__body">
      <h3
        class="media__title"
        v-html="props.title.replace(/\n/g, '<br/>')"
      ></h3>
      <div class="media__text">
        <p v-html="props.text.replace(/\n/g, '<br/>')"></p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.media {
  display: flex;

  // $break4: 768;
  @include mq(u-br4) {
    display: block;
  }
  &__imgWrapper {
    flex: 0 1 40%;
    margin-right: 50px;

    // $break4: 768;
    @include mq(u-br4) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  &__img {
    width: 100%;
    height: auto;
  }
  &__body {
    flex: 1;
  }
  &__title {
    margin-bottom: 20px;
    font-weight: bold;

    @include font-size(24);
    // $break4: 768;
    @include mq(u-br4) {
      line-height: 1.2;
      margin-bottom: 15px;
      text-align: center;

      @include font-size(18);
    }
  }
}
</style>
