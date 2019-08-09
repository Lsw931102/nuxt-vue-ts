interface IState {
  data: Array<{ [key: string]: any }>
}

const state = (): IState => {
  const Istate = {
    data: []
  }
  return Istate
}
const getters = {}
const actions = {
  // 获取订单数据
  getOrder({ commit }) {
    const data = [
      { title: '无人机培训', address: '重庆市两江新区互联网学院', id: 1 },
      { title: '3D打印现场教学', address: '重庆市两江新区互联网学院2A', id: 2 }
    ]
    commit('setData', {
      payload: data
    })
  }
}
const mutations = {
  setData(state: { [key: string]: any }, { payload }) {
    state.data = payload
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
