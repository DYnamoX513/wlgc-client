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

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  {path: '/',component: HomePage},
  {path: '/contact',component: Contact},
  {path: '/login',component: Login}
]

const router = new VueRouter({
  routes
})

const store =new Vuex.Store({
  state:{
    login: false,
    cart:[
      {
        id:1,
        name:"dbd1",
        img:"../../public/img/product/cart-1.jpg",
        quantity:1,
        price: 100
      },
      {
        id:2,
        name:"dbd2",
        img:"../../public/img/product/2.jpg",
        quantity:2,
        price: 100
      }
    ]
  },
  mutations:{
    deleteCart(state,id){
      // state.cart.find(item=>item.id===id).quantity--
      state.cart.splice(state.cart.indexOf(state.cart.find(item=>item.id===id)),1)
    }
  },
  actions:{
    deleteCartFun(context,id){
      context.commit("deleteCart",id)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
