<script setup lang="ts">
import SubHero from "@/layouts/SubHeroLayout.vue";
import Breadcrumb from "@/layouts/BreadcrumbLatout.vue";
import Contact from "@/layouts/ContactLink.vue";
import Message from "./components/MessageComponent.vue";
import Job from "./components/JobComponent.vue";
import Video from "./components/VideoComponent.vue";
const breadcrumbs = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "recruit",
  },
];
</script>

<template>
  <main class="recruit">
    <SubHero en="recruit" ja="採用情報" />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <Message />
    <Job />
    <Video />
    <Contact />
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.recruit {
  background-image: url(src/assets/images/recruit/bg-geometry.png);
  background-repeat: repeat;

  // $break4: 768;
  @include mq(u-br4) {
    background-size: 50%;
  }
}
</style>
