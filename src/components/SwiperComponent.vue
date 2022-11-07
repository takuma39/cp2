<script setup lang="ts">
import { computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const modules = [Pagination, Navigation, Mousewheel];

// 画像
import WorkJson from "@/assets/json/work";
const props = defineProps({
  count: {
    type: Number,
    required: false,
    default: 3,
  },
});
const workCount = computed(() => {
  return WorkJson.slice(0, props.count);
});
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="work in workCount" :key="work.id">
      <img :src="`src/assets/images/work/${work.image}`" alt="" />
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

::v-deep(.swiper-button-next::after),
::v-deep(.swiper-button-prev::after) {
  position: absolute;
  top: 50%;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  display: block;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #391e88;

  @include font-size(32);
}

::v-deep(.swiper-button-next::after) {
  content: "\f105";
}

::v-deep(.swiper-button-prev::after) {
  content: "\f104";
}

::v-deep(.swiper-pagination-bullets) {
  bottom: 0px;
  text-align: right;
}

::v-deep(.swiper-pagination-bullet-active) {
  background: $color-primary;
}
</style>
