<template>
  <div v-if="fetchState.pending">
    <nuxt-loading />
  </div>
  <div v-else-if="fetchState.error">ошибка...</div>
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
  // useStore,
  // computed,
} from '@nuxtjs/composition-api';

import StoryblokClient from 'storyblok-js-client';

import { STORYBLOK_KEY } from '~/config/config.js';

export default {
  name: 'Home',

  setup(props, context) {
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
          console.log('res.data: ', res.data);

          return res.data;
          // return res.data;
        })
        .catch((err) => {
          console.log(`💣💣💣 - ${err.response}`);
        });

      // todo направления
      directions.value = await Storyblok.get('cdn/stories/', {
        version: 'draft',
        starts_with: 'directions',
      })
        .then((res) => {
          console.log('res.data: Directions ', res.data);

          return res.data;
          // return res.data;
        })
        .catch((err) => {
          console.log(`💣💣💣 - ${err.response}`);
        });

      // todo для карточек
      postsForCards.value = await Storyblok.get('cdn/stories', {
        version: 'draft',
        starts_with: 'posts',
        excluding_fields: 'markdown_block,flex_gallery,grid_gallery',
      })
        .then((res) => {
          console.log('res.data: - Posts preview ', res.data);

          return res.data;
          // return res.data;
        })
        .catch((err) => {
          console.log(`💣💣💣 - ${err.response}`);
        });
    });

    // Manually trigger a refetch
    fetch();

    provide('postsForCards', postsForCards);
    provide('directions', directions);

    /* const data = useAsync(() => {
      return Storyblok.get(`cdn/stories/home`, {
        version: 'draft',
      });
      // console.log('story: ', story);

      // return { story };
      // .then((res) => {
      //     console.log('res: ', res);
      //     // store.dispatch('home/addHome', res.data.story);

      //     return res.data;
      //   })
      //   .catch((err) => console.warn(err));
    });
    console.log('data: ', data);

    const dataComp = computed(() => {
      store.dispatch('home/addHome', data.value);

      return data.value;
    });
    // console.log('Storyblok: ', Storyblok); */

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
