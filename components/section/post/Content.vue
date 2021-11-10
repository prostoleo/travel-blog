<template>
  <div class="post-container">
    <section v-if="post.story.content.markdown_block" class="first">
      <BaseContainer>
        <div
          v-for="(
            markdown_item, index
          ) in post.story.content.markdown_block.slice(0, 3)"
          :key="index"
          class="text-wrapper"
          @click="openImage"
          v-html="markdown().render(markdown_item.markdown)"
        ></div>
      </BaseContainer>
    </section>

    <div class="grid-gallery">
      <img
        v-for="(gallery_item, index) in post.story.content.grid_gallery"
        :id="`gallery-item-${index + 1}`"
        :key="index"
        class="grid-gallery__item full-img"
        :src="`${gallery_item.image.filename}/m/filters:quality(75)`"
        width="570"
        @click="openImage"
      />
    </div>

    <section class="second">
      <BaseContainer v-if="post.story.content.markdown_block">
        <div
          v-for="(
            markdown_item, index
          ) in post.story.content.markdown_block.slice(3)"
          :key="index"
          class="text-wrapper"
          @click="openImage"
          v-html="markdown().render(markdown_item.markdown)"
        ></div>
      </BaseContainer>

      <div id="flex-gallery-1" class="flex-gallery">
        <div
          v-for="(gallery_item, index) in post.story.content.flex_gallery"
          ref="flexGalleryItem"
          :key="index"
          class="flex-gallery__item"
          :class="index === 3 ? 'active' : ''"
          @click="setActiveSlide"
        >
          <div
            class="img"
            :style="`background-image: url(${gallery_item.image.filename}/m/)`"
          >
            <h3 class="flex-gallery__title">
              {{ gallery_item.title }}
            </h3>
          </div>
        </div>
      </div>
    </section>
    <BaseImageDialog
      v-if="isImageShowingComp"
      :image-src="imgSrc"
      @close-dialog="closeDialog"
    />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, computed, onMounted } from '@nuxtjs/composition-api';
import markdown from 'markdown-it';
import useImageDialog from '~/composables/useImageDialog.js';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  setup() {
    // const flexGalleryItem = ref([]);
    const sliderEl1 = ref(null);
    const slidesEls1 = ref(null);

    const setActiveSlide = (event) => {
      slidesEls1.value.forEach((item) => item.classList.remove('active'));

      const { target } = event;

      target.closest('.flex-gallery__item').classList.add('active');
    };

    onMounted(() => {
      sliderEl1.value = document.querySelector('.flex-gallery');

      slidesEls1.value = document.querySelectorAll('.flex-gallery__item');
    });

    // todo для диалогового окна для изображений
    const {
      isImageShowing,
      isImageShowingComp,
      imgSrc,
      openImage,
      closeDialog,
    } = useImageDialog();

    return {
      setActiveSlide,

      isImageShowing,
      isImageShowingComp,
      imgSrc,
      openImage,
      closeDialog,

      markdown,
    };
  },
};
</script>

<style lang="scss" scoped>
/* .post-container {
  @include mq(lg) {
    @include adaptive-value-min-max(padding-bottom, 45, 105);
  }
} */

img {
  cursor: pointer;
}

img.full-img {
  // max-height: 55rem;
  // max-width: 150rem;
  // width: 100%;

  // max-height: 90vh;

  object-fit: cover;

  margin: 0 auto;

  @include mq(lg) {
    height: 100%;
  }
}

img.mah-55r {
  max-height: 55rem !important;
}

.grid-gallery {
  padding: 0 1rem;
  @include adaptive-value-min-max(margin-top, 25, 45);
  // max-width: 1920px;
  width: 100%;

  display: flex;
  // align-items: center;
  gap: 1rem;

  overflow-x: auto !important;

  max-height: 30rem;

  @include mq(lg) {
    display: grid;
    max-height: unset !important;

    grid-template-columns: repeat(auto-fit, 27rem);
    // grid-template-rows: repeat(2, 20rem);
    gap: 3rem;
    overflow-x: unset !important;

    justify-content: center;
  }

  @include mq(xlg) {
    grid-template-columns: repeat(4, 27rem);
    grid-template-rows: repeat(2, auto);

    &__item {
      width: 100% !important;
      height: 100% !important;
      flex-grow: unset;
      flex-shrink: unset;
      flex-basis: unset;
    }

    #gallery-item-1 {
      // grid-area: 1 / 2 / 1 / 3;
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
    #gallery-item-2 {
      // grid-area: a;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    #gallery-item-3 {
      // grid-area: a;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    #gallery-item-4 {
      // grid-area: a;
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
    #gallery-item-5 {
      // grid-area: a;
      grid-column: 4 / 5;
      grid-row: 1 / 3;
    }
  }

  &__item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 40rem;

    object-fit: cover;
    @include adaptive-value-min-max(width, 250, 400);
    // max-width: 40rem;
  }
}

.flex-gallery {
  // max-width: 100%;
  display: flex;
  // flex-direction: column;

  overflow-x: auto !important;

  height: 100%;
  max-height: 50rem;

  gap: 1.5rem;
  // margin-top: 2em;
  margin: 2em auto 0 auto;

  &__item {
    /* width: 100%;
    max-width: 47%;
    flex: 1 0 47%; */
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 75%;

    /* object-fit: cover;
    @include adaptive-value-min-max(width, 250, 400); */

    & > .img {
      @include adaptive-value-min-max(height, 200, 500);

      background-color: $overlay;
      background-blend-mode: darken;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;

      /* display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      padding-bottom: 20%;
      padding-left: 10%; */

      position: relative;
    }
  }

  &__title {
    position: absolute;
    bottom: 20%;
    left: 10%;

    @include adaptive-value-min-max(font-size, 14, 18);
    font-weight: 600;

    color: $text-light;
    // opacity: 0;

    width: max-content;
  }

  @include mq(lg) {
    overflow-x: hidden !important;
    justify-content: space-between !important;
    gap: 1rem !important;

    &__item {
      flex: 1;
      object-fit: cover;
      cursor: pointer;
      transition: flex 400ms ease-in-out;

      max-width: unset;

      &.active {
        flex: 10;

        h3.flex-gallery__title {
          opacity: 1;
        }
      }
    }

    &__title {
      opacity: 0;

      transition: opacity 250ms ease-in-out !important;
    }
  }
}

section {
  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 35, 55);

  .text-wrapper {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;

    @include adaptive-value-min-max(padding, 15, 25);
    padding-bottom: 0;

    background: $white;
    color: $text-dark;

    @include adaptive-value-min-max(font-size, 14, 16);

    text-indent: 1.5rem;
    line-height: 160%;
    text-align: justify;
    hyphens: auto;

    p {
      text-indent: 1.5rem;
      line-height: 160%;
      text-align: justify;
      hyphens: auto;

      margin-top: 1.5em;

      &:first-of-type {
        margin-top: 0 !important;
      }
    }
  }

  .title {
    text-align: center;

    margin: 0 auto;
    width: 100%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    img {
      width: 25%;
    }

    h2 {
      @include adaptive-value-min-max(font-size, 24, 40);

      font-weight: 700;
      color: $title-dark;
    }
  }
}

section.first {
  @include adaptive-value-min-max(margin-top, -125, -150);

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 35, 55);

  position: relative;
  z-index: 1;
}

section.second {
}
</style>
