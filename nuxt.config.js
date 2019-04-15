const { resolve } = require('path')

console.log('env: %o',process.env.__ENV)
module.exports = {
  server: {
    host: '0.0.0.0', // default: localhost
    port: 3000      // default: 3000
  },
  env: {
    __ENV: process.env.__ENV
  },
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
      // { rel: 'stylesheet', href: '//unpkg.com/mint-ui/lib/style.css' },      //mint-ui
      // { rel: 'stylesheet', href: '//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css' },      //sui
    ],
    script: [
      // { src: '//g.alicdn.com/sj/lib/zepto/zepto.min.js'},       //zepto
      // { src: '//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js'},      //sui
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
  modules: ['@nuxtjs/axios','@nuxtjs/pwa'],
  plugins: [
    {
      src: "~/plugins/axios",
      ssr: false
    },
    '~/plugins/i18n',
    // '~/plugins/ant-design-vue',
    '~/plugins/element-ui',
    // '~/plugins/mint-ui',
    '~/plugins/components',
    '~/plugins/svg-icon',
    '~/plugins/filters',
    '~/plugins/mixins',
    '~/plugins/directives',
    // '~/plugins/vue-quill-editor',
    // '~/plugins/vue-awesome-swiper',
    // '~/plugins/vue-konva',
  ],
  css: [
    '~/scss/main.scss'
  ],
  router: {
    middleware: ['route']
  },
  axios: {
    // baseURL: ``,
    // credentials: true,
    proxy:true,   //调用第三方api解决跨域问题
    debug: process.env.__ENV == 'development' ? true : false
  },
  proxy:{
    '/di-api/': { target: 'http://114.251.8.193', pathRewrite: {'^/di-api/': ''} }
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

