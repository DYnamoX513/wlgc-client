<template>
    <!-- Body main wrapper start -->
    <div class="wrapper">
        <!-- 放置我们商城的王牌商品，可以多个 -->
        <div class="home-slider-section section">
            <!-- Home Slider -->
            <div id="home-slider" class="slides">
                <!-- 王牌商品的图片 -->
                <img src="img/slider/3.jpg" alt="" title="#slider-caption-1"  />
                <img src="img/slider/1.jpg" alt="" title="#slider-caption-2"  />
            </div>
            <!-- 商品 1 -->
            <div id="slider-caption-1" class="nivo-html-caption">
                <div class="container">
                    <div class="row">
                        <!-- 商品介绍 -->
                        <div class="hero-slider-content col-sm-8 col-xs-12">
                            <h1 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">王牌商品1</h1>
                            <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                            <!-- 跳转至该王牌商品的商品详情页面 -->
                            <a href="product-details.html" class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">现在购买</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商品 2 -->
            <div id="slider-caption-2" class="nivo-html-caption">
                <div class="container">
                    <div class="row">
                        <!-- 商品介绍 -->
                        <div class="hero-slider-content col-sm-8 col-xs-12">
                            <h1 class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">王牌商品2</h1>
                            <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                            <a href="product-details.html" class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.5s">现在购买</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END SLIDER SECTION -->

        <!-- PRODUCT SECTION START -->
        <div class="product-section section pt-120 pb-120">
            <div class="container">

                <div class="row">
                    <!-- Isotop Product Filter -->
                    <div class="isotope-product-filter col-xs-8">
                        <button class="active" v-on:click="shownType = 0">全部</button>
                        <button v-on:click="shownType = 1">椅子</button>
                        <button v-on:click="shownType = 2">桌子</button>
                        <button v-on:click="shownType = 3">家居装饰</button>
                        <button v-on:click="shownType = 4">台灯</button>
                    </div>
                    <!-- Product Filter Toggle -->
                    <div class="col-xs-4">
                        <button class="product-filter-toggle">筛选</button>
                    </div>
                </div>

                <!-- Product Filter Wrapper -->
                <div class="row">
                    <div class="col-xs-12">
                        <div class="product-filter-wrapper">
                            <!-- Product Filter -->
                            <div class="product-filter col-md-3 col-sm-6 col-xs-12 mb-30">
                                <h5>Sort by</h5>
                                <ul class="sort-by">
                                    <li><a href="#">默认</a></li>
                                    <li><a href="#">Popularity</a></li>
                                    <li><a href="#">Average rating</a></li>
                                    <li><a href="#">Newness</a></li>
                                    <li><a href="#">价格由低到高</a></li>
                                    <li><a href="#">价格由高到低</a></li>
                                </ul>
                            </div>
                            <!-- Product Filter -->
                            <div class="product-filter col-md-3 col-sm-6 col-xs-12 mb-30">
                                <h5>color filters</h5>
                                <ul class="color-filter">
                                    <li><a href="#"><i style="background-color: #000000;"></i>Black</a></li>
                                    <li><a href="#"><i style="background-color: #663300;"></i>Brown</a></li>
                                    <li><a href="#"><i style="background-color: #FF6801;"></i>Orange</a></li>
                                    <li><a href="#"><i style="background-color: #ff0000;"></i>red</a></li>
                                    <li><a href="#"><i style="background-color: #FFEE00;"></i>Yellow</a></li>
                                </ul>
                            </div>
                            <!-- Product Filter -->
                            <div class="product-filter col-md-3 col-sm-6 col-xs-12 mb-30">
                                <h5>product tags</h5>
                                <div class="product-tags">
                                    <a href="#">New</a>,
                                    <a href="#">brand</a>,
                                    <a href="#">black</a>,
                                    <a href="#">white</a>,
                                    <a href="#">chire</a>,
                                    <a href="#">table</a>,
                                    <a href="#">Lorem</a>,
                                    <a href="#">ipsum</a>,
                                    <a href="#">dolor</a>,
                                    <a href="#">sit</a>,
                                    <a href="#">amet</a>
                                </div>
                            </div>
                            <!-- Product Filter -->
                            <div class="product-filter col-md-3 col-sm-6 col-xs-12 mb-30">
                                <h5>Filter by price</h5>
                                <div id="price-range"></div>
                                <div class="price-values">
                                    <span>Price:</span>
                                    <input type="text" class="price-amount">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="isotope-grid row">
                    <item-list v-for="item in shownItems" :key="item.id" v-bind="item" ></item-list>
                    <!-- Product Item Start -->
                    <!-- Product Item End -->
                </div>
                <!-- 加载更多的商品 -->
                <div class="row">
                    <div class="text-center col-xs-12 mt-30">
                        <a href="#" class="btn load-more-product">加载更多</a>
                    </div>
                </div>

            </div>
        </div>
        <!-- PRODUCT SECTION END -->

        <!-- QUICK VIEW MODAL START-->
        <div id="quickViewModal" class="modal fade" >
            <div class="container">
                <div class="modal-content row">
                    <div class="modal-body">
                        <button class="close" data-dismiss="modal" ><span aria-hidden="true">&times;</span></button>
                        <!-- QuickView Product Images -->
                        <div class="col-md-5 col-sm-6 col-xs-12 mb-40">
                            <!-- Tab panes -->
                            <div class="tab-content mb-10">
                                <div class="pro-large-img tab-pane active" id="pro-large-img-1">
                                    <img src="img/product/2.jpg" alt="" />
                                </div>
                                <div class="pro-large-img tab-pane" id="pro-large-img-2">
                                    <img src="image/product/1.jpg" alt="" />
                                </div>
                                <div class="pro-large-img tab-pane" id="pro-large-img-3">
                                    <img src="image/product/3.jpg" alt="" />
                                </div>
                                <div class="pro-large-img tab-pane" id="pro-large-img-4">
                                    <img src="image/product/4.jpg" alt="" />
                                </div>
                                <div class="pro-large-img tab-pane" id="pro-large-img-5">
                                    <img src="image/product/5.jpg" alt="" />
                                </div>
                            </div>
                            <!-- QuickView Product Thumbnail Slider -->
                            <div class="pro-thumb-img-slider">
                                <div><a href="#pro-large-img-1" data-toggle="tab"><img src="image/product/2.jpg" alt="" /></a></div>
                                <div><a href="#pro-large-img-2" data-toggle="tab"><img src="image/product/1.jpg" alt="" /></a></div>
                                <div><a href="#pro-large-img-3" data-toggle="tab"><img src="image/product/3.jpg" alt="" /></a></div>
                                <div><a href="#pro-large-img-4" data-toggle="tab"><img src="image/product/4.jpg" alt="" /></a></div>
                                <div><a href="#pro-large-img-5" data-toggle="tab"><img src="image/product/5.jpg" alt="" /></a></div>
                            </div>
                        </div>
                        <!-- QuickView Product Details -->
                        <div class="col-md-7 col-sm-6 col-xs-12 mb-40">
                            <div class="product-details section">
                                <!-- Title -->
                                <h1 class="title">DSR Eiffel chair</h1>
                                <!-- Price Ratting -->
                                <div class="price-ratting section">
                                    <!-- Price -->
                                    <span class="price float-left"><span class="new">€ 120.00</span></span>
                                    <!-- Ratting -->
                                    <span class="ratting float-right">
                                <i class="fa fa-star active"></i>
                                <i class="fa fa-star active"></i>
                                <i class="fa fa-star active"></i>
                                <i class="fa fa-star active"></i>
                                <i class="fa fa-star active"></i>
                                <span> (01 Customer Review)</span>
                            </span>
                                </div>
                                <!-- Short Description -->
                                <div class="short-desc section">
                                    <h5 class="pd-sub-title">Quick Overview</h5>
                                    <p>There are many variations of passages of Lorem Ipsum avaable, b majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. make an ami jani na.</p>
                                </div>
                                <!-- Product Size -->
                                <div class="product-size section">
                                    <h5 class="pd-sub-title">Select Size</h5>
                                    <button>s</button>
                                    <button class="active">m</button>
                                    <button>x</button>
                                    <button>xl</button>
                                </div>
                                <!-- Product Color -->
                                <div class="color-list section">
                                    <h5 class="pd-sub-title">Select Color</h5>
                                    <button class="active" style="background-color: #51bd99;"><i class="fa fa-check"></i></button>
                                    <button style="background-color: #ff7a5f;"><i class="fa fa-check"></i></button>
                                    <button style="background-color: #baa6c2;"><i class="fa fa-check"></i></button>
                                    <button style="background-color: #414141;"><i class="fa fa-check"></i></button>
                                </div>
                                <!-- Quantity Cart -->
                                <div class="quantity-cart section">
                                    <div class="product-quantity">
                                        <input type="text" value="0">
                                    </div>
                                    <button class="add-to-cart">add to cart</button>
                                </div>
                                <!-- Usefull Link -->
                                <ul class="usefull-link section">
                                    <li><a href="#"><i class="pe-7s-mail"></i> Email to a Friend</a></li>
                                    <li><a href="#"><i class="pe-7s-like"></i> Wishlist</a></li>
                                    <li><a href="#"><i class="pe-7s-print"></i> print</a></li>
                                </ul>
                                <!-- Share -->
                                <div class="share-icons section">
                                    <span>share :</span>
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- QUICK VIEW MODAL END-->
    </div>
    <!-- Body main wrapper end -->
</template>

<script>
    import {WOW} from 'wowjs'
    import '../../public/js/plugins'
    // import '../../public/js/ajax-mail'
    import itemlist from './item-list'

    export default {
        name: "HomePage",
        components: {
            'item-list': itemlist,
        },
        data () {
            return {
                shownType: 0,
                itemLists: [
                    {
                        id: 1,
                        name:"dbd1",
                        type: 1,
                        img:"img/product/1.jpg",
                        newPrice: 123,
                        oldPrice: 456,
                        rating: 4.5,
                        ratingNumber: 1,
                    },
                    {
                        id: 2,
                        name:"dbd2",
                        type: 2,
                        img:"img/product/2.jpg",
                        newPrice: 123,
                        oldPrice: 456,
                        rating: 4,
                    },
                    {
                        id: 3,
                        name:"dbd3",
                        type: 3,
                        img:"img/product/3.jpg",
                        newPrice: 123,
                        oldPrice: 456,
                        rating: 4,
                    },
                    {
                        id: 4,
                        name:"dbd4",
                        type: 4,
                        img:"img/product/4.jpg",
                        newPrice: 123,
                        oldPrice: 456,
                        rating: 4,
                    }
                ],
            };
        },
        computed: {
            shownItems: function(){
                if(this.shownType===0){
                    return this.itemLists
                }
                let shown = []
                shown.push(this.itemLists.filter(item=>item.type===this.shownType))
                return shown
            }
        },
        mounted() {
            // 在项目加载完成之后初始化wow
            this.$nextTick(() => {
                let wow = new WOW({
                    live:false
                })
                wow.init()
            })
            var $window = $(window);
            $window.on('scroll', function() {
                var scroll = $window.scrollTop();
                if (scroll < 300) {
                    $(".sticker").removeClass("stick");
                }else{
                    $(".sticker").addClass("stick");
                }
            });
            $('.main-menu').meanmenu({
                meanScreenWidth: '991',
                meanMenuContainer: '.mobile-menu',
                meanMenuClose: '<i class="pe-7s-close-circle"></i>',
                meanMenuOpen: '<i class="pe-7s-menu"></i>',
                meanRevealPosition: 'right',
                meanMenuCloseSize: '30px',
            });

            $('#home-slider').nivoSlider({
                directionNav: true,
                animSpeed: 1000,
                effect: 'random',
                slices: 18,
                pauseTime: 88885000,
                pauseOnHover: false,
                controlNav: false,
                prevText: '<i class="fa fa-long-arrow-left"></i>',
                nextText: '<i class="fa fa-long-arrow-right"></i>'
            });

            $('.home-slick-image-slider').slick({
                asNavFor: '.home-slick-text-slider',
                slidesToShow: 1,
                prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
                nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-long-arrow-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            autoplay: true,
                            autoplaySpeed: 5000,
                        }
                    },
                ]
            });
            /*-- Text Slider --*/
            $('.home-slick-text-slider').slick({
                arrows: false,
                asNavFor: '.home-slick-image-slider',
                slidesToShow: 1,
            });

            $('#price-range').slider({
                range: true,
                min: 0,
                max: 700,
                values: [ 70, 500 ],
                slide: function( event, ui ) {

                    $('.price-amount').val( '€' + ui.values[ 0 ] + ' - €' + ui.values[ 1 ] );

                }
            });
            $('.price-amount').val( '€' + $('#price-range').slider( 'values', 0 ) +
                ' - €' + $('#price-range').slider('values', 1 ) );

            $('.product-quantity').append('<span class="dec qtybtn"><i class="fa fa-angle-left"></i></span><span class="inc qtybtn"><i class="fa fa-angle-right"></i></span>');
            $('.qtybtn').on('click', function() {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });

            $('.product-slider-4').slick({
                speed: 700,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-angle-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 1169,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });

            $('.pro-thumb-img-slider').slick({
                speed: 700,
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-angle-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                ]
            })

            $('.checkout-form input[type="checkbox"]').on('click', function(){
                var $collapse = $(this).data('target');
                if( $(this).is(':checked') ){
                    $('.collapse[data-collapse="'+$collapse+'"]').slideDown();
                }else {
                    $('.collapse[data-collapse="'+$collapse+'"]').slideUp();
                }
            })

            $('.product-filter-toggle').on('click', function(){
                $('.product-filter-wrapper').slideToggle();
            })


            $.scrollUp({
                scrollText: '<i class="fa fa-angle-up"></i>',
                easingType: 'linear',
                scrollSpeed: 900,
                animation: 'fade'
            });
        }
    }
</script>

<style scoped>

</style>