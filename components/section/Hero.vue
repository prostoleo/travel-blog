<template>
  <section id="hero-section">
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
// eslint-disable-next-line no-unused-vars
import {
  ref,
  // computed,
  // useStore,
  onMounted,
  useContext,
} from '@nuxtjs/composition-api';

export default {
  props: {
    heroData: {
      type: Object,
      // default: {},
      required: true,
    },
  },

  setup(props, context) {
    console.log('context: ', context);

    const heroSection = ref(null);
    console.log('heroSection: ', heroSection);

    const { $storybridge } = useContext();
    console.log('$storybridge: ', $storybridge);

    // const data = ref(null);
    // const store = useStore();

    onMounted(() => {
      /* const heroSectionEl = document.getElementById('hero-section');
      console.log('heroSectionEl: ', heroSectionEl);
      // data.value = store.getters['home/getHome'];
      heroSectionEl.style.background = `url(${props.heroData.bg_image.filename}) rgba(0, 0, 0, 40%)`;
      heroSectionEl.style.backgroundSize = `cover`;
      heroSectionEl.style.backgroundBlendMode = `darken`;
      heroSectionEl.style.backgroundPosition = `center center`;
      heroSectionEl.style.backgroundRepeat = `no-repeat`; */
    });

    return {
      // data,
      // heroSection,
    };
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

  background: url(/img/hero-bg/1-min.jpg) $overlay;
  background-blend-mode: darken;

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  // min-height: 95vh;

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
