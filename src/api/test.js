import request from '../utils/request';

const url='';

// 登录
export async function users (data) {
    return request(`/test/users`, {
        method: 'get',
        data,
    });
}

// 退出
export async function logout (data) {
    return request(`/test/users/logout`, {
        method: 'delete',
        data,
    });
}

//菜单
export async function menu (data) {
    return request(`/test/menu`, {
        method: 'get',
        data,
    });
}