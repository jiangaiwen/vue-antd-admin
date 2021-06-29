const router = [
    { alwaysShow: null, icon: "dashboard", id: 1, isHide: null, link: "/", order: 1, parentId: null, rightCode: "dashboard", title: "dashboard" },
    { alwaysShow: null, icon: "appstore", id: 2, isHide: null, link: "/echarts", order: 2, parentId: null, rightCode: "echarts", title: "echarts" },
    { alwaysShow: null, icon: "star", id: 3, isHide: null, link: "/echarts/bar", order: 1, parentId: 2, rightCode: "bar", title: "bar" },
    { alwaysShow: null, icon: "star", id: 4, isHide: null, link: "/echarts/line", order: 2, parentId: 2, rightCode: "line", title: "line" },
    { alwaysShow: null, icon: "star", id: 5, isHide: null, link: "/echarts/pie", order: 3, parentId: 2, rightCode: "pie", title: "pie" },
]

export default {
    'get|/api/router/list': (config) => {
        return {
            success: true,
            data: router,
            error: null
        }
    }
}