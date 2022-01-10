<template>
 <!-- 登录页面 -->
 <div class="login">
  <!-- 左上角路由回退按钮 -->
  <a class="back" @click="$router.back()"><i class="iconfont icon-direction-down"></i></a>
  <!-- 页面顶部标题 -->
  <h2>金狐外卖</h2>
  <!-- 登录表单内容部分 -->
  <div class="login-content">
   <!-- 两种登录方式 -->
   <div class="login-title">
    <a :class="phoneLogin?'on':''" @click="toggleLoginType(true)">短信登录</a><a :class="!phoneLogin?'on':''" @click="toggleLoginType(false)">密码登录</a>
   </div>
   <!-- 登录表单 -->
   <form>
    <Message v-if="phoneLogin"></Message>
    <Account v-else></Account>
   </form>
   <!-- 用户协议、登录按钮、关于我们 -->
   <footer>
    <span @click="toggleReadArgument"><input type="checkbox" :checked="ifReadArgument">我已认真阅读并同意</span><a class="argument">《用户服务协议》</a>
    <button class="submit">登录</button>
    <a class="about">关于我们</a>
   </footer>
  </div>

 </div>
</template>

<script>
import Message from "@/pages/Login/Message"
import Account from "@/pages/Login/Account"

export default {
  name:"Login",
  components:{Message,Account},
  data(){
    return {
      phoneLogin:true,
      ifReadArgument:false,
    }
  },
  methods:{
    //切换登录的方式
    toggleLoginType(flag){
      this.phoneLogin=flag
      //这里不能简单地对当前状态取反来实现，因为点击同一个登录方式两次时，简单取反方式会触发切换，但实际上不能让它切换
      //this.phoneLogin=!this.phoneLogin
    },
    //记录用户协议的checked
    toggleReadArgument(){
      this.ifReadArgument= !this.ifReadArgument
    },
  },
}
</script>

<style scoped lang="less">
.login{
  width:80vw;
  height:100vw;
  padding-top:50px;
  margin:0 auto;

  .back{
    position:absolute;
    top:10px;
    left:10px;
    width:30px;
    height:30px;

    & > .iconfont{
      font-size:20px;
      color:#999999;
    }
  }

  h2{
    font-size:40px;
    font-weight:1000;
    color:#684E94;
    text-align:center;
  }

  .login-content{
    .login-title{
      margin-top:30px;
      text-align:center;

      & > a{
        color:#333333;
        font-size:14px;
        padding-bottom:4px;
        width:30%;
        display:inline-block;

        &.on{
          color:#684E94;
          font-weight:1000;
          border-bottom:2px solid #684E94;
        }
      }
    }

    footer{
      margin-top:15px;
      font-size:14px;
      color:#999999;

      //用户协议的checkbox
      & > span > input{
        width:1em;
        height:1em;
      }

      .argument{
        display:inline-block;

      }

      .submit{
        display:inline-block;
        width:100%;
        height:42px;
        margin-top:8px;
        border-radius:5px;
        background:#684E94;
        color:#FFFFFF;
        text-align:center;
        font-size:18px;
        border:0;
      }

      .about{
        display:inline-block;
        width:100%;
        font-size:12px;
        margin-top:20px;
        text-align:center;
        color:#D5C0CF;
      }
    }
  }
}
</style>