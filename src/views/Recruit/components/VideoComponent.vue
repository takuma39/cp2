<script setup lang="ts">
import Heading from "@/components/HeadingSecondaryComponent.vue";
</script>
<template>
  <section class="video">
    <div class="video__inner">
      <div class="video__heading">
        <Heading>社内ムービー</Heading>
      </div>
      <div class="video__frame">
        <iframe
          src="https://www.youtube.com/embed/VwbnZHvQ3C"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.video {
  @include section();

  &__inner {
    @include inner();
  }

  &__heading {
    margin-bottom: 40px;
    text-align: center;

    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 30px;
    }
  }

  &__frame {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
