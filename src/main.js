import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import Router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router:  Router
}).$mount('#app')
