import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      theme: "white",
      selectedProject: 0,
      selectedPerson: 4,
      highContrast: false
    },
    mutations: {
      setBlue(state) {
        state.theme = "blue"
      },
      setWhite(state) {
        state.theme = "white"
      },
      highContrast(state) {
        state.highContrast = !state.highContrast
      },
      selectPerson(state, personToSelect) {
        state.selectedPerson = personToSelect
      },
      unSelectPerson(state) {
        state.selectedPerson = 0
      }
    }
  })
}

export default createStore
