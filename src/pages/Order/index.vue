<template>
 <div class="order">
  <!-- 订单页头部 -->
  <Header title="订单列表"></Header>

  <div class="no-login">
   <img src="./images/no-login.png">
   <h3>
    请先&nbsp;<span>登录</span>
   </h3>
  </div>
 </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name:"Order",
  components:{Header},
}
</script>

<style scoped lang="less">
.order{
  width:100%;

  .no-login{
    padding-top:140px;
    width:60%;
    margin:0 auto;
    text-align:center;

    & > img{
      display:block;
      width:100%;
      height:30%;
    }

    & > h3{
      padding:10px 0;
      font-size:17px;
      color:#6A6A6A;
    }

    & > button{
      display:inline-block;
      background:#02A774;
      font-size:14px;
      color:#FFFFFF;
      border:0;
      outline:none;
      border-radius:5px;
      padding:10px 20px;
    }
  }
}
</style>