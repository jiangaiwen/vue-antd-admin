import Vue from 'vue';
import Router from 'vue-router';
import { TabLayout, RouteView } from '@/layouts'

Vue.use(Router)

export const constantRoutes = [{
    path: '/',
    name: 'dashboard',
    component: TabLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/analysis',
    children: [{
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/workplace',
        component: RouteView,
        meta: { title: '仪表盘', icon: 'dashboard' },
        children: [
            {
                path: '/dashboard/analysis',
                name: 'Analysis',
                component: () => import('@/views/dashboard/Analysis'),
                meta: { title: '分析页' }
            },{
                path: '/dashboard/monitor',
                name: 'Monitor',
                component: () => import('@/views/dashboard/Monitor'),
                meta: { title: '监控页' }
            },{
                path: '/dashboard/workplace',
                name: 'Workplace',
                component: () => import('@/views/dashboard/Workplace'),
                meta: { title: '工作台' }
            }
        ]
    }]
}]

export const asyncRoutes = []

const createRouter = () => new Router({
	// mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter();

export default router;