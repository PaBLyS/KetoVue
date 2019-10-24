<template>
    <section class="layout">
        <div class="wrap">
            <div class="left">
                <nuxt-link to="/" class="left-brand">Yogurt Skin Cream</nuxt-link>
                <b-breadcrumb :items="items"></b-breadcrumb>
                <nuxt/>
                <div class="wrap-footer">
                    <div class="btn-wrap">
                        <button @click="ppStatus = !ppStatus" class="btn">Privacy policy</button>
                        <button @click="tacStatus = !tacStatus" class="btn">Terms of service</button>
                    </div>
                </div>
            </div>
            <div class="right">
                <right-bar/>
            </div>
        </div>
        <div :class="['popup', 'popup-disabled', {'popup-active': ppStatus }]">
            <div class="close-popup" @click="ppStatus = !ppStatus"></div>
            <div class="page-wrap">
                <div class="page-label">Privacy policy</div>
                <div class="page-content">
                    <div class="page-content-scroll">
                        <privacy-policy-page/>
                    </div>
                </div>
            </div>
        </div>
        <div :class="['popup', 'popup-disabled', {'popup-active': tacStatus }]">
            <div class="close-popup" @click="tacStatus = !tacStatus"></div>
            <div class="page-wrap">
                <div class="page-label">Terms And Conditions</div>
                <div class="page-content">
                    <div class="page-content-scroll">
                        <terms-and-conditions-page/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import termsAndConditionsPage from "../components/info/termsAndConditionsPage";
    import privacyPolicyPage from "../components/info/privacyPolicyPage";
    import rightBar from "../components/checkout/rightBar";

    export default {
        components: {termsAndConditionsPage, privacyPolicyPage, rightBar},
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
                ],
                ppStatus: false,
                tacStatus: false,
                info: {
                    email: '',
                    firstName: ''
                }
            }
        },
        beforeCreate() {
            this.$store.commit('clearShipping');
        }
    }
</script>

<style scoped>
    .layout {
        font-family: 'Segoe UI', sans-serif;
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

    .left-brand:hover{
        text-decoration: none;
    }
    
    .wrap-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .btn-wrap {
        border-top: 1px solid #e6e6e6;
        padding: 15px 0;
    }

    .btn {
        color: #2d2d2d;
        font-size: 12px;
    }

    .btn:focus,
    .btn:active {
        outline: none;
        box-shadow: none;
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

    .close-popup {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .popup {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        transition: all .2s ease-in;
        align-items: center;
        justify-content: center;
    }

    .popup-disabled {
        display: none;
        opacity: 0;
    }

    .popup-active {
        display: flex;
        opacity: 1;
    }

    .page-wrap {
        color: #545454;
        width: 50%;
        height: 80%;
        background: #fff;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        position: relative;
    }

    .page-label {
        color: #333;
        font-size: 28px;
        padding: 21px 35px;
        height: 10%;
        border-bottom: 1px solid #e6e6e6;
    }

    .page-content {
        height: 90%;
        padding: 35px;
    }

    .page-content-scroll {
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
    }

</style>

<style>
    .label-info-page {
        text-align: left;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 25px;
    }

    .sub-label-info-page {
        text-align: left;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 15px;
    }

    .text-info-page {
        line-height: 20px;
        font-size: 16px;
        margin-bottom: 15px;
    }
</style>