import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PaginaLogin from"../views/PaginaLogin.vue"
import LojaView from '../views/LojaView.vue'
import CadastroVendedorView from '../views/CadastroVendedorView.vue'
import infoDevs from '../views/infoDevs.vue'

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
    component: AboutView
  },
  {
    path: '/cadastro-vendedores',
    name: 'cadastroVendedores',
    component: CadastroVendedorView
  },
  {
    path: '/loja',
    name: 'loja',
    component: LojaView
  },
  {
    path: '/informacoes-sobre-desenvolvedores',
    name: 'infoDevs',
    component: infoDevs
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
