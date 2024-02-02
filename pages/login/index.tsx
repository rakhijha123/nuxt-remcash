import BackgroundImage from "@/assets/svg/bg_glob.svg";
import RamecashLogo from "@/assets/svg/logo01.svg";
export default defineComponent({
    render() {
        return <div class="main_login">
           <div class="main_login_left">
            <div class="main_login_left-top">

            </div>
            <div class="main_login_left-bottom">
               
            </div>
           </div>
           <div class="main_login_right">
             <div class="main_login_form">
                <div class="main_login_logo"><img src={RamecashLogo} alt="" />
                <p>Remcash</p>
                </div>
                <div class="main_login_logintext">
                  <h2>Log in</h2>
                  <p>(Please fill the information below)</p>
                </div>
                  <form>
                     <label>Phone number</label>
                     <input type="text" class="main_login_input"/>
                     <label>Password</label>
                     <input type="password" class="main_login_input"/>
                     <button>Log into your account</button>
                  </form>
                <p class="main_login_forgotpassword">Forgot password ?</p>
                <p class="main_login_reg-login">Don't have an account? <span>Rigister here</span></p>
             </div>
             <div class="main_login_background">
                <img src={BackgroundImage} alt="" />
             </div>
           </div>
        </div>
    }
})