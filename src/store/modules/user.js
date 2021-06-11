import Vue from 'vue';
import { login, getUserInfo } from '@/api';

const state = {
    name: '',
    avatar: '',
    token: ''
}

const mutations = {
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}

const actions = {
    login({ commit }, useInfo) {
        const { username, password } = useInfo;
        return new Promise((reslove, reject) => {
            login({
                username: username.trim(),
                password
            }).then(res => {
                if(res.success){
                    commit('SET_NAME', username)
                    commit('SET_TOKEN', res.data.token)
                    Vue.ls.set('USER_NAME', username, 7 * 24 * 60 * 60 * 1000)
                    Vue.ls.set('ACCESS_TOKEN', res.data.token, 7 * 24 * 60 * 60 * 1000)
                    reslove(res);
                }
            }).catch(error => {
                reject(error)
            })
        })
    },
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            console.log('sss',Vue.ls.get('USER_NAME'));
            getUserInfo({
                name: Vue.ls.get('USER_NAME')
            }).then(res => {
                if (!res.success) {
                    Vue.ls.remove('USER_NAME');
                    Vue.ls.remove('ACCESS_TOKEN');
                    location.reload();
                    reject('Verification failed, please Login again.')
                }
                
                commit('SET_NAME', res.data.nickName)
                commit('SET_AVATAR', res.data.avatar)
                Vue.ls.set('USER_NAME', res.data.nickName, 7 * 24 * 60 * 60 * 1000)
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}