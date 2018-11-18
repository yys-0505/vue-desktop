import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/UserModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  }
})

export default store
