
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
    <form @submit.prevent="loginForm(e)">
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
        @click="router.push('/dashboard')"
    
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
// router
    const router = useRouter();

    // login payload parameters
    const userCred = ref({
      user_id: "",
      user_password: "",
    });
    // Login form
    const loginForm = (e: any) => {
      e.preventDefault();
      console.log(userCred.value);
    };
    // Forgot password
    const forgotPassword = () => {
      router.push("/forgot password");
    };

</script>


<!-- import NuxtLink from "@/plugins/nuxt-link";
import type { PropType } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({

  setup(props, ctx) {
    // router
    const router = useRouter();

    // login payload parameters
    const userCred = ref({
      user_id: "",
      user_password: "",
    });
    // Login form
    const loginForm = (e: any) => {
      e.preventDefault();
      console.log(userCred.value);
    };
    // Forgot password
    const forgotPassword = () => {
      router.push("/forgot password");
    };
 
    return {
      userCred,
      loginForm,
      forgotPassword,
      router,
    };
  },
  render() {
    return (
      <div>
        <div class="main_auth_logintext">
          <h2>Log in</h2>
          <p>(Please fill the information below)</p>
        </div>
        {/*Login form*/}
        <form onSubmit={(e) => this.loginForm(e)}>
          <label>Phone number</label>
          <input
            type="text"
            class="main_auth_input"
            v-model={this.userCred.user_id}
            placeholder="For example: 49570350469"
          />
          <label>Password</label>
          <input
            type="password"
            class="main_auth_input"
            v-model={this.userCred.user_password}
            placeholder="Your password…"
          />

          <button
            onClick={() => {
              this.router.push("/dashboard");
            }}
          >
            Log into your account
          </button>
        </form>
        <p class="main_auth_forgotpassword" onClick={this.forgotPassword}>
          Forgot password?
        </p>
        <p class="main_auth_reg-login">
          Don't have an account?{" "}
          <span>
            <NuxtLink to="/auth/register">
            Register here
            </NuxtLink>
          </span>
        </p>
      </div>
    );
  },
}); -->