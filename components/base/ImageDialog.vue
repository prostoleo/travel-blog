<template>
  <div class="overlay" @click="closeDialog">
    <div class="content">
      <img :src="imageSrc" alt="" />
      <img src="/icons/close.svg" alt="" class="close" />
      <!-- <span src="/icons/close.svg" alt="" class="close">X</span> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },

  emit: ['close-dialog'],

  setup(props, { emit }) {
    function closeDialog() {
      emit('close-dialog');
    }

    return {
      closeDialog,
    };
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;

  z-index: 10000;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  background: hsla(0, 0%, 0%, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  .content {
    position: relative;

    img {
      padding: 3.5vw;
      width: 100%;
      height: auto;
    }

    img.close,
    span.close {
      --width: 1.5em;

      position: absolute;
      // right: var(--width);
      // top: var(--width);
      right: 0;
      top: 0;

      width: var(--width);
      height: var(--width);

      // transform: translate(calc(var(--width) * -1), var(--width));

      padding: 0 !important;

      z-index: 100000;

      // background: red;
      fill: white;
      color: $white;

      @include adaptive-value-min-max(font-size, 25, 55);

      cursor: pointer;
    }
  }
}
</style>
