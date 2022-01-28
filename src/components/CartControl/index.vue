<template>
 <div class="cart-control">
  <transition name="move">
   <!-- 餐品数量减一 -->
   <div class="iconfont icon-direction-down" v-if="food.count" @click="updateCount(false)"></div>
  </transition>
  <div class="count" v-if="food.count">{{food.count}}</div>
  <!-- 餐品数量加一 -->
  <div class="iconfont icon-direction-up" @click="updateCount(true)"></div>
 </div>
</template>

<script>
export default {
  name:"CartControl",
  props:{
    food:Object,
  },
  methods:{
    //修改购物车中菜品的数量，true为加1，false为减1
    updateCount(flag){
      this.$store.dispatch('updateCountOfFood',{flag,food:this.food})
    },
  },
}
</script>

<style scoped lang="less">
.cart-control{
  font-size:0;

  .cart-decrease{
    display:inline-block;
    padding:6px;
    line-height:24px;
    font-size:24px;
    color:rgb(0, 160, 220);
  }

  .icon-direction-down{
    display:inline-block;
    padding:6px;
    line-height:24px;
    font-size:24px;
    color:green;

    &.move-enter-active, &.move-leave-active{
      transition:all .3s;
    }

    &.move-enter, &.move-leave-to{
      opacity:0;
      transform:translateX(15px) rotate(90deg);
    }
  }

  .count{
    display:inline-block;
    vertical-align:top;
    width:12px;
    padding-top:6px;
    line-height:24px;
    text-align:center;
    font-size:10px;
    color:rgb(147, 153, 159);
  }

  .icon-direction-up{
    display:inline-block;
    padding:6px;
    line-height:24px;
    font-size:24px;
    color:green;
  }
}
</style>
