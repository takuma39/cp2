<script setup lang="ts">
import Heading from "@/components/HeadingSecondaryComponent.vue";
import JobList from "./JobListComponent.vue";
</script>

<template>
  <section class="job">
    <div class="job__inner">
      <div class="job__heading">
        <Heading>募集中の職種</Heading>
      </div>
      <JobList />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.job {
  @include section();

  &__inner {
    @include inner();
  }

  &__heading {
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
