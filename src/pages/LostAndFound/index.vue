<template>
 <div class="lost-and-found">
  <Header class="header" title="失物招领" left=true></Header>
  <div class="content">
   <video width="320" height="240" controls="controls">
<!--    <source src="movie.mp4" type="video/mp4" />-->
<!--    <source src="movie.ogg" type="video/ogg" />-->
<!--    <source src="movie.webm" type="video/webm" />-->
    <object data="movie.mp4" width="320" height="240">
     <embed src="movie.swf" width="320" height="240" />
    </object>
   </video>

  </div>
 </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  name:"LostAndFound",
  components:{Header}
}
</script>

<style scoped lang="less">
.lost-and-found{
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
