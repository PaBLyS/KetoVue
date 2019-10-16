<template>
    <div>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >

            <b-carousel-slide
                    img-src="/slider/0.jpg"
            >
                <h2>INCREASE HYDRATION</h2>
                <div class="carousel-caption-line"></div>
                <nuxt-link to="/">SHOP THE COLLECTION</nuxt-link>
            </b-carousel-slide>

            <b-carousel-slide
                    img-src="/slider/1.jpg"
            >
                <h2>IMPROVE APPEARANCE</h2>
                <div class="carousel-caption-line"></div>
                <nuxt-link to="/">SHOP THE COLLECTION</nuxt-link>
            </b-carousel-slide>

            <b-carousel-slide
                    img-src="/slider/2.jpg"
            >
                <h2>REDUCE WRINKLES</h2>
                <div class="carousel-caption-line"></div>
                <nuxt-link to="/">SHOP THE COLLECTION</nuxt-link>
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "customSlider",
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = false
            }
        }
    }
</script>

<style>
    .carousel-caption {
        position: absolute;
        top: 40%;
        left: 50%;
        right: 15%;
    }

    .carousel-caption h2 {
        color: #000;
        font-size: 30px;
        font-weight: 700;
    }

    .carousel-caption a {
        display: inline-block;
        color: #fff;
        width: 270px;
        padding: 10px 25px 8px;
        font-weight: 700;
        font-size: 13px;
        text-decoration: none;
        background: #232323;
        box-shadow: 0 2px 2px rgba(0,0,0,0.1);
        transition: all .3s ease-in;
    }
    
    .carousel-caption a:hover{
        color: #000;
        background: #fff;
    }

    .carousel-caption-line {
        margin: 15px auto 30px;
        width: 40px;
        background-color: #2e2c2c;
        height: 3px;
    }


</style>
