// initial state
const state = {
  value: null,
  category: null
}

// mutations
const mutations = {
  changeFilter (state, filter) {
    state.value = filter.value
    state.category = filter.category
  },

  resetFilter (state) {
    state.filter = null
  }
}

export default {
  namespaced: true,
  state,
  mutations
}