<template>
    <section class="block">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <privacy-policy />
        </b-container>
    </section>
</template>

<script>
    import privacyPolicy from "../components/page/privacyPolicy";

    export default {
        components: {privacyPolicy},
        name: "privacy-policy",
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Privacy Policy',
                        href: '/privacy-policy'
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
        font-size: 12px;
        margin-bottom: 6px;
    }
</style>