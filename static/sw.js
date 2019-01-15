importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14391d08db723b324ffa.js",
    "revision": "b1e5317b87bac7ec0969c11f48bcf2f3"
  },
  {
    "url": "/_nuxt/849499c5399b2673fc79.js",
    "revision": "d15a274f45c3969eeac694682a695e13"
  },
  {
    "url": "/_nuxt/a5141872336ec994cd8b.js",
    "revision": "9212c5144127d300bcaf515cad510ffb"
  },
  {
    "url": "/_nuxt/a5ce93a035d0209d1bed.js",
    "revision": "27269361ddbd5367cca977255a008911"
  },
  {
    "url": "/_nuxt/c04e43d3441f656623ae.js",
    "revision": "648e01b5063853e9c17dd66018ed82dc"
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
