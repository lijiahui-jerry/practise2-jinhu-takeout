import {reqNavigation,reqLocation} from "@/api"
const state={
  navigation:[],
  location:[],
}

const mutations={
  GETNAVIGATION(state,navigation){
    state.category=navigation
  },
  GETLOCATION(state,location){
    state.location=location
  },
}

const actions={
  //获取首页商家目录
  async getCategory({commit}){
    let result=await reqNavigation()
    if(result.code==200) commit("GETNAVIGATION",result.data)
  },
  //获取地址
  async getLocation({commit}){
    let result=await reqLocation()
    if(result.code==200) commit('GETLOCATION',result.data)
  },
}

const getters={}

export default {state,mutations,actions,getters}