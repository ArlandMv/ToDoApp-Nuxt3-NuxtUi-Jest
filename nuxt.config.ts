// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxt/test-utils/module" ],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8000/api",
    },
    app: {
      head: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
      },
    },
  },
  compatibilityDate: "2024-08-09",
});