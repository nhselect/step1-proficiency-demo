export const state = () => ({
  proficiencies: []
})

export const getters = {
  getByIndex: (state) => (index) => {
    return state.proficiencies.find(l => l.index === index)
  }
}

export const mutations = {
  setProficiencies(state, newData) {
    state.proficiencies = newData
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    const res = dispatch('fetchData')
    return res
  },
  async fetchData ({ commit }) {
    let step1data = await fetch(`https://www.dropbox.com/s/gxw234xoy8waeyq/step1-output.json?dl=1`).then(res => res.json());

    step1data = step1data.map((p,i) => {
      return {
        index: i+1,
        ...p
      }
    })
    
    commit('setProficiencies', step1data)
    return step1data
  }
}