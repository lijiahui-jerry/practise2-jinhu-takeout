import {reqNavigation,reqLocation,reqShops} from "@/api"

const state={
  school:{},
  navigation:[],
  shops:[],
}

const mutations={
  GETLOCATION(state,school){
    state.school=school
  },
  GETNAVIGATION(state,navigation){
    state.navigation=navigation
  },
  GETSHOPS(state,shops){
    state.shops=shops
  },
}

const actions={
  //获取地址信息
  async getLocation({commit}){
    let result=await reqLocation()
    if(result.code==200) commit('GETLOCATION',result.data)
  },
  //获取首页商家导航
  async getNavigation({commit}){
    let result=await reqNavigation()
    if(result.code==200) commit("GETNAVIGATION",result.data)
  },
  //获取商家列表
  async getShops({commit}){
    let result=await reqShops()
    if(result.code==200) commit('GETSHOPS',result.data)
  },
}

const getters={}

export default {state,mutations,actions,getters}