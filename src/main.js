import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from "vue-lazyload"
import router from "@/router"
import loading from '@/assets/loading.gif'

Vue.config.productionTip=false

//图片懒加载
Vue.use(VueLazyLoad,{loading:loading})

new Vue({
  render:h=>h(App),
  router,
}).$mount('#app')
