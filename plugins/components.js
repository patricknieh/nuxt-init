import Vue from 'vue'
import CHeader from '~/components/c-header'
import CFooter from '~/components/c-footer'
import AppLogo from '~/components/AppLogo'
import HelloWorld from '~/components/HelloWorld'

const components = { CHeader, CFooter, AppLogo, HelloWorld }

Object.keys(components).forEach(key => {Vue.component(key, components[key])})
