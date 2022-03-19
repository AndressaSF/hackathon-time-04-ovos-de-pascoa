import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PaginaLogin from"../views/PaginaLogin.vue"
=======
import LojaView from '../views/LojaView.vue'
>>>>>>> f54519afeb8c98731b76e96ced721c30e6fb8008

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'PaginaLogin',
    component: PaginaLogin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
=======
    path: '/loja',
    name: 'loja',
    component: LojaView
>>>>>>> f54519afeb8c98731b76e96ced721c30e6fb8008
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
