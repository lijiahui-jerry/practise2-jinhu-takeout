<template>
 <!-- 登录页面 -->
 <div class="login">
  <!-- 表单验证提示 -->
  <Tip :tips="tips" v-if="showTips" @closeTip="closeTip"></Tip>
  <!-- 左上角路由回退按钮 -->
  <a class="back" @click="$router.back()"><i class="iconfont icon-fanhui"></i></a>
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
    <Message v-if="phoneLogin" ref="childMessage"></Message>
    <Account v-else ref="childAccount"></Account>
   </form>
   <!-- 用户协议、登录按钮、关于我们 -->
   <footer>
    <button class="submit" @click="submitLoginInformation()">登录</button>
    <a class="about">关于我们</a>
   </footer>
  </div>

 </div>
</template>

<script>
import Message from "@/pages/Login/Message"
import Account from "@/pages/Login/Account"
import Tip from "@/components/Tip"

export default {
  name:"Login",
  components:{Message,Account,Tip},
  data(){
    return {
      phoneLogin:true,
      tips:'',
      showTips:false,
    }
  },
  methods:{
    //切换登录的方式
    toggleLoginType(flag){
      //这里不能简单地对当前状态取反来实现，因为点击同一个登录方式两次时，简单取反方式会触发切换，但实际上不能让它切换
      //this.phoneLogin=!this.phoneLogin
      if(flag!=this.phoneLogin) this.phoneLogin=flag
    },
    //提示内容函数
    tipBox(t){
      this.showTips=true
      this.tips=t
    },
    //提交登录所需的信息
    async submitLoginInformation(){
      let phone=this.$refs.childMessage.phoneNumber
      let code=this.$refs.childMessage.captcha
      let ifReadArgument=this.$refs.childMessage.ifReadArgument
      //表单合法性验证
      if(this.phoneLogin){
        //短信验证码登录
        if(phone.length<11){
          this.tipBox('请正确输入手机号')
        }else if(0==code.length){
          this.tipBox('请输入验证码')
        }else if(6!=code.length){
          this.tipBox('请正确输入6位验证码')
        }else if(!ifReadArgument){
          this.tipBox('请勾选同意协议')
        }else{
          //异步登录：等待dispatch返回的promise，根据promise进行相应操作。
          try{
            await this.$store.dispatch('getLogin',{phone,code})
            this.$router.push('/me')
          }catch(e){
            this.tipBox(e.message)
          }
        }
      }else{
        //密码登录
        const {account,password,captcha}=this.$refs.childAccount
        if(password.length<8){
          this.tipBox('密码至少为8位')
        }else if(0==captcha.length){
          this.tipBox('请输入验证码')
        }else if(4!=captcha.length){
          this.tipBox('请正确输入4位验证码')
        }else{
          if(200==this.$refs.childAccount.accountLogin(account,password,captcha).code) this.$router.push('/me')
        }
      }
    },
    closeTip(){
      this.showTips=false
      this.tips=''
    },
  },
}
</script>

<style scoped lang="less">
.login{
  width:80%;
  height:100%;
  padding-top:50px;
  margin:0 auto;

  //左上角返回按钮
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

  //金狐外卖标题
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

      //登录按钮
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

      //关于我们按钮
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
