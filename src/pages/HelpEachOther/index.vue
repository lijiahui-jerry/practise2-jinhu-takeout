<template>
 <div class="help-each-other">
  <Header class="header" title="互帮互助" left=true></Header>
  <div class="content">

   printService.jpg
  </div>
 </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  name:"HelpEachOther",
  components:{Header}
}
</script>

<style scoped lang="less">
.help-each-other{
  width:100vw;
  height:100vh;
  position:relative;

  .content{
    position:absolute;
    top:45px;
    bottom:0;
    left:0;
    right:0;

  }
}
</style>
