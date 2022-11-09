<script setup lang="ts">
import Heading from "@/components/HeadingPrimaryComponent.vue";
import Btn from "@/components/BtnComponent.vue";
import Message from "@/components/MessageComponent.vue";
</script>

<template>
  <section class="company">
    <div class="company__inner">
      <div class="company__heading">
        <Heading>
          <template v-slot:en>company</template>
          <template v-slot:ja>会社概要</template>
        </Heading>
      </div>
      <div class="company__body">
        <Message>
          <template v-slot:title>
            サイトのゴール = <br class="u-sp-only" />
            夢を叶えること
          </template>
          <template v-slot:text>
            お客様の夢を叶えること。<br />
            それがWebサイトのゴールであり、<br class="u-sp-only" />
            私たちが目指すことです。<br />
            だからこそちゃんと成果を出すサイトを<br class="u-sp-only" />
            全力でお作りします。<br />
            お客様の笑顔を見たい。<br />
            夢を実現する手助けをさせてください。
          </template>
        </Message>
      </div>
      <div class="company__link">
        <Btn link="/company">more</Btn>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.company {
  @include section();
  text-align: center;
  padding: 0;

  &__inner {
    @include inner();
    padding: 100px 0;
    max-width: 1300px;
    background-image: url(/static/images/company/bg-circle.png), url(/static/images/company/bg-face.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    // $break4: 768;
    @include mq(u-br4) {
      padding: 60px 0;
      background-image: url(/static/images/company/sp_bg-circle.png);
      background-position: center center;
      background-size: 375px;
    }
  }
  &__heading {
    margin-bottom: 30px;
  }
  &__body {
    margin-bottom: 30px;
  }
}
</style>
