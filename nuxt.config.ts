// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nova-Gas",
    },
    
  },
  devtools: { enabled: false },
  css: ["@/assets/scss/index.scss","remixicon/fonts/remixicon.css"],
  modules: ["@pinia/nuxt",'@element-plus/nuxt'],
  plugins: ['@/plugins/chart.ts'],
})
