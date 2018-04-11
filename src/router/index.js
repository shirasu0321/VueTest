import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import DashBoard from '@/pages/DashBoard'
import Settings from '@/pages/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboad',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
