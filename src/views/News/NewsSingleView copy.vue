<script setup lang="ts">
import { ref, onBeforeMount, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLayout.vue";
import Contact from "@/layouts/ContactLink.vue";
import NewsJson from "@/assets/json/news";
// import Sns from "@/components/SnsComponent.vue";

const route = useRoute();
let current = ref<number>(0);
current.value = Number(route.params.id) - 1;
let News = reactive(NewsJson);
// onBeforeMount(() => {
//   News = NewsJson[current];
// });

// const params = Number(route.params.id) - 1;
// let News = NewsJson[5];
// let PrevNews = ref<number>(0);
// let NextNews = ref<number>(0);

// //前のデータ
// if (News.id == NewsJson[0].id) {
//   PrevNews.value = 0;
// } else {
//   PrevNews.value = News.id - 2;
// }

// //次のデータ
// if (News.id == NewsJson.length) {
//   NextNews.value = 0;
// } else {
//   NextNews.value = News.id;
// }

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
    <SubHero en="news" ja="お知らせ" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <!-- <p>{{ NewsJson[current] }}</p> -->
    <p>{{ News[5] }}</p>
    <section class="article-wrapper l-section">
      <div class="article-wrapper__inner l-inner">
        <article class="article">
          <div class="p-post">
            <div class="p-post__head">
              <div class="p-post__title">
                {{ News[5].title }}
              </div>
              <div class="p-post__info">
                <time class="p-post__date">{{ News[5].date }}</time>
                <div class="c-label-category">{{ News[5].category }}</div>
              </div>
            </div>
            <div class="p-post__body">
              <div class="p-post__image">
                <img src="@/assets/images/news/news1.jpg" alt="" />
              </div>
              <p>
                {{ News[5].text1 }}
              </p>
              <h3>大見出し</h3>
              <p>
                {{ News[5].text2 }}
              </p>
              <h4>小見出し</h4>
              <p>
                {{ News[5].text3 }}
              </p>
            </div>
            <div class="p-post__sns">
              <!-- <Sns
                :url="route.fullPath"
                :title="News[5].title"
                :description="News[5].text1"
              /> -->
            </div>
            <div class="p-post__pager">
              <div class="p-post-pager">
                <div class="p-post-pager__list">
                  <div class="p-post-pager__item p-post-pager__item--prev">
                    <a href="#" class="p-post-pager__link"
                      >Web Conference様のサイトを制作いたしました</a
                    >
                  </div>
                  <div class="p-post-pager__item p-post-pager__item--next">
                    <a class="p-post-pager__link" href="#"
                      >プライバシーマーク取得のお知らせ</a
                    >
                  </div>
                </div>
              </div>
              <div class="p-post-pager__home">
                <router-link to="/news">news一覧</router-link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
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
