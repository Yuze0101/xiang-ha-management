import React, { ReactElement } from 'react';
import { Breadcrumb } from 'antd';
import { useLocation } from 'umi';
interface Props {}
enum BreadCrumbType {
    home = '主页',
    product = '产品',
}
type itemType = keyof typeof BreadCrumbType;
export default function BreadCrumb({}: Props): ReactElement {
    const location = useLocation();
    const { pathname } = location;
    const prefixPathname = '/home' + pathname;
    return (
        <Breadcrumb>
            {prefixPathname.split('/').map((item, index: number) => {
                return (
                    <Breadcrumb.Item key={index}>
                        {BreadCrumbType[item as itemType]}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
}
