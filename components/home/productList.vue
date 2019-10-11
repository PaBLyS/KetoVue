<template>
  <section>
    <h2 class="block-label">TRENDING NOW</h2>
    <div class="container">
      <div v-for="(item, index) in items"
           :key="index"
           class="cards">
        <div class="img__wrap">
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

  .block-label {
    color: #232323;
    font-size: 20px;
    font-weight: 700;
  }
  
  .container {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
  }
  .cards {
    width: 33%;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .img__wrap {
    width: 100%;
    padding: 50px;
  }
  .img__wrap img {
    width: 100%;
  }

  .name-product {
    font-size: 16px;
    font-weight: 500;
  }
  .price-product {
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0;
  }
</style>
