<script setup lang="ts">

</script>

<template>
  <div class="access">
    <div class="access__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030380878!2d139.76493611544558!3d35.68123618019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1603888975255!5m2!1sja!2sjp"
        width="100%"
        height="auto"
        frameborder=" 0"
        style="border: 0"
        allow="fullscreen"
        aria-hidden="false"
        tabindex="0"
      >
      </iframe>
    </div>
    <div class="access__link">
      <a href="https://goo.gl/maps/b5AqA853AfsPSw1Y7" target="_blank">
        Google mapで見る
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.access {
  &__map {
    margin-bottom: 5px;
    iframe {
      height: 400px;
      vertical-align: bottom;

      // $break4: 768;
      @include mq(u-br4) {
        height: 240px;
      }
    }
  }
  &__link {
    @include font-size(14);
  }
}
</style>
