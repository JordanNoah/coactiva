import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData:[],
    nightMode:"white--text"
  },
  mutations: {
    saveData(state,dataReceived){
      state.userData = dataReceived
    },
    cleanAll(state){
      state.userData = []
    },
    changeMode(state){
      var actualState = state.nightMode
      var banderaState = 1
      if(actualState == "white--text"){ banderaState = 1}
      if(actualState == "yellow--text"){ banderaState = 2}
      if(banderaState == 1){
        state.nightMode = "yellow--text"
      }
      if(banderaState == 2){
        state.nightMode = "white--text"
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
