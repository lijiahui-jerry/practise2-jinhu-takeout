<template>
 <!-- 密码登录 -->
 <div class="login-with-account">
  <!-- 账户名输入框 -->
  <div class="account-input">
   <input type="tel" maxlength="11" placeholder="手机/金狐ID" v-model="account">
  </div>
  <!-- 密码输入框 -->
  <div class="password-input">
   <input :type="ifCiphertext?'password':'text'" placeholder="密码" v-model="password">
   <!-- 密码是否明文显示的切换按钮，密文时off，明文时on -->
   <div class="toggle-button" :class="ifCiphertext?'off':'on'" @click="toggleCiphertext">
    <div class="inner-circle"></div>
    <span class="inner-text-left">abc</span>
    <span class="inner-text-right">···</span>
   </div>
  </div>
  <!-- 图形验证码输入框 -->
  <div class="captcha-input">
   <input type="text" maxlength="4" placeholder="验证码" v-model="captcha">
   <img class="captcha-toggle" src="./images/captcha.svg">
  </div>
 </div>
</template>

<script>
export default {
  name:"Account",
  data(){
    return {
      account:'',
      password:'',
      captcha:'',
      ifCiphertext:true,
    }
  },
  methods:{
    //密码的明文或密文切换
    toggleCiphertext(){
      this.ifCiphertext= !this.ifCiphertext
    },
  },
}
</script>

<style scoped lang="less">
.login-with-account{
  input{
    width:100%;
    height:100%;
    padding-left:10px;
    box-sizing:border-box;
    border:1px solid #DDDDDD;
    border-radius:4px;
    outline:0;
    font-weight:400;
    font-size:14px;

    &:focus{
      border:1px solid #684E94;
    }
  }

  .account-input{
    position:relative;
    margin-top:16px;
    height:48px;
    font-size:14px;
    background:#FFFFFF;
  }

  .password-input{
    position:relative;
    margin-top:16px;
    height:48px;
    font-size:14px;
    background:#FFFFFF;

    .toggle-button{
      position:absolute;
      right:10px;
      top:50%;
      transform:translateY(-50%);
      font-size:12px;
      border:1px solid #DDDDDD;
      border-radius:10px;
      transition:background-color 0.3s, border-color 0.3s;
      padding:0 5px;
      width:35px;
      height:16px;
      line-height:16px;
      color:#FFFFFF;

      .inner-circle{
        position:absolute;
        top:-1px;
        left:-1px;
        width:16px;
        height:16px;
        border:1px solid #DDDDDD;
        border-radius:50%;
        background:#FFFFFF;
        transition:transform .3s;
      }

      //密文
      &.off{
        background:#FFFFFF;

        .inner-text-left{
          float:left;
          display:none;
          color:#DDDDDD;
        }

        .inner-text-right{
          float:right;
          color:#DDDDDD;
        }
      }

      //明文
      &.on{
        background:#684E94;

        .inner-text-right{
          display:none;
        }

        .inner-circle{
          transform:translateX(23px);
          left:auto;
        }
      }
    }
  }

  .captcha-input{
    position:relative;
    margin-top:16px;
    height:48px;
    font-size:14px;
    background:#FFFFFF;

    .captcha-toggle{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      right:0;
    }
  }

}
</style>
