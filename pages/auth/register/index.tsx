/*
author: kirankumar@hexafoldtech.com
*/

import Wallet from "@/assets/svg/wallet.svg";
import PayBills from "@/assets/svg/pay_bills.svg";
import MoneyTransfer from "@/assets/svg/instant_money_tranfer.svg";
import BackgroundImage from "@/assets/svg/bg_glob.svg";
import RamecashLogo from "@/assets/svg/logo01.svg";
import Register from "@/components/auth/register";

export default defineComponent({
  setup() {
    const showForm = ref("")
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
    // carosel conttent reference variable
    const leftScrollContentPosition = ref(0);
    // carousel content method
    const leftScroll = () => {
      // Add data attribute to trigger transition
      leftScrollContentPosition.value =
        (leftScrollContentPosition.value + 1) % leftScrollContent.length;
    };
    // functions
    const handleRegisterView = (data:boolean) =>{
       showForm.value = "register"
    } 
    // life cycle hooks
    onMounted(() => {
      const intervalId = setInterval(leftScroll, 5000); // Change image every 5000 milliseconds (5 seconds)
      // Clear the interval when the component is unmounted
      onBeforeUnmount(() => {
        clearInterval(intervalId);
      });
    });
    return {
      leftScrollContent,
      leftScrollContentPosition,
      handleRegisterView,
      showForm
    };
  },
  render() {
    return (
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
          <div class="main_auth_form" >
          <div style={{margin:"30px auto 0 auto",width:"350px",height:'10px',backgroundColor:"#E4EFFA",display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"50px"}}>
            <div style={{width:"25px",height:"25px",borderRadius:"50%",position:"relative",bottom:"8px"}} class="colors"></div>
            <div style={{width:"25px",height:"25px",backgroundColor:"#E4EFFA",borderRadius:"50%",position:"relative",bottom:"8px"}}></div>
            <div style={{width:"25px",height:"25px",backgroundColor:"#E4EFFA",borderRadius:"50%",position:"relative",bottom:"8px"}}></div>
            <div style={{width:"25px",height:"25px",backgroundColor:"#E4EFFA",borderRadius:"50%",position:"relative",bottom:"8px"}}></div>
          </div>
            <div class="main_auth_logo" style={{margin:"0 0 50px 0"}}>
              <img src={RamecashLogo} alt="" />
              <p>Remcash</p>
            </div>
               <Register/>
          </div>
          <div class="main_auth_background">
            <img src={BackgroundImage} alt="" />
          </div>
        </div>
      </div>
    );
  },
});
