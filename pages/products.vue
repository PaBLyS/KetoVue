<template>
    <section class="block">
        <b-container>
            <b-row>
                <b-breadcrumb :items="itemsProd"></b-breadcrumb>
            </b-row>
            <b-row class="content">
                <b-col cols="6">
                    <div class="img-wrap">
                        <img :src="'/items/' + itemId + '/1.png'" alt="img">
                    </div>
                </b-col>
                <b-col cols="6">
                    <h3 class="prod-name">{{ item.label }}</h3>
                    <p class="prod-prise">${{ item.prise }}.00</p>
                    <button class="prod-add" @click="addItem(itemId)">Add</button>
                    <p>{{ item.description }}</p>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "products",
        data() {
            return {
                itemsProd: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Product',
                        href: '/'
                    }
                ]
            }
        },
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
            this.itemsProd[1] = {
                text: this.item.label,
                href: 'products?id=' + this.itemId
            }
        }
    }
</script>

<style scoped>
    .block {
        background-color: #f7cac9;
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

    .img-wrap {
        width: 80%;
    }

    .img-wrap img {
        width: 100%;
        height: auto;
    }

    .content {
        margin-top: 40px;
    }
</style>
