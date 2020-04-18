<template>
    <div class="isotope-item col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-50">
        <div class="product-item text-center">
            <!-- Product Image -->
            <div class="product-img">
                <!-- Image -->
                <a class="image" href="#" onclick="return false" v-on:click="toDetail()"><img :src="img" alt=""/></a>
                <!-- Wishlist Button -->
                <a class="wishlist" href="#" onclick="return false" title="Wishlist"><i class="pe-7s-like"></i></a>
                <!-- Action Button -->
                <div class="action-btn fix">
                    <a href="#" data-toggle="modal"  data-target="#quickViewModal" title="Quick View"><i class="pe-7s-look"></i>Quick view</a>
                    <a href="#" title="Add to Cart" onclick="return false" v-on:click="addCart()"><i class="pe-7s-cart"></i>加入购物车</a>
                </div>
            </div>
            <!-- Portfolio Info -->
            <div class="product-info text-left">
                <!-- Title -->
                <h5 class="title"><a href="product-details.html">{{name}}</a></h5>
                <!-- Price Ratting -->
                <div class="price-ratting fix">
                    <span class="price float-left"><span class="new">¥{{newPrice}}</span><span v-if="oldPrice!==newPrice" class="old">¥{{oldPrice}}</span></span>
                    <span class="ratting float-right">
                        <i class="fa fa-star active" v-for="n in this.starNumber" v-bind:key="n"></i>
                        <i class="fa fa-star-half-full active" v-if="halfStar"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item-list",
        props:{
            id: Number,
            name: String,
            type: Number,
            img: String,
            newPrice: Number,
            oldPrice: Number,
            rating: Number
        },
        computed:{
            halfStar:function () {
                return this.rating-parseInt(this.rating) !== 0
            },
            starNumber: function () {
                return parseInt(this.rating)
            },
            routerName(){
                return '/detail/'+this.id.toString()
            }
        },
        methods:{
            toDetail(){
                this.$router.push(this.routerName)
            },
            addCart(){
                this.$store.dispatch("addCartFun",
                    {
                        id: this.id,
                        name: this.name,
                        img: this.img,
                        quantity: 1,
                        price: this.newPrice
                    })
            }
        }
    }
</script>

<style scoped>

</style>