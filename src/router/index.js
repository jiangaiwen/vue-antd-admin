import Vue from 'vue';
import Router from 'vue-router';
import Layout from "@/layouts/index";
import UserLayout from '@/layouts/user';

Vue.use(Router)

export const constantRoutes = [
    {
        path: "/user",
		component: UserLayout,
		redirect: '/user/login',
		hidden: true,
		children: [{
			path: "/login",
			name: 'login',
			component: () => import("@/views/user/login")
		},{
			path: "/register",
			name: 'register',
			component: () => import("@/views/user/register")
		}]
    }, {
        path: '',
        component: Layout,
        redirect: '/',
        children: [{
            path: '/',
            name: 'dashboard',
            component: () => import('@/views/dashboard'),
            meta: { title: '仪表盘', affix: true },
		},{
			path: '/center',
			name: 'center',
			component: () => import('@/views/account/center'),
			meta: { title: '个人中心' }
        }]
    }, {
		path: "/list",
		component: Layout,
		meta: { title: "list" },
		children: [{
			path: "table-list",
			component: () => import("@/views/list/TableList"),
			name: "table-list",
			meta: { title: "table-list" }
		}, {
			path: "basic-list",
			component: () => import("@/views/list/BasicList"),
			name: "basic-list",
			meta: { title: "basic-list" }
		}]
	}, {
		path: "/charts",
		component: Layout,
		meta: { title: "charts" },
		children: [{
			path: "bar",
			component: () => import("@/views/charts/bar"),
			name: "bar",
			meta: { title: "bar" }
		}, {
			path: "line",
			component: () => import("@/views/charts/line"),
			name: "line",
			meta: { title: "line" }
		}, {
			path: "pie",
			component: () => import("@/views/charts/pie"),
			name: "pie",
			meta: { title: "pie" }
		}]
	}
]

export const asyncRoutes = []

const createRouter = () => new Router({
	// mode: 'history',
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter();

export default router;