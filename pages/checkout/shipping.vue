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
        </div>
        <h2 class="form-label">Shipping method</h2>
        <div class="wrap-info">
            <div class="wrap-info-line">
               <div style="display:flex; align-items: center;">
                   <div class="circle"></div>
                   <span>USPS - First Class Package</span>
               </div>
                <div>
                    Free
                </div>
            </div>
        </div>
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
        margin: 21px 6px;
        font-size: 18px;
        font-weight: 300;
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

</style>