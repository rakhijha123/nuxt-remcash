import  NuxtLink from "@/plugins/nuxt-link"


export default defineComponent({
    render () {
      return <div>

        <h1>Welcome to ramcash home.</h1>
        <NuxtLink to={"/login"}>Login</NuxtLink>
      </div>
    }
});



