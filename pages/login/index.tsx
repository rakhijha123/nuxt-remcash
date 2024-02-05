import BackgroundImage from "@/assets/svg/bg_glob.svg";
import RamecashLogo from "@/assets/svg/logo01.svg";
import Wallet from "@/assets/svg/wallet.svg";
import PayBills from "@/assets/svg/pay_bills.svg";
import MoneyTransfer from "@/assets/svg/instant_money_tranfer.svg";

export default defineComponent({
  setup() {
    const imageRef = ref<HTMLImageElement | null>(null);
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
    const leftScrollContentPosition = ref(0);
    const leftScroll = () => {
      // Add data attribute to trigger transition
      leftScrollContentPosition.value =
        (leftScrollContentPosition.value + 1) % leftScrollContent.length;
      const img = document.querySelector(".leftImage");
    };
    onMounted(() => {
      const intervalId = setInterval(leftScroll, 5000); // Change image every 5000 milliseconds (5 seconds)
      // Clear the interval when the component is unmounted
      onBeforeUnmount(() => {
        clearInterval(intervalId);
      });
    });
    return { leftScrollContent, leftScrollContentPosition };
  },
  render() {
    return (
      <div class="main_login">
       
        <div class="main_login_left">
          <div class="main_login_left-top">
            <img
              src={this.leftScrollContent[this.leftScrollContentPosition].img}
              alt=""
              ref="imageRef"
              class="leftImage"
            />
          </div>

          <div class="main_login_left-bottom">
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
        <div class="main_login_right">
          <div class="main_login_form">
            <div class="main_login_logo">
              <img src={RamecashLogo} alt="" />
              <p>Remcash</p>
            </div>
            <div class="main_login_logintext">
              <h2>Log in</h2>
              <p>(Please fill the information below)</p>
            </div>
            <form>
              <label>Phone number</label>
              <input type="text" class="main_login_input" />
              <label>Password</label>
              <input type="password" class="main_login_input" />
              <button>Log into your account</button>
            </form>
            <p class="main_login_forgotpassword">Forgot password ?</p>
            <p class="main_login_reg-login">
              Don't have an account? <span>Rigister here</span>
            </p>
          </div>
          <div class="main_login_background">
            <img src={BackgroundImage} alt="" />
          </div>
        </div>
      </div>
    );
  },
});
