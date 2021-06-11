import Vue from 'vue';
import './antd';
import Storage from 'vue-ls';
import config from '@/config/defaultSettings'
Vue.use(Storage, config.storageOptions)

// api
import api from '@/api'; 
Vue.prototype.$api = api; 