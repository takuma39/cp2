<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLayout.vue";
import ContactWrapper from "./components/ContactWrapperComponent.vue";

const breadcrumbs = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "contact",
  },
];
</script>

<template>
  <main>
    <SubHero en="contact" ja="お問い合わせ" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <ContactWrapper />
  </main>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";
</style>
