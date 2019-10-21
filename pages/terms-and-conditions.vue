<template>
    <section class="block">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <terms-and-conditions />
        </b-container>
    </section>
</template>

<script>
    import termsAndConditions from "../components/page/termsAndConditions";

    export default {
        components: {termsAndConditions},
        name: "terms-and-conditions",
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Terms And Conditions',
                        href: '/terms-and-conditions'
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
        font-size: 12px;
        color: #232323;
        text-decoration: none;
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
        font-weight: 600;
        font-size: 12px;
        margin-top: 30px;
    }

    .text {
        line-height: 24px;
        font-size: 12px;
        margin-bottom: 6px;
    }
</style>