import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import '@/vantui/vantui'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
Vue.config.productionTip = false

Vue.filter('RMBformat', val => '￥ ' + Number(val).toFixed(2) + ' 元')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
