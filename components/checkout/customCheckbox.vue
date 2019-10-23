<template>
    <div class="wrap">
        <input type="checkbox"
               :id="nameCheckbox"
               style="display:none"
               :class="['custom-checkbox']"
        >
        <label :for="nameCheckbox"
               class="checkbox-label">
            <span></span>{{ textCheckbox }}
        </label>
    </div>
</template>

<script>
    export default {
        name: "customCheckbox",
        props: {
            nameCheckbox: String,
            textCheckbox: String
        }
    }
</script>

<style scoped>
    .wrap {
        margin: 15px 0;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
    }

    .custom-checkbox + .checkbox-label span {
        display: inline-block;
        height: 18px;
        width: 18px;
        background: transparent;
        transition: all .3s ease-in;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        position: relative;
        margin-right: 8px;
    }

    .custom-checkbox + .checkbox-label span:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 99;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: 75%;
        background-image: url('https://cdn.shopify.com/s/assets/checkout/checkbox-tick-66a9a39f70a44a226223ef4c61a701d2d10afaa73ba8846a509fbe58a82f3f36.svg');
    }

    .custom-checkbox:checked + .checkbox-label span {
        background: #2d2d2d;
        border-color: #2d2d2d;

    }
</style>