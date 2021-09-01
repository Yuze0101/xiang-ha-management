import React, { ReactElement } from 'react';
import { Card, Table, Button } from 'antd';
interface Props {}
const columns = [
    {
        title: '菜名',
        dataIndex: 'name',
        key: 'name',
    },
];
export default function index({}: Props): ReactElement {
    return (
        <Card>
            <Table dataSource={[]} columns={columns} />
        </Card>
    );
}
