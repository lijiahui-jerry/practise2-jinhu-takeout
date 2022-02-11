<template>
 <div class="order">
  <!-- 订单页头部 -->
  <Header title="订单列表"></Header>
  <!-- 已登录 -->

  <!-- 未登录 -->
  <div class="not-logged" v-if="!ifLogged()">
   <p>请先&nbsp;<button @click="$router.push('login')">登录</button>
   </p>
  </div>
 </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name:"Order",
  components:{Header},
  methods:{
    //判断是否登录
    ifLogged(){
      return localStorage.getItem('userId')
    },
  },
}
</script>

<style scoped lang="less">
.order{
  width:100vw;

  //未登录时的样式
  .not-logged{
    width:100%;
    text-align:center;

    & > img{
      display:block;
      margin-top:15vh;
      width:100%;
    }

    & > p{
      margin-top:100px;
      font-size:20px;
      line-height:1em;
      height:1em;

      & > button{
        background:#684E94;
        font-size:16px;
        line-height:1em;
        color:#FFFFFF;
        border:0 none;
        border-radius:4px;
        padding:6px;
      }
    }
  }
}
</style>
