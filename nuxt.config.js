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
  css: ['~/assets/css/normalize.css'],

  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    '@nuxtjs/composition-api/module',
    '@aceforth/nuxt-netlify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY,
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

  generate: {
    fallback: true,
  },

  fontawesome: {
    icons: {},
  },

  loading: {
    color: 'goldenrod',
    height: '3px',
  },

  server: {
    port: 7777,
    host: '0.0.0.0',
  },

  netlify: {
    headers: {
      '/*': ['Access-Control-Allow-Origin: *'],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
