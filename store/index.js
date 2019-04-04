import Net from '~/utils/tools/net'

const queryString = require('query-string')
const uuidv1 = require('uuid/v1')
const uuid = {uuid: uuidv1()}

export const state = () => ({
  locales: ['zh_CN', 'en_US'],
  locale: 'zh_CN',
  token: '',
  route: ''
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_TOKEN(state, payload) {
    state.token = payload
  },
  SET_ROUTE(state, payload) {
    state.route = payload
  }
}

export const actions = {
  async nuxtServerInit({ dispatch, commit, getters, state }, { app, req, res }) {
    if (req.headers.cookie) {
      let cookie = Net.cookie.parse(req.headers.cookie)
      if(cookie.token) commit('SET_TOKEN', cookie.token)
    }
  },

  // 登录
  async LOGIN({ commit, state, getters }, payload) {
    const res = await this.$axios.$post(`/api/login`, queryString.stringify(Object.assign(payload,uuid)))
    if(res.success) {
      commit('SET_TOKEN', res.data.name)
      Net.cookie.set('token',res.data.name)
    }
    return res
  },

  // 登出
  async LOGOUT({ commit, state, getters }) {
    Net.cookie.remove('token')
    commit('SET_TOKEN', '')

    location.reload()
    return
  },
}

