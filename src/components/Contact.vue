<template>
    <div class="wrapper">
        <!-- PAGE BANNER SECTION -->
        <div class="page-banner-section section">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="page-banner-content">
                            <h1>contact us</h1>
                            <ul class="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li class="active">contact us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PAGE BANNER SECTION -->

        <!-- PAGE SECTION -->
        <div class="page-section section pt-120 pb-90">
            <div class="container">
                <div class="row mb-40">
                    <!-- Contact Map -->
                    <div class="contact-map col-md-6 col-xs-12 mb-40">
                        <div id="map"></div>
                    </div>
                    <!-- Contact Form -->
                    <div class="contact-form col-md-6 col-xs-12 mb-40">
                        <h3>Send Your Massage</h3>
                        <form id="contact-form" action="mail.php" method="post">
                            <div class="row">
                                <div class="col-sm-6 col-xs-12 mb-20"><input type="text" name="name" placeholder="Your name"></div>
                                <div class="col-sm-6 col-xs-12 mb-20"><input type="text" name="email" placeholder="Your email"></div>
                                <div class="col-xs-12 mb-20"><textarea name="message" placeholder="Your message"></textarea></div>
                                <div class="col-xs-12"><input type="submit" value="SUBMIT"></div>
                            </div>
                        </form>
                        <p class="form-messege"></p>
                    </div>
                </div>
                <!-- Contact Info -->
                <div class="row">
                    <div class="contact-info col-md-4 text-center mb-30">
                        <a href="">Phone: +88 58 7485 6987 65</a>
                    </div>
                    <div class="contact-info col-md-4 text-center mb-30">
                        <a href="mailto:outside@email.com">Email: outside@email.com</a>
                    </div>
                    <div class="contact-info col-md-4 text-center mb-30">
                        <p>Address: house 09,Road 3,Dhaka</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PAGE SECTION -->
    </div>
</template>

<script>
    // import {WOW} from 'wowjs'
    // import '../../public/js/plugins'
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>