import Dashboard from 'src/views/Dashboard.vue' // MAIN DASHBOARD VIEW
import Landing from 'src/views/Landing.vue' // LANDING PAGE
import Recycle from 'src/views/Recycle.vue' //
import HowTo from 'src/views/HowTo.vue' //
import School from 'src/views/School'
import Centers from 'src/views/Centers'
import Router from 'vue-router'
import Vue from 'vue'

const baseRoutes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    children: []
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: []
  },
  {
    path: '/reciclar',
    name: 'Recycle',
    component: Recycle,
    children: []
  },
  {
    path: '/como-reciclar',
    name: 'HowTo',
    component: HowTo,
    children: []
  },
  {
    path: '/colegio',
    name: 'School',
    component: School,
    children: []
  },
  {
    path: '/centros',
    name: 'Centers',
    component: Centers,
    children: []
  }
]
const routes = baseRoutes.concat()
// export default new Router({routes,})

export default new Router({
  // mode: 'history',
  routes
})
