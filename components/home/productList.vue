<template>
  <section>
    <div class="container">
      <div v-for="(item, index) in items"
           :key="index"
           class="cards">
        <div class="img__wrap">
          <div class="img__hover">
            <button class="product-button">
              ADD TO CART
            </button>
          </div>
          <img :src="'items/'+ index + '/1.png'">
        </div>
        <div class="name-product">{{ item.label }}</div>
        <div class="price-product">${{ item.prise }}.00</div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "productList",
        computed: {
            items() {
                return this.$store.state.items
            }
        },
        methods: {
            goToItem(index) {
                this.transition = 'slide';
                this.$router.push({ path: '/products', query: { id: index } });
            }
        }
    }
</script>

<style scoped>
  section{
    padding: 30px 0;
    text-align: center;
    background-color: #f7cac9;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .cards {
    width: 28%;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .img__wrap {
    position: relative;
    width: 100%;
    height: 450px;
    cursor: pointer;
  }

  .img__wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .img__hover {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .65);
    opacity: 0;
    transition: opacity .3s ease-in;
  }

  .img__wrap:hover .img__hover{
    opacity: 1;
  }

  .name-product {
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    cursor: pointer;
  }
  .price-product {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0;
  }
</style>
