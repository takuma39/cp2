<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLatout.vue";
import Contact from "@/layouts/ContactLink.vue";

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
    <Contact />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

</style>
