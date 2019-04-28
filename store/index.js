import utils from "web-base"

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
      let cookie = utils.net.cookie.parse(req.headers.cookie)
      console.log(cookie)
    }
  },
  // 登录
  async LOGIN({ commit, state, getters }, payload) {

  },

  // 登出
  async LOGOUT({ commit, state, getters }) {

  },
}

