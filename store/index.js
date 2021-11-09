export const strict = false;

// * state
export const state = () => ({
  postsForCards: null,
  directions: null,
  allPosts: null,
  postsPagePosts: null,
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
  getAllPosts: (state) => {
    return state.allPosts;
  },
  getPostsPagePosts: (state) => {
    return state.postsPagePosts;
  },
};

// todo actions
export const actions = {
  /* addWeather(context, wth) {
    // this.weather = unref(weather);

    context.commit('addWeather', wth);
  }, */
  addPostsForCards(context, payload) {
    // this.weather = unref(weather);

    context.commit('addPostsForCards', payload);
  },
  addDirections(context, payload) {
    // this.weather = unref(weather);

    context.commit('addDirections', payload);
  },
  addAllPosts(context, payload) {
    context.commit('addAllPosts', payload);
  },
  addPostsPagePosts(context, payload) {
    context.commit('addPostsPagePosts', payload);
  },
};

// todo mutations
export const mutations = {
  addPostsForCards(state, payload) {
    state.postsForCards = payload;
  },
  addDirections(state, payload) {
    state.directions = payload;
  },
  addAllPosts(state, payload) {
    state.allPosts = payload;
  },
  addPostsPagePosts(state, payload) {
    state.postsPagePosts = payload;
  },
};
