<template>
    <section>
        <h2 class="form-label">Contact information</h2>

    </section>
</template>

<script>
    import customInput from "../../components/checkout/customInput";
    import customCheckbox from "../../components/checkout/customCheckbox";
    import customSelect from "../../components/checkout/customSelect";

    export default {
        layout: 'checkout',
        name: "shipping",
        components: {customSelect, customCheckbox, customInput},
        data() {
            return {
                country: ['United States'],
                states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
                    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
                    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
                    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
                    'West Virginia', 'Wisconsin', 'Wyoming']
            }
        }
    }
</script>

<style scoped>
    .wrap-input {
        width: 50%;
        padding: 6px;
    }

    .wrap-input-full {
        padding: 6px;
        width: 100%;
    }

    .form-label {
        margin: 21px 6px;
        font-size: 18px;
        font-weight: 300;
    }

    .wrap-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .button-next {
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        background: #000;
        padding: 20px 24px;
        margin-right: 6px;
        border-radius: 5px;
    }

    .button-next:hover{
        text-decoration: none;
    }

    .button-back {
        color: #2d2d2d;
        font-size: 14px;
        font-weight: 400;
        position: relative;
        padding-left: 10px;
    }

    .button-back:hover {
        text-decoration: none;
    }

    .button-back:after {
        content: '';
        position: absolute;
        left: 0;
        top: 35%;
        height: 8px;
        width: 8px;
        border-bottom: 1px solid #232323;
        border-left: 1px solid #232323;
        transform: rotate(45deg);
        transition: left .3s ease-in;
    }

    .button-back:hover:after {
        left: -5px;
    }
</style>