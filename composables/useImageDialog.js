import { ref, computed } from '@nuxtjs/composition-api';

export default function () {
  const isImageShowing = ref(false);
  const imgSrc = ref('');

  // const header = document.querySelector('header.header');

  function openImage(event) {
    const target = event.target.closest('img');

    if (!target) return;

    // header.classList.add('d-none');

    imgSrc.value = target.src;
    isImageShowing.value = true;
  }

  function closeDialog() {
    // header.classList.remove('d-none');

    isImageShowing.value = false;
  }

  const isImageShowingComp = computed(() => isImageShowing.value);

  return {
    isImageShowing,
    isImageShowingComp,
    imgSrc,
    openImage,
    closeDialog,
  };
}
