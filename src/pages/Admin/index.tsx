import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { Card, Table, Button, message, Space, Popconfirm } from 'antd';
import FormModal from '@/components/FormModal/FormModal';

import { getAllAdmins, addAdmins, delAdmins } from '@/apis/admin';
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

export default function index({}: Props): ReactElement {
    const [formItem, setFormItem] = useState<any>([]);
    const [modalTitle, setModalTitle] = useState<string>('添加管理员');
    const formModalRef = useRef<any>(null);
    const columns = [
        {
            title: '账户名',
            dataIndex: 'account',
            key: 'account',
            render: (text: string, item: Admin) => (
                <div key={item.key}>{text}</div>
            ),
        },
        {
            title: '联系方式',
            dataIndex: 'telephone',
            key: 'telephone',
            render: (text: string, item: Admin) => (
                <div key={item.key}>{text}</div>
            ),
        },
        {
            title: '真实姓名',
            dataIndex: 'realname',
            key: 'realname',
            render: (text: string, item: Admin) => (
                <div key={item.key}>{text}</div>
            ),
        },
        {
            title: '操作',
            dataIndex: '_id',
            key: '_id',
            render: (_id: string) => (
                <Space size="middle">
                    <Button type="primary">编辑</Button>
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
    const [adminList, setAdminList] = useState([]);
    // NOTE 异步请求
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
    // NOTE handle 部分
    const handleAdd = () => {
        setFormItem([
            {
                label: '用户名',
                name: 'account',
                rules: [{ required: true, message: '请输入用户名' }],
            },
            {
                label: '密码',
                name: 'password',
                rules: [{ required: true, message: '请输入密码' }],
            },
            {
                label: '真实姓名',
                name: 'realname',
                rules: [{ required: true, message: '请输入姓名' }],
            },
            {
                label: '手机号码',
                name: 'telephone',
                rules: [{ required: true, message: '请输入手机号' }],
            },
        ]);
        formModalRef.current.showModal();
    };
    useEffect(() => {
        getAdminList();
    }, []);
    const handleConfirm = async (_id: string) => {
        const res = await delAdmins({ _id });
        if (res.code === 200) {
            message.success('删除成功');
            getAdminList();
        } else {
            message.error('删除失败');
        }
    };
    const cardTitle = (
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>管理员列表</div>
            <Button type="primary" onClick={handleAdd}>
                添加管理员
            </Button>
        </Space>
    );
    return (
        <Card title={cardTitle}>
            <Table
                columns={columns}
                dataSource={adminList}
                pagination={{ pageSize: 5 }}
            />
            <FormModal
                title={modalTitle}
                formItem={formItem}
                ref={formModalRef}
                action={addAdmins}
                parentAction={getAdminList}
            ></FormModal>
        </Card>
    );
}
