import Vue from 'vue'
import SvgIcon from '~/components/svg-icon'
import HiJsx from '~/components/hi-jsx'

const components = { SvgIcon, HiJsx }

Object.keys(components).forEach(key => {Vue.component(key, components[key])})
