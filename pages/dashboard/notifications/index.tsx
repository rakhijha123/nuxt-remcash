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
        <div class="notification">
          <div class="notification-content">
            <div class="notification-header-container">
              <div class="notification-header-text">
                <h1>Notifications</h1>
                <p>Please provide the information below</p>
              </div>
              <div class="notification-header-serch-input">
              <i class="ri-search-line"></i>
              <input placeholder="Search for contact..." />
              </div>

              
              </div>
              <div class="notification-table">
              <table>
         
        <tr>
           
            <td class="td-info"><span>icon</span> Transfered money to Adolphus Laryea</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
          
          
            
        </tr>
      
        <tr>
    
            <td class="td-info"><span>icon</span> Amal credited your Ecobank Account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
            
            
        </tr>
   
        <tr>
        
            <td class="td-info"><span>icon</span> Uploaded money on account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>

                   </tr>
       
        <tr>
            <td class="td-info"><span>icon</span> Withdrawed money from account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
          
        </tr>
       
        <tr>
            <td class="td-info"><span>icon</span> Withdrawed money from account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
         
            
        </tr>
        <tr>
            <td class="td-info"><span>icon</span> Withdrawed money from account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
          
            
        </tr>
      
        <tr>
            <td class="td-info"><span>icon</span> Transfered money to Debbie Lewis</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
            
        </tr>
   
        <tr>
            <td class="td-info"><span>icon</span> Withdrawed money from account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
          
           
            
        </tr>
       
        <tr>
            <td class="td-info"><span>icon</span> Uploaded money on account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
            
          
        </tr>
       
        <tr>
          <td class="td-info"><span>icon</span> Withdrawed money from account</td>
            <td class="td-date-time">26/08/2021 10:43Am <span>icon</span></td>
          
         
            
        </tr>
    </table>  
            </div>
          </div>
        </div>
        </div>
        </div>
        )
    }
})