const {defineConfig} = require("@vue/cli-service")

module.exports = defineConfig({
  publicPath: "/",
  outputDir: "dist",
  css: {
    loaderOptions: {
      sass: {
        // prependData: `@import "@/assets/styles/app.scss"`
      }
    }
  }
})