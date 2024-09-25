import React, { useState } from 'react';
import { Button, Layout, Row, Col, Menu, MenuProps } from "antd";
import { DownloadOutlined, UnorderedListOutlined, FilterOutlined } from '@ant-design/icons';

const { Header } = Layout;


const headerStyle: React.CSSProperties = {
    padding: 0,
    textAlign: 'left',
    color: '#425168',
    height: 48,
    fontWeight: 'bold',
    fontSize: 'large',
    lineHeight: '48px',
    backgroundColor: '#ffffff00',
};

const pageTitleStyle: React.CSSProperties = {
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    paddingLeft: '12px ',
};

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
            <Row style={pageTitleStyle} gutter={[16, 16]}>
                <Col style={{ display: "contents" }}>
                    <Header style={headerStyle}>Covid statistics</Header>
                </Col>
                <Col xs={0} sm={24} style={{ flex: 'auto' }}>
                    <div style={{ float: 'right', height: '64px', alignContent: 'center' }}>
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
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{width:'48px', borderRadius:'8px', float: 'right'}}/>
                </Col>
            </Row>
        </Layout>
    );
};

export default PagePanel;
