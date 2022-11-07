<script setup lang="ts">
// import { ref, reactive } from "vue";
// import { useRoute } from "vue-router";
// import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLayout.vue";
import Contact from "@/layouts/ContactLink.vue";

import NewsJson from "@/assets/json/news";
// const route = useRoute();
// let current = ref<number>(0);
// current.value = Number(route.params.id) - 1;
// let News = reactive(NewsJson[current]);

const breadcrumbs = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "news",
    path: "/news",
  },
];
</script>

<template>
  <main>
    <!-- <SubHero en="news" ja="お知らせ" /> -->
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <p>{{ NewsJson[0] }}</p>
    <Contact />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.article-wrapper {
  @include section();
  &__inner {
    @include inner();
    max-width: 750px;
  }
}

.p-post {
  background-color: #fff;
  &__head {
    margin-bottom: 30px;

    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 20px;
    }
  }
  &__title {
    line-height: 1.5;

    @include font-size(32);
    // $break4: 768;
    @include mq(u-br4) {
      @include font-size(22);
    }
  }
  &__info {
    display: flex;
    margin-top: 10px;
  }
  &__date {
    margin-right: 10px;

    @include font-size(13);
  }
  &__body {
    margin-bottom: 40px;
    > h3 {
      position: relative;
      line-height: 1.6;
      font-weight: bold;
      color: $color-secondary;
      margin-top: 60px;
      margin-bottom: 20px;
      padding-left: 20px;

      @include font-size(24);
      // $break4: 768;
      @include mq(u-br4) {
        margin-top: 40px;

        @include font-size(18);
      }

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 6px;
        height: 100%;
        border-radius: 3px;
        background-color: $color-primary;
      }
      &:first-child {
        margin-top: 0;
      }
    }
    > h4 {
      font-weight: bold;
      margin-top: 40px;
      margin-bottom: 20px;

      @include font-size(18);
      // $break4: 768;
      @include mq(u-br4) {
        @include font-size(17);
      }
    }
    > p {
      margin-bottom: 30px;

      @include font-size(16);
      // $break4: 768;
      @include mq(u-br4) {
        @include font-size(15);
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__image {
    margin-bottom: 30px;
    img {
      width: 100%;
    }
  }
  &__sns {
    margin-bottom: 40px;
  }
  &__pager {
    &__home {
      text-align: center;
    }
  }
}

</style>
