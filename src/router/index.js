import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Womz from '../views/Womz.vue'
import Anima from '../views/Anima.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    name: 'Womz',
    path: '/womz',
    component: Womz
  },
  {
    name: 'Anima',
    path: '/anima',
    component: Anima
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
