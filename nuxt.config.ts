module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#15bafe',
    height: '10px'
  },
  /*
   ** Global CSS
   */
  css: ['iview/dist/styles/iview.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/iview'],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  proxy: [
    [
      '/api',
      {
        target:
          process.env.NODE_ENV === 'production'
            ? 'http://server.kooshua.com'
            : process.env.NODE_ENV === 'development'
            ? 'http://test.kslab.com'
            : 'http://test.kslab.com', // api主机
        changeOrigin: true
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['@nuxtjs/axios', '@nuxtjs/proxy', 'iview'],
    extend(config, ctx) {}
  },
  server: {
    port: 3001 // default: 3000
  }
}
