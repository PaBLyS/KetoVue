<template>
  <div>
    <custom-header />
    <custom-header-sticky />
    <nuxt />
    <custom-footer />
  </div>
</template>

<script>
  import customHeader from "../components/customHeader";
  import customHeaderSticky from "../components/customHeaderSticky";
  import customFooter from "../components/customFooter";

  export default {
      components: {customFooter, customHeader, customHeaderSticky}
  }

</script>

<style>

</style>
