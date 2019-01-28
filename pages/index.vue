<template>
  <section class="container">
    <div>
      <app-logo/>
      <h2 class="subtitle">
        PWA Vue.js Application
      </h2>
      <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div>
      <div class="links">
        <a
          href="/mobile/home"
          class="button--grey">Mobile</a>
      </div>
    </div>
  </section>
</template>

<script>
  import {scrollMoreData} from "~/utils/mixins"

  export default {
    mixins: [scrollMoreData],
    asyncData({app,route,store,req,res,nuxtState}) {

    },
    data () {
      return {
        online: true,
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

