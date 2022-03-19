import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PaginaLogin from"../views/PaginaLogin.vue"
import LojaView from '../views/LojaView.vue'
<<<<<<< HEAD
import infoDevs from '../views/infoDevs.vue'
=======
>>>>>>> 0f3360be28d75f9875e0ce00a218825b5be511d2

Vue.use(VueRouter)

const routes = [
  {
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
<<<<<<< HEAD
    component: AboutView,
=======
    component: AboutView
>>>>>>> 0f3360be28d75f9875e0ce00a218825b5be511d2
  },
  {
    path: '/loja',
    name: 'loja',
    component: LojaView
<<<<<<< HEAD
  },

  {
    path: '/informacoes-sobre-desenvolvedores',
    name: 'infoDevs',
    component: infoDevs
=======
>>>>>>> 0f3360be28d75f9875e0ce00a218825b5be511d2
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
