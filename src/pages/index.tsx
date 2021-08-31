import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import styles from './index.less';
// import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
const { SubMenu, Item } = Menu;
const { Header, Footer, Sider, Content } = Layout;
interface Props {}

export default function index(props: any): ReactElement {
    const menuData = [
        { id: 1, name: '主页', path: '/' },
        { id: 2, name: '用户管理', path: '/users' },
        { id: 3, name: '商品管理', path: '/product' },
        { id: 4, name: '订单管理', path: '/order' },
    ];
    return (
        <Layout className={styles.layout}>
            <Header>Header</Header>
            <Layout>
                <Sider>
                    <Menu mode="inline">
                        {menuData.map((item) => {
                            return (
                                <Item key={item.id}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Content className={styles.content}>
                    {/* <BreadCrumb /> */}
                    {props.children}
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
}
