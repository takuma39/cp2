<script setup lang="ts">
import Message from "@/components/MessageComponent.vue";
import Heading from "@/components/HeadingSecondaryComponent.vue";
</script>

<template>
  <section class="greeting">
    <div class="greeting__inner">
      <div class="greeting__heading">
        <Heading>メッセージ</Heading>
      </div>
      <div class="greeting__message">
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

      <div class="greeting__ceo">
        <div class="media">
          <div class="media__img-wrapper">
            <img
              src="@/assets/images/company/ceo.jpg"
              class="media__img"
              alt=""
            />
          </div>
          <div class="media__body">
            <div class="media__text">
              <p>
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります<br /><br />
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります<br /><br />
                代表取締役社長 ○○○
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";


.greeting {
  @include section();
  padding: 100px 0 70px;
  background-image: url(/static/images/company/bg-circle.png), url(/static/images/company/bg-face.png);
  background-position: center -20px, center 40px;
  background-repeat: no-repeat;

  // $break4: 768;
  @include mq(u-br4) {
    padding: 60px 0 60px;
    background-image: url(/static/images/company/sp_bg-circle.png);
    background-position: center -20px;
    background-size: 375px;
  }

  &__inner {
    @include inner();
  }

  &__heading {
    margin-bottom: 30px;
    text-align: center;
  }
  &__message {
    margin-bottom: 160px;
    text-align: center;

    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 60px;
    }
  }
}

.media {
  display: flex;

  // $break4: 768;
  @include mq(u-br4) {
    display: block;
  }

  &__img-wrapper {
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
