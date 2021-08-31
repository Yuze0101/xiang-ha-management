import React, { ReactElement, useState, useEffect } from 'react';
import { Card, Table, Button, message } from 'antd';
import { getAllAdmins } from '@/apis/admin';
interface Props {}
type Admin = {
    _id: string;
    key: string;
    account: string;
    password: string;
    realname: string;
    telephone: string;
    status: number;
};
const columns = [
    {
        title: '账户名',
        dataIndex: 'account',
        key: 'account',
        render: (text: string, item: Admin) => <div key={item.key}>{text}</div>,
    },
    {
        title: '联系方式',
        dataIndex: 'telephone',
        key: 'telephone',
        render: (text: string, item: Admin) => <div key={item.key}>{text}</div>,
    },
    {
        title: '操作',
        key: 'action',
        render: () => <Button type="primary">编辑</Button>,
    },
];

export default function index({}: Props): ReactElement {
    const [adminList, setAdminList] = useState([]);
    const getAdminList = async () => {
        const res = await getAllAdmins();
        if (res.code === 200) {
            const target = res.message.map((item: Admin) => {
                item.key = item._id;
                return item;
            });
            setAdminList(target);
            message.success('获取管理员列表成功');
        } else {
            message.error('获取管理员列表失败');
        }
    };
    useEffect(() => {
        getAdminList();
    }, []);
    return (
        <Card title="管理员列表">
            <Table columns={columns} dataSource={adminList} />
        </Card>
    );
}
