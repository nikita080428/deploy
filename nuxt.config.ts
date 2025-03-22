// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: 'NUXT_COLOR_MODE',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

  css: [
    '~/assets/main.css'
  ],

  app: {
    head: {
      title: 'Новости i18n',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
    }
  },

  modules:
    [
      '@nuxtjs/color-mode',
      '@nuxt/ui',
    ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/': { prerender: true, swr: true },
    '/news/en': { ssr: false },
    '/news/ru': { ssr: false },
    '/news': { redirect: '/news/ru' },
    '/news/russian': { redirect: '/news/ru' },
    '/news/english': { redirect: '/news/en' },
  }

})