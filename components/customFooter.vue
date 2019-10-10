<template>
  <div style="padding: 25px 0; background-color:#a8a8a8;">
    <b-container>
      <b-row>
        <b-col>
          <h2>Important Links</h2>
          <ul class="marker-list">
            <li><a href="">Customer Support</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Ingredients</a></li>
            <li><a href="">Terms and Conditions</a></li>
          </ul>
        </b-col>
        <b-col>
          <h2>Contact Us</h2>
          <p>+1 (800) 286-9152</p>
          <p>Smart Logistics</p>
          <p>125 Pier View St, Unit 105, Daniel Island, SC 29492</p>
          <p style="color: red">support@absolutedietketo.com</p>
        </b-col>
      </b-row>
      <b-row class="footer-text">
        <p style="font-weight: bold">FOOD AND DRUG ADMINISTRATION (FDA) DISCLOSURE</p>
        <p>This product is not for use by or sale to persons under the age of 18. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use if you have a serious medical condition or use prescription medications. All trademarks and copyrights are the property of their respective owners and are not affiliated with nor do they endorse. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Individual results will vary. By using this site you agree to follow the
          <a href="#">Privacy Policy</a> and all <a href="#">Terms & Conditions</a> printed on this site. Void Where Prohibited By Law.</p>
        <p class="card-wrap" style="font-weight: bold">
          We Accept:
            <img class="card-img" src="visa.png" alt="">
            <img class="card-img" src="mastercard.png" alt="">
        </p>
      </b-row>
      <hr>
      © 2019, Advanced Keto System
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "customFooter"
    }
</script>

<style scoped>
  .footer-text {
    text-align: center;
  }
  .footer-text p {
    width: 100%;
  }
  .card-img {
    height: 30px;
    width: auto;
    margin-left: 5px;
  }
  ul.marker-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul.marker-list li,
  ul.marker-list li a {
    color: #333745;
  }
  ul.marker-list li a {
    display: inline-block;
    position: relative;
    padding: 5px 0 5px 12px;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  ul.marker-list li a:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 12px;
    height: 4px;
    width: 4px;
    background-color: #e4e4e4;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  ul.marker-list li a:hover {
    color: #f82e56;
    text-decoration: none;
  }
  ul.marker-list li {
    font-size: 16px;
    line-height: 20px;
  }
  ul.marker-list li a:hover {
    padding-left: 20px;
    margin-right: -8px;
  }
  ul.marker-list li a:hover:before {
    top: 12px;
    width: 10px;
    height: 4px;
    background-color: #f82e56;
  }
  ul.simple-list li a {
    color: #f82e56;
  }
  ul.simple-list li {
    position: relative;
    padding: 5px 0;
    font-size: 16px;
    line-height: 20px;
    color: #333745;
  }
  ul.marker-simple-list li a {
    color: #f82e56;
  }
  ul.marker-simple-list li {
    position: relative;
    padding: 0 0 7px 0;
    font-size: 17px;
    line-height: 20px;
    color: #333745;
  }
  .site-footer__single-block--centered a{
    text-decoration: underline;
  }
</style>
