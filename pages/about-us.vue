<template>
    <section class="block">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h2 class="label">About Us</h2>
            <p class="text">
                Dryness, wrinkles, age spots are common skin care concerns that riddle most women as they begin to age.
                The reason for the appearance of these visible signs of aging is the disintegration of the protective
                layer, that protects the skin, which in turn, leaves it vulnerable to damage caused by harsh
                environmental factors and aging itself.
            </p>
            <p class="text">
                Use of a quality topical formula may offer the best defense against these signs of aging. <strong>Yogurt
                Skin Cream</strong> is a facial moisturizer which may help rebuild the vital collagen network in the
                dermal matrix, supporting hydration levels. It may also help tighten the skin's appearance and may
                reduce the appearance of wrinkles and lines.
            </p>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "about-us",
        data() {
            return {
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

    .text {
        line-height: 24px;
        font-size: 14px;
    }
</style>
