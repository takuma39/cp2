<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import Label from "@/components/LabelComponent.vue";
import newsJson from '@/assets/json/news.json';
// import axios from "axios";

const props = defineProps({
  count: {
    type: Number,
    required: false,
  },
});

const newsDate = newsJson.sort(
  (a, b) => Date.parse(b.date) - Date.parse(a.date)
);
const newsCount = computed(() => {
  return newsDate.slice(0, props.count);
});
</script>
<template>
  <div class="newsList">
    <ul class="newsList__list">
      <li class="newsList__item" v-for="news in newsCount" :key="news.id">
        <div class="newsList__heading">
          <time datetime="2020-02-01" class="newsList__date">
            {{ news.date }}
          </time>
          <div class="newsList__label">
            <Label>{{ news.category }}</Label>
          </div>
        </div>
        <div class="newsList__body">
          <router-link :to="news.id" class="newsList__link">
            {{ news.title }}
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.newsList {
  &__item {
    display: flex;
    @include font-size(14);

    // $break4: 768;
    @include mq(u-br4) {
      display: block;
    }
    &:not(:last-child) {
      margin-bottom: 15px;

      // $break4: 768;
      @include mq(u-br4) {
        margin-bottom: 30px;
      }
    }
  }
  &__heading {
    display: flex;

    // $break4: 768;
    @include mq(u-br4) {
      margin-bottom: 3px;
    }
  }
  &__body {
    flex: 1;
  }
  &__link {
    color: $color-text;
  }
  &__date {
    margin-right: 20px;
  }
  &__label {
    margin-right: 20px;
  }
}

.newsList-wrapper {
  &__inner {
    max-width: 780px;
  }
  &__body {
    margin-bottom: 40px;
  }
}
</style>
