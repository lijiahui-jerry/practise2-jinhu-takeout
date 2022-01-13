<template>
 <div class="me">
  <!-- 个人页面头部 -->
  <Header title="金狐外卖"></Header>
  <!-- 姓名、手机号 -->
  <div class="info">
   <div class="info-image">
    <i class="iconfont icon-direction-down"></i>
   </div>

   <div class="info-name">
    <p class="user-info-top">{{userInfo.name || '登录/注册'}}</p>
    <p>
     <span class="user-icon"><i class="iconfont icon-direction-down"></i></span><span class="icon-mobile">{{userInfo.phone || '暂无绑定手机号'}}</span>
    </p>
   </div>

   <span class="arrow-right">
    <i class="iconfont icon-direction-down"></i>
   </span>
  </div>

  <section class="profile_info_data border-1px">
   <ul class="info_data_list">
    <a href="javascript:" class="info_data_link">
     <span class="info_data_top"><span>{{userInfo.balance || '0.00'}}</span>元</span>
     <span class="info_data_bottom">余额</span>
    </a>
    <a href="javascript:" class="info_data_link">
     <span class="info_data_top"><span>{{redPacketCount}}</span>个</span>
     <span class="info_data_bottom">红包</span>
    </a>
    <a href="javascript:" class="info_data_link">
     <span class="info_data_top"><span>{{userInfo.points || '0'}}</span>根</span>
     <span class="info_data_bottom">狐毛</span>
    </a>
   </ul>
  </section>
  <section class="profile_my_order border-1px">
   <!-- 我的订单 -->
   <a href='javascript:' class="my_order">
    <span>
     <i class="iconfont icon-direction-down"></i>
    </span>
    <div class="my_order_div">
     <span>我的订单</span>
     <span class="my_order_icon">
      <i class="iconfont icon-direction-down"></i>
     </span>
    </div>
   </a>
   <!-- 我的餐车 -->
   <a href='javascript:' class="my_order">
    <span>
     <i class="iconfont icon-direction-down"></i>
    </span>
    <div class="my_order_div">
     <span>我的餐车</span>
     <span class="my_order_icon">
      <i class="iconfont icon-direction-down"></i>
     </span>
    </div>
   </a>
   <!-- 薅狐毛 -->
   <a href="javascript:" class="my_order">
    <span>
     <i class="iconfont icon-direction-down"></i>
    </span>
    <div class="my_order_div">
     <span>薅狐毛</span>
     <span class="my_order_icon">
      <i class="iconfont icon-direction-down"></i>
     </span>
    </div>
   </a>
  </section>
  <section class="profile_my_order border-1px">
   <!-- 退出登录 -->
   <a href="javascript:" class="my_order">
    <span>
     <i class="iconfont icon-direction-down"></i>
    </span>
    <div class="my_order_div">
     <span>退出登录</span>
     <span class="my_order_icon">
      <i class="iconfont icon-direction-down"></i>
     </span>
    </div>
   </a>
   <!-- 联系客服 -->
   <a href="javascript:" class="my_order">
    <span>
     <i class="iconfont icon-direction-down"></i>
    </span>
    <div class="my_order_div">
     <span>联系客服</span>
     <span class="my_order_icon">
      <i class="iconfont icon-direction-down"></i>
     </span>
    </div>
   </a>
  </section>
 </div>
</template>

<script>
import Header from "@/components/Header"
import {mapState} from "vuex"

export default {
  name:"Me",
  mounted(){
    if(localStorage.getItem('phoneNum')){
      this.$store.dispatch('getUserInfo')
    }
  },
  computed:{
    ...mapState({
      userInfo:(state)=>{
        if('17601355494'==localStorage.getItem('phoneNum')){
          return state.me.userInfo[0] || {}
        }else{
          return state.me.userInfo[1] || {}
        }
      },
    }),
    //计算红包个数
    redPacketCount(){
      /*不能这么写，因为不能确定redPacket这个数组是否undefined，length函数对未定义数组使用时会报错*/
      //return this.userInfo.redPacket.length || 0
      if(this.userInfo.redPacket) return this.userInfo.redPacket.length
      else return 0
    },
  },
  components:{Header},
}
</script>

<style scoped lang="less">
.me{
  width:100%;

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

    .info-image{
      float:left;
      width:60px;
      height:60px;
      border-radius:50%;
      overflow:hidden;
      vertical-align:top;

      .icon-direction-down{
        background:#E4E4E4;
        font-size:62px;
      }
    }

    .info-name{
      float:left;
      margin-top:8px;
      margin-left:15px;

      p{
        font-weight:700;
        font-size:18px;
        color:#FFFFFF;

        &.user-info-top{
          padding-bottom:8px;
        }

        .user-icon{
          display:inline-block;
          margin-left:-15px;
          margin-right:5px;
          width:20px;
          height:20px;

          .icon-mobile{
            font-size:30px;
            vertical-align:text-top;
          }
        }

        .icon-direction-down{
          font-size:14px;
          color:#FFFFFF;
        }
      }
    }

    .arrow-right{
      width:12px;
      height:12px;
      position:absolute;
      right:15px;
      top:40%;

      .icon-direction-down{
        color:#FFFFFF;
        font-size:5px;
      }
    }
  }

  .profile_info_data{
    position:relative;
    width:100%;
    background:#FFFFFF;
    overflow:hidden;

    &::before{
      content:'';
      position:absolute;
      z-index:200;
      left:0;
      bottom:0;
      width:100%;
      height:1px;
      background-color:#E4E4E4;
      transform:scaleY(0.5);
    }

    .info_data_list{

      &::after{
        content:'';
        display:block;
        clear:both;
      }

      .info_data_link{
        float:left;
        width:33%;
        text-align:center;
        border-right:1px solid #F1F1F1;

        .info_data_top{
          display:block;
          width:100%;
          font-size:14px;
          color:#333333;
          padding:15px 5px 10px;

          span{
            display:inline-block;
            font-size:30px;
            color:#FF9900;
            font-weight:700;
            line-height:30px;
          }
        }

        .info_data_bottom{
          display:inline-block;
          font-size:14px;
          color:#666666;
          font-weight:400;
          padding-bottom:10px;
        }

        &:nth-of-type(2){
          .info_data_top{
            span{
              color:#FF5F3E;
            }
          }
        }

        &:nth-of-type(3){
          border:0;

          .info_data_top{
            span{
              color:#6AC20B;
            }
          }
        }
      }
    }
  }

  .profile_my_order{
    position:relative;
    margin-top:10px;
    background:#FFFFFF;

    &::before{
      content:'';
      position:absolute;
      z-index:200;
      left:0;
      top:0;
      width:100%;
      height:1px;
      background-color:#E4E4E4;
    }

    .my_order{
      display:flex;
      align-items:center;
      padding-left:15px;

      & > span{
        display:flex;
        align-items:center;
        width:20px;
        height:20px;

        & > .iconfont{
          margin-left:-10px;
          font-size:30px;
        }

        .icon-direction-down{
          color:#684E94;
        }
      }

      .my_order_div{
        width:100%;
        border-bottom:1px solid #F1F1F1;
        padding:18px 10px 18px 0;
        font-size:16px;
        color:#333333;
        display:flex;
        justify-content:space-between;

        span{
          display:block;
        }

        .my_order_icon{
          width:10px;
          height:10px;

          .icon-direction-down{
            color:#BBBBBB;
            font-size:10px;
          }
        }
      }
    }
  }
}
</style>
