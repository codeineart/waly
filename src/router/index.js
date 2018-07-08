import Vue from 'vue';
import Router from 'vue-router';
import Landing from 'src/views/Landing.vue';
//import Dashboard from 'src/views/Dashboard.vue';s

const baseRoutes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    children: [],
  },
 /* {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [],
  },*/
];
const routes = baseRoutes.concat();
// export default new Router({routes,})

export default new Router({
  // mode: 'history',
  routes,
});
