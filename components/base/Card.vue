<template>
  <div class="card">
    <header class="card__header">
      <img
        :src="`${cardData.content.bg.filename}/m/`"
        alt="Горы около Магадана"
      />
    </header>
    <div class="card__content">
      <span class="card__badge"> {{ cardData.content.direction }} </span>

      <h3 class="card__title">{{ cardData.content.title }}</h3>

      <p class="card__preview-text">
        {{ cardData.content.preview_text }}
      </p>

      <nuxt-link :to="`/posts/${cardData.slug}`" class="card__link"
        >Читать далее</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: $primary-Xlight;
  // padding: 1.5em;
  display: flex;
  flex-direction: column;

  max-width: 50rem;

  // .card__header

  &__header {
    --max-height: 15rem;

    width: 100%;
    max-height: var(--max-height);

    img {
      width: 100%;
      max-height: var(--max-height);
      object-fit: cover;
    }
  }

  // .card__content

  &__content {
    padding: 1.5em;
    padding-bottom: 1.75em;

    display: grid;
    grid-template-rows: auto auto 1fr auto;
    height: 100%;
  }

  // .card__badge
  &__badge {
    padding: 0.25em 0.5em;
    display: inline-block;
    width: max-content;

    background: $secondary-opacity60;

    @include adaptive-value-min-max(font-size, 12.5, 16);
  }

  // .card__title

  &__title {
    @include adaptive-value-min-max(font-size, 20, 32);

    margin: 0.5em 0 0.8em;

    align-self: flex-start;
  }

  // .card__preview-text

  &__preview-text {
    @include adaptive-value-min-max(font-size, 14, 18);
    line-height: 150%;

    color: $text-dark;

    margin-bottom: 1em;
  }

  // .card__link

  &__link {
    @include adaptive-value-min-max(font-size, 16, 22);

    font-weight: 600;
    color: $primary-opacity60;

    position: relative;

    padding-bottom: 0.25em;

    align-self: flex-end;
    justify-self: flex-start;

    &::before {
      position: absolute;
      content: '';

      bottom: 0;
      width: 100%;
      height: 2px;

      background: $primary-opacity60;

      transform-origin: left center;
      transform: scaleX(0%);

      transition: all 200ms ease-in;
    }

    &:hover::before,
    &:focus::before {
      transform: scaleX(100%);
    }
  }
}
</style>
