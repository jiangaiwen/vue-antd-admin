import { constantRoutes, asyncRoutes } from "@/router";
import router from '@/router';

/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */


 export function recursionRouter(userRouter = [], allRouter = []) {
    var realRoutes = []
    allRouter.forEach((v, i) => {
        userRouter.forEach((item, index) => {
            if(v.meta){
                if (item.title === v.meta.title && !item.isHide) {

                    realRoutes.push(v)
    
                    if (item.children && item.children.length > 0) {
                        v.children = recursionRouter(item.children, v.children)
                    }
                }
            }else{
                realRoutes.push(v)
            }
        })
    })
    return realRoutes
}

/**
 *
 * @param {Array} routes 用户过滤后的路由
 *
 * 递归为所有有子路由的路由设置第一个children.path为默认路由
 */
export function setDefaultRoute(routes) {
    routes.forEach((v, i) => {
        if (v.children && v.children.length > 0) {
            v.redirect = { name: v.children[0].name }
            setDefaultRoute(v.children)
        }
    })
}

const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = routes//constantRoutes.concat(routes)//routes
    }
}
const actions = {
    generateRoutes({commit}, accessRoutes) {
        return new Promise(resolve => {
            let accessedRoutes = recursionRouter(accessRoutes, asyncRoutes)
            router.addRoutes(accessedRoutes)
            
            commit('SET_ROUTES', accessRoutes)
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}