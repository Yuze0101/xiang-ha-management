import request from '../utils/request';
/**
 * @description 获取所有轮播图
 */
export const getAllSwiper = () => {
    return request.get('/admin/getAllSwiper');
};
type SwiperType = {
    goods_id: string;
    image_src: string;
    navigator_url: string;
    open_type: string;
};
/**
 * @param {SwiperType} data
 * @param {string} data.goods_id 商品id
 * @param {string} data.image_src 图片路径
 * @param {string} data.navigator_url 导航地址
 * @param {string} data.open_type 打开方式
 * @description 添加轮播图
 */

export const addSwiper = (data: SwiperType) => {
    return request.post('/admin/addSwiper', { data });
};
/**
 * @param {string} params._id
 * @description 删除轮播图
 */
export const deleteSwiper = (params: { _id: string }) => {
    return request.get('/admin/deleteSwiper', { params });
};
type updateSwiperType = {
    _id: string;
    goods_id: string;
    image_src: string;
    navigator_url: string;
    open_type: string;
};
/**
 * @param {updateSwiperType} data
 * @param {string} data._id 轮播图id
 * @param {string} data.goods_id 商品id
 * @param {string} data.image_src 图片路径
 * @param {string} data.navigator_url 导航地址
 * @param {string} data.open_type 打开方式
 * @description 修改轮播图
 */
export const updateSwiper = (data: updateSwiperType) => {
    return request.post('/admin/updateSwiper', { data });
};
