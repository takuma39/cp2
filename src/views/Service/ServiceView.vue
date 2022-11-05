<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLatout.vue";
import Contact from "@/layouts/ContactLink.vue";
import ServiceList from "./components/ServiceListComponent.vue";

const breadcrumbs = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "service",
  },
];
</script>

<template>
  <main>
    <SubHero en="service" ja="事業案内" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <ServiceList />
    <Contact />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

</style>
