<template>
    <section class="block">
        <b-container>
            <custom-breadcrumb :items="items"></custom-breadcrumb>
            <h2 class="label">About Us</h2>
            <p class="text">
                Dryness, wrinkles, age spots are common skin care concerns that riddle most women as they begin to age.
                The reason for the appearance of these visible signs of aging is the disintegration of the protective
                layer, that protects the skin, which in turn, leaves it vulnerable to damage caused by harsh
                environmental factors and aging itself.
            </p>
            <p class="text">
                Use of a quality topical formula may offer the best defense against these signs of aging. <strong>{{config.brandName}}</strong> is a facial moisturizer which may help rebuild the vital collagen network in the
                dermal matrix, supporting hydration levels. It may also help tighten the skin's appearance and may
                reduce the appearance of wrinkles and lines.
            </p>
        </b-container>
    </section>
</template>

<script>
    import customBreadcrumb from "../components/customBreadcrumb";

    export default {
        name: "about-us",
        components: {customBreadcrumb},
        data() {
            return {
                config: this.$store.state.corpInfo,
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'About Us',
                        href: '/about-us'
                    }
                ]
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

    .text {
        line-height: 24px;
        font-size: 12px;
    }
</style>
