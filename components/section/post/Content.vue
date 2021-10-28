<template>
  <div class="post-container">
    <section class="first">
      <BaseContainer>
        <div class="text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            dolor nostrum dolorem ipsa eveniet, nulla saepe unde autem deserunt
            vero quis, repellendus delectus iste ab facilis perferendis
            voluptatem odio asperiores veritatis officia eligendi, labore
            expedita adipisci? Mollitia minima ut dolorum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur reprehenderit incidunt nisi velit autem ex vitae officia
            odit deleniti adipisci, nemo ad asperiores commodi possimus sapiente
            dolorem. Iusto alias porro fugit provident mollitia pariatur ducimus
            laborum, quo blanditiis saepe veritatis error ea corporis
            accusantium quos eaque quae reiciendis ad beatae aspernatur natus
            accusamus incidunt. Fugit, neque magni, dolor magnam nostrum eum
            obcaecati, sequi ducimus natus eveniet repudiandae fugiat quos
            iusto. Maiores incidunt est tenetur ipsum exercitationem optio enim
            temporibus, quam in ratione ullam odio repellat iste necessitatibus
            tempore officiis? Obcaecati aperiam ipsa deleniti, delectus iure
            fugiat accusantium aliquid repellat, esse libero illo, tenetur
            doloremque vel ab perspiciatis unde odit nam dolore molestias quam
            architecto. Aspernatur provident recusandae nihil pariatur molestias
            eaque deserunt voluptate, reprehenderit maxime illo voluptates
            architecto laudantium qui harum dolor, accusantium quisquam ad quam.
          </p>
          <p>
            Ex esse deserunt laborum pariatur suscipit dolorem culpa atque,
            nostrum vel at minima iure doloremque minus adipisci sapiente
            perspiciatis magnam alias. Beatae neque tempore nobis itaque
            repellendus! Sit corrupti, vel ipsam mollitia quia eveniet adipisci
            iste explicabo animi, exercitationem et aut. Minus nesciunt adipisci
            eaque? Eos culpa soluta perspiciatis eius accusamus alias illo.
          </p>
        </div>
      </BaseContainer>

      <img src="/img/post-bg/girl.jpg" alt="" class="full-img" />
    </section>
    <section class="second">
      <BaseContainer>
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <h2>Подзаголовок</h2>
        </div>
        <div class="text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            dolor nostrum dolorem ipsa eveniet, nulla saepe unde autem deserunt
            vero quis, repellendus delectus iste ab facilis perferendis
            voluptatem odio asperiores veritatis officia eligendi, labore
            expedita adipisci? Mollitia minima ut dolorum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            eveniet non quo odio illum sapiente nulla, magnam eum quidem quis!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            eveniet non quo odio illum sapiente nulla, magnam eum quidem quis!
          </p>
        </div>
      </BaseContainer>

      <img src="/img/post-bg/park.jpg" alt="" class="full-img" />
    </section>

    <section class="second">
      <BaseContainer>
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <h2>Подзаголовок</h2>
        </div>
        <div class="text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            dolor nostrum dolorem ipsa eveniet, nulla saepe unde autem deserunt
            vero quis, repellendus delectus iste ab facilis perferendis
            voluptatem odio asperiores veritatis officia eligendi, labore
            expedita adipisci? Mollitia minima ut dolorum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            eveniet non quo odio illum sapiente nulla, magnam eum quidem quis!
          </p>
        </div>
      </BaseContainer>

      <div class="grid-gallery">
        <img
          id="gallery-item-1"
          class="grid-gallery__item"
          src="/img/grid-gallery/5.jpg"
        />
        <img
          id="gallery-item-2"
          class="grid-gallery__item"
          src="/img/grid-gallery/2.jpg"
        />
        <img
          id="gallery-item-3"
          class="grid-gallery__item"
          src="/img/grid-gallery/3.jpg"
        />
        <img
          id="gallery-item-4"
          class="grid-gallery__item"
          src="/img/grid-gallery/4.jpg"
        />
        <img
          id="gallery-item-5"
          class="grid-gallery__item"
          src="/img/grid-gallery/1.jpg"
        />
      </div>

      <!-- <div id="gallery-item-1" class="grid-gallery__item">
          <img src="/img/grid-gallery/1.jpg" alt="" />
        </div>
        <div id="gallery-item-2" class="grid-gallery__item">
          <img src="/img/grid-gallery/2.jpg" alt="" />
        </div>
        <div id="gallery-item-3" class="grid-gallery__item">
          <img src="/img/grid-gallery/3.jpg" alt="" />
        </div>
        <div id="gallery-item-4" class="grid-gallery__item">
          <img src="/img/grid-gallery/4.jpg" alt="" />
        </div>
        <div id="gallery-item-5" class="grid-gallery__item">
          <img src="/img/grid-gallery/5.jpg" alt="" />
        </div> -->
    </section>

    <section class="second">
      <BaseContainer>
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <h2>Подзаголовок</h2>
        </div>
        <div class="text-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            dolor nostrum dolorem ipsa eveniet, nulla saepe unde autem deserunt
            vero quis, repellendus delectus iste ab facilis perferendis
            voluptatem odio asperiores veritatis officia eligendi, labore
            expedita adipisci? Mollitia minima ut dolorum.
          </p>
        </div>
      </BaseContainer>

      <div id="flex-gallery-1" class="flex-gallery">
        <div
          v-for="index in 5"
          ref="flexGalleryItem"
          :key="index"
          class="flex-gallery__item"
          :class="index === 3 ? 'active' : ''"
          @click="setActiveSlide"
        >
          <div
            class="img"
            :style="`background-image: url(/img/flex-gallery/${index}.jpg)`"
          >
            <h3 class="flex-gallery__title">Магадан</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, computed, onMounted } from '@nuxtjs/composition-api';

export default {
  setup() {
    // const flexGalleryItem = ref([]);
    const sliderEl1 = ref(null);
    const slidesEls1 = ref(null);

    const setActiveSlide = (event) => {
      console.log('sliderEl1.value: ', sliderEl1.value);
      console.log('slidesEls1.value: ', slidesEls1.value);
      console.log('event: ', event);

      slidesEls1.value.forEach((item) => item.classList.remove('active'));

      const { target } = event;

      target.closest('.flex-gallery__item').classList.add('active');
    };

    onMounted(() => {
      sliderEl1.value = document.querySelector('.flex-gallery');

      slidesEls1.value = document.querySelectorAll('.flex-gallery__item');
    });

    return {
      setActiveSlide,
    };
  },
};
</script>

<style lang="scss" scoped>
/* .post-container {
  @include mq(lg) {
    @include adaptive-value-min-max(padding-bottom, 45, 105);
  }
} */

img {
  cursor: pointer;
}

img.full-img {
  max-height: 40rem;
  max-width: 1920px;
  width: 100%;

  object-fit: cover;

  margin: 0 auto;
}

.grid-gallery {
  padding: 0 1rem;
  @include adaptive-value-min-max(margin-top, 25, 45);
  // max-width: 1920px;
  // width: 100%;

  display: flex;
  // align-items: center;
  gap: 1.5rem;

  overflow-x: auto !important;

  max-height: 30rem;

  @include mq(lg) {
    display: grid;
    max-height: unset !important;

    grid-template-columns: repeat(auto-fit, 27rem);
    // grid-template-rows: repeat(2, 20rem);
    gap: 3rem;
    overflow-x: unset !important;

    justify-content: center;
  }

  @include mq(xlg) {
    grid-template-columns: repeat(4, 27rem);
    grid-template-rows: repeat(2, auto);

    &__item {
      width: 100% !important;
      height: 100% !important;
      flex-grow: unset;
      flex-shrink: unset;
      flex-basis: unset;
    }

    #gallery-item-1 {
      // grid-area: 1 / 2 / 1 / 3;
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
    #gallery-item-2 {
      // grid-area: a;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    #gallery-item-3 {
      // grid-area: a;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
    #gallery-item-4 {
      // grid-area: a;
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
    #gallery-item-5 {
      // grid-area: a;
      grid-column: 4 / 5;
      grid-row: 1 / 3;
    }
  }

  &__item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 40rem;

    object-fit: cover;
    @include adaptive-value-min-max(width, 250, 400);
    // max-width: 40rem;
  }
}

.flex-gallery {
  max-width: 100%;
  display: flex;

  overflow-x: auto;

  height: 100%;
  max-height: 50rem;

  gap: 1.5rem;

  &__item {
    width: 100%;
    max-width: 30%;
    flex: 1 0 30%;

    & > .img {
      @include adaptive-value-min-max(height, 200, 500);

      background-color: $overlay;
      background-blend-mode: darken;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;

      /* display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      padding-bottom: 20%;
      padding-left: 10%; */

      position: relative;
    }
  }

  &__title {
    position: absolute;
    bottom: 20%;
    left: 10%;

    @include adaptive-value-min-max(font-size, 14, 18);
    font-weight: 600;

    color: $text-light;
    // opacity: 0;

    width: max-content;
  }

  @include mq(lg) {
    overflow-x: hidden !important;
    justify-content: space-between !important;
    gap: 1rem !important;

    &__item {
      flex: 1;
      object-fit: cover;
      cursor: pointer;
      transition: flex 250ms ease-in-out;

      max-width: unset;

      &.active {
        flex: 10;

        h3.flex-gallery__title {
          opacity: 1;
        }
      }
    }

    &__title {
      opacity: 0;

      transition: opacity 250ms ease-in-out !important;
    }
  }
}

section {
  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 35, 55);

  .text-wrapper {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;

    @include adaptive-value-min-max(padding, 15, 25);

    background: $white;
    color: $text-dark;

    @include adaptive-value-min-max(font-size, 14, 16);

    p {
      text-indent: 1.5rem;
      line-height: 160%;
      text-align: justify;
      hyphens: auto;

      margin-top: 1.5em;

      &:first-of-type {
        margin-top: 0 !important;
      }
    }
  }

  .title {
    text-align: center;

    margin: 0 auto;
    width: 100%;

    display: inline-flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    img {
      width: 25%;
    }

    h2 {
      @include adaptive-value-min-max(font-size, 24, 40);

      font-weight: 700;
      color: $title-dark;
    }
  }
}

section.first {
  @include adaptive-value-min-max(margin-top, -125, -150);

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 35, 55);

  position: relative;
  z-index: 1;
}

section.second {
}
</style>
