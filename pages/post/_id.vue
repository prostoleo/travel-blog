<template>
  <div>
    <section class="first">
      <BaseContainer>
        <div class="content-wrapper">
          <div class="breadcrumbs">
            <nuxt-link to="/" class="breadcrumb-item">
              Главная
              <img src="/icons/shevron.svg" alt="" />
            </nuxt-link>
            <nuxt-link to="/" class="breadcrumb-item">
              Направления
              <img src="/icons/shevron.svg" alt="" />
            </nuxt-link>
            <nuxt-link to="/directions/1" class="breadcrumb-item">
              Дальний Восток
              <img src="/icons/shevron.svg" alt="" />
            </nuxt-link>
            <span class="breadcrumb-item"> Магадан </span>
          </div>

          <div class="content-text">
            <h1 class="title">Магадан</h1>

            <div class="post-info">
              <div class="post-info__row row">
                <img src="/icons/date.svg" alt="" class="row__img" />
                <span class="row__text">Пн, 18 октября 2021 г.</span>
              </div>
              <div class="post-info__row row">
                <img src="/icons/date.svg" alt="" class="row__img" />
                <span class="row__text">Пн, 18 октября 2021 г.</span>
              </div>
              <div class="post-info__row row">
                <img src="/icons/date.svg" alt="" class="row__img" />
                <span class="row__text">Пн, 18 октября 2021 г.</span>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <SectionPostContent />
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
section.first {
  background: url(/img/all-posts-bg/bg.jpg) $overlay;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 125, 175);

  position: relative;
  z-index: 1;

  .content-wrapper {
    .breadcrumbs {
      display: flex;
      align-items: center;

      flex-wrap: wrap;

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

        margin-bottom: 1.5em;
      }

      .post-info {
        display: flex;
        flex-direction: column;

        gap: 2em;

        // .post-info__row

        &__row {
          display: inline-flex;
          align-items: center;
          width: max-content;

          gap: 1.5em;

          opacity: 0.85;
        }
      }
      .row {
        // .row__img

        &__img {
          @include adaptive-value-min-max(width, 16, 20);
        }

        // .row__text

        &__text {
          @include adaptive-value-min-max(font-size, 14, 18);

          color: $text-light;
        }
      }
    }
  }
}
</style>
