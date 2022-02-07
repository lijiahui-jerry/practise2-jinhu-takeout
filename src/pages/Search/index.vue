<template>
 <div class="search">
   <!-- 搜索页头部 -->
   <Header title="搜索"></Header>

   <form class="search_form" action="#">
    <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
    <input type="submit" name="submit" class="search_submit" >
   </form>
 </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  methods:{
  },
  name:"Search",
  components:{Header},

}
</script>

<style scoped lang="less">
.search{
  width:100%;

  .search_form{
    margin-top:45px;
    background-color:#FFFFFF;
    padding:12px 8px;

    &::after{
      content:'';
      display:block;
      clear:both;
    }

    input{
      height:35px;
      padding:0 4px;
      border-radius:2px;
      font-weight:bold;
      outline:none;

      &.search_input{
        float:left;
        width:79%;
        border:4px solid #F2F2F2;
        font-size:14px;
        color:#333333;
        background-color:#F2F2F2;
      }

      &.search_submit{
        float:right;
        width:18%;
        border:4px solid #02A774;
        font-size:16px;
        color:#FFFFFF;
        background-color:#02A774;
      }
    }
  }
}
</style>
