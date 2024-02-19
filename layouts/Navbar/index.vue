<!-- 
  * author: kirankumar.challagiri@hexafoldtech.com
 -->

<template>
  <div class="navbar">
    <div class="navbar-sidebar">
      <label for="navSidebar" class="navbar-sidebar-label">
        <span @click="handleSidebar">
          <i :class="store.$state.sidebar ? 'ri-align-left' : 'ri-align-justify'"></i>
        </span>
      </label>
    </div>
    <div class="navbar-user">
      <div>
        <p>
          Good morning, <span>{{userProfile.name}}!</span>
        </p>
      </div>
      <div class="navbar-userprofile">
        <!-- user profile status section -->
        <input
          type="checkbox"
          class="navbar-userprofile-checkbox"
          v-model="userProfile.status"
        />
        <div class="navbar-userprofile-status"></div>
        <img :src="userProfile.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useGlobalStore} from "@/store/global"
const store = useGlobalStore();
const userProfile = reactive({
      status: true,
      name: "Samual",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNpXDhReGbWgHFTwkrGEdrDi4OZikaZGViWtkLHcudA&s",
    });
const handleSidebar = () =>{
  store.$state.sidebar = !store.$state.sidebar;
  // console.log(store.$state.sidebar)
}
</script>
