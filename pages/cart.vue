<template>
  <div>
    <table v-if="visiblTabl">
      <tr>
        <td>Product</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Total</td>
      </tr>
      <tr v-for="(elem,index) in $store.state.cart"
          v-if="elem.amount > 0"
          :key="index">
        <td>
          <div class="img-wrap">
            <img :src="'items/'+ index + '/1.jpg'"
                  alt="">
            {{ $store.state.items[index].label }}
          </div>
        </td>
        <td>
          {{ $store.state.items[index].sale }}.00
        </td>
        <td>
          {{ elem.amount }}
        </td>
        <td>
          {{ $store.state.items[index].sale * elem.amount }}
        </td>
        <td>
          <button @click="deleteItem(index)">
            Delete
          </button>
        </td>
      </tr>
    </table>
    <h2 v-else>clear</h2>
    Subtotal: {{ totalPrice }}
  </div>
</template>

<script>
    export default {
        name: "cart",
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
  .img-wrap {
    height: 200px;
  }
  .img-wrap img{
    height: 100%;
  }
</style>
