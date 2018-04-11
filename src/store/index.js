import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Head = {
  namespaced: true,
  actions: {
    clickDrawner ({ commit, state, rootState }) {
      commit('drawMenu', null, {root: true})
    }
  }
}

const Menu = {
  namespaced: true,
  getters: {
    getDraw (State, getters, rootState) {
      return rootState.isDraw
    }
  }
}

export default new Vuex.Store({
  state: {
    isDraw: true
  },
  mutations: {
    drawMenu (state) {
      state.isDraw = !state.isDraw
    }
  },
  modules: {
    Head,
    Menu
  }
})
