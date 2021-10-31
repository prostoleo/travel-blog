<template>
  <div>
    <BaseHeader ref="baseHeader" />
    <main>
      <Nuxt />
    </main>
    <BaseFooter />
  </div>
</template>

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
