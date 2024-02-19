<template>
  <div class="main_auth">
    <div class="main_auth_left">
      <div class="main_auth_left-top">
        <img
          src={this.leftScrollContent[this.leftScrollContentPosition].img}
          alt=""
          ref="imageRef"
          class="leftImage"
        />
      </div>

      <div class="main_auth_left-bottom">
        <h2>
          {this.leftScrollContent[this.leftScrollContentPosition].heading}
        </h2>
        <p>
          {
            this.leftScrollContent[this.leftScrollContentPosition]
              .description
          }
        </p>
      </div>
    </div>
    <div class="main_auth_right">
      <div class="main_auth_form">
        <div class="main_auth_logo">
          <img src={RamecashLogo} alt="" />
          <p>Remcash</p>
        </div>
           <Login/>
      </div>
      <div class="main_auth_background">
        <img src={BackgroundImage} alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 const leftScrollContent = reactive([
      {
        img: Wallet,
        heading: "Secure digital wallet",
        description:
          "Remcash provides a fully secure digital wallet to ease everyday transactions",
      },
      {
        img: PayBills,
        heading: "Instant money transfer",
        description:
          "Remcash provides fast, secure and instant money transfers across the globe",
      },
      {
        img: MoneyTransfer,
        heading: "Pay the bills easily",
        description:
          "With Remcash, paying bills is quick and easy, fully secure and convenient",
      },
    ]);

definePageMeta({
  // layout: "",
});
</script>
