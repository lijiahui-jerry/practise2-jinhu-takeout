<template>
 <div>
  shopinfo
 </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name:"ShopInfo",
  computed:{
    ...mapState({
      info:(state)=>state.shop.info || {},
    }),
  },
}
</script>

<style scoped lang="less">

</style>
