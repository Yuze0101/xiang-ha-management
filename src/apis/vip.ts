import request from '../utils/request';

export const getAllMembers = () => {
    return request.get('/member/getAllMembers');
};
export const delMember = (data: { _id: string }) => {
    return request.post('/member/delMember', { data });
};
export const updateMemberToVip = (data: { _id: string; date: string }) => {
    return request.post('/member/updateMemberToVip', { data });
};
export const cancleMember = (data: { _id: string }) => {
    return request.post('/member/cancleMember', { data });
};
export const foo3 = (params: {}) => {
    return request.get('/url/zzzz', { params });
};
