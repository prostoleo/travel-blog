// export const strict = false;

// * state
export const state = () => ({
  postsForCards: null,
  directions: null,
});

// todo getters
export const getters = {
  /* getTest: (state) => {
    return state.test;
  }, */
  getPostsForCards: (state) => {
    return state.postsForCards;
  },
  getDirections: (state) => {
    return state.directions;
  },
};

// todo actions
export const actions = {
  /* addWeather(context, wth) {
    // this.weather = unref(weather);

    context.commit('addWeather', wth);
  }, */
  addPostsForCards(context, payload) {
    console.log('payload: ', payload);
    // this.weather = unref(weather);

    context.commit('addPostsForCards', payload);
  },
  addDirections(context, payload) {
    console.log('payload: ', payload);
    // this.weather = unref(weather);

    context.commit('addDirections', payload);
  },
};

// todo mutations
export const mutations = {
  /* addWeather(state, weather) {
    // this.weather = unref(weather);

    state.weather = weather;
  }, */
  addPostsForCards(state, payload) {
    console.log('payload: ', payload);
    // this.weather = unref(weather);

    state.postsForCards = payload;
    console.log('state.postsForCards in mutation: ', state.postsForCards);
  },
  addDirections(state, payload) {
    console.log('payload: ', payload);
    // this.weather = unref(weather);

    state.directions = payload;
    console.log('state.directions in mutation: ', state.directions);
  },
};
