import Vue from 'vue'
import AppLogo from '~/components/AppLogo'

const components = { AppLogo }

Object.keys(components).forEach(key => {Vue.component(key, components[key])})
