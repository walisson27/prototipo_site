<template>
  <div class="banner" :style="bannerStyle">
    <div class="banner__logo">
      <img :src="bannerLogo" alt="upMiner" />
      <h2>{{ title }}</h2>
    </div>

    <div class="banner__description">
      <p>
        {{ description }}
      </p>
    </div>

    <div class="banner__price">
      <p>
        <span>R$</span>
        {{
          price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })
        }}
      </p>

      <AppButton @click="goToApplication">Saiba mais</AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "@/shared/components/AppButton/AppButton.vue";

export default {
  props: {
    bannerImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    applicationId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    variant: {
      type: String,
      default: "text-dark",
      validator: (value) => {
        return ["text-dark", "text-light"].includes(value);
      },
    },
  },
  components: { AppButton },
  computed: {
    bannerStyle() {
      return {
        backgroundImage: `url(${require("@/assets/images/" +
          this.bannerImage)})`,
        backgroundPosition: "left center",
        color: this.variant === "text-dark" ? "#000" : "#fff",
      };
    },
    bannerLogo() {
      if (this.variant === "text-dark")
        return require("@/assets/images/logo-upminer-black.png");

      return require("@/assets/images/logo-upminer-white.png");
    },
  },
  methods: {
    goToApplication() {
      if (this.$route.params.id) {
        if (this.$route.params.id !== this.applicationId) {
          this.$router.push(`/detalhe/${this.applicationId}`);
        }
      } else {
        this.$router.push(`/detalhe/${this.applicationId}`);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: 300px;
  padding: 15px;
  border-bottom: 5px solid #f26f14;

  @media (min-width: 480px) {
    padding: 40px 60px;
  }

  &__logo {
    display: flex;
    align-items: center;

    img {
      padding-right: 20px;
      border-right: 1px solid #aaa;
    }

    h2 {
      margin: 0;
      margin-left: 20px;
      font-weight: normal;
      font-size: 18px;

      @media (min-width: 480px) {
        font-size: 32px;
      }
    }
  }

  &__description {
    width: 100%;
    margin-top: 20px;

    @media (min-width: 769px) {
      width: 50%;
    }

    p {
      margin: 0;
      font-size: 19px;
      font-weight: 100;
      font-size: 15px;

      @media (min-width: 480px) {
        font-size: 19px;
      }
    }
  }

  &__price {
    display: flex;
    align-items: center;
    margin-top: 40px;

    p {
      font-size: 37px;
      margin: 0;
      margin-right: 30px;

      span {
        font-size: 16px;
      }
    }
  }
}
</style>
