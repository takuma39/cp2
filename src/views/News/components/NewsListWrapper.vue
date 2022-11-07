<script setup lang="ts">
import { ref, computed } from "vue";
import PageList from "@/components/PaginationItemComponent.vue";
import PageButton from "@/components/PaginationBtnComponent.vue";

//props
const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  itemNumPerPage: {
    type: Number,
    required: false,
    default: 5,
  },
});

//定数
let curPage = ref<number>(1);
let pageNum = ref<number>(0);

//関数
const changePage = (value: number) => {
  curPage.value = value;
};

const calcPageNum = () => {
  pageNum.value = Math.ceil(props.items.length / props.itemNumPerPage);
};

//computed
const displayItems = computed(() => {
  const startIdx = (curPage.value - 1) * props.itemNumPerPage;
  const endIdx = startIdx + props.itemNumPerPage;
  return props.items.slice(startIdx, endIdx);
});

//発火
calcPageNum();
</script>

<template>
  <section class="newsListWrapper">
    <div class="newsListWrapper__inner">
      <div class="newsListWrapper__body">
        <PageList :data="displayItems" />
      </div>
      <div class="newsListWrapper__pagination">
        <PageButton
          @changePage="changePage"
          v-for="n in pageNum"
          :key="n"
          :pageNumber="n"
          :curPage="curPage"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.newsListWrapper {
  @include section();
  &__inner {
    @include inner();
    max-width: 780px;
  }
  &__body {
    margin-bottom: 40px;
  }
  &__pagination {
    display: flex;
    justify-content: center;
  }
}
</style>
