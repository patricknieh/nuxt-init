import Vue from 'vue'
import CHeader from '~/components/c-header'
import CFooter from '~/components/c-footer'
import AppLogo from '~/components/AppLogo'

const components = { CHeader, CFooter, AppLogo }

Object.keys(components).forEach(key => {Vue.component(key, components[key])})
