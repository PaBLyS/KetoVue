<template>
    <section>
        <div>
            <label :for="nameInput">{{placeholderInput}}</label>
            <input type="text" :id="nameInput">
        </div>
    </section>
</template>

<script>
    export default {
        name: "customInput",
        props: {
            nameInput: String,
            placeholderInput: String
        }
    }
</script>

<style scoped>

</style>