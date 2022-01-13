import mockRequests from "@/api/mockRequest"
//首页商家导航
export const reqNavigation=()=>mockRequests.get('/navigation')
//首页地址信息
export const reqLocation=()=>mockRequests.get('/location')
//首页商家列表
export const reqShops=()=>mockRequests.get('/shops')
//获取用户信息
export const reqUserInfo=()=>mockRequests.get('/userInfo')
