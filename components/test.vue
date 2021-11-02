<template>
  <div>
    <!-- {{ data.story.content }} -->
    <div v-if="$fetchState.pending">ожидание...</div>
    <div v-else-if="$fetchState.error">ошибка...</div>
    <div v-else>
      <h1>{{ data.story.content.title }}</h1>
      <p>{{ data.story.content.description }}</p>
      <img :src="data.story.content.image.filename" alt="" width="300" />
    </div>
    <!-- <pre>
      {{ data.story }}
    </pre> -->
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, useFetch, useContext, onMounted } from '@nuxtjs/composition-api';

import StoryblokClient from 'storyblok-js-client';

import { STORYBLOK_KEY } from '~/config/config.js';

export default {
  setup(props, context) {
    // eslint-disable-next-line no-unused-vars
    const { $axios, $storyblokbridge, $storyapi } = useContext();

    // const storyBlokInstance = new $storyblokbridge;

    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_KEY,
    });
    // console.log('Storyblok: ', Storyblok);

    const data = ref('');

    const { fetch, fetchState } = useFetch(async () => {
      /* data.value = await $axios.$get(
        `https://api.storyblok.com/v1/cdn/stories/test?version=draft&token=gmlwyE5LJpGMoSrWXvgA3Att`
      ); */
      // data.value = await $storyapi
      data.value = await Storyblok.get('cdn/stories/test', {
        version: 'draft',
      })
        .then((res) => res.data)
        .catch((err) => console.warn(err));
    });

    // Manually trigger a refetch
    fetch();

    return { data, fetchState };
  },
};
</script>

<style lang="scss" scoped></style>
