<template>
    <section class="wrap-footer">
        <div class="btn-wrap">
            <button class="btn">Privacy policy</button>
            <button class="btn">Terms of service</button>
        </div>

    </section>
</template>

<script>
    export default {
        name: "customFooterCheckout"
    }
</script>

<style scoped>
    .wrap-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }

    .btn-wrap {
        border-top: 1px solid #e6e6e6;
        padding: 15px 0;
    }

    .btn {
        color: #2d2d2d;
        font-size: 12px;
    }
</style>