<template>
    <section>
        <h2>Contact information</h2>
        <custom-input nameInput="email"
                      type="email"
                      placeholderInput="Email or mobile phone number"
                      invalidText="Enter a valid email or a mobile phone number"/>
        <custom-checkbox nameCheckbox="news"
                         textCheckbox="Keep me up to date on news and exclusive offers"/>
        <h2>Shipping address</h2>
    </section>
</template>

<script>
    import customInput from "../../components/checkout/customInput";
    import customCheckbox from "../../components/checkout/customCheckbox";

    export default {
        layout: 'checkout',
        name: "information",
        components: {customCheckbox, customInput}
    }
</script>

<style scoped>

</style>