const DetalhesStore = {
  namespaced: true,

  state: () => ({
    appEnabled: [],
  }),

  mutations: {
    handleAppEnabled(state, appId) {
      const appIndex = state.appEnabled.findIndex((id) => id === appId);

      if (appIndex !== -1) {
        state.appEnabled.splice(appIndex, 1);
      } else {
        state.appEnabled.push(appId);
      }
    },
  },

  actions: {},

  getters: {
    appEnabled: (state) => state.appEnabled,
  },
};

export default DetalhesStore;
