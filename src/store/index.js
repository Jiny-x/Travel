import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  // actions: {
  //   imgShow (ctx, sightImgs) {
  //     ctx.commit('imgShow', sightImgs)
  //   }
  // }
})
