<script setup lang="ts">
import Heading from "@/components/HeadingPrimaryComponent.vue";
import Btn from "@/components/BtnComponent.vue";
import Swiper from '@/components/SwiperComponent.vue';
</script>

<template>
  <section class="works l-section">
    <div class="works__inner l-inner">
      <div class="works__img-wrapper">
        <Swiper />
      </div>
      <div class="works__desc">
        <div class="works__heading">
          <Heading>
            <template v-slot:en>work</template>
            <template v-slot:ja>制作実績</template>
          </Heading>
        </div>
        <div class="works__body">
          <div class="works__text">
            <p>
              様々なジャンルのWebサイト制作が可能です。<br />
              ご購入やお申込み数の増加などを実現します！
            </p>
          </div>
        </div>
        <div class="works__link">
          <Btn link="/work">more</Btn>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.works {
  @include section();
  padding: 60px 0 40px 0;
  // $break4: 768;
  @include mq(u-br4) {
    padding: 0;
  }

  &__inner {
    @include inner();
    position: relative;
    display: flex;
    align-items: center;
    padding: 60px 20px;
    max-width: 1300px;

    // $break4: 768;
    @include mq(u-br4) {
      display: block;
      padding: 30px 20px 60px 20px;
    }
    &::after {
      position: absolute;
      top: 50%;
      right: 0;
      z-index: -1;
      display: block;
      width: 60%;
      height: 100%;
      content: "";
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      background-color: $color-gray;

      // $break4: 768;
      @include mq(u-br4) {
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 68%;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }
  }
  &__img-wrapper {
    width: 59.5238%;
    margin-right: 30px;

    // $break4: 768;
    @include mq(u-br4) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  &__desc {
    flex: 1;
    text-align: center;
  }
  &__heading {
    margin-bottom: 30px;
  }
  &__body {
    margin-bottom: 30px;
  }
}
</style>
