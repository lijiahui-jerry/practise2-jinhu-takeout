<template>
 <div class="container">
  <div class="goods">
   <!-- 左侧大类 -->
   <div class="left">
    <div class="goods-menu" v-for="(good, index) in goods" :key="index" @click="clickItem(index)" :class="{current: index===currentIndex}">
     <span>{{good.name}}</span>
    </div>
   </div>
   <!-- 右侧具体菜品 -->
   <div class="right">
    <ul ref="rightUl">
     <li class="food-list-hook" v-for="good in goods" :key="good.name">
      <h1 class="title">{{good.name}}</h1>
      <ul>
       <li class="food-item bottom-border-1px" v-for="food in good.foods"
           :key="food.name" @click="showFood(food)">
        <div class="icon">
         <img width="57" height="57" :src="food.icon">
        </div>
        <div class="content">
         <h2 class="name">{{food.name}}</h2>
         <p class="desc">{{food.description}}</p>
         <div class="extra">
          <span class="count">月售{{food.sellCount}}份</span>
          <span>好评率{{food.rating}}%</span></div>
         <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
         </div>
         <div class="cartcontrol-wrapper">
         </div>
        </div>
       </li>
      </ul>
     </li>
    </ul>
   </div>

  </div>
  <Food :food="food" ref="food"/>
 </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name:"ShopGoods",
  components:{},
  data(){
    return {}
  },
  computed:{
    ...mapState({
      goods:(state)=>state.shop.goods || [],
    }),
  },
}
</script>

<style scoped lang="less">
.container{
  height:75vh;
  position:relative;

  .goods{
    height:100%;
    position:absolute;
    top:-7px;

    .left{
      float:left;
      width:30%;
      height:100%;
      background-color:#E4E4E4;
      overflow-x:hidden;
      overflow-y:scroll;
      display:flex;
      flex-direction:column;

      .goods-menu{
        width:100%;
      }
    }

    .right{
      float:left;
      width:70%;
      height:100%;
      overflow-x:hidden;
      overflow-y:scroll;
    }
  }
}
</style>
