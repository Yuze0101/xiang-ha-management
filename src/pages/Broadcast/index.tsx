import React, { ReactElement, useState } from 'react';
import { Card, Table } from 'antd';

type BrodcastType = {
    _id: string;
    goods_id: string;
    image_src: string;
    navigator_url: string;
    open_type: string;
};
const columns = [
    {
        title: '商品id',
        dataIndex: 'goods_id',
        key: 'goods_id',
    },
    {
        title: '图片',
        dataIndex: 'image_src',
        key: 'image_src',
        render: (src: string) => <img src={src} alt="图片" width="100" />,
    },
    {
        title: '操作',
        dataIndex: '_id',
        key: '_id',
        render: (_id: string) => <a href={`/broadcast/${_id}`}>编辑</a>,
    },
];

interface Props {}

export default function index({}: Props): ReactElement {
    const [broadcast, setBroadcast] = useState<BrodcastType[]>([]);
    return (
        <Card>
            <Table columns={columns} dataSource={broadcast} />
        </Card>
    );
}
