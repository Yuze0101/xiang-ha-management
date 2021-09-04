import React, { ReactElement, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';

interface Props {
    updateSwiper: any;
    handleCancel1: any;
    user: object;
    getAll: any;
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
    updateSwiper,
    getAll,
    handleCancel1,
    user,
}: Props): ReactElement {
    const [form] = Form.useForm();
    form.setFieldsValue({ user });
    const onFinish = async (values: any) => {
        values.user._id = user._id;
        values.goods_id = values.goods_id + '';
        const res = await updateSwiper(values.user);
        if (res.code == 200) {
            message.success(res.msg);
            setTimeout(() => {
                handleCancel1();
                getAll();
            }, 1000);
        }
    };
    return (
        <Form
            {...layout}
            form={form}
            name="nest-messages"
            initialValues={user}
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
