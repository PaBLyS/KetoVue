<template>
  <b-container fluid style="padding: 0">
    <custom-slider />
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
</style>
