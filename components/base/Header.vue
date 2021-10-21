<template>
  <header class="header">
    <BaseContainer>
      <div class="header__content">
        <nuxt-link to="/" class="header__logo"> logo </nuxt-link>

        <nav ref="nav" class="nav" :class="{ active: isMenuOpenComp }">
          <ul class="nav__list">
            <li class="nav__item">
              <nuxt-link to="/" class="nav__link"> Главная </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/#new" class="nav__link">
                Новые приключения
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/#directions" class="nav__link">
                Направления
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/#about" class="nav__link"> Обо мне </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/posts" class="nav__link"> Посты </nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="header__open-menu">
          <img
            src="/icons/open-menu.svg"
            alt="открыть меню"
            @click="toggleMenu"
          />
        </div>
      </div>
    </BaseContainer>
  </header>
</template>

<script>
import { ref, computed } from '@nuxtjs/composition-api'

export default {
  setup(props) {
    const menuOpen = ref(false)

    function toggleMenu() {
      menuOpen.value = !menuOpen.value
    }

    const isMenuOpenComp = computed(() => menuOpen.value)

    return {
      isMenuOpenComp,
      toggleMenu,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 0;

  background: $white;

  position: sticky;
  top: 0;
  z-index: 10;

  // .header__content

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // .header__logo

  &__logo {
    font-size: 1.6rem;
    font-weight: bold;
  }

  // .header__open-menu

  &__open-menu {
    img {
      cursor: pointer;
    }
  }
}
.nav {
  // display: none;
  position: absolute;

  top: 100%;
  left: 0;
  right: 0;
  width: 100%;

  font-size: 1.6rem;
  background: white;
  text-align: center;

  transform: translateY(-130%);
  transition: all 250ms ease-in-out;

  z-index: -1;

  padding: 2rem 0;

  &.active {
    transform: translateY(0%);
  }

  // .nav__list

  &__list {
    display: flex;
    flex-direction: column;

    gap: 1.1em;
  }

  // .nav__item

  &__item {
  }

  // .nav__link

  &__link {
    &:hover,
    &:focus {
      color: $primary-opacity60;
    }
  }
}
</style>
