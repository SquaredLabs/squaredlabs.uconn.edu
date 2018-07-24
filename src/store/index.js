import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state: {
      theme: "white",
      selectedProject: 0,
      selectedPerson: 4
    },
    mutations: {
      setBlue(state) {
        state.theme = "blue"
      },
      setWhite(state) {
        state.theme = "white"
      },
      selectProject(state, projectToSelect) {
        state.selectedProject = projectToSelect
      },
      unSelectProject(state) {
        state.selectedProject = 0
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
