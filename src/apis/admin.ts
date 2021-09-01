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
type addType = {
    account: string;
    password: string;
    realname: string;
    telephone: string;
};
/**
 * @param {addType} data
 * @param {string} data.account 登录的账户名
 * @param {string} data.password 登录密码
 * @param {string} data.realname 用户的真实名字，用于登录后显示
 * @param {string} data.telephone 手机号码
 * @description 添加管理员
 */
export const addAdmins = (data: addType) => {
    return request.post('/admin/addAdmins', { data });
};
/**
 * @param {string} _id 管理员id
 * @description 删除管理员
 */
export const delAdmins = (data: { _id: string }) => {
    return request.post('/admin/delAdmins', { data });
};
