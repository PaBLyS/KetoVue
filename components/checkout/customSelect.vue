<template>
    <section class="wrap">
        <label :for="nameSelect"
               class="label-select">
            {{labelSelect}}
        </label>
        <select :name="nameSelect"
                :id="nameSelect"
                class="select"
                v-model="optionSelect"
                @change="upDate()">
            <option v-for="elem in valueSelect"
                    :value="elem">
                {{elem}}
            </option>
        </select>
    </section>
</template>

<script>
    export default {
        name: "customSelect",
        props: {
            nameSelect: String,
            valueSelect: Array,
            labelSelect: String
        },
        data() {
            return {
                optionSelect: ''
            }
        },
        methods: {
            upDate() {
                this.$store.commit('editShipping', {value: this.optionSelect, param: this.nameSelect});
            }
        },
    }
</script>

<style scoped>
    .wrap {
        width: 100%;
        height: 46px;
        position: relative;
    }

    .label-select {
        position: absolute;
        left: 11px;
        top: 7px;
        color: #737373;
        font-size: 12px;
    }

    .select {
        width: 100%;
        height: 100%;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        padding: 21px 30px 5px 11px;
        appearance: none;
        color: #333;
        font-size: 14px;
    }

    .select:hover,
    .select:active,
    .select:focus {
        outline: none;
    }
</style>