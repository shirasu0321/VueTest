import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from 'axios'

const mockData = [{
  time: (new Date()).getFullYear() + '/' + ((new Date()).getMonth() + 1) + '/' + (new Date()).getDay(),
  name: 'Kate',
  departments: ['Development', 'Sales', 'Affairs']
}]

const mockAdapter = (config) => {
  return new Promise((resoleve,reject) => {
    resoleve({ data: mockData, status:200 })
  })
}
const http = axios.create({
  baseURL: 'http://localhost:49168',
  adapter: mockAdapter
})

Vue.use(Vuex)

const Head = {
  namespaced: true,
  actions: {
    clickDrawner ({ commit, state, rootState }) {
      commit('drawMenu', null, {root: true})
    }
  }
}

const Home = {
  namespaced: true,
  state: {
    name: '',
    time: '1900/01/01'
  },
  actions: {
  },
  mutations: {
    getTime (state, value) {
      http.get('/Home/GetTime').then( res => {
        state.time = res.data[0]['time']
      })
    },
    getName (state, value) {
      var param = { id: value }
      http.post('/Home/SearchName', param).then( res => {
        if (res.data == null) {
          state.name = "unknown"
        } else {
          state.name = res.data[0]['name']
        }
      })
    }
  },
  getters: {
    setTime (state, getters, rootState) {
      return state.time
    },
    setName (state, getters, rootState) {
      return state.name
    }
  }
}

const Settings = {
  namespaced: true,
  state: {
    departmentItems: []
  },
  actions: {
    getDepartmentItems (context) {
      http.get('/Home/GetDepartmentItems').then( res => {
        context.commit('setDepartmentItems', res.data[0]['departments'])
      })
    }
  },
  mutations: {
    setDepartmentItems (state, value) {
      console.log(value)
      state.departmentItems = value
    }
  },
  getters: {
    departments: state => state.departmentItems
  }
}

const Menu = {
  namespaced: true,
  actions: {
    changePage ({ commit, state, rootState }, value) {
      router.push(value)
      commit('drawMenu', null, {root: true})
    }
  },
  getters: {
    getDraw (State, getters, rootState) {
      return rootState.isDraw
    }
  }
}

export default new Vuex.Store({
  state: {
    isDraw: false,
    pageRoot: '/'
  },
  mutations: {
    drawMenu (state) {
      state.isDraw = !state.isDraw
    },
    getRoot (state, value) {
      state.pageRoot = value
    }
  },
  modules: {
    Head,
    Menu,
    Home,
    Settings
  }
})
