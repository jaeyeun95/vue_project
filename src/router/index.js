import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkbox.vue')
  },
  {
    path: '/excel',
    name: 'Excel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Excel.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
  {
    path: '/js',
    name: 'js',
    component: () => import(/* webpackChunkName: "about" */ '../views/JS.vue')
  },
  {
    path: '/set',
    name: 'set',
    component: () => import(/* webpackChunkName: "about" */ '../views/Set.vue')
  },
  {
    path: '/spinner',
    name: 'spinner',
    component: () => import(/* webpackChunkName: "about" */ '../views/Spinner.vue')
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Axios.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
