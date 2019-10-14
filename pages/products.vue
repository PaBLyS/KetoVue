<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="img-wrap">
                    <img :src="'items/' + itemId + '/1.jpg'" alt="img">
                </div>
            </b-col>
            <b-col>
                <h3>{{ item.label }}</h3>
                <p>Price: <span class="prise-sale">${{ item.prise }}</span> ${{ item.sale }}</p>
                <button @click="addItem(itemId)">Add</button>
                <p>{{ item.description }}</p>
            </b-col>
        </b-row>
        <b-row>
            <button>
                go back
            </button>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "products",
        computed: {
            itemId() {
                return this.$route.query.id;
            },
            item() {
                return this.$store.state.items[this.itemId];
            }
        },
        methods: {
            addItem(id) {
                this.$store.commit('addQuantity', id);
            }
        },
        beforeMount() {

        }
    }
</script>

<style scoped>
    .img-wrap {
        height: 300px;
    }

    .img-wrap img {
        height: 100%;
        width: auto;
    }

    .prise-sale {
        font-weight: normal;
        position: relative;
    }

    .prise-sale:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        color: red;
        width: 100%;
        height: 0;
        border-bottom: 3px solid red;
        transform: rotate(-20deg);
    }
</style>
