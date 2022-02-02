import {reqShopDetaial} from "@/api"
import Vue from "vue"

const state={
  goods:[],
  info:{},
  ratings:[],
  foodsInCart:[],
}

const mutations={
  GETSHOPDETAIL(state,shopDetail){
    state.info=shopDetail.info
    state.ratings=shopDetail.ratings
  },
  GETSHOPGOODS(state,shopGoods){
    state.goods=shopGoods
  },
  ADDCOUNTOFFOOD(state,{food}){
    if(!food.count){
      Vue.set(food,"count",1)
    }else{
      food.count++
    }
  },
  MINUSCOUNTOFFOOD(state,{food}){
    if(food.count>=1){
      food.count--
    }else{
      //防止多次点击出现读负数或出现负数后点击无反应
      food.count=0
    }
  },
}

const actions={
  async getShopDetail({commit}){
    let result=await reqShopDetaial()
    if(200==result.code) commit('GETSHOPDETAIL',result.data)
  },
  async getShopGoods({commit},callback){
    let result=await reqShopDetaial()
    if(200==result.code) commit('GETSHOPGOODS',result.data.goods)
    callback && callback()
  },
  updateCountOfFood({commit},{flag,food}){
    if(flag){
      commit("ADDCOUNTOFFOOD",{food})
    }else{
      commit("MINUSCOUNTOFFOOD",{food})
    }

  },
}

const getters={
  totalCount(state){
    return state.foodsInCart.reduce((preTotal,food)=>preTotal+food.count,0)
  },
  totalPrice(state){
    return state.foodsInCart.reduce((preTotal,food)=>preTotal+food.count*food.price,0)
  }
}

export default {state,mutations,actions,getters}
