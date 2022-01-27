import {reqShopDetaial} from "@/api"

const state={
  goods:[],
  info:{},
  ratings:[],
}

const mutations={
  GETSHOPDETAIL(state,shopDetail){
    state.info=shopDetail.info
    state.ratings=shopDetail.ratings
  },
  GETSHOPGOODS(state,shopGoods){
    state.goods=shopGoods
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
}

const getters={}

export default {state,mutations,actions,getters}
