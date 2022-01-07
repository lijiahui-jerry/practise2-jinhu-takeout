<template>
 <div class="shop_container">
  <ul class="shop_list">
   <li class="shop_li border-1px">
    <a>
     <div class="shop_left">
      <img class="shop_img" src="./images/shop/1.jpg">
     </div>
     <div class="shop_right">
      <section class="shop_detail_header">
       <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
       <ul class="shop_detail_ul">
        <li class="supports">保</li>
        <li class="supports">准</li>
        <li class="supports">票</li>
       </ul>
      </section>
      <section class="shop_rating_order">
       <section class="shop_rating_order_left">
        <div class="star star-24">
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item half"></span>
         <span class="star-item off"></span>
        </div>
        <div class="rating_section">
         3.6
        </div>
        <div class="order_section">
         月售106单
        </div>
       </section>
       <section class="shop_rating_order_right">
        <span class="delivery_style delivery_right">硅谷专送</span>
       </section>
      </section>
      <section class="shop_distance">
       <p class="shop_delivery_msg">
        <span>¥20起送</span>
        <span class="segmentation">/</span>
        <span>配送费约¥5</span>
       </p>
      </section>
     </div>
    </a>
   </li>
   <li class="shop_li border-1px">
    <a>
     <div class="shop_left">
      <img class="shop_img" src="./images/shop/2.jpg">
     </div>
     <div class="shop_right">
      <section class="shop_detail_header">
       <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
       <ul class="shop_detail_ul">
        <li class="supports">保</li>
        <li class="supports">准</li>
        <li class="supports">票</li>
       </ul>
      </section>
      <section class="shop_rating_order">
       <section class="shop_rating_order_left">
        <div class="star star-24">
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item off"></span>
        </div>
        <div class="rating_section">
         4.1
        </div>
        <div class="order_section">
         月售106单
        </div>
       </section>
       <section class="shop_rating_order_right">
        <span class="delivery_style delivery_right">硅谷专送</span>
       </section>
      </section>
      <section class="shop_distance">
       <p class="shop_delivery_msg">
        <span>¥20起送</span>
        <span class="segmentation">/</span>
        <span>配送费约¥5</span>
       </p>
      </section>
     </div>
    </a>
   </li>
   <li class="shop_li border-1px">
    <a>
     <div class="shop_left">
      <img class="shop_img" src="./images/shop/3.jpg">
     </div>
     <div class="shop_right">
      <section class="shop_detail_header">
       <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
       <ul class="shop_detail_ul">
        <li class="supports">保</li>
        <li class="supports">准</li>
        <li class="supports">票</li>
       </ul>
      </section>
      <section class="shop_rating_order">
       <section class="shop_rating_order_left">
        <div class="star star-24">
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item off"></span>
         <span class="star-item off"></span>
        </div>
        <div class="rating_section">
         3.2
        </div>
        <div class="order_section">
         月售106单
        </div>
       </section>
       <section class="shop_rating_order_right">
        <span class="delivery_style delivery_right">硅谷专送</span>
       </section>
      </section>
      <section class="shop_distance">
       <p class="shop_delivery_msg">
        <span>¥20起送</span>
        <span class="segmentation">/</span>
        <span>配送费约¥5</span>
       </p>
      </section>
     </div>
    </a>
   </li>
   <li class="shop_li border-1px">
    <a>
     <div class="shop_left">
      <img class="shop_img" src="./images/shop/4.jpg">
     </div>
     <div class="shop_right">
      <section class="shop_detail_header">
       <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
       <ul class="shop_detail_ul">
        <li class="supports">保</li>
        <li class="supports">准</li>
        <li class="supports">票</li>
       </ul>
      </section>
      <section class="shop_rating_order">
       <section class="shop_rating_order_left">
        <div class="star star-24">
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item on"></span>
         <span class="star-item half"></span>
         <span class="star-item off"></span>
        </div>
        <div class="rating_section">
         3.6
        </div>
        <div class="order_section">
         月售106单
        </div>
       </section>
       <section class="shop_rating_order_right">
        <span class="delivery_style delivery_right">硅谷专送</span>
       </section>
      </section>
      <section class="shop_distance">
       <p class="shop_delivery_msg">
        <span>¥20起送</span>
        <span class="segmentation">/</span>
        <span>配送费约¥5</span>
       </p>
      </section>
     </div>
    </a>
   </li>
  </ul>
 </div>
</template>

<script>
export default {
  name:"ShopList",
}
</script>

<style scoped lang="less">
.shop_container{
  padding-bottom:50px;

  .shop_list{
    .shop_li{
      position:relative;
      width:100%;

      &::before{
        content:'';
        position:absolute;
        z-index:200;
        left:0;
        bottom:0;
        width:100%;
        height:1px;
        background-color:#F1F1F1;
        transform:scaleY(0.5);
      }

      & > a{
        display:block;
        box-sizing:border-box;
        padding:15px 8px;
        width:100%;

        &::after{
          content:'';
          display:block;
          clear:both;
        }

        .shop_left{
          float:left;
          box-sizing:border-box;
          width:23%;
          height:75px;
          padding-right:10px;

          .shop_img{
            display:block;
            width:100%;
            height:100%;
          }
        }

        .shop_right{
          float:right;
          width:77%;

          .shop_detail_header{
            width:100%;

            &::after{
              content:'';
              display:block;
              clear:both;
            }

            .shop_title{
              float:left;
              width:140px;
              color:#333333;
              font-size:16px;
              line-height:16px;
              font-weight:700;

              &::before{
                content:'鍝佺墝';
                display:inline-block;
                font-size:11px;
                line-height:11px;
                color:#333333;
                background-color:#FFD930;
                padding:2px 2px;
                border-radius:2px;
                margin-right:5px;
              }
            }

            .shop_detail_ul{
              float:right;
              margin-top:3px;

              .supports{
                float:left;
                font-size:10px;
                color:#999999;
                border:1px solid #F1F1F1;
                padding:0 2px;
                border-radius:2px;
              }
            }
          }

          .shop_rating_order{
            width:100%;
            margin-top:18px;
            margin-bottom:8px;

            &::after{
              content:'';
              display:block;
              clear:both;
            }

            .shop_rating_order_left{
              float:left;
              color:#FF9A0D;

              .star{
                float:left;
                font-size:0px;

                .star-item{
                  display:inline-block;
                  background-repeat:no-repeat;
                  width:15px;
                  height:15px;
                  background-position:center center;
                  background-size:100% 100%;
                }

                &.star-48{
                  .star-item{
                    width:20px;
                    height:20px;
                    margin-right:22px;
                    background-size:20px 20px;

                    &:last-child{
                      margin-right:0;
                    }

                    &.on{
                      //background-image:url(@img48);

                      @media screen{
                        @media (-webkit-device-pixel-ratio:2){
                          background-image:url("./images/stars/star48_on@2x.png");
                        }
                        @media (-webkit-device-pixel-ratio:3){
                          background-image:url("./images/stars/star48_on@3x.png");
                        }
                      }
                    }
                  }
                }

                &.star-36{
                  .star-item{
                    &:last-child{
                      margin-right:0;
                    }

                    &.on{
                      //background-image:url(@img36);
                      @media screen{
                        @media (-webkit-device-pixel-ratio:2){
                          background-image:url("./images/stars/star36_on@2x.png");
                        }
                        @media (-webkit-device-pixel-ratio:3){
                          background-image:url("./images/stars/star36_on@3x.png");
                        }
                      }
                    }

                  }
                }

                &.star-24{
                  .star-item{
                    &:last-child{
                      margin-right:0;
                    }

                    &.on{
                      //background-image:url(@img24);
                      @media screen{
                        @media (-webkit-device-pixel-ratio:2){
                          background-image:url("./images/stars/star24_half@2x.png");
                        }
                        @media (-webkit-device-pixel-ratio:3){
                          background-image:url("./images/stars/star24_half@3x.png");
                        }
                      }
                    }
                  }
                }
              }

              .rating_section{
                width:100px;
              }

              .order_section{
                float:left;
                font-size:10px;
                color:#666666;
                transform:scale(0.8);
              }
            }

            .shop_rating_order_right{
              float:right;
              font-size:0;

              .delivery_style{
                transform-origin:35px 0;
                transform:scale(0.7);
                display:inline-block;
                font-size:12px;
                padding:1px;
                border-radius:2px;
              }

              .delivery_left{
                color:#FFFFFF;
                margin-right:-10px;
                background-color:#02A774;
                border:1px solid #02A774;
              }

              .delivery_right{
                color:#02A774;
                border:1px solid #02A774;
              }
            }
          }

          .shop_distance{
            width:100%;
            font-size:12px;

            &::after{
              content:'';
              display:block;
              clear:both;
            }

            .shop_delivery_msg{
              float:left;
              transform-origin:0;
              transform:scale(0.9);
              color:#666666;
            }

            .segmentation{
              color:#CCCCCC;
            }
          }
        }
      }
    }
  }
}
</style>