<template>
 <div id="app">
  <router-view></router-view>
  <Footer v-show='$route.meta.showFooter'></Footer>
 </div>
</template>

<script>
import Footer from "@/components/Footer"

export default {
  name:'App',
  components:{Footer},
}
</script>

<style scoped lang="less">
*{
  width:100%;
  height:100%;
}

a{
  text-decoration:none;
}
</style>
