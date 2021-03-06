import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.styl'
import 'babel-polyfill'

import fastclick from 'fastclick'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
