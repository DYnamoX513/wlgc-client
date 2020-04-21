<template>
    <div>
        <div class="page-section section pt-120 pb-80">
            <div class="container">
                <div class="row">
                    <form action="#">
                        <div class="col-xs-12">
                            <div class="cart-table table-responsive mb-40">
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="pro-thumbnail">图片</th>
                                        <th class="pro-title">名称</th>
                                        <th class="pro-price">单价</th>
                                        <th class="pro-quantity">数量</th>
                                        <th class="pro-subtotal">总价</th>
                                        <th class="pro-remove">移除</th>
                                    </tr>
                                    </thead>
                                    <tbody id="add">

                                    <tr v-for="item in this.cart" :key="item.id">
                                        <td class="pro-thumbnail"><a href="#" onclick="return false;" v-on:click="toDetail(item.id)"><img :src="item.img" alt="" /></a></td>
                                        <td class="pro-title"><a href="#" onclick="return false;" v-on:click="toDetail(item.id)">{{item.name}}</a></td>
                                        <td class="pro-price"><span class="amount">¥{{item.price}}</span></td>
                                        <td class="pro-quantity"><div class="product-quantity"><input type="number" v-model="item.quantity" /></div></td>
                                        <td class="pro-subtotal">¥{{parseInt(item.quantity) * parseFloat(item.price)}}</td>
                                        <!-- 删除商品的跳转链接 -->
                                        <td class="pro-remove"><a href="#" onclick="return false" v-on:click="deleteCart(item.id)">×</a></td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-7 col-xs-12">
                            <div class="cart-buttons mb-30">
                                <a href="#" onclick="return false" v-on:click="refreshCart">更新购物车</a>
                                <router-link to="/">继续购物</router-link>
                            </div>
                            <div class="cart-coupon mb-40">
                                <input type="text" placeholder="优惠码" />
                                <input type="submit" value="使用优惠券" />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-5 col-xs-12">
                            <div class="cart-total mb-40">
                                <table>
                                    <tbody>
                                    <tr class="order-total">
                                        <th>总额</th>
                                        <td>
                                            <strong><span class="amount">¥{{totalAmount}}</span></strong>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <!-- 进入结算后跳转界面 -->
                                <div class="proceed-to-checkout section mt-30">
                                    <a href="#" onclick="return false" v-on:click="pay()">进入结算</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data(){
            return {
            }
        },
        computed:{
            cart(){
                return this.$store.state.cart
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
        mounted(){
        },
        methods:{
            deleteCart(id){
                this.$store.dispatch("deleteCartFun",id)
            },
            refreshCart(){
                // todo: api invoke: update cart
                /*
                send:
                {
                  cart: [
                                              {
                                                  id:1,
                                                  name:"dbd1",
                                                  img:"../../public/img/product/cart-1.jpg",
                                                  quantity:1,
                                                  price: 123
                                              },
                                              {
                                                  id:2,
                                                  name:"dbd2",
                                                  img:"../../public/img/product/2.jpg",
                                                  quantity:2,
                                                  price: 123
                                              }
                                              ]
                }
                response:
                {
                  stat: 1 success 0 fail
                }
                 */
                var cartParam = new URLSearchParams()
                var userId = sessionStorage.getItem('userId')
                cartParam.append('userId',userId)
                cartParam.append('cart',JSON.stringify(this.cart))
                this.axios({
                    method: 'post',
                    url: 'http://localhost:8080/MvnWeb_war/AddCartServlet',
                    contentType: 'text',
                    dataType: 'text/html;charset=UTF-8',
                    data: cartParam,
                })
                    .then(response => {
                        if (response.data[0].stat){
                            alert("同步成功")
                        }else {
                            alert("同步失败")
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(()=>{
                        this.$store.dispatch('setCartFun')
                    })
            },
            toDetail(id) {
                this.$router.push('/detail/'+ id.toString())
            },
            pay() {
                this.$router.push("/payment")
            }
        },

        // eslint-disable-next-line no-unused-vars
        beforeRouteLeave(to, from, next){
            this.$store.dispatch("setCartFun")
            next()
        }
    }
</script>

<style scoped>

</style>