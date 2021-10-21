<template>
  <footer class="footer">
    <BaseContainer>
      <div class="footer__content">&#169; 2021 г. - Все права защищены</div>
    </BaseContainer>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background: $primary-dark;

  padding: 1.5rem 0;

  &__content {
    text-align: center;

    font-size: 1.2rem;
    color: $text-light;
  }
}
</style>
