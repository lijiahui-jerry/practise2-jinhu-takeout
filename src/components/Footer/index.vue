<template>
 <!-- 底部栏 -->
 <footer class="bottom-navbar">
  <div class="navbar_item" @click="routerGo('home')" :class="{active:pageFlag('home')}">
   <i class="iconfont icon-shouye"></i>
   <span>首页</span>
  </div>
  <div class="navbar_item" @click="routerGo('search')" :class="{active:pageFlag('search')}">
   <i class="iconfont icon-sousuo"></i>
   <span>搜索</span>
  </div>
  <div class="navbar_item" @click="routerGo('order')" :class="{active:pageFlag('order')}">
   <i class="iconfont icon-dingdan"></i>
   <span>订单</span>
  </div>
  <div class="navbar_item" @click="routerGo('me')" :class="{active:pageFlag('me')}">
   <i class="iconfont icon-sharpicons_Wolf"></i>
   <span>我</span>
  </div>
 </footer>
</template>

<script>
export default {
  name:"Footer",
  methods:{
    //判断当前页，控制active样式
    pageFlag(path){
      return this.$route.path.indexOf(path)==1
    },
    //路由跳转
    routerGo(path){
      this.$router.push(path)
    },
  },
}
</script>

<style scoped lang="less">
.bottom-navbar{
  position:fixed;
  z-index:200;
  left:0;
  right:0;
  bottom:0;
  background-color:#FFFFFF;
  height:50px;
  display:flex;

  &::after{
    content:'';
    display:block;
    clear:both;
  }

  //底部导航栏上方的1px细线
  &::before{
    content:'';
    position:absolute;
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

  .navbar_item{
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:center;
    margin:auto;
    color:#999999;

    //当前页的标识
    &.active{
      color:#9254DE;
    }

    .iconfont{
      font-size:22px;
    }

    span{
      font-size:14px;
      margin-top:2px;
    }
  }
}
</style>
