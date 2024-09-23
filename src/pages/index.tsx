
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

export default function Home() {
    return (
        <Layout>
            <Header style={headerStyle}>App title</Header>
            <Content>
                <PagePanel></PagePanel>
                <ChartCard></ChartCard>
                <ChartCard></ChartCard>
            </Content>
        </Layout>
    );
}
