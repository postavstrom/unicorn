import React, { useState } from 'react';
import { Button, Layout, Row, Col, Menu, MenuProps } from "antd";
import { DownloadOutlined, UnorderedListOutlined, FilterOutlined } from '@ant-design/icons';

const { Header } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Export to PDF',
        key: 'Export',
        icon: <DownloadOutlined/>,
    },
    {
        label: 'Notes (3)',
        key: 'Notes',
        icon: <UnorderedListOutlined/>,
    },
    {
        label: 'Filter 9+',
        key: 'Filter',
        icon: <FilterOutlined/>,
    },
];

const PagePanel = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Layout>
            <Row className="page-title" gutter={[16, 16]}>
                <Col style={{ display: "contents" }}>
                    <Header className="content-header-style" >Covid statistics</Header>
                </Col>
                <Col xs={0} sm={24} style={{ flex: 'auto' }}>
                    <div className="button-group">
                        <Button>
                            Export to PDF
                            <DownloadOutlined />
                        </Button>
                        <Button style={{ marginLeft: 8 }}>
                            Notes (3)
                            <UnorderedListOutlined />
                        </Button>
                        <Button style={{ marginLeft: 8 }}>
                            Filter 9+
                            <FilterOutlined />
                        </Button>
                    </div>
                </Col>
                <Col xs={24} sm={0} style={{ flex: 'auto'}}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="menu-style"/>
                </Col>
            </Row>
        </Layout>
    );
};

export default PagePanel;
