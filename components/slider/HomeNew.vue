<template>
  <div class="my-slider-wrapper">
    <div class="my-slider-navigation">
      <button ref="prevBtn" class="button-next" @click="goToPrevSlide">
        <img src="/icons/arrow.svg" alt="" />
      </button>
      <button ref="nextBtn" class="button-prev" @click="goToNextSlide">
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
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        {{ slide.text }}
      </swiper-slide>

      <!-- <div class="swiper-navigation"> -->

      <!-- <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets"
      ></div> -->
    </swiper>
    <div ref="myPagination" class="my-pagination">
      <div
        v-for="(slide, index) in slides"
        ref="bullet"
        :key="index"
        class="bullet"
        @click="goToSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
// import { ref, computed, onMounted } from '@nuxtjs/composition-api';

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss';
// import 'swiper/css/navigation';

// eslint-disable-next-line no-unused-vars
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

// eslint-disable-next-line no-unused-vars
// import Swiper, SwiperSlide from 'swiper';
// import { Controller, Pagination, Scrollbar, Navigation } from 'swiper';
// console.log('Pagination: ', Pagination);

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css';

export default {
  name: 'Carousel',

  components: {
    Swiper,
    SwiperSlide,
    // Controller,
    // Pagination,
    // Scrollbar,
    // Navigation,
    // Controller,
  },

  data() {
    return {
      // modules: JSON.stringify([Controller, Pagination, Scrollbar, Navigation]),

      slides: [
        {
          imgSrc: '/img/slider-main/1-min.jpg',
          text: 'Дальний Восток',
        },
        {
          imgSrc: '/img/slider-main/1-min.jpg',
          text: 'Сибирь',
        },
        {
          imgSrc: '/img/slider-main/1-min.jpg',
          text: 'Урал',
        },
        {
          imgSrc: '/img/slider-main/1-min.jpg',
          text: 'Кавказ',
        },
        {
          imgSrc: '/img/slider-main/1-min.jpg',
          text: 'Север',
        },
        {
          imgSrc: '/img/slider-main/1-min.jpg',
          text: 'Юг',
        },
      ],

      // currentActive: Math.round(this.slides?.length),

      activeSlide: this.swiper?.activeIndex,

      swiperOptions: {
        /* pagination: {
          el: '.swiper-pagination',
        },

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }, */
        slidesPerView: 'auto',
        // loop: true,
        spaceBetween: 20,

        centeredSlides: true,
        // centeredSlidesBounds: true,
        centerInsufficientSlides: true,

        breakpoints: {
          // 320: {
          //   slidesPerView: 1,
          //   spaceBetween: 10,
          //   // width: 300,
          // },
          // // 450: {
          // //   slidesPerView: 1,
          // //   spaceBetween: 10,
          // //   // width: 300,
          // // },
          // 600: {
          //   slidesPerView: 1,
          // },
        },

        on: {
          init: () => {
            console.log(' init swiper ');
          },
          slideChange: () => {
            console.log(' this.swiper.activeIndex ', this.swiper.activeIndex);
            console.log(' slideChange swiper ');

            const bullets = this.$refs.bullet;
            console.log('bullets: ', bullets);

            const activeIndex = this.swiper.activeIndex;

            const { prevBtn, nextBtn } = this.$refs;
            console.log('prevBtn: ', prevBtn);
            console.log('nextBtn: ', nextBtn);

            prevBtn.classList.remove('disabled');
            nextBtn.classList.remove('disabled');

            if (activeIndex === 0) prevBtn.classList.add('disabled');
            if (activeIndex === this.slides.length - 1)
              nextBtn.classList.add('disabled');

            if (activeIndex !== 0 || activeIndex !== this.slides.length) {
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

    /* initialSlide() {
      console.log('this.slides: ', this.slides);
      return Math.round(this?.slides?.length) ?? 1;
    }, */
  },

  mounted() {
    console.log('Current Swiper instance object', this.swiper);
    this.swiper.slideTo(3, 1000, false);
    this.goToSlide(3);
  },

  methods: {
    goToPrevSlide() {
      console.log('this.swiper.activeIndex: ', this.swiper.activeIndex);

      if (this.swiper.activeIndex === 0) return;

      this.swiper.slidePrev(1000, false);
    },
    goToNextSlide() {
      console.log('this.swiper.activeIndex: ', this.swiper.activeIndex);

      if (this.swiper.activeIndex === this.slides.length) return;

      this.swiper.slideNext(1000, false);
    },

    goToSlide(index) {
      this.swiper.slideTo(index, 1000, false);
    },
  },
};

/* setup(props) {
    const slides = ref([
      {
        imgSrc: '/img/slider-main/1-min.jpg',
        text: 'Дальний Восток',
      },
      {
        imgSrc: '/img/slider-main/1-min.jpg',
        text: 'Сибирь',
      },
      {
        imgSrc: '/img/slider-main/1-min.jpg',
        text: 'Урал',
      },
      {
        imgSrc: '/img/slider-main/1-min.jpg',
        text: 'Кавказ',
      },
      {
        imgSrc: '/img/slider-main/1-min.jpg',
        text: 'Север',
      },
      {
        imgSrc: '/img/slider-main/1-min.jpg',
        text: 'Юг',
      },
    ]);

    const swiperOptions = ref({
      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      loop: true,
      spaceBetween: 20,

      centeredSlides: true,
      centeredSlidesBounds: true,

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
          // width: 300,
        },
        // 450: {
        //   slidesPerView: 1,
        //   spaceBetween: 10,
        //   // width: 300,
        // },
        600: {
          slidesPerView: 3,
        },
      },
    });

    const mySwiper = ref(Swiper);

    const swiper = computed(() => Swiper.$swiper);

    // onMounted(() => {
    //   swiper.slideTo(3, 1000, false);
    // });

    const modules = ref(Navigation, Pagination, Scrollbar, Controller);

    return {
      slides,
      swiperOptions,
      mySwiper,
      swiper,

      modules,
      // modules: Navigation,
      // Pagination,
      // Scrollbar,
      // Controller,
    };
  }, */
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
  /* position: absolute;
  top: 110%;
  left: 50%;

  transform: translate(-50%, -50%); */

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

  @include adaptive-value-min-max(margin-top, 35, 55);

  position: relative;
}

.swiper-slide {
  background: url(/img/slider-main/1-min.jpg) $overlay;
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @include adaptive-value-min-max(height, 200, 400);
  // @include adaptive-value-min-max(width, 300, 600);
  @include mq(lg) {
    max-width: 60rem;
  }

  // margin: 0.5%;

  display: flex;
  align-items: flex-end;

  @include adaptive-value-min-max(font-size, 14, 18);
  color: $text-light;

  padding-bottom: 5%;
  padding-left: 4%;

  transform: scale(0.8, 0.8);
  opacity: 0.5;

  transition: all 1000ms ease-in-out;

  &-active {
    transform: scale(1, 1);
    opacity: 1;

    font-weight: 600;
  }
}
</style>
