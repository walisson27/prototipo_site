<template>
  <div class="navigation">
    <div
      class="navigation__icon"
      :style="iconImage"
      tabindex="0"
      role="button"
      aria-roledescription="voltar para listagem"
      @click="$router.push('/')"
      @keypress.enter="$router.push('/')"
    ></div>
    <span class="navigation__title">{{ title }}</span>
  </div>
  
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    image() {
      return require("@/assets/images/chevron.png");
    },
    iconImage() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 30px;

  &__icon {
    width: 11px;
    height: 19px;
    margin-right: 15px;
    cursor: pointer;
  }

  &__title {
    color: #f0690a;
    font-size: 24px;
  }
}
</style>
