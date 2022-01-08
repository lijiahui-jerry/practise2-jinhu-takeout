<template>
 <!-- 首页头部 -->
 <header>
  <span class="header-left"><i class="iconfont icon-direction-down"></i></span>
  <span class="title-wrapper">
   <span class="title-content">{{school.name}}</span>
  </span>
  <router-link to="/login" class="header-right"><span class="c">登录</span></router-link>
 </header>
</template>

<script>
import {mapState} from "vuex"

export default {
  name:"Header",
  computed:{
    ...mapState({
      school:(state)=>state.home.school||{}
    }),
  },
  mounted(){
    this.$store.dispatch('getLocation')
  },
}
</script>

<style scoped lang="less">
header{
  background-color:#02A774;
  position:fixed;
  z-index:100;
  left:0;
  top:0;
  width:100%;
  height:45px;

  .title-wrapper{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:50%;
    color:#FFFFFF;
    text-align:center;

    .title-content{
      font-size:20px;
      color:#FFFFFF;
    }
  }

  .header-left{
    position:absolute;
    left:15px;
    top:50%;
    transform:translateY(-50%);
    width:10%;
    height:50%;

    .iconfont{
      font-size:25px;
      color:#FFFFFF;
    }
  }

  .header-right{
    font-size:14px;
    color:#FFFFFF;
    position:absolute;
    right:15px;
    top:50%;
    transform:translateY(-50%);

    .login{
      color:#FFFFFF;
    }
  }
}
</style>