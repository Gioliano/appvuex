import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0
  },
  getters: {
  },
  mutations: {
      increaseCounter(state, randonNumber){
        state.counter+=randonNumber
      },
      decreaseCounter(state) {
        state.counter--
      }
  },
  actions: {
    increaseCounter({commit}) {
      console.log('increaseCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })
    } 
  },
  modules: {
  }
})
