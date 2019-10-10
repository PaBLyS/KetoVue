<template>
  <div>
    <custom-header />
    <nuxt />
    <custom-footer />
  </div>
</template>

<script>
  import customHeader from "../components/customHeader";
  import customFooter from "../components/customFooter";

  export default {
      components: {customFooter, customHeader}
  }

</script>

<style>

</style>
