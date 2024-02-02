import  NuxtLink from "@/plugins/nuxt-link"


export default defineComponent({
    render () {
      return <div>

        <h1>Welcome to remcash home.</h1>
        <NuxtLink to={"/login"}>Login</NuxtLink>
      </div>
    }
});



