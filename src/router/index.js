import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaginaLogin from"../views/PaginaLogin.vue"
import LojaView from '../views/LojaView.vue'
import CadastroVendedorView from '../views/CadastroVendedorView.vue'
import infoDevs from '../views/infoDevs.vue'
import CadastroClienteView from '../views/CadastroClienteView.vue'


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
  },
  {
    path: '/cadastro-clientes',
    name: 'cadastroClientes',
    component: CadastroClienteView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
