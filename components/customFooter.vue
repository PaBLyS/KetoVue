<template>
    <section>
        <b-container fluid class="footer-top">
            <b-container class="footer-links">
                <ul>
                    <li>
                        <nuxt-link to="/customer-support" class="footer-link underline">Customer Support</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/ingredients" class="footer-link underline">Ingredients</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/privacy-policy" class="footer-link underline">Privacy Policy</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/terms-and-conditions" class="footer-link underline">Terms and Conditions
                        </nuxt-link>
                    </li>
                </ul>
            </b-container>
        </b-container>
        <b-container class="footer-bottom">
            <p>© 2019, {{config.brandName}} <br>
                FOOD AND DRUG ADMINISTRATION (FDA) DISCLOSURE This product is not for use by or sale to persons under
                the age of 18. This product should be used only as directed on the label. It should not be used if you
                are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or
                use prescription medications. All trademarks and copyrights are the property of their respective owners
                andare not affiliated with nor do they endorse. These statements have not been evaluated by the FDA.
                This product is not intended to diagnose, treat, cure or prevent any disease. Individual results will
                vary. By using this site you agree to follow the
                <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                and all
                <nuxt-link to="/terms-and-conditions">Terms & Conditions</nuxt-link>
                printed on this site. Void Where Prohibited By Law.
            </p>
            <div class="payment">
                <img src="/visa.png" alt="">
                <img src="/master-card.jpg" alt="">
            </div>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "customFooter",
        data() {
            return {
                config: this.$store.state.corpInfo
            }
        }
    }
</script>

<style scoped>
    section {
        background: var(--footer-bg);
        color: var(--footer-color);
    }

    .footer-top {
        padding: 35px 0 25px;
        border-bottom: 1px solid #3b3b3b;
    }

    .footer-link {
        color: var(--footer-color);
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        padding: 3px 0;
        text-decoration: none;
    }

    .footer-link:hover {
        color: var(--footer-link-hover);
    }

    .footer-links {
        padding: 0;
    }

    .footer-links ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer-bottom {
        font-size: 12px;
        line-height: 28px;
        padding: 25px 0 65px;
    }

    .footer-bottom a {
        color: var(--footer-color);
    }

    .payment img {
        height: 25px;
        width: auto;
        margin-right: 15px;
    }
</style>

