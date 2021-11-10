<template>
  <section id="#about" class="about">
    <BaseContainer>
      <div class="content">
        <!-- <pre>
          {{ aboutData.About_row }}
        </pre> -->
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <!-- <h2>Обо мне</h2> -->
          <h2>{{ aboutData.title }}</h2>
        </div>

        <div class="rows">
          <div
            v-for="(row, index) in aboutData.About_row"
            :key="index"
            v-editable="row"
            class="row"
          >
            <div
              class="row__content prose"
              v-html="markdown().render(row.text)"
            ></div>
            <picture>
              <source
                media="(min-width: 900px)"
                :srcset="`${row.image.filename}/m/`"
                width="1230"
                @click="openImage"
              />
              <source
                media="(max-width: 899px)"
                :srcset="`${row.image.filename}/m/filters:quality(50)`"
                alt=""
                width="880"
                @click="openImage"
              />
              <img
                :src="`${row.image.filename}/m/filters:quality(50)`"
                class="row__img"
                alt=""
                width="880"
                @click="openImage"
              />
            </picture>
            <!-- @click="openImage" -->
          </div>
        </div>
      </div>
    </BaseContainer>

    <BaseImageDialog
      v-if="isImageShowingComp"
      :image-src="`${imgSrc}`"
      @close-dialog="closeDialog"
    />
  </section>
</template>

<script>
// import { ref } from '@nuxtjs/composition-api';

// import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es';
import markdown from 'markdown-it';
import useImageDialog from '~/composables/useImageDialog.js';

export default {
  props: {
    aboutData: {
      type: Object,
      // default: {},
      required: true,
    },
  },

  setup() {
    const {
      isImageShowing,
      isImageShowingComp,
      imgSrc,
      openImage,
      closeDialog,
    } = useImageDialog();

    return {
      isImageShowing,
      isImageShowingComp,
      imgSrc,
      openImage,
      closeDialog,

      markdown,
    };
    /* return {
      resolver,
      markdown,
    }; */
  },
};
</script>

<style lang="scss" scoped>
.rows blockquote {
  padding-left: 1.5rem !important;

  border-left: 4px solid $primary-opacity60 !important;

  font-style: italic !important;
}

h5 {
  font-size: 1.6rem;
  text-align: left;
}

hr {
  margin-top: 1em !important;
}

img {
  max-width: 100% !important;
}

.row {
  &__content.prose > * {
    margin-top: 2em !important;
  }
}

section {
  @include adaptive-value-min-max(padding-top, 40, 70);
  @include adaptive-value-min-max(padding-bottom, 40, 70);

  .content {
    /* display: grid;
    justify-content: center; */

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

    .rows {
      width: 100%;
      // justify-self: stretch;

      @include adaptive-value-min-max(padding-top, 35, 55);

      .row {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 1.75rem;

        margin-top: 2.5em;

        &:first-of-type {
          margin-top: 0 !important;
        }

        .row__img {
          max-height: 50rem;
          object-fit: cover;

          cursor: pointer;

          /* // img {
          } */
        }

        .row__content {
          @include adaptive-value-min-max(font-size, 14, 16);

          max-width: 65ch;
          margin: 0 auto;

          text-align: justify;
          hyphens: auto;
          text-indent: 1.5rem;

          line-height: 160%;
        }
      }
    }
  }
}
</style>
