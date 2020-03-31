import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import store from './store'

import Home from './pages/Home.vue'
import Legals from './pages/Legals.vue'
import Projects from './pages/Projects.vue'
import Notfound from './pages/Notfound.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/legals',
      component: Legals
    },
    {
      path: '/projects/:id',
      component: Projects
    },
    {
      path: '*',
      component: Notfound
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
