import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import { Link, history } from 'umi';
import styles from './index.less';
// import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
const { SubMenu, Item } = Menu;
const { Header, Footer, Sider, Content } = Layout;
interface Props {}

export default function index(props: any): ReactElement {
    const { pathname } = history.location;
    const menuData = [
        { name: '主页', path: '/' },
        { name: '管理员', path: '/admin' },
        { name: '轮播图管理', path: '/broadcast' },
        { name: '商品管理', path: '/product' },
        { name: '订单管理', path: '/order' },
    ];
    return (
        <Layout className={styles.layout}>
            <Header>Header</Header>
            <Layout>
                <Sider>
                    <Menu mode="inline" selectedKeys={[pathname]}>
                        {menuData.map((item) => {
                            return (
                                <Item key={item.path}>
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
