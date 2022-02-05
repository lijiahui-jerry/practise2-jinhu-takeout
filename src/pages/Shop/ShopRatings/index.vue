<template>
 <div class="ratings" ref="ratings">
  <div class="ratings-content">
   <div class="overview">
    <div class="overview-left">
     <h1 class="score">{{info.score}}</h1>
     <div class="title">综合评分</div>
     <div class="rank">高于周边商家99%</div>
    </div>
    <div class="overview-right">
     <div class="score-wrapper">
      <span class="title">服务态度</span>
      <Star :rating="info.serviceScore" size="36"/>
      <span class="score">{{info.serviceScore}}</span>
     </div>
     <div class="score-wrapper">
      <span class="title">商品评分</span>
      <Star :rating="info.foodScore" size="36"/>
      <span class="score">{{info.foodScore}}</span>
     </div>
     <div class="delivery-wrapper">
      <span class="title">送达时间</span>
      <span class="delivery">{{info.deliveryTime}}分钟</span>
     </div>
    </div>
   </div>

   <div class="split"></div>

   <div class="ratingselect">
    <div class="rating-type">
     <span class="block positive" :class="{active: 0==showRatingType}" @click="toggleRatingType(0)">
      全部<span class="count">{{ratings.length}}</span>
     </span>
     <span class="block positive" :class="{active: 1==showRatingType}" @click="toggleRatingType(1)">
      满意<span class="count">{{thumbsUpCount}}</span>
     </span>
     <span class="block negative" :class="{active: 2==showRatingType}" @click="toggleRatingType(2)">
      不满意<span class="count">{{thumbsDownCount}}</span>
     </span>
    </div>
    <div class="switch" :class="{on: ifShowRatingsWithContent}" @click="toggleIfShowRatingsWithContent()">
     <span class="iconfont icon-direction-up"></span>
     <span class="text">只看有内容的评价</span>
    </div>
   </div>

   <div class="rating-wrapper">
    <ul>
     <li class="rating-item" v-for="(rating, index) in filteredRatings" :key="index">
      <div class="avatar">
       <img width="28" height="28" :src="rating.avatar">
      </div>
      <div class="content">
       <h1 class="name">{{rating.username}}</h1>
       <div class="star-wrapper">
        <Star :rating="rating.score" size="24"/>
        <span class="delivery">{{rating.deliveryTime}}</span>
       </div>
       <p class="text">{{rating.text}}</p>
       <div class="recommend">
        <span class="iconfont" :class="rating.thumbsUp ? 'icon-direction-up' : 'icon-direction-down'"></span>
        <span class="item" v-for="(item, index) in rating.recommend" :key="index">{{item}}</span>
       </div>
       <div class="time">{{rating.rateTime}}</div>
      </div>
     </li>
    </ul>
   </div>
  </div>
 </div>
</template>

<script>
import Star from "@/components/Star"
import {mapState,mapGetters} from "vuex"
import BScroll from "better-scroll"

export default {
  name:"ShopRatings",
  data(){
    return {
      ifShowRatingsWithContent:true,
      //要看的评价类型：0为全部，1为好评，2为差评
      showRatingType:0,
    }
  },
  methods:{
    //切换查看的评价类型
    toggleRatingType(type){
      this.showRatingType=type
      /* 此处必须借助nextTick，使refresh等待DOM加载后同步完成，
         直接refresh的话会因为DOM没有加载完成而报错 */
      this.$nextTick(()=>{this.bscroll.refresh()})
    },
    //切换是否只看有内容的评价
    toggleIfShowRatingsWithContent(){
      this.ifShowRatingsWithContent= !this.ifShowRatingsWithContent
      this.$nextTick(()=>{this.bscroll.refresh()})
    },
  },
  mounted(){
    this.$store.dispatch('getShopRatings',()=>{
      this.$nextTick(()=>{
        this.bscroll=new BScroll(this.$refs.ratings,{click:true})
      })
    })
  },
  computed:{
    //过滤评价数组
    filteredRatings(){
      const {ratings,ifShowRatingsWithContent,showRatingType}=this
      if(ifShowRatingsWithContent && 1==showRatingType){
        //好评且有评论内容的
        return ratings.filter((rating)=>rating.text.length>0 && rating.thumbsUp)
      }else if(ifShowRatingsWithContent && 2==showRatingType){
        //差评且有评论内容的
        return ratings.filter((rating)=>rating.text.length>0 && !rating.thumbsUp)
      }else if(!ifShowRatingsWithContent && 1==showRatingType){
        //好评但没评论内容的
        return ratings.filter((rating)=>rating.thumbsUp)
      }else if(!ifShowRatingsWithContent && 2==showRatingType){
        //差评但没评论内容的
        return ratings.filter((rating)=>!rating.thumbsUp)
      }else if(ifShowRatingsWithContent && 0==showRatingType){
        //全部有评论内容的
        return ratings.filter((rating)=>rating.text.length>0)
      }else{
        //全部评论
        return ratings
      }
    },
    //根据评论数及好评数计算差评数
    thumbsDownCount(){
      return this.ratings.length-this.thumbsUpCount
    },
    ...mapState({
      info:(state)=>state.shop.info || {},
      ratings:(state)=>state.shop.ratings || [],
    }),
    ...mapGetters(['thumbsUpCount']),
  },
  components:{Star},
}
</script>

<style scoped lang="less">
.ratings{
  position:absolute;
  top:230px;
  bottom:0;
  left:0;
  width:100vw;
  overflow:hidden;
  background:#FFFFFF;

  .overview{
    display:flex;
    padding:18px 0;

    .overview-left{
      flex:0 0 137px;
      padding:6px 0;
      width:137px;
      border-right:1px solid rgba(7, 17, 27, 0.1);
      text-align:center;
      @media only screen and  (max-width:320px){
        flex:0 0 120px;
        width:120px;
      }

      .score{
        margin-bottom:6px;
        line-height:28px;
        font-size:24px;
        color:purple;
      }

      .title{
        margin-bottom:8px;
        line-height:12px;
        font-size:12px;
        color:rgb(7, 17, 27);
      }

      .rank{
        line-height:10px;
        font-size:10px;
        color:rgb(147, 153, 159);
      }
    }

    .overview-right{
      flex:1;
      padding:6px 0 6px 24px;
      @media only screen and  (max-width:320px){
        padding-left:6px;
      }

      .score-wrapper{
        margin-bottom:8px;
        font-size:0;

        .title{
          display:inline-block;
          line-height:18px;
          vertical-align:top;
          font-size:12px;
          color:rgb(7, 17, 27);
        }

        .star{
          display:inline-block;
          margin:0 12px;
          vertical-align:top;
        }

        .score{
          display:inline-block;
          line-height:18px;
          vertical-align:top;
          font-size:12px;
          color:purple;
        }
      }

      .delivery-wrapper{
        font-size:0;

        .title{
          line-height:18px;
          font-size:12px;
          color:rgb(7, 17, 27);
        }

        .delivery{
          margin-left:12px;
          font-size:12px;
          color:rgb(147, 153, 159);
        }
      }
    }
  }

  .split{
    width:100%;
    height:16px;
    border-top:1px solid rgba(7, 17, 27, .1);
    border-bottom:1px solid rgba(7, 17, 27, .1);
    background:#F3F5F7;
  }

  .ratingselect{
    .rating-type{
      padding:18px 0;
      margin:0 18px;
      @media only screen and (-webkit-device-pixel-ratio:2 ){
        .border-1px{
          &::before{
            transform:scaleY(.5);
          }
        }
      }

      @media only screen and (-webkit-device-pixel-ratio:3 ){
        .border-1px{
          &::before{
            transform:scaleY(.333333);
          }
        }
      }

      font-size:0;

      .block{
        display:inline-block;
        padding:8px 12px;
        margin-right:8px;
        line-height:16px;
        border-radius:1px;
        font-size:12px;
        color:rgb(77, 85, 93);
        background:rgba(77, 85, 93, .2);

        &.active{
          background:green;
          color:#FFFFFF;
        }

        .count{
          margin-left:2px;
          font-size:8px;
        }
      }
    }

    .switch{
      padding:12px 18px;
      line-height:24px;
      border-bottom:1px solid rgba(7, 17, 27, .1);
      color:rgb(147, 153, 159);
      font-size:0;

      &.on{
        .icon-direction-up{
          color:green;
        }
      }

      .icon-direction-up{
        display:inline-block;
        vertical-align:top;
        margin-right:4px;
        font-size:24px;
      }

      .text{
        display:inline-block;
        vertical-align:top;
        font-size:12px;
      }

    }
  }

  .rating-wrapper{
    padding:0 18px;
    overflow:hidden;

    .rating-item{
      display:flex;
      padding:18px 0;
      position:relative;

      &::after{
        content:'';
        display:block;
        left:0;
        bottom:0;
        right:0;
        height:1px;
        background-color:rgba(7, 17, 27, 0.1);
        @media screen{
          @media (-webkit-device-pixel-ratio:2){
            transform:scaleY(0.5);
          }
          @media (-webkit-device-pixel-ratio:3){
            transform:scaleY(0.3);
          }
        }
      }

      .avatar{
        flex:0 0 28px;
        width:28px;
        margin-right:12px;

        img{
          border-radius:50%;
        }
      }

      .content{
        position:relative;
        flex:1;

        .name{
          margin-bottom:4px;
          line-height:12px;
          font-size:10px;
          color:rgb(7, 17, 27);
        }

        .star-wrapper{
          margin-bottom:6px;
          font-size:0;

          .star{
            display:inline-block;
            margin-right:6px;
            vertical-align:top;
          }

          .delivery{
            display:inline-block;
            vertical-align:top;
            line-height:12px;
            font-size:10px;
            color:rgb(147, 153, 159);
          }
        }

        .text{
          margin-bottom:8px;
          line-height:18px;
          color:rgb(7, 17, 27);
          font-size:12px;
        }

        .recommend{
          line-height:16px;
          font-size:0;

          .icon-direction-up, .icon-direction-down, .item{
            display:inline-block;
            margin:0 8px 4px 0;
            font-size:9px;
          }

          .icon-direction-up{
            color:purple;
          }

          .icon-direction-down{
            color:rgb(147, 153, 159);
          }

          .item{
            padding:0 6px;
            border:1px solid rgba(7, 17, 27, 0.1);
            border-radius:1px;
            color:rgb(147, 153, 159);
            background:#FFFFFF;
          }
        }

        .time{
          position:absolute;
          top:0;
          right:0;
          line-height:12px;
          font-size:10px;
          color:rgb(147, 153, 159);
        }
      }
    }
  }
}
</style>
