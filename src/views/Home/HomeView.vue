<script setup lang="ts">
import MainHero from "@/layouts/MainHeroComponent.vue";
import News from "./components/NewsComponent.vue";
import Service from "./components/ServiceComponent.vue";
import Work from "./components/WorkComponent.vue";
import Company from "./components/CompanyComponent.vue";
import Recruit from "./components/RecruitComponent.vue";
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
