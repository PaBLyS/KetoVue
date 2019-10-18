<template>
    <b-container >
        <div class="wrap">
            <div class="left">
                <nuxt-link to="/">Yogurt Skin Cream</nuxt-link>
                <b-breadcrumb :items="items"></b-breadcrumb>
                <nuxt/>
            </div>
            <div class="right">
                <right-bar />
            </div>
        </div>
    </b-container>
</template>

<script>
    import rightBar from "../components/checkout/rightBar";

    export default {
        components: {rightBar},
        data() {
            return {
                items: [
                    {
                        text: 'Cart',
                        href: '/cart'
                    },
                    {
                        text: 'Information',
                        href: '/checkout/stage1'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .wrap {
        margin: 0 auto;
        max-width: 1100px;
        min-height: 100vh;
        display: flex;
    }

    .left {
        width: 58%;
    }

    .right {
        position: relative;
        width: 42%;
        padding: 56px 0 0 44px;
    }

    .right:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #fafafa;
        z-index: -1;
        border-left: 1px solid #e1e1e1;
    }
</style>