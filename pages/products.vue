<template>
    <section class="block">
        <b-container>
            <b-row>
                <b-breadcrumb :items="itemsProd"></b-breadcrumb>
            </b-row>
            <b-row class="content">
                <b-col cols="6">
                    <div class="img-wrap">
                        <img :src="'/items/' + itemId + '/1.png'">
                    </div>
                    <div class="img-all">
                        <img class="active"
                             :src="'/items/' + itemId + '/1.png'">
                        <img class=""
                             :src="'/items/' + itemId + '/2.png'">
                        <img class=""
                             :src="'/items/' + itemId + '/3.png'">
                    </div>
                </b-col>
                <b-col cols="6">
                    <h3 class="prod-name">{{ item.label }}</h3>
                    <p class="prod-prise">${{ item.prise }}.00</p>
                    <div>
                        <span>Quantity:</span>
                        <div class="quantity">
                            <div class="quantity-minus"/>
                            <div class="quantity-number">{{ quantity }}</div>
                            <div class="quantity-plus"/>
                        </div>
                    </div>
                    <button class="prod-add" @click="addItem(itemId)">Add to cart</button>
                    <p class="description">{{ item.description }}</p>
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
                ],
                quantity: 1
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

    .prod-prise {
        font-size: 22px;
        font-weight: 600;
        margin-top: 20px;
    }

    .quantity {
        max-width: 140px;
        display: flex;
        border: 1px solid #cdcdcd;
        color: #232323;
        margin: 10px 0;
    }

    .quantity div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .quantity-minus,
    .quantity-plus {
        min-height: 34px;
        min-width: 32px;
        position: relative;
    }

    .quantity-minus:after,
    .quantity-plus:after,
    .quantity-plus:before {
        content: '';
        height: 2px;
        width: 10px;
        background: #7b7b7b;
        position: absolute;
    }

    .quantity-plus:before {
        transform: rotate(90deg);
    }

    .quantity-number {
        width: 100%;
        text-align: center;
        border-left: 1px solid #cdcdcd;
        border-right: 1px solid #cdcdcd;
        font-size: 14px;
        color: #2d2d2d;
    }

    .prod-add {
        min-width: 240px;
        border: 1px solid #232323;
        color: #fff;
        background: #232323;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 12px 15px 10px;
        margin-bottom: 30px;
        transition: color, background .2s ease-in;
    }

    .prod-add:hover {
        color: #232323;
        background: #fff;
    }

    .img-all {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 40px 0;
    }

    .img-all img {
        height: auto;
        width: 100px;
        margin: 0 10px;
    }
</style>
