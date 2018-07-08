import Vue from 'vue';
import Router from 'vue-router';
import Landing from 'src/views/Landing.vue';
import Dashboard from 'src/views/Dashboard.vue';
import Recycle from 'src/views/Recycle.vue';
import HowTo from 'src/views/HowTo.vue';


const baseRoutes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    children: [],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [],
  },
  {
    path: '/reciclar',
    name: 'Recycle',
    component: Recycle,
    children: [],
  },
  {
    path: '/como-reciclar',
    name: 'HowTo',
    component: HowTo,
    children: [],
  },
];
const routes = baseRoutes.concat();
// export default new Router({routes,})

export default new Router({
  // mode: 'history',
  routes,
});
