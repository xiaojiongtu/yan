import Vue from 'vue'
import App from './App.vue'
import axios from './api/axios'
import VueAxios from "vue-axios";
import store from './store'
import  router from './router'


Vue.config.productionTip = false
Vue.use(VueAxios,axios)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
