<template>
  <div v-if="fetchState.pending">
    <nuxt-loader name="cube-loader" />
  </div>
  <div v-else>
    <!-- <button @click="fetch">refetch</button> -->
    <!-- <pre>
      {{ data }}
    </pre> -->
    <!-- <pre>
      {{ directions }}
    </pre> -->
    <!-- <pre>
      {{ postsForCards }}
    </pre> -->
    <SectionHero :hero-data="data.stories[0].content.hero_page[0]" />
    <SectionNew :new-data="postsForCards" />
    <SectionDirections />
    <SectionAbout :about-data="data.stories[0].content.hero_page[1]" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {
  ref,
  useFetch,
  provide,
  // useContext,
  // useAsync,
  // onMounted,
  useStore,
  // computed,
} from '@nuxtjs/composition-api';

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
      // data.value = await $axios.$get(
      //   `https://api.storyblok.com/v1/cdn/stories/test?version=draft&token=gmlwyE5LJpGMoSrWXvgA3Att`
      // );
      // data.value = await $storyapi
      data.value = await Storyblok.get('cdn/stories/', {
        version: 'draft',
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
        version: 'draft',
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
        version: 'draft',
        starts_with: 'posts',
        excluding_fields: 'markdown_block,flex_gallery,grid_gallery',
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
