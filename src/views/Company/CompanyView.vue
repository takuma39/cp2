<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLayout.vue";
import Contact from "@/layouts/ContactLink.vue";
import Greeting from "./components/GreetingComponent.vue";
import Info from "./components/InfoComponent.vue";
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
    <Greeting />
    <Info />
    <Contact />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
</style>
