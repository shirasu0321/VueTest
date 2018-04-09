import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
  namespaced: true,
  state: {
    button: ["確認", "送信"]
  },
  mutations: {},
  actions: {
    buttonAction({ commit, state, rootState }) {
      commit('setStepCount', null, {root: true})
    }
  },
  getters: {
    getButton (state, getters, rootState) {
      return state.button[rootState.stepCount]
    }
  }
}

const Head = {
  namespaced: true,
  state: {
    title: ["感想を入力", "確認画面", "送信完了"]
  },
  mutations: { },
  actions: { },
  getters: {
    getTitle (state, getters, rootState) {
      return state.title[rootState.stepCount]
    }
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0
  },
  mutations: {
    setStepCount (state) {
      state.stepCount++
    }
  },
  modules: {
    Form,
    Head
  }
})
