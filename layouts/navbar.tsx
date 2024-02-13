import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "@/composables/states";

export default defineComponent({
  setup() {
    const sidebar = useSidebar();
    const userProfile = reactive({
      status: true,
      name: "Samual",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNpXDhReGbWgHFTwkrGEdrDi4OZikaZGViWtkLHcudA&s",
    });
    return {
      userProfile,
      sidebar,
    };
  },
  render() {
    return (
      <div class="navbar">
        <div class="navbar-sidebar">
          {/* <input
            type="checkbox"
            name=""
            id="navSidebar"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              this.sidebar = target.checked;
              console.log(useSidebar().value)
            }}
          /> */}
          <label for="navSidebar" class="navbar-sidebar-label">
            <span onClick={()=>{
              this.sidebar = !this.sidebar
            }}>
              <FontAwesomeIcon icon={this.sidebar ? faBarsStaggered : faBars}/>
            </span>
          </label>
        </div>
        <div class="navbar-user">
          <div>
            <p>
              Good morning, <span>{this.userProfile.name}!</span>
            </p>
          </div>
          <div class="navbar-userprofile">
            {/* user profile status section */}
            <input
              type="checkbox"
              class="navbar-userprofile-checkbox"
              v-model={this.userProfile.status}
            />
            <div class="navbar-userprofile-status"></div>
            <img src={this.userProfile.image} alt="" />
          </div>
          {/* <div class="navbar-user-sidebars">
            <FontAwesomeIcon icon={faBars} />
          </div> */}
        </div>
      </div>
    );
  },
});
