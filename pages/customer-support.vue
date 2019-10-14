<template>
    <section class="block">
        <b-container>
            <b-breadcrumb :items="items"></b-breadcrumb>
            <h2 class="label">Customer Support</h2>
            <h3 class="sub-label">Corp Address</h3>
            <p class="text">AVG Marketing LLC</p>
            <p class="text">2515 E Thomas Rd Suite 16-1071 Phoenix, Arizona 85016</p>
            <h3 class="sub-label">Return Address</h3>
            <p class="text">AVG Marketing LLC</p>
            <p class="text">2515 E Thomas Rd Suite 16-1071 Phoenix, Arizona 85016</p>
            <p class="text">Phone: +1 833-799-7853</p>
            <p class="text">Support Email: support@yogurtskincream.com</p>
            <p class="text">Support Hours: 24 hours a day, Monday through Sunday. Closed holidays.</p>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "customer-support",
        data() {
            return {
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
        font-weight: bold;
        font-size: 18px;
        margin-top: 30px;
    }

    .text {
        line-height: 24px;
        font-size: 14px;
        margin-bottom: 6px;
    }
</style>