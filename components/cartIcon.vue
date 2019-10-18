<template>
    <section class="cart">
        <div @click="goToCart()"
             class="shop">
            <svg version="1.1" class="shop-icon" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 489 489" style="enable-background:new 0 0 489 489;" xml:space="preserve">
                <g>
                    <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3
                      c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1
                      C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462
                      H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41
                      c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z"/>
                </g>
            </svg>
            <span class="shop-text">Shopping Cart</span>
            <span class="shop-index">{{ indexItem }}</span>
        </div>
        <div class="clear"></div>
        <ul class="hover-list">
            <li class="hover-item"
                v-for="(elem, index) in cart"
                v-if="cart[index].amount"
            >
                <div class="hover-img-wrap">
                    <img :src="'/items/' + index + '/1.png'">
                </div>
                <div class="prod-info">
                    <p class="prod-name">{{ products[index].label }}</p>
                    <div class="prod-prise"><span class="prod-prise-grey">{{ cart[index].amount }} X</span> ${{
                        products[index].prise }}.00
                    </div>
                </div>
                <div><span class="delete" @click="deleteItem(index)">X</span></div>
            </li>
            <li class="hover-item last" v-if="visiblTabl">
                <div class="total">
                    <div>Total:</div>
                    <div class="total-prise">${{ totalPrice }}.00</div>
                </div>
                <div class="button-wrap">
                    <div class="button button-check">
                        check out
                    </div>
                    <div class="button button-view">
                        view cart
                    </div>
                </div>
            </li>
            <li class="hover-item last" v-else>
                <p class="text">Your cart is currently empty.</p>
                <div class="button button-view">
                    Continue Shopping
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "cartIcon",
    data() {
        return {
            products: this.$store.state.items,
            cart: this.$store.state.cart
        }
    },
    computed: {
        indexItem() {
            let numbers = 0;
            this.$store.state.cart.forEach((elem) => {
                if (elem.amount > 0) numbers += elem.amount;
            });
            return parseInt(numbers);
        },
        totalPrice() {
            let total = 0;
            this.$store.state.items.forEach((elem, index) => {
                total += elem.prise * this.cart[index].amount;
            });
            return total;
        },
        visiblTabl() {
            let result = false;
            this.$store.state.cart.forEach(elem => {
                if (elem.amount > 0) result = true;
            });
            return result;
        }
    },
    methods: {
        goToCart() {
            this.transition = 'slide';
            this.$router.push({path: '/cart'});
        },
        deleteItem(id) {
            this.$store.commit('deleteItem', id);
        }
    }
}
</script>

<style scoped>
    .shop {
        display: inline-block;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
    }

    .shop-icon {
        height: 25px;
    }

    .shop-text {
        display: inline-block;
        margin: 0 5px;
        color: #323232;
        font-size: 12px;
    }

    .shop-index {
        min-width: 23px;
        min-height: 23px;
        display: inline-block;
        text-align: center;
        font-size: 12px;
        border-radius: 100%;
        background-color: #ffe5e5;
        padding: 3px;
    }

    .cart {
        position: relative;
    }

    .cart:hover .hover-list {
        display: block;
    }

    .hover-list {
        width: 300px;
        position: absolute;
        top: 135%;
        left: 10px;
        display: none;
        overflow: hidden;
        background: #f7cac9;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 2px 0 rgba(0, 0, 0, 0.1);
        padding: 0 20px 10px;
        z-index: 999;
    }

    .prod-info {
        width: 100%;
    }

    .prod-name {
        width: 90%;
        font-size: 12px;
    }

    .prod-prise {
        font-size: 12px;
    }

    .prod-prise-grey {
        color: #727272;
    }

    .hover-item {
        display: flex;
        border-bottom: 1px solid #ebebeb;
        padding-top: 16px;
    }

    .hover-img-wrap {
        height: 96px;
        width: 64px;
        margin-right: 20px;
        padding: 10px;
    }

    .hover-img-wrap img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .total {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        padding: 18px 0 15px;
    }

    .total-prise {
        font-size: 16px;
    }

    .delete {
        cursor: pointer;
    }

    .last {
        border: none;
        display: block;
        padding: 0;
    }

    .button {
        width: 100%;
        text-transform: uppercase;
        text-align: center;
        font-size: 13px;
        font-weight: 700;
        padding: 8px 15px 6px;
        margin-bottom: 10px;
        transition: all .2s ease-in;
        cursor: pointer;
    }

    .button-check {
        background: #e95144;
        color: #fff;
    }

    .button-check:hover {
        background: #3c3c3c;
    }

    .button-view {
        background: #fff;
        color: #232323;
        border: 1px solid #3c3c3c;
    }

    .button-view:hover {
        color: #fff;
        background: #3c3c3c;
    }

    .clear {
        width: 100%;
        height: 10px;
        position: absolute;
        top: 100%;
        left: 10px;
    }

    .text {
        margin: 15px 0;
        text-align: center;
        font-size: 12px;
    }
</style>
