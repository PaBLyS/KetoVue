<template>
    <section>
        <h2>Contact information</h2>
        <custom-input nameInput="email" placeholderInput="Email or mobile phone number" />
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