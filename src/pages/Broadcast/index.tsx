import React, { ReactElement, useState, useEffect } from 'react';
import {
    Modal,
    Card,
    Table,
    message,
    Image,
    Button,
    Space,
    Popconfirm,
} from 'antd';
import {
    getAllSwiper,
    addSwiper,
    deleteSwiper,
    updateSwiper,
} from '@/apis/broadcast';
import Broadcast from '../../components/Broadcast/Broadcast';
import Broadcast1 from '../../components/Broadcast/Broadcast1';

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
    let [user, setUser] = useState({});
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
            render: (_id: string, data: any) => {
                return (
                    <Space size="large">
                        <Button
                            data-type="update"
                            type="default"
                            onClick={() => {
                                setUser(data);
                                console.log('user', user);

                                showModal1();
                            }}
                        >
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
                );
            },
        },
    ];
    type updateSwiperType = {
        _id: string;
        goods_id: string;
        image_src: string;
        navigator_url: string;
        open_type: string;
    };
    const [broadcast, setBroadcast] = useState<BrodcastType[]>([]);
    const update = async (data: updateSwiperType) => {
        const res = await updateSwiper(data);
    };
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
    //确认删除后执行删除轮播图
    const handleConfirm = async (_id: string) => {
        const res = await deleteSwiper({ _id });
        console.log(res);
        if (res.code == 200) {
            message.success(res.message);
            getAll();
        }
    };
    //生命周期
    useEffect(() => {
        getAll();
    }, []);
    //弹出对话框部分
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //弹出对话框部分
    const [isModalVisible1, setIsModalVisible1] = useState(false);

    const showModal1 = () => {
        setIsModalVisible1(true);
    };

    const handleOk1 = () => {
        setIsModalVisible1(false);
    };

    const handleCancel1 = () => {
        setIsModalVisible1(false);
    };
    return (
        <>
            <Card>
                <Table
                    title={() => (
                        <div>
                            {' '}
                            <Button
                                data-type="update"
                                onClick={showModal}
                                type="default"
                            >
                                添加轮播图
                            </Button>
                        </div>
                    )}
                    columns={columns}
                    dataSource={broadcast}
                />
            </Card>

            <Modal
                title="添加轮播图"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Broadcast
                    getAllSwiper={getAll}
                    addSwiper={addSwiper}
                    handleCancel={handleCancel}
                ></Broadcast>
            </Modal>

            <Modal
                title="修改轮播图"
                visible={isModalVisible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
                footer={null}
            >
                <Broadcast1
                    getAll={getAll}
                    user={user}
                    updateSwiper={updateSwiper}
                    handleCancel1={handleCancel1}
                ></Broadcast1>
            </Modal>
        </>
    );
}
