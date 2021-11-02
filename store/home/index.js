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
  /* addWeather(context, wth) {
    // this.weather = unref(weather);

    context.commit('addWeather', wth);
  }, */
  addHome(context, payload) {
    context.commit('addHome', payload);
    console.log('payload: ', payload);
  },
};

// todo mutations
export const mutations = {
  /* addWeather(state, weather) {
    // this.weather = unref(weather);

    state.weather = weather;
  }, */
  addHome(state, payload) {
    state.home = payload;
  },
};
