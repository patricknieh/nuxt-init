import Cookies from 'js-cookie'
import request from 'superagent'
import {utils} from "web-base"


const {API_HOST,TOKEN_NAME} = require('../config')
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
      let cookie = utils.net.cookie.parse(req.headers.cookie)
      console.log(cookie)

      let token = cookie[TOKEN_NAME]
      if(token) {
        let res = await request.get(`${API_HOST}/user/${token}`)
        let resObj = JSON.parse(res.text)
        if(resObj.success){
          commit('SET_TOKEN', token)
          commit('SET_USER',resObj.data)
        }else {
          commit('SET_TOKEN', '')
          commit('SET_USER',{}) //invalid token
        }
      }
    }
  },
  // 登录
  async LOGIN({ commit, state, getters }, payload) {
    const res = await this.$axios.$post(`/api/user/login`, payload)
    if(res.success) {
      commit('SET_TOKEN', res.data.token)
      Cookies.set(TOKEN_NAME, res.data.token)

      let d = await this.$axios.$get(`/api/user/${res.data.token}`)
      if(d.success) commit('SET_USER',d.data)
    }
    return res
  },

  // 登出
  async LOGOUT({ commit, state, getters }) {
    // const res = await this.$axios.$post(`/api/user/logout`)
    commit('SET_TOKEN', '')
    commit('SET_USER', {})
    Cookies.remove(TOKEN_NAME)
    location.reload()
  },
}

