import Vue from 'vue'

import * as mixins from '~/utils/mixins'

Object.keys(mixins).forEach(key => {Vue.mixin(mixins[key])})
