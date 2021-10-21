<template>
  <div class="my-layout">
    <BaseHeader />
    <BaseContainer>
      <Nuxt />
    </BaseContainer>
    <!-- <BaseFooter /> -->
  </div>
</template>

<script>
// import Container from "../components/base/Container.vue";
export default {}
</script>

<style lang="scss" scoped>
.my-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
