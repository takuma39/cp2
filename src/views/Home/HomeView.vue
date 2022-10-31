<script setup lang="ts">
import MainHero from "@/layouts/MainHeroComponent.vue";
import News from "./components/HomeNewsComponent.vue";
import Service from "./components/HomeServiceComponent.vue";
import Work from "./components/HomeWorkComponent.vue";
import Company from "./components/HomeCompanyComponent.vue";
import Recruit from "./components/HomeRecruitComponent.vue";
import Contact from "@/layouts/ContactLink.vue";
</script>

<template>
  <main>
    <MainHero />
    <News />
    <Service />
    <Work />
    <Company />
    <Recruit />
    <Contact />
  </main>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";
</style>
