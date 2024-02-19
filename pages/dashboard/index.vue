<!-- 
  * author: kirankumar.challagiri@hexafoldtech.com
 -->
<template>
  <div class="dashboard">
    <Sidebar />
    <Navbar class="dashboard-navbar" />
    <!-- * dashboard componentt * -->
      <!-- * dashboard cards * -->
      <div class="dashboard-cards">
        <div class="dashboard-cards-content">
          <h1>My accounts</h1>
          <button> + Add account</button>
        </div>
        <div class="dashboard-cards-listcards">
        <div v-for="item in cardsList" :key="item.card">
            <img :src="item.card" alt="" />
          </div>
        </div>
      </div>
      <!-- * dashboard graphs * -->
      <div class="dashboard-graphs">
        <div class="dashboard-profile-graph">
          <div class="dashboard-graph-1">
            <div class="dashboard-graph-donut">
              <Doughnut :options="pieData.chartOptions" :data="pieData.chartData"/>
              <h2>{{pieData.chartData.datasets[0].data[0]}}%</h2>
            </div>
            <div class="dashboard-graph-donut-content">
              <h2>Profile completion</h2>
              <p>Complete profile to gain benefits
                and increase your transfer amount!</p>
            </div>
          </div>
          <div class="dashboard-graph-transfer">
            <h2>Your transfer : <span>GHS 200.0</span> of GHS 20.000 left</h2>
          </div>
          <div class="dashboard-graph-upgrade-transfer">
            <h2>Upgrade your transfer</h2>
          </div>
        </div>
        <div class="dashboard-graph-bar">
          <Bar :data="barData.chartData" :options="barData.chartOptions"/>
        </div>
      </div>
      <!-- * dashboard money transfer buttons * -->
      <div class="dashboard-buttons">
        <div>
          <!-- <FontAwesomeIcon icon={faMoneyBill1Wave} /> -->
          <span>Send money</span>
        </div>
        <div>
          <!-- <FontAwesomeIcon icon={faMoneyBills} /> -->
          <span>Add money</span>
        </div>
      </div>
  </div>  
</template>
  
<script setup lang="ts">
import { useGlobalStore } from '~/store/global';
import Card1 from "@/assets/svg/card1.svg";
import Card2 from "@/assets/svg/card2.svg";
import Card3 from "@/assets/svg/card3.svg";
import Card4 from "@/assets/svg/card4.svg";
import { Bar, Doughnut } from 'vue-chartjs';
const store = useGlobalStore();
const cardsList = reactive([
  {
    card: Card1,
  },
  {
    card: Card2,
  },
  {
    card: Card3,
  },
  {
    card: Card4,
  }
]);
const barData = ref({
      chartData:{
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: "Sent",
            backgroundColor: 'rgba(65, 114, 228, 1)',
            borderColor: 'rgba(65, 114, 228, 1)',
            data: [60, 80, 50, 80, 40], // Bar 1 data for each month
  
          },
          {
            label: "Recive",
            backgroundColor: 'rgba(119, 189, 255, 1)',
            borderColor: 'rgba(0, 123, 255, 1)',
            data: [40, 60, 40, 60, 60], // Bar 2 data for each month
          },
        ],
      },
      chartOptions:{
        responsive: true,
        maintainAspectRatio: false
      }
    })
    const pieData = reactive({
      chartData: {
        // labels: ['Completed', 'Remaining'],
        datasets: [
          {
            backgroundColor: ['#36A2EB', '#E7EBF3'],
            data: [75, 25],
            borderHeight: 22,
          },
        ],
      },
      chartOptions: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        elements: {
          arc: {
            // Set the borderRadius to control the softness of the edges
            borderRadius: 8
          },
        },
      },
    });
definePageMeta({
  layout: "default",
});

</script>

<!-- import Navbar from "@/layouts/navbar";
import { faMoneyBill1Wave, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import Card1 from "@/assets/svg/card1.svg";
import Card2 from "@/assets/svg/card2.svg";
import Card3 from "@/assets/svg/card3.svg";
import Card4 from "@/assets/svg/card4.svg";
import { Bar, Doughnut } from 'vue-chartjs';


export default defineComponent({
  components: {
    Navbar,
    Sidebar,
  },
  setup(props, ctx) {
    const sidebar = useSidebar();
    const barData = ref({
      chartData:{
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: "Sent",
            backgroundColor: 'rgba(65, 114, 228, 1)',
            borderColor: 'rgba(65, 114, 228, 1)',
            data: [60, 80, 50, 80, 40], // Bar 1 data for each month
  
          },
          {
            label: "Recive",
            backgroundColor: 'rgba(119, 189, 255, 1)',
            borderColor: 'rgba(0, 123, 255, 1)',
            data: [40, 60, 40, 60, 60], // Bar 2 data for each month
          },
        ],
      },
      chartOptions:{
        responsive: true,
        maintainAspectRatio: false
      }
    })
    const pieData = reactive({
      chartData: {
        // labels: ['Completed', 'Remaining'],
        datasets: [
          {
            backgroundColor: ['#36A2EB', '#E7EBF3'],
            data: [75, 25],
            borderHeight: 22,
          },
        ],
      },
      chartOptions: {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        elements: {
          arc: {
            // Set the borderRadius to control the softness of the edges
            borderRadius: 8
          },
        },
      },
    });
    const cardsList = reactive([
      {
        card: Card1,
      },
      {
        card: Card2,
      },
      {
        card: Card3,
      },
      {
        card: Card4,
      }
    ])
    onMounted(() => {
      // to maintain the state of side we need to set to false at intial mounting stage.
      sidebar.value = false;
    });
    return {
      sidebar,
      cardsList,
      pieData,
      barData
    };
  },
  render() {
    return (
      <div class="dashboard">
        <Sidebar />
        <Navbar class="dashboard-navbar"/>
        {/* dashboard componentt */}
        <div
          class={
            this.sidebar
              ? "dashboard-main"
              : "dashboard-main dashboard-main-inactive"
          }
        >
          {/* dashboard cards */}
          <div class="dashboard-cards">
            <div class="dashboard-cards-content">
              <h1>My accounts</h1>
              <button> + Add account</button>
            </div>
            <div class="dashboard-cards-listcards">
              {this.cardsList.map((e, index) => {
                return <div>
                  <img src={e.card} alt="" />
                </div>
              })}
            </div>
          </div>
          {/* dashboard graphs */}
          <div class="dashboard-graphs">
            <div class="dashboard-profile-graph">
              <div class="dashboard-graph-1">
                <div  class="dashboard-graph-donut">
                <Doughnut
                  options={this.pieData.chartOptions}
                  data={this.pieData.chartData}
                 
                />
                <h2>{this.pieData.chartData.datasets[0].data[0]}%</h2>
                </div>
                <div class="dashboard-graph-donut-content">
                <h2>Profile completion</h2>
                <p>Complete profile to gain benefits
                  and increase your transfer amount!</p>
                </div>
              </div>
              <div class="dashboard-graph-transfer">
                <h2>Your transfer : <span>GHS 200.0</span> of GHS 20.000 left</h2>
              </div>
              <div class="dashboard-graph-upgrade-transfer">
                <h2>Upgrade your transfer</h2>
              </div>
            </div>
            <div class="dashboard-graph-bar">
              <Bar
                data={this.barData.chartData}
                options={this.barData.chartOptions}
              />
            </div>
          </div>
          {/* dashboard money transfer buttons */}
          <div class="dashboard-buttons">
            <div>
              <FontAwesomeIcon icon={faMoneyBill1Wave} />
              <span>Send money</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMoneyBills} />
              <span>Add money</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
}); -->
  