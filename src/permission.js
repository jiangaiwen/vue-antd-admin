import Vue from 'vue';
import router from './router';
import store from './store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getRouter } from '@/api';
import { navTree, compare } from './utils';

NProgress.configure({ showSpinner: false })// NProgress Configuration

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // 判断用户有没有登录
    if(!Vue.ls.get('ACCESS_TOKEN')){
        if(to.name === 'login'){
            next()
        }else if (to.name !== 'login'){
            next({ name: 'login' })
        }
    }else{// 用户已经登录
        if(store.getters.permission_routes.length == 0){ //不加这个判断，路由会陷入死循环
            await store.dispatch('user/getInfo');
            const { data } = await getRouter();
            
            var accessRoutes = navTree(data)
                accessRoutes = accessRoutes.sort(compare('order'));
                for(var i in accessRoutes){
                    if(accessRoutes[i].children){
                        accessRoutes[i].children = accessRoutes[i].children.sort(compare('order'));
                    }
                }

            await store.dispatch('permission/generateRoutes', accessRoutes)
            next({ ...to, replace: true })
        }else{
            next()
        }
    }       
})

router.afterEach(() => {
    NProgress.done()
})