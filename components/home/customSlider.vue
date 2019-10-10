<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; height: 500px; overflow: hidden"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="slider/1.jpg"
      ></b-carousel-slide>

      <b-carousel-slide img-src="slider/2.jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="slider/3.jpg"></b-carousel-slide>

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

<style scoped>

</style>
