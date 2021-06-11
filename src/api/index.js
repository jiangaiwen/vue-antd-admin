import { http } from "@/utils/request";

// 如果是线上环境添加api地址 Vue.prototype.BASE_URL

const user = {
    // 获取用户列表
    getUserList(params){
        return http("/api/user/list", "get", params);
    }
}

// 用户菜单
export function getRouter() {
    return http('/api/router/list','get')
}


// 登录
export function login(params) {
    return http('/api/user/login', 'post', params)

}

// 用户信息
export function getUserInfo(params) {
    return http("/api/user/info", "get", params)
}

export default {
    user
}