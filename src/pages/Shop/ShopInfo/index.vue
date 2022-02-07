<template>
 <div class="shop-info">
  <div class="info-content">
   <section class="section">
    <h3 class="section-title">配送信息</h3>
    <div class="delivery">
     <div>
      <span class="delivery-icon">{{info.description}}</span>
      <span>由商家配送提供配送，约{{info.deliveryTime}}分钟送达，距离{{info.distance}}</span>
     </div>
     <div class="delivery-money">配送费￥{{info.deliveryPrice}}</div>
    </div>
   </section>

   <div class="split"></div>

   <section class="section">
    <h3 class="section-title">活动与服务</h3>
    <div class="activity">
     <div class="activity-item activity" v-for="(support, index) in info.supports" :key="index">
      <span class="content-tag">
       <span class="mini-tag">{{support.name}}</span>
      </span>
      <span class="activity-content">{{support.content}}</span>
     </div>
    </div>
   </section>

   <div class="split"></div>

   <section class="section">
    <h3 class="section-title">商家实景</h3>
    <div class="pic-wrapper">
     <ul class="pic-list" ref="pics">
      <li class="pic-item" v-for="(pic, index) in info.pics" :key="index">
       <img width="120" height="90" :src="pic"/>
      </li>
     </ul>
    </div>
   </section>

   <div class="split"></div>

   <section class="section">
    <h3 class="section-title">商家信息</h3>
    <ul class="detail">
     <li><span class="bold">品类</span> <span>{{info.category}}</span></li>
     <li><span class="bold">商家电话</span> <span>{{info.phone}}</span></li>
     <li><span class="bold">地址</span> <span>{{info.address}}</span></li>
     <li><span class="bold">营业时间</span> <span>{{info.workTime}}</span></li>
    </ul>
   </section>
  </div>
 </div>
</template>

<script>
import {mapState} from "vuex"
import BScroll from "better-scroll"

export default {
  name:"ShopInfo",
  mounted(){
    if(!this.info.pics) return
    this._newBScroll()
  },
  watch:{
    info(){
      this.$nextTick(()=>{
        this._newBScroll()
      })
    },
  },
  methods:{
    _newBScroll(){
      const liWidth=120
      const liMarginRight=6
      const picCount=this.info.pics.length
      this.$refs.pics.style.width=(liWidth+liMarginRight)*picCount-liMarginRight+'px'

      new BScroll('.shop-info')
      new BScroll('.pic-wrapper',{scrollX:true})
    },
  },
  computed:{
    ...mapState({
      info:(state)=>state.shop.info || {},
    }),
  },
}
</script>

<style scoped lang="less">
.shop-info{
  position:absolute;
  top:184px;
  bottom:0;
  left:0;
  width:100vw;
  background:#FFFFFF;
  overflow:hidden;

  .section{
    padding:16px 14px 14px;
    font-size:16px;
    background-color:#FFFFFF;
    color:#666666;
    border-bottom:1px solid #EEEEEE;
    position:relative;

    .section-title{
      color:#000000;
      font-weight:700;
      line-height:16px;

      & > .iconfont{
        float:right;
        color:#CCCCCC;
      }
    }

    .delivery{
      margin-top:16px;
      font-size:13px;
      line-height:18px;

      .delivery-icon{
        width:55px;
        font-size:11px;
        margin-right:10px;
        display:inline-block;
        text-align:center;
        color:#FFFFFF;
        background-color:#0097FF;
        padding:1px 0;
        border-radius:4px;
      }

      .delivery-money{
        margin-top:5px;
      }
    }

    .activity{
      margin-top:16px;

      .activity-item{
        margin-bottom:12px;
        display:flex;
        font-size:13px;
        align-items:center;

        &.activity{
          .content-tag{
            background-color:#684E94;
          }
        }

        .content-tag{
          display:inline-block;
          border-radius:2px;
          width:36px;
          height:18px;
          margin-right:10px;
          color:#FFFFFF;
          font-style:normal;
          position:relative;

          .mini-tag{
            position:absolute;
            left:0;
            top:0;
            right:-100%;
            bottom:-100%;
            font-size:24px;
            transform:scale(.5);
            transform-origin:0 0;
            display:flex;
            align-items:center;
            justify-content:center;
          }
        }
      }
    }

    .pic-wrapper{
      margin-top:16px;

      .pic-list{
        overflow:hidden;
        white-space:nowrap;
        font-size:0;

        .pic-item{
          display:inline-block;
          margin-right:6px;
          width:120px;
          height:90px;

          &:last-child{
            margin-right:0;
          }
        }
      }
    }

    .detail{
      margin-bottom:-16px;

      & > li{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-right:-10px;
        padding:16px 12px 16px 0;
        line-height:16px;
        position:relative;
        border:none;

        &:after{
          content:'';
          position:absolute;
          left:0;
          bottom:0;
          width:100%;
          height:1px;
          background-color:#DDDDDD;
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
        }

        font-size:13px;

        & > .bold{
          font-weight:1000;
          color:#333333;
        }

        &:last-child{
          border:none;
        }
      }
    }
  }

  .split{
    width:100%;
    height:16px;
    border-top:1px solid rgba(7, 17, 27, 0.1);
    border-bottom:1px solid rgba(7, 17, 27, 0.1);
    background:#F3F5F7;
  }
}
</style>
