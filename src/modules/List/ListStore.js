import front_escolhas from "@/home/front_escolhas";
import front_categorias from "@/home/front_categorias";

const ListStore = {
  namespaced: true,

  state: () => ({
    sortBy: "release",
    filters: front_escolhas,
    cards: front_categorias,
  }),

  mutations: {
    setSort(state, type) {
      state.sortBy = type;
    },
    setFilterActive(state, id) {
      const oldActiveIndex = state.filters.findIndex(
        (filter) => filter.active === true
      );
      const newActiveIndex = state.filters.findIndex(
        (filter) => filter.id === id
      );

      if (oldActiveIndex !== -1) {
        state.filters[oldActiveIndex].active = false;
      }

      if (newActiveIndex !== -1) {
        state.filters[newActiveIndex].active = true;
      }
    },
  },

  actions: {},

  getters: {
    filters: (state) => state.filters,
    sortBy: (state) => state.sortBy,
    activeFilterId: (state) => {
      return state.filters
        .filter((filter) => filter.active === true)
        .map((filter) => filter.id);
    },
    cards:
      (state) =>
      (categoryId = 0) =>
      (sortType) => {
        if (categoryId === 0)
          return state.cards.sort((a, b) => {
            if (a[sortType] > b[sortType]) {
              return sortType === "price" ? 1 : -1;
            }

            return sortType === "price" ? -1 : 1;
          });

        return state.cards
          .filter((card) => card.categoryId === categoryId)
          .sort((a, b) => {
            if (a[sortType] > b[sortType]) {
              return sortType === "price" ? 1 : -1;
            }

            return sortType === "price" ? -1 : 1;
          });
      },
    cardById: (state) => (id) => {
      return state.cards.find((card) => card.id === id);
    },
  },
};

export default ListStore;
