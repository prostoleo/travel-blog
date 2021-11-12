<template>
  <section>
    <picture>
      <source
        media="(max-width: 600px)"
        :srcset="`${direction.content.bg.filename}/m/filters:brightness(-35):quality(50)`"
        width="600"
        :alt="direction.content.bg.alt"
      />
      <source
        media="(max-width: 900px)"
        :srcset="`${direction.content.bg.filename}/m/filters:brightness(-35):quality(60)`"
        width="900"
        :alt="direction.content.bg.alt"
      />
      <source
        media="(max-width: 1200px)"
        :srcset="`${direction.content.bg.filename}/m/filters:brightness(-35):quality(75)`"
        width="1200"
        :alt="direction.content.bg.alt"
      />
      <source
        media="(min-width: 1201px)"
        :srcset="`${direction.content.bg.filename}/m/filters:brightness(-35)`"
        width="1200"
        :alt="direction.content.bg.alt"
      />
      <img
        :src="`${direction.content.bg.filename}/m/filters:brightness(-35)`"
        :alt="direction.content.bg.alt"
        class="bg"
      />
    </picture>
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
          <span class="breadcrumb-item">
            {{ direction.content.title }}
          </span>
        </div>

        <div class="content-text">
          <h1 class="title">
            {{ direction.content.title }}
          </h1>

          <p
            class="text prose"
            v-html="markdown().render(direction.content.text)"
          ></p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
import markdown from 'markdown-it';

export default {
  props: {
    direction: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {
      markdown,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  /* background: url(/img/directions-bg/дальний-восток.jpg) $overlay;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; */

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 70, 120);

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
  }

  .content-wrapper {
    .breadcrumbs {
      display: flex;
      align-items: center;

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

        margin-bottom: 0.5em;
      }

      p.text {
        max-width: 65ch;

        margin: 0 auto;

        @include adaptive-value-min-max(font-size, 14, 16);

        color: $text-light;
        line-height: 160%;

        text-align: justify;
        text-indent: 1.5em;
      }
    }
  }
}
</style>
