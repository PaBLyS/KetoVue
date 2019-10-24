<template>
    <section>
        <div class="wrap-info">
            <div>
                <span>Contact</span>
                <span>{{info.email}}</span>
            </div>
            <hr>
            <div>
                <span>Ship to</span>
                <span>{{info.email}}</span>
            </div>
        </div>
        <h2 class="form-label">Contact information</h2>
        {{info}}
        <div class="wrap-button">
            <nuxt-link to="/checkout/information" class="button-back">Return to information</nuxt-link>
            <nuxt-link to="/checkout/payment" class="button-next">Continue to payment</nuxt-link>
        </div>
    </section>
</template>

<script>

    export default {
        layout: 'checkout',
        name: "shipping",
        data() {
            return {
                info: this.$store.state.shipping
            }
        }
    }
</script>

<style scoped>
    .wrap-info {
        padding: 12px 16px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
    }

    .form-label {
        margin: 21px 6px;
        font-size: 18px;
        font-weight: 300;
    }

</style>