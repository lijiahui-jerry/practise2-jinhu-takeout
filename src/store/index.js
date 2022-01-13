import Vue from "vue"
import Vuex from "vuex"
import home from "@/store/home"
import me from '@/store/me'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{home,me},
})
