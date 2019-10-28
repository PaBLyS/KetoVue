<template>
    <section class="block">
        <b-container>
            <custom-breadcrumb :items="items"></custom-breadcrumb>
            <h2 class="label">Ingredients</h2>
            <div v-for="(item, index) in itemsIngredient"
                 :key="index"
                 class="wrap-ingredient"
            >
                <div class="sub-label">{{ item.label }}</div>
                <img :src="'/ingredients/' + index + '.jpg'">
                <p class="text">FOOD AND DRUG ADMINISTRATION (FDA) DISCLOSURE This product is not for use by or sale to
                    persons under the age of 18. This product should be used only as directed on the label. It should
                    not be used if you are pregnant or nursing. Consult with a physician before use if you have a
                    serious medical condition or use prescription medications. All trademarks and copyrights are the
                    property of their respective owners and are not affiliated with nor do they endorse. These
                    statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure
                    or prevent any disease. Individual results will vary. By using this site you agree to follow the
                    <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                    and all
                    <nuxt-link to="/terms-and-conditions">Terms & Conditions</nuxt-link>
                    printed on this site. Void Where Prohibited By Law.
                </p>
            </div>
        </b-container>
    </section>
</template>

<script>
    import customBreadcrumb from "../components/customBreadcrumb";

    export default {
        name: "ingredients",
        components: {customBreadcrumb},
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Ingredients',
                        href: '/ingredients'
                    }
                ]
            }
        },
        computed: {
            itemsIngredient() {
                return this.$store.state.items;
            }
        }
    }
</script>

<style scoped>
    .block {
        background-color: var(--main-block);
        min-height: 400px;
        padding-bottom: 20px;
    }

    .label {
        text-align: left;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 40px;
    }

    .sub-label {
        text-align: left;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 12px;
        margin-bottom: 10px;
    }

    .text {
        width: 80%;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
        margin: 15px 0 25px;
    }

    .text a {
        color: #3b3b3b;
        text-decoration: none;
    }

    .text a:hover {
        color: #2e2c2c;
        text-decoration: underline;
    }

    .wrap-ingredient {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
