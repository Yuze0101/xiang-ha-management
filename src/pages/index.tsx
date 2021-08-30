import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
const { SubMenu, Item } = Menu;
const { Header, Footer, Sider, Content } = Layout;
interface Props {}

export default function index(props: any): ReactElement {
    return (
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Sider>
                    <Menu mode="inline">
                        <Item key="1">1</Item>
                        <Item key="2">2</Item>
                        <Item key="3">3</Item>
                        <Item key="4">4</Item>
                        <SubMenu key="sub1" title="sub1">
                            <Item key="5">5</Item>
                            <Item key="6">6</Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="sub2">
                            <Item key="7">7</Item>
                            <Item key="8">8</Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content>
                    <BreadCrumb></BreadCrumb>
                    {props.children}
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
}
