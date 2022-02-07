<template>
 <div class="shop">
  <ShopHeader></ShopHeader>
  <!-- 干饭、评价、商家 -->
  <div class="nav-bar">
   <div class="bar" :class="ifActive('goods')?'bar-active':''" @click="$router.replace('/shop/goods')">干饭</div>
   <div class="bar" :class="ifActive('ratings')?'bar-active':''" @click="$router.replace('/shop/ratings')">评价</div>
   <div class="bar" :class="ifActive('info')?'bar-active':''" @click="$router.replace('/shop/info')">商家</div>
  </div>
  <!-- 路由缓存，避免频繁加载及购买数量bug -->
  <keep-alive>
   <router-view></router-view>
  </keep-alive>
 </div>
</template>

<script>
import ShopHeader from "@/components/ShopHeader"
import ShopGoods from "@/pages/Shop/ShopGoods"
import ShopInfo from "@/pages/Shop/ShopInfo"
import ShopRatings from "@/pages/Shop/ShopRatings"

export default {
  name:"Shop",
  mounted(){
    this.$store.dispatch('getShopDetail','getShopRatings')
  },
  methods:{
    //通过url判断当前哪个bar该active
    ifActive(path){
      return -1!=this.$route.path.indexOf(path)?true:false
    },
  },
  components:{ShopHeader,ShopGoods,ShopInfo,ShopRatings},
}
</script>

<style scoped lang="less">
.shop{
  width:100%;
  height:100vh;

  .nav-bar{
    height:40px;
    width:100%;
    background:#FFFFFF;
    display:flex;
    position:relative;

    .bar{
      flex-grow:1;
      align-self:center;
      position:relative;
      text-align:center;
      font-size:18px;

      &.bar-active{
        color:#684E94;

        &::after{
          content:'';
          position:absolute;
          left:0;
          right:0;
          bottom:-4px;
          height:2px;
          background:#684E94;
        }
      }
    }
  }
}
</style>
