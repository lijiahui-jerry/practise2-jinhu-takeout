<template>
 <div>
  <Header></Header>
  <Navigation></Navigation>
  <ShopList></ShopList>
 </div>
</template>

<script>
import Header from "@/components/Header"
import ShopList from "@/pages/Home/ShopList"
import Navigation from "@/pages/Home/Navigation"

export default {
  name:"Home",
  components:{Header,ShopList,Navigation},
}
</script>

<style scoped>
</style>