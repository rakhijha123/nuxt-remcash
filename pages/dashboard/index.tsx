import Navbar from "@/layouts/navbar"

export default defineComponent(
    {
        components:{
            Navbar
        },
        render(){
            return <div>
                <Navbar/>
                dashboard
            </div>
        }
    }
)