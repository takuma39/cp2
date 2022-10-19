<script setup lang="ts">
import { RouterLink } from "vue-router";
const props = defineProps({
  data: {
    type: String,
    required: false,
    default: "",
  },
  link: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<template>
  <router-link :to="props.link" class="btn" :data-type="props.data">
    <slot></slot>
  </router-link>
</template>

<style scoped lang="scss">
@import "@/assets/sass/app2.scss";
.btn {
  position: relative;
  font-weight: bold;
  line-height: 1.4;
  display: inline-block;
  width: 220px;
  padding: 18px 0;
  transition: 0.3s;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  border-radius: 50px;
  background-image: $color-btn;
  background-size: 200% auto;

  @include font-size(14);

  &::after {
    position: absolute;
    top: 50%;
    right: 1.5em;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f0da";
    transition: 0.3s;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    @include font-size(14);
  }
  &:hover {
    text-decoration: none;
    background-position: right center;
    &::after {
      right: 1.2em;

      // $break4: 768;
      @include mq(u-br4) {
        right: 1.5em;
      }
    }
  }

  &--block {
    display: block;
    max-width: 300px;
    margin: 0 auto;
  }

  &--center {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  &--transparent {
    border: 1px solid #fff;
    background: none;
    &:hover {
      opacity: 0.8;
    }
  }
}

.btn[data-type="block"] {
  display: block;
  max-width: 300px;
  margin: 0 auto;
}

.btn[data-type="center"] {
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.btn[data-type="transparent"] {
  border: 1px solid #fff;
  background: none;
  &:hover {
    opacity: 0.8;
  }
}

.btn[data-type="grad"] {
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );

  display: block;
  margin: 10px;
  padding: 15px 45px;
  transition: 0.5s;
  text-align: center;
  text-transform: uppercase;
  color: white;
  border-radius: 10px;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;

  &:hover {
    text-decoration: none;
    color: #fff;
    background-position: right center;
  }
}
</style>
