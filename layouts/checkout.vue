<template>
    <section class="layout">
        <div class="wrap">
            <div class="left">
                <nuxt-link to="/" class="left-brand">Yogurt Skin Cream</nuxt-link>
                <b-breadcrumb :items="items"></b-breadcrumb>
                <nuxt/>
                <custom-footer-checkout />
            </div>
            <div class="right">
                <right-bar/>
            </div>
        </div>
    </section>
</template>

<script>
    import rightBar from "../components/checkout/rightBar";
    import customFooterCheckout from "../components/customFooterCheckout";

    export default {
        components: {rightBar, customFooterCheckout},
        data() {
            return {
                items: [
                    {
                        text: 'Cart',
                        href: '/cart'
                    },
                    {
                        text: 'Information',
                        href: '/checkout/information',
                    },
                    {
                        text: 'Shipping',
                        href: '/checkout/shipping'
                    },
                    {
                        text: 'Payment',
                        href: '/checkout/payment'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    body {
        font-family: -apple-system, sans-serif;
    }

    .breadcrumb {
        background: transparent;
        padding-left: 0;
    }

    .breadcrumb a,
    .breadcrumb span {
        font-size: 12px;
        color: #232323;
        text-decoration: none;
    }

    .layout {
        width: 100%;
        overflow: hidden;
    }

    .wrap {
        max-width: 1100px;
        min-height: 100vh;
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }

    .left {
        width: 58%;
        min-height: 100%;
        padding: 56px 0 80px;
        margin-right: 66px;
        position: relative;
    }

    .left-brand {
        color: #333;
        font-size: 28px;
    }

    .right {
        position: relative;
        width: 42%;
        min-height: 100%;
        padding: 56px 0 0 44px;
        border-left: 1px solid #e1e1e1;
    }
    
    .right:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background-color: #fafafa;
        z-index: -1;
    }
</style>