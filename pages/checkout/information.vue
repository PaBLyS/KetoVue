<template>
    <section>
        <h2>Contact information</h2>
        <custom-input nameInput="email"
                      type="email"
                      placeholderInput="Email or mobile phone number"
                      invalidText="Enter a valid email or a mobile phone number"/>
    </section>
</template>

<script>
    import customInput from "../../components/checkout/customInput";

    export default {
        layout: 'checkout',
        name: "information",
        components: {customInput}
    }
</script>

<style scoped>

</style>