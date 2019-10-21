<template>
    <div>
        <div class="list">
            <div class="list-item"
                 v-for="(elem, index) in cart"
                 v-show="elem.amount"
                 :key="index">
                <div class="item-info">
                    <div class="img-wrap">
                        <img :src="'/items/' + index + '/1.png'" alt="">
                        <div class="item-index">{{ elem.amount}}</div>
                    </div>
                    <div class="item-name">{{ products[index].label }}</div>
                </div>
                <div class="item-prise">${{ products[index].prise }}.00</div>
            </div>
        </div>
        <div class="total-top">
            <div class="total-top-item"><span>Subtotal:</span><span>${{ totalPrice }}.00</span></div>
            <div class="total-top-item"><span>Shipping</span><span>Free</span></div>
        </div>
        <div class="total-bottom">Total <span class="total-usd">usd <span class="total-bottom-prise">${{ totalPrice }}.00</span></span></div>
    </div>
</template>

<script>
    export default {
        name: "rightBar",
        data() {
            return {
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
            }
        }
    }
</script>

<style scoped>
    .img-wrap {
        height: 65px;
        width: 65px;
        background: #fff;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-wrap img {
        width: 65%;
        height: 65%;
        object-fit: contain;
    }

    .item-index {
        position: absolute;
        top: -10px;
        right: -10px;
        padding: 5px;
        background-color: rgba(114, 114, 114, 0.9);
        border-radius: 100%;
        color: #fff;
        height: 21px;
        min-width: 21px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 500;
    }

    .item-info {
        display: flex;
        align-items: center;
    }

    .list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 14px;
    }

    .item-name {
        padding-left: 14px;
        color: #323232;
        font-size: 14px;
        font-weight: 500;
    }

    .item-prise {
        color: #323232;
        font-weight: 500;
        font-size: 14px;
    }

    .total-top {
        border-top: 1px solid  rgba(175,175,175,0.34);
        border-bottom: 1px solid  rgba(175,175,175,0.34);
        padding: 21px 0 11px;
        font-size: 14px;
    }

    .total-top-item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 11px;
    }

    .total-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 21px;
        font-size: 16px;
    }
    
    .total-usd {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 12px;
        color: #717171;
    }

    .total-bottom-prise {
        color: #323232;
        font-weight: 500;
        font-size: 24px;
        margin-left: 10px;
    }
</style>