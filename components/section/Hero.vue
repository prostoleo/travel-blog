<template>
  <section>
    <BaseContainer>
      <div class="content">
        <h1 class="title">Окунитесь в мир путешествий по России</h1>

        <p class="text">
          Добро пожаловать в мой блог!<br />
          Меня зовут Федор и я обожаю путешествовать по нашей необъятной Родине
        </p>

        <div class="btn-row">
          <button class="btn btn-primary">Новые приключения</button>
          <button class="btn btn-secondary">Направления</button>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  @include adaptive-value-min-max(padding-top, 35, 55);

  background: url(/img/hero-bg/1-min.jpg) $overlay;
  background-blend-mode: darken;

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 95vh;

  .content {
    text-align: center;

    h1.title {
      @include adaptive-value-min-max(font-size, 32, 64);
      font-weight: 800;
      line-height: 100%;

      color: $title-light;

      margin-bottom: 0.5em;
    }

    p.text {
      @include adaptive-value-min-max(font-size, 16, 24);
      font-weight: 400;
      color: $text-light;

      margin-bottom: 2.5em;
    }

    .btn-row {
      display: inline-flex;
      // align-items: center;

      gap: 0 2rem;

      button.btn {
        display: inline-block;
        padding: 0.5em 1em;

        border: 2px solid transparent;

        font-size: 1.4rem;
        font-weight: 600;

        &.btn-primary {
          background: $primary;
          color: $text-light;
        }

        &.btn-secondary {
          // border-color: $primary;
          border-color: $text-light;
          color: $text-light;
        }
      }
    }
  }
}
</style>
