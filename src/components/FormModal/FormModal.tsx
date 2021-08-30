import React, { ReactElement, useState, useRef } from 'react';
import { Modal, Button, Form, Input, Spin } from 'antd';

type ruleType = {}[];

type formItemType = {
    label: string;
    name: string;
    rules: ruleType;
};
interface Props {
    title: string;
    formItem: formItemType[];
}

/**
 * @param props {title: string, formItem: formItemType[]}
 * @description 表单弹窗
 * @example
 *  const modalTitle = '注册';
    const formItem = [
        {
            label: '用户名',
            name: 'username',
            rules: [{ required: true, message: '请输入用户名' }],
        },
        {
            label: '密码',
            name: 'password',
            rules: [{ required: true, message: '请输入密码' }],
        },
    ];
    <FormModal title={modalTitle} formItem={formItem} />;
 */

export default function FormModal(props: Props): ReactElement {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const formEl = useRef<any>(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsSpinning(true);
        console.log(formEl.current.getFieldsValue());
    };

    const handleCancel = () => {
        closeModal();
    };
    const closeModal = () => {
        setIsSpinning(false);
        setIsModalVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title={props.title}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose={true}
            >
                <Spin tip="加载中..." spinning={isSpinning}>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        ref={formEl}
                    >
                        {props.formItem.map((item: formItemType, index) => (
                            <Form.Item
                                key={index}
                                label={item.label}
                                name={item.name}
                                rules={item.rules}
                            >
                                <Input />
                            </Form.Item>
                        ))}
                    </Form>
                </Spin>
            </Modal>
        </>
    );
}
