<template>
  <div class="card">
    <header class="card__header">
      <img src="/img/post-bg/magadan-cover.jpg" alt="Горы около Магадана" />
    </header>
    <div class="card__content">
      <span class="card__badge"> Дальний Восток </span>

      <h3 class="card__title">Магадан</h3>

      <p class="card__preview-text">
        Сегодня я поведаю Вам о таком, легендарном месте, как Магадан. У этого
        города не слишком славная репутация, однако он способен будет Вас
        удивить.
      </p>

      <nuxt-link to="/posts/1" class="card__link">Читать далее</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: $primary-Xlight;
  // padding: 1.5em;

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
  }

  // .card__badge
  &__badge {
    padding: 0.25em 0.5em;
    display: inline-block;

    background: $secondary-opacity60;

    @include adaptive-value-min-max(font-size, 12.5, 16);
  }

  // .card__title

  &__title {
    @include adaptive-value-min-max(font-size, 20, 32);

    margin: 0.5em 0 0.8em;
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
