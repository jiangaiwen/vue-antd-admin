import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueStorage from 'vue-ls';
import config from '@/config/defaultSettings';
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './plugins/bootstrap'
import './plugins'
import "./permission"
import './assets/styles/index.less'

Vue.config.productionTip = false
Vue.use(VueStorage, config.storageOptions)

let startApp = function() {
  axios.get('/config.json').then((res) => {
    Vue.prototype.BASE_URL = res.data.BASE_URL;
    new Vue({
      router,
      store,
      created: bootstrap,
      render: h => h(App)
    }).$mount('#app')
  })
}

startApp();

