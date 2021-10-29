import { ref } from '@nuxtjs/composition-api';

export default function () {
  const isImageShowing = ref(false);
  const imgSrc = ref('');

  const body = document.querySelector('body');
  console.log('body: ', body);
  const header = document.querySelector('header.header');

  function openImage(event) {
    console.log('event: ', event);

    const target = event.target.closest('.full-img');
    console.log('target: ', target);

    if (!target) return;

    console.log('target: ', target);

    // body.classList.add('lock');
    header.classList.add('d-none');

    imgSrc.value = target.src;
    isImageShowing.value = true;
  }

  function closeDialog() {
    // body.classList.remove('lock');
    header.classList.remove('d-none');

    isImageShowing.value = false;
  }

  return {
    isImageShowing,
    imgSrc,
    openImage,
    closeDialog,
  };
}
