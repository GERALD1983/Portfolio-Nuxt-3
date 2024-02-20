// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ["assets/style.css"],
  modules: [
    // librairie icon
    "nuxt-icon",
    //librairie formulaire
    "@vee-validate/nuxt",
  ],
});
