<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLayout.vue";
import Contact from "@/layouts/ContactLink.vue";

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
    <Contact />
  </main>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";

</style>
