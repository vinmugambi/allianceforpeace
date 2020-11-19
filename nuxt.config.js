export default {
  // server: {
  //   port: 80,
  //   host: "localhost"
  // },
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "form",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.jpg" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "//db.onlinewebfonts.com/c/25a4fec4e6e60457b078baa1b365a48f?family=ScalaSans"
      }
    ],
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
    ]
  },
  static: {
    prefix: false
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxt/content", "@nuxtjs/svg", "@nuxt/http"],

  content: {
    liveEdit: false,
    nestedProperties: ["author.name"],
    fullTextSearchFields: ["title"]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
