<script setup lang="ts">
import Btn from "@/components/BtnComponent.vue";
import Table from "@/components/TableComponent.vue";
import TableData from "@/assets/json/recruit.json";
</script>

<template>
  <ul class="jobList">
    <li class="jobList__item" v-for="data in TableData" :key="data.id">
      <h4 class="jobList__name">{{ data.title }}</h4>
      <div class="jobList__table">
        <Table :tableData="data.list" />
      </div>
      <div class="jobList__link">
        <Btn link="/contact">応募する</Btn>
        <span class="jobList__link-note">求人サイトへ遷移します</span>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.jobList {
  &__item {
    padding: 60px 95px;
    border: 1px solid #b067cf;
    border-radius: 6px;
    background-color: #fff;

    // $break4: 768;
    @include mq(u-br4) {
      padding: 30px 20px;
    }

    &:nth-child(n + 2) {
      margin-top: 40px;
    }
  }

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
