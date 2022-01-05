import Vue from "vue"
import VueRouter from 'vue-router'
import routes from "@/router/routes"

Vue.use(VueRouter)

//重写VueRouter原型对象的push方法
let originPush=VueRouter.prototype.push
VueRouter.prototype.push=function(target,succeed,failed){
  if(succeed && failed) originPush.call(this,target,succeed,failed)
  originPush.call(this,target,()=>{},()=>{})
}

//重写VueRouter原型对象的replace方法
let originReplace=VueRouter.prototype.replace
VueRouter.prototype.replace=function(target,succeed,failed){
  if(succeed && failed) originReplace.call(this,target,succeed,failed)
  originReplace.call(this,target,()=>{},()=>{})
}

let router=new VueRouter({
  routes,
  scrollBehavior(){
    //使页面跳转后始终从最顶部开始浏览
    return {y:0}
  },
})

export default router