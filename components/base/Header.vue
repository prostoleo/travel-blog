<template>
  <header class="header">
    <BaseContainer>
      <div class="header__content">
        <nuxt-link to="/" class="header__logo"> logo </nuxt-link>

        <nav
          ref="nav"
          class="nav"
          :class="{ active: isMenuOpenComp }"
          @click="closeMenu"
        >
          <ul class="nav__list">
            <li class="nav__item">
              <nuxt-link id="nav-link-home" to="/" class="nav__link">
                Главная
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link
                id="nav-link-new"
                :to="{ path: '/', hash: '#new' }"
                class="nav__link"
              >
                <!-- @click="navigateToNew" -->
                Новые приключения
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link
                id="nav-link-directions"
                :to="{ path: '/', hash: '#directions' }"
                class="nav__link"
              >
                Направления
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link
                id="nav-link-about"
                :to="{ path: '/', hash: '#about' }"
                class="nav__link"
              >
                Обо мне
              </nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link id="nav-link-posts" to="/posts" class="nav__link">
                Посты
              </nuxt-link>
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
// eslint-disable-next-line no-unused-vars
import { ref, computed, useRouter } from '@nuxtjs/composition-api';

export default {
  setup(props) {
    // const router = useRouter();

    const menuOpen = ref(false);

    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    function closeMenu(event) {
      const el = event.target.closest('.nav__link');

      if (!el) return;

      menuOpen.value = false;
    }

    const isMenuOpenComp = computed(() => menuOpen.value);

    return {
      isMenuOpenComp,
      toggleMenu,
      closeMenu,

      // navigateToNew,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 0;

  background: $white;

  position: sticky;
  top: 0;
  z-index: 1000;
  isolation: isolate;

  box-shadow: 0px 7px 15px hsla(0, 0%, 0%, 10%);

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
    @include mq(lg) {
      display: none !important;
    }

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
  // transform: translateY(-50%);
  transition: all 250ms ease-in-out;

  z-index: -2;

  // isolation: isolate;

  padding: 2rem 0;

  @include mq(lg) {
    position: unset;
    background: transparent;
    transform: translateY(0%);
    z-index: unset;

    margin-left: auto;
    width: max-content;

    & > ul.nav__list {
      flex-direction: row;
    }
  }

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

    &.nuxt-link-exact-active {
      color: $primary-opacity60;
      font-weight: 600;
    }
  }
}
</style>
