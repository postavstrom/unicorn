import { useState, useEffect } from 'react';
import { Layout } from "antd";
import PagePanel from "@/components/PagePanel";
import ChartCard from "@/components/ChartCard";


const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'left',
    color: '#425168',
    height: 64,
    fontWeight: 'bold',
    fontSize: 'large',
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#ffffff',
};

const contentStyle: React.CSSProperties = {
    padding: '16px 48px',
    minHeight: 'calc(100vh - 64px)',
};

export default function Home() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <Layout>
            <Header className="header-style" >Unicorn healthcare</Header>
            <Content className="content-style">
                <PagePanel />
                <ChartCard />
            </Content>
        </Layout>
    );
}