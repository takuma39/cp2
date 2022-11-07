<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import Heading from "@/components/HeadingPrimaryComponent.vue";
import Form from "./FormComponent.vue";

const props = defineProps({
  count: {
    type: Number,
    required: false,
  },
});
</script>

<template>
  <section class="contact l-section">
    <div class="contact__inner l-inner">
      <div class="contact__lead">
        Webサイトの制作のご依頼やお見積りなど、<br class="u-sp-only">お気軽にご相談ください。
      </div>
      <div class="contact__body">
        <Form />
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.contact {
  @include section();

  &__inner {
    @include inner();
    max-width: 780px;
  }
  &__lead {
    margin-bottom: 40px;
    text-align: center;

    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 30px;
    }
  }
  &__body {
    padding: 90px;
    background-color: #f7f7f7;

    // $break4: 768;
    @include mq(u-br4) {
      padding: 30px;
    }
  }
}
</style>
