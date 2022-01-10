<template>
 <div>
  <section class="login_message">
   <input type="tel" maxlength="11" placeholder="手机号" v-model="phoneNumber">
   <button class="get_verification">获取验证码</button>
  </section>
  <section class="login_verification">
   <input type="number" maxlength="6" placeholder="验证码" v-model="passcode">
  </section>
  <section class="login_hint">
   <p>未注册的手机号，登录时将自动注册</p>
  </section>
 </div>

</template>

<script>
export default {
  name:"Message",
  data(){
    return {
      phoneNumber:'',
      passcode:'',
    }
  },
}
</script>

<style scoped lang="less">
div{
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

  .login_message{
    position:relative;
    margin-top:16px;
    height:48px;
    font-size:14px;
    background:#FFFFFF;

    .get_verification{
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

  .login_verification{
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

  .login_hint{
    margin-top:12px;
    color:#999999;
    font-size:14px;
    line-height:20px;

    & > a{
      color:red;
    }
  }
}


</style>