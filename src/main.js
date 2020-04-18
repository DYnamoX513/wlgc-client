import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'

import '../public/bootstrap.min.css'
import '../public/js/bootstrap.min'

import 'wowjs/css/libs/animate.css'
import '@/css/font-awesome.min.css'
import '@/css/pe-icon-7-stroke.css'
import '@/css/plugins.css'
import '@/css/responsive.css'
import '@/css/style.css'

import HomePage from "@/components/HomePage";
import Contact from "@/components/Contact";
import Login from "@/components/Login";
import Payment from '@/components/Payment'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: '/',component: HomePage},
  {path: '/contact',component: Contact},
  {path: '/login',component: Login},
  {path: '/payment',component: Payment}
]

const router = new VueRouter({
  routes
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  let status = sessionStorage.getItem("status")
  let login = !(status == null || status === "false")
  store.dispatch("setLoginStatusFun", login)
  if (login && to.path === '/login'){
    const answer = window.confirm('确定退出吗')
    if (answer) {
      sessionStorage.clear()
      store.dispatch("resetAllStorageFun")
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})

const store =new Vuex.Store({
  state:{
    login: false,
    cart:[]
  },
  mutations:{
    setLoginStatus(state,status){
      state.login = status
    },
    setCart(state,cart){
      state.cart = cart
    },
    deleteCart(state,id){
      state.cart.splice(state.cart.indexOf(state.cart.find(item=>item.id===id)),1)
      sessionStorage.setItem("cart",state.cart)
    },
    getAllFromStorage(state){
      let cart = sessionStorage.getItem("cart")
      if (cart == null){
        state.cart = []
      }else {
        state.cart = JSON.parse(cart)
      }
      let status = sessionStorage.getItem("status")
      state.login = !(status == null || status === "false")
    },
    resetAllStorage(state){
      state.cart = []
      state.login = false
    }
  },
  actions:{
    setLoginStatusFun(context,status){
      context.commit("setLoginStatus",status)
    },
    setCartFun(context,cart){
      context.commit("setCart",cart)
    },
    deleteCartFun(context,id){
      context.commit("deleteCart",id)
    },
    getAllFromStorageFun(context){
      context.commit("getAllFromStorage")
    },
    resetAllStorageFun(context){
      context.commit("resetAllStorage")
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
