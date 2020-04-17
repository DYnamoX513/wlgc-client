import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'

import '../public/bootstrap.min.css'
import '../public/js/bootstrap.min'

import 'wowjs/css/libs/animate.css'

import './css/font-awesome.min.css'
import './css/pe-icon-7-stroke.css'
import './css/plugins.css'
import './css/responsive.css'
import './css/style.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(BootstrapVue)

const routes = [
  {path: '/'}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
