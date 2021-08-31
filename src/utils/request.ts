import { extend } from 'umi-request';
const token = localStorage.getItem('token');

const request = extend({
    // 在请求路径拼接内容
    prefix: 'http://web.woniulab.com:8005',
    // 请求超时时间
    timeout: 5000,
    headers: {
        Authorization: token as string,
        'Content-Type': 'application/json',
    },
    params: {},
    errorHandler: (error) => {
        console.log('请求失败', error);
    },
});
export default request;
