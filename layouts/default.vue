<template>
  <div>
    <BaseHeader />
    <main>
      <Nuxt />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
// import Container from "../components/base/Container.vue";
export default {};
</script>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-rows: auto 1fr auto;

  min-height: 100vh;
}

main {
  position: relative;
  z-index: 1;
}
</style>
