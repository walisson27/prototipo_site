<template>
  <div class="filter">
    <div
      v-for="(filter, index) in filters"
      :key="index"
      class="filter__item"
      :class="{ 'filter__item--active': filter.active }"
      @click="() => setActive(filter.id)"
      @keypress.enter="() => setActive(filter.id)"
      tabindex="0"
      role="button"
      :aria-roledescription="`filtrar por ${filter.title}`"
    >
      <fa
        :icon="filter.icon"
        :color="filter.active ? '#fff' : '#696969'"
        size="lg"
      />
      <p>{{ filter.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("list", ["filters"]),
  },
  methods: {
    ...mapMutations("list", ["setFilterActive"]),
    setActive(id) {
      this.setFilterActive(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  overflow-y: auto;
  height: 112px;
  user-select: none;

  &__item {
    background-color: #f9f9f9;
    width: 134px;
    height: 82px;
    border: 1px solid #ececec;
    border-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #696969;
    transition: width 0.2s ease, height 0.2s ease;
    cursor: pointer;
    min-width: 115px;

    &:hover:not(.filter__item--active) {
      background-color: #f2f2f2;
    }

    &--active {
      background-color: #f26f14;
      color: #fff;
      width: 137px;
      height: 85px;
      border-radius: 4px;
      border: 0;
      box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.2);
      position: relative;
      z-index: 1;
    }

    p {
      margin: 0;
      margin-top: 14px;
      font-size: 14px;
    }

    &:first-child:not(.filter__item--active) {
      border-left: 1px solid #ececec;
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }

    &:last-child {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
}
</style>
