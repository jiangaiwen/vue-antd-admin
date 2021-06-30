const router = [
    { alwaysShow: null, icon: "dashboard", id: 1, isHide: null, link: "/", order: 1, parentId: null, rightCode: "dashboard", title: "仪表盘" },

    { alwaysShow: null, icon: "appstore", id: 2, isHide: null, link: "/list", order: 2, parentId: null, rightCode: "list", title: "列表" },
    { alwaysShow: null, icon: "star", id: 20, isHide: null, link: "/list/table-list", order: 1, parentId: 2, rightCode: "table-list", title: "查询表格" },
    { alwaysShow: null, icon: "star", id: 21, isHide: null, link: "/list/basic-list", order: 2, parentId: 2, rightCode: "basic-list", title: "标准表格" },

    { alwaysShow: null, icon: "pie-chart", id: 3, isHide: null, link: "/charts", order: 3, parentId: null, rightCode: "charts", title: "图表" },
    { alwaysShow: null, icon: "star", id: 30, isHide: null, link: "/charts/bar", order: 1, parentId: 3, rightCode: "bar", title: "柱状图" },
    { alwaysShow: null, icon: "star", id: 31, isHide: null, link: "/charts/line", order: 2, parentId: 3, rightCode: "line", title: "折线图" },
    { alwaysShow: null, icon: "star", id: 32, isHide: null, link: "/charts/pie", order: 3, parentId: 3, rightCode: "pie", title: "饼图" },
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