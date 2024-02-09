import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";

export default defineComponent({
  setup() {
    const userProfile = reactive(
        {
            status:true,
            name:"Samual",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNpXDhReGbWgHFTwkrGEdrDi4OZikaZGViWtkLHcudA&s",
        }
    );
    return {userProfile}
  },
  render() {
    return (
      <div class="navbar">
        <div class="navbar-backbutton">
          <span>
            <FontAwesomeIcon icon={faAngleLeft} />
            <p>Back</p>
          </span>
        </div>
        <div class="navbar-user">
            <div><p>Good morning, <span>{this.userProfile.name}!</span></p></div>
            <div class="navbar-userprofile">
                {/* user profile status section */}
                    <input type="checkbox" class="navbar-userprofile-checkbox" v-model={this.userProfile.status}/>
                <div class="navbar-userprofile-status">
                </div>
                <img src={this.userProfile.image} alt="" />
            </div>
            <div class="navbar-user-sidebars">
            <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
      </div>
    );
  },
});
