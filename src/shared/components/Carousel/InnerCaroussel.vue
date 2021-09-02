<template>
  <Carousel
    :per-page-custom="[
      [320, 1],
      [1200, 2],
    ]"
    :pagination-enabled="false"
    :loop="true"
    :autoplay="true"
    :autoplayTimeout="6000"
    :speed="800"
    :navigation-enabled="true"
    :navigation-next-label="nextLabel"
    :navigation-prev-label="prevLabel"
  >
    <Slide v-for="banner in data" :key="banner.id">
      <ScreenShotCarousel
        :image="banner.path"
        :title="appTitle"
        :description="banner.description"
      />
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import ScreenShotCarousel from "@/shared/components/Carousel/templates/ScreenShotCarousel.vue";

export default {
  components: { Carousel, Slide, ScreenShotCarousel },
  props: {
    data: {
      type: Array,
      required: true,
    },
    appTitle: {
      type: String,
      required: true,
    },
  },
  computed: {
    nextLabel() {
      return `<img src="${require("@/assets/images/proximo.png")}" />`;
    },
    prevLabel() {
      return `<img src="${require("@/assets/images/voltar.png")}" />`;
    },
  },
};
</script>
