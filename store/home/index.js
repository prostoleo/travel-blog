export const state = () => ({
  home: null,
});

// todo getters
export const getters = {
  /* getTest: (state) => {
    return state.test;
  }, */
  getHome: (state) => {
    return state.home;
  },
};

// todo actions
export const actions = {
  addHome(context, payload) {
    context.commit('addHome', payload);
  },
};

// todo mutations
export const mutations = {
  addHome(state, payload) {
    state.home = payload;
  },
};
