import request from '../utils/request';

type loginType = {
    account: string;
    password: string;
};
/**
 * @param {loginType} data
 * @returns {string} token
 * @description 登录接口
 */
export const login = (data: loginType) => {
    return request.post('/admin/login', { data });
};

export const getAllAdmins = () => {
    return request.get('/admin/getAllAdmins');
};
export const foo3 = (params: {}) => {
    return request.get('/url/zzzz', { params });
};
