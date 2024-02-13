import Navbar from "@/layouts/navbar";
import Sidebar from "@/layouts/dashboard/sidebar";
import { useSidebar } from "@/composables/states";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoneyBill1Wave, faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import Card1 from "@/assets/svg/card1.svg";
import Card2 from "@/assets/svg/card2.svg";
import Card3 from "@/assets/svg/card3.svg";
import Card4 from "@/assets/svg/card4.svg";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
  },
  setup(props, ctx) {
    const sidebar = useSidebar();
    const cardsList = reactive([
      {
        card:Card1,
      },
      {
        card:Card2,
      },
      {
        card:Card3,
      },
      {
        card:Card4,
      }
    ])
    onMounted(() => {
      // to maintain the state of side we need to set to false at intial mounting stage.
      sidebar.value = false;
    });
    return {
      sidebar,
      cardsList
    };
  },
  render() {
    return (
      <div class="dashboard">
        <Sidebar />
        <Navbar />
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
            {this.cardsList.map((e,index)=>{
              return <div>
                <img src={e.card} alt="" />
              </div>
            })}
            </div>
          </div>
          {/* dashboard graphs */}
          <div class="dashboard-graphs">
            <div>

            </div>
            <div>

            </div>
          </div>
          {/* dashboard money transfer buttons */}
          <div class="dashboard-buttons">
            <div>
              <FontAwesomeIcon icon={faMoneyBill1Wave}/>
              <span>Send money</span>
            </div>
            <div>
            <FontAwesomeIcon icon={faMoneyBills}/>  
            <span>Add money</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
