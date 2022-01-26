<template>
 <div>
  <div class="goods">
   <div class="menu-wrapper">
    <ul>
     <!--current-->
     <li class="menu-item" v-for="(good, index) in goods" :key="index"
         :class="{current: index===currentIndex}" @click="clickMenuItem(index)">
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
           :key="index" @click="showFood(food)">
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
   <Cart/>
  </div>
  <Food :food="food" ref="food"/>
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
  },
  mounted(){
    const menuScroll=new BScroll('.menu-wrapper')
    const foodsScroll=new BScroll('.foods-wrapper')
    foodsScroll.on('scroll',({x,y})=>{
      console.log(x,y)
    })
  },
}
</script>

<style scoped lang="less">

.goods{
  display:flex;
  height:70vh;
  background:#FFFFFF;
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
        border-bottom:1px rgba(7, 17, 27, 0.1);
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
      background:#F3F5F7;
    }

    .food-item{
      display:flex;
      margin:18px;
      padding-bottom:18px;
      border-bottom:1px rgba(7, 17, 27, 0.1);

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


          .cartcontrol-wrapper{
            position:absolute;
            right:0;
            bottom:12px;
          }
        }
      }
    }
  }
}
</style>
