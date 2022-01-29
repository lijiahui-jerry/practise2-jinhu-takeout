<template>
 <div>
  <Header :title=school.name left=true :right=!ifLogged()></Header>
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
  methods:{
    //判断是否已经登录，用于决定header的右侧“登录”要不要显示
    ifLogged(){
      return localStorage.getItem('userId')
    },
  },
}
</script>

<style scoped>
</style>
