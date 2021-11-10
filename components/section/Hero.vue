<template>
  <section id="hero-section">
    <picture>
      <source
        media="(max-width: 600)"
        :srcset="`${heroData.bg_image.filename}/m/filters:brightness(-40):quality(30)`"
        width="600"
      />
      <source
        media="(max-width: 900)"
        :srcset="`${heroData.bg_image.filename}/m/filters:brightness(-40):quality(50)`"
        width="900"
      />
      <source
        media="(max-width: 1200)"
        :srcset="`${heroData.bg_image.filename}/m/filters:brightness(-40):quality(75)`"
        width="1200"
      />
      <source
        media="(max-width: 1400)"
        :srcset="`${heroData.bg_image.filename}/m/filters:brightness(-40):quality(90)`"
        width="1400"
      />
      <img
        :src="`${heroData.bg_image.filename}/m/filters:brightness(-40)`"
        alt=""
        class="bg"
      />
    </picture>
    <BaseContainer>
      <div class="content">
        <!-- <pre>
          {{ heroData }}
        </pre> -->
        <h1 class="title">{{ heroData.title }}</h1>

        <p
          v-for="(p, index) in heroData.description.content"
          :key="index"
          class="text"
        >
          {{ p.content[0].text }}
        </p>

        <div class="btn-row">
          <nuxt-link
            :to="{ path: '/', hash: '#new' }"
            class="btn btn-primary"
            tag="button"
          >
            Новые приключения</nuxt-link
          >
          <!-- @click="navigateToNew" -->
          <nuxt-link
            :to="{ path: '/', hash: '#directions' }"
            class="btn btn-secondary"
            tag="button"
            >Направления</nuxt-link
          >
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  props: {
    heroData: {
      type: Object,
      // default: {},
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
pre {
  color: white;
  font-size: 1.2rem;

  margin: 2rem;
}

section {
  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 125, 175);

  // background: url(/img/hero-bg/1-min.jpg) $overlay;
  // background-blend-mode: darken;

  // background-position: center center;
  // background-size: cover;
  // background-repeat: no-repeat;

  // min-height: 95vh;

  position: relative;

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
  }

  .content {
    text-align: center;

    h1.title {
      @include adaptive-value-min-max(font-size, 32, 64);
      font-weight: 800;
      line-height: 100%;

      color: $title-light;

      margin-bottom: 0.5em;
    }

    p.text {
      @include adaptive-value-min-max(font-size, 16, 24);
      font-weight: 400;
      color: $text-light;

      &:last-of-type {
        margin-bottom: 2.5em;
      }
    }

    .btn-row {
      display: inline-flex;
      // align-items: center;

      gap: 0 2rem;

      button.btn {
        display: inline-block;
        padding: 0.5em 1em;

        border: 2px solid transparent;

        font-size: 1.4rem;
        font-weight: 600;

        &.btn-primary {
          background: $primary;
          color: $text-light;
        }

        &.btn-secondary {
          // border-color: $primary;
          border-color: $text-light;
          color: $text-light;
        }
      }
    }
  }
}
</style>
