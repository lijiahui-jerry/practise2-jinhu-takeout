<template>
 <!-- 导航 -->
 <nav class="msite_nav">
  <div class="swiper-container">
   <div class="swiper-wrapper">
    <div class="swiper-slide">
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/1.jpg">
      </div>
      <span>甜品饮品</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/2.jpg">
      </div>
      <span>商超便利</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/3.jpg">
      </div>
      <span>美食</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/4.jpg">
      </div>
      <span>简餐</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/5.jpg">
      </div>
      <span>新店特惠</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/6.jpg">
      </div>
      <span>准时达</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/7.jpg">
      </div>
      <span>预订早餐</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/8.jpg">
      </div>
      <span>土豪推荐</span>
     </a>
    </div>
    <div class="swiper-slide">
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/9.jpg">
      </div>
      <span>甜品饮品</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/10.jpg">
      </div>
      <span>商超便利</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/11.jpg">
      </div>
      <span>美食</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/12.jpg">
      </div>
      <span>简餐</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/13.jpg">
      </div>
      <span>新店特惠</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/14.jpg">
      </div>
      <span>准时达</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/1.jpg">
      </div>
      <span>预订早餐</span>
     </a>
     <a href="javascript:" class="link_to_food">
      <div class="food_container">
       <img src="./images/2.jpg">
      </div>
      <span>土豪推荐</span>
     </a>
    </div>
   </div>
   <!-- 分页器 -->
   <div class="swiper-pagination"></div>
  </div>
 </nav>
</template>

<script>
export default {
  name:"Navigation",
}
</script>

<style scoped lang="less">
.msite_nav{
  position:relative;
  margin-top:45px;
  height:200px;
  background:#FFFFFF;

  &::before{
    content:'';
    position:absolute;
    z-index:200;
    left:0;
    bottom:0;
    width:100%;
    height:1px;
    background-color:#E4E4E4;
    transform:scaleY(0.5);
  }

  .swiper-container{
    width:100%;
    height:100%;

    .swiper-wrapper{
      width:100%;
      height:100%;

      .swiper-slide{
        display:flex;
        justify-content:center;
        align-items:flex-start;
        flex-wrap:wrap;

        .link_to_food{
          width:25%;

          .food_container{
            display:block;
            width:100%;
            text-align:center;
            padding-bottom:10px;
            font-size:0;

            img{
              display:inline-block;
              width:50px;
              height:50px;
            }
          }

          span{
            display:block;
            width:100%;
            text-align:center;
            font-size:13px;
            color:#666666;
          }
        }
      }
    }

    .swiper-pagination{
      & > span{
        &.swiper-pagination-bullet-active{
          background:#02A774;
        }
      }
    }
  }
}
</style>