import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { Card, Table, Button, message, Space, Popconfirm, Image } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import {
    delMember,
    cancleMember,
    getAllMembers,
    updateMemberToVip,
} from '@/apis/vip';
interface Props {}
type Member = {
    avatarUrl: string;
    gender: string;
    nickName: string;
    province: string;
    vip?: boolean;
    vipdate: string;
    _id: number;
    key: string;
};

export default function index({}: Props): ReactElement {
    const columns = [
        {
            title: '头像',
            dataIndex: 'avatarUrl',
            key: 'avatarUrl',
            render: (text: string) => <Image src={text}></Image>,
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            key: 'nickName',
            render: (text: string, item: Member) => (
                <Space key={item.key}>
                    {text}
                    {item.vip ? (
                        <CheckCircleOutlined style={{ color: 'green' }} />
                    ) : (
                        <CloseCircleOutlined style={{ color: 'red' }} />
                    )}
                </Space>
            ),
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            render: (text: string, item: Member) => (
                <div key={item.key}>{text === '1' ? '男' : '女'}</div>
            ),
        },
        {
            title: '省份',
            dataIndex: 'province',
            key: 'province',
            render: (text: string, item: Member) => (
                <div key={item.key}>{text}</div>
            ),
        },
        {
            title: '会员到期时间',
            dataIndex: 'vipdate',
            key: 'vipdate',
            render: (text: string, item: Member) => (
                <div key={item.key}>{text}</div>
            ),
        },
        {
            title: '操作',
            dataIndex: '_id',
            key: '_id',
            render: (_id: string) => (
                <Space size="middle">
                    <Button type="primary">充值</Button>
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
    const [memberList, setMemberList] = useState([]);
    // NOTE 异步请求
    const getMembers = async () => {
        const res = await getAllMembers();
        if (res.meta.status === 200) {
            const target = res.data.map((item: any) => {
                item.key = item._id;
                return item;
            });
            setMemberList(target);
            message.success('获取成功');
        } else {
            message.error('获取失败');
        }
    };
    // NOTE handle 部分
    useEffect(() => {
        getMembers();
    }, []);
    const handleConfirm = async (_id: string) => {
        message.info('正在删除:' + _id);
        // const res = await delMember({ _id });
        // if (res.code === 200) {
        //     message.success('删除成功');
        //     getMembers();
        // } else {
        //     message.error('删除失败');
        // }
    };
    return (
        <Card title="会员列表">
            <Table columns={columns} dataSource={memberList} />
        </Card>
    );
}
