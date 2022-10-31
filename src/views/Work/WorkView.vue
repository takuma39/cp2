<script setup lang="ts">
// import MainHero from "./components/MainHeroComponent.vue";
import SubHero from "@/layouts/SubHeroLayout.vue";
import Contact from "@/layouts/ContactLink.vue";
</script>

<template>
  <main>
    <SubHero en="work" ja="制作実績" />
    <Contact />
  </main>
</template>

<style lang="scss">
@import "@/assets/sass/app2.scss";

</style>
