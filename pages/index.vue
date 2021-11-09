<template>
  <div v-if="fetchState.pending">
    <nuxt-loader name="cube-loader" />
  </div>
  <div v-else>
    <SectionHero :hero-data="data.stories[0].content.hero_page[0]" />
    <SectionNew :new-data="postsForCards" />
    <SectionDirections />
    <SectionAbout :about-data="data.stories[0].content.hero_page[1]" />
  </div>
</template>

<script>
import { ref, useFetch, provide, useStore } from '@nuxtjs/composition-api';

import StoryblokClient from 'storyblok-js-client';

import { STORYBLOK_KEY } from '~/config/config.js';

export default {
  name: 'Home',

  setup(props, context) {
    const store = useStore();

    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_KEY,
    });

    // const store = useStore();
    const data = ref(null);
    const directions = ref(null);
    const postsForCards = ref(null);

    const { fetch, fetchState } = useFetch(async () => {
      data.value = await Storyblok.get('cdn/stories/', {
        // version: 'draft',
        version: 'published',
        starts_with: 'home',
      })
        .then((res) => {
          return res.data;
          // return res.data;
        })
        .catch((err) => {
          console.warn(`💣💣💣 - ${err.response}`);
        });

      // todo направления
      directions.value = await Storyblok.get('cdn/stories/', {
        // version: 'draft',
        version: 'published',
        starts_with: 'directions',
      })
        .then((res) => {
          store.dispatch('addDirections', res.data);

          return res.data;
          // return res.data;
        })
        .catch((err) => {
          console.warn(`💣💣💣 - ${err.response}`);
        });

      // todo для карточек
      postsForCards.value = await Storyblok.get('cdn/stories', {
        // version: 'draft',
        version: 'published',
        starts_with: 'posts',
        excluding_fields: 'markdown_block,flex_gallery,grid_gallery',
        sort_by: 'published_at:desc',
      })
        .then((res) => {
          store.dispatch('addPostsForCards', res.data);

          return res.data;
          // return res.data;
        })
        .catch((err) => {
          console.warn(`💣💣💣 - ${err.response}`);
        });
    });

    // Manually trigger a refetch
    fetch();

    provide('postsForCards', postsForCards);
    provide('directions', directions);

    return {
      data,
      directions,
      postsForCards,

      fetch,
      fetchState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
