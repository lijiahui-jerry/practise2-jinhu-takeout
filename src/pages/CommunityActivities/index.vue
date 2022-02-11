<template>
 <div class="community-activities">
  <Header class="header" title="社团活动" left=true></Header>
  <div class="content">
   <div>

   </div>

  </div>
 </div>
</template>

<script>
import Header from "@/components/Header"

export default {
  name:"CommunityActivities",
  components:{Header},
}
</script>

<style scoped lang="less">
.community-activities{
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
