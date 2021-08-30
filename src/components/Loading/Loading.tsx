import React, { ReactElement } from 'react';
import { Spin } from 'antd';
interface Props {}

export default function Loading({}: Props): ReactElement {
    return <Spin size="default" tip="加载中..."></Spin>;
}
