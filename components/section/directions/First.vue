<template>
  <section>
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
          <span class="breadcrumb-item"> Дальний Восток </span>
        </div>

        <div class="content-text">
          <h1 class="title">Дальний Восток</h1>

          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            dolores nam enim debitis quaerat illum soluta voluptate veritatis
            corrupti, veniam nostrum quae! Quis aspernatur in accusamus itaque
            beatae? Debitis voluptatibus laborum quam? Error, praesentium dicta!
          </p>
          <p class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            dolores nam enim debitis quaerat.
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
section {
  background: url(/img/directions-bg/дальний-восток.jpg) $overlay;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 70, 120);

  position: relative;
  z-index: 1;

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
