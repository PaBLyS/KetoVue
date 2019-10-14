<template>
    <section class="block">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h2 class="label">Products</h2>
        </b-container>
        <product-list/>
    </section>
</template>

<script>
    import productList from "../components/home/productList";

    export default {
        name: "catalog",
        components: {
            productList
        },
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Products',
                        href: '/catalog'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .block {
        background-color: #f7cac9;
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
    }
</style>
