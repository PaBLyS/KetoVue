<template>
    <section class="block">
        <b-container>
            <b-row>
                <b-breadcrumb :items="items"></b-breadcrumb>
            </b-row>
            <b-row class="cart-header">
                <h2 class="label">my cart</h2>
                <nuxt-link to="/">Continue Shopping</nuxt-link>
            </b-row>
            <b-row class="content">
                <div class="product">
                    <div class="product-label">products</div>
                    <ul>
                        <li>
                            <div>
                                <div>
                                    <img src="">
                                </div>
                                <div>
                                    <div>name</div>
                                    <div>prise</div>
                                    <div>
                                        <span>Quantity:</span>
                                        <div>+-</div>
                                        <div>remove</div>
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
                        <div>$</div>
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
                            <nuxt-link to="/privacy-policy" class="check-link"> privacy policy</nuxt-link>.
                        </label>
                    </p>
                    <button>proceed to checkout</button>
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
                        text: 'Shoping Cart',
                        href: '/cart'
                    }
                ]
            }
        },
        computed: {
            totalPrice() {
                let total = 0;
                this.$store.state.cart.forEach((elem, index) => {
                    total += this.$store.state.items[index].sale * elem.amount;
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
            deleteItem(id) {
                this.$store.commit('deleteItem', id);
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
        font-size: 14px;
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

    .product-label,
    .order-label {
        text-transform: uppercase;
        padding: 10px 20px 8px;
        background: #fafafa;
        border-bottom: 1px solid #e7e7e7;
        color: #5a5a5a;
        font-weight: bold;
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
        font-weight: bold;
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
    }

    .check-input:checked+check-label:before {
        content: '';
        width: 9px;
        height: 5px;
        position: absolute;
        top: 6px;
        left: 3px;
        border: 2px solid #232323;
        border-top: none;
        border-right: none;
        background: rgba(255,255,255,0);
        transform: rotate(-45deg);
        transition: all 0.1s;
    }

    .check-input:checked+check-label:before {
        opacity: 1;
        transform: scale(1) rotate(-45deg);
    }


    .check-label:before {
        position: absolute;
        content: "";
        top: 5px;
        left: 0;
        border: 1px solid #d0d0d0;
        width: 14px;
        height: 14px;
        background-color: #fff;
    }


</style>
