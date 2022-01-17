<template>
 <div class="shop-header">
  <div class="back" @click="$router.back()">
   <i class="iconfont icon-direction-down"></i>
  </div>
  <div class="brief">
   <div class="avatar">
    <img :src="info.avatar">
   </div>
   <div class="header-content">
    <h2 class="content-title">
     <span class="content-tag">
      <span class="mini-tag">品牌</span>
     </span>
     <span class="content-name">{{info.name}}</span>
     <i class="content-icon"></i>
    </h2>
    <div class="shop-message">
     <span class="shop-message-detail">{{info.score}}</span>
     <span class="shop-message-detail">月售{{info.sellCount}}单</span>
     <span class="shop-message-detail">
      {{info.description}}
      <span>约{{info.deliveryTime}}分钟</span>
     </span>
     <span class="shop-message-detail">距离{{info.distance}}</span>
    </div>
   </div>
  </div>

  <div class="shop-header-discounts">
   <div class="discounts-left">
    <div class="activity">
     <span class="content-tag">
      <span class="mini-tag">{{}}</span>
     </span>
     <span class="activity-content">{{}}</span>
    </div>
   </div>
   <div class="discounts-right">
    {{}}个优惠
   </div>
  </div>

  <transition name="fade">
   <div class="shop-brief-modal">
    <div class="brief-modal-content">
     <h2 class="content-title">
      <span class="content-tag">
       <span class="mini-tag">品牌</span>
      </span>
      <span class="content-name">{{}}</span>
     </h2>
     <ul class="brief-modal-msg">
      <li>
       <h3>{{}}</h3>
       <p>评分</p>
      </li>
      <li>
       <h3>{{}}单</h3>
       <p>月售</p>
      </li>
      <li>
       <h3>{{}}</h3>
       <p>约{{}}分钟</p>
      </li>
      <li>
       <h3>{{}}元</h3>
       <p>配送费用</p>
      </li>
      <li>
       <h3>{{}}</h3>
       <p>距离</p>
      </li>
     </ul>
     <h3 class="brief-modal-title">
      <span>公告</span>
     </h3>
     <div class="brief-modal-notice">
      {{}}
     </div>
     <div class="mask-footer">
      <span class="iconfont icon-direction-down"></span>
     </div>
    </div>
    <div class="brief-modal-cover"></div>
   </div>
  </transition>

  <transition name="fade">
   <div class="activity-sheet">
    <div class="activity-sheet-content">
     <h2 class="activity-sheet-title">优惠活动</h2>
     <ul class="list">
      <li class="activity-item">
       <span class="content-tag">
        <span class="mini-tag">{{}}</span>
       </span>
       <span class="activity-content">{{}}</span>
      </li>
     </ul>
     <div class="activity-sheet-close">
      <span class="iconfont icon-direction-down"></span>
     </div>
    </div>
    <div class="activity-sheet-cover"></div>
   </div>
  </transition>
 </div>
</template>


<script>
export default {
  name:"ShopHeader",
  props:{
    info:{},
  },
}
</script>

<style scoped lang="less">
.shop-header{
  width:100%;
  position:relative;
  background:#FFFFFF;
  color:#FFFFFF;
  overflow:hidden;

  .back{
    position:absolute;
    top:0;
    left:0;
    padding:10px 0 10px 5px;
    color:red;

    //返回按钮的透明背景色
    &::before{
      content:"";
      position:absolute;
      left:0;
      right:0;
      top:0;
      bottom:0;
      background-color:rgba(213, 192, 207, .3);
    }

    & > .iconfont{
      font-size:40px;
    }
  }
}
</style>
