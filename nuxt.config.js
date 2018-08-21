module.exports = {
  srcDir: "src/",
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
        content: "/static/browserconfig.xml?v=E656kOkMMx"
      },
      {
        name: "theme-color",
        content: "#6aa1f4"
      }
    ],
    link: [
      {
        rel: "shortcut icon",
        href: "/static/favicon.ico?v=E656kOkMMx"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png?v=E656kOkMMx"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png?v=E656kOkMMx"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-touch-icon.png?v=E656kOkMMx"
      },
      {
        rel: "manifest",
        href: "/static/site.webmanifest?v=E656kOkMMx"
      },
      {
        rel: "mask-icon",
        href: "/static/safari-pinned-tab.svg?v=E656kOkMMx",
        color: "#5bbad5"
      }
    ]
  }
}
