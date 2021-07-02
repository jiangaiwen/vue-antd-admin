import Vue from 'vue';

// base library
import './antd';
import Viser from 'viser-vue'

// api
import api from '@/api'; 
Vue.prototype.$api = api; 

Vue.use(Viser)
