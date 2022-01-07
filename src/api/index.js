import mockRequests from "@/api/mockRequest"
//首页商家导航
export const reqNavigation=()=>mockRequests.get('/navigation')
//首页地址信息
export const reqLocation=()=>mockRequests.get('/location')