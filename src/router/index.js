import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NumberConversion from '../views/NumberConversion.vue'
import TreemapChart from '@/views/TreemapChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/number-convesion',
      name: 'number-convesion',
      component: NumberConversion
    },
    {
      path: '/treemap',
      name: 'treemap',
      component: TreemapChart
    }
  ]
})

export default router
