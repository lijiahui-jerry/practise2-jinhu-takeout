<template>
 <div class="education-supermarket">
  <Header class="header" left=true title="教育超市"/>
  <div class="content" ref="educationSupermarketContent">
   <ul>
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还在建设，当前为静态</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
    <!--    -->
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
    <li class="goods-card" @click.stop="showGoodsDetail()">
     <img src="./a.png" class="goods-img">
     <p class="goods-name">后台还</p>
     <p class="goods-detail">
      <span>
       <Star class="star" rating="3.2" size="24"/>
      </span>
      <span class="sells-count">月售999+</span>
     </p>
     <p class="goods-sells">
      <span class="price">￥100</span>
      <span class="cart-control-wrapper">
       <CartControl :food="as"></CartControl>
      </span>
     </p>
    </li>
   </ul>
  </div>
  <div class="cart-component">
   <Cart></Cart>
  </div>
  <Food :food="as" ref="food"/>
 </div>
</template>

<script>
import Header from "@/components/Header"
import CartControl from "@/components/CartControl"
import BScroll from "better-scroll"
import Food from "@/components/Food"
import Star from "@/components/Star"
import Cart from "@/components/Cart"
import aimgg from './a.png'

export default {
  name:"EducationSupermarket",
  data(){
    return {
      food:1,
      as:{count:1,name:'a',price:1555,image:aimgg,info:'后台还在建设，当前为静态',sellCount:15,rating:55},
    }
  },
  methods:{
    showGoodsDetail(){
      this.$refs.food.ifShow=true
    },
  },
  mounted(){
    this.$nextTick(()=>{
      if(!this.ESScroll){
        this.ESScroll=new BScroll(this.$refs.educationSupermarketContent,{click:true})
        console.log(this)
      }else{
        this.ESScroll.refresh()
      }
    })
  },
  components:{Food,Header,CartControl,Star,Cart},
}
</script>

<style scoped lang="less">
.education-supermarket{
  width:100vw;
  height:100vh;
  position:relative;
  background-color:#F1F1F1;
  overflow:hidden;

  .content{
    position:absolute;
    top:45px;
    bottom:52px;
    left:0;
    right:0;
    overflow:hidden;

    & ul{
      width:90%;
      margin:0 auto;
      padding-bottom:15px;
      overflow:hidden;

      .goods-card{
        float:left;
        width:48%;
        border:none;
        border-radius:10px;
        background-color:#FFFFFF;
        overflow:hidden;
        margin-top:10px;

        &:nth-child(even){
          float:right;
        }

        .goods-img{
          width:80%;
          display:block;
          margin:5px auto 0;
          border-radius:10px;
        }

        .goods-name{
          font-size:20px;
          line-height:1em;
          text-align:center;
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
          margin:2px;
        }

        .goods-detail{
          font-size:12px;
          line-height:1em;
          margin:5px;

          &::after{
            content:'';
            display:block;
            clear:both;
          }

          .sells-count{
            float:right;
            color:#666666;
            padding-top:2px;
            padding-right:8px;
          }
        }

        .goods-sells{
          margin-top:-5px;
          margin-bottom:10px;

          &::after{
            content:'';
            display:block;
            clear:both;
          }

          .price{
            float:left;
            font-size:20px;
            line-height:1em;
            padding:6px 0 0 8px;
            color:red;
          }

          .cart-control-wrapper{
            float:right;
            transform:scale(.9);
          }
        }
      }
    }
  }
}
</style>
