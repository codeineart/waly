// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import VueSession from 'vue-session'
import VueCookie from 'vue-cookie'
import './directives/show-adnimation'

// Visual imports
import icons from 'glyphicons'

// Vue importing
Vue.use(VueSession, {
  persist: true
})
Vue.use(VueCookie)
Vue.use(Router)
Vue.use(Vuex)
Vue.mixin({
  methods: {
    // Gets rid of reactive stuff when printing data objects
    purify: reactiveObject => {
      return JSON.parse(JSON.stringify(reactiveObject))
    }
  }
})

Vue.prototype.$cout = (content = '{{ Input Variable }}', title = 'Simple logging helper:', clear = false, banner = false, purify = false) => {
  if (clear == true) {
    console.clear()
  }
  if (banner == true) {
    console.error(`###################### ${title} ##########################`)
  }

  let output = purify ? JSON.parse(JSON.stringify(content)) : content

  if (typeof output === 'Array') {
    console.log('Is Array')
  }

  console.info('cout >> ' + title)
  console.log(output)
}

import Datatable from 'vue2-datatable-component'
Vue.use(Datatable)

// Router components
import App from 'src/App'
import router from 'src/router'
import store from 'src/store'

/**
 * to: Route: the target Route Object being navigated to.
 * from: Route: the current route being navigated away from
 * next: function: this function must be called to resolve the hook.
 * action depends on the arguments provided to next.
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // navigation requires auth, dispatch
    store.dispatch('AUTH_TOKEN_CHECK').then(tokenValid => {
      if (!tokenValid) {
        alert('Acceso denegado')
        next('/login')
      } else {
        // continue navigation
        next()
      }
    })
  } else {
    // route without authorization required
    next()
  }
})

Vue.config.productionTip = false
Vue.config.silent = false

const app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
