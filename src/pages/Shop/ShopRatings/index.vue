<template>
 <div>
  shoprating
 </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name:"ShopRatings",
  computed:{
    ...mapState({
      ratings:(state)=>state.shop.ratings || [],
    }),
  },
}
</script>

<style scoped lang="less">

</style>
