import {reqUserInfo} from "@/api"

const state={
  userInfo:[],
}

const mutations={
  GETUSERINFO(state,userInfo){
    state.userInfo=userInfo
  },
}

const actions={
  //获取用户信息
  async getUserInfo({commit}){
    let result=await reqUserInfo()
    if(200==result.code) commit('GETUSERINFO',result.data)
  },
}

const getters={}

export default {state,mutations,actions,getters}
