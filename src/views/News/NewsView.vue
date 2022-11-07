<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLayout.vue";
import Contact from "@/layouts/ContactLink.vue";
import NewsListWrapper from "./components/NewsListWrapper.vue";
import NewsJson from "@/assets/json/news";

type NewsObject ={
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  text1: string;
  text2: string;
  text3: string;
};
const newsDate = NewsJson.sort(
  (a: NewsObject, b: NewsObject) => Date.parse(b.date) - Date.parse(a.date)
);

const breadcrumbs = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "news",
  },
];
</script>

<template>
  <main>
    <SubHero en="news" ja="お知らせ" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <NewsListWrapper :items="newsDate" :itemNumPerPage="10" />
    <Contact />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
</style>
