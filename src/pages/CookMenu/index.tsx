import React, { ReactElement, useState, useEffect, useRef } from 'react';
import {
    Card,
    Table,
    Button,
    message,
    Space,
    Switch,
    Image,
    Pagination,
    Input,
} from 'antd';
import FormModal from '@/components/FormModal/FormModal';
import {
    getAllMenu,
    searchMenu,
    menuDetail,
    updateMenu,
} from '@/apis/cookMenu';
interface Props {}

export default function index({}: Props): ReactElement {
    const [formItem, setFormItem] = useState<any>([]);
    const [modalTitle, setModalTitle] = useState<string>('新增菜谱');
    const formModalRef = useRef<any>(null);
    const columns = [
        {
            title: '菜名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '封面图片',
            dataIndex: 'coverpic',
            key: 'coverpic',
            render: (src: string) => <Image width={100} src={src} alt="图片" />,
        },
        {
            title: '所需时间',
            dataIndex: 'needtime',
            key: 'needtime',
        },
        {
            title: '是否免费',
            dataIndex: 'isFree',
            key: 'isFree',
            render: (isFree: string, data: any) => (
                <Switch
                    checkedChildren="是"
                    unCheckedChildren="否"
                    defaultChecked={isFree === 'Y'}
                    disabled
                />
            ),
        },
        {
            title: '是否热门',
            dataIndex: 'isHot',
            key: 'isHot',
            render: (isHot: string, data: any) => (
                <Switch
                    checkedChildren="是"
                    unCheckedChildren="否"
                    defaultChecked={isHot === 'Y'}
                    disabled
                />
            ),
        },
        {
            title: '操作',
            dataIndex: '_id',
            key: '_id',
            render: (_id: string) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        onClick={() => {
                            handleAdd(_id);
                        }}
                    >
                        修改菜谱
                    </Button>
                    <Button type="primary">查看详情</Button>
                </Space>
            ),
        },
    ];
    const [menuList, setMenuList] = useState();
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [currentID, setCurrentID] = useState('');
    const getMenuList = async (pageSize?: number, currentPage?: number) => {
        const res = await getAllMenu({
            pageSize: String(currentPage),
            currentPage: String(pageSize),
        });
        console.log(res);
        if (res.meta.status === 200) {
            setTotal(res.total);
            const target = res.menus.map((item: any) => {
                item.key = item._id;
                return item;
            });
            setMenuList(target);
            message.success('获取菜谱列表成功');
        } else {
            message.error('获取菜谱列表失败');
        }
    };
    useEffect(() => {
        getMenuList();
    }, []);
    const handleAdd = (id: string) => {
        setCurrentID(id);
        setFormItem([
            {
                label: '菜名',
                name: 'name',
                rules: [{ required: true, message: '请输入菜名' }],
            },
            {
                label: '菜品时间',
                name: 'needtime',
                rules: [{ required: true, message: '所需时间' }],
            },
            {
                label: '是否免费',
                name: 'isFree',
                rules: [{ required: true, message: '填写Y/N' }],
            },
            {
                label: '是否热门',
                name: 'isHot',
                rules: [{ required: true, message: '填写Y/N' }],
            },
        ]);
        formModalRef.current.showModal();
    };
    const handleChangePage = (page: number, pageSize?: number) => {
        setCurrentPage(page);
        pageSize ? setPageSize(pageSize) : null;
        if (!searchValue) {
            getMenuList(page, pageSize);
        } else {
            handleSearch(page);
        }
    };
    const handleSearch = async (page: number) => {
        const res = await searchMenu({
            pageSize: String(pageSize),
            currentPage: String(page),
            val: searchValue,
        });
        console.log(res);
        if (res.meta.status === 200) {
            setTotal(res.total);
            const target = res.menus.map((item: any) => {
                item.key = item._id;
                return item;
            });
            setMenuList(target);
            message.success('获取菜谱列表成功');
        } else {
            message.error('获取菜谱列表失败');
        }
    };
    const cardTitle = (
        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>菜谱列表</div>
            <div>
                <Input
                    type="text"
                    // value={this.state.searchDate}
                    placeholder="输入搜索内容"
                    onChange={(e) => setSearchValue(e.target.value as string)}
                    style={{
                        width: 200,
                        margin: '0 15px',
                    }}
                />
                <Button
                    type="primary"
                    onClick={() => {
                        handleSearch(1);
                    }}
                >
                    搜索
                </Button>
            </div>
        </Space>
    );
    return (
        <Card title={cardTitle}>
            <Table
                columns={columns}
                dataSource={menuList}
                pagination={{ pageSize: pageSize, position: ['none' as any] }}
            />
            <Pagination
                defaultCurrent={1}
                total={total}
                onChange={handleChangePage}
            />
            <FormModal
                title={modalTitle}
                formItem={formItem}
                ref={formModalRef}
                parentParams={currentID}
                action={updateMenu}
                parentAction={() => {
                    getMenuList(pageSize, currentPage);
                }}
            ></FormModal>
        </Card>
    );
}
