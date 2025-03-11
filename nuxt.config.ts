import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },

  app: {
    head: {
      title: "Онлайн магазин",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      Roboto: [400, 500, 600, 700],
    },
  },

  compatibilityDate: "2025-03-11",
});