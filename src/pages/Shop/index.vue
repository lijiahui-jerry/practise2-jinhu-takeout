<template>
 <div>
  <ShopHeader/>
  <div class="tab">
   <div class="tab-item">
    <router-link to="/sho p/goods" replace>点餐</router-link>
   </div>
   <div class="tab-item">
    <router-link to="/shop/ratings" replace>评价</router-link>
   </div>
   <div class="tab-item">
    <router-link to="/shop/info" replace>商家</router-link>
   </div>
  </div>
  <keep-alive>
   <router-view/>
  </keep-alive>
 </div>
</template>

<script>
import ShopGoods from "@/pages/Shop/ShopGoods"
import ShopInfo from "@/pages/Shop/ShopInfo"
import ShopRatings from "@/pages/Shop/ShopRatings"

export default {
  name:"Shop",
  components:{ShopGoods,ShopInfo,ShopRatings},
}
</script>

<style scoped lang="less">

</style>
