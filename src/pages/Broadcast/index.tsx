import React, { ReactElement, useState, useEffect } from 'react';
import { Card, Table, message, Image, Button, Space, Popconfirm } from 'antd';
import {
    getAllSwiper,
    addSwiper,
    deleteSwiper,
    updateSwiper,
} from '@/apis/broadcast';

type BrodcastType = {
    key: string;
    _id: string;
    goods_id: string;
    image_src: string;
    navigator_url: string;
    open_type: string;
};

interface Props {}

export default function index({}: Props): ReactElement {
    const columns = [
        {
            title: '绑定商品id',
            dataIndex: 'goods_id',
            key: 'goods_id',
        },
        {
            title: '图片',
            dataIndex: 'image_src',
            key: 'image_src',
            render: (src: string) => <Image width={200} src={src} alt="图片" />,
        },
        {
            title: '操作',
            dataIndex: '_id',
            key: '_id',
            render: (_id: string) => (
                <Space size="large">
                    <Button data-type="edit" type="dashed">
                        编辑
                    </Button>
                    <Button data-type="update" type="default">
                        更新
                    </Button>
                    <Popconfirm
                        placement="top"
                        onConfirm={() => {
                            handleConfirm(_id);
                        }}
                        title="您确定吗？此操作不可逆"
                        okText="确认"
                        cancelText="取消"
                    >
                        <Button data-type="delete" type="primary">
                            删除
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    const [broadcast, setBroadcast] = useState<BrodcastType[]>([]);
    const getAll = async () => {
        const res = await getAllSwiper();
        if (res.meta.status === 200) {
            const result = res.message.map((item: BrodcastType) => {
                item.key = item._id;
                return item;
            });
            setBroadcast(result);
            message.success(res.meta.msg);
        } else {
            message.error(res.meta.msg);
        }
    };
    const handleConfirm = (_id: string) => {
        message.info('Clicked on Yes.' + _id);
    };
    useEffect(() => {
        getAll();
    }, []);
    return (
        <Card>
            <Table columns={columns} dataSource={broadcast} />
        </Card>
    );
}
