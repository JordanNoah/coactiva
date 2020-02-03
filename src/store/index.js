import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:[]
  },
  mutations: {
    saveData(state,dataReceived){
      state.userData = dataReceived
    },
    cleanAll(state){
      state.userData = []
    }
  },
  actions: {
  },
  modules: {
  }
})
