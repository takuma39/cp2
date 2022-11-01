<script setup lang="ts">
import Heading from "@/components/HeadingPrimaryComponent.vue";
import Btn from "@/components/BtnComponent.vue";
</script>

<template>
  <section class="contactLink">
    <div class="l-inner">
      <div class="contactLink__heading">
        <Heading>
          <template v-slot:en>contact</template>
          <template v-slot:ja>お問い合わせ</template>
        </Heading>
      </div>
      <div class="contactLink__body">
        <div class="contactLink__text">
          <p>
            Webサイトの制作のご依頼やお見積りなど、<br class="u-sp-only" />
            お気軽にご相談ください。
          </p>
        </div>
      </div>
      <div class="contactLink__link">
        <Btn link="/contact">more</Btn>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.contactLink {
  margin-top: 40px;
  padding: 80px 0;
  text-align: center;
  background-color: $color-gray;

  // $break4: 768;
  @include mq(u-br4) {
    padding: 60px 0;
  }
  &__heading {
    margin-bottom: 30px;
  }
  &__body {
    margin-bottom: 20px;
  }
}
</style>
