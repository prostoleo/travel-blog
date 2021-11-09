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
    console.log('payload: ', payload);
    // this.weather = unref(weather);

    context.commit('addPostsForCards', payload);
  },
  addDirections(context, payload) {
    console.log('payload: ', payload);
    // this.weather = unref(weather);

    context.commit('addDirections', payload);
  },
  addAllPosts(context, payload) {
    console.log('payload: addAllPosts action', payload);

    context.commit('addAllPosts', payload);
  },
  addPostsPagePosts(context, payload) {
    console.log('payload: addPostsPagePosts action', payload);

    context.commit('addPostsPagePosts', payload);
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
  addAllPosts(state, payload) {
    state.allPosts = payload;
    console.log('state.allPosts in mutation: ', state.allPosts);
  },
  addPostsPagePosts(state, payload) {
    state.postsPagePosts = payload;
    console.log('state.postsPagePosts in mutation: ', state.postsPagePosts);
  },
};
