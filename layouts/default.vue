<template>
  <div >
    <Navbar class="navbar-position-fixed"/>
    <Sidenav />
    <main class="layout-expand">
      <slot />
    </main>
  </div>
</template>

<script setup >
import Sidenav from "@/layouts/Sidenav";
import Navbar from "@/layouts/Navbar";

</script>
