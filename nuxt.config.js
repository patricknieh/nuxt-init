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
      { name: 'keywords', content: 'paddy,nuxt' },
      { name: 'description', content: 'Nuxt.js project' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icon.png' },
      { rel: 'stylesheet', href: '//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css' },
      { rel: 'stylesheet', href: '//g.alicdn.com/msui/sm/0.6.2/css/sm-extend.min.css' },
    ],
    script: [
      // { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
      { src: '//g.alicdn.com/sj/lib/zepto/zepto.min.js'},
      { src: '//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js'},
      { src: '//g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js'},
      { src: '/js/cnzz.js'},
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/pwa'],// @nuxtjs/pwa -> DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
  plugins: [
    '~/plugins/components',
    '~/plugins/filters',
    '~/plugins/directives',
    '~/plugins/axios',
    '~/plugins/ant-design-vue',
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
    }
  }
}
