import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/home/')
  },
  {
    path: '/client/login',
    name: 'clientLogin',
    component: () => import( '../views/client/login')
  },
  {
    path: '/client/register',
    name: 'clientRegister',
    component: () => import( '../views/client/register')
  },
  {
    path: '/client/home',
    name: 'clientHome',
    component: () => import( '../views/client/home/')
  },
]

const router = new VueRouter({
  routes
})

export default router
