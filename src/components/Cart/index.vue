<template>
 <div class="cart">
  <div class="shopcart">
   <div class="content">
    <div class="content-left" @click="toggleIfShowList()">
     <div class="logo-wrapper">
      <div class="logo" :class="{highlight: totalCount}">
       <i class="iconfont icon-direction-up" :class="{highlight: totalCount}"></i>
      </div>
      <div class="num" v-if="totalCount">{{totalCount}}</div>
     </div>
     <div class="price" :class="{highlight: totalCount}">￥{{totalPrice}}</div>
     <div class="desc">另需配送费{{info.deliveryPrice}}元</div>
    </div>
    <div class="content-right">
     <div class="pay" :class="payOrNotCLASS()">
      {{payOrNotTEXT()}}
     </div>
    </div>
   </div>
   <transition name="move">
    <div class="shopcart-list" v-show="couldShowList">
     <div class="list-header">
      <h1 class="title">购物车</h1>
      <span class="empty" @click="clearCart()">清空</span>
     </div>
     <div class="list-content" ref="cartList">
      <ul>
       <li class="food" v-for="(food, index) in foodsInCart" :key="index">
        <span class="name">{{food.name}}</span>
        <div class="price"><span>￥{{food.price}}</span></div>
        <div class="cartcontrol-wrapper">
         <CartControl :food="food"/>
        </div>
       </li>
      </ul>
     </div>
    </div>
   </transition>

  </div>
  <transition name="fade">

   <div class="list-mask" v-show="couldShowList" @click="toggleIfShowList()"></div>
  </transition>
 </div>
</template>


<script>
import BScroll from "better-scroll"
import CartControl from "@/components/CartControl"
import {mapState,mapGetters} from "vuex"
import {MessageBox} from "mint-ui"

export default {
  name:"Cart",
  components:{CartControl},
  data(){
    return {
      ifShowList:false,
    }
  },
  computed:{
    //根据当前购物车是否为空及是否需要显示列表，综合计算当前是否应该显示购物车列表
    couldShowList(){
      if(0==this.totalCount){
        this.ifShowList=false
        return false
      }
      //在购物车列表显示后实例化BScroll对象
      if(this.ifShowList){
        this.$nextTick(()=>{
          if(!this.bscroll){
            this.bscroll=new BScroll(this.$refs.cartList,{click:true})
          }else{
            this.bscroll.refresh()
          }
        })
        return this.ifShowList
      }
    },
    ...mapState({
      foodsInCart:state=>state.shop.foodsInCart || [],
      info:state=>state.shop.info || {},
    }),
    ...mapGetters(['totalCount','totalPrice']),
  },
  methods:{
    //清空购物车
    clearCart(){
      MessageBox.confirm('是否确定清空购物车?').then(action=>{
        this.$store.dispatch('clearCart')
      },()=>{})
    },
    //判断当前是否满足起送价要求，返回css类
    payOrNotCLASS(){
      const {totalPrice}=this
      const {minPrice}=this.info

      return totalPrice>=minPrice?'enough':'not-enough'
    },
    //判断当前是否满足起送价要求，返回提示信息
    payOrNotTEXT(){
      const {totalPrice}=this
      const {minPrice}=this.info

      if(0==totalPrice) return `${minPrice}元起送`
      else if(totalPrice<minPrice) return `还差${minPrice-totalPrice}元起送`
      else return '立即干饭'
    },
    //切换购物车列表的显示状态
    toggleIfShowList(){
      if(this.totalCount>0){
        this.ifShowList= !this.ifShowList
      }
    },
  },
}
</script>

<style scoped lang="less">
.cart{
  .shopcart{
    position:fixed;
    left:0;
    bottom:0;
    z-index:50;
    width:100%;
    height:48px;

    .content{
      display:flex;
      background:#141D27;
      font-size:0;
      color:rgba(255, 255, 255, 0.4);

      .content-left{
        flex:1;

        .logo-wrapper{
          display:inline-block;
          vertical-align:top;
          position:relative;
          top:-10px;
          margin:0 12px;
          padding:6px;
          width:56px;
          height:56px;
          box-sizing:border-box;
          border-radius:50%;
          background:#141D27;

          .logo{
            width:100%;
            height:100%;
            border-radius:50%;
            text-align:center;
            background-color:#2B343C;

            &.highlight{
              background-color:green;
            }

            .icon-direction-up{
              line-height:44px;
              font-size:24px;
              color:#80858A;

              &.highlight{
                color:#FFFFFF;
              }
            }
          }

          .num{
            position:absolute;
            top:0;
            right:0;
            width:24px;
            height:16px;
            line-height:16px;
            text-align:center;
            border-radius:16px;
            font-size:9px;
            font-weight:1000;
            color:#FFFFFF;
            background:rgb(240, 20, 20);
            box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.4);
          }
        }

        .price{
          display:inline-block;
          vertical-align:top;
          margin-top:5px;
          line-height:24px;
          padding-right:12px;
          box-sizing:border-box;
          font-size:16px;
          font-weight:1000;
          color:#FFFFFF;

          &.highlight{
            color:#FFFFFF;
          }
        }

        .desc{
          display:inline-block;
          vertical-align:bottom;
          margin-bottom:15px;
          margin-left:-45px;
          font-size:10px;
        }
      }

      .content-right{
        flex:0 0 105px;
        width:105px;

        .pay{
          height:48px;
          line-height:48px;
          text-align:center;
          font-size:12px;
          font-weight:1000;
          color:#FFFFFF;

          &.not-enough{
            background-color:#2B333B;
          }

          &.enough{
            background-color:#00B43C;
            color:#FFFFFF;
          }
        }
      }
    }

    .ball-container{
      .ball{
        position:fixed;
        left:32px;
        bottom:22px;
        z-index:200;
        transition:all .4s cubic-bezier(0.49, -0.29, 0.75, 0.41);

        .inner{
          width:16px;
          height:16px;
          border-radius:50%;
          background-color:green;
          transition:.4s linear;
        }
      }
    }

    .shopcart-list{
      position:absolute;
      left:0;
      top:0;
      z-index:-1;
      width:100%;
      transform:translateY(-100%);

      &.move-enter-active, &.move-leave-active{
        transition:transform .3s;
      }

      &.move-enter, &.move-leave-to{
        transform:translateY(0);
      }

      .list-header{
        height:40px;
        line-height:40px;
        padding:0 18px;
        background:#F3F5F7;
        border-bottom:1px solid rgba(7, 17, 27, 0.1);

        .title{
          float:left;
          font-size:14px;
          color:rgb(7, 17, 27);
        }

        .empty{
          float:right;
          font-size:12px;
          color:rgb(0, 160, 220);
        }
      }

      .list-content{
        padding:0 18px;
        max-height:217px;
        overflow:hidden;
        background:#FFFFFF;

        .food{
          position:relative;
          padding:12px 0;
          box-sizing:border-box;
          border:none;

          &::after{
            content:'';
            display:block;
            left:0;
            bottom:0;
            right:0;
            height:1px;
            background-color:rgba(7, 17, 27, 0.1);
            @media screen{
              @media (-webkit-device-pixel-ratio:2){
                transform:scaleY(0.5);
              }
              @media (-webkit-device-pixel-ratio:3){
                transform:scaleY(0.3);
              }
            }
          }

          .name{
            line-height:24px;
            font-size:14px;
            color:rgb(7, 17, 27);
          }

          .price{
            position:absolute;
            right:90px;
            bottom:12px;
            line-height:24px;
            font-size:14px;
            font-weight:1000;
            color:rgb(240, 20, 20);
          }

          .cartcontrol-wrapper{
            position:absolute;
            right:0;
            bottom:6px;
          }
        }
      }
    }
  }

  .list-mask{
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    z-index:45;
    backdrop-filter:blur(10px);
    opacity:1;
    background:rgba(7, 17, 27, 0.6);

    &.fade-enter-active, &.fade-leave-active{
      transition:all .3s;
    }

    &.fade-enter, &.fade-leave-to{
      opacity:0;
      background:rgb(7, 17, 27);
    }
  }
}
</style>
