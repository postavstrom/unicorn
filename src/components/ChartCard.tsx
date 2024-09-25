import { Button, Card, Col, Layout, Row} from 'antd';
import { useEffect, useState } from 'react';
import { Avatar } from "antd";
import { MessageOutlined } from '@ant-design/icons';

interface CovidDataItem {
    date: string;
    metric_value: number;
}

const ChartCard = () => {
    const [pcrData, setPcrData] = useState([]);
    const [casesData, setCasesData] = useState([]);

    useEffect(() => {
        fetch('https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay?format=json&page_size=7')
            .then((res) => res.json())
            .then((data) => {
                setPcrData(data.results)
            })
    }, []);

    useEffect(() => {
        fetch('https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_positivity7DayRolling?format=json&page_size=7')
            .then((res) => res.json())
            .then((data) => {
                setCasesData(data.results)
            })
    }, []);

    import('@antv/g2').then(({ Chart }) => {
        const pcrChart  = new Chart({
            container: 'pcr-chart-container',
            autoFit: true,
            height: 400,
        });
        pcrChart .data(
            pcrData.map((item: CovidDataItem) => ({
                date: item.date,
                value: item.metric_value,
            }))
        );

        pcrChart .interval().encode('x', 'date').encode('y', 'value').encode('color', 'date');
        pcrChart .render();
    });

    import('@antv/g2').then(({ Chart }) => {
        const casesChart = new Chart({
            container: 'cases-chart-container',
            autoFit: true,
            height: 400,
        });

        const positivityData = casesData.map((item: CovidDataItem) => ({
            name: item.date,
            value: item.metric_value,
        }));

        casesChart.coordinate({ type: 'radial', endAngle: Math.PI });

        casesChart
            .interval()
            .data(positivityData)
            .encode('x', 'name')
            .encode('y', 'value')
            .scale('y', { type: 'sqrt' })
            .encode('color', 'name')
            .encode('size', 40)
            .style('radius', 20)
            .label({
                text: '',
                position: 'outside',
                autoRotate: true,
                rotateToAlignArc: true,
                dx: 4,
            })
            .axis('x', { title: false })
            .axis('y', false)
            .animate('enter', { type: 'waveIn', duration: 1000 });

        casesChart.render();

    });

    return (
        <Layout>
            <Row gutter={[16, 16]}>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                >
                    <Card title="Number of PCR COVID-19 tests per day">
                        <div id="pcr-chart-container" style={{ width: '100%' }}></div>
                        <Row style={{justifyContent:'space-between'}}>
                            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                            <Button shape={'circle'} type={'text'}>
                                3
                                <MessageOutlined style={{ fontSize: 20 }} />
                            </Button>
                        </Row>
                    </Card>
                </Col>
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 12 }}
                    xl={{ span: 12 }}
                >
                    <Card title="Percentage of PCR COVID-19 tests with a positive result">
                        <div id="cases-chart-container" style={{ width: '100%' }}></div>
                        <Row style={{justifyContent:'space-between'}}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <Button shape={'circle'} type={'text'}>
                                3
                                <MessageOutlined style={{ fontSize: 20 }} />
                            </Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Layout>
    );
};

export default ChartCard