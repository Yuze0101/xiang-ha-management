import request from '../utils/request';

type pageType = {
    pageSize?: string;
    currentPage?: string;
};

type searchType = {
    pageSize?: string;
    currentPage?: string;
    val?: string;
};

type idType = {
    _id: string;
};

enum NorY {
    Y = 'Y',
    N = 'N',
}

type updateType = {
    _id: string;
    isFree: NorY;
    isHot: NorY;
    name: string;
    needTime: string;
};

export const getAllMenu = (data?: pageType) => {
    console.log(data);

    return request.post('/admin/findAllMenu', { data });
};

export const searchMenu = (data?: searchType) => {
    return request.post('/admin/searchMenu', { data });
};

export const menuDetail = (data: idType) => {
    return request.post('/admin/menuDetail', { data });
};

export const updateMenu = (data: updateType) => {
    return request.post('/admin/updateMenu', { data });
};
