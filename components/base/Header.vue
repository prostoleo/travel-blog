<template>
  <div class="header">
    <BaseContainer>
      <div class="header__content">
        <nuxt-link to="/" class="header__logo"> logo </nuxt-link>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <nuxt-link to="/" class="nav__link">Главная</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/#new" class="nav__link"
                >Новые приключения</nuxt-link
              >
            </li>
            <li class="nav__item">
              <nuxt-link to="/#directions" class="nav__link"
                >Направление</nuxt-link
              >
            </li>
            <li class="nav__item">
              <nuxt-link to="/#about" class="nav__link">Обо мне</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/" class="nav__link">Посты</nuxt-link>
            </li>
          </ul>
        </nav>

        <div class="header__open-menu">
          <img src="/icons/open-menu.svg" alt="открыть меню" />
        </div>
      </div>
    </BaseContainer>
  </div>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem 0;

  position: relative;

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
