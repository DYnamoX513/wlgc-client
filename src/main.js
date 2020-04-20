import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from "vue-axios";
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
import Detail from '@/components/Detail'
import Cart from '@/components/Cart'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios,axios)
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const routes = [
  {path: '/',component: HomePage},
  {path: '/contact',component: Contact},
  {path: '/login',component: Login},
  {path: '/payment',component: Payment},
  {path: '/detail/:id',component: Detail},
  {path: '/cart',component: Cart},
  {path: '/*', component: HomePage}
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
  } else if ( !login && (to.path === '/Cart'|| to.path === '/payment')){
    const answer = window.confirm('需要登录')
    if (answer) {
      sessionStorage.clear()
      store.dispatch("resetAllStorageFun")
      next('/login')
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
    cart:[],
  },
  mutations:{
    setLoginStatus(state,status){
      state.login = status
    },
    setCart(state){
      sessionStorage.setItem("cart",JSON.stringify(state.cart))
    },
    addCart(state, newItem){
      let exist = state.cart.find(item=>item.id === newItem.id)
      if (!exist){
        state.cart.push(newItem)
      }else{
        exist.quantity += newItem.quantity
      }
      sessionStorage.setItem("cart",JSON.stringify(state.cart))
    },
    deleteCart(state,id){
      state.cart.splice(state.cart.indexOf(state.cart.find(item=>item.id===id)),1)
      sessionStorage.setItem("cart",JSON.stringify(state.cart))
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
    setCartFun(context){
      context.commit("setCart")
    },
    addCartFun(context,newItem){
      context.commit("addCart",newItem)
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
