<template>
    <div class="register">
        <div class="main_auth_logintext">
     <h2>Register</h2>
     <p>(Please fill the information below)</p>
   </div>
   <form @submit.prevent="registerForm">
     <label>Last name</label>
     <input
       type="text"
       class="main_auth_input"
       v-model="userCred.last_name"
       placeholder="Your last name..."
     />
     <label>First name</label>
     <input
       type="text"
       class="main_auth_input"
       v-model="userCred.first_name"
       placeholder="Your first name..."
     />
        <label>Phone number</label>
     <input
       type="text"
       class="main_auth_input"
       v-model="userCred.phone"
       placeholder="For example: 495754.."
     />
       <label>Email address (optional)</label>
     <input
       type="email"
       class="main_auth_input"
       v-model="userCred.email"
       placeholder="Your email address..."
     />
     <div class="register_checkbox"> 
      <div class="register_checkbox_input" @click="terms.checked = !terms.checked">
        <i class="ri-checkbox-fill" v-if="terms.checked"></i>
      </div>
       <p>By checking the box, I agree to the {{" "}}
         <span>
          Terms & Conditions
         </span>
         {{" "}} of Remcash.</p>
     </div>
     <button
     >
       Confirm and proceed
     </button>
   </form>
   <p class="main_auth_reg-login">
     Already user?{{" "}}
     <span>
       <NuxtLink to="/login">
       Login here
       </NuxtLink>
     </span>
   </p>
 </div>
</template>

<script setup lang="ts">
const emit = defineEmits();
 const router = useRouter();
    const terms = ref({
      checked:false
    })
    // login payload parameters
    const userCred = ref({
      first_name: "",
      last_name: "",
      phone:"",
      email:"",
    });
    // Login form
    const registerForm = () => {
     emit('registerDetails',userCred.value)
    };
</script>