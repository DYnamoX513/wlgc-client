<template>
    <div class="background-picture">
        <div class="container-fluid" style="margin-top: 80px">
            <div class="row" style="height: 300px">
                <p style="margin: 150px auto;color: white;font-size: 300%;text-align: center;">BOOK SHOP</p>
            </div>
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4" style="background-color:white;height: auto;margin-top: -50px;border-radius: 10px;opacity: 0.95;">
                    <div class="col-sm-5">
                        <div class="row" style="height: 40px;"></div>
                        <img src="../assets/img/qrcode.png" class="img-thumbnail img-responsive">
                        <div style="background-color: #000000;height: 3px;width: 100px;margin: 20px auto;"></div>
                        <div class="col-lg-4">
                            <img src="../assets/img/qqicon.png" class="img-rounded img-responsive">
                        </div>
                        <div class="col-lg-4">
                            <img src="../assets/img/wechaticon.png" class="img-rounded img-responsive">
                        </div>
                        <div class="col-lg-4">
                            <img src="../assets/img/weiboicon.png" class="img-rounded img-responsive">
                        </div>
                        <div style="margin-top: 70px;margin-bottom: 20px">打开APP 扫码注册/登录</div>
                    </div>
                    <div class="col-sm-7">
                        <div class="row" style="height: 20px;"></div>
                        <ul class="nav nav-tabs">
                            <li role="presentation" class="category"><a href="#" onclick="return false" v-on:click="changeLoginType(1)">登录</a></li>
                            <li role="presentation" class="category"><a href="#" onclick="return false" v-on:click="changeLoginType(2)">注册</a></li>
                        </ul>
                        <div class="input-group" style="margin: 20px;">
                            <span class="input-group-addon">§</span>
                            <input type="text" class="form-control" placeholder="用户名" aria-describedby="basic-addon1"
                                   v-model="username">
                        </div>
                        <div class="input-group" v-show="loginType === 2" style="margin: 15px 20px;">
                            <span class="input-group-addon">§</span>
                            <input type="text" class="form-control" placeholder="手机号" aria-describedby="basic-addon1"
                                   v-model="phoneNumber">
                        </div>
                        <div class="input-group" v-bind:style="inputMargin">
                            <span class="input-group-addon">#</span>
                            <input type="password" class="form-control" placeholder="密码" aria-describedby="basic-addon1"
                                   v-model="password">
                        </div>
                        <div class="input-group" v-show="loginType === 2" v-bind:style="inputMargin">
                            <span class="input-group-addon">#</span>
                            <input type="password" class="form-control" placeholder="确认密码" aria-describedby="basic-addon1"
                                   v-model="confirmPassword">
                        </div>

                        <div class="col-sm-6" >
                            <p class="float-right" v-show="loginType === 1"><a href="#forget-password" data-toggle="modal">忘记密码？</a></p>
                        </div>

                        <button type="button" class="btn btn-primary btn-block" style="margin-top: 40px ;margin-bottom: 30px;"
                                v-on:click="login()"><p style="color: white">注册&nbsp;/&nbsp;登录</p></button>
                    </div>
                </div>
            </div>
            <div class="row"></div>
        </div>
        <div class="modal fade" id="forget-password" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 class="modal-title" id="myModalLabel">
                            找回密码
                        </h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="getPassword-form">
                                <label for="inputPhoneNumber1">手机号</label>
                                <input type="text" id="inputPhoneNumber1" class="form-control" pattern="[0-9]{11}" title="输入手机号码"
                                       placeholder="手机号/phone number">
                                <span class="help-block">少女祈祷中</span>
                            </div>
                            <div>
                                <button class="btn btn-block btn-danger" ><p style="color: white">提交/SUBMIT</p></button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                loginType: 1,
                username:"",
                phoneNumber:"",
                password:"",
                confirmPassword:"",
                inputMargin:{
                    margin: '20px'
                }
            }
        },
        methods:{
            changeLoginType(type){
                this.loginType = type
            },
            login(){
                sessionStorage.setItem("status","true")

                let cart = [
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
                sessionStorage.setItem("cart", JSON.stringify(cart))
                this.$store.dispatch("setCartFun",cart)
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .background-picture{
        background-image: url(../assets/img/timg.jpg);
        background-size: 100% 120%;
        margin-top: -50px;
        height: 900px;
    }
    .category{
        font-size: 13.5px;
    }
</style>