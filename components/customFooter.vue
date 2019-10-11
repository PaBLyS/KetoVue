<template>
  <section>
    <b-container fluid class="footer-top">
      <b-container class="footer-links">
        <ul>
          <li>
            <nuxt-link to="/" class="footer-link">Customer Support</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="footer-link">Ingredients</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="footer-link">Privacy Policy</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="footer-link">Terms and Conditions</nuxt-link>
          </li>
        </ul>
      </b-container>
    </b-container>
    <b-container class="footer-bottom">
      <p>© 2019, Yogurt Skin Cream</p>
      <p>FOOD AND DRUG ADMINISTRATION (FDA) DISCLOSURE This product is not for use by or sale to persons under the age of 18. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. All trademarks and copyrights are the property of their respective owners and are not affiliated with nor do they endorse. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Individual results will vary. By using this site you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited By Law.</p>
      <div class="payment">
        <img src="/visa.png" alt="">
        <img src="/master-card.jpg" alt="">
      </div>
    </b-container>
  </section>
</template>

<script>
    export default {
        name: "customFooter"
    }
</script>

<style scoped>
  section{
    background: #232323;
    color: #969696;
  }

  .footer-top {
    padding: 35px 0 25px;
    border-bottom: 1px solid #3b3b3b;
  }

  .footer-link {
    color: #969696;
    font-size: 14px;
    line-height: 24px;
    padding: 3px 0;
  }

  .footer-link:hover {
    color: #fff;
  }

  .footer-links {
    padding: 0;
  }

  .footer-links ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-bottom {
    font-size: 14px;
    padding: 25px 0 65px;
  }

  .payment img {
    height: 25px;
    width: auto;
    margin-right: 15px;
  }
</style>

