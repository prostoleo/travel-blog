<template>
  <div class="slider-wrapper">
    <div class="controller-wrapper">
      <button class="prev" @click="prevSlide">
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4324 25.4781L26.819 16.0915L17.4324 6.70483"
            stroke="black"
            stroke-width="2.6819"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.819 16.0915L5.36381 16.0915"
            stroke="black"
            stroke-width="2.6819"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button class="next" @click="nextSlide">
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4324 25.4781L26.819 16.0915L17.4324 6.70483"
            stroke="black"
            stroke-width="2.6819"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.819 16.0915L5.36381 16.0915"
            stroke="black"
            stroke-width="2.6819"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- <pre>
        {{ slideWidth }}
    </pre>
    <pre>
        {{ viewportWidth }}
    </pre> -->

    <div class="slider">
      <div v-for="index in 6" :key="index" class="slide-item">
        <!-- {{ index }} -->
        <nuxt-link to="/directions/1" class="slide-link"
          >Дальний Восток</nuxt-link
        >
      </div>
      <!-- <div class="slide-item">1</div>
      <div class="slide-item">2</div>
      <div class="slide-item">3</div>
      <div class="slide-item">4</div>
      <div class="slide-item">5</div> -->
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, computed, onMounted } from '@nuxtjs/composition-api';

export default {
  setup() {
    const activeSlide = ref(1);
    const slidesRef = ref(null);
    const numberSlidesRef = ref(null);

    const activeSlideComp = computed(() => activeSlide.value);
    console.log('activeSlideComp: ', activeSlideComp);

    const viewportWidth = computed(() => window.innerWidth);
    console.log('viewportWidth: ', viewportWidth);
    const slideWidth = computed(
      () => slidesRef.value?.[0].getBoundingClientRect().width
    );
    console.log('slideWidth: ', slideWidth);

    function setTransform(slides) {
      slides.forEach((slide, i) => {
        console.log('slide: ', slide);

        //* получаем translateX
        let translateX = `translateX(calc(${
          (i - activeSlideComp.value + 1) * 100
        }% + ${2 * i}vw))`;

        if (i === 0) {
          translateX = `translateX(${(i - activeSlideComp.value + 1) * 100}%)`;
        }

        /* switch (i) {
          case 0:
            translateX = `translateX(${
              (i - activeSlideComp.value + 1) * 100
            }%)`;
            break;

          default:
            translateX = `translateX(calc(${
              (i - activeSlideComp.value + 1) * 100
            }% + 2vw))`;
            break;
        } */

        //* получаем scale
        // let scaleX;
        /* let scaleX = `scale(0.8, 0.8)`;

        slide.style.transform = `${translateX} ${scaleX}`;
        slide.style.opacity = 0.8;

        if (i === activeSlideComp - 1) {
          scaleX = `scale(1.0, 1.0)`;
          slide.style.transform = `${translateX} ${scaleX}`;
          slide.style.opacity = 1;
        } */

        slide.style.transform = `${translateX}`;
      });
    }

    onMounted(() => {
      const slides = document.querySelectorAll('.slider > *');
      console.log('slides: ', slides);
      slidesRef.value = slides;

      const numberOfSlides = slides.length;
      console.log('numberOfSlides: ', numberOfSlides);
      numberSlidesRef.value = numberOfSlides;

      activeSlide.value = Math.ceil(numberOfSlides / 2);

      addActive();

      setTransform(slidesRef.value);
    });

    const prevSlide = () => {
      console.log(' prev ');

      //* проверка на каком слайде находимся
      if (activeSlide.value === 1) {
        activeSlide.value = slidesRef.value.length;
      } else {
        activeSlide.value--;
      }

      setTransform(slidesRef.value);
      removeActive();
      addActive();
    };
    const nextSlide = () => {
      console.log(' next ');

      //* проверка на каком слайде находимся
      if (activeSlide.value === slidesRef.value.length) {
        activeSlide.value = 1;
      } else {
        activeSlide.value++;
      }

      setTransform(slidesRef.value);
      removeActive();
      addActive();
    };

    function removeActive() {
      slidesRef.value.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.transform += 'scale(0.8, 0.8) !important';
      });
    }

    function addActive() {
      console.log('add Active !');
      const el = slidesRef.value?.[activeSlide.value - 1];

      el.classList.add('active');
      el.style.transform += 'scale(1, 1) !important';
    }

    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });

    return {
      viewportWidth,
      slideWidth,

      activeSlide,
      prevSlide,
      nextSlide,
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  @include adaptive-value-min-max(margin-top, 20, 35);

  .controller-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 1.5rem;

    button {
      width: 3rem;
      height: 3rem;

      display: inline-block;
      padding: 0.25em;
      background: $secondary-opacity60;
      position: relative;

      &:first-of-type {
        transform: rotate(-180deg);
      }

      svg {
        width: 100%;
        height: 100%;
        color: black;

        use {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .slider {
    @include adaptive-value-min-max(margin-top, 15, 25);

    // overflow: hidden;

    position: relative;
    min-height: 20rem;
    width: 100%;
    // max-width: 25rem;

    // gap: 2rem;
    display: flex;
    align-items: center;

    .slide-item {
      width: 100%;
      max-width: 25rem;
      max-height: 15rem;
      height: 100%;

      background: url(/img/slider-main/1-min.jpg) $overlay;
      background-size: cover;
      background-position: center center;
      background-blend-mode: darken;

      color: $text-light;

      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      font-size: 1.4rem;

      padding-left: 2.5rem;
      padding-bottom: 4rem;

      position: absolute;
      // inset: 0;
      left: 0;
      right: 0;
      top: 0%;
      // bottom: 50%;

      // margin: 1em;
      transform: scale(0.8, 0.8) translateY(-50%);
      opacity: 0.8;

      transition: all 250ms ease-in-out;

      &.active {
        // transform: scale(1, 1);
        opacity: 1;
        max-height: 20rem;
        // max-width: 25rem;

        .slide-link {
          font-weight: 700;
        }
      }

      & > .slide-link {
        color: $text-light;

        position: relative;
        padding-bottom: 3%;

        &:before {
          content: '';
          position: absolute;

          bottom: 0;
          left: 0;
          right: 0;

          width: 100%;
          height: 1px;

          background: $text-light;

          transform: scaleX(0);
          transition: all 200ms ease-in-out;
          transform-origin: left center;
        }

        &:hover::before,
        &:focus::before {
          transform: scaleX(1);
        }
      }
    }
  }
}
</style>
