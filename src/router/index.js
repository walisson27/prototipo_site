import Vue from "vue";
import VueRouter from "vue-router";

import ListRoute from "@/modules/List/ListRoute";
import DetailRoute from "@/modules/Detail/DetailRoute";

Vue.use(VueRouter);

const routes = [ListRoute, DetailRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
