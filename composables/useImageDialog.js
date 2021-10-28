import { ref } from '@nuxtjs/composition-api';

export default function () {
  const isImageShowing = ref(false);
  const imgSrc = ref('');

  function openImage(event) {
    console.log('event: ', event);

    const target = event.target.closest('.full-img');

    if (!target) return;

    console.log('target: ', target);
    imgSrc.value = target.src;
    isImageShowing.value = true;
  }

  function closeDialog() {
    isImageShowing.value = false;
  }

  return {
    isImageShowing,
    imgSrc,
    openImage,
    closeDialog,
  };
}
