<script setup lang="ts">
import Heading from "@/components/HeadingPrimaryComponent.vue";
import NewsList from "@/components/NewsListComponent.vue";
// import axios from "axios";
</script>

<template>
  <section class="news">
    <div class="news__inner">
      <div class="news__heading">
        <Heading>
          <template v-slot:en>news</template>
          <template v-slot:ja>お知らせ</template>
        </Heading>
      </div>
      <div class="news__body">
        <NewsList :count="4" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.news {
  @include section();
  &__inner {
    @include inner();
    display: flex;
    max-width: 950px;

    // $break4: 768;
    @include mq(u-br4) {
      display: block;
    }
  }
  &__heading {
    margin-right: 50px;

    // $break4: 768;
    @include mq(u-br4) {
      margin-right: 0;
      margin-bottom: 30px;
      text-align: center;
    }
  }
  &__body {
    flex: 1;
  }
}
</style>
