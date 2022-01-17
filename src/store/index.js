import Vue from "vue"
import Vuex from "vuex"
import home from "@/store/home"
import me from '@/store/me'
import shop from "@/store/shop"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{home,me,shop},
})
