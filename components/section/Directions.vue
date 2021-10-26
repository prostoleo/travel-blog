<template>
  <section id="#directions">
    <BaseContainer>
      <div class="content">
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <h2>Направления</h2>
        </div>

        <!-- <SliderHome /> -->
      </div>
    </BaseContainer>
    <SliderHomeNew />
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

  overflow-x: hidden !important;

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

    /* .slider {
      display: flex;
      gap: 1rem;

      max-width: 100%;
      // .my-slide {
      //   display: flex;
      //   align-items: center;
      //   justify-content: center;

      //   width: 100px;
      // }

      .tns-item {
        width: 100%;
        // max-width: 200px;
        font-size: 3rem;
        font-family: Arial;
        text-align: center;
        padding: 2em;
        background: #fafafb;

        // margin: 0 1rem;
      }
      .tns-item:nth-child(odd) {
        background: #c8e1ff;
      }
    } */
  }
}
</style>
