import Navbar from "@/layouts/navbar";
import Sidebar from "@/layouts/dashboard/sidebar";

export default defineComponent(
    {
        components:{
            Navbar
        },
        setup(props, ctx) {
            onMounted(()=>{
                // const active = useSidebar();
                // active.value = true;
                // console.log(useSidebar().value)
            })
        },
        render(){
            return <div class="dashboard">
                <Sidebar/>
                <Navbar/>
            </div>
        }
    }
)