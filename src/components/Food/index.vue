<template>
 <div class="food" v-if="ifShow">
  <div class="food-content">
   <div class="image-header">
    <img :src="food.image">
    <p class="foodpanel-desc">{{food.info}}</p>
    <div class="back" @click="toggleIfShow()">
     <i class="iconfont icon-direction-up"></i>
    </div>
   </div>
   <div class="content">
    <h1 class="title">{{food.name}}</h1>
    <div class="detail">
     <span class="sell-count">月售{{food.sellCount}}份</span>
     <span class="rating">好评率{{food.rating}}%</span>
    </div>
    <div class="price">
     <span class="now">￥{{food.price}}</span>
     <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
    </div>
    <div class="cart-control-container">
     <CartControl :food="food"/>
    </div>
   </div>
  </div>
  <div class="food-cover" @click="toggleIfShow()"></div>
 </div>
</template>

<script>
import CartControl from "@/components/CartControl"

export default {
  name:"Food",
  components:{CartControl},
  props:{
    food:Object,
  },
  data(){
    return {
      ifShow:false,
    }
  },
  methods:{
    //切换此组件显示状态
    toggleIfShow(){
      this.ifShow= !this.ifShow
    },
  },
}
</script>

<style scoped lang="less">
.food{
  position:fixed;
  left:0;
  top:0;
  bottom:48px;
  z-index:1400;
  width:100%;

  &.fade-enter-active, &.fade-leave-active{
    transition:opacity .5s;
  }

  &.fade-enter, &.fade-leave-to{
    opacity:0;
  }

  .food-content{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, 50%);
    width:80%;
    height:65%;
    z-index:50;
    background:#FFFFFF;
    border-radius:5px;

    .image-header{
      position:relative;
      width:100%;
      height:0;
      padding-top:100%;

      img{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
      }

      .foodpanel-desc{
        font-size:10px;
        color:#DDDDDD;
        letter-spacing:0;
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        padding:0 10px 10px;
      }

      .back{
        position:absolute;
        top:10px;
        left:0;

        .icon-direction-up{
          display:block;
          padding:10px;
          font-size:20px;
          color:#FFFFFF;
        }
      }
    }

    .content{
      position:relative;
      padding:18px;

      .title{
        line-height:14px;
        margin-bottom:8px;
        font-size:14px;
        font-weight:1000;
        color:rgb(7, 17, 27);
      }

      .detail{
        margin-bottom:18px;
        line-height:10px;
        height:10px;
        font-size:0;

        .sell-count, .rating{
          font-size:10px;
          color:rgb(147, 153, 159);
        }

        .sell-count{
          font-size:12px;
        }
      }

      .price{
        font-weight:1000;
        line-height:24px;

        .now{
          margin-right:8px;
          font-size:14px;
          color:rgb(240, 20, 20);
        }

        .old{
          text-decoration:line-through;
          font-size:10px;
          color:rgb(147, 153, 159);
        }
      }

      .cart-control-container{
        position:absolute;
        right:12px;
        bottom:12px;
      }

      .buy{
        position:absolute;
        right:18px;
        bottom:18px;
        z-index:10;
        height:24px;
        line-height:24px;
        padding:0 12px;
        box-sizing:border-box;
        border-radius:12px;
        font-size:10px;
        color:#FFFFFF;
        background:rgb(0, 160, 220);

        &.fade-transition{
          transition:all .2s;
          opacity:1;
        }

        &.fade-enter, &.fade-leave{
          opacity:0;
        }
      }
    }
  }

  .food-cover{
    position:absolute;
    top:0;
    right:0;
    bottom:-48px;
    left:0;
    z-index:155;
    background-color:rgba(0, 0, 0, .5);
  }
}
</style>
