<template>
  <div v-if="fetchState.pending"></div>
  <div v-else>
    <section class="first">
      <BaseContainer>
        <div class="content-wrapper">
          <div class="breadcrumbs">
            <nuxt-link to="/" class="breadcrumb-item">
              Главная
              <img src="/icons/shevron.svg" alt="" />
            </nuxt-link>
            <span class="breadcrumb-item"> Все посты </span>
          </div>

          <div class="content-text">
            <h1 class="title">Посты</h1>

            <p class="text">Здесь вы найдете все посты</p>
          </div>

          <div class="search-filter__wrapper">
            <div class="search__block search">
              <input
                id="search-input"
                v-model="searchQuery"
                class="search__input"
                type="search"
              />
              <!-- @input="searchPost" -->
              <label
                for="search-input"
                class="search__label"
                :class="searchQuery && searchQuery.length > 0 ? 'active' : ''"
                >Поиск...</label
              >
              <!-- <button class="btn search__btn">
                <img src="/icons/search.svg" alt="" />
              </button> -->
            </div>

            <div class="filter__block filter" @click="handleSortPosts">
              <button
                id="btn-alphabet-up"
                class="btn filter__btn"
                :class="{ active: !!sortInfo.alphabet }"
              >
                <img src="/icons/alphabet.svg" alt="" />
              </button>
              <button
                id="btn-alphabet-reverse"
                class="btn filter__btn"
                :class="{ active: !!sortInfo.alphabetReverse }"
              >
                <img src="/icons/alphabet-reverse.svg" alt="" />
              </button>
              <button
                id="btn-date-down"
                class="btn filter__btn"
                :class="{ active: !!sortInfo.dateDown }"
              >
                <img src="/icons/date.svg" alt="" />
                <img src="/icons/arrow-slim.svg" alt="" />
              </button>
              <button
                id="btn-date-up"
                class="btn filter__btn"
                :class="{ active: !!sortInfo.dateUp }"
              >
                <img src="/icons/date.svg" alt="" />
                <img src="/icons/arrow-slim.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="second">
      <BaseContainer>
        <h2 class="title">
          {{ postsTitle.title }}
          <span v-if="postsTitle.query" class="hightlight">
            {{ postsTitle.query }}
          </span>
        </h2>
        <div class="content">
          <!-- v-for="post in postsToShow" -->
          <BaseCard
            v-for="post in contentToShow.value || contentToShow"
            :key="post.id"
            :card-data="post"
          />
        </div>
        <!-- <pre>
            {{ contentToShow }}
        </pre> -->
      </BaseContainer>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {
  computed,
  // reactive,
  ref,
  // toRef,
  // toRefs,
  useFetch,
  useStore,
} from '@nuxtjs/composition-api';

import StoryblokClient from 'storyblok-js-client';

import { STORYBLOK_KEY } from '~/config/config.js';

import useSearchPosts from '~/composables/useSearchPosts.js';
import useSortPosts from '~/composables/useSortPosts.js';

export default {
  name: 'Home',

  setup(props, { root }) {
    const store = useStore();
    const Storyblok = new StoryblokClient({
      accessToken: STORYBLOK_KEY,
    });

    const posts = ref(null);

    // const sortedPosts = ref(null);

    const { fetch, fetchState } = useFetch(async () => {
      // data.value = await $axios.$get(
      //   `https://api.storyblok.com/v1/cdn/stories/test?version=draft&token=gmlwyE5LJpGMoSrWXvgA3Att`
      // );
      // data.value = await $storyapi
      posts.value = await Storyblok.get(`cdn/stories`, {
        version: 'draft',
        starts_with: 'posts',
        // resolve_relations: 'Post.direction_info',
      })
        .then((res) => {
          // console.log('res.data.stories: ', res.data.stories);
          // store.dispatch('addPostsPagePosts', res.data.stories);
          store.dispatch('addAllPosts', res.data.stories);

          return res.data.stories;
        })
        .catch((err) => {
          console.log('err.response: ', err.response);

          // todo если нет такого поста - перекидываем на страницу с ошибкой
          // eslint-disable-next-line
          /* if (err.response.status == 404) {
            router.replace({
              path: '/error',
              name: 'NotFound',
              params: { notFound: 'not-found' },
            });
            // context.redirect(err.status, '/not-found');
            console.log('404 !');
          } */
        });
    });

    // Manually trigger a refetch
    fetch();

    // ==========================
    // todo функционал поиска
    /* const searchQuery = ref(null);

    const postsToShow = computed(() => {
      // console.log('searchQuery.value: ', searchQuery.value);
      // const postsFromStore = store.getters.getPostsPagePosts;
      const postsFromStore = store.getters.getAllPosts;
      console.log('postsFromStore: ', postsFromStore);

      if (searchQuery.value) {
        // return
        const postsToShowLocal = postsFromStore.filter((story) => {
          console.log('story: ', story);
          return story.content.title
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
          // return (
          //   story.content.title
          //     .toLowerCase()
          //     .includes(searchQuery.value.toLowerCase()) ||
          //   story.content.preview_text
          //     .toLowerCase()
          //     .includes(searchQuery.value.toLowerCase())
          // );
        });
        console.log('postsToShowLocal: ', postsToShowLocal);

        // if (postsToShowLocal.length > 0) {
        //   store.dispatch('addPostsPagePosts', postsToShowLocal);
        //   return postsToShowLocal;
        // }

        store.dispatch('addPostsPagePosts', postsToShowLocal);
      }
      // store.dispatch('addPostsPagePosts', postsFromStore);

      return postsFromStore;
    });

    const postsTitle = computed(() => {
      if (searchQuery.value) {
        return {
          title: `Посты по запросу: `,
          query: searchQuery.value,
        };
      }

      if (searchQuery.value && postsToShow.length === 0) {
        return {
          title: `Ничего не удалось найти по запросу: `,
          query: searchQuery.value,
        };
      }

      return {
        title: `Все посты`,
        query: '',
      };
    }); */

    //* сортировка
    /* const sortInfo = reactive({
      alphabet: false,
      alphabetReverse: false,
      dateUp: false,
      dateDown: true,
    });

    function returnToFalse() {
      console.log('sortInfo: ', sortInfo);
      console.log('Object.entries(sortInfo): ', Object.entries(sortInfo));

      Object.entries(sortInfo).forEach(([key, val]) => {
        console.log('{key, val}: ', { key, val });
        // console.log('s: ', s);
        // console.log('sortInfo[s]: ', sortInfo[s]);
        sortInfo[key] = false;
      });
    }

    function sortPosts(event) {
      const target = event.target.closest('.filter__btn');

      if (!target) {
        return;
      }

      console.log('target: ', target);

      let nextVal;

      switch (target.id) {
        case 'btn-alphabet-up':
          nextVal = !sortInfo.alphabet;

          returnToFalse();
          sortInfo.alphabet = nextVal;
          funcSortPosts(postsToShow);

          break;
        case 'btn-alphabet-reverse':
          nextVal = !sortInfo.alphabetReverse;
          returnToFalse();
          sortInfo.alphabetReverse = nextVal;
          funcSortPosts(postsToShow);

          break;
        case 'btn-date-up':
          nextVal = !sortInfo.dateUp;
          returnToFalse();
          sortInfo.dateUp = nextVal;
          funcSortPosts(postsToShow);

          break;
        case 'btn-date-down':
          nextVal = !sortInfo.dateDown;
          returnToFalse();
          sortInfo.dateDown = nextVal;
          funcSortPosts(postsToShow);

          break;

        default:
          break;
      }
    }

    // eslint-disable-next-line no-unused-vars
    const funcSortPosts = () => {
      // console.log('postsToSort: ', postsToSort);
      // let sorted = toRefs(postsToSort.value.slice());
      const postsFromStore =
        store.getters.getPostsPagePosts ?? store.getters.getAllPosts;
      console.log('postsFromStore: ', postsFromStore);

      // eslint-disable-next-line prefer-const
      let sorted = null;
      console.log('sorted: ', sorted);

      if (sortInfo.alphabet) {
        sorted = postsFromStore.slice().sort((a, b) => {
          console.log('a.content.title: ', a.content.title);
          console.log('b.content.title: ', b.content.title);
          console.log(
            'b.content.title.localeCompare(b.content.title): ',
            b.content.title.localeCompare(a.content.title)
          );

          return a.content.title.localeCompare(b.content.title);
        });
      }
      if (sortInfo.alphabetReverse) {
        sorted = postsFromStore
          .slice()
          .sort((a, b) => b.content.title.localeCompare(a.content.title));
      }
      if (sortInfo.dateUp) {
        sorted = postsFromStore
          .slice()
          .sort(
            (a, b) =>
              +new Date(a.first_published_at ?? a.created_at) -
              +new Date(b.first_published_at ?? a.created_at)
          );
      }
      if (sortInfo.dateDown) {
        sorted = postsFromStore
          .slice()
          .sort(
            (a, b) =>
              +new Date(b.first_published_at ?? a.created_at) -
              +new Date(a.first_published_at ?? a.created_at)
          );
      }
      console.log('sorted: ', sorted);

      // sortedPosts.value = sorted;
      store.dispatch('addPostsPagePosts', sorted);
      // return sorted;
    }; */

    // eslint-disable-next-line no-unused-vars
    const { searchQuery, postsTitle, searchedPosts } = useSearchPosts();

    // eslint-disable-next-line no-unused-vars
    const { sortInfo, handleSortPosts, sortedPosts, sorted } = useSortPosts();

    const contentToShow = computed(() => {
      // console.log('sortedPosts: ', sortedPosts);
      // console.log('postsToShow: ', postsToShow);
      /* console.log(
        'store.getters.getPostsPagePosts: ',
        store.getters.getPostsPagePosts
      ); */
      // return store.getters.getPostsPagePosts ?? store.getters.getAllPosts;

      /* console.log('sortedPosts.value.length: ', sortedPosts.value.length);
      if (sortedPosts?.value?.length > 0) {
        return sortedPosts;
      } */

      if (!searchQuery.value) return store.getters.getAllPosts;
      return searchedPosts;
      // return
      // return sorted;
      // return store.getters.getPostsPagePosts;
    });

    return {
      fetch,
      fetchState,

      posts,
      // postsToShow: sortedPosts?.value?.length > 0 ? sortedPosts : postsToShow,
      contentToShow,
      // postsToShow,
      // contentToShow,
      postsTitle,

      // searchPost,
      searchQuery,

      sortInfo,
      handleSortPosts,
    };
  },
};
</script>

<style lang="scss" scoped>
section.first {
  background: url(/img/all-posts-bg/bg.jpg) $overlay;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 125, 175);

  position: relative;
  z-index: 1;

  .content-wrapper {
    .breadcrumbs {
      display: flex;
      align-items: center;

      gap: 0.5em;

      flex-wrap: wrap;

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

        margin-bottom: 0.5em;
      }

      p.text {
        max-width: 65ch;

        margin: 0 auto;
        text-align: center;

        @include adaptive-value-min-max(font-size, 14, 16);

        color: $text-light;
        line-height: 160%;
      }
    }
  }

  .search-filter {
    // .search-filter__wrapper

    &__wrapper {
      @include adaptive-value-min-max(margin-top, 45, 65);
      margin-left: auto;

      display: flex;

      flex-direction: column;

      align-items: flex-end;
      justify-content: flex-end;

      gap: 1.5em;

      // flex-wrap: wrap;
    }
  }
  .search {
    --padding-y: 0.75em;
    --padding-x: 1.5em;

    // .search__block

    &__block {
      position: relative;
    }

    // .search__input

    &__input {
      padding: var(--padding-y) var(--padding-x);
      padding-right: calc(var(--padding-x) * 1.5);
      padding-left: calc(var(--padding-x) / 1.5);
      background: transparent;

      border: none;
      border-bottom: 1px solid $text-light;

      color: $text-light;

      display: block;
      position: relative;

      @include adaptive-value-min-max(font-size, 14, 18);

      &:focus + label {
        transform: translate(-20%, -175%);
        opacity: 1;
      }

      &:focus {
        outline: 1px solid $primary-opacity60;
      }
    }

    // .search__label

    &__label {
      position: absolute;

      top: 50%;
      left: calc(var(--padding-x) / 1.5);

      transform: translate(0%, -50%);

      @include adaptive-value-min-max(font-size, 14, 18);
      color: $text-light;
      opacity: 0.8;

      transition: all 150ms ease-in-out;

      &.active {
        transform: translate(-20%, -175%);
        opacity: 0.8;
      }
    }

    // .search__btn

    &__btn {
      position: absolute;

      right: 0;
      top: 50%;

      transform: translate(0%, -50%);

      width: calc(var(--padding-x) * 1.5);
    }
  }
  .filter {
    // .filter__block

    &__block {
      display: flex;
      align-items: stretch;

      gap: 0.5em;

      & img {
        @include adaptive-value-min-max(width, 17, 25);
        @include adaptive-value-min-max(height, 17, 25);
        // width: 1.75em;
        // height: 1.75em;
      }
    }

    // .filter__btn

    &__btn {
      display: inline-flex;
      align-items: center;

      gap: 0.25em;

      padding: 0.5em;

      // border-radius: 50%;
      // border: 1px solid $text-light;
      position: relative;

      &:last-of-type img:last-of-type {
        transform: rotate(180deg);
      }

      &:hover,
      &:focus {
        opacity: 0.7;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        border: 1px solid $text-light;

        opacity: 0.6;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        border: 1px solid $text-light;

        z-index: -1;
        background: $primary-opacity60;

        opacity: 0;
      }

      &.active::before {
        opacity: 0.7;
      }
    }
  }
}

section.second {
  // @include adaptive-value-min-max(padding-top, 45, 75);
  @include adaptive-value-min-max(padding-bottom, 45, 75);

  @include adaptive-value-min-max(margin-top, -105, -145);

  position: relative;
  z-index: 2;

  h2.title {
    @include adaptive-value-min-max(font-size, 18, 32);

    color: $text-light;
    font-weight: 600;

    margin-bottom: 0.85em;

    span.hightlight {
      font-style: italic;
      font-weight: 500;
      line-height: 1;
      background: rgb(195, 172, 40);

      padding: 0.15em;
    }

    &:before {
      display: none;
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
    gap: 3rem;
  }
}
</style>
