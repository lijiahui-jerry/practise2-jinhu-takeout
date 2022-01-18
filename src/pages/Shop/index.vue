<template>
 <div class="shop">
  <ShopHeader></ShopHeader>
  <!-- 干饭、评价、商家 -->
  <div class="nav-bar">
   <div class="bar" :class="ifActive('goods')?'bar-active':''" @click="$router.replace('/shop/goods')">干饭</div>
   <div class="bar" :class="ifActive('ratings')?'bar-active':''" @click="$router.replace('/shop/ratings')">评价</div>
   <div class="bar" :class="ifActive('info')?'bar-active':''" @click="$router.replace('/shop/info')">商家</div>
  </div>
  <router-view></router-view>
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
    this.$store.dispatch('getShopDetail')
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
  height:100%;

  .nav-bar{
    height:40px;
    width:100%;
    background:#FFFFFF;
    display:flex;
    position:relative;

    &::after{
      content:'';
      position:absolute;
      left:0;
      right:0;
      bottom:7px;
      height:1px;
      background-color:#E4E4E4;
      @media screen{
        @media (-webkit-device-pixel-ratio:2){
          transform:scaleY(0.5);
        }
        @media (-webkit-device-pixel-ratio:3){
          transform:scaleY(0.3);
        }
      }
    }

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
