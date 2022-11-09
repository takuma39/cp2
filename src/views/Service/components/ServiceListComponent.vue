<script setup lang="ts">
import ServiceJson from "@/assets/json/service.json";
import Media from "./MediaComponent.vue";
</script>
<template>
  <section class="service-list">
    <div class="service-list__inner">
      <Media
        v-for="data in ServiceJson"
        :key="data.id"
        :title="data.title"
        :image="`./static/images/service/${data.image}`"
        :text="data.fullText"
      />
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.service-list {
  @include section();

  &__inner {
    @include inner();
  }
}
::v-deep(.media:not(:last-child)) {
  margin-bottom: 60px;

  // $break4: 768;
  @include mq(u-br4) {
    margin-bottom: 40px;
  }
}
</style>
