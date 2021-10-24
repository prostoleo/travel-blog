<template>
  <section id="#new">
    <BaseContainer>
      <div class="content">
        <div class="title">
          <img src="/icons/divider.svg" alt="разделитель" />
          <h2>Новые приключения</h2>
        </div>

        <div class="card-wrapper">
          <BaseCard v-for="index in 9" :key="index" />
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
    display: grid;
    justify-content: center;

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

    .card-wrapper {
      @include adaptive-value-min-max(padding-top, 35, 55);

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
      gap: 3rem;
    }
  }
}
</style>
