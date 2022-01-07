<template>
 <div class="home">
  <!-- 首页头部 -->
  <Header title="上海第二工业大学">
   <span class="header-left" slot="left"><i class="iconfont icon-direction-down"></i></span>
   <router-link to="/login" class="header-right" slot="right"><span class="c">登录</span></router-link>
  </Header>
  <!-- 首页商家导航 -->
  <Navigation></Navigation>
  <!--首页附近商家-->
  <div class="msite_shop_list">
   <div class="shop_header">
    <i class="iconfont icon-direction-down"></i><span class="shop_header_title">附近商家</span>
   </div>
   <!-- 首页商家列表 -->
   <ShopList></ShopList>
  </div>
 </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Header from "@/components/Header"
import ShopList from "@/pages/Home/ShopList"
import Navigation from "@/pages/Home/Navigation"

export default {
  name:"Home",
  components:{Header,ShopList,Navigation},
  mounted(){
    new Swiper('.swiper-container',{
      loop:true,
      pagination:{el:'.swiper-pagination'},
    })
  },
}
</script>

<style scoped lang="less">
.home{
  .header-left{
    position:absolute;
    left:15px;
    top:50%;
    transform:translateY(-50%);
    width:10%;
    height:50%;

    .iconfont{
      font-size:25px;
      color:#FFFFFF;
    }
  }

  .header-right{
    font-size:14px;
    color:#FFFFFF;
    position:absolute;
    right:15px;
    top:50%;
    transform:translateY(-50%);

    .login{
      color:#FFFFFF;
    }
  }

  .msite_shop_list{
    position:relative;
    margin-top:10px;
    background:#FFFFFF;

    &::before{
      content:'';
      position:absolute;
      z-index:200;
      left:0;
      top:0;
      width:100%;
      height:1px;
      background-color:#E4E4E4;
    }

    .shop_header{
      padding:10px 10px 0;

      .shop_icon{
        margin-left:5px;
        color:#999999;
      }

      .shop_header_title{
        color:#999999;
        font-size:14px;
        line-height:20px;
      }
    }

  }
}
</style>