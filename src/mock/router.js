const router1 = [
    { alwaysShow: null, icon: "icon_home", id: 1, isHide: null, link: "/", order: 1, parentId: null, rightCode: "dashboard", title: "dashboard" },
    { alwaysShow: null, icon: "icon_star", id: 2, isHide: null, link: "/dashboard/analysis", order: 1, parentId: 1, rightCode: "analysis", title: "analysis" },
    { alwaysShow: null, icon: "icon_star", id: 3, isHide: null, link: "/dashboard/monitor", order: 2, parentId: 1, rightCode: "monitor", title: "monitor" },
    { alwaysShow: null, icon: "icon_star", id: 4, isHide: null, link: "/dashboard/workplace", order: 3, parentId: 1, rightCode: "workplace", title: "workplace" }
]

const router2 = [
    { alwaysShow: null, icon: "icon_home", id: 1, isHide: null, link: "/", order: 1, parentId: null, rightCode: "dashboard", title: "dashboard" },
    { alwaysShow: null, icon: "icon_star", id: 2, isHide: null, link: "/dashboard/analysis", order: 1, parentId: 1, rightCode: "analysis", title: "analysis" },
    { alwaysShow: null, icon: "icon_star", id: 3, isHide: null, link: "/dashboard/monitor", order: 2, parentId: 1, rightCode: "monitor", title: "monitor" },
    { alwaysShow: null, icon: "icon_star", id: 4, isHide: null, link: "/dashboard/workplace", order: 3, parentId: 1, rightCode: "workplace", title: "workplace" }
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