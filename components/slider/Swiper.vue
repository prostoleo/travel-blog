<template>
  <div ref="mySwiper" class="my-slider--wrapper swiper">
    <BaseContainer>
      <div class="my-slider-navigation">
        <button
          ref="prevBtn"
          class="button-prev swiper-button-prev"
          :class="{ disabled: activeIndex === 0 }"
          aria-label="toPrevSlide"
          @click="activeIndex === 0 ? '' : goToSlide(activeIndex - 1)"
        >
          <!-- :class="activeIndex === 0 ? 'disabled' : ''" -->
          <img src="/icons/arrow.svg" alt="" />
        </button>
        <button
          ref="nextBtn"
          class="button-next swiper-button-next"
          :class="{ disabled: SlidesNumber - 1 === activeIndex }"
          aria-label="toNextSlide"
          @click="
            SlidesNumber - 1 === activeIndex ? '' : goToSlide(activeIndex + 1)
          "
        >
          <!-- :class="swiper.slides.length === activeIndex ? 'disabled' : ''" -->
          <img src="/icons/arrow.svg" alt="" />
        </button>
      </div>
    </BaseContainer>
    <!-- :modules="modules" -->
    <div class="my-slider swiper-wrapper">
      <div
        v-for="(slide, index) in directions.stories"
        :key="index"
        ref="slides"
        class="my-slider__slide swiper-slide"
      >
        <picture>
          <source
            media="(min-width: 900)"
            :srcset="`${slide.content.bg.filename}/m/filters:quality(50)`"
            width="600"
          />
          <source
            :srcset="`${slide.content.bg.filename}/m/filters:quality(30)`"
            alt=""
            style="width: 100%"
          />
          <img
            :src="`${slide.content.bg.filename}/m/filters:quality(30)`"
            :alt="slide.content.bg.alt"
            style="width: 100%"
          />
        </picture>
        <nuxt-link :to="`/${slide.full_slug}`" class="my-slider__link">
          {{ slide.content.title }}
          <!-- {{ slide.content.bg.filename }} -->
        </nuxt-link>
      </div>

      <!-- <div class="swiper-navigation"> -->
    </div>
    <div slot="pagination" class="swiper-pagination my-pagination">
      <span
        v-for="index in directions.stories.length"
        ref="bullets"
        :key="index"
        tabindex="0"
        role="button"
        :aria-label="`Переход к слайду ${index}`"
        class="swiper-pagination-bullet"
        @click="goToSlide(index - 1)"
      ></span>
    </div>
    <!-- <div ref="myPagination" class="my-pagination">
      <div
        v-for="index in directions.stories.length"
        ref="bullet"
        :key="index"
        class="bullet"
        @click="goToSlide(index - 1)"
      ></div>
    </div> -->
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from '@nuxtjs/composition-api';

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss';

// eslint-disable-next-line no-unused-vars
import { Swiper } from 'swiper/swiper-bundle.esm.js';
// eslint-disable-next-line no-unused-vars
import { Pagination, Navigation, Keyboard } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
// import { SwiperSlide } from 'swiper/swiper-slide.js';

export default {
  name: 'Carousel',

  props: {
    directions: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const mySwiper = ref(null);
    const swiper = ref(null);
    const bullets = ref(null);
    const slides = ref(null);

    onMounted(() => {
      swiper.value = new Swiper(mySwiper.value, {
        slidesPerView: 1,
        // autoHeight: true,
        // speed: 1,
        // loop: true,
        centeredSlides: true,
        centeredSlidesBound: true,
        // centerInsufficientSlides: true,
        modules: [Keyboard],

        keyboard: {
          enabled: true,
          onlyInViewPort: false,
        },

        breakpoints: {
          900: {
            slidesPerView: 'auto',
          },
        },
      });
      // console.log('swiper: ', swiper);

      const numberOfSlides = props.directions.stories.length;

      // swiper.value.slideTo(Math.floor(numberOfSlides / 2), 1000, false);
      goToSlide(Math.floor(numberOfSlides / 2));

      console.log('swiper: ', swiper);
    });

    // * computed для текущего активного индекс
    const activeIndex = computed(() => {
      const idx = swiper?.value?.activeIndex;

      return idx;
    });

    // * computed для количества слайдов
    const SlidesNumber = computed(() => {
      const lngth = swiper?.value?.slides?.length;

      return lngth;
    });

    //* если activeIndex меняется , то обрабатываем кнопки
    watch(activeIndex, (oldValue, newValue) => {
      if (oldValue !== newValue) {
        handleBullets();
      }
    });

    // todo функция перемещения по слайдам
    const goToSlide = (index) => {
      swiper.value.slideTo(index, 1000, false);
    };

    // todo для изменения классов bullet
    const handleBullets = () => {
      bullets.value.forEach((bullet) =>
        bullet.classList.remove('swiper-pagination-bullet-active')
      );

      bullets.value[activeIndex.value].classList.add(
        'swiper-pagination-bullet-active'
      );
    };

    return {
      mySwiper,
      swiper,
      goToSlide,
      bullets,
      slides,
      activeIndex,
      SlidesNumber,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-pagination {
  position: unset !important;
  // height: 2.5rem;

  margin: 2.5em auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

/* .bullet {
  display: inline-block;

  padding: 0.75em;

  width: 15px;
  height: 15px;

  border-radius: 50%;
  background: var(--swiper-pagination-bullet-inactive-color);

  opacity: 0.25;

  cursor: pointer;

  &-active {
    opacity: 1;
    background: var(--swiper-theme-color);
  }
} */

span.swiper-pagination-bullet {
  --swiper-pagination-bullet-inactive-color: grey;
  --swiper-theme-color: $secondary-opacity60;

  // width: unset;
  // height: unset;
  // background: transparent;

  display: inline-block;

  padding: 0.75em;

  width: 15px;
  height: 15px;

  border-radius: 50%;
  background: var(--swiper-pagination-bullet-inactive-color);

  opacity: 0.25;

  cursor: pointer;

  &-active {
    opacity: 1;
    // background: var(--swiper-theme-color);
    background: $secondary-opacity60;
  }
}

.my-slider-navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-left: auto;
  margin-right: 4%;

  gap: 1.5em;

  .swiper-button {
    &-next,
    &-prev {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      position: unset !important;

      width: 2.5em;
      height: 2.5em;
      padding: 0.25em;
      background: $secondary-opacity60;

      &::after {
        display: none;
      }

      &.disabled {
        opacity: 0;
        pointer-events: none;
      }
    }

    &-next {
    }
    &-prev {
      transform: rotate(-180deg);
    }
  }
}

.my-slider {
  // overflow-x: hidden !important;

  // width: 100vw !important;
  // max-width: 192rem !important;

  @include adaptive-value-min-max(margin-top, 25, 35);
  @include adaptive-value-min-max(height, 200, 400);

  position: relative;

  display: flex;

  &--wrapper {
    @include adaptive-value-min-max(margin-top, 25, 35);
  }

  &__slide {
    display: flex;
    align-items: flex-end;

    padding-bottom: 5%;
    padding-left: 4%;

    opacity: 0.5;

    transition: all 1000ms ease-in-out;

    position: relative;

    width: 100%;
    flex: 1 0 100vw;

    @include mq(lg) {
      transform: scale(0.8, 0.8);
      max-width: 60rem;

      width: 100%;
    }

    img {
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

    &.swiper-slide-active {
      transform: scale(1, 1);
      opacity: 1;

      // font-weight: 600;
    }
  }

  &__link {
    @include adaptive-value-min-max(font-size, 14, 18);
    color: $text-light;

    width: max-content;

    padding: 0.25em 0;

    position: relative;

    font-weight: 600;
    z-index: 10;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      width: min(15rem, 200%);
      height: 2px;

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
</style>
