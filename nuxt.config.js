module.exports = {
  srcDir: "src/",
  rootDir: __dirname,
  plugins: ["~/plugins/vue-resource"],
  router: {
    middleware: "checkTheme"
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "static",
    extend(config, { isDev, isClient }) {
      // ...
    }
  },
  head: {
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "The team website."
      },
      {
        name: "msapplication-TileColor",
        content: "#6aa1f4"
      },
      {
        name: "msapplication-config",
        content: "/browserconfig.xml?v=E656kOkMMx"
      },
      {
        name: "theme-color",
        content: "#6aa1f4"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ]
  }
}
