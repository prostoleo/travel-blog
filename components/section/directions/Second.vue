<template>
  <section>
    <BaseContainer>
      <div class="card-wrapper">
        <BaseCard
          v-for="(post, index) in posts"
          :key="index"
          :card-data="post"
        />
      </div>
    </BaseContainer>
  </section>
</template>

<script>
// import { inject } from '@nuxtjs/composition-api';

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  setup() {
    // const directions = inject('directions');

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
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3rem;
  }
}
</style>
