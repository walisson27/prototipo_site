<template>
  <Carousel
    :per-page="1"
    :pagination-enabled="false"
    :loop="true"
    :autoplay="true"
    :autoplayTimeout="6000"
    :speed="800"
    :navigation-enabled="false"
  >
    <Slide v-for="banner in banners" :key="banner.id">
      <BannerCarousel
        :banner-image="banner.path"
        :variant="banner.textVariant"
        :title="banner.title"
        :description="banner.description"
        :applicationId="banner.applicationId"
        :price="banner.price"
      />
    </Slide>
  </Carousel>
</template>

<script>
import { mapGetters } from "vuex";
import { Carousel, Slide } from "vue-carousel";

import BannerCarousel from "@/shared/components/Carousel/templates/BannerCarousel.vue";

export default {
  components: { Carousel, Slide, BannerCarousel },
  computed: {
    ...mapGetters(["banners"]),
  },
};
</script>
