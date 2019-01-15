<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-init
      </h1>
      <h2 class="subtitle">
        PWA Vue.js Application
      </h2>
      <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        {{ online ? 'online' : 'offline' }}
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
    <div>
      <img src="/img/icon.png">
    </div>
    <div class="logo"></div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </section>
</template>

<script>
  import {scrollMoreData} from "~/utils/mixins"

  export default {
    mixins: [scrollMoreData],
    data () {
      return {
        online: true
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

