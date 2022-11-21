<script setup lang="ts">
import { ref, onBeforeMount, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLayout.vue";
import NewsJson from "@/assets/json/news.json";
import Sns from "@/components/SnsComponent.vue";

//型
type NewsObject = {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  text1: string;
  text2: string;
  text3: string;
};

const route = useRoute();
let current = ref<number>(0);
current.value = Number(route.params.id) - 1;
// const newsLength = Number(NewsJson.length);
const News = reactive<NewsObject>(NewsJson[current.value]);

// let prevNews = reactive(News);
// if (current.value - 1 > 0) {
//   prevNews = NewsJson[current.value - 1];
// }

// let nextNews = reactive(News);
// if (current.value + 1 < newsLength) {
//   nextNews = NewsJson[current.value + 1];
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
  {
    name: News.title,
  },
];
</script>

<template>
  <main>
    <SubHero en="news" ja="お知らせ" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <section class="article-wrapper">
      <div class="article-wrapper__inner">
        <article class="article">
          <div class="p-post">
            <div class="p-post__head">
              <div class="p-post__title">
                {{ News.title }}
              </div>
              <div class="p-post__info">
                <time class="p-post__date">{{ News.date }}</time>
                <div class="c-label-category">{{ News.category }}</div>
              </div>
            </div>
            <div class="p-post__body">
              <div class="p-post__image">
                <img src="@/assets/images/news/news1.jpg" alt="" />
              </div>
              <p>
                {{ News.text1 }}
              </p>
              <h3>大見出し</h3>
              <p>
                {{ News.text2 }}
              </p>
              <h4>小見出し</h4>
              <p>
                {{ News.text3 }}
              </p>
            </div>
            <div class="p-post__sns">
              <Sns
                :url="route.fullPath"
                :title="News.title"
                :description="News.text1"
              />
            </div>
            <!-- <div class="p-post__pager">
              <div class="p-post-pager">
                <div class="p-post-pager__list">
                  <div class="p-post-pager__item p-post-pager__item--prev">
                    <router-link
                      :to="{ name: 'single', params: { id: prevNews.id } }"
                      class="p-post-pager__link"
                    >
                      {{ prevNews.title }}
                    </router-link>
                  </div>
                  <div class="p-post-pager__item p-post-pager__item--next">
                    <router-link
                      :to="{ name: 'single', params: { id: nextNews.id } }"
                      class="p-post-pager__link"
                    >
                      {{ nextNews.title }}
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="p-post-pager__home">
                <router-link to="/news">news一覧</router-link>
              </div>
            </div> -->
          </div>
        </article>
      </div>
    </section>
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

.p-post-pager {
  margin-bottom: 20px;
}
.p-post-pager__list {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #b8aed5;
  border-bottom: 1px solid #b8aed5;
}
.p-post-pager__item {
  flex: 0 1 50%;
  margin: 15px 0;
}
.p-post-pager__item:not(:last-child) {
  border-right: 1px solid #b8aed5;
}
.p-post-pager__item--prev .post-pager__link {
  padding: 10px 20px 10px 40px;
}
.p-post-pager__item--prev .post-pager__link::before {
  left: 10px;
  content: "\f0d9";
}
.p-post-pager__item--next .post-pager__link {
  padding: 10px 40px 10px 20px;
}
.p-post-pager__item--next .post-pager__link::before {
  right: 10px;
  content: "\f0da";
}
.p-post-pager__link {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
  text-decoration: none;
  color: #391e88;
  font-size: 14px;
  font-size: 0.875rem;
}
@media screen and (max-width: 768px) {
  .p-post-pager__link {
    font-size: 12px;
    font-size: 0.75rem;
  }
}
.p-post-pager__link:hover {
  text-decoration: none;
  background-color: #f9f7ff;
}
.p-post-pager__link::before {
  position: absolute;
  top: 50%;
  font-family: "Font Awesome 5 Free";
  font-size: 1.4rem;
  font-weight: 900;
  display: block;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #391e88;
}
.p-post-pager__home {
  text-align: center;
  text-transform: uppercase;
}
</style>
