<template>
  <div>
    <Carousel />

    <div class="list">
      <CardFilter />

      <div class="list__sort">
        <span>ORDENAR</span>
        <select @change="updateSortType">
          <option
            v-for="(type, index) in sortType"
            :key="index"
            :value="type.id"
            :selected="sort === type.id"
          >
            {{ type.title }}
          </option>
        </select>
      </div>

      <div class="list__applications">
        <Card
          v-for="app in applications"
          :key="app.id"
          :id="app.id"
          :categoryId="app.categoryId"
          :title="app.title"
          :description="app.description"
          :price="app.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Carousel from "@/shared/components/Carousel/Carousel.vue";
import CardFilter from "./components/Filter/CardFilter.vue";
import Card from "./components/Card/Card.vue";

export default {
  components: { Carousel, CardFilter, Card },
  computed: {
    ...mapGetters("list", {
      categoryId: "activeFilterId",
      sort: "sortBy",
      cards: "cards",
    }),
    applications() {
      return this.cards(this.categoryId[0])(this.sort);
    },
  },
  data() {
    return {
      sortType: [
        { id: "release", title: "Lançamento" },
        { id: "price", title: "Preço" },
      ],
    };
  },
  methods: {
    ...mapMutations("list", ["setSort"]),
    updateSortType(evt) {
      const type = evt.target.value;

      this.setSort(type);
    },
  },
};
</script>

<style lang="scss">
@import "ListStyle.scss";
</style>
