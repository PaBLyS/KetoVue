<template>
  <b-navbar class="header" toggleable="md">
    <b-navbar-brand class="logo-wrap" href="#"><img class="logo-img" src="/logo.png" alt=""></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto mr-auto nav-list">
        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        <NuxtLink class="nav-link" to="catalog">Catalog</NuxtLink>
        <NuxtLink class="nav-link" to="about-us">About Us</NuxtLink>
      </b-navbar-nav>

      <b-navbar-nav>
        <cart-icon />
      </b-navbar-nav>

    </b-collapse>

  </b-navbar>
</template>

<script>
    import cartIcon from "./cartIcon";

    export default {
        name: "customHeader",
        components: {cartIcon}
    }
</script>

<style scoped>
  .header {
    background-color: #bfa197;
  }
  .logo-wrap {
    height: 70px;
  }
  .logo-img {
    height: 100%;
  }
  .nav-list {
    font-weight: bold;
  }
</style>
