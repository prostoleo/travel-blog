<template>
  <section id="#about">
    <BaseContainer>
      <div class="content">
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <h2>Обо мне</h2>
        </div>

        <div class="rows">
          <div class="row">
            <img src="/img/about/1.jpg" class="row__img" alt="" />
            <div class="row__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              similique reprehenderit mollitia eum rem quisquam nisi,
              accusantium iusto, dolorum, sed iste fugiat aliquam suscipit.
              Deserunt voluptatibus placeat labore! Voluptates, vel. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. In similique
              reprehenderit mollitia eum rem quisquam nisi, accusantium iusto,
              dolorum, sed iste fugiat aliquam suscipit.
            </div>
          </div>

          <div class="row">
            <img src="/img/about/2.jpg" class="row__img" alt="" />
            <div class="row__content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              similique reprehenderit mollitia eum rem quisquam nisi,
              accusantium iusto, dolorum, sed iste fugiat aliquam suscipit.
              Deserunt voluptatibus placeat labore! Voluptates, vel. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. In similique
              reprehenderit mollitia eum rem quisquam nisi, accusantium iusto,
              dolorum, sed iste fugiat aliquam suscipit. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. In similique reprehenderit
              mollitia eum rem quisquam nisi, accusantium iusto, dolorum, sed
              iste fugiat aliquam suscipit.
            </div>
          </div>
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
  @include adaptive-value-min-max(padding-top, 40, 70);
  @include adaptive-value-min-max(padding-bottom, 40, 70);

  .content {
    /* display: grid;
    justify-content: center; */

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

    .rows {
      width: 100%;
      // justify-self: stretch;

      @include adaptive-value-min-max(padding-top, 35, 55);

      .row {
        display: flex;
        flex-direction: column-reverse;
        align-items: stretch;
        gap: 1.75rem;

        margin-top: 2.5em;

        &:first-of-type {
          margin-top: 0 !important;
        }

        .row__img {
          max-height: 50rem;
          object-fit: cover;

          /* // img {
          } */
        }

        .row__content {
          @include adaptive-value-min-max(font-size, 14, 16);

          max-width: 65ch;
          margin: 0 auto;

          text-align: justify;
          hyphens: auto;
          text-indent: 1.5rem;

          line-height: 160%;
        }
      }
    }
  }
}
</style>
