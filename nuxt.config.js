module.exports = {
  srcDir: "src/",
  plugins: ["~/plugins/vue-resource"],
  router: {
    middleware: "checkTheme",
    mode: "hash"
  },
  build: {
    extend(config, { isDev, isClient }) {
      // ...
    }
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "The team website." }
    ]
  }
}
