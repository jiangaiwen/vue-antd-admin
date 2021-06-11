import Vue from 'vue';
import axios from 'axios';
import store from "@/store";
import { getToken } from "@/utils/auth";

const service = axios.create({
    baseURL: Vue.prototype.BASE_URL,
    timeout: ''
})

// request interceptor
service.interceptors.request.use(config => {
    if(store.getters.token) {
        config.headers.Authorization = 'Bearer ' + getToken();
    }
    return config
}, error => {
    return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error.response)
})

export default service

export function http(url, method, params) {
    let paramsData = null;
    if (method === 'get') {
        paramsData = { params };
    }
    else if (method === 'post' || method === 'put') {
        paramsData = params;
    }
    else if (method === 'delete') {
        paramsData = `/${params}`;
    }
    return new Promise((resolve, reject) => {
        method === 'delete' ?
            service[method.toLowerCase()](url + paramsData).then(res => {
                resolve(res && res.data)
            }).catch(err => {
                reject(err.data)
            })
            :
            service[method.toLowerCase()](url, paramsData).then(res => {
                resolve(res && res.data)
            }).catch(err => {
                reject(err.data)
            })
    })
}
