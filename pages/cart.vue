<template>
    <section class="block">
        <b-container>
            <b-row>
                <b-breadcrumb :items="items"></b-breadcrumb>
            </b-row>
            <b-row class="cart-header">
                <h2 class="label">my cart</h2>
                <nuxt-link to="/catalog" class="continue">Continue Shopping</nuxt-link>
            </b-row>
            <b-row class="content"
                   v-if="visiblTabl">
                <div class="product">
                    <div class="product-label">products</div>
                    <ul class="prod-list">
                        <li class="prod-item"
                            v-for="(elem, index) in cart"
                            v-if="cart[index].amount"
                        >
                            <div class="img-wrap">
                                <img :src="'/items/' + index + '/1.png'">
                            </div>
                            <div>
                                <div class="prod-name">{{ products[index].label }}</div>
                                <div class="prod-prise">${{ products[index].prise }}.00</div>
                                <div>
                                    <span class="quantity-label">Quantity:</span>
                                    <div class="quantity-wrap">
                                        <div class="quantity">
                                            <div class="quantity-minus"
                                                 @click="editQuantity(false, index)"/>
                                            <input class="quantity-number" :id="'quantity' + index"
                                                   :value="cart[index].amount"
                                                   @change="changeQuantity(index)"
                                            />
                                            <div class="quantity-plus"
                                                 @click="editQuantity(true, index)"/>
                                        </div>
                                        <div @click="$store.commit('deleteItem', index)"
                                             class="remove">
                                            <span class="underline underline-black">Remove</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="order">
                    <div class="order-label">order summary</div>
                    <div class="order-total">
                        <div>Total:</div>
                        <div class="order-total-number">${{ totalPrice }}.00</div>
                    </div>
                    <div class="order-note">
                        <span class="order-note-icon">Note</span>
                        <span>Additional comments</span>
                    </div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <p class="check">
                        <input style="display: none" class="check-input" type="checkbox" id="agree"/>
                        <label class="check-label" for="agree">
                            I agree with the
                            <nuxt-link to="/terms-and-conditions" class="check-link">terms and conditions</nuxt-link>
                            and
                            <nuxt-link to="/privacy-policy" class="check-link"> privacy policy</nuxt-link>
                            .
                        </label>
                    </p>
                    <button @click="goToCheckout" class="sub-button">proceed to checkout</button>
                </div>
            </b-row>
            <b-row class="clear"
                   v-else>
                <div class="clear-first">Your cart is currently empty.</div>
                <div class="clear-second">Continue browsing
                    <nuxt-link to="/catalog">here</nuxt-link>
                    .
                </div>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "cart",
        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        href: '/'
                    },
                    {
                        text: 'Shopping Cart',
                        href: '/cart'
                    }
                ],
                products: this.$store.state.items,
                cart: this.$store.state.cart
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                this.products.forEach((elem, index) => {
                    total += elem.prise * this.cart[index].amount;
                });
                return total;
            },
            visiblTabl() {
                let result = false;
                this.cart.forEach(elem => {
                    if (elem.amount > 0) result = true;
                });
                return result;
            }
        },
        methods: {
            deleteItem(id) {
                this.$store.commit('deleteItem', id);
            },
            editQuantity(status, id) {
                status ?
                    this.$store.commit('addQuantity', {
                        quantity: 1,
                        id: id
                    })
                    : this.cart[id].amount > 0 ?
                    this.$store.commit('addQuantity', {
                        quantity: -1,
                        id: id
                    })
                    :
                    this.$store.commit('addQuantity', {
                        quantity: 0,
                        id: id
                    })
            },
            changeQuantity(id) {
                let elemId = 'quantity' + id;
                let amountItem = document.getElementById(elemId).value;
                this.$store.commit('changeQuantity', {quantity: amountItem, id: id});
            },
            goToCheckout() {
                this.$router.push({path: '/checkout/information'});
            }
        }
    }
</script>

<style scoped>
    .block {
        background-color: #f7cac9;
        min-height: 400px;
        padding-bottom: 20px;
    }

    .breadcrumb {
        background: transparent;
        padding-left: 0;
    }

    .breadcrumb a,
    .breadcrumb span {
        font-size: 12px;
        color: #232323;
        text-decoration: none;
    }

    .label {
        text-align: left;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 40px;
    }

    .cart-header {
        justify-content: space-between;
    }

    .content {
        justify-content: space-between;
    }

    .product {
        width: calc(100% - 370px);
        margin-right: 20px;
    }

    .prod-list {
        padding: 0;
    }

    .prod-item {
        list-style: none;
        display: flex;
        padding: 28px 0 35px;
        border-top: 1px solid #e6e6e6;
    }

    .prod-name {
        font-size: 12px;
        font-weight: 500;
    }

    .prod-prise {
        color: #3c3c3c;
        font-size: 13px;
        font-weight: 600;
        margin: 6px 0 18px;
    }

    .quantity-wrap {
        display: flex;
        align-items: center;
    }

    .remove {
        padding-left: 28px;
        position: relative;
        color: #232323;
        font-size: 12px;
        font-weight: 500;
        margin-left: 20px;
        cursor: pointer;
    }

    .remove:after,
    .remove:before {
        top: 8px;
        left: 0px;
        content: '';
        position: absolute;
        background-color: #000;
        height: 2px;
        width: 15px;
        border-radius: 10px;
        transform: rotate(45deg);
    }

    .remove:before {
        transform: rotate(-45deg);
    }

    .underline-black:after {
        background-color: #000;
    }

    .img-wrap {
        width: 120px;
        height: 200px;
        margin-right: 30px;
    }

    .img-wrap img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .product-label,
    .order-label {
        text-transform: uppercase;
        padding: 10px 20px 8px;
        background: #fafafa;
        border-bottom: 1px solid #e7e7e7;
        color: #5a5a5a;
        font-weight: 600;
        font-size: 12px;
    }

    .order-label {
        text-align: center;
    }

    .order {
        width: 340px;
    }

    .order-total {
        display: flex;
        justify-content: space-between;
        padding: 29px 0 26px;
        margin: 0 0 24px;
        border-bottom: 1px solid #e6e6e6;
        font-size: 12px;
        font-weight: 500;
    }

    .order-total-number {
        font-size: 16px;
        font-weight: 500;
    }

    .order-note {
        font-size: 14px;
        margin-bottom: 12px;
    }

    .order-note-icon {
        background: #e95144;
        padding: 4px 5px 3px;
        font-size: 10px;
        text-align: center;
        border-radius: 1px;
        margin-right: 10px;
        color: #fff;
    }

    .order textarea {
        width: 100%;
        height: 120px;
    }

    .check {
        display: flex;
        align-items: center;
        margin: 10px;
        position: relative;
    }

    .check-label {
        margin-left: 20px;
        font-size: 12px;
        font-weight: 600;
        color: #232323;
    }

    .check-link {
        color: #232323;
    }

    .check-input:checked + .check-label:before {
        content: '';
        width: 9px;
        height: 5px;
        position: absolute;
        top: 5px;
        left: 3px;
        border: 2px solid #232323;
        border-top: none;
        border-right: none;
        background: rgb(255, 255, 255);
        transform: rotate(-45deg);
        transition: all 0.1s;
        opacity: 0;
        z-index: 99;
    }

    .check-input:checked + .check-label:before {
        opacity: 1;
        transform: scale(1) rotate(-45deg);
    }

    .check-label:after {
        position: absolute;
        content: "";
        top: 2.5px;
        left: 0;
        border: 1px solid #d0d0d0;
        width: 14px;
        height: 14px;
        background-color: #fff;
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
        margin-bottom: 9px;
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

    .sub-button {
        width: 100%;
        border: none;
        padding: 13px 15px 13px;
        background: #232323;
        color: #fff;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
    }

    .continue {
        color: #232323;
        font-size: 12px;
        font-weight: 500;
        position: relative;
        padding-right: 10px;
    }

    .continue:hover {
        text-decoration: none;
    }

    .continue:after {
        content: '';
        position: absolute;
        right: 0;
        top: 10%;
        height: 8px;
        width: 8px;
        border-top: 1px solid #232323;
        border-right: 1px solid #232323;
        transform: rotate(45deg);
        transition: right .3s ease-in;
    }

    .continue:hover:after {
        right: -5px;
    }

    .clear-first {
        width: 100%;
        margin: 24px 0 15px;
        padding: 9px 15px 7px;
        color: #856404;
        font-size: 12px;
        font-weight: 400;
        background-color: #fff3cd;
        border-color: #ffeeba;
        text-align: center;
    }

    .clear-second {
        width: 100%;
        margin: 0 0 15px;
        padding: 9px 15px 7px;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
    }

    .clear-second a:hover {
        text-decoration: none;
        color: #232323;
    }
</style>
