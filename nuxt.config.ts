// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "ARPMLT",
      meta: [
        {
          name: "Agape Reaching People Ministry",
          content: "Loving God, Loving People",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
    },
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/hints", "@nuxt/image", "@nuxt/ui"],

  css: ["~/assets/css/main.css"],

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
      },
    },
  },
});
