const config = require('./app.config')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-init',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'paddy' },
      { hid: 'keywords', name: 'keywords', content: 'paddy,nuxt' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icon.png' },
    ],
    script: [
      { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
      { src: '/js/cnzz.js'},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/pwa'],
  plugins: [
    '~/plugins/components',
    '~/plugins/filters',
    '~/plugins/directives',
    '~/plugins/axios',
    '~/plugins/element-ui',
    '~/plugins/mint-ui',
  ],
  css: [
    '~/scss/main.scss'
  ],
  router: {
    middleware: ['route']
  },
  axios: {
    baseURL: `${config.app.domain}/api`,
    // credentials: true,
    // proxy:true
  },
  proxy:{
    // '/api2': 'http://example.com'
  },
  manifest: {
    name: 'nuxt-init',
    description: 'A pwa program',
    theme_color: '#618cb9'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('postcss-px2rem')({
        remUnit: 15 // 转换基本单位
      })
    ],
  }
}

