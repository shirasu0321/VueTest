import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueChartJS from '@/components/VueChartJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chartjs',
      name: 'VueChartJS',
      component: VueChartJS
    }
  ]
})
