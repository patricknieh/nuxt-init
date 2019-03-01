import Vue from 'vue'

import SvgIcon from '~/components/svg-icon'

const components = { SvgIcon }

Object.keys(components).forEach(key => {Vue.component(key, components[key])})
