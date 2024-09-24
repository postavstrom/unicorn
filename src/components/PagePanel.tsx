import { Button, Layout, Row, Col } from "antd";
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

const pageButtonsStyle: React.CSSProperties = {
    textAlign: 'end',
    marginLeft: 'auto',
};


const PagePanel = () => {
    return (
        <Layout>
            <Row style={pageTitleStyle} gutter={[16, 16]}>
                <Col flex="1" style={{display: "contents"}}>
                    <Header style={headerStyle}>Covid statistics</Header>
                </Col>
                <Col flex="none">
                    <div style={pageButtonsStyle}>
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
            </Row>
        </Layout>
    );
}

export default PagePanel;