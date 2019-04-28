importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1cc9a71e20e60bf8cfdf.js",
    "revision": "8ad46545e2465eadcae9694c9824f031"
  },
  {
    "url": "/_nuxt/39cb93ad798acb4e0400.js",
    "revision": "1689be8748ee58f4d44b225077afe317"
  },
  {
    "url": "/_nuxt/46ba45cef6041dc71ef2.js",
    "revision": "5cc29723e9a079a832a48ae149d25671"
  },
  {
    "url": "/_nuxt/57adeb0367d5827245f2.js",
    "revision": "2ba6946d06f28517761e6e5ca7c8edfb"
  },
  {
    "url": "/_nuxt/700334ff1fa9826b5506.js",
    "revision": "a32d833475059ec9cf31dda8845ee3b9"
  },
  {
    "url": "/_nuxt/8d0ffa30e571762247f9.js",
    "revision": "36685db8119865fdac92ecc23eaf4bab"
  },
  {
    "url": "/_nuxt/c6b82c270be529f70327.css",
    "revision": "f36339707d6d69c798fcd322c3ef5ef0"
  },
  {
    "url": "/_nuxt/da3aa5e4df43736f7d52.css",
    "revision": "528f1f0028d72943b7b57f964479de17"
  },
  {
    "url": "/_nuxt/e375862c8607a2ce0031.js",
    "revision": "86e45e941ad2e6648d17f2c7e378d2fe"
  }
], {
  "cacheId": "nuxt-init",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
