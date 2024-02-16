import NuxtLink from "@/plugins/nuxt-link";
import { useRouter } from "vue-router";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


export default defineComponent({
    setup(props, ctx) {
        // router
    const router = useRouter();
    const terms = ref({
      checked:true
    })
    // login payload parameters
    const userCred = ref({
      first_name: "",
      last_name: "",
      phone:"",
      email:"",
    });
    // Login form
    const registerForm = (e: any) => {
      e.preventDefault();
      console.log(userCred.value);
    };
    return {
      userCred,
      terms,
      registerForm,
      router,
    };
    },
  render() {
    return (
      <div class="register">
             <div class="main_auth_logintext">
          <h2>Register</h2>
          <p>(Please fill the information below)</p>
        </div>
        {/*Login form*/}
        <form onSubmit={(e) => this.registerForm(e)}>
          <label>Last name</label>
          <input
            type="text"
            class="main_auth_input"
            v-model={this.userCred.last_name}
            placeholder="Your last name..."
          />
          <label>First name</label>
          <input
            type="text"
            class="main_auth_input"
            v-model={this.userCred.first_name}
            placeholder="Your first name..."
          />
             <label>Phone number</label>
          <input
            type="text"
            class="main_auth_input"
            v-model={this.userCred.phone}
            placeholder="For example: 495754.."
          />
            <label>Email address (optional)</label>
          <input
            type="email"
            class="main_auth_input"
            v-model={this.userCred.email}
            placeholder="Your email address..."
          />
          <div class="register_checkbox"> 
           <div class="register_checkbox_input" onClick={()=>{
            this.terms.checked = !this.terms.checked
           }}>
            {
              this.terms.checked ? <FontAwesomeIcon icon={faSquareCheck}/> : ""
            }
           </div>
            <p>By checking the box, I agree to the {" "} 
              <span>
               Terms & Conditions
              </span>
              {" "} of Remcash.</p>
          </div>
          <button
            onClick={() => {
              this.router.push("/dashboard");
            }}
          >
            Confirm and proceed
          </button>
        </form>
        <p class="main_auth_reg-login">
          Already user?{" "}
          <span>
            <NuxtLink to="/auth/access">
            Login here
            </NuxtLink>
          </span>
        </p>
      </div>
    );
  },
});
