import React, { ReactElement } from 'react';
import { Layout, Form, Input, Button, Card } from 'antd';
import styles from './index.less';
// 封装的表格模态框
import FormModal from '@/components/FormModal/FormModal';

const { Header, Footer, Content } = Layout;
interface Props {}

export default function index({}: Props): ReactElement {
    const formModalRef = React.useRef<any>(null);
    const modalTitle = '注册';
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
    const handleRegister = () => {
        formModalRef.current.showModal();
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout className={styles.layout}>
            <Header>Header</Header>
            <Content className={styles.content}>
                <Card className={styles.card} title="香哈菜谱后台管理系统">
                    <Form
                        className={styles.form}
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginRight: '20px' }}
                            >
                                登录
                            </Button>
                            {/* TODO 注册模态框 */}
                            <Button type="default" onClick={handleRegister}>
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
                <FormModal
                    title={modalTitle}
                    formItem={formItem}
                    ref={formModalRef}
                ></FormModal>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}
