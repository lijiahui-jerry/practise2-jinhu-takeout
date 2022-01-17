import {reqShopDetaial} from "@/api"

const state={
  goods:[],
  info:{},
  ratings:[],
}

const mutations={
  GETSHOPDETAIL(state,shopDetail){
    state.goods=shopDetail.goods
    state.info=shopDetail.info
    state.ratings=shopDetail.ratings
  },
}

const actions={
  async getShopDetail({commit}){
    let result=await reqShopDetaial()
    if(200==result.code) commit('GETSHOPDETAIL',result.data)
  },
}

const getters={}

export default {state,mutations,actions,getters}
