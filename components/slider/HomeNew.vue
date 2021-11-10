<template>
  <div class="my-slider-wrapper">
    <div class="my-slider-navigation">
      <button
        ref="prevBtn"
        class="button-next"
        aria-label="toPrevSlide"
        @click="goToPrevSlide"
      >
        <img src="/icons/arrow.svg" alt="" />
      </button>
      <button
        ref="nextBtn"
        class="button-prev"
        aria-label="toNextSlide"
        @click="goToNextSlide"
      >
        <img src="/icons/arrow.svg" alt="" />
      </button>
    </div>
    <!-- :modules="modules" -->
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      :pagination="true"
      :navigation="true"
    >
      <swiper-slide v-for="(slide, index) in directions.stories" :key="index">
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
            alt=""
            style="width: 100%"
          />
        </picture>
        <nuxt-link :to="`/${slide.full_slug}`" class="slide__link">
          {{ slide.content.title }}
          <!-- {{ slide.content.bg.filename }} -->
        </nuxt-link>
      </swiper-slide>

      <!-- <div class="swiper-navigation"> -->

      <!-- <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets"
      ></div> -->
    </swiper>
    <div ref="myPagination" class="my-pagination">
      <div
        v-for="index in directions.stories.length"
        ref="bullet"
        :key="index"
        class="bullet"
        @click="goToSlide(index - 1)"
      ></div>
    </div>
  </div>
</template>

<script>
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css';

// eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'Carousel',

  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    directions: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      activeSlide: this.swiper?.activeIndex,

      swiperOptions: {
        slidesPerView: 'auto',

        centeredSlides: true,
        centeredSlidesBounds: true,
        // centerInsufficientSlides: true,

        breakpoints: {
          900: {
            spaceBetween: 20,
          },
        },

        on: {
          //* hook от swiper смены слайдов
          slideChange: () => {
            const bullets = this.$refs.bullet;

            const activeIndex = this.swiper.activeIndex; // получаем индекс активного слайда

            const { prevBtn, nextBtn } = this.$refs; // получаем кнопки через refs

            // убираем скрывающий класс
            prevBtn.classList.remove('disabled');
            nextBtn.classList.remove('disabled');

            // если слайд текущий самый первый - убираем кнопку назад, если слайд самый последний - убираем кнопку вперед
            if (activeIndex === 0) prevBtn.classList.add('disabled');
            if (activeIndex === this.directions.stories.length - 1)
              nextBtn.classList.add('disabled');

            // по аналогии с булетами
            if (
              activeIndex !== 0 ||
              activeIndex !== this.directions.stories.length
            ) {
              bullets.forEach((b) => b.classList.remove('active'));
              bullets[this.swiper.activeIndex].classList.add('active');
            }
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  mounted() {
    const initialSlideIndex = Math.floor(this.directions.stories.length / 2);

    this.swiper.slideTo(initialSlideIndex, 1000, false);
    this.goToSlide(initialSlideIndex);
  },

  methods: {
    goToPrevSlide() {
      if (this.swiper.activeIndex === 0) return;

      this.swiper.slidePrev(1000, false);
    },
    goToNextSlide() {
      if (this.swiper.activeIndex === this.directions.stories.length) return;

      this.swiper.slideNext(1000, false);
    },

    goToSlide(index) {
      this.swiper.slideTo(index, 1000, false);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-slider-wrapper {
  position: relative;
}

.my-slider-navigation,
.swiper-navigation {
  width: 30%;
  height: 5rem;

  display: flex;
  align-items: center;

  gap: 1rem;

  position: relative;

  margin-left: auto;
  margin-top: 1.5rem;

  button {
    display: inline-block;
    padding: 0.25em;

    width: 2.5em;
    height: 2.5em;

    background: $secondary-opacity60;

    visibility: visible;

    &:first-of-type {
      transform: rotate(-180deg);
    }

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    &.disabled {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }
}

.my-pagination,
.swiper-pagination {
  width: 50%;
  // height: 3rem;
  margin: 0 auto;
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  .bullet {
    display: inline-block;

    padding: 0.75em;

    width: 1.5rem !important;
    height: 1.5rem !important;

    border-radius: 50%;
    background: $primary-opacity60;

    opacity: 0.25;

    cursor: pointer;

    &.active {
      opacity: 0.7;
    }

    // flex: 0 1 100%;
  }
}

.swiper-container {
  // overflow-x: hidden !important;

  width: 100vw !important;
  max-width: 192rem !important;

  @include adaptive-value-min-max(margin-top, 25, 35);
  @include adaptive-value-min-max(height, 200, 400);

  position: relative;
}

.swiper-slide {
  display: flex;
  align-items: flex-end;

  padding-bottom: 5%;
  padding-left: 4%;

  opacity: 0.5;

  transition: all 1000ms ease-in-out;

  position: relative;

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

  .slide__link {
    @include adaptive-value-min-max(font-size, 14, 18);
    color: $text-light;

    width: max-content;

    padding: 0.25em 0;

    position: relative;

    font-weight: 600;

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

  &-active {
    transform: scale(1, 1);
    opacity: 1;

    // font-weight: 600;
  }
}
</style>
