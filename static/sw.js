importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/045ceb6060153099930c.js",
    "revision": "1e94637522d70bf4d499e219573750d1"
  },
  {
    "url": "/_nuxt/17d3a1f953d8c2209a35.js",
    "revision": "e20a6a5aea98a90241f26767afab18fd"
  },
  {
    "url": "/_nuxt/6074d623e7cec5bfc5b8.js",
    "revision": "206b398f7e6a57732a521230d7e63172"
  },
  {
    "url": "/_nuxt/71e85525a892c15154b7.js",
    "revision": "d0f2c79202458a4f933473c92b49d021"
  },
  {
    "url": "/_nuxt/a49a336dace581044b8a.js",
    "revision": "eb56b902a2c827c8017f2d4a6432bf24"
  },
  {
    "url": "/_nuxt/d63c728b5f9962c3a6b5.js",
    "revision": "f8c4a893347cc0d61b5c32fa95a07422"
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
