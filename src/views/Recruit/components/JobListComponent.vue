<script setup lang="ts">
import Btn from "@/components/BtnComponent.vue";
import Table from "@/components/TableComponent.vue";
import TableData from "@/assets/json/recruit.json";
import TableData2 from "@/assets/json/recruit2.json";
</script>

<template>
  <div class="p-job-list__detail" v-for="data in TableData2" :key="data.id">
    <h4 class="p-job-list__name">{{ data.title }}</h4>
    <div class="p-job-list__table">
      <Table :tableData="data.list" />
    </div>
    <div class="p-job-list__link">
      <Btn link="/contact">応募する</Btn>
      <span class="p-job-list__link-note">求人サイトへ遷移します</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.p-job-list {
  &__name {
    margin-bottom: 30px;
    text-align: center;
    font-weight: bold;

    @include font-size(24);
    @include mq(u-br4) {
      margin-bottom: 20px;

      // $break4: 768;
      @include font-size(16);
    }
  }
  &__detail {
    padding: 60px 95px;
    border: 1px solid #b067cf;
    border-radius: 6px;
    background-color: #fff;

    // $break4: 768;
    @include mq(u-br4) {
      padding: 30px 20px;
    }
  }
  &__table {
    margin-bottom: 50px;

    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 40px;
    }
  }
  &__link {
    text-align: center;
  }
  &__link-note {
    display: block;
    margin-top: 5px;

    @include font-size(12);
  }
}
</style>
