const config = require('./app.config')
const { resolve } = require('path')

module.exports = {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  head: {
    title: 'title',
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
      // { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'},      //jauery
      { src: '//g.alicdn.com/sj/lib/zepto/zepto.min.js'},      //zepto
      { src: '//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js'},      //msui
      // { src: 'https://s19.cnzz.com/z_stat.php?id=1262375830&web_id=1262375830',language:'JavaScript'},   //change cnzz id
      // { src: '/js/snap.svg-min.js'},      //snap
      // { src: '/js/gt.js'}      //极验
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
    {
      src: "~/plugins/axios",
      ssr: false
    },
    '~/plugins/i18n',
    '~/plugins/ant-design-vue',
    '~/plugins/components',
    '~/plugins/svg-icon',
    '~/plugins/filters',
    '~/plugins/mixins',
    // '~/plugins/directives',
    // '~/plugins/vue-konva',
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
    '/api/': { target: config.API_ROOT, pathRewrite: {'^/api/': ''} }
  },
  env: {
    __ENV: process.env.__ENV
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

