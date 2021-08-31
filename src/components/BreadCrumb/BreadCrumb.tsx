import React, { ReactElement } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation, Link } from 'umi';
interface Props {}
enum BreadCrumbType {
    home = '主页',
    product = '商品',
    addproduct = '添加商品',
    users = '用户',
    order = '订单',
}
type itemType = keyof typeof BreadCrumbType;
export default function BreadCrumb({}: Props): ReactElement {
    const location = useLocation();
    const { pathname } = location;
    const pathArr = pathname.split('/');
    pathArr.unshift('');
    console.log(pathname);
    const prefixPathname = '/home' + pathname;
    return (
        <Breadcrumb>
            {prefixPathname.split('/').map((item, index: number) => {
                return (
                    <Breadcrumb.Item key={index}>
                        <Link to={'/' + pathArr.slice(0, index).join('/')}>
                            {BreadCrumbType[item as itemType]}
                        </Link>
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
}
