<template>
    <div>
        <div class="page-banner-section section">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="page-banner-content">
                            <h1>支付</h1>
                            <ul class="breadcrumb">
                                <li>主页</li>
                                <li class="active">支付</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- PAGE SECTION START -->
        <div class="page-section section pt-120 pb-80">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="customer-login mb-40">
                            <!-- LOGIN START -->
                            <h3>Returning customer? <a data-toggle="collapse" href="#checkout-login">Click here to login</a></h3>
                            <div id="checkout-login" class="checkout-login collapse fix">
                                <div class="checkout-login-wrapper mt-30">
                                    <p>Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</p>
                                    <div class="col-md-4 col-sm-6 col-xs-12">
                                        <form action="#">
                                            <div class="fix mb-20">
                                                <label>Username or email <span class="required">*</span></label>
                                                <input type="text" />
                                            </div>
                                            <div class="fix mb-20">
                                                <label>Password  <span class="required">*</span></label>
                                                <input type="text" />
                                            </div>
                                            <div class="fix mb-20">
                                                <input type="submit" value="Login" />
                                                <label class="remember-me-box">
                                                    <input type="checkbox" />
                                                    Remember me
                                                </label>
                                            </div>
                                            <a href="#">Lost your password?</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- LOGIN END -->
                        </div>
                    </div>
                    <div class="checkout-form">
                        <div class="col-lg-6 col-md-6 mb-40">
                            <form action="#">
                                <h3>Billing Details</h3>
                                <div class="row">
                                    <div class="col-xs-12 mb-30">
                                        <label for="b_country">Country <span class="required">*</span></label>
                                        <select id="b_country">
                                            <option value="1">Select a country</option>
                                            <option value="2">bangladesh</option>
                                            <option value="3">Algeria</option>
                                            <option value="4">Afghanistan</option>
                                            <option value="5">Ghana</option>
                                            <option value="6">Albania</option>
                                            <option value="7">Bahrain</option>
                                            <option value="8">Colombia</option>
                                            <option value="9">Dominican Republic</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="b_f_name">First Name <span class="required">*</span></label>
                                        <input id="b_f_name" type="text"/>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="b_l_name">Last Name <span class="required">*</span></label>
                                        <input id="b_l_name" type="text"/>
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <label for="b_c_name">Company Name</label>
                                        <input id="b_c_name" type="text"/>
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <label>Address <span class="required">*</span></label>
                                        <input type="text" placeholder="Street address" />
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <label for="b_city">Town / City <span class="required">*</span></label>
                                        <input id="b_city" type="text" placeholder="Town / City" />
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label>State / County <span class="required">*</span></label>
                                        <input type="text"/>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="b_zip">Postcode / Zip <span class="required">*</span></label>
                                        <input id="b_zip" type="text" placeholder="Postcode / Zip" />
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="b_email">Email Address <span class="required">*</span></label>
                                        <input id="b_email" type="email"/>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="b_phone">Phone  <span class="required">*</span></label>
                                        <input id="b_phone" type="text" placeholder="Phone Number" />
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <input id="b_c_account" type="checkbox" data-target="createp_account" />
                                        <label for="b_c_account">Create an account?</label>
                                        <div class="collapse mt-20" data-collapse="createp_account">
                                            <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                                            <label for="b_a_password">Account password  <span class="required">*</span></label>
                                            <input id="b_a_password" type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <h3>
                                    <input id="ship_form" type="checkbox" data-target="shipping_form" />
                                    <label for="ship_form">Ship to a different address?</label>
                                </h3>
                                <div class="collapse row" data-collapse="shipping_form">
                                    <div class="col-xs-12 mb-30">
                                        <label for="s_country">Country <span class="required">*</span></label>
                                        <select id="s_country">
                                            <option value="1">Select a country</option>
                                            <option value="2">bangladesh</option>
                                            <option value="3">Algeria</option>
                                            <option value="4">Afghanistan</option>
                                            <option value="5">Ghana</option>
                                            <option value="6">Albania</option>
                                            <option value="7">Bahrain</option>
                                            <option value="8">Colombia</option>
                                            <option value="9">Dominican Republic</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="s_f_name">First Name <span class="required">*</span></label>
                                        <input id="s_f_name" type="text"/>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="s_l_name">Last Name <span class="required">*</span></label>
                                        <input id="s_l_name" type="text"/>
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <label for="s_c_name">Company Name</label>
                                        <input id="s_c_name" type="text"/>
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <label>Address <span class="required">*</span></label>
                                        <input type="text" placeholder="Street address" />
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                    <div class="col-xs-12 mb-30">
                                        <label for="s_city">Town / City <span class="required">*</span></label>
                                        <input id="s_city" type="text" placeholder="Town / City" />
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label class="s_county">State / County <span class="required">*</span></label>
                                        <input id="s_county" type="text"/>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="s_zip">Postcode / Zip <span class="required">*</span></label>
                                        <input id="s_zip" type="text" placeholder="Postcode / Zip" />
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="s_email">Email Address <span class="required">*</span></label>
                                        <input id="s_email" type="email"/>
                                    </div>
                                    <div class="col-sm-6 col-xs-12 mb-30">
                                        <label for="s_phone">Phone  <span class="required">*</span></label>
                                        <input id="s_phone" type="text" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div class="order-notes">
                                    <label for="order_note">Order Notes</label>
                                    <textarea id="order_note" placeholder="Notes about your order, e.g. special notes for delivery." ></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 col-md-6 col-xs-12 mb-40">
                            <div class="coupon-form mb-30">
                                <h3>coupon code</h3>
                                <p>Enter your coupon code if you have one</p>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <input type="submit" value="Apply" />
                                </form>
                            </div>
                            <div class="order-wrapper">
                                <h3>Your order</h3>
                                <div class="order-table table-responsive mb-30">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th class="product-name">Product</th>
                                            <th class="product-total">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in cart" :key="item.id">
                                            <td class="product-name">
                                                {{item.name}}	<strong class="product-qty"> × {{item.quantity}}</strong>
                                            </td>
                                            <td class="product-total">
                                                <span class="amount">¥{{item.price}}</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th>Cart Subtotal</th>
                                            <td>¥{{totalAmount}}</td>
                                        </tr>
                                        <tr>
                                            <th>Order Total</th>
                                            <td><strong>¥{{totalAmount}}</strong>
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div class="payment-method">
                                    <div class="panel-group" id="accordion">
                                        <div class="panel panel-default">
                                            <div class="panel-heading" id="headingOne">
                                                <h4 class="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                                        Direct Bank Transfer
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" class="panel-collapse collapse in">
                                                <div class="panel-body">
                                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" id="headingTwo">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                        Cheque Payment
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div class="panel-body">
                                                    <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel panel-default">
                                            <div class="panel-heading" id="headingThree">
                                                <h4 class="panel-title">
                                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                                        PayPal
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" class="panel-collapse collapse">
                                                <div class="panel-body">
                                                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order-button">
                                        <input type="submit" value="Place order" v-on:click="pay()"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Payment",
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
        methods:{
            pay(){
                let payData = new URLSearchParams()
                payData.append("userId",sessionStorage.getItem("userId"))
                this.axios({
                    method: 'post',
                    url: 'http://localhost:8080/MvnWeb_war/DeleteCartServlet',
                    contentType: 'text',
                    dataType: 'text/html;charset=UTF-8',
                    data: payData
                })
                    .then(response => {
                        console.log(response)
                        if (response.data[0].stat){
                            sessionStorage.setItem("cart",JSON.stringify([]))
                            this.$store.dispatch("setCartFun")
                            const answer = window.confirm('支付成功，是否返回主页面')
                            if (answer) {
                                this.$router.push('/')
                            }
                        }else{
                            alert("支付失败")
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        alert("支付失败")
                    })

            }
        }
    }
</script>

<style scoped>

</style>