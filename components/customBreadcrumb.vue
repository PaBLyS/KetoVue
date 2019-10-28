<template>
    <section class="wrap-breadcrumb">
        <template v-for="elem in items">
            <nuxt-link :to="elem.href" class="link">{{elem.text}}</nuxt-link>
            <div class="line"></div>
        </template>
    </section>
</template>

<script>
    export default {
        name: "customBreadcrumb",
        props: {
            items: Array
        }

    }
</script>

<style scoped>
    .wrap-breadcrumb {
        display: flex;
        align-items: center;
        padding: 15px 0;
        font-size: 12px;
    }

    .link {
        color: #000;
    }

    .line {
        display: flex;
        height: 6px;
        width: 6px;
        margin: 0 7px;
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        transform: rotate(45deg);

    }
    
    .wrap-breadcrumb .line:last-child {
        display: none;
    }
</style>