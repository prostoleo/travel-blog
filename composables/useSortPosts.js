/* eslint-disable no-unused-vars */
import { reactive, computed, useStore, ref } from '@nuxtjs/composition-api';

const useSortPosts = () => {
  const store = useStore();

  const sortInfo = reactive({
    alphabet: false,
    alphabetReverse: false,
    dateUp: false,
    dateDown: false,
  });

  //* то что передадим - отсортированные
  const sorted = ref(null);

  const postsToSort = computed(() => {
    return store.getters.getPostsPagePosts ?? store.getters.getAllPosts;
  });

  function returnToFalse() {
    console.log('sortInfo: ', sortInfo);
    // console.log('Object.entries(sortInfo): ', Object.entries(sortInfo));

    Object.entries(sortInfo).forEach(([key, val]) => {
      // console.log('{key, val}: ', { key, val });
      // console.log('s: ', s);
      // console.log('sortInfo[s]: ', sortInfo[s]);
      sortInfo[key] = false;
    });
  }

  function handleSortPosts(event) {
    const target = event.target.closest('.filter__btn');

    if (!target) return;

    let nextVal = null;

    switch (target.id) {
      case 'btn-alphabet-up':
        nextVal = !sortInfo.alphabet;

        returnToFalse();
        sortInfo.alphabet = nextVal;
        sortPosts(postsToSort);

        break;
      case 'btn-alphabet-reverse':
        nextVal = !sortInfo.alphabetReverse;
        returnToFalse();
        sortInfo.alphabetReverse = nextVal;
        sortPosts(postsToSort);

        break;
      case 'btn-date-up':
        nextVal = !sortInfo.dateUp;
        returnToFalse();
        sortInfo.dateUp = nextVal;
        sortPosts(postsToSort);

        break;
      case 'btn-date-down':
        nextVal = !sortInfo.dateDown;
        returnToFalse();
        sortInfo.dateDown = nextVal;
        sortPosts(postsToSort);

        break;

      default:
        break;
    }
  }

  function sortPosts(posts) {
    console.log('posts.value: ', posts.value);

    // eslint-disable-next-line prefer-const
    // let sorted = null;
    // console.log('sorted: ', sorted);

    console.log('sorted.value: ', sorted.value);

    if (sortInfo.alphabet) {
      sorted.value = posts.value.sort((a, b) => {
        // console.log('a.content.title: ', a.content.title);
        // console.log('b.content.title: ', b.content.title);
        console.log(
          'b.content.title.localeCompare(b.content.title): ',
          b.content.title.localeCompare(a.content.title)
        );

        return a.content.title.localeCompare(b.content.title);
      });
    }
    if (sortInfo.alphabetReverse) {
      sorted.value = posts.value.sort((a, b) =>
        b.content.title.localeCompare(a.content.title)
      );
    }
    if (sortInfo.dateUp) {
      sorted.value = posts.value.sort(
        (a, b) =>
          +new Date(a.first_published_at ?? a.created_at) -
          +new Date(b.first_published_at ?? a.created_at)
      );
    }
    if (sortInfo.dateDown) {
      sorted.value = posts.value.sort(
        (a, b) =>
          +new Date(b.first_published_at ?? a.created_at) -
          +new Date(a.first_published_at ?? a.created_at)
      );
    }
    console.log('sorted: ', sorted);

    // sortedPosts.value = sorted;
    // store.dispatch('addPostsPagePosts', sorted.value);
    return sorted;
  }

  // const sortedPosts = computed(() => sortPosts(postsToSort));

  return {
    sortInfo,
    handleSortPosts,
    sorted,
    // sortedPosts,
  };
};

export default useSortPosts;
