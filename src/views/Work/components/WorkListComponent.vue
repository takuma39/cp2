<script setup lang="ts">
import CardWrapper from "@/components/CardWrapperComponent.vue";
import Card from "@/components/CardComponent.vue";
import WorkJson from "@/assets/json/work";
</script>

<template>
  <section class="workList l-section">
    <div class="workList__inner">
      <CardWrapper>
        <Card
          v-for="work in WorkJson"
          :key="work.id"
          :src="`src/assets/images/work/${work.image}`"
          type="B"
        >
          <template v-slot:title>{{ work.title }}</template>
        </Card>
      </CardWrapper>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

.workList {
  @include section();

  &__inner {
    @include inner();
  }
}

::v-deep {
  .card__img {
    border: 1px solid #ececec;
  }
}
</style>
