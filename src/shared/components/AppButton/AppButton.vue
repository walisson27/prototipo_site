<template>
  <button
    @click="$emit('click')"
    class="app-button"
    :class="`app-button--${variant}`"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    variant: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 15px;
  width: 114px;
  height: 34px;
  text-align: center;
  cursor: pointer;

  &--primary {
    background: rgb(255, 142, 73);
    background: linear-gradient(
      50deg,
      rgba(255, 142, 73, 1) 0%,
      rgba(240, 105, 10, 1) 100%
    );
    color: #fff;
  }

  &--secondary {
    background-color: #fff;
    color: rgb(255, 142, 73);
    border: 1px solid rgb(255, 142, 73);
  }
}
</style>
