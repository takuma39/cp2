<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import Heading from "@/components/HeadingPrimaryComponent.vue";

const props = defineProps({
  count: {
    type: Number,
    required: false,
  },
});
</script>
<template>
  <Heading>
    <template v-slot:en>service</template>
    <template v-slot:ja>事業内容</template>
  </Heading>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";

</style>
