import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.axios = axios;
Vue.use(VueAxios,axios)

import "./components/index";
import router from './router'
// import HelloWorld from "./components/HelloWorld";
// import LoremText from "./components/LoremText";
// Vue.component('HelloWorld',HelloWorld)
// Vue.component('LoremText',LoremText)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
