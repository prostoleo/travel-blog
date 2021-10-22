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

    <div class="slider">
      <div v-for="index in 5" :key="index" class="slide-item">
        {{ index }}
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

    const activeSlideComp = computed(() => activeSlide.value);
    console.log('activeSlideComp: ', activeSlideComp);

    function setTransform(slides) {
      slides.forEach((slide, i) => {
        console.log('slide: ', slide);
        slide.style.transform = `translateX(${
          (i + activeSlideComp.value - 1) * 100
        }%)`;
      });
    }

    onMounted(() => {
      const slides = document.querySelectorAll('.slider > *');
      console.log('slides: ', slides);
      slidesRef.value = slides;

      const numberOfSlides = slides.length;
      console.log('numberOfSlides: ', numberOfSlides);
      setTransform(slides);
    });

    const prevSlide = () => {
      console.log(' prev ');
      activeSlide.value--;
      setTransform(slidesRef.value);
    };
    const nextSlide = () => {
      console.log(' next ');
      activeSlide.value++;
      setTransform(slidesRef.value);
    };

    return {
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

    overflow: hidden;

    position: relative;
    min-height: 20rem;
    width: 100%;

    .slide-item {
      width: 100%;
      height: 20rem;

      background: url(/img/slider-main/1-min.jpg) $overlay;
      background-blend-mode: darken;

      color: $text-light;

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      position: absolute;
      inset: 0;
    }
  }
}
</style>
