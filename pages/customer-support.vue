<template>
    <section class="block">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h2 class="label">Customer Support</h2>
            <h3 class="sub-label">Corp Address</h3>
            <p class="text">{{config.nameCorp}}</p>
            <p class="text">{{config.addressCorp}}</p>
            <h3 class="sub-label">Return Address</h3>
            <p class="text">{{config.nameCorp}}</p>
            <p class="text">{{config.addressCorp}}</p>
            <p class="text">Phone: {{config.phoneCorp}}</p>
            <p class="text">Support Email: support@{{config.linkCorp}}</p>
            <p class="text">Support Hours: 24 hours a day, Monday through Sunday. Closed holidays.</p>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "customer-support",
        data() {
            return {
                config: this.$store.state.corpInfo,
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Customer Support',
                        href: '/customer-support'
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
        font-weight: 400 ;
        margin-bottom: 6px;
    }
</style>