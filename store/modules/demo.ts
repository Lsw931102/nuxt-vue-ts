interface IState {
  count: number
}

const state = (): IState => {
  const Istate = {
    count: 0
  }
  return Istate
}
const getters = {}
const actions = {}
const mutations = {
  increment(state) {
    state.count++
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
