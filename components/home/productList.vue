<template>
  <div class="container">
    <div v-for="(item, index) in items"
         :key="index">
      <b-card
        @click="goToItem(index)"
        :title="item.label"
        :img-src="'items/'+ index + '/1.jpg'"
        img-center
        style="margin: 25px; border: none; cursor: pointer"
      >
        <div class="text-container">
          <b-card-text class="text-prod">
            Price: <span class="prise-sale">${{ item.prise }}</span>  ${{ item.sale }}
          </b-card-text>
        </div>
      </b-card>
    </div>
  </div>
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
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .card img {
    height: auto;
    width: 250px;
    margin: auto;
  }
  .text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .text-prod {
    font-size: 28px;

  }
  .prise-sale {
     font-weight: normal;
     position: relative;
   }
  .prise-sale:after{
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    color: red;
    width: 100%;
    height: 0;
    border-bottom: 3px solid red;
    transform: rotate(-20deg);
  }
</style>
