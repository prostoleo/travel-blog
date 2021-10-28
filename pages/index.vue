<template>
  <main>
    <SectionHero />
    <SectionNew />
    <SectionDirections />
    <SectionAbout />
  </main>
</template>

<script>
import { onMounted, useRoute } from '@nuxtjs/composition-api';

export default {
  name: 'Home',

  setup() {
    const route = useRoute();

    // todo intersectionObserverApi
    onMounted(() => {
      console.log('route.value: ', route.value);

      if (route.value.hash) {
        const selectorInitial = route.value.hash.slice(1);

        const el = document.querySelector(`section.${selectorInitial}`);
        console.log('el: ', el);

        el.scrollIntoView(true, {
          behavior: 'smooth',
        });
      }

      const selectors = ['new', 'directions', 'about'];

      const sections = selectors.map((selector, i) =>
        document.querySelectorAll(`section.${selector}`)
      );
      console.log('sections: ', sections);

      const links = selectors.map((selector, i) =>
        document.querySelectorAll(`#nav-link-${selector}`)
      );
      console.log('links: ', links);

      /* function addToNavLink(event) {
        console.log('event: ', event);

        const curSection = sections[2];
        console.log('curSection: ', curSection);

        const params = curSection.getBoundingClientRect();
        // const params = curSection.getBoundingClientRect();
        console.log('params: ', params);
      } */

      // window.addEventListener('scroll', addToNavLink);
      // ==============
      /* const obsOptions = {
        root: null,

        threshold: 0,
      };

      function highlightMenuItem(entries, observer) {
        const [entry] = entries;

        if (entry.isIntersecting === true) {
          console.log(' пересекается ! ');
        }

        if (entry.isIntersecting === false) {
          console.log(' НЕ пересекается ! ');
        }
      }

      const sectionObserver = new IntersectionObserver(
        highlightMenuItem,
        obsOptions
      );

      sections.forEach((section) => {
        sectionObserver.observe(section);
      }); */
    });

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
