<script setup lang="ts">
import MainHero from "./components/MainHeroComponent.vue";
import News from "./components/HomeNewsComponent.vue";
import Service from "./components/HomeServiceComponent.vue";
import Work from "./components/HomeWorkComponent.vue";
</script>

<template>
  <main>
    <MainHero />
    <News />
    <Service />
    <Work />
    <MainHero />
  </main>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";
main {
  height: 200vh;
}
</style>