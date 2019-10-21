<template>
    <section class="block-info-page">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <privacy-policy-page />
        </b-container>
    </section>
</template>

<script>
    import privacyPolicyPage from "../components/info/privacyPolicyPage";

    export default {
        components: {privacyPolicyPage},
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

<style>
    .block-info-page {
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

    .label-info-page {
        text-align: left;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 40px;
    }

    .sub-label-info-page {
        text-align: left;
        font-weight: 600;
        font-size: 12px;
        margin-top: 30px;
    }

    .text-info-page {
        font-size: 12px;
        margin-bottom: 6px;
    }
</style>