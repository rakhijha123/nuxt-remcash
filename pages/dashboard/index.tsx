import Navbar from "@/layouts/navbar";
import Sidebar from "@/layouts/dashboard/sidebar";
import { useSidebar } from "@/composables/states";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
  },
  setup(props, ctx) {
    const sidebar = useSidebar();
    onMounted(() => {
      // to maintain the state of side we need to set to false at intial mounting stage.
      sidebar.value = false;
    });
    return {
      sidebar,
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
          <div class="dashboard-cards"></div>
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

            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    );
  },
});
