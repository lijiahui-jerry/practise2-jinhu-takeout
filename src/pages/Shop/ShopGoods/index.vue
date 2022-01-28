<template>
 <div class="container">
  <div class="goods">
   <div class="menu-wrapper">
    <ul>
     <li class="menu-item" v-for="(good, index) in goods" :key="index"
         :class="{current: index===currentIndex}" @click="MenuJumpTo(index)">
      <span class="text bottom-border-1px">
       <img class="icon" :src="good.icon" v-if="good.icon">
       {{good.name}}
      </span>
     </li>
    </ul>
   </div>
   <div class="foods-wrapper">
    <ul ref="foodsUl">
     <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
      <h1 class="title">{{good.name}}</h1>
      <ul>
       <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods"
           :key="index">
        <div class="icon">
         <img width="57" height="57" :src="food.icon">
        </div>
        <div class="content">
         <h2 class="name">{{food.name}}</h2>
         <p class="desc">{{food.description}}</p>
         <div class="extra">
          <span class="count">月售{{food.sellCount}}份</span>
          <span>好评率{{food.rating}}%</span>
         </div>
         <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
         </div>
         <div class="cartcontrol-wrapper">
          <CartControl :food="food"/>
         </div>
        </div>
       </li>
      </ul>
     </li>
    </ul>
   </div>
<!--   <Cart/>-->
  </div>
<!--  <Food :food="food" ref="food"/>-->
 </div>
</template>

<script>
import {mapState} from "vuex"
import CartControl from "@/components/CartControl"
import Cart from "@/components/Cart"
import Food from "@/components/Food"
import BScroll from 'better-scroll'

export default {
  name:"ShopGoods",
  components:{CartControl,Cart,Food},
  data(){
    return {
      scrollY:0,
      tops:[],
    }
  },
  computed:{
    ...mapState({
      goods:(state)=>state.shop.goods || [],
    }),
    //计算当前右侧分类的下标
    currentIndex(){
      const {scrollY,tops}=this
      return tops.findIndex((top,index)=>{
        //寻找一个下标，这个下标所对应的元素不但要位于当前滑动高度之前，还要位于下一个元素之前（上一个元素-所找元素-下一个元素）
        return top<=scrollY && scrollY<tops[index+1]
      })
    },
  },
  methods:{
    //点击左侧菜单，右侧滑动至相应位置
    MenuJumpTo(index){
      const y=this.tops[index]
      this.scrollY=y
      this.foodsScroll.scrollTo(0,-y,200)
    },
    //初始化BS相关的信息
    _initScroll(){
      new BScroll('.menu-wrapper',{
        click:true,
      })
      this.foodsScroll=new BScroll('.foods-wrapper',{
        probeType:2,
        click:true,
      })
      //监听右侧食物的滑动情况
      this.foodsScroll.on('scrollEnd',({y})=>{
        this.scrollY=Math.abs(y)
      })
    },
    //初始化右侧分类菜单位置相关的信息
    _initTops(){
      const tops=[]
      let top=0
      tops.push(top)
      const lis=this.$refs.foodsUl.getElementsByClassName('food-list-hook')
      Array.prototype.slice.call(lis).forEach((li)=>{
        top+=li.clientHeight
        tops.push(top)
      })
      this.tops=tops
    },
  },
  mounted(){
    this.$store.dispatch('getShopGoods',()=>{
      this.$nextTick(()=>{
        this._initScroll()
        this._initTops()
      })
    })
  },
}
</script>

<style scoped lang="less">
.container{
  .goods{
    display:flex;
    background:#FFFFFF;
    height:68vh;
    @media screen{
      @media (-webkit-device-pixel-ratio:3){
        height:68vh;
      }
      @media (-webkit-device-pixel-ratio:2){
        height:60vh;
      }
    }
    overflow:scroll;

    .menu-wrapper{
      flex:0 0 80px;
      width:80px;
      background:#F3F5F7;

      .menu-item{
        display:table;
        height:54px;
        width:56px;
        padding:0 12px;
        line-height:14px;

        &.current{
          position:relative;
          z-index:10;
          margin-top:-1px;
          background:#FFFFFF;
          color:green;
          font-weight:1000;

          .text{
            border-style:none;
          }
        }

        .icon{
          display:inline-block;
          vertical-align:top;
          width:12px;
          height:12px;
          margin-right:2px;
          background-size:12px 12px;
          background-repeat:no-repeat;
        }

        .text{
          display:table-cell;
          width:56px;
          vertical-align:middle;
          position:relative;
          border:none;

          &::after{
            content:'';
            position:absolute;
            left:0;
            bottom:0;
            width:100%;
            background:rgba(7, 17, 27, 0.1);
            height:1px;
            @media screen{
              @media (-webkit-device-pixel-ratio:3){
                transform:scaleY(0.5);
              }
              @media (-webkit-device-pixel-ratio:2){
                transform:scaleY(0.3);
              }
            }
          }

          font-size:12px;
        }
      }

    }

    .foods-wrapper{
      flex:1;

      .title{
        padding-left:14px;
        height:26px;
        line-height:26px;
        border-left:2px solid #D9DDE1;
        font-size:12px;
        color:rgb(147, 153, 159);
        background:rgba(7, 17, 27, 0.1);
      }

      .food-item{
        display:flex;
        margin:18px;
        padding-bottom:18px;
        position:relative;
        border:none;

        &::after{
          content:'';
          position:absolute;
          left:0;
          bottom:0;
          width:100%;
          background-color:#D9DDE1;
          height:1px;
          @media screen{
            @media (-webkit-device-pixel-ratio:3){
              transform:scaleY(0.5);
            }
            @media (-webkit-device-pixel-ratio:2){
              transform:scaleY(0.3);
            }
          }
        }

        &:last-child{
          border-style:none;
          margin-bottom:0;
        }

        .icon{
          flex:0 0 57px;
          margin-right:10px;
        }

        .content{
          flex:1;

          .name{
            margin:2px 0 8px 0;
            height:14px;
            line-height:14px;
            font-size:14px;
            color:rgb(7, 17, 27);
          }

          .desc, .extra{
            line-height:10px;
            font-size:10px;
            color:rgb(147, 153, 159);
          }

          .desc{
            line-height:12px;
            margin-bottom:8px;
          }

          .extra{
            .count{
              margin-right:12px;
            }
          }

          .price{
            font-weight:700;
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
        }


        .cartcontrol-wrapper{
          position:absolute;
          right:0;
          bottom:12px;
        }
      }
    }
  }
}
</style>
