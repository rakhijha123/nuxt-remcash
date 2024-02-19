
 <!-- 
  * author: kirankumar.challagiri@hexafoldtech.com
  -->
<template>
  <div>
    <div class="main_auth_logintext">
      <h2>Log in</h2>
      <p>(Please fill the information below)</p>
    </div>
    <!-- *Login form* -->
    <form>
      <label>Phone number</label>
      <input
        type="text"
        class="main_auth_input"
        v-model="userCred.user_id"
        placeholder="For example: 49570350469"
      />
      <label>Password</label>
      <input
        type="password"
        class="main_auth_input"
        v-model="userCred.user_password"
        placeholder="Your password…"
      />

      <button
        @click.prevent="loginForm"
      >
        Log into your account
      </button>
    </form>
    <p class="main_auth_forgotpassword" @click="forgotPassword">
      Forgot password?
    </p>
    <p class="main_auth_reg-login">
      Don't have an account?{{" "}}
      <span>
        <NuxtLink to="/auth/register">
        Register here
        </NuxtLink>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
// router
    const router = useRouter();

    // login payload parameters
    const userCred = ref({
      user_id: "",
      user_password: "",
    });
    // Login form
    const loginForm = () => {
      // e.preventDefault();
      // console.log(userCred.value);
      router.push("/dashboard")
    };
    // Forgot password
    const forgotPassword = () => {
      router.push("/forgot-password");
    };

</script>


