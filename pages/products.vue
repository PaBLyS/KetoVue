<template>
    <section class="block">
        <b-container>
            <b-row>
                <custom-breadcrumb :items="itemsProd"></custom-breadcrumb>
            </b-row>
            <b-row class="content">
                <b-col cols="6">
                    <div class="img-wrap">
                        <img :src="'/items/' + itemId + '/' + activeImg + '.png'">
                    </div>
                    <div class="img-all">
                        <img :class="{ active: activeImg == 1}"
                             @click="editImg(1)"
                             :src="'/items/' + itemId + '/1.png'">
                        <img :class="{ active: activeImg == 2}"
                             @click="editImg(2)"
                             :src="'/items/' + itemId + '/2.png'">
<!--                        <img :class="{ active: activeImg == 3 }"-->
<!--                             :src="'/items/' + itemId + '/3.png'">-->
                    </div>
                </b-col>
                <b-col cols="6">
                    <h3 class="prod-name">{{ item.label }}</h3>
                    <p class="prod-prise">${{ item.prise }}.00</p>
                    <div>
                        <span class="quantity-label">Quantity:</span>
                        <div class="quantity">
                            <div class="quantity-minus"
                                 @click="editQuantity(false)"/>
                            <input class="quantity-number"
                                   v-model="quantity"
                            />
                            <div class="quantity-plus"
                                 @click="editQuantity(true)"/>
                        </div>
                    </div>
                    <button class="prod-add" @click="addItem()">Add to cart</button>
                    <p class="description">{{ item.description }}</p>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    import customBreadcrumb from "../components/customBreadcrumb";

    export default {
        name: "products",
        components: {customBreadcrumb},
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
                quantity: 1,
                activeImg: 1
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
            addItem() {
                this.$store.commit('addQuantity', {quantity: this.quantity, id: this.itemId});
            },
            editQuantity(status) {
                status ? this.quantity++ : this.quantity < 2 ? this.quantity = 1 : this.quantity--;
            },
            editImg(id) {
                this.activeImg = id;
            }
        },
        beforeMount() {
            this.itemsProd[1] = {
                text: this.item.label,
                href: 'products?id=' + this.itemId
            };
        }
    }
</script>

<style scoped>
    .block {
        background-color: var(--main-block);
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

    .prod-name {
        font-size: 20px;
        font-weight: 600;
    }

    .prod-prise {
        font-size: 18px;
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

    .quantity-label {
        font-size: 12px;
        font-weight: 500;
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
        cursor: pointer;
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
        border: none;
        border-left: 1px solid #cdcdcd;
        border-right: 1px solid #cdcdcd;
        font-size: 12px;
        font-weight: 400;
        color: #2d2d2d;
        background: transparent;
    }

    .quantity-number:focus {
        outline: none;
    }

    .prod-add {
        min-width: 240px;
        border: 1px solid #232323;
        color: #fff;
        background: #232323;
        font-size: 13px;
        font-weight: 700;
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
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 40px 0;
    }

    .img-all img {
        height: auto;
        width: 100px;
        margin: 0 25px;
    }

    .active {
        opacity: .7;
    }
</style>
