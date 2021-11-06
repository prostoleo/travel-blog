<template>
  <div class="card">
    <header class="card__header">
      <img
        :src="`${cardData.content.bg.filename}/m/`"
        alt="Горы около Магадана"
      />
    </header>
    <div class="card__content">
      <div class="card__upper">
        <span class="card__badge"> {{ cardData.content.direction }} </span>
        <span class="card__time"> {{ formatDate(cardTime) }} </span>
      </div>

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
import { computed } from '@vue/composition-api';
export default {
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const cardTime = computed(() => {
      return props.cardData.first_published_at ?? props.cardData.created_at;
    });

    const formatDate = (date) => {
      // console.log('date: ', date);

      return Intl.DateTimeFormat(navigator.locale, {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        minute: '2-digit',
        hour: '2-digit',
      }).format(new Date(date));
    };

    return {
      cardTime,
      formatDate,
    };
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
  &__upper {
    display: flex;
    align-items: center;

    justify-content: space-between;
  }

  // .card__badge
  &__badge,
  &__time {
    padding: 0.25em 0.5em;
    display: inline-block;
    width: max-content;

    background: $secondary-opacity60;

    @include adaptive-value-min-max(font-size, 12.5, 16);
  }

  // .card__time
  &__time {
    // background: $text-dark;
    // color: $text-light;
    background: transparent;
    color: $text-dark;

    // opacity: 0.8;
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
