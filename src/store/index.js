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

const TextArea = {
  namespaced: true,
  state: {
    errorMsg: "必須入力です"
  },
  getters: {
    getError (state, getters, rootState) {
      if (rootState.errorFlag) {
        return null
      } else {
        return state.errorMsg
      }
    }
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0,
    impression: "",
    errorFlag: false
  },
  mutations: {
    setStepCount (state) {
      state.stepCount++
    },
    updateImpression (state, value) {
      state.impression = value
      if (state.impression) {
        state.errorFlag = true
      } else {
        state.errorFlag = false
      }
    }
  },
  modules: {
    Form,
    Head,
    TextArea
  }
})
