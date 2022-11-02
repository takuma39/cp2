<script setup lang="ts">
const props = defineProps({
  tableData: {
    type: Object,
    required: false,
  },
});
</script>
<template>
  <table class="c-table01">
    <tr v-for="data in props.tableData" :key="data.id">
      <th>{{ data.th }}</th>
      <td>{{ data.td }}</td>
    </tr>
  </table>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.c-table01 {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  tr {
    border-bottom: solid 1px #ddd;
  }
  th,
  td {
    padding: 30px 10px;
    text-align: left;

    // $break4: 768;
    @include mq(u-br4) {
      display: block;
      padding: 0;
    }
  }

  th {
    width: 20%;

    // $break4: 768;
    @include mq(u-br4) {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 5px;
    }
  }
  td {
    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 20px;
    }
  }
  p {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  ul {
    margin-left: 20px;
  }
}
</style>
