export default {
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'travel-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'ant-design-vue/dist/antd.css',
    '~/assets/css/normalize.css',
  ],

  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'storyblok-nuxt',
      {
        accessToken: 'YOUR_PREVIEW_TOKEN',
        cacheProvider: 'memory',
      },
    ],

    // '@nuxtjs/fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  googleFonts: {
    display: 'swap',
    subsets: 'cyrillic',

    OpenSans: [400, 600, 700, 800],

    prefetch: true,
    preconnect: true,
    preload: true,
  },

  fontawesome: {
    icons: {},
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  /* router: {
    scrollBehavior(to) {
      if (process.client) {
        console.log('document: ', document);
        console.log('to.hash: ', to.hash);
        console.log('typeof to.hash: ', typeof to.hash);
        console.log('document.querySelector: ', document.querySelector);
        console.log(
          'document.querySelector(to.hash): ',
          document.querySelector(to.hash)
        );
        if (to.hash) {
          return window.scrollTo({
            top:
              document.querySelector(`.${to.hash.slice(1)}`).offsetTop +
              window.innerHeight,
            behavior: 'smooth',
          });
        }
        return window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
  }, */

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      // eslint-disable-next-line require-await
      const findEl = async (hash, x) => {
        console.log('findEl: x: ', x);
        return (
          document.querySelector(`.${hash}`) ||
          // document.getElementById(`${hash}`) ||
          new Promise((resolve, reject) => {
            if (x > 100) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        const el = await findEl(to.hash.slice(1));
        console.log('el: ', el);

        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0, behavior: 'smooth' };
    },
  },
};
