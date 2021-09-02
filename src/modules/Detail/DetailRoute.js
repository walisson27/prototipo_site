const DetalhesRoute = {
  name: "detail",
  path: "/detalhe/:id",
  component: () => import("./DetailView.vue"),
};

export default DetalhesRoute;
