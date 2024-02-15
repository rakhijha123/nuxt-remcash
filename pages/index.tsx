import  NuxtLink from "@/plugins/nuxt-link"
import Example from "./example";

export default defineComponent({
  setup(props, ctx) {
    const handleExampleClickedData = (data:string) =>{
      alert(data)
    };
    return {
      handleExampleClickedData
    }
  },
    render () {
      return <div>
        <h1>Welcome to remcash home.</h1>
        <NuxtLink to={"/auth/login"}>Login</NuxtLink>
        <Example data={["sample1","sample2","sample3"]} handleExampleClickedData={this.handleExampleClickedData}/>
      </div>
    }
});



