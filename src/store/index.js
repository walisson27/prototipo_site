import Vue from "vue";
import Vuex from "vuex";

import ListStore from "@/modules/List/ListStore";
import DetailStore from "@/modules/Detail/DetailStore";

import front_historico from "@/home/front_historico";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    banners: front_historico,
  },
  mutations: {},
  actions: {},
  getters: {
    banners: (state) => state.banners,
  },
  modules: {
    list: ListStore,
    detail: DetailStore,
  },
});
