import N from "../utils/tools/net";

export const state = () => ({
  locales: ['zh_CN', 'en_US'],
  locale: 'zh_CN',
  token: '',
  user: {},
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
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_ROUTE(state, payload) {
    state.route = payload
  }
}

export const actions = {
  async nuxtServerInit({ dispatch, commit, getters, state }, { app, req, res }) {
    // if (req.headers.cookie) {
    //   let cookie = N.parseCookies(req.headers.cookie)
    //   if(cookie.token) {
    //     commit('SET_TOKEN', cookie.token)
    //     let res = await app.$axios.$get(`/api/user/${cookie.token}`)
    //     if(res.success){
    //       commit('SET_USER',res.data)
    //     }else {
    //       commit('SET_USER',{}) //invalid token
    //     }
    //   }
    // }
  },

  // GT注册
  async GT_REGISTER({ commit, state, getters }) {
    return await this.$axios.$get(`/api/gt3?t=${(new Date()).getTime()}`)
  },

  // 获取验证码
  async GET_CODE({ commit, state, getters }, payload) {
    return await this.$axios.$post(`/api/get-code`, payload)
  },

  // 重置密码
  async RESET_PASSWORD({ commit, state, getters }, payload) {
    return await this.$axios.$post(`/api/user/reset-password`, payload)
  },

  //获取用户信息
  async GET_USERINFO({ commit, state, getters }, payload) {
    const res = await this.$axios.$get(`/api/user/${payload}`)
    if(res.success) commit('SET_USER', res.data)
    return res
  },
  async GET_USERINFO_BY_ID({ commit, state, getters }, payload) {
    return await this.$axios.$get(`/api/user?id=${payload}`)
  },

  //注册
  async REGISTER({ commit, state, getters }, payload) {
    return await this.$axios.$post(`/api/user`, payload)
  },

  // 登录
  async LOGIN({ commit, state, getters }, payload) {
    const res = await this.$axios.$post(`/api/user/login`, payload)
    if(res.success) commit('SET_TOKEN', res.data.token)
    return res
  },

  // 登出
  async LOGOUT({ commit, state, getters }) {
    const res = await this.$axios.$post(`/api/user/logout`)
    if(res.success) {
      N.removeCookie('token')
      commit('SET_TOKEN', null)
      commit('SET_USER', {})
      this.$router.push('/')
    }
  },
  // 删除用户
  async DEL_USER({ commit, state, getters }, username) {
    return await this.$axios.$delete(`/api/user/${username}`)
  },

  // 更改用户
  async UPDATE_USER({ commit, state, getters }, body) {
    return await this.$axios.$patch(`/api/user/${body.id}`,body)
  },

  // 获取用户列表
  async GET_USERS({ commit, state, getters }, query) {
    return await this.$axios.$get(`/api/users${query}`)
  }
}

