<script setup lang="ts">
import Heading from "@/components/HeadingLargeComponent.vue";
</script>

<template>
  <section class="message">
    <div class="message__heading">
      <Heading>
        <template v-slot:large>Enjoy Creation for Client</template>
        <template v-slot:small>楽しむ心が良いモノを生む</template>
      </Heading>
    </div>
    <div class="message__body">
      <p>
        心を弾ましながら<br />
        夢いっぱいのサイトを作ろう！<br />
        お客様も自分もみんなが幸せになれるように
      </p>
    </div>
    <div class="message__imgWrapper">
      <img
        src="@/assets/images/recruit/recruit01.jpg"
        alt="スタッフ３人が楽しげに仕事をしている様子"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.message {
  @include section();
  text-align: center;

  &__heading {
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 0 15px;

    // $break4: 768;
    @include mq(u-br4) {
      margin: 20px 0;
    }
  }

  &__body {
    margin-bottom: 40px;

    @include font-size(16);
    // $break4: 768;
    @include mq(u-br4) {
      @include font-size(15);
    }
  }

  &__imgWrapper img {
    -webkit-clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0% 100%);
  }
}
</style>
