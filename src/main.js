import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '@/store'
import '@/config/bootstrap'
import "@/config/msgs";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

Vue.use(VueAxios, axios)
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
