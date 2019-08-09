import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    plugins: [],
    strict: process.env.NODE_ENV !== 'production'
  })
export default store
