import { extend } from 'umi-request';

const request = extend({
    // 在请求路径拼接内容
    // prefix: 'http://icarus-studio.top:8002',
    // 请求超时时间
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
    //   params: {
    //     token: localStorage.getItem('token'),
    //   },
    errorHandler: (error) => {
        console.log('请求失败', error);
    },
});
export default request;
