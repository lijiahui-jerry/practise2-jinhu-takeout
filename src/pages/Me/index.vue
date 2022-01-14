<template>
 <div class="me">
  <!-- 个人页面头部 -->
  <Header title="金狐外卖"></Header>
  <!-- 个人信息栏 -->
  <div class="info" @click="login">
   <div class="info-image">
    <i class="iconfont icon-direction-down"></i>
   </div>
   <div class="info-main">
    <p class="name">{{setUserName()}}</p>
    <p class="phone">
     <span class="phone-icon"><i class="iconfont icon-direction-down"></i></span>
     <span class="phone-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
    </p>
   </div>
   <!-- 信息栏向右的箭头 -->
   <div class="arrow-right">
    <p><i class="iconfont icon-direction-down"></i></p>
   </div>
  </div>
  <!-- 个人财务栏 -->
  <div class="finance" v-if="ifLogged()">
   <div class="finance-item">
    <p class="first-line"><span class="item-data data1">{{userInfo.balance}}</span>元</p>
    <p class="second-line">余额</p>
   </div>
   <div class="finance-item">
    <p class="first-line"><span class="item-data data2">{{redPacketCount}}</span>个</p>
    <p class="second-line">红包</p>
   </div>
   <div class="finance-item">
    <p class="first-line"><span class="item-data data3">{{userInfo.points}}</span>根</p>
    <p class="second-line">狐毛</p>
   </div>
  </div>
  <!-- 功能栏1 -->
  <div class="tool-bars" v-if="ifLogged()">
   <div class="bar">
    <div class="bar-left"><i class="iconfont icon-direction-down"></i></div>
    <div class="bar-name">我的订单</div>
    <div class="bar-right"><i class="iconfont icon-direction-down"></i></div>
   </div>
   <div class="bar">
    <div class="bar-left"><i class="iconfont icon-direction-down"></i></div>
    <div class="bar-name">我的餐车</div>
    <div class="bar-right"><i class="iconfont icon-direction-down"></i></div>
   </div>
   <div class="bar">
    <div class="bar-left"><i class="iconfont icon-direction-down"></i></div>
    <div class="bar-name">薅狐毛</div>
    <div class="bar-right"><i class="iconfont icon-direction-down"></i></div>
   </div>
  </div>
  <!-- 功能栏2 -->
  <div class="tool-bars" v-if="ifLogged()">
   <div class="bar" @click="logOut()">
    <div class="bar-left"><i class="iconfont icon-direction-down"></i></div>
    <div class="bar-name">退出登录</div>
    <div class="bar-right"><i class="iconfont icon-direction-down"></i></div>
   </div>
   <div class="bar" v-if="0!=userPower.id">
    <div class="bar-left"><i class="iconfont icon-direction-down"></i></div>
    <div class="bar-name">联系客服</div>
    <div class="bar-right"><i class="iconfont icon-direction-down"></i></div>
   </div>
  </div>
 </div>
</template>
<script>
import Header from "@/components/Header"
import {mapState} from "vuex"

export default {
  name:"Me",
  mounted(){
    if(this.ifLogged()){
      this.$store.dispatch('getUserInfo')
    }
  },
  computed:{
    ...mapState({
      userInfo:(state)=>{
        if('1'==localStorage.getItem('userId')){
          return state.me.userInfo[0] || {}
        }else if('8888'==localStorage.getItem('userId')){
          return state.me.userInfo[1] || {}
        }else{
          return {}
        }
      },
    }),
    //返回红包个数
    redPacketCount(){
      /*不能这么写，因为不能确定redPacket这个数组是否undefined，length函数对未定义数组使用时会报错*/
      //return this.userInfo.redPacket.length || 0
      if(this.userInfo.redPacket) return this.userInfo.redPacket.length
      else return 0
    },
    //返回存储权利的二维数组的对象
    userPower(){
      if(this.userInfo.power) return this.userInfo.power
      else return {}
    },
  },
  methods:{
    //登录路由
    login(){
      this.$router.push('/login')
    },
    //判断是否登录
    ifLogged(){
      return localStorage.getItem('userId')
    },
    //动态设置用户名的显示内容
    setUserName(){
      if(this.userInfo.name) return this.userInfo.name+'，欢迎您！'
      else return '登录/注册'
    },
    //退出登录
    logOut(){
      localStorage.clear()
      this.$router.push("/login")
    },
  },
  components:{Header},
}
</script>

<style scoped lang="less">
.me{
  width:100%;
  position:relative;

  .info{
    margin-top:45px;
    position:relative;
    background:#684E94;
    padding:0 20px 10px;

    &::after{
      content:'';
      display:block;
      clear:both;
    }

    //默认头像
    .info-image{
      float:left;
      width:60px;
      height:60px;
      border-radius:50%;
      overflow:hidden;

      .icon-direction-down{
        background:#E4E4E4;
        font-size:62px;
      }
    }

    .info-main{
      float:left;
      margin-top:5px;
      margin-left:20px;

      p{
        font-weight:1000;
        font-size:18px;
        color:#FFFFFF;
      }

      .phone{
        margin-top:10px;

        //手机号前的图标
        .phone-icon > .iconfont{
          font-size:14px;
          color:#FFFFFF;
        }

      }
    }

    .arrow-right{
      float:right;
      width:120px;
      height:60px;

      & > p{
        text-align:right;
        line-height:60px;

        .iconfont{
          color:#FFFFFF;
          font-size:30px;
        }
      }
    }
  }

  .finance{
    //给1px细线绝对定位用
    position:relative;
    width:100%;
    background:#FFFFFF;
    overflow:hidden;
    display:flex;

    //个人财务栏下方的1px细线
    &::after{
      content:'';
      position:absolute;
      z-index:200;
      left:0;
      right:0;
      bottom:0;
      background-color:#E4E4E4;
      height:1px;
      @media screen{
        @media (-webkit-device-pixel-ratio:2){
          transform:scaleY(0.5);
        }
        @media (-webkit-device-pixel-ratio:3){
          transform:scaleY(0.3);
        }
      }
    }

    .finance-item{
      //给1px细线绝对定位用
      position:relative;
      flex-grow:1;
      text-align:center;

      //余额栏和红包栏右边的1px细线
      &::after{
        content:'';
        position:absolute;
        z-index:200;
        top:0;
        right:0;
        bottom:0;
        background-color:#E4E4E4;
        width:1px;
        @media screen{
          @media (-webkit-device-pixel-ratio:2){
            transform:scaleX(0.5);
          }
          @media (-webkit-device-pixel-ratio:3){
            transform:scaleX(0.3);
          }
        }
      }

      .first-line{
        width:100%;
        font-size:16px;
        margin:10px 0 0;
      }

      .second-line{
        font-size:13px;
        margin:10px 0;
      }

      //元、个、根前的具体数据
      .item-data{
        font-size:32px;
        font-weight:1000;
      }

      .data1{
        color:#FF9900;
      }

      .data2{
        color:#FF5F3E;
      }

      .data3{
        color:#6AC20B;
      }
    }
  }

  .tool-bars{
    position:relative;
    margin-top:10px;
    margin-bottom:20px;
    background:#FFFFFF;

    &::before{
      content:'';
      position:absolute;
      z-index:200;
      left:0;
      right:0;
      top:0;
      height:1px;
      background-color:#E4E4E4;
      @media screen{
        @media (-webkit-device-pixel-ratio:2){
          transform:scaleY(0.5);
        }
        @media (-webkit-device-pixel-ratio:3){
          transform:scaleY(0.3);
        }
      }
    }

    //所有功能条共享同一个样式
    .bar{
      position:relative;
      display:flex;
      align-items:center;
      padding:10px 20px;

      &::after{
        content:'';
        position:absolute;
        z-index:200;
        left:0;
        right:0;
        bottom:0;
        height:1px;
        background-color:#E4E4E4;
        @media screen{
          @media (-webkit-device-pixel-ratio:2){
            transform:scaleY(0.5);
          }
          @media (-webkit-device-pixel-ratio:3){
            transform:scaleY(0.3);
          }
        }
      }

      //所有图标字体的颜色
      .iconfont{
        color:#684E94;

      }

      .bar-left{
        width:40px;
        height:100%;

        .iconfont{
          font-size:30px;
        }
      }

      .bar-name{
        width:50%;
        font-size:18px;
      }

      .bar-right{
        display:flex;
        position:absolute;
        right:30px;

        .iconfont{
          font-size:14px;
        }
      }

    }
  }
}
</style>
