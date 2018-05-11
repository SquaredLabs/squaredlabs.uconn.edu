import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      theme: "white"
    },
    mutations: {
      setBlue(state) {
        state.theme = "blue"
      },
      setWhite(state) {
        state.theme = "white"
      }
    }
  })
}

export default createStore
