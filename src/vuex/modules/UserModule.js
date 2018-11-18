const userMod = {
  state: {
    isCollapse: false
  },
  mutations: {
    setCollapse (state) {
      state.isCollapse = !state.isCollapse
    }
  },
  getters: { },
  actions: { }
}
export default userMod
