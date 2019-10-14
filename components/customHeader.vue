<template>
    <section class="header">
        <b-container>
            <b-row class="justify-content-end header-phone">
                Customer Service +1 (800) 286-9152
            </b-row>
            <b-row align-v="end">
                <b-col>
                    <div class="header-logo__wrap">
                        <img class="header-logo" src="/logo.png">
                    </div>
                </b-col>
                <b-col class="header-cart">
                    <div class="header-cart__wrap">
                        <div class="header-cart__text">FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE</div>
                        <cart-icon/>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
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
        padding: 16px 0;
    }

    .header-phone {
        font-size: 14px;
        color: #323232;
    }

    .header-logo {
        width: 100%;
        height: auto;
    }

    .header-logo__wrap {
        width: 225px;
    }

    .header-cart {
        padding: 0;
    }

    .header-cart__wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .header-cart__text {
        display: inline-block;
        padding: 17px 0;
        font-size: 14px;
        color: #2e2c2c;
        font-weight: bold;
    }
</style>
