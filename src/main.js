import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from "vue-lazyload"
import router from "@/router"
import loading from '@/assets/loading.gif'
import store from "@/store"

Vue.config.productionTip=false

//图片懒加载
Vue.use(VueLazyLoad,{loading})

new Vue({
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router,
  store,
}).$mount('#app')
