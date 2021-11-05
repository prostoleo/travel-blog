<template>
  <div v-if="fetchState.pending">
    <nuxt-loader />
  </div>
  <div v-else>
    <SectionDirectionsFirst :direction="direction" />
    <SectionDirectionsSecond :posts="postsForCards" />
  </div>
</template>

<script>
import { ref, useFetch, useRoute, useRouter } from '@nuxtjs/composition-api';

import StoryblokClient from 'storyblok-js-client';

import { STORYBLOK_KEY } from '~/config/config.js';

export default {
  name: 'Home',

  setup(props, context) {
    // const store = useStore();
    const route = useRoute();
    console.log('route: ', route);
    console.log('route.path.slice(1): ', route.value.path.slice(1));

    const router = useRouter();

    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_KEY,
    });

    // const store = useStore();
    // const data = ref(null);
    const direction = ref(null);
    const postsForCards = ref(null);

    const { fetch, fetchState } = useFetch(async () => {
      /* data.value = await Storyblok.get('cdn/stories/', {
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
        }); */

      // todo направления
      direction.value = await Storyblok.get('cdn/stories/', {
        version: 'draft',
        starts_with: 'directions/',
        by_slugs: route.value.path.slice(1),

        // resolve_relations: 'group_id',
        resolve_relations: 'posts',
      })
        .then((res) => {
          // console.log('res.data: Directions ', res.data);

          console.log('res.data.stories[0]: Direction', res.data.stories[0]);

          /* if (res.data.stories[0].length === 0)
            error({ statusCode: '404', message: 'post ' }); */

          return res.data.stories[0];
          // return res.data;
        })
        .catch((err) => {
          console.log(`💣💣💣 - ${err.response}`);

          // todo если нет такого поста - перекидываем на страницу с ошибкой
          // eslint-disable-next-line
          if (err.response.status === 404) {
            router.replace({
              path: '/error',
              name: 'NotFound',
              params: { notFound: 'not-found' },
            });
            // context.redirect(err.status, '/not-found');
            console.log('404 !');
          }

          // err({ statusCode: '404', message: 'post ' });
        });

      // todo для карточек
      postsForCards.value = await Storyblok.get('cdn/stories', {
        version: 'draft',
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
          console.log('res.data.stories: - Posts preview ', res.data.stories);

          return res.data.stories;
          // return res.data;
        })
        .catch((err) => {
          console.log(`💣💣💣 - ${err.response}`);

          console.log('err.response: ', err.response);

          // todo если нет такого поста - перекидываем на страницу с ошибкой
          // eslint-disable-next-line
          if (err.response.status == 404) {
            router.replace({
              path: '/error',
              name: 'NotFound',
              params: { notFound: 'not-found' },
            });
            /* context.redirect(err.status, '/not-found'); */
            console.log('404 !');
          }
        });
    });

    // Manually trigger a refetch
    fetch();

    // provide('postsForCards', postsForCards);
    // provide('directions', directions);

    return {
      // data,
      direction,
      postsForCards,

      fetch,
      fetchState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
