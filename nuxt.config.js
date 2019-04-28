const webpack = require('webpack')
const { resolve } = require('path')
const {API_HOST} = require('./config')

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
    ],
    script: [
      // { src: 'https://s19.cnzz.com/z_stat.php?id=1262375830&web_id=1262375830',language:'JavaScript'},   //cnzz
      // { src: '/js/snap.svg-min.js'},      //snap
      // { src: '/js/gt.js'}      //极验
    ]
  },
  modules: ['@nuxtjs/axios'],
  plugins: [
    {src: "~/plugins/axios", ssr: false},
    '~/plugins/i18n',
    '~/plugins/element-ui',
    '~/plugins/components',
    '~/plugins/svg-icon',
    '~/plugins/filters',
    '~/plugins/mixins',
    '~/plugins/directives',
  ],
  css: [
    '~/styles/main.scss'
  ],
  router: {
    middleware: ['route']
  },
  axios: {
    proxy:true,
    debug: process.env.__ENV === 'development' ? true : false
  },
  proxy:{
    '/api/': { target: API_HOST, pathRewrite: {'^/api/': ''} }
  },
  watch: ['~/config/index.js'],
  manifest: {
    name: 'nuxt-init',
    description: 'A pwa program',
    theme_color: '#618cb9'
  },
  build: {
    analyze: process.env.__ENV === 'development' ? true : false,
    extractCSS: true,
    cssSourceMap: false,
    maxChunkSize: 100000,
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    // postcss: [
      // require('postcss-px2rem')({
      //   remUnit: 15 // 转换基本单位
      // })
    // ],
    plugins: [
      new webpack.ProvidePlugin({
        // '_': 'lodash'
      })
    ],
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

