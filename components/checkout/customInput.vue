<template>
    <section>
        <div :class="['input', {'validInput': validInput}]">
            <label :for="nameInput"
                   :class="['input-label', {'labelClear': statusInput}]"
            >
                {{placeholderInput}}
            </label>
            <input :type="type"
                   :id="nameInput"
                   :class="['input-elem', {'inputClear': statusInput}]"
                   v-model="inputValue"
                   @input="upDate(inputValue)"
            >
        </div>
        <div :class="['textSpan', {'validSpan': validInput}]">{{invalidText}}</div>
    </section>
</template>

<script>
    export default {
        name: "customInput",
        props: {
            nameInput: String,
            placeholderInput: String,
            type: String,
            invalidText: String
        },
        data() {
            return {
                inputValue: this.$store.state.shipping[this.nameInput],
                validInput: false
            }
        },
        computed: {
            statusInput() {
                return this.inputValue === '' ? true : false;
            }
        },
        methods: {
            upDate(value) {
                this.$store.commit('editShipping', {value: value, param: this.nameInput});
            }
        },
        beforeUpdate() {
            if (this.type === 'email') {
                this.validInput = !/\b@\b/.test(this.inputValue) && !/^(\d){1,13}$/.test(this.inputValue)
            }
            else if (this.type === 'text' && this.nameInput === 'lastName') {
                this.validInput = !/^[a-zA-Z]+$/.test(this.inputValue)
            }
            else if (this.type === 'text' && this.nameInput === 'address') {
                this.validInput = !/^[a-zA-Z0-9 ,]+$/.test(this.inputValue)
            }
            else if (this.nameInput === 'zipCode') {
                this.validInput = !/^(\d){1,5}$/.test(this.inputValue)
            }
            else return false
        }
    }
</script>

<style scoped>
    .input {
        position: relative;
        border: 1px solid #d9d9d9;
        border-radius: 8px;
        width: 100%;
        min-height: 46px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .input-label {
        display: block;
        width: 100%;
        position: absolute;
        top: 30%;
        left: 13px;
        transform: translateY(-50%);
        transition: top .2s ease-in;
        color: #737373;
        font-size: 12px;
    }

    .labelClear {
        top: 50%;
        font-size: 13px;
    }

    .input-elem {
        display: block;
        max-width: 95%;
        border: none;
        background: transparent;
        position: absolute;
        bottom: 30%;
        left: 13px;
        transform: translateY(50%);
        transition: bottom .2s ease-in;
        color: #333333;
        font-size: 12px;
    }

    .input-elem:hover,
    .input-elem:focus,
    .input-elem:active {
        outline: none;
    }

    .inputClear {
        bottom: 50%;
    }

    .validInput {
        border: 1px solid #ff6d6d;
        box-shadow: 0 0 0 1px #ff6d6d;
    }

    .textSpan {
        display: none;
    }

    .validSpan {
        display: block;
        color: #ff6d6d;
        font-size: 14px;
        margin: 8px 0 4px;
    }


</style>