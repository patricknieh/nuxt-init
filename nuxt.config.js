const config = require('./app.config')
const { resolve } = require('path')

module.exports = {
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
    ],
    script: [
      // { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
      // { src: '//g.alicdn.com/sj/lib/zepto/zepto.min.js'},
      // { src: '//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js'},
      { src: '/js/snap.svg-min.js'},
      { src: '/js/gt.js'},
      { src: '/js/cnzz.js'}
    ]
  },
  // mode: 'spa',
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white'
  // },
  modules: ['@nuxtjs/axios'],
  plugins: [
    '~/plugins/axios',
    '~/plugins/ant-design-vue',
    '~/plugins/svg-icon',
    '~/plugins/vue-konva',
    '~/plugins/components',
    '~/plugins/filters',
    '~/plugins/directives'
  ],
  css: [
    '~/scss/main.scss'
  ],
  router: {
    middleware: ['route']
  },
  axios: {
    // baseURL: `${config.app.domain}`,
    // credentials: true,
    proxy:true
  },
  proxy:{
    '/api/': { target: 'http://127.0.0.1:7001', pathRewrite: {'^/api/': ''} }
  },
  watch: ['~/app.config.js'],
  manifest: {
    name: 'nuxt-init',
    description: 'A pwa program',
    theme_color: '#618cb9'
  },
  build: {
    extend (config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [resolve(__dirname, 'static/svg')]

      // Includes /assets/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, 'static/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      })
    }
  }
}

