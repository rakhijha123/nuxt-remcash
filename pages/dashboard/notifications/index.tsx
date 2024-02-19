import Navbar from "@/layouts/navbar";
import Sidebar from "@/layouts/dashboard/sidebar";
import { useSidebar } from "@/composables/states";

export default defineComponent({
    components:{

    },
    setup(props, ctx) {
        const sidebar = useSidebar();
        return {
            sidebar
        }
    },
    render(){
        return (
        <div class="dashboard">
            <Sidebar/>
            <Navbar class="dashboard-navbar"/>
            <div
          class={
            this.sidebar
              ? "dashboard-main"
              : "dashboard-main dashboard-main-inactive"
          }
        >
          {/* Todo here */}

        </div>
        </div>
        )
    }
})