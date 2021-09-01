import request from '../utils/request';

type searchType = {
    pageSize: string;
    currentPage: string;
    val: string;
};
export const searchMenu = (data?: searchType) => {
    return request.post('/admin/searchMenu', { data });
};

export const menuDetail = (data: { _id: string }) => {
    return request.post('/admin/menuDetail', { data });
};
