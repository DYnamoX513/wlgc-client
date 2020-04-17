<template>
    <header class="header-section section sticker">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <!-- logo -->
                    <div class="header-logo float-left">
                        <router-link to="/"><img src="img/myLogo.jpg" alt="main logo"></router-link>
                    </div>
                    <!-- header-search & total-cart -->
                    <div class="float-right">
                        <div class="header-option-btns float-right">
                            <!-- header-search -->
                            <div class="header-search float-left">
                                <button class="search-toggle" data-toggle="dropdown"><i class="pe-7s-search"></i></button>
                                <div class="dropdown-menu header-search-form">
                                    <!--输入商品信息，点击搜索按钮跳转-->
                                    <form action="#">
                                        <input type="text" placeholder="Search">
                                        <button><i class="fa fa-long-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            <!-- header Account -->
                            <div class="header-account float-left">
                                <ul>
                                    <li><a href="#" data-toggle="dropdown"><i class="pe-7s-config"></i></a>
                                        <ul class="dropdown-menu">

                                            <!-- 我的账户操作，跳转后台写 -->
                                            <li><a href="#">我的账户</a></li>
                                            <li><a href="wishlist.html">我的收藏</a></li>
                                            <li><a href="checkout.html">支付</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <!-- 购物车标志 -->
                            <div class="header-cart float-left">
                                <!-- Cart Toggle -->
                                <a class="cart-toggle" href="#" data-toggle="dropdown">
                                    <i class="pe-7s-cart"></i>
                                    <span>2</span>
                                </a>
                                <!-- Mini Cart Brief -->
                                <div class="mini-cart-brief dropdown-menu text-left">
                                    <!-- Cart Products -->
                                    <div class="all-cart-product clearfix">

                                        <div class="single-cart clearfix" v-for="item in cart" :key="item.id">
                                            <div class="cart-image">
                                                <a href="product-details.html"><img :src="item.img" alt=""></a>
                                            </div>
                                            <div class="cart-info">
                                                <h5><a href="product-details.html">{{item.name}}</a></h5>
                                                <p>{{item.quantity}} x £ {{item.price}}</p>
                                                <!-- 删除购物车中地商品跳转链接 -->
                                                <a href=""><i class="cart-delete pe-7s-trash" title="Remove this item" v-on:click="deleteItem(item.id)"></i></a>
                                            </div>
                                        </div>
                                    <!--计算购物车中商品总额 -->
                                        <div class="cart-totals">
                                        <h5>总额 <span>£18.00</span></h5>
                                    </div>
                                    <!-- 支付 -->
                                        <div class="cart-bottom  clearfix">
                                        <a href="checkout.html">支付</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <nav class="main-menu menu-right float-right">
                            <ul>
                                <li class="active"><a href="home.html">主页</a>
                                    <ul class="sub-menu">
                                        <li class="active"><router-link to="/">主页商城</router-link></li>
                                    </ul>
                                </li>
                                <!-- 跳转至商品（列表）销售界面 -->
                                <li><a href="shop.html">商城</a>
                                    <ul class="sub-menu">
                                        <li><a href="shop.html">商品购买</a></li>
                                        <li><a href="product-details.html">商品详情</a></li>
                                    </ul>
                                </li>

                                <li><a href="#">功能页</a>
                                    <ul class="sub-menu">
                                        <li><a href="cart.html">购物车</a></li>
                                        <li><a href="checkout.html">支付</a></li>

                                        <li><a href="wishlist.html">我的收藏</a></li>
                                    </ul>
                                </li>
                                <li><router-link to="/contact">联系我们</router-link></li>
                                <li><router-link to="/login">{{loginWord}}</router-link></li>
                            </ul>
                        </nav>
                        </div>
                        <div class="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header-section",
        data(){
            return{
                cart:[],
                login: false
            }
        },
        computed:{
            loginWord(){
                return this.login?"登出":"登录"
            }
        },
        methods:{
            deleteItem(id){
                this.$store.dispatch("deleteCartFun",id)
            }
        },
        mounted(){
            this.cart = this.$store.state.cart
            this.login = this.$store.state.login
        }
    }
</script>

<style scoped>

</style>