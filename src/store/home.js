import {reqNavigation,reqLocation} from "@/api"

const state={
  navigation:[],
  school:{},
}

const mutations={
  GETNAVIGATION(state,navigation){
    state.navigation=navigation
  },
  GETLOCATION(state,school){
    state.school=school
  },
}

const actions={
  //获取首页商家导航
  async getNavigation({commit}){
    let result=await reqNavigation()
    if(result.code==200) commit("GETNAVIGATION",result.data)
  },
  //获取地址信息
  async getLocation({commit}){
    let result=await reqLocation()
    if(result.code==200) commit('GETLOCATION',result.data)
  },
}

const getters={}

export default {state,mutations,actions,getters}