<template>
    <div class="default">
        <custom-header/>
        <custom-header-sticky/>
        <nuxt/>
        <custom-footer/>
        <custom-cookie-setting/>
    </div>
</template>

<script>
    import customHeader from "../components/customHeader";
    import customHeaderSticky from "../components/customHeaderSticky";
    import customFooter from "../components/customFooter";
    import customCookieSetting from "../components/customCookieSetting";

    export default {
        components: {customFooter, customHeader, customHeaderSticky, customCookieSetting}
    }

</script>

<style>
    .default {
        font-family: Poppins, "Arial", "sans-serif";
    }
</style>
