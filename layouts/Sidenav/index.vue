<!-- 
  * author: kirankumar.challagiri@hexafoldtech.com
 -->

<template>
  <div :class="sidebar.$state.sidebar ? 'dashboard-sidebar' : 'dashboard-sidebar dashboard-sidebar-inactive'">
    <div class="dashboard-sidebar-top">

          <button v-for="item in context.top" :key="item.name" :class="active == item.name ? 'dashboard-sidebar-item dashboard-sidebar-item-active' : 'dashboard-sidebar-item' " @click="handleSidebar(item.name)">
            <span>
              <!-- <FontAwesomeIcon icon={item.icon} /> -->
              <i :class="item.icon"></i>
            </span>
            <span :class="sidebar.$state.sidebar ? '' : 'dashboard-sidebar-item-heading'">{{item.name}}</span>
          </button>
        
    </div>
    <div class="dashboard-sidebar-bottom">
          <button v-for="item in context.bottom" :key="item.name" class="dashboard-sidebar-item" @click="handleSidebar(item.name)">
           <span>
              <!-- <FontAwesomeIcon icon={item.icon} /> -->
              <i :class="item.icon"></i>
            </span>
            <span :class="sidebar.$state.sidebar ? '' : 'dashboard-sidebar-item-heading'">{{item.name}}</span>
          </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/store/global";
import { useRouter } from "vue-router";
const sidebar = useGlobalStore();
const router = useRouter();
const active = ref("Home");
const context = reactive({
  top: [
    {
      name: "Home",
      icon: "ri-home-2-fill",
    },
    {
      name: "Notifications",
      icon: "ri-notification-3-fill",
    },
    {
      name: "Reports",
      icon: "ri-bar-chart-2-fill",
    },
    {
      name: "Quick Qr",
      icon: "ri-qr-code-fill",
    },
    {
      name: "Benificiary",
      icon: "ri-group-fill",
    },
    {
      name: "Support",
      icon: "ri-questionnaire-fill",
    },
    {
      name: "Pay Bills",
      icon: "ri-bill-fill",
    },
    {
      name: "Manage Money",
      icon: "ri-wallet-3-fill",
    },
  ],
  bottom: [
    {
      name: "Settings",
      icon: "ri-settings-5-fill",
    },
    {
      name: "Log Out",
      icon: "ri-logout-box-r-fill",
    },
  ],
});
const handleSidebar = (item:string) => {
  active.value = item;
  const route = active.value.toLocaleLowerCase().split(" ").join("-");
  if(route == "home"){
    router.push(`/dashboard`);
    return
  }
  if(route == "log-out"){
    router.push(`/login`);
    return
  }
  router.push(`/dashboard/${route}`)
}
</script>

<!-- import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faBell,
  faChartSimple,
  faQrcode,
  faUserGroup,
  faCircleQuestion,
  faReceipt,
  faMoneyBillTransfer,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {useSidebar} from "@/composables/states";
import { useRouter } from "vue-router";

export default defineComponent({
  setup(props, ctx) {
    const sidebar = useSidebar();
    const router = useRouter();
    const context = reactive({
      top: [
        {
          name: "Home",
          icon: faHouse,
        },
        {
          name: "Notifications",
          icon: faBell,
        },
        {
          name: "Reports",
          icon: faChartSimple,
        },
        {
          name: "Quick Qr",
          icon: faQrcode,
        },
        {
          name: "Benificiary",
          icon: faUserGroup,
        },
        {
          name: "Support",
          icon: faCircleQuestion,
        },
        {
          name: "Pay Bills",
          icon: faReceipt,
        },
        {
          name: "Manage Money",
          icon: faMoneyBillTransfer,
        },
      ],
      bottom: [
        {
          name: "Settings",
          icon: faGear,
        },
        {
          name: "Log Out",
          icon: faRightFromBracket,
        },
      ],
    });
    const active = ref("Home");
    const handleActive = () =>{
      const route = active.value.toLocaleLowerCase().split(" ").join("-");
      if(route == "home"){
        router.push(`/dashboard`);
        return
      }
      router.push(`/dashboard/${route}`)
    }
    watch(active,()=>{
      if(window.innerWidth <= 768){
        sidebar.value = false;
      };
      if(active.value === "Log Out"){
        router.push("/auth/access")
      }
    });
    watch(sidebar,()=>{
      console.log(sidebar.value)
    })
    return {
      context,
      sidebar,
      active,
      router,
      handleActive
    };
  },
  render() {
    return (
      <div class={this.sidebar ? "dashboard-sidebar" : "dashboard-sidebar dashboard-sidebar-inactive"}>
        <div class="dashboard-sidebar-top">
          {this.context.top.map((item) => {
            return (
              <button key={item.name} class="dashboard-sidebar-item" onClick={()=>{
                this.active = item.name;
                this.handleActive();
              }}>
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span class={this.sidebar ? "" : "dashboard-sidebar-item-heading"}>{item.name}</span>
              </button>
            );
          })}
        </div>
        <div class="dashboard-sidebar-bottom">
          {this.context.bottom.map((item) => {
            return (
              <button key={item.name} class="dashboard-sidebar-item" onClick={()=>{
               this.router.push("/auth/access")
              }}>
               <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span class={this.sidebar ? "" : "dashboard-sidebar-item-heading"}>{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  },
}); -->