<template>
    <div class="wrapper">
        <!-- PAGE BANNER SECTION -->
        <div class="page-banner-section section">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="page-banner-content">
                            <h1>商品详情</h1>
                            <ul class="breadcrumb">
                                <li>主页</li>
                                <li class="active">商品详情</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PAGE BANNER SECTION -->

        <!-- PAGE SECTION START -->
        <div class="page-section section pt-120 pb-120">
            <div class="container">
                <div class="row mb-40">
                    <!-- Single Product Images -->
                    <div class="col-md-5 col-sm-6 col-xs-12 mb-40">
                        <!-- Tab panes -->
                        <div class="pro-large-img tab-pane active" id="pro-large-img-1">
                            <img :src="item.img" alt="" />
                        </div>
                        <!-- Single Product Thumbnail Slider -->
                    </div>
                    <!-- Single Product Details -->
                    <div class="col-md-7 col-sm-6 col-xs-12 mb-40">
                        <div class="product-details section">
                            <!-- Title -->
                            <h1 class="title float-left">{{item.name}}</h1>
                            <!-- Price Ratting -->
                            <div class="price-ratting section">
                                <!-- Price -->
                                <span class="price float-left">
                                    <span class="new">¥ {{item.newPrice}}</span>
                                    <span v-if="item.oldPrice!==item.newPrice" class="old">¥{{item.oldPrice}}</span>
                                </span>
                                <!-- Ratting -->
                                <span class="ratting float-right">
                                    <i class="fa fa-star active" v-for="n in this.starNumber" v-bind:key="n"></i>
                                    <i class="fa fa-star-half-full active" v-if="halfStar"></i>
                                    <span> ({{item.ratingNumber}} Customer Review)</span>
                                </span>
                            </div>

                            <!-- Short Description -->
                            <div class="short-desc section float-left">
                                <h5 class="pd-sub-title float-left">Quick Overview</h5>
                                <br>
                                <p class="float-left" style="text-align: left">{{item.introduction}}</p>
                            </div>
                            <!-- Quantity Cart -->
                            <div class="quantity-cart section">
                                <div class="product-quantity">
                                    <input type="number" v-model="quantity">
                                </div>
                                <button class="add-to-cart" v-on:click="addCart">add to cart</button>
                            </div>
                            <!-- Usefull Link -->
                            <ul class="usefull-link section">
                                <li><a href="#" onclick="return false"><i class="pe-7s-mail"></i> Email to a Friend</a></li>
                                <li><a href="#" onclick="return false"><i class="pe-7s-like"></i> Wishlist</a></li>
                                <li><a href="#" onclick="return false"><i class="pe-7s-print"></i> print</a></li>
                            </ul>
                            <!-- Share -->
                            <div class="share-icons section">
                                <span>share :</span>
                                <a href="#" onclick="return false"><i class="fa fa-facebook"></i></a>
                                <a href="#" onclick="return false"><i class="fa fa-twitter"></i></a>
                                <a href="#" onclick="return false"><i class="fa fa-instagram"></i></a>
                                <a href="#" onclick="return false"><i class="fa fa-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <!-- Nav tabs -->
                    <div class="col-xs-12">
                        <ul class="pro-info-tab-list section">
                            <li class="active"><a href="#more-info" data-toggle="tab">More info</a></li>
                            <li><a href="#data-sheet" data-toggle="tab">Data sheet</a></li>
                            <li><a href="#reviews" data-toggle="tab">Reviews</a></li>
                        </ul>
                    </div>
                    <!-- Tab panes -->
                    <div class="tab-content col-xs-12">
                        <div class="pro-info-tab tab-pane active float-left" id="more-info">
                            <p style="text-align: left">{{item.detail}}</p>
                        </div>
                        <div class="pro-info-tab tab-pane" id="data-sheet">
                            <table class="table-data-sheet">
                                <tbody>
                                <tr class="odd">
                                    <td>Compositions</td>
                                    <td>Cotton</td>
                                </tr>
                                <tr class="even">
                                    <td>Styles</td>
                                    <td>Casual</td>
                                </tr>
                                <tr class="odd">
                                    <td>Properties</td>
                                    <td>Short Sleeve</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="pro-info-tab tab-pane" id="reviews">
                            <a href="#" onclick="return false">Be the first to write your review!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- PAGE SECTION END -->
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data(){
            return {
                item: undefined,
                quantity: 1,
            }
        },
        created(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            let getId = parseInt(this.$route.params.id)
            let detail = {
                id: getId,
                name:"dbd1",
                type: 1,
                img:"img/product/1.jpg",
                newPrice: 123,
                oldPrice: 456,
                rating: 4.5,
                ratingNumber: 1,
                introduction: "this is dbd.this is dbd.this is dbd.this is dbd.this is dbd.this is dbd.this is dbd.this is dbd.this is dbd.this is dbd.this is dbd.",
                detail: "Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。" +
                    "另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\n" +
                    "\n" +
                    "如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。\n" +
                    "\n" +
                    "如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。",
            }
            this.item = detail
        },
        mounted(){

        },
        computed:{
            halfStar:function () {
                return this.rating-parseInt(this.item.rating) !== 0
            },
            starNumber: function () {
                return parseInt(this.item.rating)
            },
        },
        methods:{
            addCart(){
                this.quantity = parseInt(this.quantity)
                this.$store.dispatch("addCartFun",
                    {
                        id: this.item.id,
                        name: this.item.name,
                        img: this.item.img,
                        quantity:this.quantity,
                        price: this.item.newPrice
                    })

            }
        }
    }
</script>

<style scoped>

</style>