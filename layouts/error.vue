<template>
  <BaseContainer>
    <div class="wrapper bg-primary">
      <div class="content">
        <!-- -->
        <!-- <h1 v-if="error.statusCode === 404">
          Упс, кажется вы заблудились.<br />
          Этой страницы не существует
        </h1> -->
        <!-- v-else -->
        <h1>Упс, что-то пошло не так</h1>
        <NuxtLink to="/" class="to-home">На главную </NuxtLink>
      </div>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  // props: ['error'],
};
</script>

<style lang="scss" scoped>
.wrapper {
  // padding: 1rem;
  // min-height: 70vh;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;

  background-image: url(/img/404.svg);
  background-position: top center;

  .content {
    margin-top: 3.5em;

    h1 {
      @include adaptive-value-min-max(font-size, 24, 48);
      line-height: 100%;

      margin-bottom: 0.75em;
    }

    a {
      display: inline-block;
      padding: 0.5em 1em;

      @include adaptive-value-min-max(font-size, 14, 20);
      background: $primary-opacity60;

      &:hover,
      &:focus {
        opacity: 0.8;
      }
    }
  }
}
</style>
