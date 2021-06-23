import Vue from 'vue'
import App from './App.vue'
import Storage from 'vue-ls'
import router from './router'
import axios from 'axios'
import store from './store'
import './plugins'
import "./permission"
import './mock'
import './assets/styles/index.less'

import config from '@/config/defaultSettings'

Vue.config.productionTip = false
Vue.use(Storage, config.storageOptions)

let startApp = function() {
  axios.get('/config.json').then((res) => {
    Vue.prototype.BASE_URL = res.data.BASE_URL;
    new Vue({
      router,
      store,
      mounted() {
        store.dispatch('app/ToggleColor', Vue.ls.get('DEFAULT_COLOR', config.primaryColor))
      },
      render: h => h(App)
    }).$mount('#app')
  })
}

startApp();

