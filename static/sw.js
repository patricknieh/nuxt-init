importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2741d89c4796cb69deb3.js",
    "revision": "685ef03e07aeff3027d6f14378cc2415"
  },
  {
    "url": "/_nuxt/371ef154baa9c682b944.js",
    "revision": "d193c1765aa3b491fcb00cabac2ce62a"
  },
  {
    "url": "/_nuxt/50465e2d56d5e3dd4310.js",
    "revision": "f4473833a1079fbe15fd01aa9c5336f3"
  },
  {
    "url": "/_nuxt/5c4a9762a75c734d77e7.js",
    "revision": "1e5391b065275378b6b99a733c3c6fd8"
  },
  {
    "url": "/_nuxt/894f17419cfdab80d405.js",
    "revision": "340f019c792473cb13886054e1633c46"
  },
  {
    "url": "/_nuxt/a60128930e135f877b3d.js",
    "revision": "2b4b363e8c55bbb8e9246597fb7788d6"
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
