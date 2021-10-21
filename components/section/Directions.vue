<template>
  <section id="#new">
    <BaseContainer>
      <div class="content">
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <h2>Направления</h2>
        </div>

        <div class="slider" :data-slick="slickOptions">
          <div class="slide">1</div>
          <div class="slide">2</div>
          <div class="slide">3</div>
          <div class="slide">4</div>
          <div class="slide">5</div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {
  setup() {
    const slickOptions = {}

    return {
      slickOptions: JSON.stringify(slickOptions),
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  @include adaptive-value-min-max(padding-top, 40, 70);
  @include adaptive-value-min-max(padding-bottom, 40, 70);

  .content {
    .title {
      text-align: center;

      margin: 0 auto;
      width: 100%;

      display: inline-flex;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;

      img {
        width: 50%;
      }

      h2 {
        @include adaptive-value-min-max(font-size, 24, 40);

        font-weight: 700;
        color: $title-dark;
      }
    }
  }
}
</style>
