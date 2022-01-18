<template>
 <div class="shop-header">
  <div class="header-background" :style="{backgroundImage:`url(${info.bgImg})`}">
   <span class="back" @click="$router.back()"><i class="iconfont icon-direction-down"></i></span>
  </div>
  <div class="shop-brief">
   <div class="avatar">
    <img :src="info.avatar">
   </div>
   <div class="brief-content">
    <h2 class="shop-name">{{info.name}}</h2>
    <div class="sell">
     <span class="sell-detail">{{info.score}}</span>
     <span class="sell-detail">月售{{info.sellCount}}单</span>
     <span class="sell-detail">{{info.description}}<span>约{{info.deliveryTime}}分钟</span>
     </span>
     <span class="sell-detail">距离{{info.distance}}</span>
    </div>
   </div>
  </div>

 </div>
</template>


<script>
import {mapState} from "vuex"

export default {
  name:"ShopHeader",
  computed:{
    ...mapState({
      info:(state)=>state.shop.info || {},
    }),
  },
}
</script>

<style scoped lang="less">
.shop-header{
  width:100%;
  position:relative;
  background:#FFFFFF;
  overflow:hidden;

  .header-background{
    background-size:cover;
    background-repeat:no-repeat;
    position:relative;
    height:70px;
    padding:0 5px;

    .back{
      color:red;
      height:100%;

      //返回按钮的透明背景色
      &::before{
        content:"";
        position:absolute;
        left:0;
        top:0;
        background-color:#FFFFFF;
      }
    }
  }

  .shop-brief{
    padding:30px 20px 5px 20px;
    background:#FFFFFF;
    text-align:center;
    position:absolute;
    top:86px;

    //商家头像的盒子
    .avatar{
      & > img{
        display:block;
        position:absolute;
        top:20px;
        left:50%;
        transform:translateX(-50%);
        width:66px;
        height:66px;
        border-radius:4px;
        z-index:19999;
      }
    }

    .brief-content{
    }
  }
}
</style>
