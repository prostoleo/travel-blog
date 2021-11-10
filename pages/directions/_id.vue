<template>
  <div v-if="fetchState.pending">
    <nuxt-loader name="cube-loader" />
  </div>
  <div v-else>
    <SectionDirectionsFirst :direction="direction" />
    <SectionDirectionsSecond :posts="postsForCards" />
  </div>
</template>

<script>
import { ref, useFetch, useRoute, useRouter } from '@nuxtjs/composition-api';

import StoryblokClient from 'storyblok-js-client';

// import { STORYBLOK_KEY } from '~/config/config.js';

export default {
  name: 'Home',

  setup(props, context) {
    const route = useRoute();

    const router = useRouter();

    const Storyblok = new StoryblokClient({
      // accessToken: STORYBLOK_KEY,
      accessToken: process.env.STORYBLOK_KEY,
    });

    const direction = ref(null);
    const postsForCards = ref(null);

    const { fetch, fetchState } = useFetch(async () => {
      // todo направления
      direction.value = await Storyblok.get('cdn/stories/', {
        // version: 'draft',
        version: 'published',
        starts_with: 'directions/',
        by_slugs: route.value.path.slice(1),

        resolve_relations: 'posts',
      })
        .then((res) => {
          return res.data.stories[0];
        })
        .catch((err) => {
          console.warn(`💣💣💣 - ${err.response}`);

          // todo если нет такого поста - перекидываем на страницу с ошибкой
          if (err.response.status === 404) {
            router.replace({
              path: '/error',
              name: 'NotFound',
              params: { notFound: 'not-found' },
            });
          }
        });

      // todo для карточек
      postsForCards.value = await Storyblok.get('cdn/stories', {
        // version: 'draft',
        version: 'published',
        starts_with: 'posts/',
        excluding_fields: 'markdown_block,flex_gallery,grid_gallery',
        filter_query: {
          direction_info: {
            in: direction.value.uuid,
          },
        },

        resolve_relations: 'Post.direction_info',
        // search_term: direction.value.content.title,
      })
        .then((res) => {
          return res.data.stories;
          // return res.data;
        })
        .catch((err) => {
          console.warn(`💣💣💣 - ${err.response}`);

          // todo если нет такого поста - перекидываем на страницу с ошибкой
          // eslint-disable-next-line
          if (err.response.status == 404) {
            router.replace({
              path: '/error',
              name: 'NotFound',
              params: { notFound: 'not-found' },
            });
          }
        });
    });

    // Manually trigger a refetch
    fetch();

    return {
      direction,
      postsForCards,

      fetch,
      fetchState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
