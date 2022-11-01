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
    name: "company",
  },
];
</script>

<template>
  <main>
    <SubHero en="company" ja="私たちについて" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <Contact />
  </main>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";

</style>
