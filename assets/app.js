import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import './custom/main.css'
import App from './App.vue'
import Components from 'components/_index'
import VueLocalStorage from 'vue-localstorage'

// import { createStore } from 'store/index'
import store from '../store/index'
import { createRouter } from 'router/index'
import http from '../plugins/axios.js'
import { sync } from 'vuex-router-sync'

Vue.use(Vuetify)
Vue.use(http)


Vue.use(VueLocalStorage)
Vue.use(VueLocalStorage, {
  name: 'asd',
  bind: true //created computed members from your variable declarations
})

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

Vue.directive('privilege', {
  inserted: function (el, binding, vnode) {
      let priv = localStorage.getItem('priv')
      let superAdmin = store.getters.getStaff
      if(superAdmin.user.email !== 'superadmin'){
          if (typeof binding.value !== 'undefined') {
              if (priv.indexOf(binding.value) < 0) {
                  vnode.elm.parentElement.removeChild(vnode.elm)
              }
              console.log(vnode)
          }
      }
  }
})

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp (ssrContext) {
  // create store and router instances
  // const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    vuetify : new Vuetify(),
    router,
    store,
    ssrContext,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
