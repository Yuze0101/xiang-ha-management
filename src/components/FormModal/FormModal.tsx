import React, {
    ReactElement,
    useState,
    useRef,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { Modal, Form, Input, Spin, message } from 'antd';

type ruleType = {}[];

type formItemType = {
    label: string;
    name: string;
    rules: ruleType;
};
interface Props {
    title: string;
    action: (data: any) => Promise<any>;
    parentAction?: () => void;
    formItem: formItemType[];
}

/**
 * @param props.title 标题
 * @param props.formItem 表单项
 * @param ref 引用实例ref
 * @description 表单弹窗
 * @function ref.showModal 显示弹窗
 * @example
 *  const modalTitle = '注册';
 *  const formModalRef = useRef<any>();
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
    <FormModal title={modalTitle} formItem={formItem} ref={formModalRef} action={异步请求}/>;
 */

const FormModal = forwardRef((props: Props, ref): ReactElement => {
    useImperativeHandle(ref, () => ({
        showModal,
    }));
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const formEl = useRef<any>(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        setIsSpinning(true);
        const target: {} = formEl.current.getFieldsValue();
        const res = await props.action(target);
        if (res.code === 200) {
            setIsModalVisible(false);
            message.success(res.msg || '操作成功');
            typeof props.parentAction === 'function' && props.parentAction();
            closeModal();
        } else {
            message.error(res.msg || '操作失败');
        }
    };

    const handleCancel = () => {
        closeModal();
    };
    const closeModal = () => {
        setIsSpinning(false);
        setIsModalVisible(false);
    };
    return (
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
                            {item.name === 'password' ? (
                                <Input.Password />
                            ) : (
                                <Input />
                            )}
                        </Form.Item>
                    ))}
                </Form>
            </Spin>
        </Modal>
    );
});
export default FormModal;
