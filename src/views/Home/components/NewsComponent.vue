<script setup lang="ts">
import Heading from "@/components/HeadingPrimaryComponent.vue";
import NewsList from "@/components/NewsListComponent.vue";
// import NewsList from "@/components/pagination/PaginationItemComponent.vue";
// import NewsJson from "@/assets/json/news/news.json";

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

// const HomeNews = JSON.parse(JSON.stringify(NewsJson)).sort(
//   (a: NewsObject, b: NewsObject) => Date.parse(b.date) - Date.parse(a.date)
// );
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
