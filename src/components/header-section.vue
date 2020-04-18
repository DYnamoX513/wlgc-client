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
<!--                            <div class="header-account float-left">-->
<!--                                <ul>-->
<!--                                    <li><a href="#" data-toggle="dropdown"><i class="pe-7s-config"></i></a>-->
<!--                                        <ul class="dropdown-menu">-->

<!--                                            &lt;!&ndash; 我的账户操作，跳转后台写 &ndash;&gt;-->
<!--                                            <li><a href="#">我的账户</a></li>-->
<!--                                            <li><a href="wishlist.html">我的收藏</a></li>-->
<!--                                            <li><a href="checkout.html">支付</a></li>-->
<!--                                        </ul>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </div>-->
                            <!-- 购物车标志 -->
                            <div class="header-cart float-left">
                                <!-- Cart Toggle -->
                                <a class="cart-toggle" href="#" data-toggle="dropdown">
                                    <i class="pe-7s-cart"></i>
                                    <span>{{totalNumber}}</span>
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
                                                <p>{{item.quantity}} x ¥ {{item.price}}</p>
                                                <!-- 删除购物车中地商品跳转链接 -->
                                                <i class="cart-delete pe-7s-trash" title="Remove this item" v-on:click="deleteItem(item.id)"></i>
                                            </div>
                                        </div>
                                    <!--计算购物车中商品总额 -->
                                        <div class="cart-totals">
                                        <h5>总额 <span>¥{{totalAmount}}</span></h5>
                                    </div>
                                    <!-- 支付 -->
                                        <div class="cart-bottom  clearfix">
                                        <a href="#" onclick="return false" v-on:click="pay()">支付</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <nav class="main-menu menu-right float-right">
                            <ul>
                                <li class="active"><router-link to="/">主页商城</router-link></li>

                                <li><a href="#">账户</a>
                                    <ul class="sub-menu">
                                        <li><a href="#" onclick="return false" v-on:click="toCart()">购物车</a></li>
                                        <li><a href="#" onclick="return false" v-on:click="pay()">支付</a></li>
                                    </ul>
                                </li>
                                <li><router-link to="/contact">联系我们</router-link></li>
                                <li><router-link to="login">{{loginWord}}</router-link></li>
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
            }
        },
        computed:{
            loginWord(){
                return this.login?"登出":"登录"
            },
            cart(){
                return this.$store.state.cart
            },
            login(){
                return this.$store.state.login
            },
            totalNumber(){
                return this.$store.state.cart.length
            },
            totalAmount(){
                let total = 0;
                let length = this.$store.state.cart.length
                for(let i=0;i< length;i++){
                    total += parseInt(this.$store.state.cart[i].quantity)
                        * parseFloat(this.$store.state.cart[i].price)
                }
                return total
            }
        },
        methods: {
            deleteItem(id) {
                if (this.login) {
                    this.$store.dispatch("deleteCartFun", id)
                } else {
                    this.redirectToLogin()
                }
            },
            toCart(){
                if (this.login) {
                    this.$router.push("/cart")
                } else {
                    this.redirectToLogin()
                }
            },
            pay() {
                if (this.login) {
                    this.$router.push("/payment")
                } else {
                    this.redirectToLogin()
                }
            },
            redirectToLogin() {
                const answer = window.confirm('需要登录')
                if (answer) {
                    this.$router.push("/login")
                }
            }
        }
    }

</script>

<style scoped>

</style>