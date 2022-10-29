const {defineConfig} = require("@vue/cli-service")

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        // prependData: `@import "@/assets/styles/app.scss"`
      }
    }
  }
})