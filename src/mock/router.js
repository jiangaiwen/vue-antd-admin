const router1 = [
    { alwaysShow: null, icon: "icon_home", id: 1, isHide: null, link: "/", order: 1, parentId: null, rightCode: "dashboard", title: "dashboard" },
    { alwaysShow: null, icon: "icon_home", id: 2, isHide: null, link: "/echarts", order: 2, parentId: null, rightCode: "echarts", title: "echarts" },
    { alwaysShow: null, icon: "icon_star", id: 3, isHide: null, link: "/echarts/bar", order: 1, parentId: 2, rightCode: "bar", title: "bar" },
    { alwaysShow: null, icon: "icon_star", id: 4, isHide: null, link: "/echarts/line", order: 2, parentId: 2, rightCode: "line", title: "line" },
    { alwaysShow: null, icon: "icon_star", id: 5, isHide: null, link: "/echarts/pie", order: 3, parentId: 2, rightCode: "pie", title: "pie" },
]

const router2 = [
    { alwaysShow: null, icon: "icon_home", id: 1, isHide: null, link: "/", order: 1, parentId: null, rightCode: "dashboard", title: "dashboard" },
    { alwaysShow: null, icon: "icon_home", id: 2, isHide: null, link: "/echarts", order: 2, parentId: null, rightCode: "echarts", title: "echarts" },
    { alwaysShow: null, icon: "icon_star", id: 3, isHide: null, link: "/echarts/bar", order: 1, parentId: 2, rightCode: "bar", title: "bar" },
    { alwaysShow: null, icon: "icon_star", id: 4, isHide: null, link: "/echarts/line", order: 2, parentId: 2, rightCode: "line", title: "line" },
    { alwaysShow: null, icon: "icon_star", id: 5, isHide: null, link: "/echarts/pie", order: 3, parentId: 2, rightCode: "pie", title: "pie" },
]

export default {
    'get|/api/router/list': (config) => {
        // const { roleCode } = JSON.parse(config.body)
        
        // var dataList = null
        
        // if(roleCode == 'admin'){
        //     dataList = router1
        // }else{
        //     dataList = router2
        // }
 
        return {
            success: true,
            data: router1,
            error: null
        }
    }
}