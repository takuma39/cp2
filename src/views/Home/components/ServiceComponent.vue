<script setup lang="ts">
import Heading from "@/components/HeadingPrimaryComponent.vue";
import Btn from "@/components/BtnComponent.vue";
import CardWrapper from "@/components/CardWrapperComponent.vue";
import Card from "@/components/CardComponent.vue";
import ServiceJson from "@/assets/json/service.json";
</script>

<template>
  <section class="service">
    <div class="service__inner">
      <div class="service__heading">
        <Heading>
          <template v-slot:en>service</template>
          <template v-slot:ja>事業内容</template>
        </Heading>
      </div>
      <div class="service__body">
        <CardWrapper>
          <Card
            v-for="service in ServiceJson"
            :key="service.id"
            :src="`src/assets/images/service/${service.image}`"
            type="A"
          >
            <template v-slot:title>{{ service.title }}</template>
            <template v-slot:text>{{ service.shortText }}</template>
          </Card>
        </CardWrapper>
      </div>
      <div class="service__link">
        <Btn link="/service">more</Btn>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.service {
  @include section();
  &__heading {
    text-align: center;
    margin-bottom: 30px;
  }
  &__inner {
    @include inner();
  }
  &__body {
    margin-bottom: 30px;
  }
  &__link {
    text-align: center;
  }
}
</style>
