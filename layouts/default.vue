<!-- 
  * author: kirankumar.challagiri@hexafoldtech.com
 -->

<template>
  <div >
    <Navbar class="navbar-position-fixed"/>
    <Sidenav />
    <div class="layout-default">
      <div :class="store.$state.sidebar ?'layout-default-main' : 'layout-default-main layout-default-main-inactive'">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup >
import { useGlobalStore } from "@/store/global";
import Sidenav from "@/layouts/Sidenav/index.vue";
import Navbar from "@/layouts/Navbar/index.vue";
components:{
  Sidenav,
  Navbar
}
const store = useGlobalStore();

</script>
