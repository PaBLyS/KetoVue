<template>
  <b-container fluid style="padding: 0">
    <custom-slider />
    <h2 class="block-label">TRENDING NOW</h2>
    <product-list />
  </b-container>
</template>

<script>
  import customSlider from "../components/home/customSlider";
  import productList from "../components/home/productList";

  export default {
    components: {
        customSlider,
        productList
    }
  };
</script>

<style scoped>
  .block-label {
    margin: 25px 0;
    width: 100%;
    text-align: center;
  }
  .block-label {
    color: #232323;
    font-size: 20px;
    font-weight: 700;
    background-color: #f7cac9;
    margin: 0;
    padding: 25px 0;
  }
</style>
