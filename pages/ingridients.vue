<template>
    <section class="block">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h2 class="label">Ingridients</h2>
            <div v-for="(item, index) in itemsIngridient"
                 :key="index"
                 class="wrap-ingridient"
            >
                <div class="sub-label">{{ item.label }}</div>
                <img :src="'/ingridients/' + index + '.jpg'">
                <p class="text">FOOD AND DRUG ADMINISTRATION (FDA) DISCLOSURE This product is not for use by or sale to
                    persons under the age of 18. This product should be used only as directed on the label. It should
                    not be used if you are pregnant or nursing. Consult with a physician before use if you have a
                    serious medical condition or use prescription medications. All trademarks and copyrights are the
                    property of their respective owners and are not affiliated with nor do they endorse. These
                    statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure
                    or prevent any disease. Individual results will vary. By using this site you agree to follow the
                    <nuxt-link to="/">Privacy Policy</nuxt-link>
                    and all
                    <nuxt-link to="/">Terms & Conditions</nuxt-link>
                    printed on this site. Void Where Prohibited By Law.
                </p>
            </div>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "ingridients",
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Ingridients',
                        href: '/ingridients'
                    }
                ]
            }
        },
        computed: {
            itemsIngridient() {
                return this.$store.state.items;
            }
        }
    }
</script>

<style scoped>
    .block {
        background-color: #f7cac9;
        min-height: 400px;
        padding-bottom: 20px;
    }

    .breadcrumb {
        background: transparent;
        padding-left: 0;
    }

    .breadcrumb a,
    .breadcrumb span {
        font-size: 14px;
        color: #232323;
        text-decoration: none;
    }

    .label {
        text-align: left;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 40px;
    }

    .sub-label {
        text-align: left;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .text {
        width: 80%;
        line-height: 18px;
        font-size: 14px;
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

    .wrap-ingridient {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>