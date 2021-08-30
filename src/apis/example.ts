import request from '../utils/request';

export const foo1 = () => {
    return request.post('/url/xxx');
};
export const foo2 = (data: {}) => {
    return request.post('/url/yyyy', { data });
};
export const foo3 = (params: {}) => {
    return request.get('/url/zzzz', { params });
};
