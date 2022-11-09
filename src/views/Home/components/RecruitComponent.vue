<script setup lang="ts">
import Heading from "@/components/HeadingPrimaryComponent.vue";
import Btn from "@/components/BtnComponent.vue";
</script>

<template>
  <section class="recruit">
    <div class="recruit__inner">
      <div class="recruit__desc">
        <div class="recruit__desc-inner">
          <div class="recruit__heading">
            <Heading>
              <template v-slot:en>recruit</template>
              <template v-slot:ja>採用情報</template>
            </Heading>
          </div>
          <div class="recruit__body">
            <div class="recruit__text">
              <p>私たちと一緒に働きませんか？</p>
            </div>
          </div>
          <div class="recruit__btn">
            <Btn link="/recruit">more</Btn>
          </div>
        </div>
      </div>
      <div class="recruit__image">
        <!-- <background-image> -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.recruit {
  @include section();

  // $break4: 768;
  @include mq(u-br4) {
    padding: 0;
  }
  &__inner {
    @include inner();
    display: flex;

    // $break4: 768;
    @include mq(u-br4) {
      flex-direction: column-reverse;
    }
  }
  &__desc {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    background-color: $color-gray;
    padding: 70px 40px;
  }

  &__heading {
    margin-bottom: 30px;
    text-align: center;
  }
  &__image {
    width: 60%;
    background-image: url(/static/images/recruit/recruit.jpg);
    background-position: center center;
    background-size: cover;

    // $break4: 768;
    @include mq(u-br4) {
      width: 100%;
      height: 200px;
    }
  }
  &__body {
    margin-bottom: 30px;
  }
}
</style>
