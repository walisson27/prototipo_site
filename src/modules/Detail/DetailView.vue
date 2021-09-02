<template>
  <div>
    <Carousel />

    <div class="detail">
      <Navigation :title="application.title" />

      <!-- CARROSSEL -->
      <div class="detail__screenshots">
        <InnerCaroussel
          :data="application.screenshots"
          :appTitle="application.title"
        />
      </div>

      <!-- DESCRIÇÃO -->
      <div
        class="detail__description"
        v-html="application.full_description"
      ></div>

      <!-- PREÇO -->
      <div class="detail__footer">
        <p class="detail__price">
          <span>R$</span>
          {{
            application.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })
          }}
        </p>

        <AppButton
          @click="handleEnabled"
          :variant="isAppEnabled ? 'secondary' : 'primary'"
          >{{ isAppEnabled ? "Habilitado" : "Habilitar" }}</AppButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Navigation from "./components/Navigation/Navigation.vue";
import Carousel from "@/shared/components/Carousel/Carousel.vue";
import InnerCaroussel from "@/shared/components/Carousel/InnerCaroussel.vue";
import AppButton from "@/shared/components/AppButton/AppButton.vue";

export default {
  components: { Navigation, Carousel, InnerCaroussel, AppButton },
  computed: {
    ...mapGetters("list", ["cardById"]),
    ...mapGetters("detail", ["appEnabled"]),
    application() {
      const appId = this.$route.params.id;

      return this.cardById(appId);
    },
    image() {
      return require("@/assets/images/chevron.png");
    },
    isAppEnabled() {
      const appId = this.$route.params.id;

      return this.appEnabled.findIndex((id) => id === appId) !== -1;
    },
  },
  methods: {
    ...mapMutations("detail", ["handleAppEnabled"]),
    handleEnabled() {
      const id = this.$route.params.id;

      this.handleAppEnabled(id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "DetailStyle.scss";
</style>
