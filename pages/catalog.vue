<template>
    <section class="block">
        <b-container>
            <custom-breadcrumb :items="items"></custom-breadcrumb>
            <h2 class="label">Products</h2>
        </b-container>
        <product-list/>
    </section>
</template>

<script>
    import productList from "../components/home/productList";
    import customBreadcrumb from "../components/customBreadcrumb";

    export default {
        name: "catalog",
        components: {
            productList, customBreadcrumb
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
        background-color: var(--main-block);
    }

    .label {
        text-align: left;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 40px;
    }
</style>
