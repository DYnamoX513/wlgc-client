<template>
    <div class="background-picture">
        <div class="container-fluid" style="margin-top: 80px">
            <div class="row" style="height: 300px">
                <p style="margin: 120px auto;color: white;font-size: 300%;text-align: center;">BOOK SHOP</p>
            </div>
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4" style="background-color:white;height: auto;margin-top: -100px;border-radius: 10px;opacity: 0.95;">
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
                        <div style="margin-top: 70px;">打开APP 扫码注册/登录</div>
                    </div>
                    <div class="col-sm-7">
                        <div class="row" style="height: 20px;"></div>
                        <ul class="nav nav-tabs">
                            <li role="presentation" class="category"><a href="#" onclick="return false" v-on:click="changeLoginType(1)">登录</a></li>
                            <li role="presentation" class="category"><a href="#" onclick="return false" v-on:click="changeLoginType(2)">注册</a></li>
                        </ul>
                        <div class="input-group" style="margin: 20px;">
                            <span class="input-group-addon">@</span>
                            <input type="text" class="form-control" placeholder="用户名" aria-describedby="basic-addon1"
                                   v-model="user">
                        </div>
                        <div class="input-group" v-show="logintype == 2" style="margin: 15px 20px;">
                            <span class="input-group-addon">@</span>
                            <input type="text" class="form-control" placeholder="手机号" aria-describedby="basic-addon1"
                                   v-model="cname">
                        </div>
                        <div class="input-group" v-bind:style="inputMargin">
                            <span class="input-group-addon">#</span>
                            <input type="password" class="form-control" placeholder="密码" aria-describedby="basic-addon1"
                                   v-model="password">
                        </div>
                        <div class="input-group" v-show="logintype == 2" v-bind:style="inputMargin">
                            <span class="input-group-addon">#</span>
                            <input type="password" class="form-control" placeholder="确认密码" aria-describedby="basic-addon1"
                                   v-model="password">
                        </div>

                        <div class="col-sm-6" >
                            <p class="float-right" v-show="logintype == 1"><a href="#forget-password" data-toggle="modal">忘记密码？</a></p>
                        </div>

                        <button type="button" class="btn btn-primary btn-block" style="margin-top: 40px ;margin-bottom: 30px;"
                                v-on:click="login()">注册&nbsp;/&nbsp;登录</button>
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
                                <label for="inputEmai3" >身份证号</label>
                                <input type="text" id="inputEmai3" class="form-control" placeholder="身份证号/identity code" required autofocus>
                            </div>
                            <div class="getPassword-form">
                                <label for="inputPhoneNumber1">手机号</label>
                                <input type="text" id="inputPhoneNumber1" class="form-control" pattern="[0-9]{11}" title="输入手机号码"
                                       placeholder="手机号/phone number">
                                <span class="help-block">请确认正确填写了联系方式。我们会以邮件或是短信的方式联系您。</span>
                            </div>
                            <div>
                                <button class="btn btn-danger btn-block">提交/SUBMIT</button>
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
                logintype: 1,
                user:"",
                password:"",
                vcode:"",
                cname:"",
                ccode:"",
                inputMargin:{
                    margin: '20px',
                    accountDetail:[]
                }
            }
        },
        methods:{
            changeLoginType(type){
                this.logintype = type
            },
            showInfo(){
                console.log(this.user,this.password,this.vcode);
                this.$router.push({ path: '/success' });
            },
            // login(){
            //     if (this.logintype == 1) {
            //         //return alert("暂不支持验证码登录")
            //         console.log(loginApi)
            //         this.$http.post(loginApi,{
            //             u_Count: this.user,
            //             u_Password: this.ccode,
            //             flag:0
            //         },{emulateJSON: true}).then(response => {
            //                 console.log('请求成功')
            //             },
            //             response => {
            //                 console.log('请求失败')
            //             });
            //     } else if(this.logintype == 2){
            //         this.$http.post(loginApi,{
            //             u_Count: this.user,
            //             u_Password: this.password,
            //             flag:0
            //         },{emulateJSON: true}).then(response => {
            //                 console.log('请求成功')
            //                 this.$router.push({ path: '/success' });
            //             },
            //             response => {
            //                 console.log(response)
            //                 console.log('请求失败')
            //             });
            //
            //     } else if(this.logintype == 3){
            //         this.$router.push({ path: '/success' });
            //     }
            //     if(this.user != ""){
            //         global.currentid = this.user
            //     }else if(this.cname != ""){
            //         global.currentid = this.cname
            //     }
            //     global.Authorized = true
            // },
            // dorequest(){
            //     request(options, function (error, response, body) {
            //         if (error) return console.error('Failed: %s', error.message);
            //         console.log(body)
            //         this.accountDetail = body
            //     });
            // },
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