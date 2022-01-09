import Vue from 'vue'
import App from './App.vue'
import VueLazyload from "vue-lazyload"
import router from "@/router"
import loading from '@/assets/loading.gif'
import store from "@/store"
import '@/mock/mockServe'
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip=false

Vue.use(VueLazyload,{loading:loading})

new Vue({
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router,
  store,
}).$mount('#app')
