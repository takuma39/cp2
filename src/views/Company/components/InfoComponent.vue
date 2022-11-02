<script setup lang="ts">
import Heading from "@/components/HeadingSecondaryComponent.vue";
import Table from "@/components/TableComponent.vue";
import TableData from "@/assets/json/company.json";
import Access from "./AccessComponent.vue";
</script>
<template>
  <section class="company-info">
    <div class="company-info__inner">
      <div class="company-info__heading">
        <Heading>会社概要</Heading>
      </div>
      <div class="company-info__table">
        <Table :tableData="TableData" />
      </div>

      <div class="company-info__access">
        <Access />
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.company-info {
  @include section();

  &__inner {
    @include inner();
  }

  &__heading {
    text-align: center;
    margin-bottom: 30px;
  }
  &__table {
    margin-bottom: 60px;
  }
}
</style>
