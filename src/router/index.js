import Vue from 'vue'
import VueRouter from 'vue-router'
import LojaView from '../views/LojaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/loja',
    name: 'loja',
    component: LojaView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
