import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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

export default defineComponent({
  setup(props, ctx) {
    const sidebar = useSidebar();
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
    return {
      context,
      sidebar
    };
  },
  render() {
    return (
      <div class={this.sidebar ? "dashboard-sidebar" : "dashboard-sidebar dashboard-sidebar-inactive"}>
        <div class="dashboard-sidebar-top">
          {this.context.top.map((item) => {
            return (
              <div key={item.name} class="dashboard-sidebar-item">
                <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span class={this.sidebar ? "" : "dashboard-sidebar-item-heading"}>{item.name}</span>
              </div>
            );
          })}
        </div>
        <div class="dashboard-sidebar-bottom">
          {this.context.bottom.map((item) => {
            return (
              <div key={item.name} class="dashboard-sidebar-item">
               <span>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span class={this.sidebar ? "" : "dashboard-sidebar-item-heading"}>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
});
