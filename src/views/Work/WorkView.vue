<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLatout.vue";
import Contact from "@/layouts/ContactLink.vue";

const breadcrumbs = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "WORK",
  },
];
</script>

<template>
  <main>
    <SubHero en="work" ja="制作実績" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <Contact />
  </main>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";

</style>
