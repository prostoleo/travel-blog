<template>
  <p v-if="fetchState.pending">ожидание...</p>
  <p v-else-if="fetchState.error">ошибка...</p>
  <div v-else>
    <button @click="fetch">refetch</button>
    <!-- <pre>
      {{ data }}
    </pre> -->
    <SectionHero :hero-data="data.story.content.hero_page[0]" />
    <SectionNew />
    <SectionDirections />
    <SectionAbout :about-data="data.story.content.hero_page[1]" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {
  ref,
  useFetch,
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

    const { fetch, fetchState } = useFetch(async () => {
      // data.value = await $axios.$get(
      //   `https://api.storyblok.com/v1/cdn/stories/test?version=draft&token=gmlwyE5LJpGMoSrWXvgA3Att`
      // );
      // data.value = await $storyapi
      data.value = await Storyblok.get('cdn/stories/', {
        version: 'draft',
      })
        .then((res) => {
          console.log('res.data: ', res.data);
          return res.data;
        })
        .catch((err) => console.warn(err));
    });

    // Manually trigger a refetch
    fetch();

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
      fetch,
      fetchState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
