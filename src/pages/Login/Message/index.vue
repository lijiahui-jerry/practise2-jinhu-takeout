<template>
 <!-- 短信登录 -->
 <div class="login-with-message">
  <!-- 手机号输入框 -->
  <div class="phone-input">
   <input type="tel" maxlength="11" placeholder="手机号" v-model="phoneNumber">
   <button class="captcha-get">获取验证码</button>
  </div>
  <!-- 验证码输入框 -->
  <div class="captcha-input">
   <input type="number" maxlength="6" placeholder="验证码" v-model="captcha">
  </div>
  <!-- 提示 -->
  <div class="caution">
   <p>未注册的手机号，登录时将自动注册</p>
   <span @click="toggleReadArgument"><input type="checkbox" :checked="ifReadArgument">我已认真阅读并同意</span><a class="argument">《用户服务协议》</a>
  </div>
 </div>

</template>

<script>
export default {
  name:"Message",
  data(){
    return {
      phoneNumber:'',
      captcha:'',
      ifReadArgument:false,
    }
  },
  methods:{
    //切换用户协议的同意与否
    toggleReadArgument(){
      this.ifReadArgument= !this.ifReadArgument
    },
  },
}
</script>

<style scoped lang="less">
.login-with-message{
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

  .phone-input{
    position:relative;
    margin-top:16px;
    height:48px;
    font-size:14px;
    background:#FFFFFF;

    .captcha-get{
      position:absolute;
      top:50%;
      right:10px;
      transform:translateY(-50%);
      border:0;
      color:#CCCCCC;
      font-size:14px;
      background:transparent;
    }
  }

  .captcha-input{
    position:relative;
    margin-top:16px;
    height:48px;
    font-size:14px;
    background:#FFFFFF;

    .switch_button{
      font-size:12px;
      border:1px solid #DDDDDD;
      border-radius:8px;
      transition:background-color 0.3s, border-color 0.3s;
      padding:0 6px;
      width:30px;
      height:16px;
      line-height:16px;
      color:#FFFFFF;
      position:absolute;
      top:50%;
      right:10px;
      transform:translateY(-50%);

      &.off{
        background:#FFFFFF;

        .switch_text{
          float:right;
          color:#DDDDDD;
        }
      }

      &.on{
        background:#684E94;
      }

      & > .switch_circle{
        position:absolute;
        top:-1px;
        left:-1px;
        width:16px;
        height:16px;
        border:1px solid #DDDDDD;
        border-radius:50%;
        background:#FFFFFF;
        box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1);
        transition:transform 0.3s;
      }
    }
  }

  .caution{
    margin-top:12px;
    color:#999999;
    font-size:14px;
    line-height:2em;

    //用户协议的checkbox
    & > span > input{
      width:12px;
      height:12px;
    }

    .argument{
      display:inline-block;
      color:red;
    }
  }
}


</style>