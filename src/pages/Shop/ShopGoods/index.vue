<template>
 <div>
  shopgoods
 </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name:"ShopGoods",
  computed:{
    ...mapState({
      goods:(state)=>state.shop.goods || [],
    }),
  },
}
</script>

<style scoped lang="less">

</style>
