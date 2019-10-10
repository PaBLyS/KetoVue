<template>
  <div>
    <h2>Products</h2>
    <product-list />
  </div>
</template>

<script>
    import productList from "../components/home/productList";

    export default {
        name: "catalog",
        components: {
            productList
        }
    }
</script>

<style scoped>
  h2 {
    text-align: center;
  }
</style>
