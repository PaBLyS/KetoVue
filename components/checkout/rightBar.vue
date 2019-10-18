<template>
    <div>
        <div class="list">
            <div class="list-item"
                    v-for="(elem, index) in cart"
                 v-if="elem.amount">
                <div class="item-info">
                    <div class="img-wrap">
                        <img :src="'/items/' + index + '/1.png'" alt="">
                        <div>{{ elem.amount}}</div>
                    </div>
                    <div>{{ products[index].label }}</div>
                </div>
                <div>${{ products[index].prise }}.00</div>
            </div>
        </div>
        <div>
            <div>Subtotal: <span>${{ totalPrice }}.00</span></div>
            <div>Shipping <span>Free</span></div>
        </div>
        <div>Total <span>usd <span>${{ totalPrice }}.00</span></span></div>
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
    }

    .img-wrap img{
        width: 65%;
        height: 65%;
        object-fit: contain;
    }

    .item-info {
        display: flex;
        align-items: center;
    }

    .list-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>