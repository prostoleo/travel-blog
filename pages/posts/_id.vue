<template>
  <div v-if="fetchState.pending">
    <nuxt-loading />
  </div>
  <!--  -->
  <div v-else v-editable="post.story">
    <!-- <pre>
      {{ post }}
    </pre> -->
    <!-- <pre>
      {{ posts }}
    </pre> -->

    <section ref="firstSection" class="first">
      <img
        :src="`${post.story.content.bg.filename}/m/filters:brightness(-40)`"
        alt=""
        class="bg"
      />
      <BaseContainer>
        <div class="content-wrapper">
          <div class="breadcrumbs">
            <nuxt-link to="/" class="breadcrumb-item">
              Главная
              <img src="/icons/shevron.svg" alt="" />
            </nuxt-link>
            <nuxt-link to="/#directions" class="breadcrumb-item">
              Направления
              <img src="/icons/shevron.svg" alt="" />
            </nuxt-link>
            <nuxt-link to="/directions/1" class="breadcrumb-item">
              {{ post.story.content.direction }}
              <img src="/icons/shevron.svg" alt="" />
            </nuxt-link>
            <span class="breadcrumb-item">
              {{ post.story.content.title }}
            </span>
          </div>

          <div class="content-text">
            <h1 class="title">{{ post.story.content.title }}</h1>

            <div class="post-info">
              <div class="post-info__row row">
                <img src="/icons/date.svg" alt="" class="row__img" />
                <span class="row__text">{{ formatDate() }}</span>
              </div>
              <div class="post-info__row row">
                <img src="/icons/author.svg" alt="" class="row__img" />
                <span class="row__text"
                  >Автор, <strong>{{ post.story.content.author }}</strong></span
                >
              </div>
              <div class="post-info__row row">
                <img src="/icons/time.svg" alt="" class="row__img" />
                <span class="row__text"
                  >Время на чтение:
                  <strong>{{ post.story.content.time_to_read }}</strong>
                  мин.</span
                >
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <SectionPostContent :post="post" />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {
  ref,
  watch,
  useFetch,
  useRoute,
  useRouter,
  useContext,
  // useAsync,
  onMounted,
  // useStore,
  // computed,
} from '@nuxtjs/composition-api';

import StoryblokClient from 'storyblok-js-client';
import markdown from 'markdown-it';

import { STORYBLOK_KEY } from '~/config/config.js';

export default {
  name: 'Home',

  setup(props, { root }) {
    const context = useContext();
    console.log('context: ', context);

    console.log('root: ', root);

    const route = useRoute();
    const router = useRouter();
    console.log('router: ', router);
    console.log('route.value.params.id: ', route.value.params.id);

    const postId = route.value.params.id;

    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_KEY,
    });
    console.log('Storyblok: ', Storyblok);

    // const store = useStore();
    const post = ref(null);
    const posts = ref(null);

    const firstSection = ref(null);

    onMounted(() => {
      console.log('firstSection.value: ', firstSection.value);
    });

    const { fetch, fetchState } = useFetch(async () => {
      // data.value = await $axios.$get(
      //   `https://api.storyblok.com/v1/cdn/stories/test?version=draft&token=gmlwyE5LJpGMoSrWXvgA3Att`
      // );
      // data.value = await $storyapi
      post.value = await Storyblok.get(`cdn/stories/posts/${postId}`, {
        version: 'draft',
      })
        .then((res) => {
          console.log('res.data: ', res.data);
          console.log('document: ', document);
          console.log('document.querySelector: ', document.querySelector);

          /* const element = document.querySelector('section.first');

          addBackground(
            element,
            res.data.story.content.bg.filename,
            'hsla(0, 0%, 0%, 0.4)',
            {
              mode: 'darken',
              size: 'cover',
              position: 'center center',
              repeat: 'no-repeat',
            }
          ); */

          return res.data;
        })
        .catch((err) => {
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

      // todo все посты получаем
      /* posts.value = await Storyblok.get('cdn/stories', {
        version: 'draft',
        starts_with: 'posts',
      })
        .then((res) => {
          console.log('res.data: ', res.data);
          return res.data;
        })
        .catch((err) => console.warn(err)); */
    });

    // Manually trigger a refetch
    fetch();

    // todo для добавления нужного фона к изображению
    // eslint-disable-next-line no-unused-vars
    const addBackground = (el, imgPath, colorOverlay, options) => {
      console.log('el: ', el);

      el.style.background = `url(${imgPath}) ${colorOverlay})`;

      el.style.backgroundBlendMode = options?.mode ?? 'darken';

      el.style.backgroundSize = options?.size ?? 'cover';

      el.style.backgroundPosition = options?.position ?? 'center center';

      el.style.backgroundRepeat = options?.repeat ?? 'no-repeat';
    };

    watch(fetchState, (val, oldVal) => {
      console.log({ val, oldVal });

      /* if (val !== oldVal && !val.pending && !val.error) {
        // console.log(' зашел ! ');

        addBackground(
          firstSection,
          post.value.story.content.bg.filename,
          'hsla(0, 0%, 0%, 0.4)',
          {
            mode: 'darken',
            size: 'cover',
            position: 'center center',
            repeat: 'no-repeat',
          }
        );
      } */
    });

    // todo для форматирования даты поста
    const formatDate = (date) => {
      return new Intl.DateTimeFormat(navigator.locale, {
        weekday: 'short',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      }).format(date);
    };

    return {
      post,
      posts,
      fetch,
      fetchState,

      formatDate,

      markdown,

      firstSection,
    };
  },
};
</script>

<style lang="scss" scoped>
section.first {
  /* background: url(/img/post-bg/magadan-cover.jpg) $overlay;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; */

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 125, 175);

  position: relative;
  z-index: 1;

  img.bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    z-index: -1;
    isolation: isolate;

    // filter: brightness(0.5);

    /* &::before {
      content: '';
      position: absolute;

      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      width: 100%;
      height: 100%;

      background: hsla(0, 0%, 0%, 0.4);
      mix-blend-mode: darken;
      z-index: 1;
    } */
  }

  .content-wrapper {
    .breadcrumbs {
      display: flex;
      align-items: center;

      flex-wrap: wrap;

      gap: 0.5em;

      .breadcrumb-item {
        display: inline-flex;
        align-items: center;

        gap: 0.2em;

        @include adaptive-value-min-max(font-size, 12, 16);

        color: $text-light;

        padding: 0.25em 0;

        & > img {
          display: inline;
          @include adaptive-value-min-max(width, 12, 16);
        }
      }

      a.breadcrumb-item {
        position: relative;

        &::before {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          right: 0;

          width: 100%;
          @include adaptive-value-min-max(height, 1, 3);

          background: $text-light;

          transform: scaleX(0);
          transform-origin: left center;
          transition: all 200ms ease-in-out;
        }

        &:hover::before,
        &:focus::before {
          transform: scaleX(1);
        }
      }
    }

    .content-text {
      margin: 0 auto;
      margin-top: 3em;

      h1.title {
        @include adaptive-value-min-max(font-size, 32, 64);

        color: $title-light;
        text-align: center;

        margin-bottom: 1.5em;
      }

      .post-info {
        display: flex;
        flex-direction: column;

        gap: 2em;

        // .post-info__row

        &__row {
          display: inline-flex;
          align-items: center;
          width: max-content;

          gap: 1.5em;

          opacity: 0.85;
        }
      }
      .row {
        // .row__img

        &__img {
          @include adaptive-value-min-max(width, 16, 20);
        }

        // .row__text

        &__text {
          @include adaptive-value-min-max(font-size, 14, 18);

          color: $text-light;
        }
      }
    }
  }
}
</style>
