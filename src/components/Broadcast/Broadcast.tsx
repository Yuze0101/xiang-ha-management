import React, { ReactElement } from 'react';
import { Form, Input, InputNumber, Button, message } from 'antd';
import { getAllSwiper } from '@/apis/broadcast';

interface Props {
    addSwiper: any;
    handleCancel: any;
    getAllSwiper: any;
}
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export default function Broadcast({
    addSwiper,
    handleCancel,
    getAllSwiper,
}: Props): ReactElement {
    const onFinish = async (values: any) => {
        const res = await addSwiper(values.user);
        if (res.code == 200) {
            message.success(res.message);
            setTimeout(() => {
                handleCancel();
                getAllSwiper();
            }, 1000);
        }
    };
    return (
        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
        >
            <Form.Item
                name={['user', 'goods_id']}
                label="id"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name={['user', 'image_src']}
                label="图片地址"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name={['user', 'navigator_url']}
                label="导航地址"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name={['user', 'open_type']}
                label="打开方式"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
