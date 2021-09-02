<template>
  <div class="card">
    <div class="card__body">
      <fa :icon="icon" size="2x" color="#f26f14" />
      <h3>{{ title }}</h3>
      <p v-if="description">
        {{ description }}
      </p>
    </div>
    <div
      class="card__footer"
      @click="$router.push(`/detalhe/${id}`)"
      @keypress.enter="$router.push(`/detalhe/${id}`)"
      tabindex="0"
      role="button"
      aria-roledescription="saiba mais"
    >
      <span>
        {{
          new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)
        }}
      </span>

      <span>Saiba mais</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    icon() {
      const icons = [
        "briefcase",
        "university",
        "tree",
        "gavel",
        "ban",
        "globe-americas",
        "gem",
        "male",
        "piggy-bank",
      ];

      return icons[this.categoryId - 1];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "CardStyle.scss";
</style>
