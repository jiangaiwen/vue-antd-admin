import Vue from 'vue';
import Router from 'vue-router';
import Layout from "@/layouts/index";

Vue.use(Router)

export const constantRoutes = [
    {
        path: "/login",
		name: 'login',
		component: () => import("@/views/user/login"),
		hidden: true
    }, {
        path: '',
        component: Layout,
        redirect: '/',
        children: [{
            path: '/',
            name: 'dashboard',
            component: () => import('@/views/dashboard'),
            meta: { title: '仪表盘', icon: 'dashboard', affix: true }
        }]
    }, {
		path: "/echarts",
		component: Layout,
		meta: { title: "echarts", icon: "component" },
		children: [{
			path: "bar",
			component: () => import("@/views/echarts/bar"),
			name: "bar",
			meta: { title: "bar", icon: "star" }
		}, {
			path: "line",
			component: () => import("@/views/echarts/line"),
			name: "line",
			meta: { title: "line", icon: "star" }
		}, {
			path: "pie",
			component: () => import("@/views/echarts/pie"),
			name: "pie",
			meta: { title: "pie", icon: "star" }
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