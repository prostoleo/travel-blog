import { ref, useStore, computed } from '@nuxtjs/composition-api';

const useSearchPosts = () => {
  //* поисковый запрос
  const searchQuery = ref(null);

  //* хранилище
  const store = useStore();

  //* все посты
  const allPosts = computed(() => store.getters.getAllPosts);

  // ! срабатывает когда не нужно - переделать по функцию !
  //* computed property для извлечения нужных постов в зависимости от searchQuery
  const searchedPosts = computed(() => {
    console.log('searchQuery.value: ', searchQuery.value);
    if (!searchQuery.value) {
      return;
      // return allPosts;
    }
    console.log('allPosts: ', allPosts);

    const postsToQuery = allPosts?.value?.slice().filter((post) => {
      // console.log('post: ', post);

      return post.content.title
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    });

    console.log('postsToQuery: ', postsToQuery);
    // store.dispatch('addPostsPagePosts', postsToQuery);

    return postsToQuery;
  });

  //* для отображения подзаголовка постов
  const postsTitle = computed(() => {
    if (!searchQuery.value) {
      return {
        title: `Все посты`,
        query: '',
      };
    }
    console.log('searchedPosts: ', searchedPosts);

    if (searchQuery.value && searchedPosts.value.length === 0) {
      return {
        title: `Ничего не удалось найти по запросу: `,
        query: searchQuery.value,
      };
    }

    if (searchQuery.value) {
      return {
        title: `Посты по запросу: `,
        query: searchQuery.value,
      };
    }
  });

  return {
    searchQuery,
    postsTitle,
    searchedPosts,
    // searchPost,
  };
};

export default useSearchPosts;
