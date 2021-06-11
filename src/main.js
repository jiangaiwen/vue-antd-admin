import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import './plugins'
import "./permission"
import './mock'
import './assets/styles/index.less'

Vue.config.productionTip = false

let startApp = function() {
  axios.get('/config.json').then((res) => {
    Vue.prototype.BASE_URL = res.data.BASE_URL;
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
}

startApp();

