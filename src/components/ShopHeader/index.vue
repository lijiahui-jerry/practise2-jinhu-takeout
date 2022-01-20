<template>
 <div class="shop-header">
  <div class="header-background" :style="{backgroundImage:`url(${info.bgImg})`}">
   <div class="back" @click="$router.back()"><i class="iconfont icon-direction-down"></i></div>
  </div>
  <div class="brief">
   <div class="avatar">
    <img :src="info.avatar">
   </div>
   <div class="brief-content">
    <h2 class="shop-name">{{info.name}}</h2>
    <div class="sell">
     <span class="sell-detail">{{info.score}}</span>
     <span class="sell-detail">月均{{info.sellCount}}单</span>
     <span class="sell-detail">{{info.description}}<span>约{{info.deliveryTime}}分钟</span></span>
     <span class="sell-detail">{{info.distance}}</span>
    </div>
   </div>
  </div>


  <div class="discount" v-if="info.supports">
   <div class="discount-left">
    <div class="activity">
     <span class="activity-tag">{{info.supports[0].name}}</span>
     <span class="activity-detail">{{info.supports[0].content}}</span>
    </div>
   </div>
   <div class="discount-right">
    <span class="discount-count">{{info.supports.length}}个优惠</span>
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
  text-align:center;

  .header-background{
    background-size:cover;
    background-repeat:no-repeat;
    position:relative;
    height:70px;

    //返回按钮
    .back{
      padding-left:5px;
      position:relative;
      color:#FFFFFF;
      width:40px;
      height:100%;

      //返回按钮的透明背景色
      &::after{
        content:"";
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color:rgba(255, 255, 255, .2);
      }

      .iconfont{
        font-size:40px;
        line-height:2em;
      }
    }
  }

  .brief{
    position:relative;
    background:#FFFFFF;
    text-align:center;
    display:flex;

    //商家头像的盒子
    .avatar{
      position:absolute;
      top:-36px;
      left:50%;
      transform:translateX(-50%);
      z-index:400;
      width:66px;
      height:66px;
      border-radius:4px;
      overflow:hidden;

      & > img{
        width:100%;
      }
    }

    .brief-content{
      width:100%;
      margin-top:31px;

      & > h2{
        font-size:20px;
        line-height:24px;
        font-weight:1000;
      }

      .sell{
        display:flex;
        width:70%;
        margin:5px auto 0;
        font-size:14px;

        .sell-detail{
          flex-grow:1;
        }
      }
    }
  }

  .discount{
    width:90%;
    display:flex;
    margin:5px auto;
    font-size:12px;
    border:1px solid #E7DDB8;
    padding:2px;
    border-radius:4px;

    //活动的标签和具体信息
    .discount-left{
      flex:1;
      overflow:hidden;

      .activity{
        display:flex;
        align-items:center;

        //活动的简称tag的内容
        .activity-tag{
          border-radius:4px;
          padding:3px 4px 4px;
          background-color:#684E94;
          color:#FFFFFF;
          font-weight:1000;
          transform:scale(.8);
        }
      }
    }

    .discount-right{
      width:50px;
      flex-shrink:0;
      padding-right:10px;
      position:relative;

      .discount-count{
        position:absolute;
        right:10px;
        margin-top:3px;
        text-align:right;
      }

      //css实现倒三角表示点击显示更多
      &::after{
        content:'';
        display:block;
        border-style:solid;
        border-width:4px 4px 0;
        border-color:rgba(0, 0, 0, .5) transparent transparent;
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:1px;
      }
    }
  }
}
</style>
