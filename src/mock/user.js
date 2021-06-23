import { randomStr } from '@/utils';

const tokens = {
    'SuperAdmin': {
        token: randomStr(),
        role: 'SuperAdmin'
    },
    'Editor': {
        token: randomStr(),
        role: 'Editor'
    }
}

const users = [{
    id: 1,
    role: 'SuperAdmin',
    introduction: 'I am a super administrator',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    name: 'SuperAdmin',    // 不允许修改
    nickName: '超级管理员',
    sex: 1
}, {
    id: 2,
    role: 'Editor',
    introduction: 'I am an editor',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    name: 'Editor',
    nickName: '普通用户',
    sex: 0
}]



export default {
    'post|/api/user/login': (option) => {
        const { username } = JSON.parse(option.body)
        const token = tokens[username]
        if (!token) {
            return {
                success: false,
                data: null,
                error: '账号或密码不正确！'
            }
        }

        return {
            success: true,
            data: token,
            error: null
        }
    },
    'get|/api/user/info\.*': (option) => {
        var arr = option.url.split('?');
        var arr2 = arr[1].split('=');

        if(arr2[1].indexOf('%') != -1){
            arr2[1] = decodeURI(arr2[1])
        }
         
        const founded = users.find((v)=>v.name == arr2[1])

        if (!founded) {
            return {
                success: false,
                data: null,
                error: '用户不存在！'
            }
        }

        return {
            success: true,
            data: founded,
            error: null
        }
    },
    'get|/api/user/list': () => {
        return {
            success: true,
            data: users,
            error: null
        }
    }
}
  