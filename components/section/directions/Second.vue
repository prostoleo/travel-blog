<template>
  <section>
    <BaseContainer>
      <div class="card-wrapper">
        <BaseCard v-for="index in 7" :key="index" />
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
  @include adaptive-value-min-max(margin-top, -75, -125);

  position: relative;
  z-index: 2;

  @include adaptive-value-min-max(padding-top, 35, 55);
  @include adaptive-value-min-max(padding-bottom, 35, 55);

  .card-wrapper {
    // @include adaptive-value-min-max(padding-top, 35, 55);
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    gap: 3rem;
  }
}
</style>
