// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
  },

  modules: ['@nuxt/image-edge', '@nuxtjs/i18n'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // @nuxt/image-edge: https://v1.image.nuxtjs.org/get-started/
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
      },
      {
        code: 'th',
        file: 'th.json',
      },
    ],

    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales/',

    vueI18n: {
      fallbackLocale: 'en',
      legacy: false,
      locale: 'en',
      availableLocales: ['en', 'th'],

      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
          },
        },
        th: {
          currency: {
            style: 'currency',
            currency: 'THB',
          },
        },
      },
    },
  },
});
