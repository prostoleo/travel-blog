<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
  // background: goldenrod;

  max-width: 123rem;

  @include mq(lg) {
    width: 90% !important;
    padding: 0 !important;
  }
}
</style>
