<template>
 <footer class="navbar border-1px">
  <a class="navbar_item" @click="shiftPage('home')" :class="{active:pageFlag('home')}">
   <i class="iconfont icon-direction-down"></i>
   <span>首页</span>
  </a>

  <a class="navbar_item" @click="shiftPage('search')" :class="{active:pageFlag('search')}">
   <i class="iconfont icon-direction-down"></i>
   <span>搜索</span>
  </a>

  <a class="navbar_item" @click="shiftPage('order')" :class="{active:pageFlag('order')}">
   <i class="iconfont icon-direction-down"></i>
   <span>订单</span>
  </a>

  <a class="navbar_item" @click="shiftPage('me')" :class="{active:pageFlag('me')}">
   <i class="iconfont icon-direction-down"></i>
   <span>我</span>
  </a>
 </footer>
</template>

<script>
export default {
  name:"Footer",

  methods:{
    //页面切换
    shiftPage(path){
      this.$router.push(`/${path}`)
    },
    //判断当前页，控制active样式
    pageFlag(path){
      return this.$route.path.indexOf(path)==1
    },
  },
}
</script>

<style scoped lang="less">
//根据设备的dpr调整px，使1px细线在不同设备上的效果相同
//dpr为2时
@media only screen and (-webkit-device-pixel-ratio:2){
  .border-1px::before{
    transform:scaleY(0.5);
  }
}

//dpr为3时
@media only screen and (-webkit-device-pixel-ratio:3){
  .border-1px::before{
    transform:scaleY(0.3);
  }
}

.navbar{
  position:fixed;
  z-index:100;
  left:0;
  right:0;
  bottom:0;
  background-color:#FFFFFF;
  width:100%;
  height:50px;
  display:flex;

  //清除浮动
  &::after{
    content:'';
    display:block;
    clear:both;
  }

  //1px细线
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

  .navbar_item{
    display:flex;
    //使flex的元素平分所占的空间，默认为0时不平分
    flex:1;
    flex-direction:column;
    align-items:center;
    margin:auto;
    color:#999999;
    text-decoration:none;

    //当前页的标识
    &.active{
      color:#02A774;
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