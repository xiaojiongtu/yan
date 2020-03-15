import Vue from 'vue'
import App from './App.vue'
import axios from './api/axios'
import VueAxios from "vue-axios";
import store from './store'
import  router from './router'


Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.filter('imgpath',function (val) {
   return `http://api.zhinengshe.com/10001-you163/${val}?apikey=ff187664e66b42f0b5f7842192808f4f`
})
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
