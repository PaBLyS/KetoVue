<template>
    <section>
        <div class="wrap-info">
            <div class="wrap-info-line">
                <div class="wrap-info-label">
                    <span class="info-label">Contact</span>
                    <span class="info">{{info.email}}</span>
                </div>
                <nuxt-link to="/checkout/information" class="change-link">Change</nuxt-link>
            </div>
            <hr>
            <div class="wrap-info-line">
                <div class="wrap-info-label">
                    <span class="info-label">Ship to</span>
                    <span class="info">
                        {{info.address}}, {{info.address2}}, {{info.city}} {{info.zipCode}}, {{info.country}}
                    </span>
                </div>
                <nuxt-link to="/checkout/information" class="change-link">Change</nuxt-link>
            </div>
            <hr>
            <div class="wrap-info-line">
                <div class="wrap-info-label">
                    <span class="info-label">Method</span>
                    <span class="info">
                        USPS - First Class Package · <span style="font-weight: 700; color: #333">Free</span>
                    </span>
                </div>
            </div>
        </div>
        <h2 class="form-label">Payment</h2>
        <h3 class="form-sub-label">All transactions are secure and encrypted.</h3>
        <b-alert show variant="danger" class="danger">Your payment can’t be processed for technical reasons. Try again
            in a few minutes or use a different payment method.
        </b-alert>
        <div class="card-wrap">
            <div class="card-top">
                <div>Credit card</div>
                <div class="wrap-payment">
                    <div class="icon-wrap">
                        <img src="//cdn.shopify.com/s/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                             alt="VISA">
                    </div>
                    <div class="icon-wrap">
                        <img src="//cdn.shopify.com/s/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                             alt="Master Card">
                    </div>
                </div>
            </div>
            <div class="card-bottom">
                <div class="wrap-input-full">
                    <custom-input nameInput="cardNumber"
                                  type="text"
                                  placeholderInput="Cart number"
                                  invalidText="Enter a valid card number"/>
                </div>
                <div class="wrap-input-full">
                    <custom-input nameInput="cardName"
                                  type="text"
                                  placeholderInput="Name on card"
                                  invalidText="Enter your name exactly as it’s written on your card"/>
                </div>
                <div style="display:flex">
                    <div class="wrap-input">
                        <custom-input-data nameInput="cardData"
                                           type="text"
                                           placeholderInput="Expiration date (MM / YY)"
                                           invalidText="Enter a valid card expiry date"/>
                    </div>
                    <div class="wrap-input">
                        <custom-input nameInput="cardCode"
                                      type="text"
                                      placeholderInput="Security code"
                                      invalidText="Enter the CVV or security code on your card"/>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="form-label">Billing address</h2>
        <h3 class="form-sub-label">Select the address that matches your card or payment method.</h3>
        <div class="wrap-info">
            <div class="wrap-info-line">
                <div style="display:flex; align-items: center;">
                    <div class="circle"></div>
                    <span>USPS - First Class Package</span>
                </div>
            </div>
        </div>
        <div class="wrap-button">
            <nuxt-link to="/checkout/information" class="button-back">Return to shipping</nuxt-link>
            <nuxt-link to="/checkout/payment" class="button-next">Pay now</nuxt-link>
        </div>
    </section>
</template>

<script>
    import customInput from "../../components/checkout/customInput";
    import customInputData from "../../components/checkout/customInputData";

    export default {
        name: "payment",
        layout: "checkout",
        components: {customInput, customInputData},
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
        font-size: 14px;
        margin-bottom: 21px;
    }

    .wrap-info-label {
        color: #737373;
        display: flex;
    }

    .wrap-info-line {
        display: flex;
        justify-content: space-between;
    }

    .info {
        display: block;
    }

    .info-label {
        width: 80px;
    }

    .form-label {
        margin: 21px 6px 0;
        font-size: 18px;
        font-weight: 400;
    }

    .form-sub-label {
        color: #1b1b1b;
        font-size: 14px;
        margin: 4px 6px 21px;
        font-weight: 400;
    }

    .change-link {
        color: #2d2d2d;
        font-size: 12px;
    }

    .change-link:hover {
        text-decoration: none;
    }

    .circle {
        height: 18px;
        width: 18px;
        box-sizing: border-box;
        border: 7px solid #2d2d2d;
        border-radius: 100%;
        margin-right: 11px;

    }

    .wrap-input {
        width: 50%;
        padding: 6px;
    }

    .wrap-input-full {
        padding: 6px;
        width: 100%;
    }

    .card-top {
        display: flex;
        justify-content: space-between;
        padding: 16px;
        border: 1px solid #d9d9d9;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .wrap-payment {
        display: flex;
    }

    .icon-wrap {
        margin-right: 5px;
    }


    .card-bottom {
        padding: 16px;
        background: #fafafa;
        border: 1px solid #d9d9d9;
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }


    .danger {
        color: #545454;
        font-size: 14px;
    }

</style>