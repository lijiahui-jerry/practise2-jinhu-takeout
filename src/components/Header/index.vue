<template>
 <!-- 头部模板 -->
 <header>
  <slot name="left"></slot>
  <span class="title-wrapper"><span class="title-content">{{title}}</span></span>
  <slot name="right"></slot>
 </header>
</template>

<script>
export default {
  name:"Header",
  props:{
    title:String,
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
      display:block;
    }
  }
}
</style>