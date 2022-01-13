<template>
 <div>
  <Header :title=school.name left=true right=true></Header>
  <Navigation></Navigation>
  <ShopList></ShopList>
 </div>
</template>

<script>
import Header from "@/components/Header"
import ShopList from "@/pages/Home/ShopList"
import Navigation from "@/pages/Home/Navigation"
import {mapState} from "vuex"

export default {
  name:"Home",
  components:{Header,ShopList,Navigation},
  mounted(){
    this.$store.dispatch('getLocation')
    this.$store.dispatch("getNavigation")
    this.$store.dispatch("getShops")
  },
  computed:{
    ...mapState({
      school:(state)=>state.home.school || {},
    }),
  },
}
</script>

<style scoped>
</style>
