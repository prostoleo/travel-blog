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
            <span class="breadcrumb-item"> Все посты </span>
          </div>

          <div class="content-text">
            <h1 class="title">Посты</h1>

            <p class="text">Здесь вы найдете все посты</p>
          </div>

          <div class="search-filter__wrapper">
            <div class="search__block search">
              <input id="search-input" class="search__input" type="search" />
              <label for="search-input" class="search__label">Поиск...</label>
              <button class="btn search__btn">
                <img src="/icons/search.svg" alt="" />
              </button>
            </div>

            <div class="filter__block filter">
              <button id="btn-alphabet-up" class="btn filter__btn">
                <img src="/icons/alphabet.svg" alt="" />
              </button>
              <button id="btn-alphabet-reverse" class="btn filter__btn">
                <img src="/icons/alphabet-reverse.svg" alt="" />
              </button>
              <button id="btn-date-up" class="btn filter__btn">
                <img src="/icons/date.svg" alt="" />
                <img src="/icons/arrow-slim.svg" alt="" />
              </button>
              <button id="btn-date-down" class="btn filter__btn">
                <img src="/icons/date.svg" alt="" />
                <img src="/icons/arrow-slim.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section class="second">
      <BaseContainer>
        <h2 class="title">Все посты</h2>
        <div class="content">
          <BaseCard v-for="index in 17" :key="index" />
        </div>
      </BaseContainer>
    </section>
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

      gap: 0.5em;

      flex-wrap: wrap;

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
        text-align: center;

        @include adaptive-value-min-max(font-size, 14, 16);

        color: $text-light;
        line-height: 160%;
      }
    }
  }

  .search-filter {
    // .search-filter__wrapper

    &__wrapper {
      @include adaptive-value-min-max(margin-top, 45, 65);
      margin-left: auto;

      display: flex;

      flex-direction: column;

      align-items: flex-end;
      justify-content: flex-end;

      gap: 1.5em;

      // flex-wrap: wrap;
    }
  }
  .search {
    --padding-y: 0.75em;
    --padding-x: 1.5em;

    // .search__block

    &__block {
      position: relative;
    }

    // .search__input

    &__input {
      padding: var(--padding-y) var(--padding-x);
      padding-right: calc(var(--padding-x) * 1.5);
      padding-left: calc(var(--padding-x) / 1.5);
      background: transparent;

      border: none;
      border-bottom: 1px solid $text-light;

      color: $text-light;

      display: block;
      position: relative;

      @include adaptive-value-min-max(font-size, 14, 18);

      &:focus + label {
        transform: translate(-20%, -175%);
        opacity: 1;
      }

      &:focus {
        outline: 1px solid $primary-opacity60;
      }
    }

    // .search__label

    &__label {
      position: absolute;

      top: 50%;
      left: calc(var(--padding-x) / 1.5);

      transform: translate(0%, -50%);

      @include adaptive-value-min-max(font-size, 14, 18);
      color: $text-light;
      opacity: 0.8;

      transition: all 150ms ease-in-out;
    }

    // .search__btn

    &__btn {
      position: absolute;

      right: 0;
      top: 50%;

      transform: translate(0%, -50%);

      width: calc(var(--padding-x) * 1.5);
    }
  }
  .filter {
    // .filter__block

    &__block {
      display: flex;
      align-items: stretch;

      gap: 0.5em;

      & img {
        @include adaptive-value-min-max(width, 17, 25);
        @include adaptive-value-min-max(height, 17, 25);
        // width: 1.75em;
        // height: 1.75em;
      }
    }

    // .filter__btn

    &__btn {
      display: inline-flex;
      align-items: center;

      gap: 0.25em;

      padding: 0.5em;

      // border-radius: 50%;
      // border: 1px solid $text-light;
      position: relative;

      &:last-of-type img:last-of-type {
        transform: rotate(180deg);
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        border: 1px solid $text-light;

        opacity: 0.6;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        width: 100%;
        height: 100%;

        border: 1px solid $text-light;

        z-index: -1;
        background: $primary-opacity60;

        opacity: 0;
      }

      &.active::before {
        opacity: 0.7;
      }
    }
  }
}

section.second {
  @include adaptive-value-min-max(padding-top, 45, 75);
  @include adaptive-value-min-max(padding-bottom, 45, 75);

  @include adaptive-value-min-max(margin-top, -125, -150);

  position: relative;
  z-index: 2;

  h2.title {
    @include adaptive-value-min-max(font-size, 24, 40);

    color: $text-light;
    font-weight: 700;

    margin-bottom: 0.5em;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
    gap: 3rem;
  }
}
</style>
