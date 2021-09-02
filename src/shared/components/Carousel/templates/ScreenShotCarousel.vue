<template>
  <div class="screenshot">
    <img :src="imageSrc" :alt="title" />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
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
  },
  computed: {
    imageSrc() {
      return require(`@/assets/images/${this.image}`);
    },
  },
};
</script>

<style lang="scss">
.VueCarousel-navigation-button {
  display: none;

  @media (min-width: 769px) {
    display: block;
  }
}
</style>

<style lang="scss" scoped>
img {
  display: block;
  width: 100%;
}

.screenshot {
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.08);
  margin: 20px;
  padding: 10px;

  p {
    padding: 0 30px;
    padding-bottom: 5px;
    font-size: 14px;
    color: #f0690a;
  }
}
</style>
